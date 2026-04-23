---
title: Brando Schema v1.3
description: Brando is an open-source vocabulary for structuring brand identity, governance policies, and content guidelines in machine-readable formats.
---

# Brando Schema - Brand-as-Code
## Brando Schema v1.3 - Governance Framework for AI Brands

<img src="/assets/images/4x/brando-schema@4x.webp" alt="Brando Schema: open vocabulary for brand identity, governance, and content guidelines" style="width: 100%; max-width: 960px; display: block; margin: 2rem auto;" />

Brando is an open-source vocabulary for structuring brand identity, governance policies, and content guidelines in machine-readable formats. Using Brando Schema, brands can codify guidelines, policies, assets, and controls as machine-readable entities, then distribute them as portable BGML (Brand Governance Markup Language) knowledge packs: structured bundles of brand governance data that can move across systems. It enables AI systems and Large Language Models to retrieve and apply brand rules consistently across automated workflows.

Published under Creative Commons Attribution 4.0 (CC BY 4.0) with W3C Royalty-Free Patent Policy protections, Brando extends Schema.org's Brand vocabulary to support structured brand representation across verbal identity, visual identity, audio branding, strategic positioning, governance, and approved assets.

*Brando Schema: open vocabulary for brand identity, governance, and content guidelines*

## What Brando Is

An open vocabulary, not a platform, not software, not a service.

Brando defines structured properties, relationships, controls, and references across the main parts of a governed brand system:

- **Core:** identity, positioning, mission, values, and the main entities that describe what the brand is
- **Standards:** policies, rules, controls, review workflows, and the structured guidance that governs brand use
- **Applications:** campaigns, claims, disclosures, and operational documents used across live workflows
- **Design System:** visual tokens, verbal patterns, design guidance, and linked system references
- **Assets:** approved logos, templates, fonts, supporting materials, and source references

These properties extend Schema.org's `Brand` type to make brand guidance machine-readable for AI systems.

## The New v1.3 Example Format

The current documentation now presents entity examples as coordinated code blocks rather than as isolated snippets.

Each entity page shows the same example in three linked views:

- **Markdown Body:** the authored document content
- **YAML Frontmatter:** the structured metadata for that same document
- **JSON Sidecar:** the machine-readable representation linked to the document

This makes it easier to understand how one governed document is expressed for human authors, reviewers, and AI systems at the same time.

Across those example blocks, the documentation also makes four layers explicit:

- **Entities:** the governed documents and related brand objects being described, such as reports, claims, disclosures, examples, evidence records, and source documents
- **Properties:** the structured attributes carried by the entity
- **Relationships:** the links to other entities, policies, prompts, products, or tokens
- **Controls:** the rules that define what is required, reviewed, escalated, discouraged, or prohibited
- **References:** the supporting evidence, examples, source documents, and audit materials connected to the entity

The result is that the site no longer shows code as disconnected syntax examples. It shows one complete document pattern rendered consistently across the three formats.

## How It Works

### 1. Author the entity as a document

Teams create a governed entity as one coordinated document pattern:

- Markdown body for the authored content
- YAML frontmatter for the structured metadata
- JSON sidecar for the machine-readable representation

The three representations describe the same entity, not three unrelated files.

Example:

```json
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@id": "https://example.com/brands/abc-example-inc/reports/workflow-automation-market-review-2026",
  "@type": "brando:MarketReport",
  "schema:name": "ABC Example Inc workflow automation market review 2026",
  "brando:jsonLdSidecar": "https://example.com/brands/abc-example-inc/reports/workflow-automation-market-review-2026.json",
  "brando:properties": {
    "brand": "ABC Example Inc",
    "dataSource": "Analyst desk research and approved internal notes"
  },
  "brando:controls": {
    "required": ["Cite approved market sources only"]
  }
}
```

### 2. Store the triad as files

The document body, frontmatter, and sidecar can live in a version-controlled repository. That keeps authorship, review, and publishing portable and implementation-agnostic.

### 3. Serve the structured content to systems

Organisations can expose these files through retrieval layers such as:

- RAG pipelines
- MCP servers
- APIs
- CMS and publishing workflows

### 4. Retrieve and apply at runtime

LLMs, agents, and content workflows can retrieve the structured entity data and apply:

- properties
- relationships
- controls
- references

No vendor lock-in. The schema is open. The files are portable. Implementation is up to you.

## What Brando Is Not

- Not a platform, it's a data vocabulary
- Not software, it's a schema specification
- Not a service, it's a standard anyone can implement
- Not proprietary, it's CC BY 4.0 open source

Think of it like:

- Schema.org for product data
- OpenAPI for API specifications
- BPMN for process diagrams

Brando is for brand policies.

## Implementation

Organisations implement Brando-structured brand data in different ways.

Common patterns:

- File-based RAG retrieval with Markdown and YAML policies in Git
- MCP servers exposing brand policies to Claude or ChatGPT
- Custom APIs serving JSON-LD brand data to applications
- CMS integrations for content governance

Infrastructure choices:

- Self-hosted with DigitalOcean, AWS, Azure, or on-prem
- Managed services using any RAG platform, vector database, or CMS
- Hybrid setups such as Git plus CDN for static policies

Brando is infrastructure-agnostic, use whatever stack works for you.

[Talk to us about implementation](partner.md)

## The IBOM Methodology

Intelligent Brand Operating Model (IBOM) is Advanced Analytica's proprietary consulting methodology for applying Brando Schema to client brand systems.

IBOM covers:

- Brand discovery and assessment
- Policy codification and structured data engineering
- Implementation architecture and deployment
- Governance frameworks and assurance

IBOM does not equal Brando Schema.

- The schema is open source
- The methodology is Advanced Analytica's consulting IP

Organisations can:

- Use Brando Schema without IBOM through self-implementation
- Engage Advanced Analytica for IBOM consulting services
- Build their own methodologies around the open schema

[Learn more about IBOM consulting](partner.md)

## Contributing

Brando is developed through an open contribution process. New properties are proposed and reviewed by contributors including brand strategists, AI governance practitioners, and semantic web architects.

See [GitHub Issues](https://github.com/JonathanBowker/brandoschema/issues) for proposal and review discussions.

## Licence & Trade Marks

Schema licence:

- Creative Commons Attribution 4.0 International (CC BY 4.0)
- W3C Royalty-Free Patent Policy

Trade marks:

- `Brando`, `IBOM`, and `QWIKI` are trade marks of Advanced Analytica Limited
- Schema licence does not grant trade mark rights
- See [Terms](terms.md) for complete details

## Getting Started

- [Properties Reference](properties/index.md)
- [Entity Types and examples](entity-types/index.md)
- [JSON Quickstart](getting-started-jsonld.md)
- [YAML Profile Guide](getting-started-yaml.md)
- [Markdown Quickstart](getting-started-markdown.md)
