---
title: Quickstart – Brando in JSON-LD
description: Copy-paste JSON-LD examples for the Brand Oracle (Brando) schema vocabulary v1.3, including a minimal brand graph and a brand+context+tokens+policies graph.
---

# Quickstart: Brando in JSON-LD

This page gives you **copy-paste JSON-LD examples** for the Brando Schema Vocabulary v1.3.

Use this if you:

- want to publish Brando as JSON-LD on your website or API,
- are wiring Brando into a knowledge graph or LLM/agent runtime,
- prefer to see concrete examples rather than read the ontology.

If you haven’t yet, read **[Getting started](getting-started.md)** for the mental model and workflows first.

---

## 1. JSON-LD context

For instance data, you typically need:

- `schema` – core schema.org terms (`schema:Brand`, `schema:SoftwareApplication`, etc.),
- `brando` – the Brando vocabulary namespace.

You can inline a minimal context:

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  }
}
```

Or, if you already have a broader JSON-LD context for your site or graph, just add the `brando` prefix.

---

## 2. Minimal single-brand example

This is the **smallest useful Brando graph** in JSON-LD:

* one `brando:Brand`,
* one `brando:Context`,
* one `brando:VerbalToken`,
* one `brando:Policy`.

You can embed this in a `<script type="application/ld+json">` tag on a page, or return it via an API.

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
      "brando:visionStatement": "Help people feel in control of their financial future.",
      "brando:coreValues": [
        "Clarity over complexity",
        "Do the right thing",
        "Long-term alignment with customers"
      ],
      "brando:marketPosition": "Digital-first bank for risk-aware customers.",
      "brando:tagline": "Clarity, not shortcuts.",
      "brando:hasContext": {
        "@id": "https://example.com/brand/northstar/context/retail-chatbot"
      },
      "brando:usesVerbalToken": {
        "@id": "https://example.com/brand/northstar/tokens/verbal/default"
      },
      "brando:hasPolicy": {
        "@id": "https://example.com/brand/northstar/policies/regulated-claims"
      }
    },

    {
      "@id": "https://example.com/brand/northstar/context/retail-chatbot",
      "@type": "brando:Context",
      "brando:audienceSegment": "Retail banking customers",
      "brando:audiencePersona": "Everyday saver",
      "brando:domainContext": "{\"channel\":\"chatbot\",\"surface\":\"public-website\",\"region\":\"UK\"}"
    },

    {
      "@id": "https://example.com/brand/northstar/tokens/verbal/default",
      "@type": "brando:VerbalToken",
      "brando:toneOfVoice": "Calm, empathetic, precise. Explain options in simple language without being patronising.",
      "brando:approvedTerms": [
        "interest rate",
        "fees",
        "savings goals"
      ],
      "brando:prohibitedTerms": [
        "get rich quick",
        "guaranteed returns"
      ],
      "brando:keyMessages": [
        "We help you understand the trade-offs, not hide them.",
        "We prioritise long-term financial health over short-term hype."
      ]
    },

    {
      "@id": "https://example.com/brand/northstar/policies/regulated-claims",
      "@type": "brando:Policy",
      "brando:enforcementLevel": "mandatory",
      "brando:riskTag": [
        "financial-regulation",
        "consumer-protection"
      ],
      "brando:mustNotDos": [
        "Do not recommend specific products as 'best' without disclaimers.",
        "Do not provide personalised investment advice."
      ],
      "brando:refusalStrategies": [
        "Explain that you cannot give personalised investment advice.",
        "Offer to connect the user to a human advisor."
      ],
      "brando:reviewWorkflow": "Compliance team reviews changes to this policy and any flagged AI outputs weekly.",
      "brando:retrievableInLLM": true
    }
  ]
}
```

### How a runtime uses this

An LLM app or Brand OS would:

1. Load the graph and pick the `brando:Brand` node that matches the tenant or domain.
2. Follow:

    * `brando:hasContext` → `brando:Context` for the current channel,
    * `brando:usesVerbalToken` → `brando:VerbalToken`,
    * `brando:hasPolicy` → `brando:Policy`.
3. Build prompts and guardrails using properties like:

    * `brando:toneOfVoice`, `brando:approvedTerms`, `brando:prohibitedTerms`,
    * `brando:mustDos`, `brando:mustNotDos`, `brando:refusalStrategies`,
    * `brando:enforcementLevel`.

---

## 3. Adding classification and integrations

This example adds:

* a `brando:BrandedCategory` with GS1 / UNSPSC / Google Product Taxonomy alignment, and
* an integration to an external tool via `brando:externalSystem` + `brando:externalSystemId`,
* asset links via `brando:downloadableFile` / `brando:supportingFile`.

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
      "brando:hasProductCategory": {
        "@id": "https://example.com/brand/northstar/categories/savings-accounts"
      },
      "brando:externalSystem": {
        "@id": "https://example.com/integrations/adobe-genstudio"
      },
      "brando:externalSystemId": "northstar_brand_master"
    },

    {
      "@id": "https://example.com/brand/northstar/categories/savings-accounts",
      "@type": "brando:BrandedCategory",
      "brando:productCategoryName": "Savings accounts",
      "brando:gpcCategoryCode": "43191500",
      "brando:gpcCategoryDescription": "Savings and investment accounts (example code for illustration only).",
      "brando:unspscCode": "84131500",
      "brando:googleProductCategoryId": "Finance > Banking Services",
      "brando:downloadableFile": {
        "@id": "https://assets.example.com/northstar/brand/savings-accounts-guidelines.pdf",
        "@type": "schema:MediaObject",
        "schema:name": "Savings Accounts Brand Guidelines (PDF)"
      }
    },

    {
      "@id": "https://example.com/integrations/adobe-genstudio",
      "@type": "schema:SoftwareApplication",
      "schema:name": "Adobe GenStudio",
      "schema:applicationCategory": "Brand and content operations",
      "schema:url": "https://business.adobe.com/products/genstudio.html"
    }
  ]
}
```

### What this enables

* Recommendation / search systems can use the **taxonomy IDs** (`gpcCategoryCode`, `unspscCode`, `googleProductCategoryId`) to line up brand semantics with commerce and ads systems.
* A Brand OS can use `brando:externalSystem` / `brando:externalSystemId` to:

    * map brand nodes to specific integration objects (e.g. folders, workspaces, ad accounts),
    * or drive sync jobs between the Brand Knowledge Graph and external tools.
* `brando:downloadableFile` (and `brando:supportingFile` if you use it) gives AIs and tools a **stable pointer** to current, production-ready assets.

---

## 4. Embedding JSON-LD on the web

To expose Brando to crawlers, AI systems, and your own tools via the public web, embed the JSON-LD in your HTML.

Minimal pattern:

```html
<script type="application/ld+json">
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
      "brando:missionStatement": "Financial clarity with absolute trust."
      /* ...additional Brando properties... */
    }
  ]
}
</script>
```

* You can embed **one consolidated graph** at the site root (e.g. `/brandoschema.jsonld` and `<link rel="alternate" ...>`), or smaller graphs per brand / sub-site.
* Internally, the same JSON-LD can be served over an API or stored in a graph database – the syntax does not change.

---

## 5. JSON-LD vs YAML – staying in sync

If you also use the **YAML profile**:

* treat YAML as the **authoring / config layer**,
* generate JSON-LD as the **canonical publication and runtime layer**.

A common pattern:

1. Keep `brand.yaml`, `contexts.yaml`, `tokens.yaml`, `policies.yaml` in a repo (validated against the Brando YAML profile).
2. Use a build step to emit:

    * `brandoschema.jsonld` from those YAML files.
3. Embed or serve the emitted JSON-LD from your site or Brand OS.

See:

* **[Quickstart (YAML)](getting-started-yaml.md)**
* **[YAML schema profile](spec/yaml-profile.md)**

---

## 6. Where to go next

* For a more narrative introduction: **[Getting started](getting-started.md)**
* For the full vocabulary definitions: **[Types reference](types/index.md)** and **[Properties reference](properties/index.md)**
* For runtime patterns with LLMs, agents, and tools:
  **[Runtime Integration (LLMs, MCP, APIs)](architecture/runtime-integration.md)**

Once you have a minimal JSON-LD graph working, you can incrementally add:

* more `brando:Context` nodes for key channels,
* `brando:VisualToken` and `brando:AudioToken` for multimodal expression,
* additional `brando:Policy` and `brando:AutomationRule` nodes for deeper governance.

