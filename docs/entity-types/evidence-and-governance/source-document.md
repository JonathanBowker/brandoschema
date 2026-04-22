# Source document

A source document records an upstream document that other claims, examples, reports, or audit materials depend on.

## Entity properties

| Property | Type | Description |
| --- | --- | --- |
| `id` | IRI | Stable identifier for the source document. |
| `title` | Text | Human-readable source title. |
| `dataSource` | Text | Origin of the document. |
| `reviewWorkflow` | Text | Review path for source maintenance. |
| `effectiveDuring` | Text | Period in which the source is current. |
| `brando:jsonLdSidecar` | URL | Linked JSON sidecar for the same entity. |

## Examples

The three tabs below show the same `ABC Example Inc` entity as a Markdown body, YAML frontmatter, and JSON sidecar.

<div class="entity-example">
  <div class="entity-example__heading">
    <span class="entity-example__icon"></span>
    <span class="entity-example__label">Example 1</span>
  </div>
  <p class="entity-example__intro"><em>ABC Example Inc workflow source document set.</em></p>
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
# ABC Example Inc source document set

## Summary

This source document set collects the approved internal and external source material used to support workflow category positioning, claims, and disclosures.

## Properties

- **Brand:** ABC Example Inc
- **Data source:** Internal strategy notes, approved analyst inputs, reviewed implementation material
- **Review workflow:** Strategy owner review and legal review

## Relationships

- **Supports:** ABC Example Inc workflow automation market review 2026
- **Supports:** ABC Example Inc launch evidence record
- **Effective during:** FY2026

## Controls

- **Required:** Keep version references and publication dates attached
- **Reviewed:** When any dependent claim or disclosure changes
- **Escalated:** Source expiry or unresolved factual conflicts

## References

- ABC Example Inc workflow automation market review 2026
- ABC Example Inc launch evidence record
- ABC Example Inc audit record Q1 2026
```

    </div>
    <div class="entity-example-tabs__panel entity-example-tabs__panel--yaml" markdown="1">

```yaml
brando_type: SourceDocument
id: https://example.com/brands/abc-example-inc/sources/workflow-source-document-set
title: ABC Example Inc source document set
tags:
  - source-document
  - evidence
  - supporting-material
"brando:jsonLdSidecar": https://example.com/brands/abc-example-inc/sources/workflow-source-document-set.json
properties:
  brand: ABC Example Inc
  dataSource: Internal strategy notes, approved analyst inputs, reviewed implementation material
  reviewWorkflow: Strategy owner review and legal review
relationships:
  supports:
    - ABC Example Inc workflow automation market review 2026
    - ABC Example Inc launch evidence record
  effectiveDuring:
    - FY2026
controls:
  required:
    - Keep version references and publication dates attached
  reviewed:
    - When any dependent claim or disclosure changes
  escalated:
    - Source expiry or unresolved factual conflicts
references:
  sourceDocuments:
    - ABC Example Inc workflow automation market review 2026
  evidenceRecords:
    - ABC Example Inc launch evidence record
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
  "@id": "https://example.com/brands/abc-example-inc/sources/workflow-source-document-set",
  "@type": "brando:SourceDocument",
  "schema:name": "ABC Example Inc source document set",
  "brando:jsonLdSidecar": "https://example.com/brands/abc-example-inc/sources/workflow-source-document-set.json",
  "brando:properties": {
    "brand": "ABC Example Inc",
    "dataSource": "Internal strategy notes, approved analyst inputs, reviewed implementation material",
    "reviewWorkflow": "Strategy owner review and legal review"
  },
  "brando:relationships": {
    "supports": [
      "ABC Example Inc workflow automation market review 2026",
      "ABC Example Inc launch evidence record"
    ],
    "effectiveDuring": ["FY2026"]
  },
  "brando:controls": {
    "required": ["Keep version references and publication dates attached"],
    "reviewed": ["When any dependent claim or disclosure changes"],
    "escalated": ["Source expiry or unresolved factual conflicts"]
  },
  "brando:references": {
    "sourceDocuments": ["ABC Example Inc workflow automation market review 2026"],
    "evidenceRecords": ["ABC Example Inc launch evidence record"],
    "auditRecords": ["ABC Example Inc audit record Q1 2026"]
  }
}
```

    </div>
  </div>
</div>
