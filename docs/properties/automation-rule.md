---
title: Automation rule properties
description: Trigger, metric, data-source, and automated-action properties.
---

# Automation rule properties

Trigger, metric, data-source, and automated-action properties.

Properties in this section: **4**

[Back to all properties](index.md)

## [`brando:automationAction`](automationAction.md)

| Field | Value |
| --- | --- |
| Description | Structured JSON describing actions taken when trigger conditions are met. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:AutomationRule](../types/automation-rule.md) |
| Vocabulary path | Thing > Intangible > AutomationRule :: automationAction |
| Canonical URL | [`https://brandoschema.com/properties/automationAction`](https://brandoschema.com/properties/automationAction) |

## [`brando:dataSource`](dataSource.md)

| Field | Value |
| --- | --- |
| Description | API endpoint or data source providing metrics or signals. |
| Values expected | **URL**<br>**List of URL values** |
| Used on | [brando:AutomationRule](../types/automation-rule.md) |
| Vocabulary path | Thing > Intangible > AutomationRule :: dataSource |
| Canonical URL | [`https://brandoschema.com/properties/dataSource`](https://brandoschema.com/properties/dataSource) |

## [`brando:monitoredMetric`](monitoredMetric.md)

| Field | Value |
| --- | --- |
| Description | Structured JSON describing the metric being monitored, thresholds, and operators. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:AutomationRule](../types/automation-rule.md) |
| Vocabulary path | Thing > Intangible > AutomationRule :: monitoredMetric |
| Canonical URL | [`https://brandoschema.com/properties/monitoredMetric`](https://brandoschema.com/properties/monitoredMetric) |

## [`brando:triggerType`](triggerType.md)

| Field | Value |
| --- | --- |
| Description | Type of event or condition that activates this automation rule. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:AutomationRule](../types/automation-rule.md) |
| Vocabulary path | Thing > Intangible > AutomationRule :: triggerType |
| Canonical URL | [`https://brandoschema.com/properties/triggerType`](https://brandoschema.com/properties/triggerType) |
