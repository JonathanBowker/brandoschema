# Approved example

An approved example shows a sanctioned piece of messaging or content that teams can reuse as a positive reference.

## Entity properties

| Property | Type | Description |
| --- | --- | --- |
| `id` | IRI | Stable identifier for the approved example. |
| `title` | Text | Human-readable example title. |
| `dataSource` | Text | Source of the approved example. |
| `reviewWorkflow` | Text | Approval path for publication. |
| `hasPolicy` | Text | Governing policy reference. |
| `brando:jsonLdSidecar` | URL | Linked JSON sidecar for the same entity. |

## Examples

The three tabs below show the same `ABC Example Inc` entity as a Markdown body, YAML frontmatter, and JSON sidecar.

<div class="entity-example">
  <div class="entity-example__heading">
    <span class="entity-example__icon"></span>
    <span class="entity-example__label">Example 1</span>
  </div>
  <p class="entity-example__intro"><em>ABC Example Inc approved launch messaging example.</em></p>
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
# ABC Example Inc approved launch messaging example

## Summary

This approved example shows how ABC Example Inc can describe workflow confidence in launch messaging without overclaiming automation outcomes.

## Properties

- **Brand:** ABC Example Inc
- **Channel:** Campaign landing page and paid social
- **Review workflow:** Content lead review, brand review, legal review

## Relationships

- **Has policy:** ABC Example Inc campaign claims policy
- **Applies to product:** ABC Flow Pilot
- **Effective during:** Workflow confidence launch

## Controls

- **Required:** Keep language outcome-oriented but evidence-backed
- **Reviewed:** Before publication and after each material edit
- **Prohibited:** Numeric productivity promises without cited evidence

## References

- ABC Example Inc workflow confidence launch campaign strategy
- ABC Example Inc workflow automation market review 2026
- ABC Example Inc launch evidence record
```

    </div>
    <div class="entity-example-tabs__panel entity-example-tabs__panel--yaml" markdown="1">

```yaml
brando_type: ApprovedExample
id: https://example.com/brands/abc-example-inc/examples/approved/workflow-confidence-launch
title: ABC Example Inc approved launch messaging example
tags:
  - approved-example
  - launch
  - messaging
"brando:jsonLdSidecar": https://example.com/brands/abc-example-inc/examples/approved/workflow-confidence-launch.json
properties:
  brand: ABC Example Inc
  channel: Campaign landing page and paid social
  reviewWorkflow: Content lead review, brand review, legal review
relationships:
  hasPolicy:
    - ABC Example Inc campaign claims policy
  appliesToProduct:
    - ABC Flow Pilot
  effectiveDuring:
    - Workflow confidence launch
controls:
  required:
    - Keep language outcome-oriented but evidence-backed
  reviewed:
    - Before publication and after each material edit
  prohibited:
    - Numeric productivity promises without cited evidence
references:
  sourceDocuments:
    - ABC Example Inc workflow confidence launch campaign strategy
    - ABC Example Inc workflow automation market review 2026
  evidenceRecords:
    - ABC Example Inc launch evidence record
```

    </div>
    <div class="entity-example-tabs__panel entity-example-tabs__panel--json" markdown="1">

```json
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@id": "https://example.com/brands/abc-example-inc/examples/approved/workflow-confidence-launch",
  "@type": "brando:ApprovedExample",
  "schema:name": "ABC Example Inc approved launch messaging example",
  "brando:jsonLdSidecar": "https://example.com/brands/abc-example-inc/examples/approved/workflow-confidence-launch.json",
  "brando:properties": {
    "brand": "ABC Example Inc",
    "channel": "Campaign landing page and paid social",
    "reviewWorkflow": "Content lead review, brand review, legal review"
  },
  "brando:relationships": {
    "hasPolicy": ["ABC Example Inc campaign claims policy"],
    "appliesToProduct": ["ABC Flow Pilot"],
    "effectiveDuring": ["Workflow confidence launch"]
  },
  "brando:controls": {
    "required": ["Keep language outcome-oriented but evidence-backed"],
    "reviewed": ["Before publication and after each material edit"],
    "prohibited": ["Numeric productivity promises without cited evidence"]
  },
  "brando:references": {
    "sourceDocuments": [
      "ABC Example Inc workflow confidence launch campaign strategy",
      "ABC Example Inc workflow automation market review 2026"
    ],
    "evidenceRecords": ["ABC Example Inc launch evidence record"]
  }
}
```

    </div>
  </div>
</div>
