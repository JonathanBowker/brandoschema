---
title: brando:Brand
description: Reference for the brando:Brand class in the Brand Oracle (Brando) schema vocabulary v1.3.
---

# `brando:Brand`

Core brand identity node extended with governance, architecture, and AI-ready semantics.

> **rdfs:comment**  
> *Core brand identity node extended with governance, architecture, and AI-ready semantics.*

---

## Term definition

- **IRI:** `brando:Brand`
- **Type:** `owl:Class`
- **Superclass:** `schema:Brand`  
  (and therefore indirectly `schema:Intangible`)
- **Alignments:**
    - `skos:relatedMatch` → `gs1:Brand`
    - `rdfs:seeAlso` → `gs1:Brand`
- **Defined in:** `brando:` (Brando Schema Vocabulary v1.3)

`brando:Brand` is the **anchor node** for a brand in a Brando-based Brand Knowledge Graph. It is where you attach:

- identity and positioning,
- architecture and inheritance,
- expression tokens (verbal, visual, audio),
- governance (policies, automation rules),
- and product/category alignment.

---

## Intended usage

Use `brando:Brand` to represent:

- a **master brand** (corporate, group, or global brand),
- a **product or service brand**,
- a **sub-brand** or **endorsed brand** in a portfolio.

Typical patterns:

- One `brando:Brand` per logical brand in your **brand architecture**.
- Relationships between brands (e.g. “master brand” vs “sub-brand”) are expressed via:
    - `brando:brandArchitectureRole`
    - `brando:inheritsPolicies`
    - `brando:inheritsTokens`
- Behavioural configuration is attached via:
    - `brando:usesVerbalToken`
    - `brando:usesVisualToken`
    - `brando:usesAudioToken`
- Governance is attached via:
    - `brando:hasPolicy`
    - `brando:hasAutomationRule`
- Product semantics and taxonomies are attached via:
    - `brando:hasProductCategory` → `brando:BrandedCategory`

At runtime, your Brand OS or AI middleware normally **resolves a `brando:Brand` first**, then walks outward via these properties to construct an effective configuration for a given request.

---

## Key properties (domain includes `brando:Brand`)

The table below lists properties whose `rdfs:domain` includes `brando:Brand`.

> **Note:** Many of these also have `brando:Context` in their domain; here they’re documented from the **brand** perspective.

### 1. Structural and runtime links

| Property IRI              | Range                        | Type                  | Comment (summary)                                                                 |
| ------------------------- | --------------------------- | --------------------- | --------------------------------------------------------------------------------- |
| `brando:hasContext`       | `brando:Context`            | `owl:ObjectProperty`  | Links a brand to one or more activation contexts in which it operates.           |
| `brando:usesVerbalToken`  | `brando:VerbalToken`        | `owl:ObjectProperty`  | Attaches a verbal expression token defining how the brand speaks in this scope.  |
| `brando:usesVisualToken`  | `brando:VisualToken`        | `owl:ObjectProperty`  | Attaches a visual expression token defining how the brand looks in this scope.   |
| `brando:usesAudioToken`   | `brando:AudioToken`         | `owl:ObjectProperty`  | Attaches an audio expression token defining how the brand sounds in this scope.  |
| `brando:hasPolicy`        | `brando:Policy`             | `owl:ObjectProperty`  | Attaches governance, safety, and compliance policies to a brand or context.      |
| `brando:hasAutomationRule`| `brando:AutomationRule`     | `owl:ObjectProperty`  | Links a brand to automated governance rules and triggers.                        |
| `brando:hasProductCategory`| `brando:BrandedCategory`   | `owl:ObjectProperty`  | Links a brand to its branded product or service category taxonomy nodes.         |
| `brando:hasCampaign`      | `brando:Campaign`           | `owl:ObjectProperty`  | Links a brand to time-bound campaigns that may temporarily adjust rules/tokens.  |

**Implementation guidance (non-normative):**

- Treat these as **multi-valued**: a brand may have many contexts, policies, categories, and campaigns.
- A common pattern is to:
    - attach **default tokens/policies** at brand level,
    - attach **overrides** at context level.

---

### 2. Identity, positioning, and narrative

| Property IRI                  | Range         | Type                 | Comment (summary)                                                                                             |
| ---------------------------- | ------------ | -------------------- | ------------------------------------------------------------------------------------------------------------- |
| `brando:missionStatement`    | `xsd:string` | `owl:DatatypeProperty` | The brand's core purpose and day-to-day reason for existing.                                                 |
| `brando:visionStatement`     | `xsd:string` | `owl:DatatypeProperty` | The aspirational future state the brand is working toward.                                                   |
| `brando:coreValues`          | `xsd:string` | `owl:DatatypeProperty` | Foundational principles and beliefs that guide brand decisions and behaviours.                               |
| `brando:brandPromise`        | `xsd:string` | `owl:DatatypeProperty` | The core commitment or experience the brand guarantees to deliver.                                           |
| `brando:marketPosition`      | `xsd:string` | `owl:DatatypeProperty` | How the brand positions itself in its category relative to alternatives and peers.                           |
| `brando:brandNarrative`      | `xsd:string` | `owl:DatatypeProperty` | Longer-form narrative that explains the brand's origin, evolution, and purpose.                              |
| `brando:competitorContext`   | `xsd:string` | `owl:DatatypeProperty` | Summary of competitors, adjacent solutions, and how the brand differentiates.                                |

**Implementation guidance (non-normative):**

- These fields are typically **short to medium text** (sentences or paragraphs).
- They can be:
    - surfaced to humans (e.g. brand portals),
    - or used by AI runtimes to construct richer prompts and behaviours.

---

### 3. Architecture and governance model

| Property IRI                   | Range         | Type                 | Comment (summary)                                                                                                        |
| ----------------------------- | ------------ | -------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `brando:inheritsPolicies`     | `xsd:boolean`| `owl:DatatypeProperty` | Indicates whether a sub-brand inherits governance policies from its parent brand.                                       |
| `brando:inheritsTokens`       | `xsd:string` | `owl:DatatypeProperty` | Structured definition of which expression tokens (verbal, visual, audio) are inherited and how.                         |
| `brando:brandArchitectureRole`| `xsd:string` | `owl:DatatypeProperty` | The role of this brand in the broader brand architecture (e.g. master brand, endorsed brand, sub-brand).                |
| `brando:governanceModel`      | `xsd:string` | `owl:DatatypeProperty` | Description of how the brand is governed (e.g. centralised, federated, hybrid) for decision-making and approvals.       |

**Implementation guidance (non-normative):**

- `brando:inheritsPolicies` is naturally boolean (e.g. `true`/`false`).
- `brando:inheritsTokens` is intentionally free-form (`xsd:string`), so you can encode:
    - simple labels (e.g. `"all"`, `"none"`, `"visual-only"`),
    - or structured JSON (e.g. `{"from":"group-brand","verbal":"inherit","visual":"override"}`) as a string.

---

### 4. Files, DAM integration, and external systems

| Property IRI              | Range                      | Type                  | Comment (summary)                                                                                                                                              |
| ------------------------- | ------------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `brando:downloadableFile` | `schema:MediaObject`      | `owl:ObjectProperty`  | Links a brand, token, context, campaign, or policy node to a media object representing the most up-to-date creative files exposed by the Brand OS or DAM.     |
| `brando:supportingFile`   | `schema:MediaObject`      | `owl:ObjectProperty`  | Links a brand, token, context, campaign, or policy node to additional files that are helpful for production but are not the primary source-of-truth asset.    |
| `brando:externalSystem`   | `schema:SoftwareApplication` | `owl:ObjectProperty` | Links a brand, context, policy, campaign, or automation rule to a schema:SoftwareApplication node that describes the integration target.                      |
| `brando:externalSystemId` | `xsd:string`              | `owl:DatatypeProperty` | Identifier for the corresponding object in an external system such as Adobe GenStudio, Meta Ads Manager, Figma, or internal CMSs.                             |

**Implementation guidance (non-normative):**

- Use `brando:downloadableFile` for **primary, production-ready** artefacts (e.g. logo packs, core guidelines).
- Use `brando:supportingFile` for secondary materials (e.g. inspiration decks, internal training docs).
- `brando:externalSystem` + `brando:externalSystemId` are typically used together:
    - `externalSystem` → which tool/platform,
    - `externalSystemId` → identifier inside that tool (e.g. workspace ID, account ID, library ID).

---

## Example: `brando:Brand` with contexts, tokens, and policies

A small JSON-LD example tying together `brando:Brand` and several of its key properties:

```json
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
      "schema:url": "https://northstar.example.com",
      "brando:missionStatement": "Financial clarity with absolute trust.",
      "brando:visionStatement": "Help people feel in control of their financial future.",
      "brando:coreValues": [
        "Clarity over complexity",
        "Do the right thing",
        "Long-term alignment with customers"
      ],
      "brando:brandPromise": "We will always explain the trade-offs clearly before you decide.",
      "brando:marketPosition": "Digital-first bank for risk-aware customers.",
      "brando:brandArchitectureRole": "master-brand",
      "brando:governanceModel": "centralised governance with local execution",
      "brando:inheritsPolicies": true,
      "brando:inheritsTokens": {
        "from": "group-brand",
        "verbal": "inherit",
        "visual": "inherit",
        "audio": "none"
      },
      "brando:hasContext": {
        "@id": "https://example.com/brand/northstar/context/retail-chatbot"
      },
      "brando:usesVerbalToken": {
        "@id": "https://example.com/brand/northstar/tokens/verbal/default"
      },
      "brando:hasPolicy": {
        "@id": "https://example.com/brand/northstar/policies/regulated-claims"
      },
      "brando:hasProductCategory": {
        "@id": "https://example.com/brand/northstar/categories/savings-accounts"
      },
      "brando:downloadableFile": {
        "@id": "https://assets.example.com/northstar/brand/core-guidelines.pdf",
        "@type": "schema:MediaObject",
        "schema:name": "Northstar Brand Core Guidelines (PDF)"
      },
      "brando:externalSystem": {
        "@id": "https://example.com/integrations/adobe-genstudio"
      },
      "brando:externalSystemId": "northstar_brand_master"
    },
    {
      "@id": "https://example.com/brand/northstar/context/retail-chatbot",
      "@type": "brando:Context",
      "brando:audienceSegment": "Retail banking customers",
      "brando:domainContext": {
        "channel": "chatbot",
        "surface": "public-website",
        "region": "UK"
      }
    },
    {
      "@id": "https://example.com/brand/northstar/tokens/verbal/default",
      "@type": "brando:VerbalToken",
      "brando:toneOfVoice": "Calm, empathetic, precise.",
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
      "@id": "https://example.com/brand/northstar/policies/regulated-claims",
      "@type": "brando:Policy",
      "brando:enforcementLevel": "mandatory",
      "brando:riskTag": [
        "financial-regulation",
        "consumer-protection"
      ]
    },
    {
      "@id": "https://example.com/brand/northstar/categories/savings-accounts",
      "@type": "brando:BrandedCategory",
      "brando:productCategoryName": "Savings accounts"
    },
    {
      "@id": "https://example.com/integrations/adobe-genstudio",
      "@type": "schema:SoftwareApplication",
      "schema:name": "Adobe GenStudio"
    }
  ]
}
```


In a typical Brand OS:

1. The brand runtime resolves the relevant `brando:Brand`.
2. It walks out to `brando:hasContext`, `brando:uses*Token`, `brando:hasPolicy`, and `brando:hasProductCategory`.
3. It uses the identity and governance properties to construct prompts, style instructions, and guardrails for AI systems.

---

## Related documentation

* **Concepts / overview**

    * [Brando types overview](index.md)
    * [Getting started](../getting-started.md)

* **Related types**

    * [`brando:Context`](context.md)
    * [`brando:VerbalToken`](verbal-token.md)
    * [`brando:VisualToken`](visual-token.md)
    * [`brando:AudioToken`](audio-token.md)
    * [`brando:Policy`](policy.md)
    * [`brando:BrandedCategory`](branded-category.md)
    * [`brando:AutomationRule`](automation-rule.md)
    * [`brando:Campaign`](campaign.md)

