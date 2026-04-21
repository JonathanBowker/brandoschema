# Brando Schema

## Brand Oracle (Brando) Vocabulary v1.3

**Brando** (Brand Oracle) is an open-source vocabulary for structuring brand identity, governance policies, and content guidelines in machine-readable formats. It enables AI systems and Large Language Models to retrieve and apply brand rules consistently across automated workflows.

Published under Creative Commons Attribution 4.0 (CC BY 4.0) with W3C Royalty-Free Patent Policy protections, Brando extends Schema.org's Brand vocabulary to support structured brand representation across verbal identity, visual identity, audio branding, strategic positioning, governance, and approved assets.

![Brando Schema: AI-native vocabulary for brands](https://brandoschema.com/assets/images/4x/brando@4x.webp)

## Why Brando Exists

**Advanced Analytica** is pioneering the use of JSON-LD (JavaScript Object Notation - Linked Data) as a control and governance layer for LLMs, agents, and generative AI systems.

Research into foundation model training and inference shows that:

* JSON-LD and Schema.org patterns are deeply embedded in model training data
* graph-structured semantics are interpreted reliably by LLMs
* linked data provides a stable, tool-independent way to encode intent, rules, and constraints

Brando, short for **Brand Oracle**, formally extends [Schema.org](https://schema.org/) beyond a purely descriptive SEO layer into an operative, governance-capable layer for AI-native systems.

Rather than replacing existing Schema Markup, Brando reuses and extends it, allowing organisations to:

* minimise rework
* accelerate adoption
* evolve static brand guidelines into **Brand-as-Code**

## Brand-as-Code and Brand Tokenisation

At the core of **Brand-as-Code** is **brand tokenisation**: the process of decomposing brand identity, expression, context, and governance into explicit, machine-readable brand tokens.

These tokens are not latent embeddings or informal prompts. They are first-class semantic units that can be:

* referenced and versioned
* inherited and overridden
* governed by policy
* resolved dynamically at runtime

Together, they form the nodes of a **Brand Knowledge Graph**, from which **Machine-Actionable Policy Graphs** are derived to constrain and guide AI behaviour.

Read more in [Brand tokenisation](docs/architecture/brand-tokenisation.md).

## Brando, IBOM, and the Operating Model

Brando is not just a vocabulary. It is the foundational control layer of the **Brando Intelligent Brand Operating Model (IBOM)**.

* **Brando Schema** defines what brand intelligence is and how it is tokenised.
* **Brando IBOM** defines how that intelligence is assessed, codified, deployed, operated, and assured across AI systems and enterprise platforms.

Together, they allow brand to operate as governed infrastructure, not static documentation.

* **Brando IBOM**: operating lifecycle and discipline
* **Brando**: data model, vocabulary, executable semantics

Read more in [The Brando Intelligent Brand Operating Model](docs/ibom.md).

## Brando as a Brand Brain

Brando is often described as a **Brand Brain**, a useful metaphor when used carefully.

Like a brain, Brando:

* stores structured memory: tokenised identity, values, and rules
* reasons across context
* governs behaviour
* guides action

Unlike vague or metaphorical brand brains, Brando is:

* explicitly structured, not latent
* auditable and versioned, not opaque
* policy-driven, not purely generative
* designed for enterprise governance and assurance

> Brando is not a model. It is the authoritative brand intelligence that models and agents must obey.

## Brand Knowledge Graphs and Policy Graphs

Brando deliberately separates knowledge from execution.

### Brand Knowledge Graph

The **Brand Knowledge Graph** represents:

* tokenised brand identities and portfolios
* contexts, audiences, channels, and jurisdictions
* verbal, visual, and audio identity tokens
* personas, campaigns, and classifications
* governance metadata and constraints

It answers: **What brand intelligence exists?**

### Machine-Actionable Policy Graphs

From the Knowledge Graph, Brando derives **Machine-Actionable Policy Graphs** that encode:

* permissions and prohibitions
* enforcement levels
* refusal and escalation strategies
* risk, compliance, and regulatory logic
* temporal and contextual overrides

They answer: **What is allowed, required, or forbidden right now, in this context?**

At runtime:

```text
Brand Knowledge Graph
|-- Policy Graph (derived projection)
`-- Executed by LLMs, agents, workflows
```

AI systems do not reason freely over the entire knowledge graph. They operate against policy-constrained projections.

## What Is Brando?

Brando is:

* a linked data vocabulary and ontology extending Schema.org
* a **Brand Governance Vocabulary (BGV)** encoding intent, rules, and behaviour
* the authoritative Brand Knowledge Graph for Brand Operating Systems
* the source of executable Policy Graphs under IBOM

**Namespace:** `https://brandoschema.com/`<br>
**Prefix:** `brando:`

It:

* extends `schema:Brand` and `schema:Intangible`
* aligns with GS1 Web Vocabulary, UNSPSC, and Google Product Taxonomy
* is published canonically in JSON-LD
* is profiled in YAML for operational use

## Documentation

The full documentation site is published at [brandoschema.com](https://brandoschema.com/).

This repository includes:

* [Getting started](docs/getting-started.md)
* [JSON-LD quickstart](docs/getting-started-jsonld.md)
* [YAML quickstart](docs/getting-started-yaml.md)
* [Types reference](docs/types/index.md)
* [Properties reference](docs/properties/index.md)
* [Brand Operating System architecture](docs/architecture/brand-tokenisation.md)
* [Runtime and integration examples](docs/examples/model-routing.md)

## Core Concepts and Classes

Brando v1.3 defines twelve core classes:

| Class | Purpose |
| --- | --- |
| `brando:Brand` | Core brand identity |
| `brando:Context` | Activation context |
| `brando:BrandExpression` | Abstract expression superclass |
| `brando:VerbalIdentity` | Voice and language |
| `brando:VisualIdentity` | Visual system |
| `brando:AudioIdentity` | Sonic identity |
| `brando:Policy` | Governance rules |
| `brando:BrandedCategory` | Taxonomy alignment |
| `brando:Campaign` | Temporal overrides |
| `brando:AutomationRule` | Automated governance |
| `brando:ProductPersona` | Product-scoped AI |
| `brando:SyntheticPersona` | Governed AI persona |

All classes extend `schema:Intangible`; `brando:Brand` extends `schema:Brand`.

## Canonical Form and Profiles

Brando is **JSON-LD-first**.

Two profiles are provided:

1. **JSON-LD profile**: publication and runtime
2. **YAML profile**: configuration and CI/CD

A TypeScript model is provided as non-normative convenience.

## Example: Minimal Brand

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

## From Vocabulary to Running Brand OS

1. Tokenise brand intelligence with Brando
2. Build a Brand Knowledge Graph
3. Derive Policy Graphs
4. Execute at runtime
5. Monitor and evolve under IBOM

## Local Documentation

Install the documentation dependencies and serve the site locally:

```bash
python -m venv .venv
source .venv/bin/activate
pip install mkdocs-material
pip install -e plugins/mkdocs-copy-well-known
mkdocs serve
```

Build the site in strict mode:

```bash
mkdocs build --strict
```

Deploy the site with MkDocs:

```bash
mkdocs gh-deploy
```

## Versioning and Licensing

* **Vocabulary:** Brando Schema v1.3
* **Ontology version:** 1.4
* **Publisher:** Advanced Analytica
* **License:** [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/)

## Stewardship

Brando is originated and stewarded by **Advanced Analytica**.

Advanced Analytica offers a **Brando Implementation Service** for full Brand OS delivery.

## Citation

For academic or professional citation of Brando, please use:

*Brando Schema: Machine-Readable Brand Identity Structures for AI and LLMs*, Advanced Analytica Ltd, 2025. Available at: [https://brandoschema.com](https://brandoschema.com)
