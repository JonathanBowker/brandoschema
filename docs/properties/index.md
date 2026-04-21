---
title: Brando Properties Index
description: Grouped index of Brando schema properties, with links to each property definition and compact tables for expected values and usage.
---

# Brando properties index

This index groups Brando property pages by modelling area. Use the section pages for a shorter list, or scan the detailed reference below for per-property values and usage.

Total properties: **93**

## Section overview

| Section | Properties | Purpose |
| --- | ---: | --- |
| [Brand properties](brand.md) | 17 | Core brand identity, architecture, governance attachment, portfolio, and inheritance properties. |
| [Context properties](context.md) | 3 | Audience, channel, market, journey, and activation-context properties. |
| [Brand expression properties](brand-expression.md) | 2 | Shared properties for expression tokens and associated assets. |
| [Verbal identity properties](verbal-identity.md) | 12 | Tone, voice, vocabulary, messaging, prompt, and writing-style properties. |
| [Visual identity properties](visual-identity.md) | 9 | Logo, colour, typography, imagery, motion, and visual-governance properties. |
| [Audio identity properties](audio-identity.md) | 7 | Voice, sonic logo, audio cue, pronunciation, and audio-guidance properties. |
| [Policy properties](policy.md) | 10 | Governance, compliance, enforcement, risk, retrieval, and review properties. |
| [Branded category properties](branded-category.md) | 10 | Product/category taxonomy, classification, and category-language properties. |
| [Campaign properties](campaign.md) | 3 | Campaign naming, themes, time-bounded overrides, and activation properties. |
| [Automation rule properties](automation-rule.md) | 4 | Trigger, metric, data-source, and automated-action properties. |
| [Cross-type properties](cross-type.md) | 16 | Properties that apply to more than one Brando class. |

## Detailed reference

### [Brand properties](brand.md)

Core brand identity, architecture, governance attachment, portfolio, and inheritance properties.

Properties in this section: **17**

#### [`brando:brandArchitectureRole`](brandArchitectureRole.md)

| Field | Value |
| --- | --- |
| Description | The role this brand plays in the broader brand architecture (e.g. master brand, endorsed brand, sub-brand). |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Brand](../types/brand.md) |
| Vocabulary path | Thing > Intangible > Brand :: brandArchitectureRole |
| Canonical URL | [`https://brandoschema.com/properties/brandArchitectureRole`](https://brandoschema.com/properties/brandArchitectureRole) |

#### [`brando:brandNarrative`](brandNarrative.md)

| Field | Value |
| --- | --- |
| Description | Longer-form narrative that explains the brand's origin, evolution, and purpose. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Brand](../types/brand.md) |
| Vocabulary path | Thing > Intangible > Brand :: brandNarrative |
| Canonical URL | [`https://brandoschema.com/properties/brandNarrative`](https://brandoschema.com/properties/brandNarrative) |

#### [`brando:brandPromise`](brandPromise.md)

| Field | Value |
| --- | --- |
| Description | The core commitment or experience the brand guarantees to deliver. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Brand](../types/brand.md) |
| Vocabulary path | Thing > Intangible > Brand :: brandPromise |
| Canonical URL | [`https://brandoschema.com/properties/brandPromise`](https://brandoschema.com/properties/brandPromise) |

#### [`brando:competitorContext`](competitorContext.md)

| Field | Value |
| --- | --- |
| Description | Summary of competitors, adjacent solutions, and how the brand differentiates. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Brand](../types/brand.md) |
| Vocabulary path | Thing > Intangible > Brand :: competitorContext |
| Canonical URL | [`https://brandoschema.com/properties/competitorContext`](https://brandoschema.com/properties/competitorContext) |

#### [`brando:coreValues`](coreValues.md)

| Field | Value |
| --- | --- |
| Description | Foundational principles and beliefs that guide brand decisions and behaviours. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Brand](../types/brand.md) |
| Vocabulary path | Thing > Intangible > Brand :: coreValues |
| Canonical URL | [`https://brandoschema.com/properties/coreValues`](https://brandoschema.com/properties/coreValues) |

#### [`brando:governanceModel`](governanceModel.md)

| Field | Value |
| --- | --- |
| Description | Description of how the brand is governed (e.g. centralised, federated, hybrid) for decision-making and approvals. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Brand](../types/brand.md) |
| Vocabulary path | Thing > Intangible > Brand :: governanceModel |
| Canonical URL | [`https://brandoschema.com/properties/governanceModel`](https://brandoschema.com/properties/governanceModel) |

#### [`brando:hasAutomationRule`](hasAutomationRule.md)

| Field | Value |
| --- | --- |
| Description | Links a brand to automated governance rules and triggers. |
| Values expected | **brando:AutomationRule**<br>**List of brando:AutomationRule values** |
| Used on | [brando:Brand](../types/brand.md) |
| Vocabulary path | Thing > Intangible > Brand :: hasAutomationRule |
| Canonical URL | [`https://brandoschema.com/properties/hasAutomationRule`](https://brandoschema.com/properties/hasAutomationRule) |

#### [`brando:hasCampaign`](hasCampaign.md)

| Field | Value |
| --- | --- |
| Description | Links a brand to time-bound campaigns that may temporarily adjust rules and tokens. |
| Values expected | **brando:Campaign**<br>**List of brando:Campaign values** |
| Used on | [brando:Brand](../types/brand.md) |
| Vocabulary path | Thing > Intangible > Brand :: hasCampaign |
| Canonical URL | [`https://brandoschema.com/properties/hasCampaign`](https://brandoschema.com/properties/hasCampaign) |

#### [`brando:hasContext`](hasContext.md)

| Field | Value |
| --- | --- |
| Description | Links a brand to one or more activation contexts in which it operates. |
| Values expected | **brando:Context**<br>**List of brando:Context values** |
| Used on | [brando:Brand](../types/brand.md) |
| Vocabulary path | Thing > Intangible > Brand :: hasContext |
| Canonical URL | [`https://brandoschema.com/properties/hasContext`](https://brandoschema.com/properties/hasContext) |

#### [`brando:hasProductCategory`](hasProductCategory.md)

| Field | Value |
| --- | --- |
| Description | Links a brand to its branded product or service category taxonomy nodes. |
| Values expected | **brando:BrandedCategory**<br>**List of brando:BrandedCategory values** |
| Used on | [brando:Brand](../types/brand.md) |
| Vocabulary path | Thing > Intangible > Brand :: hasProductCategory |
| Canonical URL | [`https://brandoschema.com/properties/hasProductCategory`](https://brandoschema.com/properties/hasProductCategory) |

#### [`brando:hasProductPersona`](hasProductPersona.md)

| Field | Value |
| --- | --- |
| Description | Links a brand to its branded product or service category taxonomy nodes. |
| Values expected | **brando:BrandedCategory**<br>**List of brando:BrandedCategory values** |
| Used on | [brando:Brand](../types/brand.md) |
| Vocabulary path | Thing > Intangible > Brand :: hasProductPersona |
| Canonical URL | [`https://brandoschema.com/properties/hasProductPersona`](https://brandoschema.com/properties/hasProductPersona) |

#### [`brando:hasSyntheticPersona`](hasSyntheticPersona.md)

| Field | Value |
| --- | --- |
| Description | Links a brand to its branded product or service category taxonomy nodes. |
| Values expected | **brando:BrandedCategory**<br>**List of brando:BrandedCategory values** |
| Used on | [brando:Brand](../types/brand.md) |
| Vocabulary path | Thing > Intangible > Brand :: hasSyntheticPersona |
| Canonical URL | [`https://brandoschema.com/properties/hasSyntheticPersona`](https://brandoschema.com/properties/hasSyntheticPersona) |

#### [`brando:inheritsPolicies`](inheritsPolicies.md)

| Field | Value |
| --- | --- |
| Description | Indicates whether a sub-brand inherits governance policies from its parent brand. |
| Values expected | **Boolean**<br>**List of Boolean values** |
| Used on | [brando:Brand](../types/brand.md) |
| Vocabulary path | Thing > Intangible > Brand :: inheritsPolicies |
| Canonical URL | [`https://brandoschema.com/properties/inheritsPolicies`](https://brandoschema.com/properties/inheritsPolicies) |

#### [`brando:inheritsTokens`](inheritsTokens.md)

| Field | Value |
| --- | --- |
| Description | Structured definition of which expression tokens (verbal, visual, audio) are inherited and how. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Brand](../types/brand.md) |
| Vocabulary path | Thing > Intangible > Brand :: inheritsTokens |
| Canonical URL | [`https://brandoschema.com/properties/inheritsTokens`](https://brandoschema.com/properties/inheritsTokens) |

#### [`brando:marketPosition`](marketPosition.md)

| Field | Value |
| --- | --- |
| Description | How the brand positions itself in its category relative to alternatives and peers. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Brand](../types/brand.md) |
| Vocabulary path | Thing > Intangible > Brand :: marketPosition |
| Canonical URL | [`https://brandoschema.com/properties/marketPosition`](https://brandoschema.com/properties/marketPosition) |

#### [`brando:missionStatement`](missionStatement.md)

| Field | Value |
| --- | --- |
| Description | The brand's core purpose and day-to-day reason for existing. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Brand](../types/brand.md) |
| Vocabulary path | Thing > Intangible > Brand :: missionStatement |
| Canonical URL | [`https://brandoschema.com/properties/missionStatement`](https://brandoschema.com/properties/missionStatement) |

#### [`brando:visionStatement`](visionStatement.md)

| Field | Value |
| --- | --- |
| Description | The aspirational future state the brand is working toward. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Brand](../types/brand.md) |
| Vocabulary path | Thing > Intangible > Brand :: visionStatement |
| Canonical URL | [`https://brandoschema.com/properties/visionStatement`](https://brandoschema.com/properties/visionStatement) |

### [Context properties](context.md)

Audience, channel, market, journey, and activation-context properties.

Properties in this section: **3**

#### [`brando:audiencePersona`](audiencePersona.md)

| Field | Value |
| --- | --- |
| Description | Persona-style archetypes representing typical users in this context. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Context](../types/context.md) |
| Vocabulary path | Thing > Intangible > Context :: audiencePersona |
| Canonical URL | [`https://brandoschema.com/properties/audiencePersona`](https://brandoschema.com/properties/audiencePersona) |

#### [`brando:audienceSegment`](audienceSegment.md)

| Field | Value |
| --- | --- |
| Description | Strategic grouping of individuals who share needs or characteristics relevant to this context. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Context](../types/context.md) |
| Vocabulary path | Thing > Intangible > Context :: audienceSegment |
| Canonical URL | [`https://brandoschema.com/properties/audienceSegment`](https://brandoschema.com/properties/audienceSegment) |

#### [`brando:domainContext`](domainContext.md)

| Field | Value |
| --- | --- |
| Description | Operational, legal, channel, regional, and use-case conditions encoded as a structured JSON payload. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Context](../types/context.md) |
| Vocabulary path | Thing > Intangible > Context :: domainContext |
| Canonical URL | [`https://brandoschema.com/properties/domainContext`](https://brandoschema.com/properties/domainContext) |

### [Brand expression properties](brand-expression.md)

Shared properties for expression tokens and associated assets.

Properties in this section: **2**

#### [`brando:assetPreview`](assetPreview.md)

| Field | Value |
| --- | --- |
| Description | Preview-friendly URL or data reference for displaying this token's associated asset. |
| Values expected | **URL**<br>**List of URL values** |
| Used on | [brando:BrandExpression](../types/brand-expression-token.md) |
| Vocabulary path | Thing > Intangible > BrandExpression :: assetPreview |
| Canonical URL | [`https://brandoschema.com/properties/assetPreview`](https://brandoschema.com/properties/assetPreview) |

#### [`brando:assetURL`](assetURL.md)

| Field | Value |
| --- | --- |
| Description | Canonical source URL for an asset associated with this expression token (e.g. avatar, badge, waveform). |
| Values expected | **URL**<br>**List of URL values** |
| Used on | [brando:BrandExpression](../types/brand-expression-token.md) |
| Vocabulary path | Thing > Intangible > BrandExpression :: assetURL |
| Canonical URL | [`https://brandoschema.com/properties/assetURL`](https://brandoschema.com/properties/assetURL) |

### [Verbal identity properties](verbal-identity.md)

Tone, voice, vocabulary, messaging, prompt, and writing-style properties.

Properties in this section: **12**

#### [`brando:approvedTerms`](approvedTerms.md)

| Field | Value |
| --- | --- |
| Description | Words and phrases that are encouraged in this verbal token. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [Brando:VerbalIdentity](../types/verbal-token.md) |
| Vocabulary path | Thing > Intangible > Verbal :: approvedTerms |
| Canonical URL | [`https://brandoschema.com/properties/approvedTerms`](https://brandoschema.com/properties/approvedTerms) |

#### [`brando:dialogueStyle`](dialogueStyle.md)

| Field | Value |
| --- | --- |
| Description | Guidance on conversational patterns, pacing, and pronoun usage. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [Brando:VerbalIdentity](../types/verbal-token.md) |
| Vocabulary path | Thing > Intangible > Verbal :: dialogueStyle |
| Canonical URL | [`https://brandoschema.com/properties/dialogueStyle`](https://brandoschema.com/properties/dialogueStyle) |

#### [`brando:keyMessages`](keyMessages.md)

| Field | Value |
| --- | --- |
| Description | Core value propositions and ideas that should recur across outputs. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [Brando:VerbalIdentity](../types/verbal-token.md) |
| Vocabulary path | Thing > Intangible > Verbal :: keyMessages |
| Canonical URL | [`https://brandoschema.com/properties/keyMessages`](https://brandoschema.com/properties/keyMessages) |

#### [`brando:mustDo`](mustDos.md)

| Field | Value |
| --- | --- |
| Description | Required behaviours and inclusions this verbal token must follow. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [Brando:VerbalIdentity](../types/verbal-token.md) |
| Vocabulary path | Thing > Intangible > Verbal :: mustDos |
| Canonical URL | [`https://brandoschema.com/properties/mustDos`](https://brandoschema.com/properties/mustDos) |

#### [`brando:mustNotDo`](mustNotDos.md)

| Field | Value |
| --- | --- |
| Description | Behaviours and constructions this verbal token must never produce. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [Brando:VerbalIdentity](../types/verbal-token.md) |
| Vocabulary path | Thing > Intangible > Verbal :: mustNotDos |
| Canonical URL | [`https://brandoschema.com/properties/mustNotDos`](https://brandoschema.com/properties/mustNotDos) |

#### [`brando:namingConvention`](namingConvention.md)

| Field | Value |
| --- | --- |
| Description | Rules for how products, features, dates, and other entities are named and formatted. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [Brando:VerbalIdentity](../types/verbal-token.md) |
| Vocabulary path | Thing > Intangible > Verbal :: namingConvention |
| Canonical URL | [`https://brandoschema.com/properties/namingConvention`](https://brandoschema.com/properties/namingConvention) |

#### [`brando:personaCard`](personaCard.md)

| Field | Value |
| --- | --- |
| Description | Humanised brand-as-a-person description used to guide tone and behaviour. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [Brando:VerbalIdentity](../types/verbal-token.md) |
| Vocabulary path | Thing > Intangible > Verbal :: personaCard |
| Canonical URL | [`https://brandoschema.com/properties/personaCard`](https://brandoschema.com/properties/personaCard) |

#### [`brando:prohibitedTerms`](prohibitedTerms.md)

| Field | Value |
| --- | --- |
| Description | Words and phrases that must not be used in this verbal token. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [Brando:VerbalIdentity](../types/verbal-token.md) |
| Vocabulary path | Thing > Intangible > Verbal :: prohibitedTerms |
| Canonical URL | [`https://brandoschema.com/properties/prohibitedTerms`](https://brandoschema.com/properties/prohibitedTerms) |

#### [`brando:promptScaffold`](promptScaffold.md)

| Field | Value |
| --- | --- |
| Description | Reusable instruction block or template for priming language models. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [Brando:VerbalIdentity](../types/verbal-token.md) |
| Vocabulary path | Thing > Intangible > Verbal :: promptScaffold |
| Canonical URL | [`https://brandoschema.com/properties/promptScaffold`](https://brandoschema.com/properties/promptScaffold) |

#### [`brando:tagline`](tagline.md)

| Field | Value |
| --- | --- |
| Description | Primary tagline plus any sanctioned variants for this verbal token. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [Brando:VerbalIdentity](../types/verbal-token.md) |
| Vocabulary path | Thing > Intangible > Verbal :: tagline |
| Canonical URL | [`https://brandoschema.com/properties/tagline`](https://brandoschema.com/properties/tagline) |

#### [`brando:toneOfVoice`](toneOfVoice.md)

| Field | Value |
| --- | --- |
| Description | Emotional texture and attitude of the brand's voice in this token. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [Brando:VerbalIdentity](../types/verbal-token.md) |
| Vocabulary path | Thing > Intangible > Verbal :: toneOfVoice |
| Canonical URL | [`https://brandoschema.com/properties/toneOfVoice`](https://brandoschema.com/properties/toneOfVoice) |

#### [`brando:writingStyle`](writingStyle.md)

| Field | Value |
| --- | --- |
| Description | Preferences for grammar, sentence structure, and clarity. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [Brando:VerbalIdentity](../types/verbal-token.md) |
| Vocabulary path | Thing > Intangible > Verbal :: writingStyle |
| Canonical URL | [`https://brandoschema.com/properties/writingStyle`](https://brandoschema.com/properties/writingStyle) |

### [Visual identity properties](visual-identity.md)

Logo, colour, typography, imagery, motion, and visual-governance properties.

Properties in this section: **9**

#### [`brando:brandName`](brandName.md)

| Field | Value |
| --- | --- |
| Description | Display name of the brand as it should appear in visual treatments. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [Brando:VisualIdentity](../types/visual-token.md) |
| Vocabulary path | Thing > Intangible > Visual :: brandName |
| Canonical URL | [`https://brandoschema.com/properties/brandName`](https://brandoschema.com/properties/brandName) |

#### [`brando:colourPalette`](colourPalette.md)

| Field | Value |
| --- | --- |
| Description | Structured description of the brand's colour system, including roles and values. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [Brando:VisualIdentity](../types/visual-token.md) |
| Vocabulary path | Thing > Intangible > Visual :: colourPalette |
| Canonical URL | [`https://brandoschema.com/properties/colourPalette`](https://brandoschema.com/properties/colourPalette) |

#### [`brando:imageryStyles`](imageryStyles.md)

| Field | Value |
| --- | --- |
| Description | Guidance on photography, illustration, and composition style. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [Brando:VisualIdentity](../types/visual-token.md) |
| Vocabulary path | Thing > Intangible > Visual :: imageryStyles |
| Canonical URL | [`https://brandoschema.com/properties/imageryStyles`](https://brandoschema.com/properties/imageryStyles) |

#### [`brando:logo`](logo.md)

| Field | Value |
| --- | --- |
| Description | Canonical reference URL to the primary logo asset or logo set. |
| Values expected | **URL**<br>**List of URL values** |
| Used on | [Brando:VisualIdentity](../types/visual-token.md) |
| Vocabulary path | Thing > Intangible > Visual :: logo |
| Canonical URL | [`https://brandoschema.com/properties/logo`](https://brandoschema.com/properties/logo) |

#### [`brando:motionRules`](motionRules.md)

| Field | Value |
| --- | --- |
| Description | Principles for animation, transitions, and micro-interactions. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [Brando:VisualIdentity](../types/visual-token.md) |
| Vocabulary path | Thing > Intangible > Visual :: motionRules |
| Canonical URL | [`https://brandoschema.com/properties/motionRules`](https://brandoschema.com/properties/motionRules) |

#### [`brando:typography`](typography.md)

| Field | Value |
| --- | --- |
| Description | Typographic system including font families, weights, sizes, and hierarchy. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [Brando:VisualIdentity](../types/visual-token.md) |
| Vocabulary path | Thing > Intangible > Visual :: typography |
| Canonical URL | [`https://brandoschema.com/properties/typography`](https://brandoschema.com/properties/typography) |

#### [`brando:VisualIdentity`](visualToken.md)

| Field | Value |
| --- | --- |
| Description | Core design tokens such as spacing, radius, and elevation. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [Brando:VisualIdentity](../types/visual-token.md) |
| Vocabulary path | Thing > Intangible > Visual :: Visual |
| Canonical URL | [`https://brandoschema.com/properties/Visual`](https://brandoschema.com/properties/Visual) |

#### [`brando:VisualIdentityReferenceLink`](visualReferenceLink.md)

| Field | Value |
| --- | --- |
| Description | URL pointing to full visual identity guidelines or design system documentation. |
| Values expected | **URL**<br>**List of URL values** |
| Used on | [Brando:VisualIdentity](../types/visual-token.md) |
| Vocabulary path | Thing > Intangible > Visual :: visualReferenceLink |
| Canonical URL | [`https://brandoschema.com/properties/visualReferenceLink`](https://brandoschema.com/properties/visualReferenceLink) |

#### [`brando:VisualIdentityUsageGuidelines`](visualUsageGuidelines.md)

| Field | Value |
| --- | --- |
| Description | Do's and don'ts for applying logos, colours, typography, and imagery. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [Brando:VisualIdentity](../types/visual-token.md) |
| Vocabulary path | Thing > Intangible > Visual :: visualUsageGuidelines |
| Canonical URL | [`https://brandoschema.com/properties/visualUsageGuidelines`](https://brandoschema.com/properties/visualUsageGuidelines) |

### [Audio identity properties](audio-identity.md)

Voice, sonic logo, audio cue, pronunciation, and audio-guidance properties.

Properties in this section: **7**

#### [`brando:AudioIdentityCue`](audioCue.md)

| Field | Value |
| --- | --- |
| Description | Definitions of short sound cues used as confirmations, alerts, or transitions. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [Brando:AudioIdentity](../types/audio-token.md) |
| Vocabulary path | Thing > Intangible > Audio :: audioCue |
| Canonical URL | [`https://brandoschema.com/properties/audioCue`](https://brandoschema.com/properties/audioCue) |

#### [`brando:AudioIdentityLogo`](audioLogo.md)

| Field | Value |
| --- | --- |
| Description | URI pointing to the brand's sonic logo or audio mark. |
| Values expected | **URL**<br>**List of URL values** |
| Used on | [Brando:AudioIdentity](../types/audio-token.md) |
| Vocabulary path | Thing > Intangible > Audio :: audioLogo |
| Canonical URL | [`https://brandoschema.com/properties/audioLogo`](https://brandoschema.com/properties/audioLogo) |

#### [`brando:AudioIdentityReferenceLink`](audioReferenceLink.md)

| Field | Value |
| --- | --- |
| Description | URL pointing to canonical audio repositories or style guides. |
| Values expected | **URL**<br>**List of URL values** |
| Used on | [Brando:AudioIdentity](../types/audio-token.md) |
| Vocabulary path | Thing > Intangible > Audio :: audioReferenceLink |
| Canonical URL | [`https://brandoschema.com/properties/audioReferenceLink`](https://brandoschema.com/properties/audioReferenceLink) |

#### [`brando:AudioIdentityUsageGuidelines`](audioUsageGuidelines.md)

| Field | Value |
| --- | --- |
| Description | Do's and don'ts for when and how branded audio should be used. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [Brando:AudioIdentity](../types/audio-token.md) |
| Vocabulary path | Thing > Intangible > Audio :: audioUsageGuidelines |
| Canonical URL | [`https://brandoschema.com/properties/audioUsageGuidelines`](https://brandoschema.com/properties/audioUsageGuidelines) |

#### [`brando:pronunciationGuide`](pronunciationGuide.md)

| Field | Value |
| --- | --- |
| Description | Standardised pronunciation notes (e.g. IPA or phonetic spelling) for brand names and key terms. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [Brando:AudioIdentity](../types/audio-token.md) |
| Vocabulary path | Thing > Intangible > Audio :: pronunciationGuide |
| Canonical URL | [`https://brandoschema.com/properties/pronunciationGuide`](https://brandoschema.com/properties/pronunciationGuide) |

#### [`brando:speechStyle`](speechStyle.md)

| Field | Value |
| --- | --- |
| Description | Guidance on rhythm, pacing, pausing, and expressiveness for spoken output. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [Brando:AudioIdentity](../types/audio-token.md) |
| Vocabulary path | Thing > Intangible > Audio :: speechStyle |
| Canonical URL | [`https://brandoschema.com/properties/speechStyle`](https://brandoschema.com/properties/speechStyle) |

#### [`brando:voiceSignature`](voiceSignature.md)

| Field | Value |
| --- | --- |
| Description | Description of the desired voice profile for TTS or voice agents. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [Brando:AudioIdentity](../types/audio-token.md) |
| Vocabulary path | Thing > Intangible > Audio :: voiceSignature |
| Canonical URL | [`https://brandoschema.com/properties/voiceSignature`](https://brandoschema.com/properties/voiceSignature) |

### [Policy properties](policy.md)

Governance, compliance, enforcement, risk, retrieval, and review properties.

Properties in this section: **10**

#### [`brando:complianceTags`](complianceTags.md)

| Field | Value |
| --- | --- |
| Description | Regulatory or legal tags such as GDPR, HIPAA, or FCA. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Policy](../types/policy.md) |
| Vocabulary path | Thing > Intangible > Policy :: complianceTags |
| Canonical URL | [`https://brandoschema.com/properties/complianceTags`](https://brandoschema.com/properties/complianceTags) |

#### [`brando:embeddingQuality`](embeddingQuality.md)

| Field | Value |
| --- | --- |
| Description | Qualitative or scored assessment of how well this content performs in vector search or RAG. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Policy](../types/policy.md) |
| Vocabulary path | Thing > Intangible > Policy :: embeddingQuality |
| Canonical URL | [`https://brandoschema.com/properties/embeddingQuality`](https://brandoschema.com/properties/embeddingQuality) |

#### [`brando:guardRails`](guardRails.md)

| Field | Value |
| --- | --- |
| Description | Non-negotiable boundaries that AI systems must not cross. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Policy](../types/policy.md) |
| Vocabulary path | Thing > Intangible > Policy :: guardRails |
| Canonical URL | [`https://brandoschema.com/properties/guardRails`](https://brandoschema.com/properties/guardRails) |

#### [`brando:priority`](priority.md)

| Field | Value |
| --- | --- |
| Description | Governance precedence for this policy when multiple rules could apply. |
| Values expected | **Integer**<br>**List of Integer values** |
| Used on | [brando:Policy](../types/policy.md) |
| Vocabulary path | Thing > Intangible > Policy :: priority |
| Canonical URL | [`https://brandoschema.com/properties/priority`](https://brandoschema.com/properties/priority) |

#### [`brando:refusalStrategies`](refusalStrategies.md)

| Field | Value |
| --- | --- |
| Description | Preferred patterns for declining or redirecting unsafe or out-of-scope requests. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Policy](../types/policy.md) |
| Vocabulary path | Thing > Intangible > Policy :: refusalStrategies |
| Canonical URL | [`https://brandoschema.com/properties/refusalStrategies`](https://brandoschema.com/properties/refusalStrategies) |

#### [`brando:retrievableInLLM`](retrievableInLLM.md)

| Field | Value |
| --- | --- |
| Description | Boolean flag indicating whether this policy may be indexed or retrieved by language models. |
| Values expected | **Boolean**<br>**List of Boolean values** |
| Used on | [brando:Policy](../types/policy.md) |
| Vocabulary path | Thing > Intangible > Policy :: retrievableInLLM |
| Canonical URL | [`https://brandoschema.com/properties/retrievableInLLM`](https://brandoschema.com/properties/retrievableInLLM) |

#### [`brando:reviewWorkflow`](reviewWorkflow.md)

| Field | Value |
| --- | --- |
| Description | Description of human and/or automated steps for reviewing content and policy changes. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Policy](../types/policy.md) |
| Vocabulary path | Thing > Intangible > Policy :: reviewWorkflow |
| Canonical URL | [`https://brandoschema.com/properties/reviewWorkflow`](https://brandoschema.com/properties/reviewWorkflow) |

#### [`brando:riskScenarios`](riskScenarios.md)

| Field | Value |
| --- | --- |
| Description | Known edge cases and misuse patterns requiring caution or escalation. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Policy](../types/policy.md) |
| Vocabulary path | Thing > Intangible > Policy :: riskScenarios |
| Canonical URL | [`https://brandoschema.com/properties/riskScenarios`](https://brandoschema.com/properties/riskScenarios) |

#### [`brando:updatePolicy`](updatePolicy.md)

| Field | Value |
| --- | --- |
| Description | Rules for how often, by whom, and under what process policies are updated. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Policy](../types/policy.md) |
| Vocabulary path | Thing > Intangible > Policy :: updatePolicy |
| Canonical URL | [`https://brandoschema.com/properties/updatePolicy`](https://brandoschema.com/properties/updatePolicy) |

#### [`brando:visibilityRating`](visibilityRating.md)

| Field | Value |
| --- | --- |
| Description | Qualitative indicator of how easily this policy should be discoverable by AI systems. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Policy](../types/policy.md) |
| Vocabulary path | Thing > Intangible > Policy :: visibilityRating |
| Canonical URL | [`https://brandoschema.com/properties/visibilityRating`](https://brandoschema.com/properties/visibilityRating) |

### [Branded category properties](branded-category.md)

Product/category taxonomy, classification, and category-language properties.

Properties in this section: **10**

#### [`brando:categoryApprovedTerms`](categoryApprovedTerms.md)

| Field | Value |
| --- | --- |
| Description | Terms encouraged for this category, layered on top of brand-level approved terms. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:BrandedCategory](../types/branded-category.md) |
| Vocabulary path | Thing > Intangible > BrandedCategory :: categoryApprovedTerms |
| Canonical URL | [`https://brandoschema.com/properties/categoryApprovedTerms`](https://brandoschema.com/properties/categoryApprovedTerms) |

#### [`brando:categoryClass`](categoryClass.md)

| Field | Value |
| --- | --- |
| Description | Class-level categorisation within a department. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:BrandedCategory](../types/branded-category.md) |
| Vocabulary path | Thing > Intangible > BrandedCategory :: categoryClass |
| Canonical URL | [`https://brandoschema.com/properties/categoryClass`](https://brandoschema.com/properties/categoryClass) |

#### [`brando:categoryDepartment`](categoryDepartment.md)

| Field | Value |
| --- | --- |
| Description | Department-level categorisation within a product category. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:BrandedCategory](../types/branded-category.md) |
| Vocabulary path | Thing > Intangible > BrandedCategory :: categoryDepartment |
| Canonical URL | [`https://brandoschema.com/properties/categoryDepartment`](https://brandoschema.com/properties/categoryDepartment) |

#### [`brando:categoryItemType`](categoryItemType.md)

| Field | Value |
| --- | --- |
| Description | Specific item type within a category class. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:BrandedCategory](../types/branded-category.md) |
| Vocabulary path | Thing > Intangible > BrandedCategory :: categoryItemType |
| Canonical URL | [`https://brandoschema.com/properties/categoryItemType`](https://brandoschema.com/properties/categoryItemType) |

#### [`brando:categoryProhibitedTerms`](categoryProhibitedTerms.md)

| Field | Value |
| --- | --- |
| Description | Terms prohibited for this category, layered on top of brand-level prohibited terms. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:BrandedCategory](../types/branded-category.md) |
| Vocabulary path | Thing > Intangible > BrandedCategory :: categoryProhibitedTerms |
| Canonical URL | [`https://brandoschema.com/properties/categoryProhibitedTerms`](https://brandoschema.com/properties/categoryProhibitedTerms) |

#### [`brando:googleProductCategoryId`](googleProductCategoryId.md)

| Field | Value |
| --- | --- |
| Description | Google Product Taxonomy category identifier associated with this branded category, typically used for shopping feeds, SEO, and retail media. Enables alignment between brand-level categories and Google Merchant Center classification. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:BrandedCategory](../types/branded-category.md) |
| Vocabulary path | Thing > Intangible > BrandedCategory :: googleProductCategoryId |
| Canonical URL | [`https://brandoschema.com/properties/googleProductCategoryId`](https://brandoschema.com/properties/googleProductCategoryId) |

#### [`brando:gpcCategoryCode`](gpcCategoryCode.md)

| Field | Value |
| --- | --- |
| Description | GS1 Global Product Classification (GPC) brick code associated with this branded category. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:BrandedCategory](../types/branded-category.md) |
| Vocabulary path | Thing > Intangible > BrandedCategory :: gpcCategoryCode |
| Canonical URL | [`https://brandoschema.com/properties/gpcCategoryCode`](https://brandoschema.com/properties/gpcCategoryCode) |

#### [`brando:gpcCategoryDescription`](gpcCategoryDescription.md)

| Field | Value |
| --- | --- |
| Description | Human-readable description of the GS1 Global Product Classification (GPC) brick associated with this branded category. |
| Values expected | **Text (language-tagged)**<br>**List of Text (language-tagged) values** |
| Used on | [brando:BrandedCategory](../types/branded-category.md) |
| Vocabulary path | Thing > Intangible > BrandedCategory :: gpcCategoryDescription |
| Canonical URL | [`https://brandoschema.com/properties/gpcCategoryDescription`](https://brandoschema.com/properties/gpcCategoryDescription) |

#### [`brando:productCategoryName`](productCategoryName.md)

| Field | Value |
| --- | --- |
| Description | Name of a product or service category with associated brand tokens and rules. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:BrandedCategory](../types/branded-category.md) |
| Vocabulary path | Thing > Intangible > BrandedCategory :: productCategoryName |
| Canonical URL | [`https://brandoschema.com/properties/productCategoryName`](https://brandoschema.com/properties/productCategoryName) |

#### [`brando:unspscCode`](unspscCode.md)

| Field | Value |
| --- | --- |
| Description | UNSPSC (United Nations Standard Products and Services Code) associated with this branded category or product grouping. Used to align brand-defined categories with procurement and B2B classification schemes. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:BrandedCategory](../types/branded-category.md) |
| Vocabulary path | Thing > Intangible > BrandedCategory :: unspscCode |
| Canonical URL | [`https://brandoschema.com/properties/unspscCode`](https://brandoschema.com/properties/unspscCode) |

### [Campaign properties](campaign.md)

Campaign naming, themes, time-bounded overrides, and activation properties.

Properties in this section: **3**

#### [`brando:campaignName`](campaignName.md)

| Field | Value |
| --- | --- |
| Description | Human-readable name of a marketing or communications campaign. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Campaign](../types/campaign.md) |
| Vocabulary path | Thing > Intangible > Campaign :: campaignName |
| Canonical URL | [`https://brandoschema.com/properties/campaignName`](https://brandoschema.com/properties/campaignName) |

#### [`brando:campaignTheme`](campaignTheme.md)

| Field | Value |
| --- | --- |
| Description | Central message or creative theme for the campaign. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Campaign](../types/campaign.md) |
| Vocabulary path | Thing > Intangible > Campaign :: campaignTheme |
| Canonical URL | [`https://brandoschema.com/properties/campaignTheme`](https://brandoschema.com/properties/campaignTheme) |

#### [`brando:temporaryOverrides`](temporaryOverrides.md)

| Field | Value |
| --- | --- |
| Description | Structured JSON describing temporary modifications to brand rules during this campaign. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Campaign](../types/campaign.md) |
| Vocabulary path | Thing > Intangible > Campaign :: temporaryOverrides |
| Canonical URL | [`https://brandoschema.com/properties/temporaryOverrides`](https://brandoschema.com/properties/temporaryOverrides) |

### [Automation rule properties](automation-rule.md)

Trigger, metric, data-source, and automated-action properties.

Properties in this section: **4**

#### [`brando:automationAction`](automationAction.md)

| Field | Value |
| --- | --- |
| Description | Structured JSON describing actions taken when trigger conditions are met. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:AutomationRule](../types/automation-rule.md) |
| Vocabulary path | Thing > Intangible > AutomationRule :: automationAction |
| Canonical URL | [`https://brandoschema.com/properties/automationAction`](https://brandoschema.com/properties/automationAction) |

#### [`brando:dataSource`](dataSource.md)

| Field | Value |
| --- | --- |
| Description | API endpoint or data source providing metrics or signals. |
| Values expected | **URL**<br>**List of URL values** |
| Used on | [brando:AutomationRule](../types/automation-rule.md) |
| Vocabulary path | Thing > Intangible > AutomationRule :: dataSource |
| Canonical URL | [`https://brandoschema.com/properties/dataSource`](https://brandoschema.com/properties/dataSource) |

#### [`brando:monitoredMetric`](monitoredMetric.md)

| Field | Value |
| --- | --- |
| Description | Structured JSON describing the metric being monitored, thresholds, and operators. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:AutomationRule](../types/automation-rule.md) |
| Vocabulary path | Thing > Intangible > AutomationRule :: monitoredMetric |
| Canonical URL | [`https://brandoschema.com/properties/monitoredMetric`](https://brandoschema.com/properties/monitoredMetric) |

#### [`brando:triggerType`](triggerType.md)

| Field | Value |
| --- | --- |
| Description | Type of event or condition that activates this automation rule. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:AutomationRule](../types/automation-rule.md) |
| Vocabulary path | Thing > Intangible > AutomationRule :: triggerType |
| Canonical URL | [`https://brandoschema.com/properties/triggerType`](https://brandoschema.com/properties/triggerType) |

### [Cross-type properties](cross-type.md)

Properties that apply to more than one Brando class.

Properties in this section: **16**

#### [`brando:appliesTo`](appliesTo.md)

| Field | Value |
| --- | --- |
| Description | Optional scoping for which products, categories, personas, or channels this node applies to. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Context](../types/context.md)<br>[brando:Policy](../types/policy.md)<br>[brando:AutomationRule](../types/automation-rule.md) |
| Vocabulary path | Thing > Intangible > Multiple types :: appliesTo (brando:Context, brando:Policy, brando:AutomationRule) |
| Canonical URL | [`https://brandoschema.com/properties/appliesTo`](https://brandoschema.com/properties/appliesTo) |

#### [`brando:appliesToGTIN`](appliesToGTIN.md)

| Field | Value |
| --- | --- |
| Description | GTIN(s) for which this branded category or policy is applicable. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:BrandedCategory](../types/branded-category.md)<br>[brando:Policy](../types/policy.md) |
| Vocabulary path | Thing > Intangible > Multiple types :: appliesToGTIN (brando:BrandedCategory, brando:Policy) |
| Canonical URL | [`https://brandoschema.com/properties/appliesToGTIN`](https://brandoschema.com/properties/appliesToGTIN) |

#### [`brando:appliesToProduct`](appliesToProduct.md)

| Field | Value |
| --- | --- |
| Description | Links a branded category or policy to one or more GS1 Product nodes. |
| Values expected | **gs1:Product**<br>**List of gs1:Product values** |
| Used on | [brando:BrandedCategory](../types/branded-category.md)<br>[brando:Policy](../types/policy.md) |
| Vocabulary path | Thing > Intangible > Multiple types :: appliesToProduct (brando:BrandedCategory, brando:Policy) |
| Canonical URL | [`https://brandoschema.com/properties/appliesToProduct`](https://brandoschema.com/properties/appliesToProduct) |

#### [`brando:downloadableFile`](downloadableFile.md)

| Field | Value |
| --- | --- |
| Description | Links a brand, token, context, campaign, or policy node to one or more canonical downloadable file assets (e.g. master logo packs, current guideline PDFs) represented as schema:MediaObject. Intended as a stable pointer to the most up-to-date creative files exposed by the Brand OS or DAM. |
| Values expected | **schema:MediaObject**<br>**List of schema:MediaObject values** |
| Used on | [brando:Brand](../types/brand.md)<br>[brando:Context](../types/context.md)<br>[Brando:VisualIdentity](../types/visual-token.md)<br>[Brando:VerbalIdentity](../types/verbal-token.md)<br>[Brando:AudioIdentity](../types/audio-token.md)<br>[brando:Policy](../types/policy.md)<br>[brando:Campaign](../types/campaign.md)<br>[brando:BrandedCategory](../types/branded-category.md) |
| Vocabulary path | Thing > Intangible > Multiple types :: downloadableFile (brando:Brand, brando:Context, Brando:VisualIdentity, Brando:VerbalIdentity, Brando:AudioIdentity, brando:Policy, brando:Campaign, brando:BrandedCategory) |
| Canonical URL | [`https://brandoschema.com/properties/downloadableFile`](https://brandoschema.com/properties/downloadableFile) |

#### [`brando:effectiveDuring`](effectiveDuring.md)

| Field | Value |
| --- | --- |
| Description | Time window or schedule when this context, campaign, or policy is active, expressed as a structured JSON value. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Context](../types/context.md)<br>[brando:Campaign](../types/campaign.md)<br>[brando:Policy](../types/policy.md) |
| Vocabulary path | Thing > Intangible > Multiple types :: effectiveDuring (brando:Context, brando:Campaign, brando:Policy) |
| Canonical URL | [`https://brandoschema.com/properties/effectiveDuring`](https://brandoschema.com/properties/effectiveDuring) |

#### [`brando:enforcementLevel`](enforcementLevel.md)

| Field | Value |
| --- | --- |
| Description | Indicates how strongly a policy or automation rule must be applied at runtime. Typical values include 'mandatory', 'advisory', and 'conditional' and may be extended by implementations. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Policy](../types/policy.md)<br>[brando:AutomationRule](../types/automation-rule.md) |
| Vocabulary path | Thing > Intangible > Multiple types :: enforcementLevel (brando:Policy, brando:AutomationRule) |
| Canonical URL | [`https://brandoschema.com/properties/enforcementLevel`](https://brandoschema.com/properties/enforcementLevel) |

#### [`brando:externalSystem`](externalSystem.md)

| Field | Value |
| --- | --- |
| Description | Links a brand, context, policy, campaign, or automation rule to the external tool or platform that executes, manages, or consumes the corresponding brand rules. |
| Values expected | **schema:SoftwareApplication**<br>**List of schema:SoftwareApplication values** |
| Used on | [brando:Brand](../types/brand.md)<br>[brando:Context](../types/context.md)<br>[brando:Policy](../types/policy.md)<br>[brando:Campaign](../types/campaign.md)<br>[brando:AutomationRule](../types/automation-rule.md) |
| Vocabulary path | Thing > Intangible > Multiple types :: externalSystem (brando:Brand, brando:Context, brando:Policy, brando:Campaign, brando:AutomationRule) |
| Canonical URL | [`https://brandoschema.com/properties/externalSystem`](https://brandoschema.com/properties/externalSystem) |

#### [`brando:externalSystemId`](externalSystemId.md)

| Field | Value |
| --- | --- |
| Description | System-specific identifier for the corresponding object in an external tool or platform (for example a brand record, workspace, guideline set, ad account, product record, or project ID). |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Brand](../types/brand.md)<br>[brando:Context](../types/context.md)<br>[brando:Policy](../types/policy.md)<br>[brando:Campaign](../types/campaign.md)<br>[brando:AutomationRule](../types/automation-rule.md)<br>[brando:ProductItem](../types/product-item.md) |
| Vocabulary path | Thing > Intangible > Multiple types :: externalSystemId (brando:Brand, brando:Context, brando:Policy, brando:Campaign, brando:AutomationRule, brando:ProductItem) |
| Canonical URL | [`https://brandoschema.com/properties/externalSystemId`](https://brandoschema.com/properties/externalSystemId) |

#### [`brando:hasPolicy`](hasPolicy.md)

| Field | Value |
| --- | --- |
| Description | Attaches governance, safety, and compliance policies to a brand or context. |
| Values expected | **brando:Policy**<br>**List of brando:Policy values** |
| Used on | [brando:Brand](../types/brand.md)<br>[brando:Context](../types/context.md) |
| Vocabulary path | Thing > Intangible > Multiple types :: hasPolicy (brando:Brand, brando:Context) |
| Canonical URL | [`https://brandoschema.com/properties/hasPolicy`](https://brandoschema.com/properties/hasPolicy) |

#### [`brando:hasProductItem`](hasProductItem.md)

| Field | Value |
| --- | --- |
| Description | Links a brand or branded product/service category to one or more individually identifiable product items (e.g. SKUs, GTIN-level items, or internal product records) that inherit and specialise its tokens and governance rules. |
| Values expected | **brando:ProductItem**<br>**List of brando:ProductItem values** |
| Used on | [brando:Brand](../types/brand.md)<br>[brando:BrandedCategory](../types/branded-category.md) |
| Vocabulary path | Thing > Intangible > Multiple types :: hasProductItem (brando:Brand, brando:BrandedCategory) |
| Canonical URL | [`https://brandoschema.com/properties/hasProductItem`](https://brandoschema.com/properties/hasProductItem) |

#### [`brando:productItem`](productItem.md)

| Field | Value |
| --- | --- |
| Description | Links a brand or brand-specific product category to one or more individually identifiable sellable product items (e.g. SKUs, GTIN-based items, or internal product records). |
| Values expected | **brando:ProductItem**<br>**List of brando:ProductItem values** |
| Used on | [brando:BrandedCategory](../types/branded-category.md)<br>[brando:Brand](../types/brand.md) |
| Vocabulary path | Thing > Intangible > Multiple types :: productItem (brando:BrandedCategory, brando:Brand) |
| Canonical URL | [`https://brandoschema.com/properties/productItem`](https://brandoschema.com/properties/productItem) |

#### [`brando:riskTag`](riskTag.md)

| Field | Value |
| --- | --- |
| Description | One or more lightweight tags describing the primary risk domains addressed by a policy or automation rule (e.g. 'regulatory', 'tone', 'brand-safety', 'platform-policy'). Intended for querying, reporting, and governance dashboards. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Policy](../types/policy.md)<br>[brando:AutomationRule](../types/automation-rule.md) |
| Vocabulary path | Thing > Intangible > Multiple types :: riskTag (brando:Policy, brando:AutomationRule) |
| Canonical URL | [`https://brandoschema.com/properties/riskTag`](https://brandoschema.com/properties/riskTag) |

#### [`brando:supportingFile`](supportingFile.md)

| Field | Value |
| --- | --- |
| Description | Links a brand, token, context, campaign, or policy node to non-canonical supporting creative files (e.g. templates, mockups, working documents, previous guideline versions) represented as schema:MediaObject. These files are helpful for production but are not the primary source-of-truth asset. |
| Values expected | **schema:MediaObject**<br>**List of schema:MediaObject values** |
| Used on | [brando:Brand](../types/brand.md)<br>[brando:Context](../types/context.md)<br>[Brando:VisualIdentity](../types/visual-token.md)<br>[Brando:VerbalIdentity](../types/verbal-token.md)<br>[Brando:AudioIdentity](../types/audio-token.md)<br>[brando:Policy](../types/policy.md)<br>[brando:Campaign](../types/campaign.md)<br>[brando:BrandedCategory](../types/branded-category.md) |
| Vocabulary path | Thing > Intangible > Multiple types :: supportingFile (brando:Brand, brando:Context, Brando:VisualIdentity, Brando:VerbalIdentity, Brando:AudioIdentity, brando:Policy, brando:Campaign, brando:BrandedCategory) |
| Canonical URL | [`https://brandoschema.com/properties/supportingFile`](https://brandoschema.com/properties/supportingFile) |

#### [`brando:usesAudio`](usesAudioToken.md)

| Field | Value |
| --- | --- |
| Description | Attaches an audio expression token defining how the brand sounds in this scope. |
| Values expected | **Brando:AudioIdentity**<br>**List of Brando:AudioIdentity values** |
| Used on | [brando:Brand](../types/brand.md)<br>[brando:Context](../types/context.md) |
| Vocabulary path | Thing > Intangible > Multiple types :: usesAudio (brando:Brand, brando:Context) |
| Canonical URL | [`https://brandoschema.com/properties/usesAudio`](https://brandoschema.com/properties/usesAudio) |

#### [`brando:usesVerbal`](usesVerbalToken.md)

| Field | Value |
| --- | --- |
| Description | Attaches a verbal expression token defining how the brand speaks in this scope. |
| Values expected | **Brando:VerbalIdentity**<br>**List of Brando:VerbalIdentity values** |
| Used on | [brando:Brand](../types/brand.md)<br>[brando:Context](../types/context.md) |
| Vocabulary path | Thing > Intangible > Multiple types :: usesVerbal (brando:Brand, brando:Context) |
| Canonical URL | [`https://brandoschema.com/properties/usesVerbal`](https://brandoschema.com/properties/usesVerbal) |

#### [`brando:usesVisual`](usesVisualToken.md)

| Field | Value |
| --- | --- |
| Description | Attaches a visual expression token defining how the brand looks in this scope. |
| Values expected | **Brando:VisualIdentity**<br>**List of Brando:VisualIdentity values** |
| Used on | [brando:Brand](../types/brand.md)<br>[brando:Context](../types/context.md) |
| Vocabulary path | Thing > Intangible > Multiple types :: usesVisual (brando:Brand, brando:Context) |
| Canonical URL | [`https://brandoschema.com/properties/usesVisual`](https://brandoschema.com/properties/usesVisual) |
