# Benchmark example

A benchmark example is an approved comparative reference used to calibrate positioning, category language, or evidence thresholds.

## Entity properties

| Property | Type | Description |
| --- | --- | --- |
| `id` | IRI | Stable identifier for the benchmark example. |
| `title` | Text | Human-readable benchmark title. |
| `dataSource` | Text | Source used to justify the benchmark. |
| `reviewWorkflow` | Text | Review path for keeping the benchmark current. |
| `effectiveDuring` | Text | Period when the benchmark remains valid. |
| `brando:jsonLdSidecar` | URL | Linked JSON sidecar for the same entity. |

## Examples

The three tabs below show the same `ABC Example Inc` entity as a Markdown body, YAML frontmatter, and JSON sidecar.

<div class="entity-example">
  <div class="entity-example__heading">
    <span class="entity-example__icon"></span>
    <span class="entity-example__label">Example 1</span>
  </div>
  <p class="entity-example__intro"><em>ABC Example Inc workflow benchmark example for category comparison.</em></p>
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
# ABC Example Inc workflow benchmark example

## Summary

This benchmark example records an approved comparative pattern for how ABC Example Inc should frame workflow automation maturity claims.

## Properties

- **Brand:** ABC Example Inc
- **Data source:** Approved competitor review and category notes
- **Review workflow:** Strategy lead review and legal review

## Relationships

- **Has policy:** ABC Example Inc comparative evidence policy
- **Effective during:** 2026 planning cycle
- **Applies to product:** ABC Flow Pilot

## Controls

- **Required:** Use this benchmark only when source citations are present
- **Reviewed:** Quarterly
- **Escalated:** Named competitor comparisons in external copy

## References

- ABC Example Inc workflow automation market review 2026
- ABC Example Inc Q1 evidence record
- ABC Example Inc source document set
```

    </div>
    <div class="entity-example-tabs__panel entity-example-tabs__panel--yaml" markdown="1">

```yaml
brando_type: BenchmarkExample
id: https://example.com/brands/abc-example-inc/benchmarks/workflow-maturity-example
title: ABC Example Inc workflow benchmark example
tags:
  - benchmark
  - comparison
  - positioning
"brando:jsonLdSidecar": https://example.com/brands/abc-example-inc/benchmarks/workflow-maturity-example.json
properties:
  brand: ABC Example Inc
  dataSource: Approved competitor review and category notes
  reviewWorkflow: Strategy lead review and legal review
relationships:
  hasPolicy:
    - ABC Example Inc comparative evidence policy
  effectiveDuring:
    - 2026 planning cycle
  appliesToProduct:
    - ABC Flow Pilot
controls:
  required:
    - Use this benchmark only when source citations are present
  reviewed:
    - Quarterly
  escalated:
    - Named competitor comparisons in external copy
references:
  sourceDocuments:
    - ABC Example Inc workflow automation market review 2026
  evidenceRecords:
    - ABC Example Inc Q1 evidence record
  guidelines:
    - ABC Example Inc source document set
```

    </div>
    <div class="entity-example-tabs__panel entity-example-tabs__panel--json" markdown="1">

```json
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@id": "https://example.com/brands/abc-example-inc/benchmarks/workflow-maturity-example",
  "@type": "brando:BenchmarkExample",
  "schema:name": "ABC Example Inc workflow benchmark example",
  "brando:jsonLdSidecar": "https://example.com/brands/abc-example-inc/benchmarks/workflow-maturity-example.json",
  "brando:properties": {
    "brand": "ABC Example Inc",
    "dataSource": "Approved competitor review and category notes",
    "reviewWorkflow": "Strategy lead review and legal review"
  },
  "brando:relationships": {
    "hasPolicy": ["ABC Example Inc comparative evidence policy"],
    "effectiveDuring": ["2026 planning cycle"],
    "appliesToProduct": ["ABC Flow Pilot"]
  },
  "brando:controls": {
    "required": ["Use this benchmark only when source citations are present"],
    "reviewed": ["Quarterly"],
    "escalated": ["Named competitor comparisons in external copy"]
  },
  "brando:references": {
    "sourceDocuments": ["ABC Example Inc workflow automation market review 2026"],
    "evidenceRecords": ["ABC Example Inc Q1 evidence record"],
    "guidelines": ["ABC Example Inc source document set"]
  }
}
```

    </div>
  </div>
</div>
