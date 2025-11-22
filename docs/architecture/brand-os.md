---
title: Brand Operating System Architecture
description: Conceptual and technical architecture for a Brand Operating System built on the Brando (Brand Oracle) schema and vocabulary.
---

# Brand Operating System architecture

A **Brand Operating System (Brand OS)** is the orchestration layer that keeps your brand:

- consistent,
- compliant,
- and adaptive

across **LLMs, agents, design tools, and products**.

Brando vocab v1.3 provides the **data model** for that OS:

- `brando:Brand` – core identity and defaults
- `brando:Context` – situational modifiers (channel, audience, region, goal)
- `brando:VerbalToken` / `VisualToken` / `AudioToken` – expression tokens by modality
- `brando:Policy` – governance and guard rails
- `brando:BrandedCategory` – product/category alignment and vocabulary
- `brando:Campaign` – time-bound overlays
- `brando:AutomationRule` – event- and metric-driven behaviour changes

This page describes how those types fit into a **Brand OS architecture**.

---

## 1. Conceptual architecture

At a high level, a Brand OS has four layers:

1. **Source-of-truth layer**  
    - Brando JSON-LD / YAML files
    - Brand Knowledge Graph / triple store
    - Links into DAM, PIM, CMS, brand portals

2. **Governance & inference layer**  
    - Policy resolution (which `brando:Policy` applies?)
    - Automation rules (`brando:AutomationRule`)
    - Enforcement level and risk tagging

3. **Runtime integration layer**  
    - Adapters for:
        - LLMs and agents
        - MCP servers / tools
        - internal and external APIs
    - Prompt assembly and constraint injection

4. **Applications & channels**  
    - Chatbots, copilots, assistants
    - Web and app surfaces
    - Design and content tools

A simplified view:

```text
+----------------------------+
|   Applications & Channels  |
|  (chatbots, UIs, tools)    |
+--------------+-------------+
               |
               v
+--------------+-------------+
| Runtime Integration Layer  |
|  - LLM / Agent adapters    |
|  - MCP / API glue          |
+--------------+-------------+
               |
               v
+--------------+-------------+
| Governance & Inference     |
|  - Policy resolution       |
|  - Automation rules        |
+--------------+-------------+
               |
               v
+--------------+-------------+
| Source of Truth            |
|  - Brando JSON-LD/YAML     |
|  - Brand Knowledge Graph   |
+----------------------------+
```

Brando vocab sits in the **bottom two layers**:

* it defines the **data structures**,
* and gives the governance layer a shared language for policies, tokens, and contexts.

---

## 2. Brando types as the Brand OS data model

The Brando schema classes correspond closely to typical Brand OS concepts:

| Brando type              | Brand OS role                                                                  |
| ------------------------ | ------------------------------------------------------------------------------ |
| `brando:Brand`           | Top-level brand entity (group, master brand, sub-brand, region, product brand) |
| `brando:Context`         | Situation where behaviour changes (channel, audience, task, jurisdiction)      |
| `brando:VerbalToken`     | Voice/tone/vocabulary presets                                                  |
| `brando:VisualToken`     | Visual system / design tokens                                                  |
| `brando:AudioToken`      | Sonic identity                                                                 |
| `brando:Policy`          | Governance objects (brand/legal/compliance rules)                              |
| `brando:BrandedCategory` | Brand-specific categories linked to GS1, UNSPSC, Google Product Taxonomy       |
| `brando:Campaign`        | Time-bound overlays for seasonal or strategic campaigns                        |
| `brando:AutomationRule`  | Metric- or event-driven automation to adjust behaviour or enforcement          |

In practice, a Brand OS will:

* store these as nodes in a knowledge graph or config store,
* index them by `@id`,
* use the relationships (`brando:hasContext`, `brando:usesVerbalToken`, `brando:hasPolicy`, etc.) to assemble runtime configurations.

---

## 3. Core Brand OS operations

A Brand OS repeatedly performs a small set of operations:

1. **Resolve brand and context**

    * Identify which `brando:Brand` applies (e.g. “Northstar Bank UK”).
    * Resolve a `brando:Context` (e.g. “retail chatbot, UK, logged-in customer”).

2. **Gather tokens and policies**

    * Walk relationships:

        * `brando:usesVerbalToken`
        * `brando:usesVisualToken`
        * `brando:usesAudioToken`
        * `brando:hasPolicy`
        * `brando:hasProductCategory`
        * `brando:hasCampaign`

    * Apply inheritance rules:

        * `brando:inheritsTokens`
        * `brando:inheritsPolicies`

3. **Evaluate automation rules**

   * For relevant `brando:AutomationRule`:

    * check `brando:triggerType`, `brando:monitoredMetric`, `brando:dataSource`,
    * decide whether actions in `brando:automationAction` should fire.

4. **Materialise runtime configuration**

   * Build application-specific artefacts:

    * system prompts and style blocks,
    * policy snippets/guard rails,
    * links to assets (`brando:downloadableFile`, `brando:supportingFile`),
    * integration IDs (`brando:externalSystem`, `brando:externalSystemId`).

5. **Enforce and log**

   * Use `brando:enforcementLevel` and `brando:riskTag` to determine:

    * what is mandatory vs advisory,
    * how to log or escalate violations.

---

## 4. Example: Single-request flow

A typical request flow for a chatbot or copilot using Brando looks like:

1. **Application identifies scope**

   Inputs might include:

   * `brandId`: `"https://example.com/brand/northstar"`
   * `contextId`: `"https://example.com/brand/northstar/context/retail-chatbot"`
   * `userPersona`: `"Everyday saver"`
   * `productCategory`: `"https://example.com/brand/northstar/categories/savings-accounts"`

2. **Brand OS resolves graph nodes**

   The Brand OS looks up:

   * `brando:Brand` by `@id`
   * `brando:Context` for the chatbot
   * any `brando:BrandedCategory` matching the product
   * all applicable `brando:Policy` and `brando:AutomationRule` nodes

3. **Brand OS assembles a runtime configuration**

   Conceptually:

   ```ts
   interface RuntimeBrandConfig {
     brand: Brand;
     context: Context;
     verbalTokens: VerbalToken[];
     visualTokens: VisualToken[];
     audioTokens: AudioToken[];
     policies: Policy[];
     campaigns: Campaign[];
     automationRules: AutomationRule[];
     categories: BrandedCategory[];
   }
   ```

4. **Adapter converts it to LLM-specific representation**

   For example, for an OpenAI-style chat model:

   * one system message that embeds:

    * brand mission, values, narrative,
    * current context description,
    * tone of voice and vocabulary rules,
    * guard rails and refusal strategies.

5. **During and after generation**

   * Some policies may be enforced pre-prompt (e.g. blocked topics).
   * Some may be enforced post-hoc (e.g. check outputs against `brando:prohibitedTerms`).
   * Automation rules may adjust enforcement levels over time based on metrics.

---

## 5. Source-of-truth: Brand Knowledge Graph

Brando vocab v1.3 is designed to be published as a **Brand Knowledge Graph**:

* in JSON-LD files (web-visible or internal),
* in a graph database or triplestore,
* in a document store with graph-like references.

Typical structure:

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/",
    "gs1": "https://ref.gs1.org/voc/"
  },
  "@graph": [
    {
      "@id": "https://example.com/brand/northstar",
      "@type": "brando:Brand",
      "schema:name": "Northstar Bank",
      "brando:hasContext": {
        "@id": "https://example.com/brand/northstar/context/retail-chatbot"
      },
      "brando:hasProductCategory": {
        "@id": "https://example.com/brand/northstar/categories/savings-accounts"
      },
      "brando:hasPolicy": {
        "@id": "https://example.com/brand/northstar/policies/global-brand-safety"
      }
    },
    {
      "@id": "https://example.com/brand/northstar/context/retail-chatbot",
      "@type": "brando:Context",
      "brando:domainContext": {
        "channel": "chatbot",
        "surface": "public-website",
        "region": "UK"
      },
      "brando:audiencePersona": [
        "Everyday saver"
      ],
      "brando:usesVerbalToken": {
        "@id": "https://example.com/brand/northstar/tokens/verbal/support"
      }
    }
  ]
}

```

From the Brand OS perspective, this graph is:

* the **single source of truth** for identity, tokens, and policies,
* **machine-manageable** (updated by automated processes and AI),
* designed to be consumed by multiple runtimes.

---

## 6. Integration with existing systems

The Brand OS typically does **not** replace:

* DAM,
* CMS,
* PIM,
* brand portals,

but sits **between** them and AI runtimes.

Brando provides properties for wiring:

* assets:

    * `brando:downloadableFile`
    * `brando:supportingFile`
    * `brando:assetURL`
    * `brando:assetPreview`
* external tools:

    * `brando:externalSystem` (points to `schema:SoftwareApplication`)
    * `brando:externalSystemId` (ID in that system)

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/tokens/visual/master",
  "@type": "brando:VisualToken",
  "brando:assetURL": "https://assets.example.com/northstar/visual/master-token.json",
  "brando:downloadableFile": {
    "@id": "https://assets.example.com/northstar/visual/master-kit.zip",
    "@type": "schema:MediaObject",
    "schema:name": "Northstar Visual System – Master Kit",
    "schema:contentUrl": "https://assets.example.com/northstar/visual/master-kit.zip"
  },
  "brando:externalSystem": {
    "@id": "https://example.com/integrations/adobe-genstudio"
  },
  "brando:externalSystemId": "northstar_visual_master"
}
```

The Brand OS uses this to:

* locate the right assets in DAM,
* configure external creative tools,
* keep different channels and tools aligned on the same tokens.

---

## 7. Governance & lifecycle in the Brand OS

Governance is not a bolt-on; it is embedded in the core data model via:

* `brando:enforcementLevel` – mandatory vs advisory vs conditional
* `brando:riskTag` and `brando:complianceTags` – classification for dashboards and filters
* `brando:retrievableInLLM` – whether a node may be indexed or retrieved by LLM/RAG
* `brando:effectiveDuring` – temporal scoping
* `brando:reviewWorkflow` / `brando:updatePolicy` – lifecycle metadata

Typical Brand OS responsibilities:

* enforce `enforcementLevel` when assembling prompts or validating outputs,
* filter nodes based on `retrievableInLLM` for vector search or RAG,
* surface governance views grouped by `riskTag` (“all policies related to financial regulation”),
* apply `effectiveDuring` windows for campaigns and time-bound contexts.

---

## 8. Automation and self-adjusting guard rails

`brando:AutomationRule` is where the Brand OS **reacts** to signals:

* metrics from monitoring,
* incident reports,
* queue sizes,
* scheduled events.

Example automation rule:

```jsonld
{
  "@id": "https://example.com/brand/northstar/automation/rag-high-risk-monitor",
  "@type": "brando:AutomationRule",
  "brando:appliesTo": {
    "contexts": [
      "retail-chatbot-uk"
    ],
    "personas": [
      "Everyday saver"
    ]
  },
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

The Brand OS:

1. Evaluates `monitoredMetric` via `dataSource`.
2. If the threshold is exceeded, parses `automationAction`.
3. Adjusts target policies and notifies relevant teams.

This is where **AI-managed** brand governance becomes practical; humans define the structures and rules, but the system nudges enforcement levels and checks based on real metrics.

---

## 9. Recommended implementation pattern

Non-normative, but widely applicable:

1. **Data & schema**

   * Store Brando JSON-LD as the canonical Brand Knowledge Graph.
   * Optionally provide YAML for authoring.

2. **Indexing & search**

   * Maintain indices by:

    * brand, sub-brand, region,
    * context IDs,
    * category codes (GS1/UNSPSC/google),
    * risk tags.

3. **Runtime service**

   * Expose a Brand OS service or API that supports:

    * `getBrandConfig(brandId, contextId, options): RuntimeBrandConfig`
    * `listPolicies(brandId, filters): Policy[]`
    * `evaluateAutomationRules(brandId): AutomationOutcome[]`

4. **Adapters**

   * For each AI platform or runtime:

    * write an adapter that converts `RuntimeBrandConfig` into the platform’s native configuration (prompts, style blocks, policies).

5. **Observability**

   * Log:

    * which `brando:*` nodes were used for each AI interaction,
    * which policies were in effect,
    * which automation rules fired.

This gives you an **auditable chain** from:

> *“What did the AI say or do?”*
> back to
> *“What did the brand, in Brando vocab, tell it to say or do?”*

---

## 10. Related documentation

* **Concepts & types**

    * [Brando types overview](../types/index.md)
    * [`brando:Brand`](../types/brand.md)
    * [`brando:Context`](../types/context.md)
    * [`brando:Policy`](../types/policy.md)
    * [`brando:AutomationRule`](../types/automation-rule.md)

* **Specification**

    * [JSON-LD context](../spec/jsonld-context.md)
    * [YAML schema profile](../spec/yaml-profile.md)
    * [TypeScript types](../spec/typescript-model.md)

* **Runtime & integration**

    * [Runtime Integration (LLMs, MCP, APIs)](runtime-integration.md)
    * [Brand portfolios & architecture](brand-architecture.md)
