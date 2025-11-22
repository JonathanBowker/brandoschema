---
title: Brando Types Overview
description: Overview of the core classes in the Brand Oracle (Brando) schema vocabulary v1.3, including their roles, relationships, and how they fit into a Brand Knowledge Graph.
---

# Brando types overview

The Brando Schema Vocabulary v1.3 defines **ten core classes** under the `brando:` namespace.

These classes form the backbone of a **Brand Knowledge Graph** used by a Brand Operating System (Brand OS), LLM apps, and agents to:

- represent **brand identity and architecture**,
- attach **verbal, visual, and audio expression tokens**,
- encode **governance and automation rules**,
- and align **products and services** with external classifications (GS1, UNSPSC, Google Product Taxonomy).

This page gives a **conceptual overview** of each class and how they relate.  
For detailed, per-class reference, see the dedicated pages under **Schema → Types** in the navigation.

---

## 1. Identity and context types

### 1.1 `brando:Brand`

**IRI:** `brando:Brand`  
**Superclasses:**  

- `schema:Intangible`  
- `schema:Brand` (alignment)

**Comment (summary):**  
> Core brand identity node extended with governance, architecture, and AI-ready semantics.

Use `brando:Brand` as the **primary identity node** for a brand in the Brand Knowledge Graph. It is the anchor point for:

- **Identity fields** – e.g. `brando:missionStatement`, `brando:visionStatement`, `brando:coreValues`, `brando:marketPosition`, `brando:tagline`.
- **Architecture and inheritance** – e.g. `brando:brandArchitectureRole`, `brando:inheritsPolicies`, `brando:inheritsTokens`.
- **Expression links** – e.g. `brando:usesVerbalToken`, `brando:usesVisualToken`, `brando:usesAudioToken`.
- **Governance links** – e.g. `brando:hasPolicy`, `brando:hasAutomationRule`.
- **Classification links** – e.g. `brando:hasProductCategory` to `brando:BrandedCategory`.

Typical use:

- One `brando:Brand` per **master brand** (corporate, product, regional).
- Additional `brando:Brand` nodes for **sub-brands** or **endorsed brands**, connected via your architecture conventions and inheritance properties.

See: **[`brando:Brand` type reference](brand.md)**

---

### 1.2 `brando:Context`

**IRI:** `brando:Context`  
**Superclass:** `schema:Intangible`  

**Comment (summary):**  
> Activation context describing audience, channel, jurisdiction, and operational conditions for brand behaviour.

A `brando:Context` describes **where, for whom, and under what conditions** the brand is active. It captures the variables that change how the brand should behave, such as:

- **Audience** – e.g. `brando:audienceSegment`, `brando:audiencePersona`.
- **Channel / surface** – often serialised in `brando:domainContext` as JSON (string).
- **Operational or regulatory conditions** – e.g. region, jurisdiction, journey stage.

Key linking properties:

- `brando:hasContext` (domain: `brando:Brand`, range: `brando:Context`)  
- `brando:usesVerbalToken`, `brando:usesVisualToken`, `brando:usesAudioToken`  
  (domain includes `brando:Context` as well as `brando:Brand`)
- `brando:hasPolicy` / `brando:hasAutomationRule`  
  (governance scoped to a particular context, where applicable)

Typical use:

- Define a context per **channel × objective × region** that materially changes behaviour, e.g.:
  - “Retail chatbot – UK”
  - “Investor relations – global site”
  - “Paid social ads – US”

See: **[`brando:Context` type reference](context.md)**

---

## 2. Expression types (BrandExpressionToken hierarchy)

Brando models expression as **reusable tokens** that can be attached to brands and contexts.

### 2.1 `brando:BrandExpressionToken`

**IRI:** `brando:BrandExpressionToken`  
**Superclass:** `schema:Intangible`  

**Comment (summary):**  
> Abstract superclass for reusable brand expression tokens across verbal, visual, and audio modalities.

This is an **abstract** class. You typically don’t instantiate it directly. Instead, you use one of its concrete subclasses:

- `brando:VerbalToken`
- `brando:VisualToken`
- `brando:AudioToken`

Use it conceptually to understand that all tokens share similar patterns:

- They are **reusable configuration objects**.
- They can be attached to `brando:Brand` and `brando:Context` via:
  - `brando:usesVerbalToken`
  - `brando:usesVisualToken`
  - `brando:usesAudioToken`

See: **[`brando:BrandExpressionToken` type reference](brand-expression-token.md)**

---

### 2.2 `brando:VerbalToken`

**IRI:** `brando:VerbalToken`  
**Superclass:** `brando:BrandExpressionToken`  

**Comment (summary):**  
> Reusable configuration of the brand’s voice, language, and behavioural prompt rules.

A `brando:VerbalToken` defines **how the brand speaks**. It is designed to be:

- **Reusable** across contexts (e.g. “default voice”, “support voice”),
- read by **LLMs and agents** to shape prompts and sampling behaviour.

Common properties:

- `brando:toneOfVoice` – free-text description of tone.
- `brando:approvedTerms` / `brando:prohibitedTerms` – vocab constraints.
- `brando:keyMessages` – core ideas that should recur.
- `brando:dialogueStyle` / `brando:speechStyle` / `brando:writingStyle`.
- `brando:promptScaffold` – optional scaffold for runtime prompts.
- `brando:pronunciationGuide` / `brando:voiceSignature` for more specialised deployments.

Linking properties:

- `brando:usesVerbalToken` (domain: `brando:Brand` or `brando:Context`, range: `brando:VerbalToken`).

See: **[`brando:VerbalToken` type reference](verbal-token.md)**

---

### 2.3 `brando:VisualToken`

**IRI:** `brando:VisualToken`  
**Superclass:** `brando:BrandExpressionToken`  

**Comment (summary):**  
> Reusable configuration of the brand’s visual system: logo, colour, typography, imagery, and motion.

A `brando:VisualToken` defines **how the brand looks** in a structured way that can be mapped to:

- design systems,
- UI theming,
- multimodal / image generation prompts.

Typical properties:

- `brando:logo` – logo references or URIs.
- `brando:colourPalette` – color tokens or palette definition.
- `brando:typography` – type system description.
- `brando:imageryStyles` – photography/illustration guidance.
- `brando:motionRules` – animation / motion design rules.
- `brando:visualReferenceLink` – links to Figma, brand portals, etc.
- `brando:visualUsageGuidelines` – usage notes.

Linking property:

- `brando:usesVisualToken` (domain: `brando:Brand` or `brando:Context`, range: `brando:VisualToken`).

See: **[`brando:VisualToken` type reference](visual-token.md)**

---

### 2.4 `brando:AudioToken`

**IRI:** `brando:AudioToken`  
**Superclass:** `brando:BrandExpressionToken`  

**Comment (summary):**  
> Reusable configuration of the brand’s sonic identity across voice, sonic logos, and audio cues.

An `brando:AudioToken` encodes **sonic identity**:

- `brando:audioLogo` – sonic logos or stings.
- `brando:audioCue` – UX/UI sounds, notifications.
- `brando:audioReferenceLink` – reference tracks or libraries.
- `brando:audioUsageGuidelines` – where and how audio should be used.
- Overlaps with `brando:voiceSignature`, `brando:pronunciationGuide` when voice is involved.

Linking property:

- `brando:usesAudioToken` (domain: `brando:Brand` or `brando:Context`, range: `brando:AudioToken`).

See: **[`brando:AudioToken` type reference](audio-token.md)**

---

## 3. Governance types

### 3.1 `brando:Policy`

**IRI:** `brando:Policy`  
**Superclass:** `schema:Intangible`  

**Comment (summary):**  
> Governance node encoding guard rails, refusals, compliance tags, and retrieval visibility.

A `brando:Policy` is a **first-class governance object**. It captures:

- brand rules,
- legal constraints,
- risk-mitigating behaviours.

Key properties include:

- **Scope and linkage**
  - `brando:appliesTo` – the brand or context the policy applies to.
  - `brando:appliesToProduct` / `brando:appliesToGTIN` – product-specific rules.

- **Governance behaviour**
  - `brando:enforcementLevel` – describes how strongly the policy is enforced (e.g. `"mandatory"`, `"advisory"`, `"conditional"`; values are not constrained by the vocabulary).
  - `brando:riskTag` – tags for risk categories (e.g. `"financial-regulation"`).
  - `brando:mustDos` / `brando:mustNotDos` – explicit behaviours.
  - `brando:refusalStrategies` – how AI systems should refuse or redirect.
  - `brando:retrievableInLLM` – whether the policy can be exposed to LLMs/RAG.

- **Lifecycle & process**
  - `brando:reviewWorkflow` – human/automated review description.
  - Temporal metadata such as `dcterms:created`, `dcterms:modified` in instance data.

Linking properties:

- `brando:hasPolicy` (domain: `brando:Brand` or `brando:Context`, range: `brando:Policy`).

See: **[`brando:Policy` type reference](policy.md)**

---

### 3.2 `brando:AutomationRule`

**IRI:** `brando:AutomationRule`  
**Superclass:** `schema:Intangible`  

**Comment (summary):**  
> Automated governance rule that reacts to monitored metrics or events to adjust brand behaviour.

A `brando:AutomationRule` encodes **condition–action logic** for governance and runtime adaptation.

Common properties:

- `brando:triggerType` – describes what triggers the rule (event/metric).
- `brando:automationAction` – description of the action taken.
- `brando:schedulingRule` – when/how often to evaluate the rule.
- `brando:monitoredMetric` – metrics the rule looks at (e.g. incident counts, quality scores).

Linking properties:

- `brando:hasAutomationRule` (domain: `brando:Brand` or `brando:Context`, range: `brando:AutomationRule`).

Example uses (non-normative):

- Tighten enforcement for high-risk contexts when a metric crosses a threshold.
- Trigger human review when specific risk tags are involved.
- Limit exposure of certain tokens or categories under conditions.

See: **[`brando:AutomationRule` type reference](automation-rule.md)**

---

## 4. Product and category type

### 4.1 `brando:BrandedCategory`

**IRI:** `brando:BrandedCategory`  
**Superclass:** `schema:Intangible`  

**Comment (summary):**  
> Product or service category overlaid with brand semantics and aligned to GS1 GPC, UNSPSC, and other standards such as Google Product Taxonomy.

A `brando:BrandedCategory` is a **brand-level category node** that:

- maintains your **brand’s own category language**, and
- aligns it with **external classification schemes**.

Key properties:

- `brando:productCategoryName` – brand-facing label for the category.
- `brando:gpcCategoryCode` / `brando:gpcCategoryDescription` – GS1 GPC alignment.
- `brando:unspscCode` – UNSPSC code alignment.
- `brando:googleProductCategoryId` – Google Product Taxonomy identifier.
- Optional governance overlays:
  - `brando:categoryApprovedTerms` / `brando:categoryProhibitedTerms`.

Linking property:

- `brando:hasProductCategory` (domain: `brando:Brand`, range: `brando:BrandedCategory`).

Typical uses:

- drive search and recommendation in commerce flows,
- keep AI-generated content aligned with product classification,
- bridge brand semantics and marketplace / ad platform taxonomies.

See: **[`brando:BrandedCategory` type reference](branded-category.md)**

---

## 5. Temporal and campaign type

### 5.1 `brando:Campaign`

**IRI:** `brando:Campaign`  
**Superclass:** `schema:Event`  

**Comment (summary):**  
> Time-bound marketing or communications campaign that may temporarily adjust brand rules.

A `brando:Campaign` represents a **time-bound overlay** (e.g. seasonal, promotional, or thematic campaign) that can:

- temporarily adjust tokens (e.g. different tone, visuals),
- introduce campaign-specific policies,
- apply to specific contexts or categories.

Typical properties:

- `brando:campaignName` – campaign label.
- `brando:campaignTheme` – narrative/theme description.
- Temporal metadata (via `schema:Event` pattern):
  - `schema:startDate`, `schema:endDate` in instance data (non-vocabulary fields but standard Schema.org usage).

Linking properties (pattern):

- Campaigns are discovered via properties such as `brando:hasCampaign` on `brando:Brand` or `brando:Context`.

See: **[`brando:Campaign` type reference](campaign.md)**

---

## 6. High-level type diagram

Conceptual relationships (non-normative diagram):

```text
schema:Thing
└── schema:Intangible
    ├── schema:Brand
    │   └── brando:Brand
    │       ├── brando:hasContext ──────────► brando:Context
    │       ├── brando:usesVerbalToken ─────► brando:VerbalToken
    │       ├── brando:usesVisualToken ─────► brando:VisualToken
    │       ├── brando:usesAudioToken ──────► brando:AudioToken
    │       ├── brando:hasPolicy ───────────► brando:Policy
    │       ├── brando:hasAutomationRule ───► brando:AutomationRule
    │       └── brando:hasProductCategory ──► brando:BrandedCategory
    │
    ├── brando:BrandExpressionToken
    │   ├── brando:VerbalToken
    │   ├── brando:VisualToken
    │   └── brando:AudioToken
    │
    ├── brando:Policy
    ├── brando:BrandedCategory
    └── brando:AutomationRule

schema:Event
└── brando:Campaign
````

> **Note:** The diagram is a helpful mental model, but the **normative source of truth** is the JSON-LD vocabulary file and the class-specific reference pages.

---

## 7. Minimal example tying types together

A small example (JSON-LD) to show the main types in play:

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
        "@id": "https://example.com/brand/northstar/policies/regulated-claims"
      },
      "brando:hasProductCategory": {
        "@id": "https://example.com/brand/northstar/categories/savings-accounts"
      }
    },
    {
      "@id": "https://example.com/brand/northstar/context/retail-chatbot",
      "@type": "brando:Context"
    },
    {
      "@id": "https://example.com/brand/northstar/tokens/verbal/default",
      "@type": "brando:VerbalToken"
    },
    {
      "@id": "https://example.com/brand/northstar/policies/regulated-claims",
      "@type": "brando:Policy"
    },
    {
      "@id": "https://example.com/brand/northstar/categories/savings-accounts",
      "@type": "brando:BrandedCategory"
    }
  ]
}
```

Each node’s **full set of properties, domains, and ranges** is documented on its dedicated type page:

* [`brando:Brand`](brand.md)
* [`brando:Context`](context.md)
* [`brando:BrandExpressionToken`](brand-expression-token.md)
* [`brando:VerbalToken`](verbal-token.md)
* [`brando:VisualToken`](visual-token.md)
* [`brando:AudioToken`](audio-token.md)
* [`brando:Policy`](policy.md)
* [`brando:BrandedCategory`](branded-category.md)
* [`brando:Campaign`](campaign.md)
* [`brando:AutomationRule`](automation-rule.md)

---

## 8. Where to go next

* For **how to model your first graph** using these types:
  → **[Getting started](../getting-started.md)**

* For **copy-paste examples**:
  → **[Quickstart (JSON-LD)](../getting-started-jsonld.md)**
  → **[Quickstart (YAML)](../getting-started-yaml.md)**

* For **per-type details** (including recommended patterns and examples):
  → use the **Types** menu entries in the navigation.
