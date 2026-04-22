# Frequently asked questions

## What is the core authoring model?

The site uses a Markdown / YAML / JSON triad:

- Markdown body for the authored document
- YAML frontmatter for structured metadata
- JSON sidecar for the machine-readable representation

## Do I put frontmatter in the Markdown tab?

No. The `Markdown Body` tab should show the body only.

## What does the YAML tab represent?

The `YAML Frontmatter` tab represents frontmatter only. It should describe the same entity as the Markdown body and should include the `brando:jsonLdSidecar` link.

## What does the JSON tab represent?

The `JSON Sidecar` tab represents the linked machine-readable sidecar for the same entity.

## Why do the examples use ABC Example Inc?

The document examples use one consistent fictional brand world so the site reads as one coherent dataset rather than a collection of unrelated placeholders.
