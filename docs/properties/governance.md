---
title: Governance and policy
description: Policy, compliance, review, risk, and enforcement properties.
---

# Governance and policy

Policy, compliance, review, risk, and enforcement properties.

[Back to all properties](index.md)

## Sections

| Section | Properties | Purpose |
| --- | ---: | --- |
| [Policy properties](policy.md) | 10 | Governance, compliance, enforcement, risk, retrieval, and review properties. |

## Properties

### [Policy properties](policy.md)

Governance, compliance, enforcement, risk, retrieval, and review properties.

| Property | Description | Values | Used on |
| --- | --- | --- | --- |
| [`brando:complianceTags`](complianceTags.md) | Regulatory or legal tags such as GDPR, HIPAA, or FCA. | **Text**<br>**List of Text values** | `brando:Policy` |
| [`brando:embeddingQuality`](embeddingQuality.md) | Qualitative or scored assessment of how well this content performs in vector search or RAG. | **Text**<br>**List of Text values** | `brando:Policy` |
| [`brando:guardRails`](guardRails.md) | Non-negotiable boundaries that AI systems must not cross. | **Text**<br>**List of Text values** | `brando:Policy` |
| [`brando:priority`](priority.md) | Governance precedence for this policy when multiple rules could apply. | **Integer**<br>**List of Integer values** | `brando:Policy` |
| [`brando:refusalStrategies`](refusalStrategies.md) | Preferred patterns for declining or redirecting unsafe or out-of-scope requests. | **Text**<br>**List of Text values** | `brando:Policy` |
| [`brando:retrievableInLLM`](retrievableInLLM.md) | Boolean flag indicating whether this policy may be indexed or retrieved by language models. | **Boolean**<br>**List of Boolean values** | `brando:Policy` |
| [`brando:reviewWorkflow`](reviewWorkflow.md) | Description of human and/or automated steps for reviewing content and policy changes. | **Text**<br>**List of Text values** | `brando:Policy` |
| [`brando:riskScenarios`](riskScenarios.md) | Known edge cases and misuse patterns requiring caution or escalation. | **Text**<br>**List of Text values** | `brando:Policy` |
| [`brando:updatePolicy`](updatePolicy.md) | Rules for how often, by whom, and under what process policies are updated. | **Text**<br>**List of Text values** | `brando:Policy` |
| [`brando:visibilityRating`](visibilityRating.md) | Qualitative indicator of how easily this policy should be discoverable by AI systems. | **Text**<br>**List of Text values** | `brando:Policy` |
