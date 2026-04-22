# Brando Schema

Brando Schema is a document-first documentation site built around a simple triad:

- Markdown body
- YAML frontmatter
- JSON sidecar

The current site focuses on document entity types grouped by business function under `docs/entity-types/`.

## Current structure

- `docs/getting-started*.md` explains the Markdown / YAML / JSON triad.
- `docs/entity-types/` contains the active document entity-type pages.
- `docs/properties/` contains supporting property definitions.
- `docs/about.md`, `docs/how-to-use.md`, `docs/faq.md`, `docs/partner.md`, and `docs/terms.md` support the public site.

## Entity-type pattern

Each entity-type page contains:

- a short explanation
- an `Entity properties` table
- an `Examples` section
- one example rendered as:
  - `Markdown Body`
  - `YAML Frontmatter`
  - `JSON Sidecar`

The examples use a consistent fictional brand world based on `ABC Example Inc`.

## Local development

```bash
./.venv/bin/mkdocs build --strict
./.venv/bin/mkdocs serve --dev-addr 127.0.0.1:8001
```

## Footer override

The footer is overridden via `overrides/partials/copyright.html`.
