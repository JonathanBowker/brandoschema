# Discouraged example

A discouraged example records messaging that is not the preferred model but may still appear in historical or third-party materials.

## Entity properties

| Property | Type | Description |
| --- | --- | --- |
| `id` | IRI | Stable identifier for the discouraged example. |
| `title` | Text | Human-readable example title. |
| `reviewWorkflow` | Text | Review path for deciding whether to retire or revise the example. |
| `hasPolicy` | Text | Governing policy reference. |
| `riskTag` | Text | Primary risk label for the example. |
| `brando:jsonLdSidecar` | URL | Linked JSON sidecar for the same entity. |

## Examples

The three tabs below show the same `ABC Example Inc` entity as a Markdown body, YAML frontmatter, and JSON sidecar.

<div class="entity-example">
  <div class="entity-example__heading">
    <span class="entity-example__icon"></span>
    <span class="entity-example__label">Example 1</span>
  </div>
  <p class="entity-example__intro"><em>ABC Example Inc discouraged messaging example.</em></p>
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
# ABC Example Inc discouraged messaging example

## Summary

This example captures messaging that is understandable but too generic for current ABC Example Inc positioning.

## Properties

- **Brand:** ABC Example Inc
- **Risk tag:** generic-positioning
- **Review workflow:** Content lead review and brand review

## Relationships

- **Has policy:** ABC Example Inc positioning policy
- **Applies to product:** ABC Flow Pilot
- **Effective during:** Legacy campaign archive review

## Controls

- **Discouraged:** Generic claims such as "seamless transformation"
- **Reviewed:** During campaign refreshes
- **Escalated:** Reuse in new external campaigns

## References

- ABC Example Inc approved launch messaging example
- ABC Example Inc workflow automation market review 2026
- ABC Example Inc source document set
```

    </div>
    <div class="entity-example-tabs__panel entity-example-tabs__panel--yaml" markdown="1">

```yaml
brando_type: DiscouragedExample
id: https://example.com/brands/abc-example-inc/examples/discouraged/seamless-transformation
title: ABC Example Inc discouraged messaging example
tags:
  - discouraged-example
  - messaging
  - legacy-copy
"brando:jsonLdSidecar": https://example.com/brands/abc-example-inc/examples/discouraged/seamless-transformation.json
properties:
  brand: ABC Example Inc
  riskTag: generic-positioning
  reviewWorkflow: Content lead review and brand review
relationships:
  hasPolicy:
    - ABC Example Inc positioning policy
  appliesToProduct:
    - ABC Flow Pilot
  effectiveDuring:
    - Legacy campaign archive review
controls:
  discouraged:
    - Generic claims such as seamless transformation
  reviewed:
    - During campaign refreshes
  escalated:
    - Reuse in new external campaigns
references:
  approvedExamples:
    - ABC Example Inc approved launch messaging example
  sourceDocuments:
    - ABC Example Inc workflow automation market review 2026
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
  "@id": "https://example.com/brands/abc-example-inc/examples/discouraged/seamless-transformation",
  "@type": "brando:DiscouragedExample",
  "schema:name": "ABC Example Inc discouraged messaging example",
  "brando:jsonLdSidecar": "https://example.com/brands/abc-example-inc/examples/discouraged/seamless-transformation.json",
  "brando:properties": {
    "brand": "ABC Example Inc",
    "riskTag": "generic-positioning",
    "reviewWorkflow": "Content lead review and brand review"
  },
  "brando:relationships": {
    "hasPolicy": ["ABC Example Inc positioning policy"],
    "appliesToProduct": ["ABC Flow Pilot"],
    "effectiveDuring": ["Legacy campaign archive review"]
  },
  "brando:controls": {
    "discouraged": ["Generic claims such as seamless transformation"],
    "reviewed": ["During campaign refreshes"],
    "escalated": ["Reuse in new external campaigns"]
  },
  "brando:references": {
    "approvedExamples": ["ABC Example Inc approved launch messaging example"],
    "sourceDocuments": [
      "ABC Example Inc workflow automation market review 2026",
      "ABC Example Inc source document set"
    ]
  }
}
```

    </div>
  </div>
</div>
