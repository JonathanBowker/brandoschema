# Prohibited example

A prohibited example records messaging that must not be reused because it violates claims, legal, or governance rules.

## Entity properties

| Property | Type | Description |
| --- | --- | --- |
| `id` | IRI | Stable identifier for the prohibited example. |
| `title` | Text | Human-readable example title. |
| `riskTag` | Text | Primary risk area for the prohibition. |
| `reviewWorkflow` | Text | Review and escalation path. |
| `hasPolicy` | Text | Governing policy reference. |
| `brando:jsonLdSidecar` | URL | Linked JSON sidecar for the same entity. |

## Examples

The three tabs below show the same `ABC Example Inc` entity as a Markdown body, YAML frontmatter, and JSON sidecar.

<div class="entity-example">
  <div class="entity-example__heading">
    <span class="entity-example__icon"></span>
    <span class="entity-example__label">Example 1</span>
  </div>
  <p class="entity-example__intro"><em>ABC Example Inc prohibited messaging example.</em></p>
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
# ABC Example Inc prohibited messaging example

## Summary

This example records a claim pattern that ABC Example Inc must not use in public messaging because it overstates guaranteed business outcomes.

## Properties

- **Brand:** ABC Example Inc
- **Risk tag:** unsupported-performance-claim
- **Review workflow:** Legal review and compliance review

## Relationships

- **Has policy:** ABC Example Inc campaign claims policy
- **Applies to product:** ABC Flow Pilot
- **Effective during:** All live campaigns

## Controls

- **Prohibited:** "Guaranteed 40% productivity improvement in 30 days"
- **Reviewed:** During campaign approval and audit
- **Escalated:** Any reuse by agencies or partners

## References

- ABC Example Inc approved launch messaging example
- ABC Example Inc Q1 evidence record
- ABC Example Inc audit record Q1 2026
```

    </div>
    <div class="entity-example-tabs__panel entity-example-tabs__panel--yaml" markdown="1">

```yaml
brando_type: ProhibitedExample
id: https://example.com/brands/abc-example-inc/examples/prohibited/guaranteed-productivity-improvement
title: ABC Example Inc prohibited messaging example
tags:
  - prohibited-example
  - claims
  - compliance
"brando:jsonLdSidecar": https://example.com/brands/abc-example-inc/examples/prohibited/guaranteed-productivity-improvement.json
properties:
  brand: ABC Example Inc
  riskTag: unsupported-performance-claim
  reviewWorkflow: Legal review and compliance review
relationships:
  hasPolicy:
    - ABC Example Inc campaign claims policy
  appliesToProduct:
    - ABC Flow Pilot
  effectiveDuring:
    - All live campaigns
controls:
  prohibited:
    - Guaranteed 40% productivity improvement in 30 days
  reviewed:
    - During campaign approval and audit
  escalated:
    - Any reuse by agencies or partners
references:
  approvedExamples:
    - ABC Example Inc approved launch messaging example
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
  "@id": "https://example.com/brands/abc-example-inc/examples/prohibited/guaranteed-productivity-improvement",
  "@type": "brando:ProhibitedExample",
  "schema:name": "ABC Example Inc prohibited messaging example",
  "brando:jsonLdSidecar": "https://example.com/brands/abc-example-inc/examples/prohibited/guaranteed-productivity-improvement.json",
  "brando:properties": {
    "brand": "ABC Example Inc",
    "riskTag": "unsupported-performance-claim",
    "reviewWorkflow": "Legal review and compliance review"
  },
  "brando:relationships": {
    "hasPolicy": ["ABC Example Inc campaign claims policy"],
    "appliesToProduct": ["ABC Flow Pilot"],
    "effectiveDuring": ["All live campaigns"]
  },
  "brando:controls": {
    "prohibited": ["Guaranteed 40% productivity improvement in 30 days"],
    "reviewed": ["During campaign approval and audit"],
    "escalated": ["Any reuse by agencies or partners"]
  },
  "brando:references": {
    "approvedExamples": ["ABC Example Inc approved launch messaging example"],
    "evidenceRecords": ["ABC Example Inc Q1 evidence record"],
    "auditRecords": ["ABC Example Inc audit record Q1 2026"]
  }
}
```

    </div>
  </div>
</div>
