---
title: Quickstart – YAML
description: How to structure YAML frontmatter in the Brando Schema triad.
---

# Quickstart: YAML frontmatter

In the Brando Schema triad, YAML is the frontmatter layer for the same document entity.

It should carry the structured metadata that describes the document and links it to its JSON sidecar. It should not repeat the full Markdown body.

## What belongs in YAML frontmatter

YAML frontmatter usually captures:

- the entity type
- the entity identifier
- the title
- tags and review workflow
- core `properties`
- `relationships`
- `controls`
- `references`
- the `brando:jsonLdSidecar` link

## Example shape

```yaml
brando_type: MarketReport
id: https://example.com/brands/abc-example-inc/reports/workflow-automation-market-review-2026
title: ABC Example Inc workflow automation market review 2026
tags:
  - market-intelligence
  - positioning
  - category-language
"brando:jsonLdSidecar": https://example.com/brands/abc-example-inc/reports/workflow-automation-market-review-2026.json
properties:
  brand: ABC Example Inc
  dataSource: Analyst desk research and approved internal notes
  reviewWorkflow: Strategy lead review, legal review, brand review
relationships:
  appliesToProduct:
    - ABC Flow Pilot
  effectiveDuring:
    - 2026 planning cycle
controls:
  required:
    - Cite approved market sources only
  reviewed:
    - Quarterly by strategy and legal
references:
  benchmarkExamples:
    - ABC Example Inc workflow benchmark example
  sourceDocuments:
    - ABC Example Inc category notes
```
