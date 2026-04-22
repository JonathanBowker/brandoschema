---
title: Runtime and campaigns
description: Campaign and automation-rule properties used by runtime governance and activation workflows.
---

# Runtime and campaigns

Campaign and automation-rule properties used by runtime governance and activation workflows.

[Back to all properties](index.md)

## Sections

| Section | Properties | Purpose |
| --- | ---: | --- |
| [Campaign properties](campaign.md) | 3 | Campaign naming, themes, time-bounded overrides, and activation properties. |
| [Automation rule properties](automation-rule.md) | 4 | Trigger, metric, data-source, and automated-action properties. |

## Properties

### [Campaign properties](campaign.md)

Campaign naming, themes, time-bounded overrides, and activation properties.

| Property | Description | Values | Used on |
| --- | --- | --- | --- |
| [`brando:campaignName`](campaignName.md) | Human-readable name of a marketing or communications campaign. | **Text**<br>**List of Text values** | `brando:Campaign` |
| [`brando:campaignTheme`](campaignTheme.md) | Central message or creative theme for the campaign. | **Text**<br>**List of Text values** | `brando:Campaign` |
| [`brando:temporaryOverrides`](temporaryOverrides.md) | Structured JSON describing temporary modifications to brand rules during this campaign. | **Text**<br>**List of Text values** | `brando:Campaign` |

### [Automation rule properties](automation-rule.md)

Trigger, metric, data-source, and automated-action properties.

| Property | Description | Values | Used on |
| --- | --- | --- | --- |
| [`brando:automationAction`](automationAction.md) | Structured JSON describing actions taken when trigger conditions are met. | **Text**<br>**List of Text values** | `brando:AutomationRule` |
| [`brando:dataSource`](dataSource.md) | API endpoint or data source providing metrics or signals. | **URL**<br>**List of URL values** | `brando:AutomationRule` |
| [`brando:monitoredMetric`](monitoredMetric.md) | Structured JSON describing the metric being monitored, thresholds, and operators. | **Text**<br>**List of Text values** | `brando:AutomationRule` |
| [`brando:triggerType`](triggerType.md) | Type of event or condition that activates this automation rule. | **Text**<br>**List of Text values** | `brando:AutomationRule` |
