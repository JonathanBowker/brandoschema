---
title: brando:Campaign
description: Reference for the brando:Campaign class in the Brand Oracle (Brando) schema vocabulary v1.3.
---

# `brando:Campaign`

Time-bound marketing or communications campaign that may temporarily adjust brand rules.

> **rdfs:comment**  
> *Time-bound marketing or communications campaign that may temporarily adjust brand rules.*

---

## Term definition

- **IRI:** `brando:Campaign`
- **Type:** `owl:Class`
- **Superclass:** `schema:Event`
- **Defined in:** `brando:` (Brando Schema Vocabulary v1.3)

A `brando:Campaign` represents a **time-bound overlay** on the brand:

- seasonal, promotional, or thematic campaigns,
- launches, events, or brand moments,
- periods where tone, visuals, or policies may temporarily change.

It is **not** intended to replace your core brand or contexts, but to *layer on top*:

- introducing additional constraints or variants,
- and optionally mapping to external systems (e.g. ad platforms, campaign managers).

---

## Relationships

### Inbound: from `brando:Brand`

Campaigns are attached to brands via:

- **`brando:hasCampaign`**
    - **Type:** `owl:ObjectProperty`
    - **Domain:** `brando:Brand`
    - **Range:** `brando:Campaign`
    - **rdfs:comment:**  
    *Links a brand to time-bound campaigns that may temporarily adjust rules and tokens.*

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar",
  "@type": "brando:Brand",
  "schema:name": "Northstar Bank",
  "brando:hasCampaign": {
    "@id": "https://example.com/brand/northstar/campaigns/summer-savings-2025"
  }
}
```

### Event semantics

Because `brando:Campaign` subclasses `schema:Event`, you **may** (non-normative) also use standard Schema.org event properties in instance data, such as:

* `schema:startDate`
* `schema:endDate`
* `schema:eventStatus`
* `schema:location`

The Brando vocabulary does not redefine these; they are inherited from `schema:Event`.

---

## Key properties (domain includes `brando:Campaign`)

The following properties have `brando:Campaign` in their `rdfs:domain`.

### 1. Naming and theme

| Property IRI           | Range        | Type                   | rdfs:comment                                                     |
| ---------------------- | ------------ | ---------------------- | ---------------------------------------------------------------- |
| `brando:campaignName`  | `xsd:string` | `owl:DatatypeProperty` | *Human-readable name of a marketing or communications campaign.* |
| `brando:campaignTheme` | `xsd:string` | `owl:DatatypeProperty` | *Central message or creative theme for the campaign.*            |

**Usage notes (non-normative):**

* `campaignName` should be a **stable identifier** used consistently across channels, e.g.:

  * `"Summer Savings 2025"`,
  * `"Launch – Northstar Business"`.
* `campaignTheme` describes the **core narrative or idea** that should inform tokens and content:

  * “Helping people make the most of a windfall”
  * “Small business resilience in uncertain markets”.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/campaigns/summer-savings-2025",
  "@type": "brando:Campaign",
  "brando:campaignName": "Summer Savings 2025",
  "brando:campaignTheme": "Make your summer money go further without compromising on security."
}
```

---

### 2. Temporal scope

`brando:Campaign` shares temporal-scoping properties with `brando:Context` and `brando:Policy`:

| Property IRI             | Range        | Type                   | rdfs:comment                                                                                                      |
| ------------------------ | ------------ | ---------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `brando:effectiveDuring` | `xsd:string` | `owl:DatatypeProperty` | *Time window or schedule when this context, campaign, or policy is active, expressed as a structured JSON value.* |

**Usage notes (non-normative):**

* `effectiveDuring` is designed for **JSON-as-string**, e.g.:

  ```json
  {
  "validFrom": "2025-06-01",
  "validThrough": "2025-08-31"
  }
  ```

* You can combine this with `schema:startDate` / `schema:endDate` if you want both:

    * *Semantic* event dates (Schema.org),
    * *Operational* scheduling logic (Brando).

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/campaigns/summer-savings-2025",
  "@type": "brando:Campaign",
  "brando:campaignName": "Summer Savings 2025",
  "brando:effectiveDuring": {
    "validFrom": "2025-06-01",
    "validThrough": "2025-08-31"
  },
  "schema:startDate": "2025-06-01",
  "schema:endDate": "2025-08-31"
}

```

---

### 3. Files and supporting material

These shared properties are available on `brando:Campaign`:

| Property IRI              | Range                | Type                 | rdfs:comment (summarised)                                                                                                     |
| ------------------------- | -------------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `brando:downloadableFile` | `schema:MediaObject` | `owl:ObjectProperty` | Links a brand, token, context, campaign, or policy node to the most up-to-date creative files exposed by the Brand OS or DAM. |
| `brando:supportingFile`   | `schema:MediaObject` | `owl:ObjectProperty` | Links a node to additional files that are helpful for production but are not the primary source-of-truth asset.               |

**Usage notes (non-normative):**

* For campaigns, use:

    * `downloadableFile` for **canonical campaign assets**:

      * master key visual,
      * core messaging doc,
      * asset packs.
    
    * `supportingFile` for:

      * moodboards,
      * internal brief decks,
      * channel-specific playbooks.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/campaigns/summer-savings-2025",
  "@type": "brando:Campaign",
  "brando:downloadableFile": {
    "@id": "https://assets.example.com/northstar/campaigns/summer-2025/master-kit.zip",
    "@type": "schema:MediaObject",
    "schema:name": "Summer Savings 2025 – Master Campaign Kit (ZIP)",
    "schema:contentUrl": "https://assets.example.com/northstar/campaigns/summer-2025/master-kit.zip",
    "schema:encodingFormat": "application/zip"
  },
  "brando:supportingFile": {
    "@id": "https://assets.example.com/northstar/campaigns/summer-2025/brief.pdf",
    "@type": "schema:MediaObject",
    "schema:name": "Summer Savings 2025 Campaign Brief (PDF)"
  }
}
```

---

### 4. External systems and integrations

`brando:Campaign` participates in the same integration pattern as brands, contexts, policies, and automation rules:

| Property IRI              | Range                        | Type                   | rdfs:comment (summarised)                                                                                    |
| ------------------------- | ---------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------ |
| `brando:externalSystem`   | `schema:SoftwareApplication` | `owl:ObjectProperty`   | Links a brand, context, policy, campaign, or automation rule to a software application integration target.   |
| `brando:externalSystemId` | `xsd:string`                 | `owl:DatatypeProperty` | Identifier for the corresponding object in an external system (e.g. Adobe GenStudio, Meta Ads Manager, etc). |

**Usage notes (non-normative):**

* Use these to link a campaign to:

    * an advertising platform campaign ID,
    * a marketing automation journey,
    * a design project/workspace.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/campaigns/summer-savings-2025",
  "@type": "brando:Campaign",
  "brando:campaignName": "Summer Savings 2025",
  "brando:externalSystem": {
    "@id": "https://example.com/integrations/meta-ads"
  },
  "brando:externalSystemId": "2384982349823498"
}
```

External system node:

```jsonld
{
  "@id": "https://example.com/integrations/meta-ads",
  "@type": "schema:SoftwareApplication",
  "schema:name": "Meta Ads Manager",
  "schema:applicationCategory": "Advertising",
  "schema:url": "https://business.facebook.com/"
}
```

---

## Combined example: Brand + Campaign adjusting behaviour

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
      "brando:hasCampaign": {
        "@id": "https://example.com/brand/northstar/campaigns/summer-savings-2025"
      },
      "brando:usesVerbalToken": {
        "@id": "https://example.com/brand/northstar/tokens/verbal/default"
      }
    },
    {
      "@id": "https://example.com/brand/northstar/campaigns/summer-savings-2025",
      "@type": "brando:Campaign",
      "brando:campaignName": "Summer Savings 2025",
      "brando:campaignTheme": "Make your summer money go further without adding risk.",
      "brando:effectiveDuring": {
        "validFrom": "2025-06-01",
        "validThrough": "2025-08-31"
      },
      "schema:startDate": "2025-06-01",
      "schema:endDate": "2025-08-31",
      "brando:downloadableFile": {
        "@id": "https://assets.example.com/northstar/campaigns/summer-2025/master-kit.zip",
        "@type": "schema:MediaObject",
        "schema:name": "Summer Savings 2025 – Master Campaign Kit (ZIP)"
      },
      "brando:externalSystem": {
        "@id": "https://example.com/integrations/meta-ads"
      },
      "brando:externalSystemId": "2384982349823498"
    },
    {
      "@id": "https://example.com/brand/northstar/tokens/verbal/default",
      "@type": "brando:VerbalToken",
      "brando:toneOfVoice": "Calm, empathetic, precise.",
      "brando:keyMessages": [
        "We help you make thoughtful, long-term decisions.",
        "We are transparent about risks and costs."
      ]
    }
  ]
}

```

**Runtime pattern (non-normative):**

1. Resolve `brando:Brand` for the request.
2. Determine if any `brando:Campaign` linked via `brando:hasCampaign` is:

    * currently active (`effectiveDuring` / event dates),
    
    * relevant to the current context or product (based on your own logic).
3. If active, adjust:

    * prompts and copy using `campaignTheme` and campaign-specific tokens (if you model them),
    * asset selection using `downloadableFile` / `supportingFile`,
    * integrations using `externalSystem` / `externalSystemId`.

---

## Related documentation

* **Concepts / overview**

    * [Brando types overview](index.md)
    * [Getting started](../getting-started.md)

* **Related types**

    * [`brando:Brand`](brand.md)
    * [`brando:Context`](context.md)
    * [`brando:Policy`](policy.md)
    * [`brando:AutomationRule`](automation-rule.md)
