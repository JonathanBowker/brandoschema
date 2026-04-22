---
title: Brand and context
description: Brand and context properties for identity, portfolio structure, audience, channel, market, and activation scope.
---

# Brand and context

Brand and context properties for identity, portfolio structure, audience, channel, market, and activation scope.

[Back to all properties](index.md)

## Sections

| Section | Properties | Purpose |
| --- | ---: | --- |
| [Brand properties](brand.md) | 17 | Core brand identity, architecture, governance attachment, portfolio, and inheritance properties. |
| [Context properties](context.md) | 3 | Audience, channel, market, journey, and activation-context properties. |

## Properties

### [Brand properties](brand.md)

Core brand identity, architecture, governance attachment, portfolio, and inheritance properties.

| Property | Description | Values | Used on |
| --- | --- | --- | --- |
| [`brando:brandArchitectureRole`](brandArchitectureRole.md) | The role this brand plays in the broader brand architecture (e.g. master brand, endorsed brand, sub-brand). | **Text**<br>**List of Text values** | `brando:Brand` |
| [`brando:brandNarrative`](brandNarrative.md) | Longer-form narrative that explains the brand's origin, evolution, and purpose. | **Text**<br>**List of Text values** | `brando:Brand` |
| [`brando:brandPromise`](brandPromise.md) | The core commitment or experience the brand guarantees to deliver. | **Text**<br>**List of Text values** | `brando:Brand` |
| [`brando:competitorContext`](competitorContext.md) | Summary of competitors, adjacent solutions, and how the brand differentiates. | **Text**<br>**List of Text values** | `brando:Brand` |
| [`brando:coreValues`](coreValues.md) | Foundational principles and beliefs that guide brand decisions and behaviours. | **Text**<br>**List of Text values** | `brando:Brand` |
| [`brando:governanceModel`](governanceModel.md) | Description of how the brand is governed (e.g. centralised, federated, hybrid) for decision-making and approvals. | **Text**<br>**List of Text values** | `brando:Brand` |
| [`brando:hasAutomationRule`](hasAutomationRule.md) | Links a brand to automated governance rules and triggers. | **brando:AutomationRule**<br>**List of brando:AutomationRule values** | `brando:Brand` |
| [`brando:hasCampaign`](hasCampaign.md) | Links a brand to time-bound campaigns that may temporarily adjust rules and tokens. | **brando:Campaign**<br>**List of brando:Campaign values** | `brando:Brand` |
| [`brando:hasContext`](hasContext.md) | Links a brand to one or more activation contexts in which it operates. | **brando:Context**<br>**List of brando:Context values** | `brando:Brand` |
| [`brando:hasProductCategory`](hasProductCategory.md) | Links a brand to its branded product or service category taxonomy nodes. | **brando:BrandedCategory**<br>**List of brando:BrandedCategory values** | `brando:Brand` |
| [`brando:hasProductPersona`](hasProductPersona.md) | Links a brand to its branded product or service category taxonomy nodes. | **brando:BrandedCategory**<br>**List of brando:BrandedCategory values** | `brando:Brand` |
| [`brando:hasSyntheticPersona`](hasSyntheticPersona.md) | Links a brand to its branded product or service category taxonomy nodes. | **brando:BrandedCategory**<br>**List of brando:BrandedCategory values** | `brando:Brand` |
| [`brando:inheritsPolicies`](inheritsPolicies.md) | Indicates whether a sub-brand inherits governance policies from its parent brand. | **Boolean**<br>**List of Boolean values** | `brando:Brand` |
| [`brando:inheritsTokens`](inheritsTokens.md) | Structured definition of which expression tokens (verbal, visual, audio) are inherited and how. | **Text**<br>**List of Text values** | `brando:Brand` |
| [`brando:marketPosition`](marketPosition.md) | How the brand positions itself in its category relative to alternatives and peers. | **Text**<br>**List of Text values** | `brando:Brand` |
| [`brando:missionStatement`](missionStatement.md) | The brand's core purpose and day-to-day reason for existing. | **Text**<br>**List of Text values** | `brando:Brand` |
| [`brando:visionStatement`](visionStatement.md) | The aspirational future state the brand is working toward. | **Text**<br>**List of Text values** | `brando:Brand` |

### [Context properties](context.md)

Audience, channel, market, journey, and activation-context properties.

| Property | Description | Values | Used on |
| --- | --- | --- | --- |
| [`brando:audiencePersona`](audiencePersona.md) | Persona-style archetypes representing typical users in this context. | **Text**<br>**List of Text values** | `brando:Context` |
| [`brando:audienceSegment`](audienceSegment.md) | Strategic grouping of individuals who share needs or characteristics relevant to this context. | **Text**<br>**List of Text values** | `brando:Context` |
| [`brando:domainContext`](domainContext.md) | Operational, legal, channel, regional, and use-case conditions encoded as a structured JSON payload. | **Text**<br>**List of Text values** | `brando:Context` |
