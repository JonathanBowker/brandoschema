---
title: brando:VisualToken
description: Reference for the brando:VisualToken class in the Brand Oracle (Brando) schema vocabulary v1.3.
---

# `brando:VisualToken`

Reusable configuration of the brand’s visual system: logo, colour, typography, imagery, and motion.

> **rdfs:comment**  
> *Reusable configuration of the brand's visual system: logo, colour, typography, imagery, and motion.*

---

## Term definition

- **IRI:** `brando:VisualToken`
- **Type:** `owl:Class`
- **Superclasses:**
    - `brando:BrandExpressionToken`
    - `schema:Intangible`
- **Defined in:** `brando:` (Brando Schema Vocabulary v1.3)

A `brando:VisualToken` is a **reusable visual expression preset**. It describes *how the brand looks* in a way that can be consumed by:

- design systems,
- UI theming,
- multimodal / image generation systems,
- and Brand OS orchestration.

Typical things captured in a VisualToken:

- logos and logotypes,
- colour system,
- typography,
- imagery style,
- motion / animation principles,
- links to detailed guidelines and design systems.

You normally **do not** target a VisualToken directly at runtime. Instead, you attach it to:

- `brando:Brand`, and/or
- `brando:Context`,

via `brando:usesVisualToken`, then let your Brand OS or AI middleware read the token and map it into:

- design tokens,
- theme variables,
- or multimodal prompt hints.

---

## Relationships

### Inbound: where VisualTokens are used

VisualTokens are attached from brands and contexts via:

- **`brando:usesVisualToken`**
  - **Type:** `owl:ObjectProperty`
  - **Domain:** `brando:Brand`, `brando:Context`
  - **Range:** `brando:VisualToken`
  - **Comment (summary):** Attaches a visual expression token defining how the brand looks in this scope.

Brand-level attachment (default visual system):

```jsonld
{
  "@id": "https://example.com/brand/northstar",
  "@type": "brando:Brand",
  "schema:name": "Northstar Bank",
  "brando:usesVisualToken": {
    "@id": "https://example.com/brand/northstar/tokens/visual/master"
  }
}
```

Context-level override or specialisation:

```jsonld
{
  "@id": "https://example.com/brand/northstar/context/mobile-app",
  "@type": "brando:Context",
  "brando:usesVisualToken": {
    "@id": "https://example.com/brand/northstar/tokens/visual/mobile-app"
  }
}
```

**Pattern (non-normative):**

* **Brand-level VisualToken** → “master” visual system.
* **Context-level VisualToken** → channel-specific or campaign-specific adjustments (e.g. dark mode app visuals, performance marketing adaptations).

---

## Key properties (domain includes `brando:VisualToken`)

The following properties have `brando:VisualToken` in their `rdfs:domain`.

### 1. Identity in visual form

| Property IRI                 | Range        | Type                   | Comment (from vocab)                                                            |
| ---------------------------- | ------------ | ---------------------- | ------------------------------------------------------------------------------- |
| `brando:brandName`           | `xsd:string` | `owl:DatatypeProperty` | Display name of the brand as it should appear in visual treatments.             |
| `brando:logo`                | `xsd:anyURI` | `owl:DatatypeProperty` | Canonical reference URL to the primary logo asset or logo set.                  |
| `brando:visualReferenceLink` | `xsd:anyURI` | `owl:DatatypeProperty` | URL pointing to full visual identity guidelines or design system documentation. |

**Usage notes (non-normative):**

* `brando:brandName` here is **how the name should visually appear**, not the legal entity name:

    * casing (“northstar” vs “Northstar”),
    * punctuation,
    * spacing.

* `brando:logo` should point at a **stable asset location** (e.g. Brand OS / DAM URL, CDN URL).
* `brando:visualReferenceLink` is ideal for:

    * Figma libraries,
    * design system docs,
    * brand portals.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/tokens/visual/master",
  "@type": "brando:VisualToken",
  "brando:brandName": "Northstar",
  "brando:logo": "https://assets.example.com/northstar/brand/logo.svg",
  "brando:visualReferenceLink": "https://design.example.com/northstar"
}
```

---

### 2. Colour, typography, and core design tokens

| Property IRI           | Range        | Type                   | Comment (from vocab)                                                             |
| ---------------------- | ------------ | ---------------------- | -------------------------------------------------------------------------------- |
| `brando:colourPalette` | `xsd:string` | `owl:DatatypeProperty` | Structured description of the brand's colour system, including roles and values. |
| `brando:typography`    | `xsd:string` | `owl:DatatypeProperty` | Typographic system including font families, weights, sizes, and hierarchy.       |
| `brando:visualToken`   | `xsd:string` | `owl:DatatypeProperty` | Core design tokens such as spacing, radius, and elevation.                       |

**Usage notes (non-normative):**

* All three are modelled as `xsd:string` so you can:

    * store lightweight human-oriented summaries, or
    * embed **structured JSON** as a string if you want machine-readability.

Examples:

```jsonld
{
  "@id": "https://example.com/brand/northstar/tokens/visual/master",
  "@type": "brando:VisualToken",
  "brando:colourPalette": {
    "primary": "#4B3CFA",
    "secondary": "#11A39D",
    "neutral-100": "#FFFFFF",
    "neutral-900": "#0A0A0A"
  },
  "brando:typography": {
    "heading": "Inter",
    "body": "Inter",
    "mono": "Roboto Mono"
  },
  "brando:visualToken": {
    "radius-sm": "4px",
    "radius-lg": "12px",
    "spacing-sm": "8px",
    "spacing-lg": "24px",
    "elevation-1": "shadow-xs"
  }
}

```

In many implementations, your Brand OS will:

1. Parse these JSON strings into internal token objects.
2. Map them into design-system token formats (e.g. style dictionaries, Figma tokens, CSS variables).

---

### 3. Imagery and motion

| Property IRI                   | Range        | Type                   | Comment (from vocab)                                                  |
| ------------------------------ | ------------ | ---------------------- | --------------------------------------------------------------------- |
| `brando:imageryStyles`         | `xsd:string` | `owl:DatatypeProperty` | Guidance on photography, illustration, and composition style.         |
| `brando:motionRules`           | `xsd:string` | `owl:DatatypeProperty` | Principles for animation, transitions, and micro-interactions.        |
| `brando:visualUsageGuidelines` | `xsd:string` | `owl:DatatypeProperty` | Do's and don'ts for applying logos, colours, typography, and imagery. |

**Usage notes (non-normative):**

* These fields are a good place to put **concise, AI-usable rules**, not entire PDFs.
* `imageryStyles` and `motionRules` can be:

    * free-text,
    * lists expressed as JSON-as-string,
    * or bullet-style sentences in plain text.

* `visualUsageGuidelines` is often where you capture hard rules like:

    * “Never place the logo on busy imagery.”
    * “Maintain minimum clear space around the logomark.”

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/tokens/visual/master",
  "@type": "brando:VisualToken",
  "brando:imageryStyles": "Natural light, real people, candid moments. Avoid stock-like poses and generic business imagery.",
  "brando:motionRules": "Subtle, purposeful motion. Ease-in-out curves; avoid bouncy or playful animations.",
  "brando:visualUsageGuidelines": [
    "Never distort or recolour the primary logo.",
    "Maintain at least 24px clear space around the logo on digital surfaces.",
    "Use the primary brand colour only for key actions and highlights."
  ]
}
```

---

### 4. Files and supporting assets

These are shared properties used across several Brando types, and are particularly useful for VisualTokens to point at canonical asset sets.

| Property IRI              | Range                | Type                 | Comment (from vocab, summarised)                                                                                                              |
| ------------------------- | -------------------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `brando:downloadableFile` | `schema:MediaObject` | `owl:ObjectProperty` | Links a brand, token, context, campaign, or policy node to the most up-to-date creative files exposed by the Brand OS or DAM.                 |
| `brando:supportingFile`   | `schema:MediaObject` | `owl:ObjectProperty` | Links a brand, token, context, campaign, or policy node to additional files helpful for production but not the primary source-of-truth asset. |

**Usage notes (non-normative):**

* For VisualTokens:

  * `downloadableFile` is typically:

      * logo packs (SVG/PNG bundles),
      * full visual identity PDFs,
      * token exports for design systems.
  * `supportingFile` might be:

      * mood boards,
      * example layouts,
      * campaign-specific visual packs.

Both properties use `schema:MediaObject`, so you can add metadata such as:

* `schema:name`,
* `schema:contentUrl`,
* `schema:encodingFormat`,
* `schema:fileSize`.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/tokens/visual/master",
  "@type": "brando:VisualToken",
  "brando:downloadableFile": {
    "@id": "https://assets.example.com/northstar/visuals/northstar-visual-identity-kit.zip",
    "@type": "schema:MediaObject",
    "schema:name": "Northstar Visual Identity Kit (ZIP)",
    "schema:contentUrl": "https://assets.example.com/northstar/visuals/northstar-visual-identity-kit.zip",
    "schema:encodingFormat": "application/zip"
  },
  "brando:supportingFile": {
    "@id": "https://assets.example.com/northstar/visuals/inspiration-board.pdf",
    "@type": "schema:MediaObject",
    "schema:name": "Northstar Visual Inspiration Board"
  }
}
```

---

## Example: Brand + Context + VisualTokens

A small JSON-LD example showing how `brando:VisualToken` fits into a Brand Knowledge Graph:

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
      "brando:usesVisualToken": {
        "@id": "https://example.com/brand/northstar/tokens/visual/master"
      },
      "brando:hasContext": {
        "@id": "https://example.com/brand/northstar/context/mobile-app"
      }
    },
    {
      "@id": "https://example.com/brand/northstar/context/mobile-app",
      "@type": "brando:Context",
      "brando:audienceSegment": "Existing mobile app customers",
      "brando:domainContext": {
        "channel": "mobile-app",
        "surface": "native",
        "platforms": [
          "iOS",
          "Android"
        ]
      },
      "brando:usesVisualToken": {
        "@id": "https://example.com/brand/northstar/tokens/visual/mobile-app"
      }
    },
    {
      "@id": "https://example.com/brand/northstar/tokens/visual/master",
      "@type": "brando:VisualToken",
      "brando:brandName": "Northstar",
      "brando:logo": "https://assets.example.com/northstar/brand/logo.svg",
      "brando:colourPalette": {
        "primary": "#4B3CFA",
        "secondary": "#11A39D",
        "neutral-100": "#FFFFFF",
        "neutral-900": "#0A0A0A"
      },
      "brando:typography": {
        "heading": "Inter",
        "body": "Inter",
        "mono": "Roboto Mono"
      },
      "brando:visualUsageGuidelines": [
        "Use primary colour for main CTAs only.",
        "Maintain 4px base spacing scale."
      ]
    },
    {
      "@id": "https://example.com/brand/northstar/tokens/visual/mobile-app",
      "@type": "brando:VisualToken",
      "brando:brandName": "Northstar",
      "brando:logo": "https://assets.example.com/northstar/app/logo-app.svg",
      "brando:colourPalette": {
        "primary": "#4B3CFA",
        "secondary": "#11A39D",
        "surface": "#050814"
      },
      "brando:motionRules": "App interactions should feel responsive and smooth with subtle easing; avoid distracting animations."
    }
  ]
}

```

**Runtime pattern (non-normative):**

1. Resolve `brando:Brand` and relevant `brando:Context`.
2. Load VisualTokens from:

    * Brand-level (`/tokens/visual/master`),
    * Context-level (`/tokens/visual/mobile-app`).

3. Merge fields based on your precedence rules:

    * e.g. context-specific `logo` or `colourPalette` can override brand defaults.

4. Map token fields into:

    * design-system tokens,
    * CSS variables / theming,
    * multimodal prompts for image generation.

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
    * [`brando:AudioToken`](audio-token.md)
    * [`brando:Policy`](policy.md)
