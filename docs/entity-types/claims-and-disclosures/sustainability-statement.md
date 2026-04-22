# Sustainability statement

A sustainability statement records approved environmental or social responsibility language together with its evidence and review controls.

## Entity properties

| Property | Type | Description |
| --- | --- | --- |
| `id` | IRI | Stable identifier for the statement. |
| `title` | Text | Human-readable statement title. |
| `dataSource` | Text | Approved basis for the statement. |
| `reviewWorkflow` | Text | Sustainability and legal review path. |
| `effectiveDuring` | Text | Reporting period the statement covers. |
| `brando:jsonLdSidecar` | URL | Linked JSON sidecar for the same entity. |

## Examples

The three tabs below show the same `ABC Example Inc` entity as a Markdown body, YAML frontmatter, and JSON sidecar.

<div class="entity-example">
  <div class="entity-example__heading">
    <span class="entity-example__icon"></span>
    <span class="entity-example__label">Example 1</span>
  </div>
  <p class="entity-example__intro"><em>ABC Example Inc sustainability statement for digital workflow delivery.</em></p>
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
# ABC Example Inc sustainability statement for digital workflow delivery

## Summary

This statement explains how ABC Example Inc frames the operational sustainability benefits of reducing paper-heavy workflow handoffs without overstating environmental impact.

## Properties

- **Brand:** ABC Example Inc
- **Data source:** Approved sustainability notes and internal operations review
- **Review workflow:** Sustainability lead review, legal review, brand review

## Relationships

- **Has policy:** ABC Example Inc sustainability communications policy
- **Applies to product:** ABC Flow Pilot
- **Effective during:** FY2026 reporting period

## Controls

- **Required:** Keep sustainability language operational and evidence-backed
- **Prohibited:** Net-zero or carbon-reduction claims without audited support
- **Reviewed:** At each reporting cycle

## References

- ABC Example Inc source document set
- ABC Example Inc Q1 evidence record
- ABC Example Inc audit record Q1 2026
```

    </div>
    <div class="entity-example-tabs__panel entity-example-tabs__panel--yaml" markdown="1">

```yaml
brando_type: SustainabilityStatement
id: https://example.com/brands/abc-example-inc/statements/sustainability-digital-workflow-delivery
title: ABC Example Inc sustainability statement for digital workflow delivery
tags:
  - sustainability
  - disclosure
  - governance
"brando:jsonLdSidecar": https://example.com/brands/abc-example-inc/statements/sustainability-digital-workflow-delivery.json
properties:
  brand: ABC Example Inc
  dataSource: Approved sustainability notes and internal operations review
  reviewWorkflow: Sustainability lead review, legal review, brand review
relationships:
  hasPolicy:
    - ABC Example Inc sustainability communications policy
  appliesToProduct:
    - ABC Flow Pilot
  effectiveDuring:
    - FY2026 reporting period
controls:
  required:
    - Keep sustainability language operational and evidence-backed
  prohibited:
    - Net-zero or carbon-reduction claims without audited support
  reviewed:
    - At each reporting cycle
references:
  sourceDocuments:
    - ABC Example Inc source document set
  evidenceRecords:
    - ABC Example Inc Q1 evidence record
  auditRecords:
    - ABC Example Inc audit record Q1 2026
```

    </div>
    <div class="entity-example-tabs__panel entity-example-tabs__panel--json" markdown="1">

```json
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@id": "https://example.com/brands/abc-example-inc/statements/sustainability-digital-workflow-delivery",
  "@type": "brando:SustainabilityStatement",
  "schema:name": "ABC Example Inc sustainability statement for digital workflow delivery",
  "brando:jsonLdSidecar": "https://example.com/brands/abc-example-inc/statements/sustainability-digital-workflow-delivery.json",
  "brando:properties": {
    "brand": "ABC Example Inc",
    "dataSource": "Approved sustainability notes and internal operations review",
    "reviewWorkflow": "Sustainability lead review, legal review, brand review"
  },
  "brando:relationships": {
    "hasPolicy": ["ABC Example Inc sustainability communications policy"],
    "appliesToProduct": ["ABC Flow Pilot"],
    "effectiveDuring": ["FY2026 reporting period"]
  },
  "brando:controls": {
    "required": ["Keep sustainability language operational and evidence-backed"],
    "prohibited": ["Net-zero or carbon-reduction claims without audited support"],
    "reviewed": ["At each reporting cycle"]
  },
  "brando:references": {
    "sourceDocuments": ["ABC Example Inc source document set"],
    "evidenceRecords": ["ABC Example Inc Q1 evidence record"],
    "auditRecords": ["ABC Example Inc audit record Q1 2026"]
  }
}
```

    </div>
  </div>
</div>
