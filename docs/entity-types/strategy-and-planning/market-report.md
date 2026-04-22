# Market report

A market report captures category language, competitor framing, and strategic market observations for a defined planning period.

## Entity properties

| Property | Type | Description |
| --- | --- | --- |
| `id` | IRI | Stable identifier for the report. |
| `title` | Text | Human-readable report title. |
| `dataSource` | Text | Approved source basis for the report. |
| `reviewWorkflow` | Text | Review path for strategy, legal, and brand teams. |
| `effectiveDuring` | Text | Planning window the report supports. |
| `brando:jsonLdSidecar` | URL | Linked JSON sidecar for the same entity. |

## Examples

The three tabs below show the same `ABC Example Inc` entity as a Markdown body, YAML frontmatter, and JSON sidecar.

<div class="entity-example">
  <div class="entity-example__heading">
    <span class="entity-example__icon"></span>
    <span class="entity-example__label">Example 1</span>
  </div>
  <p class="entity-example__intro"><em>ABC Example Inc workflow automation market review 2026.</em></p>
</div>

<div class="entity-example-tabs">
  <input checked id="tab-markdown" name="entity-example-tabs" type="radio">
  <input id="tab-yaml" name="entity-example-tabs" type="radio">
  <input id="tab-json" name="entity-example-tabs" type="radio">
  <div class="entity-example-tabs__labels">
    <label for="tab-markdown">Markdown Body</label>
    <label for="tab-yaml">YAML Frontmatter</label>
    <label for="tab-json">JSON Sidecar</label>
  </div>
  <div class="entity-example-tabs__panels">
    <div class="entity-example-tabs__panel entity-example-tabs__panel--markdown" markdown="1">

```md
# ABC Example Inc workflow automation market review 2026

## Summary

This report summarises the workflow automation category language, buyer priorities, and competitor framing relevant to ABC Example Inc during the 2026 planning cycle.

## Properties

- **Brand:** ABC Example Inc
- **Data source:** Analyst desk research and approved internal notes
- **Review workflow:** Strategy lead review, legal review, brand review
- **Tags:** market-intelligence, positioning, category-language

## Relationships

- **Applies to product:** ABC Flow Pilot
- **Effective during:** 2026 planning cycle
- **Has policy:** ABC Example Inc external market citation policy

## Controls

- **Required:** Cite approved market sources only
- **Reviewed:** Quarterly by strategy and legal
- **Escalated:** Named competitor comparisons and unverified market share claims

## References

- ABC Example Inc workflow benchmark example
- ABC Example Inc workflow category notes
- ABC Example Inc Q1 evidence record
```

    </div>
    <div class="entity-example-tabs__panel entity-example-tabs__panel--yaml" markdown="1">

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
  hasPolicy:
    - ABC Example Inc external market citation policy
controls:
  required:
    - Cite approved market sources only
  reviewed:
    - Quarterly by strategy and legal
  escalated:
    - Named competitor comparisons and unverified market share claims
references:
  benchmarkExamples:
    - ABC Example Inc workflow benchmark example
  sourceDocuments:
    - ABC Example Inc workflow category notes
  evidenceRecords:
    - ABC Example Inc Q1 evidence record
```

    </div>
    <div class="entity-example-tabs__panel entity-example-tabs__panel--json" markdown="1">

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
    "reviewWorkflow": "Strategy lead review, legal review, brand review",
    "tags": ["market-intelligence", "positioning", "category-language"]
  },
  "brando:relationships": {
    "appliesToProduct": ["ABC Flow Pilot"],
    "effectiveDuring": ["2026 planning cycle"],
    "hasPolicy": ["ABC Example Inc external market citation policy"]
  },
  "brando:controls": {
    "required": ["Cite approved market sources only"],
    "reviewed": ["Quarterly by strategy and legal"],
    "escalated": ["Named competitor comparisons and unverified market share claims"]
  },
  "brando:references": {
    "benchmarkExamples": ["ABC Example Inc workflow benchmark example"],
    "sourceDocuments": ["ABC Example Inc workflow category notes"],
    "evidenceRecords": ["ABC Example Inc Q1 evidence record"]
  }
}
```

    </div>
  </div>
</div>
