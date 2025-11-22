---
title: Brando Properties Overview
description: Overview of the core properties in the Brand Oracle (Brando) schema vocabulary v1.3, grouped by function and linked to the main class patterns.
---

# Brando properties overview

The Brando Schema Vocabulary defines **properties** (predicates) that attach meaning to:

- `brando:Brand`
- `brando:Context`
- `brando:BrandExpressionToken` and its subclasses (`VerbalToken`, `VisualToken`, `AudioToken`)
- `brando:Policy`
- `brando:BrandedCategory`
- `brando:Campaign`
- `brando:AutomationRule`

This page:

- groups Brando properties by **function**,
- explains how **domain** and **range** work,
- and shows how properties combine to form a **Brand Knowledge Graph**.

For per-property details (domain, range, examples), use the property pages under **Schema → Properties** in the navigation.

---

## 1. How to read Brando properties

Every property in the vocabulary is defined as:

- an **IRI** (e.g. `brando:toneOfVoice`),
- a **type**:
    - `owl:DatatypeProperty` (links a node to a literal value like text or numbers), or
    - `owl:ObjectProperty` (links a node to another node),
- a **domain** (which classes it applies to),
- a **range** (what kind of value it points to),
- an **`rdfs:comment`** (normative description in English).

Example (verbal identity):

- `brando:toneOfVoice`
    - Type: `owl:DatatypeProperty`
    - Domain: `brando:VerbalToken`
    - Range: `xsd:string`
    - Comment: “Emotional texture and attitude of the brand's voice in this token.”

In JSON-LD:

```jsonld
{
  "@id": "https://example.com/brand/northstar/tokens/verbal/default",
  "@type": "brando:VerbalToken",
  "brando:toneOfVoice": "Calm, empathetic, precise. Explain trade-offs clearly."
}
```

---

## 2. High-level property groups

For implementation and modelling, it is useful to think of Brando properties in functional groups:

1. **Identity & narrative** – who the brand is.
2. **Audience & context** – who it is speaking to, and where.
3. **Verbal expression** – how it speaks.
4. **Visual expression** – how it looks.
5. **Audio expression** – how it sounds.
6. **Governance & risk** – policies and guard rails.
7. **Automation & metrics** – rules that react to signals.
8. **Classification & product alignment** – GS1/UNSPSC/Google taxonomy.
9. **Files & integration** – DAM, Brand OS, and external tools.
10. **Lifecycle & process** – enforcement level, review workflows.

The sections below summarise each group and highlight key properties.

---

## 3. Identity & narrative properties

**Primary domain:** `brando:Brand`
**Purpose:** capture brand strategy and positioning in machine-readable form.

Representative properties:

* `brando:missionStatement`
  Core purpose and day-to-day reason for existing.

* `brando:visionStatement`
  Aspirational future state the brand is working toward.

* `brando:coreValues`
  Foundational principles and beliefs that guide decisions.

* `brando:brandPromise`
  Core commitment or experience the brand guarantees to deliver.

* `brando:brandNarrative`
  Longer-form story describing origin, evolution, and purpose.

* `brando:marketPosition`
  How the brand positions itself relative to alternatives.

* `brando:competitorContext`
  Summary of competitors, adjacent solutions, and differentiation.

Example:

```jsonld
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
  "brando:brandPromise": "We will always explain the trade-offs clearly before you decide.",
  "brando:marketPosition": "Digital-first bank for risk-aware customers."
}
```

---

## 4. Audience & context properties

**Primary domain:** `brando:Context` (some also used on `brando:Policy`, `brando:AutomationRule`)
**Purpose:** describe **who**, **where**, and **under what conditions** the brand is active.

Key properties:

* `brando:audienceSegment`
  Strategic grouping of individuals who share relevant needs or characteristics.

* `brando:audiencePersona`
  Persona-style archetypes (“Everyday saver”, “Enterprise buyer”).

* `brando:domainContext`
  Structured JSON-as-string describing channel, surface, region, etc.

* `brando:appliesTo`
  Optional scope for which products, personas, channels this node applies to.

* `brando:effectiveDuring`
  Time window or schedule as JSON-as-string.

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
  "brando:appliesTo": "Savings accounts; current accounts"
}

```

---

## 5. Verbal expression properties

**Primary domain:** `brando:VerbalToken`
**Purpose:** define **how the brand speaks** (tone, style, vocabulary).

Core properties:

* `brando:toneOfVoice`
  Emotional texture and attitude of the voice.

* `brando:dialogueStyle`
  Conversational patterns, person/pronoun usage, pacing.

* `brando:writingStyle`
  Grammar, sentence structure, formality.

* `brando:namingConvention`
  How products, features, dates, etc. are named and formatted.

* `brando:personaCard`
  Humanised brand-as-person description.

Vocabulary and messaging:

* `brando:approvedTerms`
  Words and phrases encouraged in this token.

* `brando:prohibitedTerms`
  Words and phrases that must not be used.

* `brando:keyMessages`
  Core value propositions and recurring ideas.

* `brando:tagline`
  Primary tagline plus variants.

Behavioural rules and scaffolds:

* `brando:promptScaffold`
  Reusable instruction block or template for priming LLMs.

* `brando:mustDos`
  Required behaviours.

* `brando:mustNotDos`
  Banned behaviours or constructions.

Example:

```jsonld
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
  ],
  "brando:keyMessages": [
    "We explain your options clearly before you decide."
  ],
  "brando:promptScaffold": "You are Northstar Bank's support assistant for UK retail customers...",
  "brando:mustDos": [
    "Confirm understanding of the user's question before answering."
  ],
  "brando:mustNotDos": [
    "Do not speculate about regulatory outcomes."
  ]
}
```

---

## 6. Visual expression properties

**Primary domain:** `brando:VisualToken`
**Purpose:** define **how the brand looks** (logos, colours, typography, imagery, motion).

Key properties:

* `brando:brandName`
  How the brand name should appear in visual treatments.

* `brando:logo`
  Canonical URL for the primary logo asset or set.

* `brando:colourPalette`
  Colour system, often encoded as JSON-as-string (roles and values).

* `brando:typography`
  Typography system, often JSON-as-string (families, weights, sizes).

* `brando:visualToken`
  Design tokens such as spacing, radius, elevation (JSON-as-string).

* `brando:imageryStyles`
  Photography/illustration style and composition guidance.

* `brando:motionRules`
  Principles for animation and transitions.

* `brando:visualUsageGuidelines`
  Do’s and don’ts for applying the visual system.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/tokens/visual/master",
  "@type": "brando:VisualToken",
  "brando:brandName": "Northstar",
  "brando:logo": "https://assets.example.com/northstar/brand/logo.svg",
  "brando:colourPalette": {
    "primary": "#4B3CFA",
    "secondary": "#11A39D",
    "neutral-100": "#FFFFFF"
  },
  "brando:typography": {
    "heading": "Inter",
    "body": "Inter",
    "mono": "Roboto Mono"
  },
  "brando:imageryStyles": "Natural light, real people, candid moments. Avoid generic stock imagery.",
  "brando:visualUsageGuidelines": [
    "Do not distort or recolour the primary logo.",
    "Use the primary colour only for key actions."
  ]
}

```

---

## 7. Audio expression properties

**Primary domain:** `brando:AudioToken`
**Purpose:** define **how the brand sounds** (voice, sonic logo, audio cues).

Key properties:

* `brando:audioLogo`
  URI of sonic logo or audio mark.

* `brando:voiceSignature`
  Voice profile description (accent, timbre, energy).

* `brando:pronunciationGuide`
  Pronunciation notes for brand and key terms.

* `brando:speechStyle`
  Rhythm, pacing, pausing, expressiveness.

* `brando:audioCue`
  Short sound cues used as confirmations, alerts, or transitions.

* `brando:audioUsageGuidelines`
  Rules for when and how audio is used.

* `brando:audioReferenceLink`
  URL to audio libraries or sonic style guides.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/tokens/audio/master",
  "@type": "brando:AudioToken",
  "brando:audioLogo": "https://assets.example.com/northstar/audio/northstar-sonic-logo.mp3",
  "brando:voiceSignature": "Warm, mid-range UK English voice with calm, reassuring delivery.",
  "brando:speechStyle": "Moderate pace, clear articulation, brief pauses before key amounts or dates.",
  "brando:audioCue": [
    "success: soft ascending chime",
    "error: short descending tone"
  ],
  "brando:audioUsageGuidelines": [
    "Do not autoplay audio with sound on.",
    "Ensure all audio cues have visual equivalents for accessibility."
  ]
}
```

---

## 8. Governance & risk properties

**Primary domain:** `brando:Policy`
**Also used on:** some other nodes where governance is relevant.
**Purpose:** encode guard rails, risk, and retrieval rules.

Core policy properties:

* `brando:guardRails`
  Non-negotiable boundaries AI systems must not cross.

* `brando:mustDos` / `brando:mustNotDos`
  Required and forbidden behaviours.

* `brando:refusalStrategies`
  Patterns for declining or redirecting unsafe/out-of-scope requests.

* `brando:riskScenarios`
  Known edge cases that require caution.

* `brando:complianceTags`
  Tags for regimes such as GDPR, HIPAA, FCA.

* `brando:riskTag`
  Lightweight risk domain tags (“brand-safety”, “financial-regulation”).

* `brando:enforcementLevel`
  Strength of the policy (“mandatory”, “advisory”, “conditional”, etc.).

* `brando:visibilityRating`
  Qualitative indicator of how visible this policy should be to AI systems.

* `brando:retrievableInLLM`
  Boolean flag indicating whether the policy may be indexed or retrieved in LLM/RAG flows.

* `brando:embeddingQuality`
  Assessment of how well the content performs in vector search.

Process / lifecycle:

* `brando:reviewWorkflow`
  Description of human/automated review steps.

* `brando:updatePolicy`
  How often, and in what way, the policy is updated.

Example:

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
  "brando:complianceTags": [
    "FCA",
    "UK-financial-promotions"
  ],
  "brando:retrievableInLLM": true,
  "brando:reviewWorkflow": "Compliance team reviews this policy monthly and after any regulatory change.",
  "brando:updatePolicy": "Update within 30 days of new FCA guidance affecting retail promotions."
}
```

---

## 9. Automation & metrics properties

**Primary domain:** `brando:AutomationRule`
**Purpose:** describe conditions and actions for automated governance.

Core automation properties:

* `brando:triggerType`
  Type of event or condition that activates the rule.

* `brando:monitoredMetric`
  JSON-as-string describing metric, thresholds, operators.

* `brando:dataSource`
  API endpoint or data source providing signals.

* `brando:automationAction`
  JSON-as-string describing the actions to take when conditions are met.

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

---

## 10. Classification & product alignment properties

**Primary domain:** `brando:BrandedCategory`
**Also used in:** some policy/product-scoping flows.
**Purpose:** align brand categories with GS1, UNSPSC, Google Product Taxonomy.

Core category properties:

* `brando:productCategoryName`
  Brand-facing category label.

* `brando:categoryDepartment`
  Department-level category inside the brand.

* `brando:categoryClass`
  Class-level category.

* `brando:categoryItemType`
  Specific item type.

Classification alignment:

* `brando:gpcCategoryCode`
  GS1 GPC brick code.

* `brando:gpcCategoryDescription`
  Human-readable GS1 GPC description.

* `brando:unspscCode`
  UNSPSC code.

* `brando:googleProductCategoryId`
  Google Product Taxonomy identifier.

Product-level scoping:

* `brando:appliesToGTIN`
  GTIN(s) for which this category or policy applies.

* `brando:appliesToProduct`
  Links to `gs1:Product` nodes.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/categories/savings-accounts",
  "@type": "brando:BrandedCategory",
  "brando:productCategoryName": "Savings accounts",
  "brando:categoryDepartment": "Banking",
  "brando:categoryClass": "Deposit accounts",
  "brando:categoryItemType": "Savings accounts",
  "brando:gpcCategoryCode": "43191500",
  "brando:gpcCategoryDescription": "Savings and investment accounts (example only)",
  "brando:unspscCode": "84131500",
  "brando:googleProductCategoryId": "Finance > Banking Services",
  "brando:appliesToGTIN": [
    "12345678901234",
    "12345678905678"
  ]
}
```

---

## 11. Files & integration properties

**Domains:** `brando:Brand`, `brando:Context`, `brando:BrandExpressionToken`, `brando:Policy`, `brando:BrandedCategory`, `brando:Campaign`, `brando:AutomationRule`
**Purpose:** connect Brando nodes to actual assets and external systems.

Asset properties:

* `brando:downloadableFile` (object, range: `schema:MediaObject`)
  Links to canonical, production-ready assets (e.g. logo packs, guidelines).

* `brando:supportingFile` (object, range: `schema:MediaObject`)
  Links to secondary or supporting assets.

* `brando:assetURL` (literal)
  Canonical URL for a primary asset (usually at `BrandExpressionToken` level).

* `brando:assetPreview` (literal)
  Preview-friendly URL for UI thumbnails/short clips.

Integration properties:

* `brando:externalSystem` (object, range: `schema:SoftwareApplication`)
  Which tool or platform this node is mapped to.

* `brando:externalSystemId` (literal)
  Identifier of the corresponding object in that system.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar",
  "@type": "brando:Brand",
  "schema:name": "Northstar Bank",
  "brando:downloadableFile": {
    "@id": "https://assets.example.com/northstar/brand/core-guidelines.pdf",
    "@type": "schema:MediaObject",
    "schema:name": "Northstar Brand Core Guidelines (PDF)",
    "schema:contentUrl": "https://assets.example.com/northstar/brand/core-guidelines.pdf"
  },
  "brando:externalSystem": {
    "@id": "https://example.com/integrations/adobe-genstudio"
  },
  "brando:externalSystemId": "northstar_brand_master"
}
```

---

## 12. Lifecycle & campaign properties

**Domains:** `brando:Campaign`, `brando:Context`, `brando:Policy`
**Purpose:** model time-bounded overlays and lifecycle.

Core campaign properties:

* `brando:campaignName`
  Human-readable campaign name.

* `brando:campaignTheme`
  Central message/creative theme.

Time-bounding / lifecycle:

* `brando:effectiveDuring`
  JSON-as-string time window or schedule.

In practice, you often combine:

* `brando:effectiveDuring` (Brando)
* `schema:startDate` / `schema:endDate` (Schema.org Event semantics on `brando:Campaign`)

Example:

```jsonld
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
  "schema:endDate": "2025-08-31"
}

```

---

## 13. Putting properties together at runtime

At runtime, a Brand OS typically:

1. Resolves a `brando:Brand` node.
2. Selects a relevant `brando:Context`.
3. Walks:

    * `brando:usesVerbalToken` / `usesVisualToken` / `usesAudioToken`,
    * `brando:hasPolicy`,
    * `brando:hasAutomationRule`,
    * `brando:hasProductCategory` (if a product is in scope),
    * `brando:hasCampaign` (if within a campaign window).
4. Reads properties on those nodes to:

    * construct prompts and system messages,
    * apply guard rails and risk rules,
    * set up visual and audio tokens,
    * integrate with DAM/Brand OS and external tools.

---

## 14. Where to go next

* For class-level structure:

    * [Brando types overview](../types/index.md)

* For property-level details:

    * Use the individual pages under **Schema → Properties** in the navigation
    (for example, [`brando:toneOfVoice`](toneOfVoice.md), [`brando:guardRails`](guardRails.md), etc.).

* For concrete patterns and end-to-end flows:

    * [Quickstart (JSON-LD)](../getting-started-jsonld.md)
    * [Quickstart (YAML)](../getting-started-yaml.md)
    * [Runtime Integration (LLMs, MCP, APIs)](../architecture/runtime-integration.md)
