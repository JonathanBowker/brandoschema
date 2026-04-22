# Product claim

A product claim captures a governed product statement that must be evidence-backed and scoped to a specific product context.

## Entity properties

| Property | Type | Description |
| --- | --- | --- |
| `id` | IRI | Stable identifier for the claim. |
| `title` | Text | Human-readable claim title. |
| `dataSource` | Text | Evidence basis for the claim. |
| `reviewWorkflow` | Text | Review path for the claim. |
| `appliesToProduct` | Text | Product the claim applies to. |
| `brando:jsonLdSidecar` | URL | Linked JSON sidecar for the same entity. |

## Examples

The three tabs below show the same `ABC Example Inc` entity as a Markdown body, YAML frontmatter, and JSON sidecar.

<div class="entity-example">
  <div class="entity-example__heading">
    <span class="entity-example__icon"></span>
    <span class="entity-example__label">Example 1</span>
  </div>
  <p class="entity-example__intro"><em>ABC Example Inc governed product claim.</em></p>
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
# ABC Example Inc product claim: faster workflow handoff visibility

## Summary

This claim states that ABC Flow Pilot helps operations teams improve visibility across workflow handoffs when configured with approved implementation support.

## Properties

- **Brand:** ABC Example Inc
- **Applies to product:** ABC Flow Pilot
- **Data source:** Approved pilot evidence and implementation notes
- **Review workflow:** Product marketing review, legal review, brand review

## Relationships

- **Has policy:** ABC Example Inc campaign claims policy
- **Effective during:** 2026 launch and retained proof period
- **References evidence record:** ABC Example Inc launch evidence record

## Controls

- **Required:** Keep the claim scoped to visibility and workflow handoffs
- **Prohibited:** Guaranteed time savings or universal outcome statements
- **Reviewed:** Before each campaign reuse

## References

- ABC Example Inc launch evidence record
- ABC Example Inc source document set
- ABC Example Inc regulatory disclosure on deployment conditions
```

    </div>
    <div class="entity-example-tabs__panel entity-example-tabs__panel--yaml" markdown="1">

```yaml
brando_type: ProductClaim
id: https://example.com/brands/abc-example-inc/claims/faster-workflow-handoff-visibility
title: ABC Example Inc product claim: faster workflow handoff visibility
tags:
  - product-claim
  - evidence-backed
  - workflow-automation
"brando:jsonLdSidecar": https://example.com/brands/abc-example-inc/claims/faster-workflow-handoff-visibility.json
properties:
  brand: ABC Example Inc
  appliesToProduct: ABC Flow Pilot
  dataSource: Approved pilot evidence and implementation notes
  reviewWorkflow: Product marketing review, legal review, brand review
relationships:
  hasPolicy:
    - ABC Example Inc campaign claims policy
  effectiveDuring:
    - 2026 launch and retained proof period
  referencesEvidenceRecord:
    - ABC Example Inc launch evidence record
controls:
  required:
    - Keep the claim scoped to visibility and workflow handoffs
  prohibited:
    - Guaranteed time savings or universal outcome statements
  reviewed:
    - Before each campaign reuse
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
  "@id": "https://example.com/brands/abc-example-inc/claims/faster-workflow-handoff-visibility",
  "@type": "brando:ProductClaim",
  "schema:name": "ABC Example Inc product claim: faster workflow handoff visibility",
  "brando:jsonLdSidecar": "https://example.com/brands/abc-example-inc/claims/faster-workflow-handoff-visibility.json",
  "brando:properties": {
    "brand": "ABC Example Inc",
    "appliesToProduct": "ABC Flow Pilot",
    "dataSource": "Approved pilot evidence and implementation notes",
    "reviewWorkflow": "Product marketing review, legal review, brand review"
  },
  "brando:relationships": {
    "hasPolicy": ["ABC Example Inc campaign claims policy"],
    "effectiveDuring": ["2026 launch and retained proof period"],
    "referencesEvidenceRecord": ["ABC Example Inc launch evidence record"]
  },
  "brando:controls": {
    "required": ["Keep the claim scoped to visibility and workflow handoffs"],
    "prohibited": ["Guaranteed time savings or universal outcome statements"],
    "reviewed": ["Before each campaign reuse"]
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
