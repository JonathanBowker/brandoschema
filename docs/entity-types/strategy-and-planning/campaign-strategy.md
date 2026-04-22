# Campaign strategy

A campaign strategy document defines the objective, audience, message structure, and governance conditions for a campaign.

## Entity properties

| Property | Type | Description |
| --- | --- | --- |
| `id` | IRI | Stable identifier for the strategy. |
| `title` | Text | Human-readable campaign strategy title. |
| `campaignTheme` | Text | Main campaign framing or territory. |
| `reviewWorkflow` | Text | Required campaign approval flow. |
| `effectiveDuring` | Text | Campaign period the strategy governs. |
| `brando:jsonLdSidecar` | URL | Linked JSON sidecar for the same entity. |

## Examples

The three tabs below show the same `ABC Example Inc` entity as a Markdown body, YAML frontmatter, and JSON sidecar.

<div class="entity-example">
  <div class="entity-example__heading">
    <span class="entity-example__icon"></span>
    <span class="entity-example__label">Example 1</span>
  </div>
  <p class="entity-example__intro"><em>ABC Example Inc workflow confidence launch campaign strategy.</em></p>
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
# ABC Example Inc workflow confidence launch campaign strategy

## Summary

This strategy sets the message structure, approved campaign narrative, and rollout conditions for the ABC Example Inc workflow confidence launch.

## Properties

- **Brand:** ABC Example Inc
- **Campaign theme:** Workflow confidence without implementation drag
- **Audience:** Operations leaders and transformation teams
- **Review workflow:** Campaign lead review, brand review, legal review

## Relationships

- **Applies to product:** ABC Flow Pilot
- **Has prompt:** ABC Example Inc paid media prompt scaffold
- **Has policy:** ABC Example Inc campaign claims policy

## Controls

- **Required:** Use approved category language from the market report
- **Reviewed:** Weekly during launch window
- **Escalated:** Any promise of quantified operational outcomes

## References

- ABC Example Inc workflow automation market review 2026
- ABC Example Inc approved campaign example
- ABC Example Inc launch evidence record
```

    </div>
    <div class="entity-example-tabs__panel entity-example-tabs__panel--yaml" markdown="1">

```yaml
brando_type: CampaignStrategy
id: https://example.com/brands/abc-example-inc/campaigns/workflow-confidence-launch/strategy
title: ABC Example Inc workflow confidence launch campaign strategy
tags:
  - campaign-strategy
  - launch
  - messaging
"brando:jsonLdSidecar": https://example.com/brands/abc-example-inc/campaigns/workflow-confidence-launch/strategy.json
properties:
  brand: ABC Example Inc
  campaignTheme: Workflow confidence without implementation drag
  audience: Operations leaders and transformation teams
  reviewWorkflow: Campaign lead review, brand review, legal review
relationships:
  appliesToProduct:
    - ABC Flow Pilot
  hasPrompt:
    - ABC Example Inc paid media prompt scaffold
  hasPolicy:
    - ABC Example Inc campaign claims policy
controls:
  required:
    - Use approved category language from the market report
  reviewed:
    - Weekly during launch window
  escalated:
    - Any promise of quantified operational outcomes
references:
  sourceDocuments:
    - ABC Example Inc workflow automation market review 2026
  approvedExamples:
    - ABC Example Inc approved campaign example
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
  "@id": "https://example.com/brands/abc-example-inc/campaigns/workflow-confidence-launch/strategy",
  "@type": "brando:CampaignStrategy",
  "schema:name": "ABC Example Inc workflow confidence launch campaign strategy",
  "brando:jsonLdSidecar": "https://example.com/brands/abc-example-inc/campaigns/workflow-confidence-launch/strategy.json",
  "brando:properties": {
    "brand": "ABC Example Inc",
    "campaignTheme": "Workflow confidence without implementation drag",
    "audience": "Operations leaders and transformation teams",
    "reviewWorkflow": "Campaign lead review, brand review, legal review"
  },
  "brando:relationships": {
    "appliesToProduct": ["ABC Flow Pilot"],
    "hasPrompt": ["ABC Example Inc paid media prompt scaffold"],
    "hasPolicy": ["ABC Example Inc campaign claims policy"]
  },
  "brando:controls": {
    "required": ["Use approved category language from the market report"],
    "reviewed": ["Weekly during launch window"],
    "escalated": ["Any promise of quantified operational outcomes"]
  },
  "brando:references": {
    "sourceDocuments": ["ABC Example Inc workflow automation market review 2026"],
    "approvedExamples": ["ABC Example Inc approved campaign example"],
    "evidenceRecords": ["ABC Example Inc launch evidence record"]
  }
}
```

    </div>
  </div>
</div>
