---
title: Quickstart – JSON
description: How to structure the JSON sidecar in the Brando Schema triad.
---

# Quickstart: JSON sidecar

In the Brando Schema triad, JSON is the machine-readable sidecar for the same entity described in the Markdown body and YAML frontmatter.

## What belongs in the JSON sidecar

The JSON sidecar usually includes:

- `@context`
- `@id`
- `@type`
- the document name or headline
- `brando:jsonLdSidecar`
- grouped `brando:properties`
- grouped `brando:relationships`
- grouped `brando:controls`
- grouped `brando:references`

## Example shape

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
    "dataSource": "Analyst desk research and approved internal notes",
    "reviewWorkflow": "Strategy lead review, legal review, brand review"
  },
  "brando:relationships": {
    "appliesToProduct": ["ABC Flow Pilot"],
    "effectiveDuring": ["2026 planning cycle"]
  },
  "brando:controls": {
    "required": ["Cite approved market sources only"],
    "reviewed": ["Quarterly by strategy and legal"]
  },
  "brando:references": {
    "benchmarkExamples": ["ABC Example Inc workflow benchmark example"],
    "sourceDocuments": ["ABC Example Inc category notes"]
  }
}
```
