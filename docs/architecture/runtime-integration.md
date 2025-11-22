---
title: Runtime Integration (LLMs, MCP, APIs)
description: How to integrate the Brando (Brand Oracle) schema into LLM runtimes, MCP servers, and API-based Brand Operating Systems.
---

# Runtime integration (LLMs, MCP, APIs)

Brando vocab v1.3 is designed to be **consumed at runtime** by:

- LLM-based applications (chatbots, copilots, agents),
- MCP servers and tools,
- API layers in a Brand Operating System (Brand OS),
- search / RAG / retrieval pipelines.

This page explains how to:

- resolve `brando:Brand` and `brando:Context` for a request,
- gather tokens and policies as a **runtime configuration**,
- plug that configuration into:
    - LLM prompts and guard rails,
    - MCP tools,
    - API workflows,
- track enforcement and observability.

---

## 1. Core runtime pattern

At a high level, every integration follows the same pattern:

1. **Input comes in**

   Example inputs:

   - `brandId` – which `brando:Brand` to use.
   - `contextId` – which `brando:Context` node applies (or parameters that resolve one).
   - `userPersona` / `segment` – may refine context selection.
   - `productCategory` / `GTIN` – optional, for category-level rules.
   - channel metadata – e.g. `"chatbot"`, `"support"`, `"email"`.

2. **Brand OS resolves graph nodes**

   From the Brand Knowledge Graph (JSON-LD / graph DB):

   - load the `brando:Brand` node with that `@id`,
   - load associated:
   
    - `brando:Context`,
    - `brando:VerbalToken` / `VisualToken` / `AudioToken`,
    - `brando:Policy`,
    - `brando:BrandedCategory`,
    - `brando:Campaign`,
    - `brando:AutomationRule`.

3. **Assemble a runtime configuration**

   Conceptually:

```
   interface RuntimeBrandConfig {
     brand: Brand;
     context: Context;
     verbalTokens: VerbalToken[];
     visualTokens: VisualToken[];
     audioTokens: AudioToken[];
     policies: Policy[];
     campaigns: Campaign[];
     categories: BrandedCategory[];
     automationRules: AutomationRule[];
   }
```

4. **Adapter converts configuration into runtime-native structures**

    * For chat models: system messages, tools, safety settings.
    * For MCP tools: parameters and tool schema.
    * For APIs: request/response decorators, policy middleware.

5. **Observability**

    * Log which Brando nodes were used for each interaction.
    * Log which policies / enforcement levels applied.
    * Log which automation rules fired.

The sections below show concrete variants for LLMs, MCP, and APIs.

---

## 2. LLM integration pattern

### 2.1 System prompt construction

From a `RuntimeBrandConfig`, you typically build a **system message** that encodes:

* brand identity (`brando:missionStatement`, `brando:coreValues`, `brando:brandNarrative`),
* context (`brando:domainContext`, `brando:audienceSegment`, `brando:audiencePersona`),
* verbal expression (`brando:toneOfVoice`, `brando:dialogueStyle`, `brando:writingStyle`, `brando:approvedTerms` / `brando:prohibitedTerms`),
* governance (`brando:guardRails`, `brando:mustDos`, `brando:mustNotDos`, `brando:refusalStrategies`).

Non-normative example system prompt (derived from Brando nodes):

```text
You are Northstar Bank's assistant.

Brand identity:
- Mission: Financial clarity with absolute trust.
- Vision: Help people feel in control of their financial future.
- Core values: Clarity over complexity; Do the right thing; Long-term alignment with customers.

Context:
- Channel: Chatbot on the public website (UK region).
- Audience: Retail banking customers and prospects researching savings accounts.
- Persona: Everyday saver.

Tone of voice:
- Reassuring and efficient. Focus on clear next steps.
- Use second person; acknowledge emotion, then move to options.
- Short paragraphs, concrete steps, minimal jargon.

Approved terms:
- interest rate; fees; savings goals

Prohibited terms:
- get rich quick; guaranteed returns

Guard rails (mandatory):
- Do not output hate speech, harassment, or discriminatory language.
- Do not claim features or capabilities the brand does not provide.
- Do not provide personalised investment advice.

Refusal strategies:
- Explain that you cannot provide personalised investment advice.
- Offer to connect the user with a regulated advisor.

You must follow these constraints strictly.
```

You generate this text directly from the Brando graph; you do **not** hardcode it in prompts.

### 2.2 Example: JSON-LD → runtime config

Example JSON-LD (simplified):

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@graph": [
    {
      "@id": "https://example.com/brand/northstar",
      "@type": "brando:Brand",
      "schema:name": "Northstar Bank",
      "brando:missionStatement": "Financial clarity with absolute trust.",
      "brando:coreValues": [
        "Clarity over complexity",
        "Do the right thing",
        "Long-term alignment with customers"
      ],
      "brando:hasContext": {
        "@id": "https://example.com/brand/northstar/context/retail-chatbot"
      },
      "brando:hasPolicy": {
        "@id": "https://example.com/brand/northstar/policies/global-brand-safety"
      }
    },
    {
      "@id": "https://example.com/brand/northstar/context/retail-chatbot",
      "@type": "brando:Context",
      "brando:audienceSegment": [
        "Retail banking customers",
        "Prospects researching savings accounts"
      ],
      "brando:audiencePersona": [
        "Everyday saver"
      ],
      "brando:domainContext": {
        "channel": "chatbot",
        "surface": "public-website",
        "region": "UK"
      },
      "brando:usesVerbalToken": {
        "@id": "https://example.com/brand/northstar/tokens/verbal/support"
      }
    },
    {
      "@id": "https://example.com/brand/northstar/tokens/verbal/support",
      "@type": "brando:VerbalToken",
      "brando:toneOfVoice": "Reassuring and efficient. Focus on clear next steps.",
      "brando:dialogueStyle": "Use second person, acknowledge emotion, then move to options.",
      "brando:writingStyle": "Short paragraphs, concrete steps, minimal jargon.",
      "brando:approvedTerms": [
        "interest rate",
        "fees",
        "savings goals"
      ],
      "brando:prohibitedTerms": [
        "get rich quick",
        "guaranteed returns"
      ]
    },
    {
      "@id": "https://example.com/brand/northstar/policies/global-brand-safety",
      "@type": "brando:Policy",
      "brando:enforcementLevel": "mandatory",
      "brando:riskTag": [
        "brand-safety"
      ],
      "brando:guardRails": [
        "Do not output hate speech, harassment, or discriminatory language.",
        "Do not claim features or capabilities the brand does not provide."
      ],
      "brando:refusalStrategies": [
        "Explain that you cannot provide personalised investment advice.",
        "Offer to connect the user with a regulated advisor."
      ],
      "brando:retrievableInLLM": true
    }
  ]
}

```

Your runtime:

1. Loads this graph.
2. Resolves the relevant Brand + Context.
3. Collects the VerbalToken and Policy nodes.
4. Builds a system prompt or configuration object for the LLM API.

---

## 3. MCP integration pattern

Brando works naturally with **MCP** (Model Context Protocol) because MCP servers are essentially structured tool APIs for LLMs.

Typical use:

* A **Brand OS MCP server** exposes Brando-derived tools:

    * `get_brand_config(brandId, contextId)`
    * `list_policies(brandId, filters)`
    * `get_tokens(brandId, contextId, modality)`
* The LLM client calls these tools to fetch **structured brand guidance** mid-conversation.

### 3.1 Mapping Brando types to MCP tools

Examples (non-normative):

* `get_brand_context`
    * Inputs:

        * `brandId` (string)
        * `contextId` (string, optional)

    * Output:

        * JSON with Brand + Context + tokens + policies (a `RuntimeBrandConfig`-style object).

* `list_policies`

    * Inputs:

        * `brandId`
        * optional `riskTag`, `enforcementLevel`
    * Output:

        * Array of policy nodes (or policy summaries).

* `explain_policy`

    * Inputs:
    
        * `policyId`
  
    * Output:

        * Human-readable explanation derived from `brando:guardRails`, `brando:riskScenarios`, etc.

These tools internally query the Brand Knowledge Graph and return structured results based on Brando vocab.

### 3.2 Using `externalSystem` and `externalSystemId`

If your Brand OS is MCP-enabled, you can describe that relationship in Brando itself:

```jsonld
{
  "@id": "https://example.com/brand/northstar",
  "@type": "brando:Brand",
  "schema:name": "Northstar Bank",
  "brando:externalSystem": {
    "@id": "https://example.com/integrations/brand-os-mcp"
  },
  "brando:externalSystemId": "northstar_brand"
}
```

Separate `schema:SoftwareApplication` node:

```jsonld
{
  "@id": "https://example.com/integrations/brand-os-mcp",
  "@type": "schema:SoftwareApplication",
  "schema:name": "Northstar Brand OS MCP Server",
  "schema:applicationCategory": "Brand Operating System"
}
```

This allows:

* human readers to see which MCP server powers this brand,
* automated tooling to discover integration endpoints based on Brando metadata.

---

## 4. API integration pattern

In many organisations, the Brand OS is exposed as a **REST or GraphQL API**.

Typical responsibilities for that API:

* Provide a simple call to get **all relevant Brando nodes for a request**.
* Provide lookup endpoints for policies, categories, campaigns.
* Encapsulate governance logic (e.g. enforcement level rules).

### 4.1 Example REST endpoints (non-normative)

* `GET /brand-config?brandId=...&contextId=...`

    * Returns a `RuntimeBrandConfig` object.

* `GET /policies?brandId=...&riskTag=...`

    * Returns a list of `brando:Policy` nodes or summaries.

* `POST /automation/evaluate`

  * Evaluates `brando:AutomationRule` nodes and returns actions to apply.

These endpoints internally:

* query the Brando graph,
* interpret `brando:effectiveDuring`, `brando:enforcementLevel`, `brando:riskTag`,
* possibly call external monitoring endpoints described by `brando:dataSource`.

---

## 5. RAG and retrieval integration

Brando interacts with RAG and search in two main ways:

1. **High-trust structured layer**

   * Brando nodes (Brand, Context, Policy, Tokens) are treated as **trusted, prescriptive data**.
   * They can be stored in a vector database, but should be:
    * curated,
    * tagged with `brando:retrievableInLLM` and `brando:visibilityRating`,
    * indexed separately from unstructured documents.

2. **Metadata for unstructured content**

   * Brando properties can be used as **metadata tags** on content in a RAG corpus:
    * `brando:hasProductCategory`,
    * `brando:riskTag`,
    * `brando:campaignName`, etc.

### 5.1 Example: Policy node in RAG index

```jsonld
{
  "@id": "https://example.com/brand/northstar/policies/regulated-claims-uk",
  "@type": "brando:Policy",
  "brando:enforcementLevel": "mandatory",
  "brando:riskTag": [
    "financial-regulation",
    "consumer-protection"
  ],
  "brando:guardRails": [
    "Do not promise guaranteed investment returns.",
    "Do not provide personalised investment advice."
  ],
  "brando:refusalStrategies": [
    "Explain that you cannot provide personalised investment advice.",
    "Offer to connect the user with a regulated advisor."
  ],
  "brando:retrievableInLLM": true,
  "brando:embeddingQuality": "high"
}
```

Your RAG pipeline can:

* embed this node (or a human-readable projection),
* index `riskTag` and `enforcementLevel` as metadata,
* restrict retrieval to nodes where `retrievableInLLM` is `true`.

---

## 6. Enforcement and automation

Runtime integration is where **enforcement** happens.

### 6.1 Enforcement levels

Policies and automation rules have:

* `brando:enforcementLevel` – e.g. `"mandatory"`, `"advisory"`, `"conditional"`.
* `brando:riskTag` – risk domains affected (e.g. `"brand-safety"`, `"financial-regulation"`).

Implementation guidance (non-normative):

* For `"mandatory"`:
    * enforce before generation where possible,
    * enforce after generation (output filtering),
    * log violations and treat as incidents.

* For `"advisory"`:
    * present guidance to the model,
    * log deviations for analysis, but do not necessarily block outputs.

* For `"conditional"`:
    * tie enforcement to `brando:AutomationRule` and local context logic.

### 6.2 Automation rules at runtime

Automation rules (`brando:AutomationRule`) link runtime metrics to policy behaviour.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/automation/rag-high-risk-monitor",
  "@type": "brando:AutomationRule",
  "brando:triggerType": "metric-threshold",
  "brando:monitoredMetric": {
    "name": "unsafe_output_rate",
    "threshold": 0.05,
    "operator": ">",
    "window": "7d"
  },
  "brando:dataSource": "https://monitoring.example.com/api/metrics/unsafe_output_rate",
  "brando:automationAction": {
    "actionType": "increase_enforcement",
    "targetPolicies": [
      "https://example.com/brand/northstar/policies/global-brand-safety"
    ],
    "newLevel": "mandatory",
    "notify": [
      "risk-team@northstar.example"
    ]
  },
  "brando:enforcementLevel": "mandatory",
  "brando:riskTag": [
    "brand-safety",
    "llm-guardrails"
  ]
}
```

A runtime evaluator:

1. Fetches metric data from `dataSource`.
2. Parses `monitoredMetric` and checks the condition.
3. If triggered:

    * parses `automationAction`,
    * updates enforcement level of target policies in its configuration,
    * notifies governance teams.

The **Brand OS** is responsible for that evaluation; Brando just provides the structured description.

---

## 7. Observability and audit

To be governance-ready, runtime integrations should record:

* which `brando:Brand`, `brando:Context`, `brando:Policy`, `brando:AutomationRule` nodes were in effect,
* what `enforcementLevel` and `riskTag` values applied,
* which `AutomationRule` nodes fired and what actions were applied.

This enables:

* after-the-fact explanations: “Why did the AI answer in this way?”
* risk reporting: “How many policies are currently mandatory for this brand?”
* change tracking: “Which enforcement changes came from automation vs human edits?”

Brando vocab provides the structure; your observability stack records the events.

---

## 8. Summary

At runtime, Brando vocab v1.3 is used to:

* **Resolve** relevant Brand, Context, Tokens, Policies, Categories, Campaigns, and AutomationRules.
* **Assemble** a `RuntimeBrandConfig` for the current interaction.
* **Adapt** that configuration into:

    * LLM prompts and guard rails,
    * MCP tools,
    * API middleware,
    * RAG filters.

* **Enforce** behaviour based on `enforcementLevel` and `riskTag`.
* **Automate** adjustments via `AutomationRule` and live metrics.
* **Audit** which brand instructions were in place for each AI decision.

For related detail:

* [Brand Operating System architecture](brand-os.md)
* [Brand portfolios & architecture](brand-architecture.md)
* [JSON-LD context](../spec/jsonld-context.md)
* [YAML schema profile](../spec/yaml-profile.md)
* [TypeScript types](../spec/typescript-model.md)
