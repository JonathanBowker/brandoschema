---
title: "Brand Oracle (Brando) Schema Vocabulary v1.3"
description: >
  Brand Oracle (Brando®) is an AI-native, governance-ready linked data vocabulary and
  Brand Governance Vocabulary (BGV) for brands. Brando enables Brand-as-Code by
  tokenising brand intelligence — identity, expression, context, and governance —
  as a Brand Knowledge Graph from which Machine-Actionable Policy Graphs are derived
  and executed within Brand Operating Systems under the Intelligent Brand Operating
  Model (IBOM).

keywords:
  - Brand Oracle
  - Brand Token
  - Brand Tokenisation
  - Brando
  - Brand Brain
  - Brando Schema
  - Brando Vocabulary
  - Brand Governance Vocabulary
  - BGV
  - brand ontology
  - brand schema
  - Brand Knowledge Graph
  - brand tokenisation
  - Brand-as-Code
  - Machine-Actionable Policy Graph
  - Brand Operating System
  - IBOM
  - Intelligent Brand Operating Model
  - AI brand operations
  - AI brand governance
  - AI-native brand identity
  - structured brand metadata
  - brand semantics
  - verbal identity schema
  - visual identity schema
  - audio identity schema
  - brand compliance AI
  - AI brand risk management
  - brand guidelines for AI
  - LLM brand safety
  - AI brand discovery
  - brand architecture
  - house of brands

author: "Advanced Analytica"

og:
  title: "Brand Oracle (Brando) Schema Vocabulary v1.3"
  description: >
    Brando is an AI-native linked-data vocabulary and Brand Governance Vocabulary (BGV)
    that enables Brand-as-Code: policy-driven, not prompt-driven. It tokenises brand
    intelligence into Brand Knowledge Graphs and machine-actionable Policy Graphs,
    executed by Brand Operating Systems under the IBOM framework.
  type: "website"
  url: "https://brandoschema.com/"
  image: "https://brandoschema.com/assets/images/4x/brando@4x.webp"

twitter:
  card: "summary_large_image"
  title: "Brand Oracle (Brando) – Schema Vocabulary v1.3"
  description: >
    An open, Schema.org-compatible Brand Governance Vocabulary (BGV) that tokenises
    brand intelligence for AI systems and enforces governance via Machine-Actionable
    Policy Graphs in Brand Operating Systems.
  image: "https://brandoschema.com/assets/images/4x/brando@4x.webp"

load_brando_graphs:
  - core
  - personas
  - policies
---

# **Brando:: Assured Brand Governance for AI**

## **Brand Oracle (Brando) Vocabulary v1.3**

**Brando** (Brand Oracle) is an open-source vocabulary for structuring brand identity, governance policies, and content guidelines in machine-readable formats. It enables AI systems and Large Language Models to retrieve and apply brand rules consistently across automated workflows.

Published under Creative Commons Attribution 4.0 (CC BY 4.0) with W3C Royalty-Free Patent Policy protections, Brando extends Schema.org's Brand vocabulary to support structured brand representation across verbal identity, visual identity, audio branding, strategic positioning, governance, and approved assets.


<img src="https://brandoschema.com/assets/images/4x/brando@4x.webp" alt="Brando Schema: AI-native vocabulary for brands" style="width: 100%; max-width: 960px; display: block; margin: 2rem auto;" />

---

## Why Brando exists

**Advanced Analytica** is pioneering the use of JSON-LD (JavaScript Object Notation – Linked Data) as a **control and governance layer** for LLMs, agents, and generative AI systems.

Our research into foundation model training and inference shows that:

* JSON-LD and Schema.org patterns are deeply embedded in model training data
* graph-structured semantics are interpreted reliably by LLMs
* linked data provides a stable, tool-independent way to encode intent, rules, and constraints

Brando — short for **Brand Oracle** — formally extends <a href="https://schema.org/" target="_blank" rel="noopener noreferrer">Schema.org</a> beyond a purely **descriptive SEO layer** into an **operative, governance-capable layer** for AI-native systems.

Rather than replacing existing Schema Markup, Brando **reuses and extends it**, allowing organisations to:

* minimise rework,
* accelerate adoption,
* and evolve static brand guidelines into **Brand-as-Code**.

---

## Brand-as-Code and brand tokenisation

At the core of **Brand-as-Code** is **brand tokenisation** — the process of decomposing brand identity, expression, context, and governance into **explicit, machine-readable brand tokens**.

These tokens are not latent embeddings or informal prompts.
They are **first-class semantic units** that can be:

* referenced and versioned,
* inherited and overridden,
* governed by policy,
* resolved dynamically at runtime.

Together, they form the nodes of a **Brand Knowledge Graph**, from which **Machine-Actionable Policy Graphs** are derived to constrain and guide AI behaviour.

→ **[Read: Brand tokenisation (Brand-as-Code)](architecture/brand-tokenisation.md)**

---

## Brando, IBOM, and the operating model

Brando is not just a vocabulary — it is the **foundational control layer** of the **Brando Intelligent Brand Operating Model (IBOM)**.

* **Brando Schema** defines **what brand intelligence is** and how it is tokenised.
* **Brando IBOM** defines **how that intelligence is assessed, codified, deployed, operated, and assured** across AI systems and enterprise platforms.

Together, they allow brand to operate as **governed infrastructure**, not static documentation.

* **Brando IBOM** → operating lifecycle and discipline
* **Brando** → data model, vocabulary, executable semantics

→ **[Read: The Brando Intelligent Brand Operating Model (IBOM)](ibom.md)**

---

## Brando as a “Brand Brain” (precisely defined)

Brando is often described as a **“Brand Brain”** — a useful metaphor when used carefully.

Like a brain, Brando:

* stores structured memory (tokenised identity, values, and rules),
* reasons across context,
* governs behaviour,
* guides action.

Unlike vague or metaphorical “brand brains”, Brando is:

* **explicitly structured**, not latent,
* **auditable and versioned**, not opaque,
* **policy-driven**, not purely generative,
* **designed for enterprise governance and assurance**.

> Brando is not a model.
> **It is the authoritative brand intelligence that models and agents must obey.**

---

## Brand Knowledge Graphs and Policy Graphs

Brando deliberately separates **knowledge** from **execution**.

### Brand Knowledge Graph

The **Brand Knowledge Graph** represents:

* tokenised brand identities and portfolios,
* contexts, audiences, channels, and jurisdictions,
* verbal, visual, and audio identity tokens,
* personas, campaigns, and classifications,
* governance metadata and constraints.

It answers:

> **“What brand intelligence exists?”**

### Machine-Actionable Policy Graphs

From the Knowledge Graph, Brando derives **Machine-Actionable Policy Graphs** that encode:

* permissions and prohibitions,
* enforcement levels,
* refusal and escalation strategies,
* risk, compliance, and regulatory logic,
* temporal and contextual overrides.

They answer:

> **“What is allowed, required, or forbidden right now, in this context?”**

At runtime:

```
Brand Knowledge Graph
└── Policy Graph (derived projection)
└── Executed by LLMs, agents, workflows
```

AI systems do **not** reason freely over the entire knowledge graph.
They operate against **policy-constrained projections**.

---

## What is Brando?

Brando is:

* a **linked data vocabulary and ontology** extending Schema.org,
* a **Brand Governance Vocabulary (BGV)** encoding intent, rules, and behaviour,
* the **authoritative Brand Knowledge Graph** for Brand Operating Systems,
* the **source of executable Policy Graphs** under IBOM.

**Namespace:** `https://brandoschema.com/`
**Prefix:** `brando:`

It:

* extends `schema:Brand` and `schema:Intangible`,
* aligns with GS1 Web Vocabulary, UNSPSC, and Google Product Taxonomy,
* is published canonically in **JSON-LD**,
* is profiled in **YAML** for operational use.

---

## What this documentation covers

* **Getting started** – motivation and adoption patterns
* **Quickstarts (JSON-LD / YAML)**
* **Types and Properties references**
* **Brand Operating System architecture**
* **Brand tokenisation and runtime integration**
* **Worked examples**

---

## Core concepts and schema types

The current Brando documentation covers **18 schema types** across identity,
expression, governance, personas, runtime orchestration, and brand touchpoints:

| Type | Purpose |
| --- | --- |
| `brando:Brand` | Core brand identity |
| `brando:Context` | Activation context |
| `brando:BrandedCategory` | Brand-level taxonomy and product category alignment |
| `brando:Campaign` | Time-bound brand and messaging overlay |
| `brando:ProductItem` | Individually identifiable product, SKU, or GTIN-level item |
| `brando:BrandExpressionToken` | Abstract superclass for expression tokens |
| `brando:VerbalToken` | Voice, language, vocabulary, and prompt behaviour |
| `brando:VisualToken` | Visual system, logos, colour, typography, and imagery |
| `brando:AudioToken` | Sonic identity, voice, pronunciation, and audio cues |
| `brando:Policy` | Governance rules, guardrails, and enforcement logic |
| `brando:ImpactAssessment` | AI, brand, and governance risk assessment |
| `brando:SyntheticPersona` | Governed AI persona |
| `brando:ProductPersona` | Product-scoped AI persona |
| `brando:BrandModel` | Model routing and runtime configuration |
| `brando:Prompt` | Governed prompt asset or instruction object |
| `brando:AutomationRule` | Automated governance or runtime rule |
| `brando:BrandApplication` | Governed brand use case or application context |
| `brando:BrandTouchpoint` | Channel, placement, or experience where brand rules apply |

Most Brando types extend `schema:Intangible`; `brando:Brand` aligns with
`schema:Brand`, and `brando:Prompt` aligns with `schema:CreativeWork`.

---

## Canonical form and profiles

Brando is **JSON-LD–first**.

Two profiles are provided:

1. **JSON-LD profile** — publication and runtime
2. **YAML profile** — configuration and CI/CD

A TypeScript model is provided as **non-normative** convenience.

---

## Example: minimal brand (JSON-LD)

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@id": "https://example.com/brand/northstar",
  "@type": "brando:Brand",
  "schema:name": "Northstar Bank",
  "brando:missionStatement": "Financial clarity with absolute trust."
}
```

---

## From vocabulary to running Brand OS

1. Tokenise brand intelligence with Brando
2. Build a Brand Knowledge Graph
3. Derive Policy Graphs
4. Execute at runtime
5. Monitor and evolve under IBOM

---

## Versioning and licensing

* **Vocabulary:** Brando Schema v1.3
* **Ontology version:** 1.4
* **Publisher:** Advanced Analytica
* **License:** CC BY 4.0

---

## Stewardship

Brando is originated and stewarded by **Advanced Analytica**.

---

## Implementation support

Advanced Analytica offers a **Brando Implementation Service** for full Brand OS delivery.

<div style="margin: 2rem 0;">
  <a href="#" class="button primary" data-modal-target="#talk">Talk to us about implementation</a>
</div>

---

## Next steps

* Read **Getting Started**
* Explore **Brand tokenisation**
* Model your first brand
* Plan Brand OS integration


<!-- Talk to Us Modal -->

<div class="modal fade bg-white" id="talk" tabindex="-1" role="dialog" aria-hidden="true" style="position:fixed; inset:0; background:rgba(0,0,0,0.3); z-index:1000;">
  <div class="modal-dialog" style="max-width: 80vw; margin: 5vh auto; position: relative;">
    <div class="modal-content bg-white text-dark" style="border:none; border-radius:0;">
      <button class="btn-close" style="position:absolute; top:1rem; right:1rem; font-size:1.5rem;">&times;</button>
      <div class="modal-header">
        <h2>Talk to Us</h2>
      </div>
      <div class="modal-body">
        <div data-tf-live="01JF4TXRZV12FSXM9XW8J9A9VF"></div>
        <script src="https://embed.typeform.com/next/embed.js"></script>
      </div>
    </div>
  </div>
</div>
