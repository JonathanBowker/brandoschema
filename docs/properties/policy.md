---
title: Policy properties
description: Governance, compliance, enforcement, risk, retrieval, and review properties.
---

# Policy properties

Governance, compliance, enforcement, risk, retrieval, and review properties.

Properties in this section: **10**

[Back to all properties](index.md)

## [`brando:complianceTags`](complianceTags.md)

| Field | Value |
| --- | --- |
| Description | Regulatory or legal tags such as GDPR, HIPAA, or FCA. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Policy](../types/policy.md) |
| Vocabulary path | Brand > Property > Policy :: complianceTags |
| Canonical URL | [`https://brandoschema.com/properties/complianceTags`](https://brandoschema.com/properties/complianceTags) |

## [`brando:embeddingQuality`](embeddingQuality.md)

| Field | Value |
| --- | --- |
| Description | Qualitative or scored assessment of how well this content performs in vector search or RAG. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Policy](../types/policy.md) |
| Vocabulary path | Brand > Property > Policy :: embeddingQuality |
| Canonical URL | [`https://brandoschema.com/properties/embeddingQuality`](https://brandoschema.com/properties/embeddingQuality) |

## [`brando:guardRails`](guardRails.md)

| Field | Value |
| --- | --- |
| Description | Non-negotiable boundaries that AI systems must not cross. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Policy](../types/policy.md) |
| Vocabulary path | Brand > Property > Policy :: guardRails |
| Canonical URL | [`https://brandoschema.com/properties/guardRails`](https://brandoschema.com/properties/guardRails) |

## [`brando:priority`](priority.md)

| Field | Value |
| --- | --- |
| Description | Governance precedence for this policy when multiple rules could apply. |
| Values expected | **Integer**<br>**List of Integer values** |
| Used on | [brando:Policy](../types/policy.md) |
| Vocabulary path | Brand > Property > Policy :: priority |
| Canonical URL | [`https://brandoschema.com/properties/priority`](https://brandoschema.com/properties/priority) |

## [`brando:refusalStrategies`](refusalStrategies.md)

| Field | Value |
| --- | --- |
| Description | Preferred patterns for declining or redirecting unsafe or out-of-scope requests. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Policy](../types/policy.md) |
| Vocabulary path | Brand > Property > Policy :: refusalStrategies |
| Canonical URL | [`https://brandoschema.com/properties/refusalStrategies`](https://brandoschema.com/properties/refusalStrategies) |

## [`brando:retrievableInLLM`](retrievableInLLM.md)

| Field | Value |
| --- | --- |
| Description | Boolean flag indicating whether this policy may be indexed or retrieved by language models. |
| Values expected | **Boolean**<br>**List of Boolean values** |
| Used on | [brando:Policy](../types/policy.md) |
| Vocabulary path | Brand > Property > Policy :: retrievableInLLM |
| Canonical URL | [`https://brandoschema.com/properties/retrievableInLLM`](https://brandoschema.com/properties/retrievableInLLM) |

## [`brando:reviewWorkflow`](reviewWorkflow.md)

| Field | Value |
| --- | --- |
| Description | Description of human and/or automated steps for reviewing content and policy changes. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Policy](../types/policy.md) |
| Vocabulary path | Brand > Property > Policy :: reviewWorkflow |
| Canonical URL | [`https://brandoschema.com/properties/reviewWorkflow`](https://brandoschema.com/properties/reviewWorkflow) |

## [`brando:riskScenarios`](riskScenarios.md)

| Field | Value |
| --- | --- |
| Description | Known edge cases and misuse patterns requiring caution or escalation. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Policy](../types/policy.md) |
| Vocabulary path | Brand > Property > Policy :: riskScenarios |
| Canonical URL | [`https://brandoschema.com/properties/riskScenarios`](https://brandoschema.com/properties/riskScenarios) |

## [`brando:updatePolicy`](updatePolicy.md)

| Field | Value |
| --- | --- |
| Description | Rules for how often, by whom, and under what process policies are updated. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Policy](../types/policy.md) |
| Vocabulary path | Brand > Property > Policy :: updatePolicy |
| Canonical URL | [`https://brandoschema.com/properties/updatePolicy`](https://brandoschema.com/properties/updatePolicy) |

## [`brando:visibilityRating`](visibilityRating.md)

| Field | Value |
| --- | --- |
| Description | Qualitative indicator of how easily this policy should be discoverable by AI systems. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Policy](../types/policy.md) |
| Vocabulary path | Brand > Property > Policy :: visibilityRating |
| Canonical URL | [`https://brandoschema.com/properties/visibilityRating`](https://brandoschema.com/properties/visibilityRating) |
