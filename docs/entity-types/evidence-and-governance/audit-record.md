# Audit record

An audit record captures a review outcome, findings, and required follow-up actions against governed materials.

## Entity properties

| Property | Type | Description |
| --- | --- | --- |
| `id` | IRI | Stable identifier for the audit record. |
| `title` | Text | Human-readable audit title. |
| `reviewWorkflow` | Text | Audit and sign-off path. |
| `riskTag` | Text | Main risk area tracked by the audit. |
| `effectiveDuring` | Text | Audit window or reporting period. |
| `brando:jsonLdSidecar` | URL | Linked JSON sidecar for the same entity. |

## Examples

The three tabs below show the same `ABC Example Inc` entity as a Markdown body, YAML frontmatter, and JSON sidecar.

<div class="entity-example">
  <div class="entity-example__heading">
    <span class="entity-example__icon"></span>
    <span class="entity-example__label">Example 1</span>
  </div>
  <p class="entity-example__intro"><em>ABC Example Inc audit record Q1 2026.</em></p>
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
# ABC Example Inc audit record Q1 2026

## Summary

This audit record documents the quarterly review of claims, disclosures, and approved campaign materials for ABC Example Inc.

## Properties

- **Brand:** ABC Example Inc
- **Risk tag:** claims-governance
- **Review workflow:** Compliance lead review, legal sign-off, brand governance sign-off

## Relationships

- **Reviews:** ABC Example Inc launch evidence record
- **Reviews:** ABC Example Inc approved launch messaging example
- **Effective during:** Q1 2026

## Controls

- **Required:** Log any unsupported claim and the remediation owner
- **Reviewed:** Quarterly
- **Escalated:** Repeat claim issues across channels or agencies

## References

- ABC Example Inc launch evidence record
- ABC Example Inc source document set
- ABC Example Inc regulatory disclosure on deployment conditions
```

    </div>
    <div class="entity-example-tabs__panel entity-example-tabs__panel--yaml" markdown="1">

```yaml
brando_type: AuditRecord
id: https://example.com/brands/abc-example-inc/audits/q1-2026-claims-governance
title: ABC Example Inc audit record Q1 2026
tags:
  - audit-record
  - governance
  - quarterly-review
"brando:jsonLdSidecar": https://example.com/brands/abc-example-inc/audits/q1-2026-claims-governance.json
properties:
  brand: ABC Example Inc
  riskTag: claims-governance
  reviewWorkflow: Compliance lead review, legal sign-off, brand governance sign-off
relationships:
  reviews:
    - ABC Example Inc launch evidence record
    - ABC Example Inc approved launch messaging example
  effectiveDuring:
    - Q1 2026
controls:
  required:
    - Log any unsupported claim and the remediation owner
  reviewed:
    - Quarterly
  escalated:
    - Repeat claim issues across channels or agencies
references:
  evidenceRecords:
    - ABC Example Inc launch evidence record
  sourceDocuments:
    - ABC Example Inc source document set
  disclosures:
    - ABC Example Inc regulatory disclosure on deployment conditions
```

    </div>
    <div class="entity-example-tabs__panel entity-example-tabs__panel--json" markdown="1">

```json
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@id": "https://example.com/brands/abc-example-inc/audits/q1-2026-claims-governance",
  "@type": "brando:AuditRecord",
  "schema:name": "ABC Example Inc audit record Q1 2026",
  "brando:jsonLdSidecar": "https://example.com/brands/abc-example-inc/audits/q1-2026-claims-governance.json",
  "brando:properties": {
    "brand": "ABC Example Inc",
    "riskTag": "claims-governance",
    "reviewWorkflow": "Compliance lead review, legal sign-off, brand governance sign-off"
  },
  "brando:relationships": {
    "reviews": [
      "ABC Example Inc launch evidence record",
      "ABC Example Inc approved launch messaging example"
    ],
    "effectiveDuring": ["Q1 2026"]
  },
  "brando:controls": {
    "required": ["Log any unsupported claim and the remediation owner"],
    "reviewed": ["Quarterly"],
    "escalated": ["Repeat claim issues across channels or agencies"]
  },
  "brando:references": {
    "evidenceRecords": ["ABC Example Inc launch evidence record"],
    "sourceDocuments": ["ABC Example Inc source document set"],
    "disclosures": ["ABC Example Inc regulatory disclosure on deployment conditions"]
  }
}
```

    </div>
  </div>
</div>
