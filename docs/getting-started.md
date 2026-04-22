# Getting started

Brando Schema is documented as a document-first authoring system based on a simple triad:

- Markdown body
- YAML frontmatter
- JSON sidecar

This means the same entity is shown in three coordinated forms:

- the authored document that people edit
- the frontmatter that carries structured attributes
- the linked machine-readable sidecar

## The triad

Use the three quickstarts together:

- [Quickstart (Markdown)](getting-started-markdown.md)
- [Quickstart (YAML)](getting-started-yaml.md)
- [Quickstart (JSON)](getting-started-jsonld.md)

## What the triad captures

Across the entity-type examples, the triad consistently models:

- **Entities:** the governed documents and related brand objects being described, such as reports, claims, disclosures, examples, evidence records, and source documents
- **Properties:** structured attributes on those entities, including names, definitions, tone, colour, typography, asset URLs, usage guidance, and review workflows
- **Relationships:** typed links between entities, such as `hasPolicy`, `hasPrompt`, `usesVisualToken`, `appliesToProduct`, `effectiveDuring`, and `inheritsTokens`
- **Controls:** constraints and governance rules that define what is allowed, required, prohibited, reviewed, escalated, inherited, or overridden
- **References:** approved examples, discouraged examples, prohibited examples, source documents, design system links, asset libraries, guidelines, evidence, audit records, and benchmark examples

## Entity types

The active entity-type section is grouped by business function:

- Strategy and planning
- Marketing and messaging
- Claims and disclosures
- Evidence and governance

Each entity page shows:

- an `Entity properties` table
- an `Examples` section
- one example rendered as `Markdown Body`, `YAML Frontmatter`, and `JSON Sidecar`

## Recommended flow

1. Author the content in Markdown.
2. Capture the structured metadata in YAML frontmatter.
3. Link the machine-readable sidecar with `brando:jsonLdSidecar`.
4. Publish the matching JSON sidecar.
5. Check the relevant property pages when you need the expected field meanings.
