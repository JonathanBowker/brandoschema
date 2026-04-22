# Regulatory disclosure

A regulatory disclosure records required public disclosure text and the conditions under which it must appear.

## Entity properties

| Property | Type | Description |
| --- | --- | --- |
| `id` | IRI | Stable identifier for the disclosure. |
| `title` | Text | Human-readable disclosure title. |
| `jurisdiction` | Text | Market or jurisdiction the disclosure applies to. |
| `reviewWorkflow` | Text | Legal and compliance review path. |
| `effectiveDuring` | Text | Period during which the disclosure is active. |
| `brando:jsonLdSidecar` | URL | Linked JSON sidecar for the same entity. |

## Examples

The three tabs below show the same `ABC Example Inc` entity as a Markdown body, YAML frontmatter, and JSON sidecar.

<div class="entity-example">
  <div class="entity-example__heading">
    <span class="entity-example__icon"></span>
    <span class="entity-example__label">Example 1</span>
  </div>
  <p class="entity-example__intro"><em>ABC Example Inc deployment-conditions disclosure.</em></p>
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
# ABC Example Inc regulatory disclosure on deployment conditions

## Summary

This disclosure explains that workflow outcome statements depend on configuration scope, implementation support, and customer operating environment.

## Properties

- **Brand:** ABC Example Inc
- **Jurisdiction:** UK and EU marketing materials
- **Review workflow:** Legal review and compliance review

## Relationships

- **Has policy:** ABC Example Inc disclosure policy
- **Applies to product:** ABC Flow Pilot
- **Effective during:** 2026 launch period

## Controls

- **Required:** Show disclosure near performance-oriented claims
- **Reviewed:** With each campaign approval cycle
- **Escalated:** Local market adaptations outside approved wording

## References

- ABC Example Inc product claim: faster workflow handoff visibility
- ABC Example Inc launch evidence record
- ABC Example Inc audit record Q1 2026
```

    </div>
    <div class="entity-example-tabs__panel entity-example-tabs__panel--yaml" markdown="1">

```yaml
brando_type: RegulatoryDisclosure
id: https://example.com/brands/abc-example-inc/disclosures/deployment-conditions
title: ABC Example Inc regulatory disclosure on deployment conditions
tags:
  - disclosure
  - regulatory
  - claims-support
"brando:jsonLdSidecar": https://example.com/brands/abc-example-inc/disclosures/deployment-conditions.json
properties:
  brand: ABC Example Inc
  jurisdiction: UK and EU marketing materials
  reviewWorkflow: Legal review and compliance review
relationships:
  hasPolicy:
    - ABC Example Inc disclosure policy
  appliesToProduct:
    - ABC Flow Pilot
  effectiveDuring:
    - 2026 launch period
controls:
  required:
    - Show disclosure near performance-oriented claims
  reviewed:
    - With each campaign approval cycle
  escalated:
    - Local market adaptations outside approved wording
references:
  productClaims:
    - ABC Example Inc product claim: faster workflow handoff visibility
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
  "@id": "https://example.com/brands/abc-example-inc/disclosures/deployment-conditions",
  "@type": "brando:RegulatoryDisclosure",
  "schema:name": "ABC Example Inc regulatory disclosure on deployment conditions",
  "brando:jsonLdSidecar": "https://example.com/brands/abc-example-inc/disclosures/deployment-conditions.json",
  "brando:properties": {
    "brand": "ABC Example Inc",
    "jurisdiction": "UK and EU marketing materials",
    "reviewWorkflow": "Legal review and compliance review"
  },
  "brando:relationships": {
    "hasPolicy": ["ABC Example Inc disclosure policy"],
    "appliesToProduct": ["ABC Flow Pilot"],
    "effectiveDuring": ["2026 launch period"]
  },
  "brando:controls": {
    "required": ["Show disclosure near performance-oriented claims"],
    "reviewed": ["With each campaign approval cycle"],
    "escalated": ["Local market adaptations outside approved wording"]
  },
  "brando:references": {
    "productClaims": ["ABC Example Inc product claim: faster workflow handoff visibility"],
    "evidenceRecords": ["ABC Example Inc launch evidence record"],
    "auditRecords": ["ABC Example Inc audit record Q1 2026"]
  }
}
```

    </div>
  </div>
</div>
