---
title: brando:AudioToken
description: Reference for the brando:AudioToken class in the Brand Oracle (Brando) schema vocabulary v1.3.
---

# `brando:AudioToken`

Reusable configuration of the brand's sonic identity across voice, sonic logos, and audio cues.

> **rdfs:comment**  
> *Reusable configuration of the brand's sonic identity across voice, sonic logos, and audio cues.*

---

## Term definition

- **IRI:** `brando:AudioToken`
- **Type:** `owl:Class`
- **Superclasses:**
    - `brando:BrandExpressionToken`
    - `schema:Intangible`
- **Defined in:** `brando:` (Brando Schema Vocabulary v1.3)

A `brando:AudioToken` is a **reusable audio expression preset**. It describes *how the brand sounds* in a way that can be consumed by:

- TTS / voice agents,
- IVR systems,
- sonic branding and UX sound design,
- multimodal AI that can generate or select audio.

Typical content in an AudioToken:

- sonic logo / audio mark,
- overall voice profile (voice signature),
- pronunciation rules for brand terms,
- speech style for spoken output,
- short UI sound cues,
- guidelines on when and how audio is used.

You normally attach `brando:AudioToken` to:

- `brando:Brand`, and/or
- `brando:Context`,

via `brando:usesAudioToken`. Your Brand OS or AI middleware then reads the token and maps it into voice/TTS configuration, sound packs, or multimodal prompts.

---

## Relationships

### Inbound: where AudioTokens are used

AudioTokens are attached from brands and contexts via:

- **`brando:usesAudioToken`**
    - **Type:** `owl:ObjectProperty`
    - **Domain:** `brando:Brand`, `brando:Context`
    - **Range:** `brando:AudioToken`
    - **Comment (summary):** Attaches an audio expression token defining how the brand sounds in this scope.

Brand-level (default sonic identity):

```jsonld
{
  "@id": "https://example.com/brand/northstar",
  "@type": "brando:Brand",
  "schema:name": "Northstar Bank",
  "brando:usesAudioToken": {
    "@id": "https://example.com/brand/northstar/tokens/audio/master"
  }
}
```

Context-level override (e.g. for a support IVR):

```jsonld
{
  "@id": "https://example.com/brand/northstar/context/support-ivr",
  "@type": "brando:Context",
  "brando:usesAudioToken": {
    "@id": "https://example.com/brand/northstar/tokens/audio/support-ivr"
  }
}
```

**Pattern (non-normative):**

* Brand-level AudioToken → “master” sonic identity.
* Context-level AudioToken → channel- or surface-specific adaptations (e.g. IVR vs in-app assistant vs marketing videos).

---

## Key properties (domain = `brando:AudioToken`)

The following properties have `brando:AudioToken` in their `rdfs:domain`.

### 1. Sonic logo and voice profile

| Property IRI                | Range        | Type                   | Comment (from vocab)                                                                            |
| --------------------------- | ------------ | ---------------------- | ----------------------------------------------------------------------------------------------- |
| `brando:audioLogo`          | `xsd:anyURI` | `owl:DatatypeProperty` | URI pointing to the brand's sonic logo or audio mark.                                           |
| `brando:voiceSignature`     | `xsd:string` | `owl:DatatypeProperty` | Description of the desired voice profile for TTS or voice agents.                               |
| `brando:pronunciationGuide` | `xsd:string` | `owl:DatatypeProperty` | Standardised pronunciation notes (e.g. IPA or phonetic spelling) for brand names and key terms. |

**Usage notes (non-normative):**

* `audioLogo` should point to a **stable, canonical audio asset** (e.g. WAV/MP3 on a CDN, DAM, or Brand OS).
* Use `voiceSignature` to describe:

    * gender / age range (if relevant),
    * accent,
    * timbre,
    * energy level (e.g. “warm baritone, mid-tempo, confident but not pushy”).

* `pronunciationGuide` is helpful where:

    * the brand name is non-obvious,
    * key product names are easily mispronounced.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/tokens/audio/master",
  "@type": "brando:AudioToken",
  "brando:audioLogo": "https://assets.example.com/northstar/audio/northstar-sonic-logo.mp3",
  "brando:voiceSignature": "Warm, mid-range voice with UK English accent. Calm but confident delivery.",
  "brando:pronunciationGuide": "Northstar: /ˈnɔːθ.stɑːr/"
}
```

---

### 2. Speech style

| Property IRI         | Range        | Type                   | Comment (from vocab)                                                       |
| -------------------- | ------------ | ---------------------- | -------------------------------------------------------------------------- |
| `brando:speechStyle` | `xsd:string` | `owl:DatatypeProperty` | Guidance on rhythm, pacing, pausing, and expressiveness for spoken output. |

**Usage notes (non-normative):**

* Use short, imperative sentences that can map cleanly to TTS or voice agent settings, for example:

    * “Speak slowly and clearly, with brief pauses before key numbers.”
    * “Avoid exaggerated intonation; keep a neutral, professional delivery.”

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/tokens/audio/master",
  "@type": "brando:AudioToken",
  "brando:speechStyle": "Moderate pace, clear articulation, brief pause before critical information like amounts or dates."
}
```

---

### 3. Audio cues and usage guidelines

| Property IRI                  | Range        | Type                   | Comment (from vocab)                                                           |
| ----------------------------- | ------------ | ---------------------- | ------------------------------------------------------------------------------ |
| `brando:audioCue`             | `xsd:string` | `owl:DatatypeProperty` | Definitions of short sound cues used as confirmations, alerts, or transitions. |
| `brando:audioUsageGuidelines` | `xsd:string` | `owl:DatatypeProperty` | Do's and don'ts for when and how branded audio should be used.                 |
| `brando:audioReferenceLink`   | `xsd:anyURI` | `owl:DatatypeProperty` | URL pointing to canonical audio repositories or style guides.                  |

**Usage notes (non-normative):**

* `audioCue` can describe:

    * cue names and meanings (“success”, “error”, “notification”),
    * or reference tables stored elsewhere, as long as the text is unambiguous.

* `audioUsageGuidelines` is the place for rules such as:

    * “Do not autoplay audio with sound on.”
    * “Use confirmation chime after successful payments only.”

* `audioReferenceLink` will often point to:

    * audio libraries,
    * DAW project folders,
    * sound design docs.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/tokens/audio/master",
  "@type": "brando:AudioToken",
  "brando:audioCue": [
    "success: soft ascending chime, ~400ms",
    "error: short descending tone, ~300ms",
    "notification: subtle single blip, ~150ms"
  ],
  "brando:audioUsageGuidelines": [
    "Do not autoplay audio with sound enabled on first page load.",
    "Use the success chime only after irreversible actions (e.g. submitting an application)."
  ],
  "brando:audioReferenceLink": "https://assets.example.com/northstar/audio/library/"
}
```

---

### 4. Files and supporting assets

These are shared properties used across several Brando types, and are particularly useful for AudioTokens to point at canonical audio sets and documentation.

| Property IRI              | Range                | Type                 | Comment (summary from vocab)                                                                                         |
| ------------------------- | -------------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `brando:downloadableFile` | `schema:MediaObject` | `owl:ObjectProperty` | Links a brand, token, context, campaign, or policy node to up-to-date creative files exposed by the Brand OS or DAM. |
| `brando:supportingFile`   | `schema:MediaObject` | `owl:ObjectProperty` | Links a node to additional files that are helpful for production but are not the primary source-of-truth asset.      |

**Usage notes (non-normative):**

* For AudioTokens:

  * `downloadableFile` might be:

      * a ZIP of sonic logos and core cues,
      * a “voice pack” for a TTS engine,
      * reference recordings.
  
  * `supportingFile` could be:

      * sound design rationale,
      * mixing/mastering guidelines,
      * example call flows with audio annotations.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/tokens/audio/master",
  "@type": "brando:AudioToken",
  "brando:downloadableFile": {
    "@id": "https://assets.example.com/northstar/audio/northstar-audio-kit.zip",
    "@type": "schema:MediaObject",
    "schema:name": "Northstar Sonic Identity Kit (ZIP)",
    "schema:contentUrl": "https://assets.example.com/northstar/audio/northstar-audio-kit.zip",
    "schema:encodingFormat": "application/zip"
  },
  "brando:supportingFile": {
    "@id": "https://assets.example.com/northstar/audio/northstar-audio-guidelines.pdf",
    "@type": "schema:MediaObject",
    "schema:name": "Northstar Sonic Identity Guidelines (PDF)"
  }
}
```

---

## Example: Brand + Context + AudioTokens

A combined JSON-LD example showing `brando:AudioToken` in context:

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@graph": [
    {
      "@id": "https://example.com/brand/northstar",
      "@type": "brando:Brand",
      "schema:name": "Northstar Bank",
      "brando:usesAudioToken": {
        "@id": "https://example.com/brand/northstar/tokens/audio/master"
      },
      "brando:hasContext": {
        "@id": "https://example.com/brand/northstar/context/support-ivr"
      }
    },
    {
      "@id": "https://example.com/brand/northstar/context/support-ivr",
      "@type": "brando:Context",
      "brando:audienceSegment": "Existing customers calling support",
      "brando:domainContext": {
        "channel": "phone",
        "surface": "ivr",
        "region": "UK"
      },
      "brando:usesAudioToken": {
        "@id": "https://example.com/brand/northstar/tokens/audio/support-ivr"
      }
    },
    {
      "@id": "https://example.com/brand/northstar/tokens/audio/master",
      "@type": "brando:AudioToken",
      "brando:audioLogo": "https://assets.example.com/northstar/audio/northstar-sonic-logo.mp3",
      "brando:voiceSignature": "Warm, mid-range UK English voice with calm, reassuring delivery.",
      "brando:speechStyle": "Moderate pace, clear articulation, natural pauses before key information.",
      "brando:audioCue": [
        "success: soft ascending chime",
        "error: brief descending tone"
      ],
      "brando:audioUsageGuidelines": [
        "Use audio sparingly in web contexts.",
        "Ensure all audio cues have visual equivalents for accessibility."
      ]
    },
    {
      "@id": "https://example.com/brand/northstar/tokens/audio/support-ivr",
      "@type": "brando:AudioToken",
      "brando:voiceSignature": "Slightly more energetic variant of the master voice; maintain clarity under noisy conditions.",
      "brando:speechStyle": "Slightly slower pace than web assistant, with explicit confirmation of menu choices.",
      "brando:audioCue": [
        "menu: soft tick sound after input recognised",
        "hold: gentle ambient loop at low volume"
      ],
      "brando:audioUsageGuidelines": [
        "Limit hold music segments to 30 seconds before inserting a spoken update.",
        "Avoid abrupt cuts between prompts; use short crossfades where possible."
      ]
    }
  ]
}

```

**Runtime pattern (non-normative):**

1. Resolve `brando:Brand` and `brando:Context` for the current interaction (e.g. support IVR).
2. Load AudioTokens from:

    * Brand-level (`/tokens/audio/master`),
    * Context-level (`/tokens/audio/support-ivr`).

3. Merge fields based on precedence rules:

    * e.g. context-specific `audioCue` and `speechStyle` override or extend brand defaults.

4. Map the merged configuration into:

    * TTS engine parameters,
    * audio asset lookups for cues,
    * constraints/guidelines for audio generation.

---

## Related documentation

* **Concepts / overview**

    * [Brando types overview](index.md)
    * [Getting started](../getting-started.md)

* **Related types**

    * [`brando:Brand`](brand.md)
    * [`brando:Context`](context.md)
    * [`brando:BrandExpressionToken`](brand-expression-token.md)
    * [`brando:VerbalToken`](verbal-token.md)
    * [`brando:VisualToken`](visual-token.md)
    * [`brando:Policy`](policy.md)
