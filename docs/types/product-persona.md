---
title: brando:ProductPersona
description: Reference for the brando:ProductPersona class in the Brand Oracle (Brando) schema vocabulary v1.3.
---

# **`brando:ProductPersona`**

### **Brando Schema Vocabulary v1.3**

A governed, **product-anchored AI persona** for LLMs, multimodal models, and agents.

A `brando:ProductPersona` encodes **how an AI is allowed to talk about a specific product or product family** – including facts, benefits, risks, tone, regulatory constraints, and claim boundaries – while remaining strictly aligned with:

- the **brand’s operatives** (Brando BGV – Brand Governance Vocabulary),
- the **product master data** (GS1 GTIN / GLN, DPP, PIP, SmartLabel, etc.),
- and the **governing policies** (tone, lexical, safety).

> **rdfs:comment**
> *A `brando:ProductPersona` defines a governed AI identity for a product or product line. It acts as a semantic bridge between GS1-based product data (e.g. GTIN JSON-LD) and Brando’s Brand Governance Vocabulary. It specifies what the product is, which canonical claims are allowed, how the tone flexes by channel, and which evidence sources the AI must rely on — enabling non-hallucinated, on-brand product content generation.*

---

## **Term definition**

- **IRI:** `brando:ProductPersona`
- **Type:** `owl:Class`
- **Superclass:** `schema:Intangible`
- **Defined in:** Brando Schema Vocabulary v1.4

A `brando:ProductPersona` is a **structured, governance-ready product identity layer** designed for use by:

- product copy generators,
- ecommerce and PDP assistants,
- support/chat agents answering product questions,
- in-store associate copilots,
- post-purchase and troubleshooting assistants.

It determines **how the AI talks about a product**, which facts it may use, and which claims are disallowed.

Within a Brand Operating System, it is the **product-level semantic identity layer**, sitting on top of **Schema.org / GS1 descriptive data** and under the **Brand Governance Vocabulary (BGV)**.

---

## **Relationship Summary**

### ProductPersona as an operative layer over GS1 + Schema.org

A `brando:ProductPersona` is typically anchored to **one or more concrete product nodes**:

- `schema:Product` (web-facing product description),
- `gs1:Product` with `gs1:gtin` (GS1 Web Vocabulary trade item),
- plus related **brand** and **organization** nodes:

    - `schema:Brand`
    - `schema:Organization`

The descriptive product graph (Schema.org + GS1) answers **“what is this product?”**
`brando:ProductPersona` answers **“if an AI talks about this product, how must it behave?”**

### **Inbound: from Product / Brand**

#### **`brando:hasProductPersona` (recommended)**

Links a concrete product (or product family) to its governed persona.

- **Type:** `owl:ObjectProperty`
- **Domain:** `schema:Product` (or `gs1:Product`)
- **Range:** `brando:ProductPersona`
- **rdfs:comment:** Connects a product GTIN / GLN instance to the AI persona that is allowed to speak for it.

This lets each product (or SKU family) declare **its canonical AI voice**.

---

### **Inbound: from `brando:Brand`**

#### **`brando:hasSyntheticPersona` / `brando:hasProductPersona`**

A `brando:Brand` may reference:

- brand-level personas: `brando:SyntheticPersona`
- product-level personas: `brando:ProductPersona`

Together, these support **portfolio-wide governance**: corporate voice + product voices, expressed as governed personas.

---

### **Outbound Relationships (anchor & governance)**

A `brando:ProductPersona` typically references:

   - **`schema:Product` / `gs1:Product`** — the product(s) described.
   - **`schema:Brand` / `schema:Organization`** — visible brand and accountable owner.

- **GS1 identifiers** via Brando properties:

    - `brando:appliesToGTIN` → GTIN(s) covered,
    - `brando:appliesToProduct` → product JSON-LD URI(s) covered.

- **Brando BGV objects**:

    - `brando:VerbalToken`, `brando:VisualToken`, `brando:AudioToken`.

- **Policies**:

    - `brando:Policy` nodes for lexical, claim, and safety constraints.

- **Contexts**:

    - `brando:Context` nodes describing channel / region / journey situations.

In many implementations, a ProductPersona is also treated as a **profiled SyntheticPersona**, specialised around `schema:Product` and `gs1:gtin` – but in the core vocabulary it is a dedicated class for product-anchored personas.

---

## **1. Identity Properties**

> Product persona “profile card”.

| Property                      | Expected Type            | Description                                                |
| ----------------------------- | ------------------------ | ---------------------------------------------------------- |
| **name**                      | Text                     | Primary name of the product persona.                       |
| **alternateName**             | Text                     | Additional, internal, or test names.                       |
| **description**               | Text                     | High-level description of the persona’s purpose.           |
| **identifier**                | Text, URL, PropertyValue | Unique ID for the persona (internal or external).          |
| **image**                     | ImageObject, URL         | Icon/avatar used in tools.                                 |
| **url**                       | URL                      | Canonical documentation page for this persona.             |
| **disambiguatingDescription** | Text                     | Clarifies scope (e.g. “US PDP voice for GTIN X only”).     |

**Usage notes:**
These fields describe the **persona itself**, not the underlying product master data.

---

## **2. Product Anchor & GS1 Linkage**

> Where the persona “lands” in GS1 / Schema.org product space.

| Property                 | Expected Type           | Description                                                                                      |
| ------------------------ | ----------------------- | ------------------------------------------------------------------------------------------------ |
| **representsProduct**    | `schema:Product`, URL   | Canonical product node represented by this persona.                                              |
| **appliesToGTIN**        | Text (GTIN), URL        | GTIN(s) from GS1 master data that this persona is allowed to speak for.                          |
| **appliesToProduct**     | URL                     | Product graph / JSON-LD URI(s) covered (e.g. `{gtin}.jsonld`).                                   |
| **gs1DigitalLink**       | URL                     | Optional GS1 Digital Link resolver URL for this product.                                        |
| **productScope**         | Text                    | Scope label (e.g. “single-sku”, “variant-family”, “range-family”).                              |
| **variantDimension**     | Text                    | Variation dimensions, e.g. “size”, “colour”, “flavour”.                                         |
| **evidenceSource**       | URL, Text               | Primary truth sources: DPP, SmartLabel, PIP, masterData, etc.                                   |
| **evidencePriorityRule** | Text                    | How to resolve conflicts between sources (e.g. “DPP > masterData > local overrides”).           |

**Usage notes:**
`appliesToGTIN` is the main bridge into GS1. A separate `{gtin}.jsonld` can define full GS1 Web Vocabulary content; `brando:ProductPersona` then **constrains how AI is allowed to use it**.

---

## **3. Brand & Category Relationships**

> How this product persona sits inside the brand architecture.

| Property                    | Expected Type         | Description                                                         |
| --------------------------- | --------------------- | ------------------------------------------------------------------- |
| **brand**                   | `schema:Brand`        | Brand visible to guests.                                           |
| **worksFor**                | `schema:Organization` | Owning or accountable organisation.                                |
| **productCategoryName**     | Text                  | Human-readable category / item type label.                          |
| **categoryDepartment**      | Text                  | Department classification (e.g. from a retailer’s hierarchy).       |
| **categoryClass**           | Text                  | Class / subcategory identifier.                                     |
| **googleProductCategoryId** | Text                  | Google product category mapping (if used).                          |
| **gpcCategoryCode**         | Text                  | GS1 GPC category code aligned to GS1 master data.                  |
| **gpcCategoryDescription**  | Text                  | Human label for the GS1 GPC code.                                  |
| **unspscCode**              | Text                  | UNSPSC code if used.                                               |
| **brandArchitectureRole**   | Text                  | Role in brand architecture (“masterbrand”, “endorsed”, etc.).      |

---

## **4. Audience, Use Cases & Channel Context**

> Who the persona speaks to and in which journeys.

| Property             | Expected Type         | Description                                                                 |
| -------------------- | --------------------- | --------------------------------------------------------------------------- |
| **personaArchetype** | Text                  | Archetype (e.g. “product-guide”, “ingredient-expert”, “tech-explainer”).   |
| **intendedAudience** | Audience, Text        | Shoppers, parents, clinicians, associates, internal teams, etc.            |
| **useCaseScope**     | Text                  | Use-case labels (e.g. “PDP copy”, “Q&A assistant”, “after-sales support”).  |
| **channelScope**     | Text, URL             | Channels: “web PDP”, “mobile app”, “store kiosk”, “support chat”, “ads”.   |
| **contextGraph**     | `brando:Context`, URL | Linked contexts describing channel, region, language, scenario.            |
| **riskProfile**      | Text                  | Risk description (“low-risk FMCG”, “regulated healthcare”, “kids product”). |

---

## **5. Language, Tone & Brand Expression**

> How the product persona speaks, within brand constraints.

| Property            | Expected Type        | Description                                                 |
| ------------------- | -------------------- | ----------------------------------------------------------- |
| **knowsLanguage**   | Language, Text       | Languages supported.                                       |
| **defaultLanguage** | Language, Text       | Primary language (e.g. `"en-US"`).                          |
| **toneOfVoice**     | Text                 | Tone description (“clear, factual, family-friendly”, etc.).|
| **writingStyle**    | Text                 | Style hints (“short PDP bullets”, “FAQ-style answers”).    |
| **speechStyle**     | Text                 | For voice experiences (if applicable).                      |
| **keyMessages**     | Text                 | Approved canonical product messaging statements.           |
| **mustDos**         | Text                 | Required messaging behaviours (e.g. mandatory disclaimers).|
| **mustNotDos**      | Text                 | Prohibited behaviours (e.g. “no superlative claims”).      |
| **tagline**         | Text                 | Optional tagline / reusable line.                          |
| **usesVerbalToken** | `brando:VerbalToken` | Linked verbal identity assets (BGV tokens).                |

**Usage notes:**
This is where the **Brand Governance Vocabulary (BGV)** is applied: tone, phrasing patterns, approved descriptors, and category-specific tokens.

---

## **6. Claim, Safety & Regulatory Governance**

> What the AI may and may not say about the product.

| Property                     | Expected Type     | Description                                                                   |
| ---------------------------- | ----------------- | ----------------------------------------------------------------------------- |
| **claimBoundary**            | Text              | Overall description of what kinds of claims are allowed.                     |
| **prohibitedClaims**         | Text              | Concrete examples of disallowed claims (e.g. health or performance claims).  |
| **evidenceRequiredForClaim** | Text              | Rules for when a claim can be made (e.g. “only if evidenceSource X states it”). |
| **regulatoryRegion**         | Text              | Jurisdictional scope (e.g. “US”, “EU”, “UK + US”).                           |
| **riskTag**                  | Text, URL         | Risk category tags (e.g. “food”, “nutrition-claims”, “children”).            |
| **guardRails**               | Text              | Guardrail statements for product content.                                     |
| **refusalStrategies**        | Text              | How to decline unsafe requests (“explain missing evidence”, etc.).           |
| **complianceTags**           | Text              | Compliance markers (e.g. “FDA-adjacent”, “EU eco-claims”).                   |
| **governingPolicyGraph**     | URL, CreativeWork | Link to the policy graph controlling product claims.                          |
| **inheritsPolicies**         | URL               | Brand or category policies that this persona inherits.                        |

---

## **7. Data Sources & Master Data Alignment**

> How the persona connects to the wider data estate (GS1 + internal systems).

| Property               | Expected Type | Description                                                               |
| ---------------------- | ------------ | ------------------------------------------------------------------------- |
| **dataSource**         | Text, URL    | Connected data sources (“GS1 masterData”, “Item Master”, “SmartLabel”).  |
| **externalSystem**     | Text, URL    | System identifier (e.g. “GS1 US Data Hub”, “Retail Item Master”).        |
| **externalSystemId**   | Text         | Product ID in external system(s).                                        |
| **masterDataPriority** | Text         | (Optional) Precedence rules between systems.                             |
| **retrievableInLLM**   | Boolean      | Whether this persona’s data is optimised for retrieval in LLMs.          |
| **downloadableFile**   | MediaObject, URL | Optional localised product profile (e.g. YAML/JSON reference file).  |

---

## **8. Prompting, Runtime & Tools**

> How runtime systems actually use the persona.

| Property               | Expected Type    | Description                                                |
| ---------------------- | ---------------- | ---------------------------------------------------------- |
| **promptScaffold**     | Text             | Canonical prompt template for this product persona.        |
| **personaCard**        | Text, URL        | Machine-readable summary / display card.                   |
| **assetPreview**       | URL              | Preview asset for UI selection.                            |
| **supportingFile**     | MediaObject, URL | Additional structured data (e.g. channel-specific configs).|
| **underlyingModel**    | Text             | LLM / runtime engine binding (optional).                   |
| **activationCondition**| Text             | When this persona should be selected (e.g. GTIN match).    |
| **integrationScope**   | Text             | Tooling scope: PDP generator, chat, search, ads, etc.      |

---

## **9. Lifecycle & Governance Oversight**

> Who owns and maintains the product persona.

| Property              | Expected Type        | Description                                      |
| --------------------- | -------------------- | ------------------------------------------------ |
| **owner**             | Person, Organization | Business owner (e.g. category or brand team).    |
| **maintainer**        | Person, Organization | Day-to-day maintainer / steward.                 |
| **governanceModel**   | Text                 | Governance notes (“brand + data duo”, etc.).     |
| **dateCreated**       | Date                 | Creation date.                                   |
| **dateModified**      | Date                 | Last modification date.                          |
| **reviewCycle**       | Duration, Text       | Review interval (e.g. “P90D”).                   |
| **visibilityRating**  | Text                 | Visibility (“internal-only”, “enterprise”, etc.).|
| **isTestPersona**     | Boolean              | Whether this persona is experimental.            |

---

## **JSON-LD EXAMPLE (Product + GS1 + ProductPersona)**

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/",
    "gs1": "https://ref.gs1.org/voc/"
  },
  "@graph": [

    /* ---------------------------------------------------------
     * 1. PRODUCT (GS1 + schema.org)
     * --------------------------------------------------------- */
    {
      "@id": "https://example.com/product/00012345600012",
      "@type": [
        "schema:Product",
        "gs1:Product"
      ],
      "schema:name": "Target Brand Example Cereal 500g",
      "schema:brand": "https://example.com/brand/target",
      "gs1:gtin": "00012345600012",
      "gs1:productIdentifier": "00012345600012",
      "gs1:gpcCategoryCode": "10000251",
      "schema:category": "Breakfast cereals",
      "schema:description": "Fortified whole-grain cereal suitable for everyday family breakfasts.",
      "schema:sku": "TGT-EXAMPLE-CEREAL-500G",
      "brando:hasProductPersona": "https://example.com/product-persona/gtin-00012345600012"
    },

    /* ---------------------------------------------------------
     * 2. BRAND
     * --------------------------------------------------------- */
    {
      "@id": "https://example.com/brand/target",
      "@type": "schema:Brand",
      "schema:name": "Target",
      "schema:url": "https://www.target.com/"
    },

    /* ---------------------------------------------------------
     * 3. PRODUCT PERSONA
     * --------------------------------------------------------- */
    {
      "@id": "https://example.com/product-persona/gtin-00012345600012",
      "@type": "brando:ProductPersona",

      /* 1. Identity */
      "name": "Example Cereal PDP Persona",
      "alternateName": "Example Cereal Product Voice (US PDP)",
      "description": "Governed PDP and Q&A persona for Example Cereal 500g, aligned with Target brand and GS1 master data.",
      "identifier": "persona-product-00012345600012-v1",
      "url": "https://example.com/docs/product-personas/gtin-00012345600012",
      "disambiguatingDescription": "US English, consumer-facing product persona for GTIN 00012345600012.",

      /* 2. Product Anchor & GS1 Linkage */
      "representsProduct": "https://example.com/product/00012345600012",
      "appliesToGTIN": "00012345600012",
      "appliesToProduct": "https://data.example.com/gs1/00012345600012.jsonld",
      "gs1DigitalLink": "https://id.gs1.org/01/00012345600012",
      "productScope": "single-sku",
      "variantDimension": [
        "packageSize"
      ],
      "evidenceSource": [
        "https://data.example.com/gs1/00012345600012.jsonld",
        "https://smartlabel.example.com/00012345600012"
      ],
      "evidencePriorityRule": "Use GS1 masterData as primary truth; SmartLabel as secondary; never invent attributes.",

      /* 3. Brand & Category Relationships */
      "brand": "https://example.com/brand/target",
      "worksFor": "https://example.com/brand/target",
      "productCategoryName": "Breakfast cereals",
      "categoryDepartment": "Grocery",
      "categoryClass": "Cereals",
      "gpcCategoryCode": "10000251",
      "gpcCategoryDescription": "Ready-to-eat cereal products.",

      /* 4. Audience, Use Cases & Channel */
      "personaArchetype": "product-guide",
      "intendedAudience": [
        "Everyday shoppers comparing breakfast options",
        "Parents looking for simple family cereals"
      ],
      "useCaseScope": [
        "PDP copy generation",
        "On-site Q&A about ingredients, allergens, nutrition",
        "Post-purchase usage tips"
      ],
      "channelScope": [
        "web PDP",
        "mobile PDP",
        "support-chat"
      ],
      "contextGraph": [
        "https://example.com/context/global-web",
        "https://example.com/context/support-chat-en"
      ],

      /* 5. Language, Tone & Expression */
      "knowsLanguage": "en",
      "defaultLanguage": "en-US",
      "toneOfVoice": "clear, factual, family-friendly, non-sensational",
      "writingStyle": "short PDP sentences and structured FAQs.",
      "keyMessages": [
        "Whole-grain cereal for everyday family breakfasts.",
        "Fortified with key vitamins and minerals as listed on the pack.",
        "Portion guidance and ingredients always match the packaging and GS1 data."
      ],
      "mustDos": [
        "Always base nutritional and ingredient statements on GS1 and packaging data.",
        "Include allergens clearly when asked.",
        "Encourage checking local packaging for the most current information."
      ],
      "mustNotDos": [
        "Do not promise health outcomes or weight-loss effects.",
        "Do not infer dietary suitability without explicit evidence (e.g. gluten-free)."
      ],
      "usesVerbalToken": [
        "https://example.com/verbal/target-grocery-tone",
        "https://example.com/verbal/target-family-friendly-phrases"
      ],

      /* 6. Claim, Safety & Regulatory Governance */
      "claimBoundary": "May describe features and composition, not health outcomes or medical claims.",
      "prohibitedClaims": [
        "Cures or prevents any disease.",
        "Guarantees weight loss or long-term health outcomes."
      ],
      "evidenceRequiredForClaim": "Only state nutritional and ingredient facts if present in GS1 or approved Target item master.",
      "regulatoryRegion": [
        "US"
      ],
      "riskTag": [
        "food",
        "nutrition-claims"
      ],
      "guardRails": [
        "No hallucinated ingredients or nutritional values.",
        "No absolute health or performance guarantees.",
        "Always defer to packaging and GS1 data when in doubt."
      ],
      "refusalStrategies": "If requested claims are not supported by data, explain that only label-backed, GS1-aligned information can be provided.",
      "inheritsPolicies": [
        "https://example.com/policy/global-tone-policy",
        "https://example.com/policy/global-lexical-policy",
        "https://example.com/policy/brand-safety-core"
      ],
      "governingPolicyGraph": "https://example.com/policy-graph/food-category-governance",

      /* 7. Data Sources & Master Data Alignment */
      "dataSource": [
        "GS1 masterData",
        "Target Item Master",
        "SmartLabel"
      ],
      "externalSystem": [
        "https://datahub.gs1us.org/",
        "https://data.target.com/item-master"
      ],
      "externalSystemId": [
        "GS1US:00012345600012",
        "TGT-ITEM:123456"
      ],
      "retrievableInLLM": true,

      /* 8. Prompting, Runtime & Tools */
      "promptScaffold": "You are the governed product persona for GTIN 00012345600012. Use only GS1 and Target item master data as truth. Generate short, factual, family-friendly descriptions and answers. Do not make health or performance claims.",
      "personaCard": "Example cereal PDP persona for US web and app channels.",
      "activationCondition": "Activate when product context includes GTIN 00012345600012 or product URI https://example.com/product/00012345600012.",
      "integrationScope": [
        "PDP generator",
        "guest-facing Q&A",
        "associate support tools"
      ],

      /* 9. Lifecycle & Governance */
      "owner": "https://example.com/team/grocery-category-owner",
      "maintainer": "https://example.com/team/brand-governance",
      "governanceModel": "Joint ownership: grocery category + brand governance + data quality teams.",
      "dateCreated": "2025-10-01",
      "dateModified": "2025-11-01",
      "reviewCycle": "P90D",
      "isTestPersona": false
    }
  ]
}
```

---

## **Related documentation**

* [`brando:SyntheticPersona`](synthetic-persona.md)
* [`brando:Brand`](brand.md)
* [`brando:Context`](context.md)
* [`brando:Policy`](policy.md)
* [`brando:VerbalToken`](verbal-token.md)
* [JSON-LD context](../spec/jsonld-context.md)
* [Chatbot + Brando runtime flow](../examples/chatbot-runtime.md)

---
