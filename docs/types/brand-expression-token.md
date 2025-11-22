---
title: brando:BrandExpressionToken
description: Reference for the brando:BrandExpressionToken class in the Brand Oracle (Brando) schema vocabulary v1.3.
---

# `brando:BrandExpressionToken`

Abstract superclass for reusable brand expression tokens across verbal, visual, and audio modalities.

> **rdfs:comment**  
> *Abstract superclass for reusable brand expression tokens across verbal, visual, and audio modalities.*

---

## Term definition

- **IRI:** `brando:BrandExpressionToken`
- **Type:** `owl:Class`
- **Superclass:** `schema:Intangible`
- **Defined in:** `brando:` (Brando Schema Vocabulary v1.3)

`brando:BrandExpressionToken` is an **abstract superclass** for all expression tokens in Brando:

- `brando:VerbalToken`
- `brando:VisualToken`
- `brando:AudioToken`

It provides a **shared conceptual and structural basis** for anything that represents *how the brand is expressed* (rather than *what the brand is*).

You will almost always instantiate one of the **concrete subclasses** (`VerbalToken`, `VisualToken`, `AudioToken`) rather than `BrandExpressionToken` directly.

---

## Role in the vocabulary

Use `brando:BrandExpressionToken`:

- as a **common parent** for all expression tokens, so that:
    - tools can reason about “any expression token” generically,
    - shared properties (e.g. asset URLs) can be defined once at this level;
- to support **queries and filters** such as:
    - “return all expression tokens for this brand”,
    - “list expression tokens that have downloadable assets attached”.

It is **not** intended to be used as a first-class modelling concept in day-to-day instance data (you don’t normally say `@type: "brando:BrandExpressionToken"` alone).

---

## Relationships

### Subclasses

The following classes are explicitly declared as subclasses of `brando:BrandExpressionToken`:

- `brando:VerbalToken`
- `brando:VisualToken`
- `brando:AudioToken`

All three also subclass `schema:Intangible`, via their own `rdfs:subClassOf` relations.

### Inbound links (via subclasses)

Expression tokens are linked from:

- `brando:Brand` and `brando:Context` using:

    - `brando:usesVerbalToken` → `brando:VerbalToken`
    - `brando:usesVisualToken` → `brando:VisualToken`
    - `brando:usesAudioToken` → `brando:AudioToken`

From a reasoning perspective, these point to instances of `brando:BrandExpressionToken` (via the subclass relationships), even though the concrete type is more specific.

---

## Key properties (domain = `brando:BrandExpressionToken`)

The following properties have `brando:BrandExpressionToken` as their `rdfs:domain`. They therefore apply to **all** expression tokens (verbal, visual, audio).

### 1. Asset URL

| Property IRI         | Range        | Type                   | rdfs:comment                                                                                                                       |
| -------------------- | ----------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `brando:assetURL`    | `xsd:anyURI`| `owl:DatatypeProperty` | *Canonical source URL for an asset associated with this expression token (e.g. avatar, badge, waveform).*                         |

Use `brando:assetURL` when there is a **single, primary asset** that represents the expression token:

- for `VerbalToken`: e.g. a canonical “tone card” image, or key reference doc;
- for `VisualToken`: e.g. a key logo lockup or master style tile;
- for `AudioToken`: e.g. the canonical sonic logo waveform.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/tokens/visual/master",
  "@type": "brando:VisualToken",
  "brando:assetURL": "https://assets.example.com/northstar/visuals/master-tile.png"
}
```

---

### 2. Asset preview

| Property IRI          | Range        | Type                   | rdfs:comment                                                                           |
| --------------------- | ------------ | ---------------------- | -------------------------------------------------------------------------------------- |
| `brando:assetPreview` | `xsd:anyURI` | `owl:DatatypeProperty` | *Preview-friendly URL or data reference for displaying this token's associated asset.* |

`brando:assetPreview` is intended for **UI-friendly previews**, potentially:

* optimised image previews,
* short audio clips,
* thumbnails.

This allows your Brand OS or admin tools to show a quick visual/aural representation of the token without needing to load the full asset or bundle.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/tokens/audio/master",
  "@type": "brando:AudioToken",
  "brando:assetURL": "https://assets.example.com/northstar/audio/northstar-sonic-logo-full.wav",
  "brando:assetPreview": "https://assets.example.com/northstar/audio/northstar-sonic-logo-preview.mp3"
}
```

---

## Example: querying “all expression tokens”

Because all concrete expression token types subclass `brando:BrandExpressionToken`, your tooling can use that superclass to **query generically**.

Example JSON-LD fragment (mixed token types):

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@graph": [
    {
      "@id": "https://example.com/brand/northstar/tokens/verbal/default",
      "@type": "brando:VerbalToken",
      "brando:assetPreview": "https://assets.example.com/northstar/voice/verbal-default-card.png"
    },
    {
      "@id": "https://example.com/brand/northstar/tokens/visual/master",
      "@type": "brando:VisualToken",
      "brando:assetPreview": "https://assets.example.com/northstar/visuals/master-preview.png"
    },
    {
      "@id": "https://example.com/brand/northstar/tokens/audio/master",
      "@type": "brando:AudioToken",
      "brando:assetPreview": "https://assets.example.com/northstar/audio/sonic-logo-preview.mp3"
    }
  ]
}
```

In a graph database or SPARQL-like environment, you can write:

* “Find all instances where `rdf:type` is `brando:BrandExpressionToken` or any subclass”
  (e.g. using a reasoner or subclass-aware query).

This is **non-normative** at the spec level, but illustrates the intent behind having `BrandExpressionToken` as a shared superclass.

---

## When to mention `BrandExpressionToken` in documentation and APIs

In implementation docs and API schemas:

* Use `brando:BrandExpressionToken`:

    * as an abstract type for generic “token” collections or endpoints,
    * when describing behaviours that are common to all tokens (e.g. asset handling, preview rendering).

* Use concrete types:

    * `brando:VerbalToken` for voice/tone/text rules,
    * `brando:VisualToken` for visual identity and design tokens,
    * `brando:AudioToken` for sonic identity and cues.

---

## Related documentation

* **Concepts / overview**

    * [Brando types overview](index.md)
    * [Getting started](../getting-started.md)

* **Concrete subclasses**

    * [`brando:VerbalToken`](verbal-token.md)
    * [`brando:VisualToken`](visual-token.md)
    * [`brando:AudioToken`](audio-token.md)

* **Usage in the graph**

    * [`brando:Brand`](brand.md)
    * [`brando:Context`](context.md)

