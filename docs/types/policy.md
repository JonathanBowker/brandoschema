---
title: brando:Policy
description: Reference for the brando:Policy class in the Brand Oracle (Brando) schema vocabulary v1.3.
---

# `brando:Policy`

Governance node encoding guard rails, refusals, compliance tags, and retrieval visibility.

> **rdfs:comment**  
> *Governance node encoding guard rails, refusals, compliance tags, and retrieval visibility.*

---

## Term definition

- **IRI:** `brando:Policy`
- **Type:** `owl:Class`
- **Superclass:** `schema:Intangible`
- **Defined in:** `brando:` (Brando Schema Vocabulary v1.3)

`brando:Policy` is the **core governance type** in Brando. It represents a **machine-readable policy object** that AI runtimes and Brand OS components can:

- load,
- apply,
- and log against,

for a given brand, context, product, or category.

Typical policies cover:

- brand safety and tone control,
- regulatory constraints,
- refusal behaviour,
- retrieval/visibility rules for AI systems.

---

## Intended usage

Use `brando:Policy` whenever you need a **governed, inspectable rule set** that constrains brand behaviour in AI systems.

Common patterns:

- Brand-level “global” policies
    - e.g. generic brand safety, tone rules, and prohibited terms.
- Context-level policies
    - e.g. support chatbot policies, investor relations policies, region-specific restrictions.
- Product- or category-specific policies
    - e.g. rules for high-risk product lines, GTIN-specific constraints.

In a typical flow:

1. Your runtime resolves a `brando:Brand` and `brando:Context`.
2. It collects all `brando:Policy` instances linked via `brando:hasPolicy` and/or `brando:appliesTo*`.
3. It uses policy properties (e.g. `brando:guardRails`, `brando:mustNotDos`, `brando:refusalStrategies`, `brando:enforcementLevel`) to:
    - construct prompts,
    - enforce pre/post constraints,
    - drive reporting and audit.

---

## Relationships

### Inbound

Policies are usually reached from:

- **`brando:hasPolicy`**
  - **Domain:** `brando:Brand`, `brando:Context`
  - **Range:** `brando:Policy`
  - **Comment (summary):** Attaches governance, safety, and compliance policies to a brand or context.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar",
  "@type": "brando:Brand",
  "schema:name": "Northstar Bank",
  "brando:hasPolicy": [
    { "@id": "https://example.com/brand/northstar/policies/global-brand-safety" },
    { "@id": "https://example.com/brand/northstar/policies/regulated-claims-uk" }
  ]
}
```

Policies can also be scoped via **product- and GTIN-level links**:

* `brando:appliesToProduct` (range: `gs1:Product`)
* `brando:appliesToGTIN` (range: `xsd:string`)

These are properties **whose domain includes `brando:Policy`**, allowing fine-grained scoping.

---

## Key properties (domain includes `brando:Policy`)

The following properties have `brando:Policy` in their `rdfs:domain`. Several are also used on other classes (e.g. `brando:Context`, `brando:AutomationRule`); here they are described specifically from the **policy** perspective.

### 1. Scope and applicability

| Property IRI              | Range         | Type                   | Comment (from vocab, summarised)                                                                        |
| ------------------------- | ------------- | ---------------------- | ------------------------------------------------------------------------------------------------------- |
| `brando:appliesTo`        | `xsd:string`  | `owl:DatatypeProperty` | Optional scoping for which products, categories, personas, or channels this policy applies to.          |
| `brando:appliesToGTIN`    | `xsd:string`  | `owl:DatatypeProperty` | GTIN(s) for which this branded category or policy is applicable.                                        |
| `brando:appliesToProduct` | `gs1:Product` | `owl:ObjectProperty`   | Links a branded category or policy to one or more GS1 Product nodes.                                    |
| `brando:effectiveDuring`  | `xsd:string`  | `owl:DatatypeProperty` | Time window or schedule when this context, campaign, or policy is active, expressed as structured JSON. |

**Usage notes (non-normative):**

* `brando:appliesTo` is deliberately free-form (string). You can encode:

    * simple labels: `"paid social; EMEA"`,
    * or structured JSON as a string: `{"personas":["Everyday saver"],"channels":["chatbot"]}`.

* `brando:appliesToGTIN` is useful for granular, product-level constraints in commerce use cases.
* `brando:effectiveDuring` is intended for JSON-as-string, e.g.:

  ```json
 {
  "validFrom": "2025-01-01",
  "validThrough": "2025-12-31"
}

  ```

---

### 2. Guard rails, refusals, and risk

| Property IRI               | Range        | Type                   | Comment (from vocab, summarised)                                                                              |
| -------------------------- | ------------ | ---------------------- | ------------------------------------------------------------------------------------------------------------- |
| `brando:guardRails`        | `xsd:string` | `owl:DatatypeProperty` | Non-negotiable boundaries that AI systems must not cross.                                                     |
| `brando:refusalStrategies` | `xsd:string` | `owl:DatatypeProperty` | Preferred patterns for declining or redirecting unsafe or out-of-scope requests.                              |
| `brando:riskScenarios`     | `xsd:string` | `owl:DatatypeProperty` | Known edge cases and misuse patterns requiring caution or escalation.                                         |
| `brando:complianceTags`    | `xsd:string` | `owl:DatatypeProperty` | Regulatory or legal tags such as “GDPR”, “HIPAA”, or “FCA”.                                                   |
| `brando:riskTag`           | `xsd:string` | `owl:DatatypeProperty` | Lightweight tags describing primary risk domains (e.g. brand-safety) for querying, reporting, and dashboards. |

**Usage notes (non-normative):**

* Treat `guardRails`, `refusalStrategies`, and `riskScenarios` as **lists of strings** (one per bullet), either:

    * modelled as a JSON array string, or
    * represented as repeated property values in JSON-LD.

* Use `complianceTags` and `riskTag` as **query-friendly labels** to filter and report policies.

Example pattern:

```jsonld
{
  "@id": "https://example.com/brand/northstar/policies/regulated-claims-uk",
  "@type": "brando:Policy",
  "brando:guardRails": [
    "Do not imply guaranteed returns.",
    "Do not provide personalised investment advice."
  ],
  "brando:refusalStrategies": [
    "Politely explain that you cannot provide personalised investment advice.",
    "Offer to connect the user with a human advisor."
  ],
  "brando:riskScenarios": [
    "User asks if a specific product is 'risk-free'.",
    "User requests a guaranteed level of return."
  ],
  "brando:complianceTags": [
    "FCA",
    "UK-financial-promotions"
  ],
  "brando:riskTag": [
    "financial-regulation",
    "consumer-protection"
  ]
}
```

---

### 3. Enforcement, visibility, and retrieval

| Property IRI              | Range         | Type                   | Comment (from vocab, summarised)                                                                                                      |
| ------------------------- | ------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `brando:enforcementLevel` | `xsd:string`  | `owl:DatatypeProperty` | Indicates how strongly a policy or automation rule must be applied (suggested values include “mandatory”, “advisory”, “conditional”). |
| `brando:priority`         | `xsd:string`  | `owl:DatatypeProperty` | Governance precedence for this policy when multiple rules could apply.                                                                |
| `brando:visibilityRating` | `xsd:string`  | `owl:DatatypeProperty` | Qualitative indicator of how easily this policy should be discoverable by AI systems.                                                 |
| `brando:retrievableInLLM` | `xsd:boolean` | `owl:DatatypeProperty` | Boolean flag indicating whether this policy may be indexed or retrieved by language models.                                           |
| `brando:embeddingQuality` | `xsd:string`  | `owl:DatatypeProperty` | Qualitative or scored assessment of how well this content performs in vector search or RAG.                                           |

**Usage notes (non-normative):**

* `enforcementLevel` is shared with `brando:AutomationRule`. Common string values (not enforced by the vocab) include:

    * `"mandatory"`,
    * `"advisory"`,
    * `"conditional"`.

* `priority` can be:

    * ordinal (e.g. `"1-high"`, `"2-medium"`, `"3-low"`), or
    * descriptive (e.g. `"portfolio-level"`, `"brand-level"`, `"context-level"`).

* Use `visibilityRating`, `retrievableInLLM`, and `embeddingQuality` to tune how and where policies appear in:

    * RAG results,
    * AI-readable policy searches,
    * agentic tooling.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/policies/global-brand-safety",
  "@type": "brando:Policy",
  "brando:enforcementLevel": "mandatory",
  "brando:priority": "1-high",
  "brando:visibilityRating": "high",
  "brando:retrievableInLLM": true,
  "brando:embeddingQuality": "good"
}
```

---

### 4. Lifecycle and process

| Property IRI            | Range        | Type                   | Comment (from vocab, summarised)                                                      |
| ----------------------- | ------------ | ---------------------- | ------------------------------------------------------------------------------------- |
| `brando:reviewWorkflow` | `xsd:string` | `owl:DatatypeProperty` | Description of human and/or automated steps for reviewing content and policy changes. |
| `brando:updatePolicy`   | `xsd:string` | `owl:DatatypeProperty` | Rules for how often, by whom, and under what process policies are updated.            |

**Usage notes (non-normative):**

* These properties **describe** the governance process – they don’t implement it.
* Combine them with temporal properties in instance data (`dcterms:created`, `dcterms:modified`) for full lifecycle tracking.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/policies/regulated-claims-uk",
  "@type": "brando:Policy",
  "brando:reviewWorkflow": "Compliance team reviews changes weekly. Any exceptions must be approved by legal.",
  "brando:updatePolicy": "Review at least quarterly or when regulations change."
}
```

---

### 5. Files and integrations

These properties are shared across several Brando types but are frequently used on policies:

| Property IRI              | Range                        | Type                   | Comment (from vocab, summarised)                                                                                                                |
| ------------------------- | ---------------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `brando:downloadableFile` | `schema:MediaObject`         | `owl:ObjectProperty`   | Links a brand, token, context, campaign, policy, or category to the most up-to-date creative or reference files exposed by the Brand OS or DAM. |
| `brando:supportingFile`   | `schema:MediaObject`         | `owl:ObjectProperty`   | Links a node to additional files that are helpful for production but are not the primary source-of-truth asset.                                 |
| `brando:externalSystem`   | `schema:SoftwareApplication` | `owl:ObjectProperty`   | Links a brand, context, policy, campaign, or automation rule to a software application that represents an integration target.                   |
| `brando:externalSystemId` | `xsd:string`                 | `owl:DatatypeProperty` | Identifier for the corresponding object in an external system such as Adobe GenStudio, Meta Ads Manager, Figma, or internal CMSs.               |

**Usage notes (non-normative):**

* For **policy** nodes:

    * `downloadableFile` might point to full legal policy PDFs or structured policy docs.
    * `supportingFile` might point to training decks, explainer docs, or example cases.

* `externalSystem` + `externalSystemId` can be used to:

    * map a policy to a specific enforcement configuration in another platform,
    * or drive sync jobs between the Brand Knowledge Graph and external governance tools.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/policies/regulated-claims-uk",
  "@type": "brando:Policy",
  "brando:downloadableFile": {
    "@id": "https://assets.example.com/northstar/policies/regulated-claims-uk.pdf",
    "@type": "schema:MediaObject",
    "schema:name": "Regulated Claims Policy – UK (PDF)"
  },
  "brando:externalSystem": {
    "@id": "https://example.com/integrations/policy-engine"
  },
  "brando:externalSystemId": "northstar_regclaims_uk_v2"
}
```

---

## Example: Brand + Context + Policies

A combined example showing how `brando:Policy` is used with `brando:Brand` and `brando:Context`:

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
      "brando:hasPolicy": {
        "@id": "https://example.com/brand/northstar/policies/global-brand-safety"
      }
    },
    {
      "@id": "https://example.com/brand/northstar/context/retail-chatbot",
      "@type": "brando:Context",
      "brando:audienceSegment": "Retail banking customers",
      "brando:domainContext": {
        "channel": "chatbot",
        "surface": "public-website",
        "region": "UK"
      },
      "brando:hasPolicy": {
        "@id": "https://example.com/brand/northstar/policies/regulated-claims-uk"
      }
    },
    {
      "@id": "https://example.com/brand/northstar/policies/global-brand-safety",
      "@type": "brando:Policy",
      "brando:enforcementLevel": "mandatory",
      "brando:priority": "1-high",
      "brando:guardRails": [
        "Do not output hate speech, harassment, or discriminatory language.",
        "Do not claim features or capabilities the brand does not provide."
      ],
      "brando:riskTag": [
        "brand-safety",
        "tone-of-voice"
      ],
      "brando:retrievableInLLM": true
    },
    {
      "@id": "https://example.com/brand/northstar/policies/regulated-claims-uk",
      "@type": "brando:Policy",
      "brando:enforcementLevel": "mandatory",
      "brando:appliesTo": "Retail banking products in the UK",
      "brando:appliesToGTIN": "12345678901234",
      "brando:appliesToProduct": {
        "@id": "https://example.com/gs1/product/12345678901234",
        "@type": "gs1:Product"
      },
      "brando:guardRails": [
        "Do not promise guaranteed investment returns.",
        "Do not position speculative products as suitable for all customers."
      ],
      "brando:refusalStrategies": [
        "Explain that you cannot provide personalised investment advice.",
        "Encourage the user to speak to a regulated advisor."
      ],
      "brando:complianceTags": [
        "FCA",
        "UK-financial-promotions"
      ],
      "brando:riskTag": [
        "financial-regulation",
        "consumer-protection"
      ],
      "brando:reviewWorkflow": "Compliance reviews this policy monthly and after any regulatory change.",
      "brando:updatePolicy": "Update within 30 days of new FCA guidance affecting retail financial promotions.",
      "brando:retrievableInLLM": true
    }
  ]
}

```

**Runtime pattern (non-normative):**

1. Resolve the current `brando:Brand` and `brando:Context`.
2. Collect:

    * global policies attached to the brand,
    * context-specific policies (e.g. `regulated-claims-uk`),
    * product-level policies via `appliesToProduct` / `appliesToGTIN`, if a product is in scope.

3. Merge policy fields (`guardRails`, `mustNotDos`, `refusalStrategies`, etc.) according to:

    * `enforcementLevel`,
    * `priority`,
    * your own precedence rules.

4. Use this merged configuration to:

    * build prompts,
    * enforce pre/post checks,
    * log which policies were in effect for each interaction.

---

## Related documentation

* **Concepts / overview**

    * [Brando types overview](index.md)
    * [Getting started](../getting-started.md)

* **Related types**

    * [`brando:Brand`](brand.md)
    * [`brando:Context`](context.md)
    * [`brando:AutomationRule`](automation-rule.md)
    * [`brando:BrandedCategory`](branded-category.md)

* **Properties index**

    * [Properties overview](../properties/index.md)

