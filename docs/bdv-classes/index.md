---
title: Brando Classes – Machine-Readable Brand Identity Structures for LLMs and AI Systems
description: Discover Brando's six core identity classes—Verbal, Visual, Audio, Positioning, Governance, and Assets—designed to extend schema.org/Brand and make your brand interpretable, enforceable, and retrievable by AI systems.
keywords:
  - Brando schema
  - brand identity classes
  - AI brand modelling
  - structured brand metadata
  - machine-readable brand identity
  - AI verbal identity
  - AI visual identity
  - brand governance schema
  - brand positioning ontology
  - LLM-ready brand objects

author: Advanced Analytica

# Open Graph metadata
og_title: Brando Classes – AI-Structured Brand Identity for Schema.org Extension
og_description: Extend schema.org/Brand with Brando’s modular identity classes—designed for AI compliance, tone control, brand assets, and governance metadata in LLM environments.
og_type: website
og_url: https://brandoschema.com/classes
og_image: https://brandoschema.com/assets/logos/0.5x/Brando_9@0.5x.png

# Twitter Card metadata
twitter_card: summary_large_image
twitter_title: Brando Identity Classes – Semantic Brand Architecture for AI and LLMs
twitter_description: Model your brand’s tone, visuals, positioning, and ethics using Brando Classes—structured for AI understanding, enforcement, and discovery.
twitter_image: https://brandoschema.com/assets/logos/0.5x/Brando_9@0.5x.png
---

# Brando Classes

Welcome to the Brando Classes reference. Built on the Brand Definition Vocabulary (BDV), these six core objects extend [`schema:Brand`](https://schema.org/Brand) with machine-readable constructs for tone, style, governance, assets, and more—empowering AI systems and LLMs to interpret, enforce, and amplify your brand identity with precision.

Each Brando Class maps to one of the Six Pillars of Brand Identity for AI—Verbal, Visual, Audio, Positioning, Governance, and Assets—and functions as a modular building block in your brand knowledge graph. By modeling these facets as distinct, interconnected nodes, you can:

- Encode tone, style, and vocabulary for natural-language interactions  
- Standardise logos, colour palettes, and typography for visual consistency  
- Define sonic logos, voice personas, and audio cues for immersive experiences  
- Articulate mission, promise, and audience personas for strategic positioning  
- Embed guardrails, compliance rules, and ethical policies for safe use  
- Manage templates, schemas, and source materials as structured assets  

Use this guide to explore each Brando Class—its properties, relationships, and how they interlock to create a dynamic, AI-native brand platform.

---

## Classes  
**Equivalent Schema.org Term:** `schema:Brand`  

*The six core objects provide a foundation for controlling and aligning a brand with LLMs and AI systems. They represent a complete, machine-readable representation of a brand as interpreted by AI systems.*  

| **Class**                                           | **LLM Control Capability**             |
|-----------------------------------------------------|----------------------------------------|
| <nobr>`hasVerbalIdentity`</nobr>                    | Aligns tone, vocabulary, sentiment, and stylistic elements in LLM outputs                                   |
| <nobr>`hasVisualIdentity`</nobr>                    | Informs visual prompts, style transfer, and multimodal agents (e.g., brand-aligned image outputs)           |
| <nobr>`hasAudioIdentity`</nobr>                     | Defines sonic branding for speech synthesis, voice agents, and generative audio outputs                     |
| <nobr>`hasPositioning`</nobr>                       | Grounds brand purpose, audience personas, and differentiators in AI-generated responses                     |
| <nobr>`hasGovernance`</nobr>                        | Enforces refusal strategies, risk boundaries, compliance logic, and safety behaviors in LLM interactions     |
| <nobr>`hasDigitalAsset`</nobr>                            | Enables agents to fetch or embed approved brand materials (e.g., ai-agents, logos, videos, documents)                  |


### 1.1 Verbal Identity
**Core Class: (`brando:hasVerbalIdentity`)**

Encodes how the brand speaks and behaves in written and conversational form — across all channels, including LLMs, assistants, and web content.

| **BDV Ref** | **Brando Property**              | **Description**                                                                                   |
|------------|----------------------------------|---------------------------------------------------------------------------------------------------|
| `1.1.1`    | <nobr>`brando:toneOfVoice`</nobr>             | Defines the emotional texture of the brand's voice (e.g., experienced, warm, humble)             |
| `1.1.2`    | <nobr>`brando:dialogueStyle`</nobr>          | Controls how the brand interacts: conversational pacing, first/second person use, empathy cues   |
| `1.1.3`    | <nobr>`brando:writingStyle`</nobr>            | Grammar, structure, clarity, sentence flow, and cultural tone guidelines                         |
| `1.1.4`    | <nobr>`brando:namingConvention`</nobr>        | Rules for naming products and formatting text (capitalisation, spelling, dates, etc.)            |
| `1.1.5`    | <nobr>`brando:personaCard`</nobr>             | The personality behind the voice — how the brand sounds when personified                         |
| `1.1.6`    | <nobr>`brando:approvedTerms`</nobr>           | Brand-sanctioned vocabulary, including product descriptors, slogans, and phrasing                |
| `1.1.7`    | <nobr>`brando:prohibitedTerms`</nobr>         | Words, phrases, or expressions the brand avoids (e.g., “cheap”, “amazing”, hyperbole)            |
| `1.1.8`    | <nobr>`brando:keyMessage`</nobr>              | Core ideas and value propositions communicated consistently across all brand channels            |
| `1.1.9`    | <nobr>`brando:taglines`</nobr>                | Primary strapline and any officially approved variants or campaign slogans                       |
| `1.1.10`   | <nobr>`brando:promptScaffold`</nobr>          | Reusable instructions and templates for AI model prompts (e.g., tone and format enforcement)     |
| `1.1.11`   | <nobr>`brando:mustDo`</nobr>                  | Required actions and stylistic behaviours (e.g., use first-person, highlight provenance)         |
| `1.1.12`   | <nobr>`brando:mustNotDo`</nobr>               | Explicit behavioural constraints (e.g., don’t exaggerate, avoid second-person in longform copy)  |

**Example: JSON-LD for Verbal Identity Policy**
``` json-ld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/bdv-terms/#"
  },
  "@type": "schema:Brand",
  "name": "brand",
  "url": "https://www.brand.eu/",
  "logo": "https://www.brand.eu/assets/logo.png",
  "brando:hasVerbalIdentity": {
    "@type": "brando:VerbalIdentity",
    "brando:toneOfVoice": {
      "description": "Distinctive, imaginative, resourceful, and simple. Tone is designed to inform, inspire, and create emotional connection.",
      "principles": [
        "Experienced – authoritative yet warm, with institutional knowledge.",
        "Straight Talking – avoids hyperbole or excessive adjectives.",
        "Human – passionate, emotional, people-first.",
        "Extraordinary – magical, sensory, storytelling-based.",
        "Humble – focuses on people, not the brand's ego."
      ]
    },
    "brando:keyMessage": [
      "Complexity made simple.",
      "We are the components for your AI success.",
      "Creating the foundations for excellence.",
      "Brand managers, meet your new assistants.",
      "Simple policies for effective business."
    ],
    "brando:taglines": {
      "primary": "Complexity made simple",
      "extensions": [
        "AI made simple",
        "Creativity made simple",
        "Communication made simple",
        "Collaboration made simple"
      ]
    },
    "brando:writingStyle": {
      "guidelines": [
        "Be simple, clear, and direct.",
        "Avoid flowery, over-complicated language.",
        "Use variety in sentence structure.",
        "Speak with optimism and humility.",
        "Edit rigorously to remove filler.",
        "Use British English spelling.",
        "Write like a trusted, calm expert — never boastful."
      ]
    },
    "brando:dialogueStyle": {
      "description": "Conversational, but professional. Use first-person. Avoid second-person where inappropriate. Speak to specific roles (chefs, bakers, etc.).",
      "rules": [
        "Use 'we' and 'our' in most messaging.",
        "Avoid 'you' in longform or descriptive copy.",
        "Never sound patronising or overfamiliar.",
        "Maintain light-hearted professionalism."
      ]
    },
    "brando:approvedTerms": [
      "Crafted with",
      "Inspired by",
      "Created to",
      "Function factory",
      "Masterpiece"
    ],
    "brando:prohibitedTerms": [
      "amazing",
      "stunning",
      "jaw-dropping",
      "fabulous",
      "ultimate",
      "cheap",
      "incredible",
      "over-the-top",
      "multiple exclamation marks"
    ],
    "brando:namingConvention": {
      "productCapitalisation": true,
      "spelling": "Britich English",
      "dateFormat": "15 May 2024",
      "timeFormat": "am/pm"
    },
    "brando:mustDo": [
      "Use British spelling across English materials.",
      "Capitalise official product names.",
      "Use storytelling and sensory details in descriptions.",
      "Speak to the role (e.g., 'brand managers', not 'you').",
      "Curate content differently for internal vs. external platforms.",
      "Use first-person voice (we/our)."
    ],
    "brando:mustNotDo": [
      "Use more than one exclamation mark.",
      "Use second-person voice in product descriptions.",
      "Use sarcasm, wacky humour, or internal jargon.",
      "Use SEO keywords in place of clarity.",
      "Use buzzwords or clichéd brochure-speak.",
      "Beg for engagement on social (e.g., 'LIKE this post!')."
    ],
    "brando:promptScaffold": [
      "Write in BRAND’s tone of voice: experienced, human, humble.",
      "Avoid second-person in descriptive copy.",
      "Highlight provenance, emotion, and purpose.",
      "Structure product descriptions using: inspiration, origin, benefit."
    ],
    "brando:personaCard": {
      "traits": [
        "Professional but relaxed",
        "Emotionally intelligent",
        "Respectful and inclusive",
        "Craft-driven and precise",
        "Warm and story-led"
      ]
    }
  }
}
```


### 1.2 Visual Identity Class
**Core Class: (`brando:hasVisualIdentity`)**

Encodes the brand’s visual language in a machine-readable format — enabling consistency across generative media, UI frameworks, assistants, and visual rendering engines.

| **BDV Ref** | **Brando Property**              | **Description**                                                                 |
|------------|----------------------------------|---------------------------------------------------------------------------------|
| `1.2.1`    | <nobr>`brando:name`</nobr>      | The official brand name or trade name.                                          |
| `1.2.2`    | <nobr>`brando:logo`</nobr>      | Primary, alternate, mono, and responsive logo versions                          |
| `1.2.3`    | <nobr>`brando:colourPalette`</nobr>      | Brand colour definitions (primary, secondary, accessibility-safe variants)      |
| `1.2.4`    | <nobr>`brando:typography`</nobr>      | Font families, sizes, and weight guidelines                                     |
| `1.2.5`    | <nobr>`brando:iconography`</nobr>      | Icon style, usage, and example assets                                           |
| `1.2.6`    | <nobr>`brando:imageryStyle`</nobr>      | Rules for photography, illustrations, filters, and composition                  |
| `1.2.7`    | <nobr>`brando:motionRule`</nobr>      | Acceptable animation styles and transitions                                     |
| `1.2.8`    | <nobr>`brando:visualToken`</nobr>      | Design tokens including spacing, elevation, and border radius                   |
| `1.2.9`    | <nobr>`brando:visualUsageGuideline`</nobr>      | Dos and don'ts for consistent and compliant visual application                  |
| `1.2.10`   | <nobr>`brando:visualReferenceLink`</nobr>      | URLs to brand guidelines, repositories, and design system documentation         |

**Example: JSON-LD for Visual Identity Policy**

```json-ld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/bdv-terms/#"
  },
  "@type": "schema:Brand",
  "name": "BRAND",
  "url": "https://www.brand.eu/",
  "logo": "https://www.brand.eu/assets/logo.png",
  "brando:hasVisualIdentity": {
    "@type": "brando:VisualIdentity",
    "brando:logo": {
      "primary": "https://www.brand.eu/assets/logo-primary.svg",
      "alternate": "https://www.brand.eu/assets/logo-alt.svg",
      "mono": "https://www.brand.eu/assets/logo-mono.svg",
      "responsive": "https://www.brand.eu/assets/logo-responsive.svg"
    },
    "brando:colourPalette": {
      "primary": ["#002244", "#0066CC"],
      "secondary": ["#F5F5F5", "#CCCCCC"],
      "accessibility": ["#000000", "#FFFFFF"]
    },
    "brando:typography": {
      "fontFamily": "Inter",
      "weights": ["Regular", "Medium", "Bold"],
      "sizeRules": "Base: 16px; Headings: 32px / 24px / 20px"
    },
    "brando:iconography": {
      "style": "Outlined, minimal, geometric",
      "examples": [
        "https://www.brand.eu/assets/icons/download.svg",
        "https://www.brand.eu/assets/icons/share.svg"
      ]
    },
    "brando:imageryStyle": {
      "photography": "Natural lighting, human-focused, high contrast",
      "illustration": "Flat, modern, muted tones",
      "filters": ["No heavy effects", "Brightness +10%", "Warm tone"]
    },
    "brando:motionRule": {
      "animationStyle": "Ease-in-out transitions only",
      "transitionDuration": "200–500ms",
      "examples": [
        "Button hover fades",
        "Hero image slide-in"
      ]
    },
    "brando:visualToken": {
      "borderRadius": "8px",
      "spacing": "8 / 16 / 24 grid",
      "elevation": "Soft shadow (4dp max)"
    },
    "brando:visualUsageGuideline": [
      "Never stretch or distort the logo",
      "Maintain minimum logo padding of 32px",
      "Do not place logo over complex backgrounds",
      "Avoid clashing background colours"
    ],
    "brando:visualReferenceLink": [
      "https://www.brand.eu/guidelines/visual",
      "https://www.figma.com/file/brand-kit"
    ]
  }
}
```

### 1.3 Audio Identity Class  
**Core Class: (`brando:hasAudioIdentity`)**

Encodes the brand’s sonic expression in a structured, machine-readable format — enabling consistent brand presence across speech synthesis, voice agents, virtual assistants, and generative audio platforms.

| **BDV Ref** | **Brando Property**              | **Description**                                                                                         |
|------------|----------------------------------|---------------------------------------------------------------------------------------------------------|
| `1.3.1`    | <nobr>`brando:audioLogo`</nobr>      | Audio file or URI representing the brand’s sonic logo — a recognisable sound that cues the brand.       |
| `1.3.2`    | <nobr>`brando:voiceSignature`</nobr>      | Preferred voice profile for speech synthesis — tone, gender, pacing, and accent.                        |
| `1.3.3`    | <nobr>`brando:pronunciationGuide`</nobr>      | Rules or phonetic spelling guides for brand names, acronyms, or domain-specific terms.                  |
| `1.3.4`    | <nobr>`brando:audioCue`</nobr>      | Non-verbal sound cues used for alerts, confirmations, transitions, or emotional signalling.             |
| `1.3.5`    | <nobr>`brando:speechStyle`</nobr>      | Defines speech rhythm, intonation, and pause style for spoken AI outputs.                               |
| `1.3.6`    | <nobr>`brando:audioReferenceLink`</nobr>      | URLs to sonic branding guidelines, audio asset repositories, or sample use cases.                       |
| `1.3.7`    | <nobr>`brando:audioUsageGuideline`</nobr>      | Specific dos and don’ts for voice assistants and sound-based agents when reproducing brand audio.       |


**Example: JSON-LD for Audio Identity Policy**

```json-ld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/bdv-terms/#"
  },
  "@type": "schema:Brand",
  "name": "BRAND",
  "url": "https://www.brand.eu/",
  "brando:hasAudioIdentity": {
    "@type": "brando:AudioIdentity",
    "brando:audioLogo": "https://www.brand.eu/audio/sonic-logo.mp3",
    "brando:voiceSignature": {
      "gender": "female",
      "tone": "warm and confident",
      "accent": "British",
      "speed": "medium-slow"
    },
    "brando:pronunciationGuide": {
      "brandName": "BRANN-do",
      "acronyms": {
        "LLM": "el-el-em",
        "BDL": "bee-dee-el"
      }
    },
    "brando:audioCue": [
      "https://www.brand.eu/audio/confirm-tone.mp3",
      "https://www.brand.eu/audio/error-tone.mp3"
    ],
    "brando:speechStyle": {
      "intonation": "natural",
      "pauses": "brief after clauses",
      "emphasis": "on nouns and benefits"
    },
    "brando:audioUsageGuideline": [
      "Use the sonic logo before AI-generated introductions.",
      "Avoid robotic-sounding text-to-speech settings.",
      "Ensure brand name is pronounced correctly with emphasis on first syllable."
    ],
    "brando:audioReferenceLink": [
      "https://www.brand.eu/audio-guidelines",
      "https://www.brand.eu/assets/audio-kit.zip"
    ]
  }
}
```

### 1.4 Positioning Class
**Core Class: (`brando:hasPositioning`)**
Encodes the strategic intent, values, audience targeting, and narrative structure of the brand — providing clarity for AI agents, assistants, and retrieval systems to understand and represent brand meaning with context.

| **BDV Ref** | **Brando Property**           | **Description**                                                                      |
|------------|-------------------------------|--------------------------------------------------------------------------------------|
| `1.4.1`    | <nobr>`brando:missionStatement`</nobr>      | Why the brand exists — its purpose beyond profit                                     |
| `1.4.2`    | <nobr>`brando:visionStatement`</nobr>      | Long-term goals and the future the brand wants to help create                        |
| `1.4.3`    | <nobr>`brando:coreValues`</nobr>      | Guiding principles and ethical foundations of the brand                              |
| `1.4.4`    | <nobr>`brando:brandPromise`</nobr>      | The commitment the brand makes to its audience                                       |
| `1.4.5`    | <nobr>`brando:audiencePersona`</nobr>      | Structured profiles of ideal customers or user segments                              |
| `1.4.6`    | <nobr>`brando:marketPosition`</nobr>      | Brand’s stance in its category, including competitive framing                        |
| `1.4.7`    | <nobr>`brando:brandNarrative`</nobr>      | The origin, journey, and story arc that define the brand identity                    |
| `1.4.8`    | <nobr>`brando:competitorContext`</nobr>      | How the brand compares or contrasts with its key competitors                         |
| `1.4.9`    | <nobr>`brando:domainContext`</nobr>      | How a brand persona should be activated: sector, audience, use case, and legal environment.                         |

**Example: JSON-LD for Positioning Policy**

```json-ld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/bdv-terms/#"
  },
  "@type": "schema:Brand",
  "name": "BRAND",
  "url": "https://www.brand.eu/",
  "logo": "https://www.brand.eu/assets/logo.png",
  "brando:hasPositioning": {
    "@type": "brando:Positioning",
    "brando:missionStatement": "To simplify access to advanced AI capabilities and make them usable by every brand.",
    "brando:visionStatement": "To become the universal interface layer between brands and the generative AI web.",
    "brando:coreValues": [
      "Simplicity",
      "Integrity",
      "Empowerment",
      "Transparency",
      "Innovation grounded in purpose"
    ],
    "brando:brandPromise": "We translate complexity into clarity — giving brands control in a world of automation.",
    "brando:audiencePersona": [
      {
        "name": "Brand Manager",
        "traits": ["Strategy-led", "Digitally literate", "Guardrails-aware"]
      },
      {
        "name": "Creative Director",
        "traits": ["Design-minded", "Consistency-focused", "Story-led"]
      },
      {
        "name": "AI Governance Lead",
        "traits": ["Risk-aware", "Compliance-driven", "Ethics-conscious"]
      }
    ],
    "brando:marketPosition": {
      "category": "AI Brand Infrastructure",
      "differentiator": "Combines brand control + LLM compliance in one layer"
    },
    "brando:brandNarrative": "Born from the need to make AI trustworthy for brand representation, BRAND creates machine-readable brand objects that are both expressive and enforceable. From logo to tone to guardrails, every layer is declaratively encoded for intelligent systems.",
    "brando:competitorContext": {
      "peers": ["Frontify", "Bynder", "OpenBrand AI"],
      "distinction": "Brando doesn't just manage assets — it governs representation at runtime in AI systems."
    }
  }
}
```

### 1.5 Governance Class
**Core Class: (`brando:hasGovernance`)**

Defines brand guardrails, refusal strategies, and regulatory alignment for safe deployment in AI environments — ensuring the brand is represented ethically, legally, and intentionally in all LLM-enabled contexts.


| **BDV Ref** | **Brando Property**           | **Description**                                                                                   |
|------------|-------------------------------|---------------------------------------------------------------------------------------------------|
| `1.5.1`    | <nobr>`brando:guardRails`</nobr>      | Behavioural boundaries for brand representation (e.g., no political alignment, no parody)         |
| `1.5.2`    | <nobr>`brando:refusalStrategies`</nobr>      | Instructions for AI on when and how to gracefully decline or deflect out-of-scope requests        |
| `1.5.3`    | <nobr>`brando:complianceTags`</nobr>      | Tags or indicators for domain-specific compliance frameworks (e.g., GDPR, ABPI)                   |
| `1.5.4`    | <nobr>`brando:reviewWorkflow`</nobr>      | Human-in-the-loop processes for approval and escalation                                           |
| `1.5.5`    | <nobr>`brando:updatePolicy`</nobr>      | Rules for how, when, and by whom brand data is updated and versioned                              |
| `1.5.6`    | <nobr>`brando:visibilityRating`</nobr>      | AI discoverability setting (e.g., low, medium, high, very high)                                   |
| `1.5.7`    | <nobr>`brando:retrievableInLLM`</nobr>      | Boolean or weighted flag for LLM embedding and memory access                                      |
| `1.5.8`    | <nobr>`brando:embeddingQuality`</nobr>      | Scoring of chunk quality for retrieval (clarity, coherence, fidelity)                             |
| `1.5.9`    | <nobr>`brando:riskScenarios`</nobr>      | Known red-flag cases and edge scenarios for brand control (e.g., satire, impersonation)           |


**Example: JSON-LD for Governance Policy**

```json-ld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/bdv-terms/#"
  },
  "@type": "schema:Brand",
  "name": "BRAND",
  "url": "https://www.example.com/",
  "logo": "https://www.example.com/assets/logo.png",
  "brando:hasGovernance": {
    "@type": "brando:Governance",
    "brando:guardRails": [
      "Do not mimic other brands or personalities.",
      "Avoid speculative financial or legal advice.",
      "Never represent the brand in satire, parody, or impersonation."
    ],
    "brando:refusalStrategies": [
      "If asked to make claims about unverified results, respond: 'This requires confirmation from an authorised expert.'",
      "If prompted with politically sensitive questions, say: 'BRAND remains neutral on this matter.'"
    ],
    "brando:complianceTags": [
      "GDPR",
      "UK MHRA",
      "ABPI",
      "EU AI Act – Article 52"
    ],
    "brando:reviewWorkflow": {
      "type": "Human-in-the-loop",
      "steps": [
        "Content flagged by AI → Sent for internal review → Approved or modified before release"
      ]
    },
    "brando:updatePolicy": {
      "versioning": "Semantic versioning (e.g., v1.2.0)",
      "changeApproval": "By Brand Governance Committee",
      "changeLog": "Maintained in brand.jsonld header"
    },
    "brando:visibilityRating": "high",
    "brando:retrievableInLLM": true,
    "brando:embeddingQuality": "very high",
    "brando:riskScenarios": [
      "Misinformation through tone mismatch",
      "AI hallucinating non-existent product benefits",
      "Requests to parody brand voice for entertainment"
    ]
  }
}

```

---

### 1.6 Digital Asset Class

**Core Class: (`brando:hasDigitalAsset`)**

Encodes reusable digital resources — from brand files to LLM-ready features, AI-agents, FAQs, and service definitions — so that AI systems can render and reason with your brand consistently across platforms.

| **BDV Ref** | **Brando Property**                      | **Description**                                                                                                               |
| :---------- | :--------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| 1.6.1       | <nobr>`brando:logoAsset`</nobr>          | File links for approved logos (SVG, PNG, EPS)                                                                                 |
| 1.6.2       | <nobr>`brando:fontAsset`</nobr>          | Font files or downloadable typography kits                                                                                    |
| 1.6.3       | <nobr>`brando:imageLibrary`</nobr>       | Approved photography, illustration, or icon libraries                                                                         |
| 1.6.4       | <nobr>`brando:videoAsset`</nobr>         | Branded videos, animations, and explainer media                                                                               |
| 1.6.5       | <nobr>`brando:designSystemLink`</nobr>   | URL to a Figma, Storybook, Framer, or similar design system                                                                   |
| 1.6.6       | <nobr>`brando:templateLibrary`</nobr>    | Templates for Notion, Canva, PowerPoint, social media, or documents                                                           |
| 1.6.7       | <nobr>`brando:guidelinesPDF`</nobr>      | Downloadable brand manuals, brand books, or visual identity guidelines                                                        |
| 1.6.8       | <nobr>`brando:assetRepository`</nobr>    | Central asset library, CMS, or DAM (Digital Asset Management) system link                                                     |
| 1.6.9       | <nobr>`brando:personaAsset`</nobr>       | Persona definitions for brand audiences, AI tuning, or character scaffolding                                                  |
| 1.6.10      | <nobr>`brando:accessPolicy`</nobr>       | Access permissions, licensing rights, or download policies for brand assets                                                   |
| 1.6.11      | <nobr>`brando:qaAsset`</nobr>            | Common Q\&A and FAQ-style content structured for AI and semantic indexing (`FAQPage` format)                                  |
| 1.6.12      | <nobr>`brando:productAsset`</nobr>       | Structured `schema:Product` definitions with names, URLs, IDs, and descriptions                                               |
| 1.6.13      | <nobr>`brando:serviceAsset`</nobr>       | Structured `schema:Service` definitions for service offerings, providers, and terms                                           |
| 1.6.14      | <nobr>`brando:featuresAsset`</nobr>      | Individual product/service features aligned to `schema:PropertyValue` for search, pages, and prompts                          |
| 1.6.15      | <nobr>`brando:datasetAsset`</nobr>       | Links to datasets or collections associated with the brand for AI training, annotation, or retrieval                          |
| 1.6.16      | <nobr>`brando:knowledgeAsset`</nobr>     | Reference to structured brand knowledge assets intended for AI semantic retrieval and interpretation                          |
| 1.6.17      | <nobr>`brando:singleAgentAIAsset`</nobr> | Links or references to configurations, models, or scripts used by a **single AI agent** associated with the brand             |
| 1.6.18      | <nobr>`brando:multiAgentAIAsset`</nobr>  | Links or references to configurations, models, or orchestrations used by **multi-agent AI systems** associated with the brand |

**Example: JSON-LD for Asset Policy**
```
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/bdv-terms/#"
  },
  "@type": "schema:Brand",
  "name": "ExampleBrand",
  "url": "https://www.examplebrand.com/",
  "logo": "https://www.examplebrand.com/assets/logo.svg",
  "brando:hasAssets": {
    "@type": "brando:Assets",
    "brando:logoAsset": [
      "https://www.examplebrand.com/assets/logo-primary.svg",
      "https://www.examplebrand.com/assets/logo-mono.svg"
    ],
    "brando:fontAsset": [
      "https://www.examplebrand.com/assets/fonts/ExampleSans-Regular.woff2",
      "https://www.examplebrand.com/assets/fonts/ExampleSans-Bold.woff2"
    ],
    "brando:imageLibrary": "https://dam.examplebrand.com/images/",
    "brando:videoAsset": [
      "https://www.examplebrand.com/videos/intro.mp4",
      "https://www.examplebrand.com/videos/brand-story.mp4"
    ],
    "brando:designSystemLink": "https://www.figma.com/file/ExampleBrand/Main-Design-System",
    "brando:templateLibrary": [
      "https://www.canva.com/examplebrand/templates",
      "https://notion.so/examplebrand/templates"
    ],
    "brando:guidelinesPDF": [
      "https://www.examplebrand.com/docs/brand-guidelines.pdf",
      "https://www.examplebrand.com/docs/tone-of-voice.pdf"
    ],
    "brando:assetRepository": "https://assets.examplebrand.com/brand-assets",
    "brando:personaAsset": [
      "https://www.examplebrand.com/personas/marketing-manager.json",
      "https://www.examplebrand.com/personas/customer-support.json"
    ],
    "brando:accessPolicy": {
      "editors": ["design@examplebrand.com", "legal@examplebrand.com"],
      "viewers": ["agency@examplebrand.com", "ai@examplebrand.com"],
      "policyNote": "External access is limited to view-only in /public folder."
    },
    "brando:qaAsset": [
      {
        "@type": "schema:Question",
        "name": "What is ExampleBrand's core mission?",
        "acceptedAnswer": {
          "@type": "schema:Answer",
          "text": "To empower businesses with clear and accessible AI-powered brand solutions."
        }
      },
      {
        "@type": "schema:Question",
        "name": "How does ExampleBrand ensure brand consistency?",
        "acceptedAnswer": {
          "@type": "schema:Answer",
          "text": "Through centralized asset management, tone controls, and AI guardrails."
        }
      }
    ],
    "brando:productAsset": [
      {
        "@type": "schema:Product",
        "name": "ExampleBrand AI Toolkit",
        "description": "A set of AI-ready brand controls and governance modules.",
        "sku": "EB-AI-001",
        "url": "https://www.examplebrand.com/products/ai-toolkit"
      }
    ],
    "brando:serviceAsset": [
      {
        "@type": "schema:Service",
        "name": "Brand Governance Audit",
        "description": "Assessment and advisory service for AI brand compliance.",
        "provider": {
          "@type": "schema:Organization",
          "name": "ExampleBrand Consulting",
          "url": "https://www.examplebrand.com/"
        }
      }
    ],
    "brando:featuresAsset": [
      {
        "@type": "schema:PropertyValue",
        "name": "AI Compliance Layer",
        "value": "Enables real-time brand compliance checks within AI outputs."
      },
      {
        "@type": "schema:PropertyValue",
        "name": "Visual Identity Enforcement",
        "value": "Automates logo, color, and typography adherence in generative media."
      }
    ],
    "brando:datasetAsset": [
      "https://datasets.examplebrand.com/brand-language-v1.json",
      "https://datasets.examplebrand.com/image-assets-v2.json"
    ],
    "brando:knowledgeAsset": [
      "https://knowledge.examplebrand.com/brand-strategy.jsonld"
    ],
    "brando:singleAgentAIAsset": [
      "https://ai.examplebrand.com/models/single-agent-config.yaml",
      "https://ai.examplebrand.com/scripts/single-agent-inference.py"
    ],
    "brando:multiAgentAIAsset": [
      "https://ai.examplebrand.com/orchestrations/multi-agent-workflow.json",
      "https://ai.examplebrand.com/models/multi-agent-ensemble-v1.tar.gz"
    ]
  }
}

```
## Usage

*Brando BDV is designed to be embedded in JSON-LD, RDFa, or used within semantic layers of AI and content delivery platforms. It is intended for use by:*

- Brand strategists and marketing teams  
- AI developers and prompt engineers  
- Compliance and governance professionals  
- Semantic web and knowledge graph architects  

## References

- Schema.org: [https://schema.org/Brand](https://schema.org/Brand)  
- EU AI Act and AI governance frameworks  
