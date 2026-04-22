# Evidence record

An evidence record captures the specific proof set used to support a governed claim, disclosure, or approved example.

## Entity properties

| Property | Type | Description |
| --- | --- | --- |
| `id` | IRI | Stable identifier for the evidence record. |
| `title` | Text | Human-readable evidence record title. |
| `dataSource` | Text | Source set represented by the record. |
| `reviewWorkflow` | Text | Review path for evidence validation. |
| `supports` | Text | Claims or disclosures the record supports. |
| `brando:jsonLdSidecar` | URL | Linked JSON sidecar for the same entity. |

## Examples

The three tabs below show the same `ABC Example Inc` entity as a Markdown body, YAML frontmatter, and JSON sidecar.

<div class="entity-example">
  <div class="entity-example__heading">
    <span class="entity-example__icon"></span>
    <span class="entity-example__label">Example 1</span>
  </div>
  <p class="entity-example__intro"><em>ABC Example Inc launch evidence record.</em></p>
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
# ABC Example Inc launch evidence record

## Summary

This evidence record lists the approved proof set supporting the ABC Example Inc workflow confidence launch claims and disclosures.

## Properties

- **Brand:** ABC Example Inc
- **Data source:** Pilot findings, implementation notes, and reviewed analyst evidence
- **Review workflow:** Evidence owner review, legal review, compliance review

## Relationships

- **Supports:** ABC Example Inc product claim: faster workflow handoff visibility
- **Supports:** ABC Example Inc regulatory disclosure on deployment conditions
- **Effective during:** 2026 launch period

## Controls

- **Required:** Keep source citations attached to each supported statement
- **Reviewed:** Before campaign publication and quarterly afterward
- **Escalated:** Missing citations or contradictory source updates

## References

- ABC Example Inc source document set
- ABC Example Inc audit record Q1 2026
- ABC Example Inc workflow automation market review 2026
```

    </div>
    <div class="entity-example-tabs__panel entity-example-tabs__panel--yaml" markdown="1">

```yaml
brando_type: EvidenceRecord
id: https://example.com/brands/abc-example-inc/evidence/launch-record-q1-2026
title: ABC Example Inc launch evidence record
tags:
  - evidence-record
  - claims-support
  - launch
"brando:jsonLdSidecar": https://example.com/brands/abc-example-inc/evidence/launch-record-q1-2026.json
properties:
  brand: ABC Example Inc
  dataSource: Pilot findings, implementation notes, and reviewed analyst evidence
  reviewWorkflow: Evidence owner review, legal review, compliance review
relationships:
  supports:
    - ABC Example Inc product claim: faster workflow handoff visibility
    - ABC Example Inc regulatory disclosure on deployment conditions
  effectiveDuring:
    - 2026 launch period
controls:
  required:
    - Keep source citations attached to each supported statement
  reviewed:
    - Before campaign publication and quarterly afterward
  escalated:
    - Missing citations or contradictory source updates
references:
  sourceDocuments:
    - ABC Example Inc source document set
  auditRecords:
    - ABC Example Inc audit record Q1 2026
  benchmarkExamples:
    - ABC Example Inc workflow automation market review 2026
```

    </div>
    <div class="entity-example-tabs__panel entity-example-tabs__panel--json" markdown="1">

```json
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@id": "https://example.com/brands/abc-example-inc/evidence/launch-record-q1-2026",
  "@type": "brando:EvidenceRecord",
  "schema:name": "ABC Example Inc launch evidence record",
  "brando:jsonLdSidecar": "https://example.com/brands/abc-example-inc/evidence/launch-record-q1-2026.json",
  "brando:properties": {
    "brand": "ABC Example Inc",
    "dataSource": "Pilot findings, implementation notes, and reviewed analyst evidence",
    "reviewWorkflow": "Evidence owner review, legal review, compliance review"
  },
  "brando:relationships": {
    "supports": [
      "ABC Example Inc product claim: faster workflow handoff visibility",
      "ABC Example Inc regulatory disclosure on deployment conditions"
    ],
    "effectiveDuring": ["2026 launch period"]
  },
  "brando:controls": {
    "required": ["Keep source citations attached to each supported statement"],
    "reviewed": ["Before campaign publication and quarterly afterward"],
    "escalated": ["Missing citations or contradictory source updates"]
  },
  "brando:references": {
    "sourceDocuments": ["ABC Example Inc source document set"],
    "auditRecords": ["ABC Example Inc audit record Q1 2026"],
    "benchmarkExamples": ["ABC Example Inc workflow automation market review 2026"]
  }
}
```

    </div>
  </div>
</div>
