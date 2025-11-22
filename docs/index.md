---
title: Brand Oracle (Brando) Schema Vocabulary v1.3
description: Brand Oracle (Brando) is an AI-native, governance-ready schema and ontology for brands. It defines JSON-LD classes and properties for brand identity, expression, governance, and product categorisation so LLMs, agents, and multimodal systems can behave in on-brand, compliant ways.
keywords:
  - Brand Oracle
  - Brando
  - Brando Schema
  - brand ontology
  - brand schema
  - open standard
  - Brand Operating System
  - AI brand operations
  - AI brand governance
  - brand knowledge graph
  - AI-native brand identity
  - structured brand metadata
  - brand semantics
  - verbal identity schema
  - visual identity schema
  - audio identity schema
  - brand compliance AI
  - intelligent brand indexing
  - AI brand risk management
  - brand guidelines for AI
  - LLM brand safety
  - AI brand discovery
  - brand architecture
  - house of brands
author: Advanced Analytica

# Open Graph metadata
og_title: Brand Oracle (Brando) Schema Vocabulary v1.3
og_description: Brando is an AI-native schema and ontology that structures brand identity, tokens, and policies so LLMs, agents, and multimodal systems can behave in on-brand, compliant ways.
og_type: website
og_url: https://brandoschema.com/
og_image: /assets/images/4x/brando@4x.webp

# Twitter Card metadata
twitter_card: summary_large_image
twitter_title: Brand Oracle (Brando) – Schema Vocabulary v1.3
twitter_description: An open, Schema.org-compatible vocabulary for brand identity, expression, governance, and product categorisation, designed for AI-native Brand Operating Systems.
twitter_image: /assets/images/4x/brando@4x.webp
---

# **Brand Oracle (Brando) Schema Vocabulary v1.3**

> **Brando** is a Schema.org compatible vocabulary for brand identity, expression, governance, and product categorisation – designed for LLMs, agents, and multimodal systems.

<img src="https://brandoschema.com/assets/images/4x/brando@4x.webp" alt="Brando Schema: AI-native vocabulary for brands" style="width: 100%; max-width: 960px; display: block; margin: 2rem auto;" />

This site documents the **Brando Schema Vocabulary v1.3**:

- the **JSON-LD vocabulary** under the `brando:` namespace,
- the **YAML profile** for configuration and ops,
- and reference **integration patterns** for Brand Operating Systems (Brand OS), RAG pipelines, and agent runtimes.

Brando repurposes Schema.org style JSON-LD from a **descriptive SEO layer** into a **prescriptive control layer** for generative and agentic AI, so you can tell models:

- **who** the brand is,
- **how** it should look, sound, and behave,
- and **what** is allowed, required, or forbidden in different contexts.

---

## What is Brand Oracle (Brando)?

**Brand Oracle (Brando)** is:

- a **schema and ontology** (JSON-LD, Schema.org–style) for brands,
- a **vocabulary** of classes and properties focused on brand identity, expression, governance, and integrations,
- and a **taxonomy layer** for brand/product categories aligned with GS1, UNSPSC, and Google Product Taxonomy.

The vocabulary is defined as a Linked Data ontology under:

- **Namespace:** `https://brandoschema.com/`  
- **Preferred prefix:** `brando`

It:

- extends `schema:Brand` and `schema:Intangible`,
- is published in **JSON-LD** as the canonical form,
- and is profiled for **YAML** configuration and **TypeScript** types.

You can:

- embed Brando JSON-LD in public sites for AI and web discovery,
- manage Brando YAML in repositories as configuration for a **Brand Operating System (Brand OS)**,
- or load Brando instances into a **Brand Knowledge Graph** that serves multiple runtimes.

The ontology header describes the vocabulary as:

> *Core classes and properties for the Brand Oracle (Brando) schema and ontology, designed to constrain generative, search, agent, and multimodal outputs to on-brand, compliant behaviour.*

---

## What this documentation covers

Use the navigation, or jump directly into:

- **[Getting started](getting-started.md)** – motivation, core ideas, and how to adopt Brando incrementally.
- **[Quickstart (JSON-LD)](getting-started-jsonld.md)** – minimal JSON-LD examples for a brand, context, and policies.
- **[Quickstart (YAML)](getting-started-yaml.md)** – YAML profile for teams that treat Brando as configuration.
- **[Types reference](types/index.md)** – definitions of `brando:Brand`, `brando:Context`, expression tokens, policies, campaigns, and rules.
- **[Properties reference](properties/index.md)** – domains, ranges, and usage notes for all `brando:` properties.
- **[Brand Operating System](architecture/brand-os.md)** – how Brando underpins a Brand OS and Brand Knowledge Graph.
- **[Runtime integration (LLMs, MCP, APIs)](architecture/runtime-integration.md)** – how to use Brando at inference time.
- **[JSON-LD context](spec/jsonld-context.md)** and **[YAML profile](spec/yaml-profile.md)** – implementation details and constraints.
- **[Examples](examples/minimal-brand.md)** – worked examples for brands, portfolios, and runtime flows.

---

## Structured Governance and AI-manageable design

Traditional brand governance is built around **static, human-only artefacts**:

- PDF guidelines and slide decks,
- brand portals and DAM folders,
- unstructured “system prompts” and playbooks for AI.

These do not translate cleanly into **probabilistic systems** like LLMs and agents.

Brando applies **Structured Governance**:

- reusing **Semantic Web patterns** (JSON-LD, Schema.org, GS1),
- modelling **brand intent, rules, and tokens as data** (not prose),
- and using that data as a **control layer** that AI runtimes can load, combine, and enforce.

Foundation models are heavily trained on Schema.org-style JSON-LD.  
Brando reuses this structure so that models can interpret `brando:` classes and properties **zero-shot**, without custom training.

### Why AI has to help manage the Brand Knowledge Graph

A Brando-based **Brand Knowledge Graph** is intended to be **living**:

- brands, products, and portfolios change,
- channels and surfaces proliferate,
- policies evolve with regulation and risk.

At any meaningful scale – multiple brands, markets, campaigns, and channels – **maintaining this graph purely by hand becomes prohibitively hard**:

- too many contexts (`brando:Context`) to keep in sync,
- too many tokens (`brando:VerbalToken`, `brando:VisualToken`, `brando:AudioToken`) to update,
- too many policies (`brando:Policy`, `brando:AutomationRule`) to refactor as requirements change.

Brando is therefore **AI-manageable by design**:

- the vocabulary is compact, with clear domains and ranges, so agents can **propose changes** (e.g. new contexts, updated tokens) in JSON-LD or YAML;
- LLMs can generate **schema-conformant Brando data** zero-shot because the structure mirrors Schema.org and linked data patterns;
- properties like `brando:reviewWorkflow`, `brando:enforcementLevel`, and `brando:riskTag` support **human-in-the-loop governance**, not bypass it.

In practice:

> People define intent and governance.  
> **AI does the mechanical work** of keeping the Brand Knowledge Graph up to date, under auditable human control.

---

## Core concepts and classes

Brando v1.3 defines ten core classes under the `brando:` namespace:

| Class                          | Informal purpose                                                                                     |
| ------------------------------ | ----------------------------------------------------------------------------------------------------- |
| `brando:Brand`                | Core brand identity node extended with governance, architecture, and AI-ready semantics.             |
| `brando:Context`              | Activation context describing audience, channel, jurisdiction, and operational conditions.           |
| `brando:BrandExpressionToken` | Abstract superclass for reusable expression tokens across verbal, visual, and audio modalities.      |
| `brando:VerbalToken`          | Reusable configuration of the brand’s voice, language, and behavioural prompt rules.                 |
| `brando:VisualToken`          | Reusable configuration of visual system: logo, colour, typography, imagery, and motion.              |
| `brando:AudioToken`           | Reusable configuration of sonic identity: voice, sonic logos, and audio cues.                        |
| `brando:Policy`               | Governance node for guard rails, refusals, compliance tags, and retrieval visibility.                |
| `brando:BrandedCategory`      | Brand-specific product/service category aligned with GS1, UNSPSC, and Google Product Taxonomy.       |
| `brando:Campaign`             | Time-bound campaign that may temporarily adjust brand rules.                                         |
| `brando:AutomationRule`       | Automated governance rule reacting to metrics or events to adjust brand behaviour.                   |

All Brando classes ultimately extend `schema:Intangible`, and `brando:Brand` additionally extends `schema:Brand` (and is related to `gs1:Brand`).

### High-level relationships

Key structural properties include:

- `brando:hasContext`  
  – `brando:Brand → brando:Context` (activation contexts in which the brand operates)

- `brando:usesVerbalToken` / `brando:usesVisualToken` / `brando:usesAudioToken`  
  – `brando:Brand` or `brando:Context →` expression tokens for different modalities

- `brando:hasPolicy` / `brando:hasAutomationRule`  
  – attach governance and automation to brands and contexts

- `brando:hasProductCategory`  
  – `brando:Brand → brando:BrandedCategory` nodes with GS1/UNSPSC/Google mappings

See **[Types reference](types/index.md)** and **[Properties reference](properties/index.md)** for normative definitions (domains, ranges, comments).

---

## Canonical form and implementation profiles

Brando is **JSON-LD–first**:

- the JSON-LD vocabulary defines all **classes**, **properties**, and **metadata** (publisher, license, version info);
- implementations are encouraged to **publish JSON-LD** on the public web where possible.

Two implementation profiles are documented:

1. **JSON-LD profile**

   For:

   - public publication on brand domains,
   - ingest into knowledge-graph platforms,
   - direct consumption by AI runtimes.

   See:

   - **[JSON-LD context](spec/jsonld-context.md)**  
   - **[Quickstart (JSON-LD)](getting-started-jsonld.md)**

2. **YAML profile**

   Same semantics, represented as YAML, suitable for:

   - configuration repositories,
   - CI/CD pipelines,
   - infrastructure-as-brand setups.

   See:

   - **[YAML profile](spec/yaml-profile.md)**  
   - **[Quickstart (YAML)](getting-started-yaml.md)**

A **TypeScript model** is provided as a **non-normative** convenience layer for strongly-typed implementations  
(see **[TypeScript types](spec/typescript-model.md)**).

---

## Example: minimal brand + context in JSON-LD

The example below shows a small Brando graph using canonical JSON-LD:

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
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
    "@id": "https://example.com/brand/northstar/context/retail-chatbot",
    "@type": "brando:Context",
    "brando:audienceSegment": "Retail banking customers",
    "brando:domainContext": "{\"channel\":\"chatbot\",\"jurisdiction\":\"UK\",\"productLine\":\"current-accounts\"}"
  },
  "brando:usesVerbalToken": {
    "@id": "https://example.com/brand/northstar/tokens/verbal/default",
    "@type": "brando:VerbalToken",
    "brando:toneOfVoice": "calm, empathetic, and precise",
    "brando:approvedTerms": [
      "interest rate",
      "fees",
      "savings goals"
    ],
    "brando:prohibitedTerms": [
      "guaranteed returns",
      "get rich quick"
    ]
  },
  "brando:hasPolicy": {
    "@id": "https://example.com/brand/northstar/policies/regulated-claims",
    "@type": "brando:Policy",
    "brando:enforcementLevel": "mandatory",
    "brando:riskTag": [
      "financial-regulation",
      "consumer-protection"
    ],
    "brando:refusalStrategies": [
      "Decline to provide personalised investment advice.",
      "Redirect to a human advisor for complex suitability questions."
    ]
  }
}
```

The same structure can be authored as YAML using the **Brando YAML profile**, then emitted as JSON-LD at build or deployment time.

---

## Brando in a Brand Operating System

Brando is designed to act as the **data and ontology layer** for a Brand Operating System:

**Identity & architecture**

  Model house-of-brands, branded houses, and hybrids with multiple `brando:Brand` nodes and properties such as:

  * `brando:brandArchitectureRole`
  * `brando:inheritsPolicies`
  * `brando:inheritsTokens`


**Context-aware behaviour**

  Use `brando:Context` to represent channels, audiences, regulatory regimes, and operational conditions that change how the brand behaves.

**Multimodal expression tokens**

  Attach `brando:VerbalToken`, `brando:VisualToken`, and `brando:AudioToken` to brands and contexts using:

  * `brando:usesVerbalToken`
  * `brando:usesVisualToken`
  * `brando:usesAudioToken`

**Governance and lifecycle**

  Encode rules and risk in `brando:Policy` and `brando:AutomationRule` with:

  * `brando:enforcementLevel` (e.g. `"mandatory"`, `"advisory"`, `"conditional"`),
  * `brando:riskTag`,
  * `brando:reviewWorkflow`,
  * plus temporal metadata (`dcterms:created`, `dcterms:modified`, optionally `schema:validFrom` / `schema:validThrough` in instance data).

**Runtime automation and integrations**

  Use:

  * `brando:AutomationRule`, `brando:triggerType`, `brando:automationAction`, `brando:schedulingRule` for automated checks and behaviours;
  * `brando:externalSystem` and `brando:externalSystemId` to connect Brando nodes to platforms such as Adobe GenStudio, Meta Ads Manager, Figma, or internal CMSs;
  * `brando:downloadableFile` and `brando:supportingFile` to point AI systems at the right assets in a DAM or Brand OS.

For architecture and runtime patterns, see:

* **[Brand Operating System](architecture/brand-os.md)**
* **[Runtime Integration (LLMs, MCP, APIs)](architecture/runtime-integration.md)**
* **[Chatbot + Brando runtime flow](examples/chatbot-runtime.md)**

---

## Classification alignment

`brando:BrandedCategory` nodes provide a bridge between a brand’s own taxonomy and external standards.

Relevant properties include:

* `brando:gpcCategoryCode` / `brando:gpcCategoryDescription`
  – GS1 Global Product Classification (GPC),

* `brando:unspscCode`
  – UNSPSC category identifiers,

* `brando:googleProductCategoryId`
  – Google Product Taxonomy identifiers.

This lets you:

* keep **brand-facing labels** and semantics in your own language,
* while exposing machine-readable hooks to **GS1 / UNSPSC / Google** for commerce, ads, and marketplaces.

See also **[Brand portfolios & architecture](architecture/brand-architecture.md)** for portfolio- and category-level modelling patterns.

---

## Versioning and licensing

From the vocabulary header (`owl:Ontology`):

* **Title:** `Brando Schema Vocabulary v1.3`
* **Namespace (prefix):** `brando: → https://brandoschema.com/`
* **Ontology version info:** `owl:versionInfo = "1.4"`
* **Created:** `dcterms:created = "2025-11-22"`
* **Modified:** `dcterms:modified = "2025-11-22"`
* **Publisher:** `Advanced Analytica`
* **License:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) via `cc:license`

Implementations should treat:

* the **JSON-LD vocabulary file** and
* this **documentation set**

as the **normative reference** for Brando Schema Vocabulary v1.3.

Any “future ideas” or experimental patterns mentioned in the docs are explicitly labelled as:

* **non-normative guidance**, or
* **potential future extensions**, or
* **profile-level recommendations**,

and are **not** part of the core v1.3 vocabulary.

---

## Stewardship and support

Brando is initially stewarded by **Advanced Analytica**.

The intent is to:

* keep the **core vocabulary stable and minimal**,
* allow organisations and platforms to define **extensions** for their own needs,
* and evolve the spec in collaboration with brands, agencies, and technology providers.

For information about stewardship, trademark usage, and terms, see:

* **[Advanced Analytica](about.md)**
* **[Brando Trademark](use-brando-trademark.md)**
* **[Terms of Service](terms-of-service.md)**

---

## Next steps

If you are evaluating or implementing Brando:

1. **Read the overview**
   → [Getting started](getting-started.md)

2. **Clone a minimal example**
   → [Minimal brand graph](examples/minimal-brand.md)

3. **Choose your primary representation**
   → [Quickstart (JSON-LD)](getting-started-jsonld.md) or [Quickstart (YAML)](getting-started-yaml.md)

4. **Model your first brand and context**

    - `brando:Brand`
    - `brando:Context`
    - `brando:VerbalToken`
    - `brando:Policy`

5. **Plan your Brand OS integration**
   → [Brand Operating System](architecture/brand-os.md) and [Runtime Integration](architecture/runtime-integration.md)

From there, extend into portfolios, campaigns, automation rules, and classification alignment – all grounded in the same Brando vocabulary and managed as a **living, AI-assisted Brand Knowledge Graph**.

---

### AI Support Services

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">

  <div style="flex: 1 1 calc(50% - 1rem); border: 1px solid #ddd; border-radius: 8px; padding: 1.5rem; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <h3>Discovery & Alignment</h3>
    <p>Understand your brand’s ambitions, stakeholders, and digital maturity. Align objectives and define how the Brand Ontology Schema and AI can create value for your organisation.</p>
    <div class="card-buttons">
      <a href="#" class="button secondary small" data-modal-target="#discoveryModal">Read More</a>
      <a href="#" class="button primary small" data-modal-target="#talk">Talk to Us</a>
    </div>
  </div>

  <div style="flex: 1 1 calc(50% - 1rem); border: 1px solid #ddd; border-radius: 8px; padding: 1.5rem; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <h3>Brand Audit & Mapping</h3>
    <p>Catalogue all brand assets and meanings. Map verbal, visual, audio, and strategic elements for readiness and completeness in digital and AI environments.</p>
    <div class="card-buttons">
      <a href="#" class="button secondary small" data-modal-target="#auditModal">Read More</a>
      <a href="#" class="button primary small" data-modal-target="#talk">Talk to Us</a>
    </div>
  </div>

  <div style="flex: 1 1 calc(50% - 1rem); border: 1px solid #ddd; border-radius: 8px; padding: 1.5rem; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <h3>Schema Design & Knowledge Graph Planning</h3>
    <p>Structure your brand’s meaning with the Brand Ontology Schema. Design a knowledge graph that connects all brand elements—ready for machine understanding and Brand OS integration.</p>
    <div class="card-buttons">
      <a href="#" class="button secondary small" data-modal-target="#schemaModal">Read More</a>
      <a href="#" class="button primary small" data-modal-target="#talk">Talk to Us</a>
    </div>
  </div>

  <div style="flex: 1 1 calc(50% - 1rem); border: 1px solid #ddd; border-radius: 8px; padding: 1.5rem; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <h3>Data Modelling & Implementation</h3>
    <p>Build, validate, and deploy machine-readable, AI-optimised brand datasets using the Brand Ontology Schema. Stand up your central brand knowledge graph and connect it to your platforms.</p>
    <div class="card-buttons">
      <a href="#" class="button secondary small" data-modal-target="#modellingModal">Read More</a>
      <a href="#" class="button primary small" data-modal-target="#talk">Talk to Us</a>
    </div>
  </div>

  <div style="flex: 1 1 calc(50% - 1rem); border: 1px solid #ddd; border-radius: 8px; padding: 1.5rem; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <h3>Rollout & Enablement</h3>
    <p>Integrate your structured brand data across websites, digital assistants, and AI channels. Train teams and set up governance for sustainable Brand OS management.</p>
    <div class="card-buttons">
      <a href="#" class="button secondary small" data-modal-target="#rolloutModal">Read More</a>
      <a href="#" class="button primary small" data-modal-target="#talk">Talk to Us</a>
    </div>
  </div>

  <div style="flex: 1 1 calc(50% - 1rem); border: 1px solid #ddd; border-radius: 8px; padding: 1.5rem; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <h3>Continuous Improvement</h3>
    <p>Monitor, benchmark, and refine your brand ontology and knowledge graph as markets, strategies, and AI capabilities evolve.</p>
    <div class="card-buttons">
      <a href="#" class="button secondary small" data-modal-target="#improvementModal">Read More</a>
      <a href="#" class="button primary small" data-modal-target="#talk">Talk to Us</a>
    </div>
  </div>

</div>

<!-- Discovery & Alignment Modal -->
<div class="modal" id="discoveryModal" tabindex="-1" style="position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.3); z-index:1000;">
  <div style="background:#fff; margin:5% auto; padding:2rem; max-width:600px; border-radius:8px; position:relative;">
    <button class="btn-close" style="position:absolute; top:1rem; right:1rem; border:none; background:none; font-size:1.5rem;">&times;</button>
    <h2>Discovery & Alignment</h2>
    <p>
      Align your brand, business, and AI strategy from day one. Our Discovery & Alignment service helps you bring the right people together, clarify your goals, and assess your readiness for AI- and Brand OS–driven change.
    </p>
    <ul>
      <li>Unite stakeholders & set shared priorities</li>
      <li>Assess current data & AI maturity</li>
      <li>Clarify business and brand objectives</li>
      <li>Spot key opportunities and risks</li>
      <li>Map a practical roadmap for Brand Ontology Schema adoption</li>
    </ul>
    <p>
      Move quickly from aspiration to action with our facilitated discovery workshops.
    </p>
  </div>
</div>

<!-- Brand Audit & Mapping Modal -->
<div class="modal" id="auditModal" tabindex="-1" style="position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.3); z-index:1000;">
  <div style="background:#fff; margin:5% auto; padding:2rem; max-width:600px; border-radius:8px; position:relative;">
    <button class="btn-close" style="position:absolute; top:1rem; right:1rem; border:none; background:none; font-size:1.5rem;">&times;</button>
    <h2>Brand Audit & Mapping</h2>
    <p>
      Our Brand Audit & Mapping service catalogues all aspects of your brand, from assets to strategy, providing a clear picture of your current position and readiness for AI transformation.
    </p>
    <ul>
      <li>Comprehensive inventory of visual, verbal, and audio brand assets</li>
      <li>Mapping key brand elements into the Brand Ontology Schema</li>
      <li>Assessing consistency and compliance across platforms and touchpoints</li>
      <li>Identifying gaps, risks, and untapped opportunities in your brand architecture</li>
      <li>Creating a strategic brand asset map to guide your Brand OS roadmap</li>
    </ul>
    <p>
      This mapping lays the groundwork for an actionable, future-proof brand strategy.
    </p>
  </div>
</div>

<!-- Schema Design & Knowledge Graph Planning Modal -->
<div class="modal" id="schemaModal" tabindex="-1" style="position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.3); z-index:1000;">
  <div style="background:#fff; margin:5% auto; padding:2rem; max-width:600px; border-radius:8px; position:relative;">
    <button class="btn-close" style="position:absolute; top:1rem; right:1rem; border:none; background:none; font-size:1.5rem;">&times;</button>
    <h2>Schema Design & Knowledge Graph Planning</h2>
    <p>
      Structuring your brand’s meaning for AI and digital environments begins here. We work with you to design the Brand Ontology Schema profile and plan a knowledge graph that connects and organises all key brand elements.
    </p>
    <ul>
      <li>Development of a semantic schema tailored to your brand’s structure and goals</li>
      <li>Design of a knowledge graph that models relationships across assets, messaging, and strategy</li>
      <li>Alignment with industry standards (e.g., Schema.org, Brand Ontology Schema)</li>
      <li>Definition of canonical entities, attributes, and connections</li>
      <li>Clear documentation and governance recommendations for future-proofing</li>
    </ul>
    <p>
      The result is a foundation for machine understanding and scalable Brand OS management.
    </p>
  </div>
</div>

<!-- Data Modelling & Implementation Modal -->
<div class="modal" id="modellingModal" tabindex="-1" style="position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.3); z-index:1000;">
  <div style="background:#fff; margin:5% auto; padding:2rem; max-width:600px; border-radius:8px; position:relative;">
    <button class="btn-close" style="position:absolute; top:1rem; right:1rem; border:none; background:none; font-size:1.5rem;">&times;</button>
    <h2>Data Modelling & Implementation</h2>
    <p>
      We build and deploy your brand’s knowledge graph and semantic models, ensuring seamless integration with digital platforms and AI systems.
    </p>
    <ul>
      <li>Transforming brand assets and data into Brand Ontology Schema–compliant formats</li>
      <li>Implementing your custom schema and knowledge graph</li>
      <li>Integrating with CMS, websites, and digital channels</li>
      <li>Quality assurance and validation for data completeness and correctness</li>
      <li>Guidance and documentation for ongoing maintenance</li>
    </ul>
    <p>
      This stage enables AI-driven discovery, governance, and the full benefits of structured brand data.
    </p>
  </div>
</div>

<!-- Rollout & Enablement Modal -->
<div class="modal" id="rolloutModal" tabindex="-1" style="position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.3); z-index:1000;">
  <div style="background:#fff; margin:5% auto; padding:2rem; max-width:600px; border-radius:8px; position:relative;">
    <button class="btn-close" style="position:absolute; top:1rem; right:1rem; border:none; background:none; font-size:1.5rem;">&times;</button>
    <h2>Rollout & Enablement</h2>
    <p>
      We support you in deploying your structured brand data across all platforms, channels, and touchpoints, while building your team’s capability to sustain and grow your Brand Operating System.
    </p>
    <ul>
      <li>Activation of brand data across web, search, assistants, and AI channels</li>
      <li>Training and enablement for marketing, content, and IT teams</li>
      <li>Implementation of governance frameworks for brand data stewardship</li>
      <li>Support for integrating structured data into workflows and campaigns</li>
      <li>Ongoing troubleshooting and optimisation post-launch</li>
    </ul>
    <p>
      This phase ensures your investment in structured brand data delivers long-term value and adaptability.
    </p>
  </div>
</div>

<!-- Continuous Improvement Modal -->
<div class="modal" id="improvementModal" tabindex="-1" style="position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.3); z-index:1000;">
  <div style="background:#fff; margin:5% auto; padding:2rem; max-width:600px; border-radius:8px; position:relative;">
    <button class="btn-close" style="position:absolute; top:1rem; right:1rem; border:none; background:none; font-size:1.5rem;">&times;</button>
    <h2>Continuous Improvement</h2>
    <p>
      With your Brand Ontology Schema and knowledge graph live, we help you monitor, refine, and evolve them to stay ahead of changing technologies, channels, and customer expectations.
    </p>
    <ul>
      <li>Ongoing benchmarking and analysis of your brand’s digital and AI visibility</li>
      <li>Regular audits for schema accuracy, compliance, and completeness</li>
      <li>Recommendations for optimisation as AI, search, and digital standards evolve</li>
      <li>Support for updating and expanding your brand’s knowledge graph</li>
      <li>Strategic guidance on emerging technologies and market opportunities</li>
    </ul>
    <p>
      Continuous improvement ensures your brand remains discoverable, trusted, and ahead of the curve in an AI-first world.
    </p>
  </div>
</div>

<!-- Talk to Us Modal -->
<div class="modal fade bg-white" id="talk" tabindex="-1" role="dialog" aria-hidden="true" style="position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.3); z-index:1000;">
  <div class="modal-dialog" style="max-width: 80vw; position: relative;">
    <div class="modal-content bg-white text-dark"
      style="border: none; box-shadow: none; border-radius: 0; position: relative;">
      <button class="btn-close" style="position:absolute; top:1rem; right:1rem; border:none; background:none; font-size:1.5rem;">&times;</button>
      <div class="modal-header">
        <h2>Talk to Us</h2>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- Typeform Embed -->
        <div data-tf-live="01JF4TXRZV12FSXM9XW8J9A9VF"></div>
        <script src="https://embed.typeform.com/next/embed.js"></script>
      </div>
    </div>
  </div>
</div>
