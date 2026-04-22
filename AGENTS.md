# AGENTS.md

This repository builds the public `brandoschema.com` documentation site with MkDocs Material.

## Current site model

- The active content model is the Markdown / YAML / JSON triad.
- Document entity types are the main structured examples in the docs.
- `Entity Types` are grouped by business function:
  - `strategy-and-planning`
  - `marketing-and-messaging`
  - `claims-and-disclosures`
  - `evidence-and-governance`
- Each entity-type page should show:
  - a short description
  - an `Entity properties` table
  - an `Examples` section
  - one example with three tabs:
    - `Markdown Body`
    - `YAML Frontmatter`
    - `JSON Sidecar`

## Authoring rules

- Treat Markdown as the authored document body.
- Treat YAML as frontmatter only.
- Treat JSON as the linked sidecar for the same entity.
- Keep the three representations aligned.
- Use standard Markdown in Markdown tabs.
- YAML examples should include `"brando:jsonLdSidecar"`.
- JSON examples should include `"brando:jsonLdSidecar"`.
- Entity examples should consistently model:
  - `Properties`
  - `Relationships`
  - `Controls`
  - `References`

## Navigation constraints

- `Entity Types` stays above `Properties`.
- Do not reintroduce removed nav sections such as:
  - `Brando Solutions`
  - `Schema Types`
  - `Architecture`
  - `Examples`
  - `Guides`
  - `Qwiki`
- Main nav groups should appear expanded on load, but deeper nested groups should not auto-expand.
- The nav depth behavior is implemented by:
  - `docs/js/nav-depth.js`
  - `docs/css/custom.css`

## Footer

- Override Material copyright via:
  - `overrides/partials/copyright.html`
- Do not use `overrides/partials/footer.html`.
- The live footer text should read:
  - `Terms and conditions • Brandoschema.com • V1.3 | 22-04-2026`

## Build and preview

```bash
./.venv/bin/mkdocs build --strict
./.venv/bin/mkdocs serve --dev-addr 127.0.0.1:8001
```
