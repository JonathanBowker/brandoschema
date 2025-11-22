---
title: Chatbot + Brando runtime flow
description: End-to-end example of how a chatbot uses the Brando (Brand Oracle) schema at runtime to enforce brand behaviour in an LLM.
---

# Chatbot + Brando runtime flow

This example walks through an **end-to-end flow**:

1. A user asks a question in a support chatbot.
2. The chatbot’s backend:
    - resolves the relevant `brando:Brand` and `brando:Context`,
    - gathers `brando:VerbalToken` and `brando:Policy` nodes,
    - optionally evaluates `brando:AutomationRule` nodes,
    - builds a **runtime configuration** for the LLM.
3. The LLM:
    - receives a system prompt derived from Brando,
    - generates an answer,
    - the answer is checked against Brando policies.

The goal is to show how the **Brand Knowledge Graph** becomes the operational control plane for a real chatbot.

---

## 1. Setup: Brando graph for a support chatbot

We’ll reuse a simplified version of the “Northstar Bank” example.

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
      "brando:dialogueStyle": "Use second person; acknowledge emotion, then move to options.",
      "brando:writingStyle": "Short paragraphs, concrete steps, minimal jargon.",
      "brando:approvedTerms": [
        "interest rate",
        "fees",
        "savings goals"
      ],
      "brando:prohibitedTerms": [
        "get rich quick",
        "guaranteed returns"
      ],
      "brando:mustDos": [
        "Offer at least one clear next step in each answer."
      ],
      "brando:mustNotDos": [
        "Minimise or dismiss user concerns."
      ]
    },
    {
      "@id": "https://example.com/brand/northstar/policies/global-brand-safety",
      "@type": "brando:Policy",
      "brando:enforcementLevel": "mandatory",
      "brando:riskTag": [
        "brand-safety",
        "financial-regulation"
      ],
      "brando:guardRails": [
        "Do not provide personalised investment advice.",
        "Do not promise guaranteed returns.",
        "Do not provide legal or tax advice."
      ],
      "brando:refusalStrategies": [
        "Explain that you cannot provide personalised advice and why.",
        "Offer general educational information instead.",
        "Suggest speaking to a regulated advisor for personal recommendations."
      ],
      "brando:retrievableInLLM": true
    }
  ]
}
```

This graph defines everything the chatbot needs to behave on-brand and within risk constraints.

---

## 2. Step-by-step runtime flow

### 2.1 User sends a message

Example:

> “Hi, I’ve got £5,000 in savings – how should I invest it to get the best returns?”

The chatbot backend receives:

```json
{
  "userId": "user-1234",
  "brandId": "https://example.com/brand/northstar",
  "contextId": "https://example.com/brand/northstar/context/retail-chatbot",
  "message": "Hi, I’ve got £5,000 in savings – how should I invest it to get the best returns?"
}
```

### 2.2 Brand OS resolves Brando nodes

The Brand OS (or brand middleware) uses `brandId` and `contextId` to:

1. Load the `brando:Brand` node.
2. Load the `brando:Context` node.
3. Follow `brando:usesVerbalToken` to the relevant `brando:VerbalToken`.
4. Follow `brando:hasPolicy` to `brando:Policy` nodes.

Conceptual TypeScript:

```ts
const brand = getNode("https://example.com/brand/northstar");
const context = getNode("https://example.com/brand/northstar/context/retail-chatbot");

const verbalToken = resolveLinkedNode(context, "brando:usesVerbalToken");
const policies = resolveLinkedNodes(brand, "brando:hasPolicy");
```

### 2.3 Assemble a runtime configuration

The Brand OS converts nodes into a `RuntimeBrandConfig` (domain model):

```ts
const runtimeConfig = {
  brand: {
    name: "Northstar Bank",
    mission: "Financial clarity with absolute trust.",
    coreValues: [
      "Clarity over complexity",
      "Do the right thing",
      "Long-term alignment with customers"
    ]
  },
  context: {
    channel: "chatbot",
    surface: "public-website",
    region: "UK",
    audienceSegment: [
      "Retail banking customers",
      "Prospects researching savings accounts"
    ],
    persona: "Everyday saver"
  },
  verbalToken: {
    toneOfVoice: "Reassuring and efficient. Focus on clear next steps.",
    dialogueStyle: "Use second person; acknowledge emotion, then move to options.",
    writingStyle: "Short paragraphs, concrete steps, minimal jargon.",
    approvedTerms: ["interest rate", "fees", "savings goals"],
    prohibitedTerms: ["get rich quick", "guaranteed returns"],
    mustDos: ["Offer at least one clear next step in each answer."],
    mustNotDos: ["Minimise or dismiss user concerns."]
  },
  policies: [
    {
      enforcementLevel: "mandatory",
      riskTag: ["brand-safety", "financial-regulation"],
      guardRails: [
        "Do not provide personalised investment advice.",
        "Do not promise guaranteed returns.",
        "Do not provide legal or tax advice."
      ],
      refusalStrategies: [
        "Explain that you cannot provide personalised advice and why.",
        "Offer general educational information instead.",
        "Suggest speaking to a regulated advisor for personal recommendations."
      ]
    }
  ]
}
```

(How you map JSON-LD → these objects is implementation-specific, but follows the patterns in [TypeScript model](../spec/typescript-model.md).)

---

## 3. Building the system prompt

The LLM adapter converts `runtimeConfig` into a **system prompt**. For example:

```text
You are Northstar Bank's public website chatbot.

Brand identity:
- Mission: Financial clarity with absolute trust.
- Core values:
  - Clarity over complexity
  - Do the right thing
  - Long-term alignment with customers

Context:
- Channel: Chatbot on the public website (UK region).
- Audience: Retail banking customers and prospects researching savings accounts.
- Persona: Everyday saver (non-expert; may feel anxious about money).

Tone of voice:
- Reassuring and efficient. Focus on clear next steps.
- Use second person; acknowledge emotion, then move to options.
- Short paragraphs, concrete steps, minimal jargon.

Language rules:
- Approved terms (prefer these): interest rate; fees; savings goals
- Prohibited terms (never use): get rich quick; guaranteed returns

Behavioural rules:
- Always offer at least one clear next step in each answer.
- Never minimise or dismiss user concerns.

Brand and risk guard rails (MANDATORY):
- Do not provide personalised investment advice.
- Do not promise guaranteed returns.
- Do not provide legal or tax advice.

Refusal patterns:
- If a user asks for personalised advice, explain that you cannot provide it and why.
- Offer general educational information instead.
- Suggest speaking to a regulated advisor for personal recommendations.

Your responses must follow all of these rules.
```

The model then receives:

* this system message,
* plus the user’s message and any other context.

---

## 4. LLM response and policy checking

### 4.1 Example LLM output (ideal)

> “I can’t provide personalised investment advice, but I can walk you through some general options.
> For example, you might consider how much you want to keep as easy-access savings versus longer-term goals.
> We can look at typical **interest rates**, any **fees**, and how these might support your **savings goals**.
> A next step is to review our savings products page and, if you’d like personalised guidance, speak to a regulated advisor.”

This response is:

* on tone,
* uses approved terms,
* refuses personalised advice appropriately,
* suggests a clear next step.

### 4.2 Policy enforcement (non-normative)

Your Brand OS can apply additional checks post-generation using the same Brando properties:

* Ensure no **prohibited terms** appear (`brando:prohibitedTerms`).
* Ensure mandatory elements are present (`brando:mustDos`).
* Flag or block responses that violate `brando:guardRails`.

For example:

```ts
import { evaluateResponse } from "./policy-engine";

const result = evaluateResponse({
  text: modelOutput,
  policies: runtimeConfig.policies,
  verbalToken: runtimeConfig.verbalToken
});

if (!result.compliant) {
  // Option A: ask the model to self-correct with explicit feedback
  // Option B: provide a fallback “safe” response
  // Option C: route to human review for high-risk cases
}
```

The **policy engine** is implementation-specific but uses Brando properties as inputs.

---

## 5. Where automation rules fit

If you also define `brando:AutomationRule` nodes, they can adjust behaviour based on metrics.

Example rule (simplified):

```jsonld
{
  "@id": "https://example.com/brand/northstar/automation/unsafe-output-monitor",
  "@type": "brando:AutomationRule",
  "brando:appliesTo": "{\"contexts\":[\"retail-chatbot\"],\"region\":\"UK\"}",
  "brando:triggerType": "metric-threshold",
  "brando:monitoredMetric": "{\"name\":\"unsafe_output_rate\",\"threshold\":0.02,\"operator\":\">\",\"window\":\"30d\"}",
  "brando:dataSource": "https://monitoring.example.com/api/metrics/unsafe_output_rate",
  "brando:automationAction": "{\"actionType\":\"increase_enforcement\",\"targetPolicies\":[\"https://example.com/brand/northstar/policies/global-brand-safety\"],\"newLevel\":\"mandatory\",\"notify\":[\"risk-team@northstar.example\"]}",
  "brando:enforcementLevel": "mandatory",
  "brando:riskTag": [
    "brand-safety",
    "llm-guardrails"
  ]
}
```

Your Brand OS might:

1. Periodically evaluate this rule.
2. If unsafe outputs exceed 2% in 30 days:

   * make certain policies mandatory for all chatbot interactions,
   * enable extra checks,
   * notify the risk team.

This is how an **AI-managed Brand Knowledge Graph** can tighten controls as risk increases.

---

## 6. Summary

In this chatbot example, Brando vocab v1.3:

* provides a **structured definition** of:

  * Brand (identity, mission, values),
  * Context (channel, audience, region),
  * Verbal expression (tone, style, vocabulary),
  * Policies (guard rails, refusal strategies, enforcement).
* allows your Brand OS to **assemble runtime configurations** for each interaction.
* lets LLMs and policy engines work from the **same source of truth**, instead of ad-hoc prompts.

For more detail:

* [Brand Operating System architecture](../architecture/brand-os.md)
* [Runtime Integration (LLMs, MCP, APIs)](../architecture/runtime-integration.md)
* [Minimal brand graph](minimal-brand.md)
* [House of brands example](house-of-brands.md)
