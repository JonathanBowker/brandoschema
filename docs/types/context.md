---
title: brando:Context
description: Reference for the brando:Context class in the Brand Oracle (Brando) schema vocabulary v1.3.
---

# `brando:Context`

Activation context describing audience, channel, jurisdiction, and operational conditions for brand behaviour.

> **rdfs:comment**  
> *Activation context describing audience, channel, jurisdiction, and operational conditions for brand behaviour.*

---

## Term definition

- **IRI:** `brando:Context`
- **Type:** `owl:Class`
- **Superclass:** `schema:Intangible`
- **Defined in:** `brando:` (Brando Schema Vocabulary v1.3)

A `brando:Context` describes **where, for whom, and under what operational conditions** the brand is active. It captures the variables that change how a brand should behave, even when the core brand identity is the same.

Typical examples:

- “Retail chatbot – UK”
- “Investor relations – global site”
- “Paid social ads – DE”
- “Customer support email – US, regulated products”

In a Brand Knowledge Graph, **Brand → Context → Tokens/Policies** is one of the main paths your runtime will follow.

---

## Intended usage

Use `brando:Context` when you need to:

- **Differentiate behaviour by channel/surface**  
  e.g. public website vs authenticated app vs internal assistant.

- **Differentiate by audience**  
  e.g. retail customers, small businesses, institutional investors.

- **Handle regulatory / operational differences**  
  e.g. region, jurisdiction, product line, lifecycle stage.

A single `brando:Brand` will typically have **multiple** `brando:Context` nodes, each with its own:

- audience descriptors (`brando:audienceSegment`, `brando:audiencePersona`),
- operational conditions (`brando:domainContext`, `brando:effectiveDuring`, `brando:appliesTo`),
- attached tokens (`brando:usesVerbalToken`, `brando:usesVisualToken`, `brando:usesAudioToken`),
- attached governance (`brando:hasPolicy` and possibly `brando:hasAutomationRule`).

Your Brand OS or AI middleware normally:

1. Resolves the relevant `brando:Brand`.
2. Selects an appropriate `brando:Context` for the current request.
3. Aggregates tokens and policies from both Brand and Context.

---

## Relationships

### Inbound: from `brando:Brand`

`brando:Context` is usually reached via:

- **`brando:hasContext`**  
  - **Domain:** `brando:Brand`  
  - **Range:** `brando:Context`  
  - **Comment:** “Links a brand to one or more activation contexts in which it operates.”

Example (brand-side):

```jsonld
{
  "@id": "https://example.com/brand/northstar",
  "@type": "brando:Brand",
  "schema:name": "Northstar Bank",
  "brando:hasContext": {
    "@id": "https://example.com/brand/northstar/context/retail-chatbot"
  }
}
```

### Outbound: tokens and policies

Contexts share many of the same links as brands:

* **`brando:usesVerbalToken`**

    * **Domain:** `brando:Brand`, `brando:Context`
    * **Range:** `brando:VerbalToken`
    * **Comment:** “Attaches a verbal expression token defining how the brand speaks in this scope.”

* **`brando:usesVisualToken`**

    * **Domain:** `brando:Brand`, `brando:Context`
    * **Range:** `brando:VisualToken`
    * **Comment:** “Attaches a visual expression token defining how the brand looks in this scope.”

* **`brando:usesAudioToken`**

    * **Domain:** `brando:Brand`, `brando:Context`
    * **Range:** `brando:AudioToken`
    * **Comment:** “Attaches an audio expression token defining how the brand sounds in this scope.”

* **`brando:hasPolicy`**

    * **Domain:** `brando:Brand`, `brando:Context`
    * **Range:** `brando:Policy`
    * **Comment:** “Attaches governance, safety, and compliance policies to a brand or context.”

**Pattern (non-normative):**

* Attach **defaults** at `brando:Brand` level.
* Attach **overrides / specialisation** at `brando:Context` level.
  At runtime, merge Brand + Context tokens/policies into an effective configuration.

---

## Key properties (domain = `brando:Context`)

The following properties have `brando:Context` in their `rdfs:domain`.

### 1. Audience descriptors

| Property IRI             | Range        | Type                   | Comment (summary)                                                                              |
| ------------------------ | ------------ | ---------------------- | ---------------------------------------------------------------------------------------------- |
| `brando:audienceSegment` | `xsd:string` | `owl:DatatypeProperty` | Strategic grouping of individuals who share needs or characteristics relevant to this context. |
| `brando:audiencePersona` | `xsd:string` | `owl:DatatypeProperty` | Persona-style archetypes representing typical users in this context.                           |

**Usage notes (non-normative):**

* `brando:audienceSegment` is good for **simple labels** (“retail customers”, “SMBs”, “developers”).
* `brando:audiencePersona` is good for referring to internal personas by name (“Everyday saver”, “Enterprise buyer”).
  You can have multiple persona names per context.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/context/retail-chatbot",
  "@type": "brando:Context",
  "brando:audienceSegment": [
    "Retail banking customers",
    "Prospects researching savings accounts"
  ],
  "brando:audiencePersona": [
    "Everyday saver",
    "New-to-finance customer"
  ]
}
```

---

### 2. Operational conditions and scope

| Property IRI             | Range        | Type                   | Comment (summary)                                                                                                  |
| ------------------------ | ------------ | ---------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `brando:domainContext`   | `xsd:string` | `owl:DatatypeProperty` | Operational, legal, channel, regional, and use-case conditions encoded as a structured JSON payload (as a string). |
| `brando:effectiveDuring` | `xsd:string` | `owl:DatatypeProperty` | Time window or schedule when this context, campaign, or policy is active, expressed as a structured JSON value.    |
| `brando:appliesTo`       | `xsd:string` | `owl:DatatypeProperty` | Optional scoping for which products, categories, personas, or channels this node applies to.                       |

**Usage notes (non-normative):**

* `brando:domainContext`

    * Intended for **machine-readable JSON** serialised as a string.
    * Use it for things like `{ "channel": "chatbot", "surface": "public-website", "region": "UK" }`.
* `brando:effectiveDuring`

    * Also JSON-as-string; can represent date ranges, schedules, or conditions (e.g. `{ "validFrom": "...", "validThrough": "..." }`).
* `brando:appliesTo`

    * Free-form scoping; can reference product codes, persona IDs, or internal channel identifiers.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/context/retail-chatbot",
  "@type": "brando:Context",
  "brando:domainContext": {
    "channel": "chatbot",
    "surface": "public-website",
    "region": "UK"
  },
  "brando:effectiveDuring": {
    "validFrom": "2025-01-01",
    "validThrough": null
  },
  "brando:appliesTo": "Savings accounts; current accounts; UK-only"
}
```

In practice your Brand OS may parse these JSON strings into structured objects in your own runtime model.

---

### 3. Files and external systems

These properties are **shared** across several domains (`brando:Brand`, `brando:Context`, tokens, policies, etc.), but are important for contexts:

| Property IRI              | Domain (includes) | Range                        | Type                   | Comment (summary)                                                                                                               |
| ------------------------- | ----------------- | ---------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `brando:downloadableFile` | `brando:Context`  | `schema:MediaObject`         | `owl:ObjectProperty`   | Links a brand, token, context, campaign, or policy node to the most up-to-date creative files exposed by the Brand OS or DAM.   |
| `brando:supportingFile`   | `brando:Context`  | `schema:MediaObject`         | `owl:ObjectProperty`   | Links a brand, token, context, campaign, or policy node to additional files helpful for production but not the primary asset.   |
| `brando:externalSystem`   | `brando:Context`  | `schema:SoftwareApplication` | `owl:ObjectProperty`   | Links a brand, context, policy, campaign, or automation rule to a software application that represents an integration target.   |
| `brando:externalSystemId` | `brando:Context`  | `xsd:string`                 | `owl:DatatypeProperty` | Identifier for the corresponding object in an external tool such as Adobe GenStudio, Meta Ads Manager, Figma, or internal CMSs. |

**Usage notes (non-normative):**

* Use `downloadableFile` for **canonical artefacts** scoped to that context
  (e.g. “Support chatbot script for UK”, “Channel-specific guidelines”).
* Use `supportingFile` for context-specific reference materials
  (e.g. transcripts, example chats, training docs).
* Use `externalSystem` + `externalSystemId` to hook the context into external platforms:

    * a specific ad account,
    * a workspace or project ID,
    * a configuration object in an orchestration system.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/context/retail-chatbot",
  "@type": "brando:Context",
  "brando:downloadableFile": {
    "@id": "https://assets.example.com/northstar/contexts/retail-chatbot-guidelines.pdf",
    "@type": "schema:MediaObject",
    "schema:name": "Retail Chatbot Context Guidelines (PDF)"
  },
  "brando:externalSystem": {
    "@id": "https://example.com/integrations/chat-orchestrator"
  },
  "brando:externalSystemId": "northstar_retail_chatbot_uk"
}
```

---

## Example: brand + context with tokens and policy

A small JSON-LD example showing how `brando:Context` is used in practice:

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
      "brando:hasContext": {
        "@id": "https://example.com/brand/northstar/context/retail-chatbot"
      },
      "brando:usesVerbalToken": {
        "@id": "https://example.com/brand/northstar/tokens/verbal/default"
      },
      "brando:hasPolicy": {
        "@id": "https://example.com/brand/northstar/policies/global-brand-safety"
      }
    },
    {
      "@id": "https://example.com/brand/northstar/context/retail-chatbot",
      "@type": "brando:Context",
      "brando:audienceSegment": [
        "Retail banking customers"
      ],
      "brando:audiencePersona": [
        "Everyday saver"
      ],
      "brando:domainContext": {
        "channel": "chatbot",
        "surface": "public-website",
        "region": "UK"
      },
      "brando:effectiveDuring": {
        "validFrom": "2025-01-01",
        "validThrough": null
      },
      "brando:appliesTo": "Savings accounts; current accounts",
      "brando:usesVerbalToken": {
        "@id": "https://example.com/brand/northstar/tokens/verbal/support"
      },
      "brando:hasPolicy": {
        "@id": "https://example.com/brand/northstar/policies/regulated-claims-uk"
      }
    },
    {
      "@id": "https://example.com/brand/northstar/tokens/verbal/default",
      "@type": "brando:VerbalToken",
      "brando:toneOfVoice": "Calm, empathetic, precise."
    },
    {
      "@id": "https://example.com/brand/northstar/tokens/verbal/support",
      "@type": "brando:VerbalToken",
      "brando:toneOfVoice": "Reassuring and efficient. Focus on clear next steps."
    },
    {
      "@id": "https://example.com/brand/northstar/policies/global-brand-safety",
      "@type": "brando:Policy",
      "brando:enforcementLevel": "mandatory",
      "brando:riskTag": [
        "brand-safety",
        "tone-of-voice"
      ]
    },
    {
      "@id": "https://example.com/brand/northstar/policies/regulated-claims-uk",
      "@type": "brando:Policy",
      "brando:enforcementLevel": "mandatory",
      "brando:riskTag": [
        "financial-regulation",
        "uk-regulation"
      ]
    }
  ]
}
```

Runtime behaviour (non-normative pattern):

1. Resolve `brando:Brand` → `https://example.com/brand/northstar`.
2. Select `brando:Context` → `retail-chatbot` based on channel/surface/region.
3. Aggregate tokens:

    * Brand-level verbal token (`/tokens/verbal/default`),
    * Context-level verbal token (`/tokens/verbal/support`).
4. Aggregate policies:

    * Brand-level global safety policy,
    * Context-level UK-specific regulation policy.
5. Use audience and domain info to tailor prompts, retrieval, and risk checks.

---

## Related documentation

* **Concepts / overview**

    * [Brando types overview](index.md)
    * [Getting started](../getting-started.md)

* **Related types**

    * [`brando:Brand`](brand.md)
    * [`brando:VerbalToken`](verbal-token.md)
    * [`brando:VisualToken`](visual-token.md)
    * [`brando:AudioToken`](audio-token.md)
    * [`brando:Policy`](policy.md)
    * [`brando:AutomationRule`](automation-rule.md)

