---
title: Expression tokens
description: Shared expression-token properties plus verbal, visual, and audio identity properties.
---

# Expression tokens

Shared expression-token properties plus verbal, visual, and audio identity properties.

[Back to all properties](index.md)

## Sections

| Section | Properties | Purpose |
| --- | ---: | --- |
| [Brand expression properties](brand-expression.md) | 2 | Shared properties for expression tokens and associated assets. |
| [Verbal identity properties](verbal-identity.md) | 12 | Tone, voice, vocabulary, messaging, prompt, and writing-style properties. |
| [Visual identity properties](visual-identity.md) | 9 | Logo, colour, typography, imagery, motion, and visual-governance properties. |
| [Audio identity properties](audio-identity.md) | 7 | Voice, sonic logo, audio cue, pronunciation, and audio-guidance properties. |

## Properties

### [Brand expression properties](brand-expression.md)

Shared properties for expression tokens and associated assets.

| Property | Description | Values | Used on |
| --- | --- | --- | --- |
| [`brando:assetPreview`](assetPreview.md) | Preview-friendly URL or data reference for displaying this token's associated asset. | **URL**<br>**List of URL values** | [brando:BrandExpressionToken](../types/brand-expression-token.md) |
| [`brando:assetURL`](assetURL.md) | Canonical source URL for an asset associated with this expression token (e.g. avatar, badge, waveform). | **URL**<br>**List of URL values** | [brando:BrandExpressionToken](../types/brand-expression-token.md) |

### [Verbal identity properties](verbal-identity.md)

Tone, voice, vocabulary, messaging, prompt, and writing-style properties.

| Property | Description | Values | Used on |
| --- | --- | --- | --- |
| [`brando:approvedTerms`](approvedTerms.md) | Words and phrases that are encouraged in this verbal token. | **Text**<br>**List of Text values** | [brando:VerbalToken](../types/verbal-token.md) |
| [`brando:dialogueStyle`](dialogueStyle.md) | Guidance on conversational patterns, pacing, and pronoun usage. | **Text**<br>**List of Text values** | [brando:VerbalToken](../types/verbal-token.md) |
| [`brando:keyMessages`](keyMessages.md) | Core value propositions and ideas that should recur across outputs. | **Text**<br>**List of Text values** | [brando:VerbalToken](../types/verbal-token.md) |
| [`brando:mustDo`](mustDos.md) | Required behaviours and inclusions this verbal token must follow. | **Text**<br>**List of Text values** | [brando:VerbalToken](../types/verbal-token.md) |
| [`brando:mustNotDo`](mustNotDos.md) | Behaviours and constructions this verbal token must never produce. | **Text**<br>**List of Text values** | [brando:VerbalToken](../types/verbal-token.md) |
| [`brando:namingConvention`](namingConvention.md) | Rules for how products, features, dates, and other entities are named and formatted. | **Text**<br>**List of Text values** | [brando:VerbalToken](../types/verbal-token.md) |
| [`brando:personaCard`](personaCard.md) | Humanised brand-as-a-person description used to guide tone and behaviour. | **Text**<br>**List of Text values** | [brando:VerbalToken](../types/verbal-token.md) |
| [`brando:prohibitedTerms`](prohibitedTerms.md) | Words and phrases that must not be used in this verbal token. | **Text**<br>**List of Text values** | [brando:VerbalToken](../types/verbal-token.md) |
| [`brando:promptScaffold`](promptScaffold.md) | Reusable instruction block or template for priming language models. | **Text**<br>**List of Text values** | [brando:VerbalToken](../types/verbal-token.md) |
| [`brando:tagline`](tagline.md) | Primary tagline plus any sanctioned variants for this verbal token. | **Text**<br>**List of Text values** | [brando:VerbalToken](../types/verbal-token.md) |
| [`brando:toneOfVoice`](toneOfVoice.md) | Emotional texture and attitude of the brand's voice in this token. | **Text**<br>**List of Text values** | [brando:VerbalToken](../types/verbal-token.md) |
| [`brando:writingStyle`](writingStyle.md) | Preferences for grammar, sentence structure, and clarity. | **Text**<br>**List of Text values** | [brando:VerbalToken](../types/verbal-token.md) |

### [Visual identity properties](visual-identity.md)

Logo, colour, typography, imagery, motion, and visual-governance properties.

| Property | Description | Values | Used on |
| --- | --- | --- | --- |
| [`brando:brandName`](brandName.md) | Display name of the brand as it should appear in visual treatments. | **Text**<br>**List of Text values** | [brando:VisualToken](../types/visual-token.md) |
| [`brando:colourPalette`](colourPalette.md) | Structured description of the brand's colour system, including roles and values. | **Text**<br>**List of Text values** | [brando:VisualToken](../types/visual-token.md) |
| [`brando:imageryStyles`](imageryStyles.md) | Guidance on photography, illustration, and composition style. | **Text**<br>**List of Text values** | [brando:VisualToken](../types/visual-token.md) |
| [`brando:logo`](logo.md) | Canonical reference URL to the primary logo asset or logo set. | **URL**<br>**List of URL values** | [brando:VisualToken](../types/visual-token.md) |
| [`brando:motionRules`](motionRules.md) | Principles for animation, transitions, and micro-interactions. | **Text**<br>**List of Text values** | [brando:VisualToken](../types/visual-token.md) |
| [`brando:typography`](typography.md) | Typographic system including font families, weights, sizes, and hierarchy. | **Text**<br>**List of Text values** | [brando:VisualToken](../types/visual-token.md) |
| [`brando:visualToken`](visualToken.md) | Core design tokens such as spacing, radius, and elevation. | **Text**<br>**List of Text values** | [brando:VisualToken](../types/visual-token.md) |
| [`brando:visualReferenceLink`](visualReferenceLink.md) | URL pointing to full visual identity guidelines or design system documentation. | **URL**<br>**List of URL values** | [brando:VisualToken](../types/visual-token.md) |
| [`brando:visualUsageGuidelines`](visualUsageGuidelines.md) | Do's and don'ts for applying logos, colours, typography, and imagery. | **Text**<br>**List of Text values** | [brando:VisualToken](../types/visual-token.md) |

### [Audio identity properties](audio-identity.md)

Voice, sonic logo, audio cue, pronunciation, and audio-guidance properties.

| Property | Description | Values | Used on |
| --- | --- | --- | --- |
| [`brando:audioCue`](audioCue.md) | Definitions of short sound cues used as confirmations, alerts, or transitions. | **Text**<br>**List of Text values** | [brando:AudioToken](../types/audio-token.md) |
| [`brando:audioLogo`](audioLogo.md) | URI pointing to the brand's sonic logo or audio mark. | **URL**<br>**List of URL values** | [brando:AudioToken](../types/audio-token.md) |
| [`brando:audioReferenceLink`](audioReferenceLink.md) | URL pointing to canonical audio repositories or style guides. | **URL**<br>**List of URL values** | [brando:AudioToken](../types/audio-token.md) |
| [`brando:audioUsageGuidelines`](audioUsageGuidelines.md) | Do's and don'ts for when and how branded audio should be used. | **Text**<br>**List of Text values** | [brando:AudioToken](../types/audio-token.md) |
| [`brando:pronunciationGuide`](pronunciationGuide.md) | Standardised pronunciation notes (e.g. IPA or phonetic spelling) for brand names and key terms. | **Text**<br>**List of Text values** | [brando:AudioToken](../types/audio-token.md) |
| [`brando:speechStyle`](speechStyle.md) | Guidance on rhythm, pacing, pausing, and expressiveness for spoken output. | **Text**<br>**List of Text values** | [brando:AudioToken](../types/audio-token.md) |
| [`brando:voiceSignature`](voiceSignature.md) | Description of the desired voice profile for TTS or voice agents. | **Text**<br>**List of Text values** | [brando:AudioToken](../types/audio-token.md) |
