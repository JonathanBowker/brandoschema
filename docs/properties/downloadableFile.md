# `brando:downloadableFile`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Multiple types :: downloadableFile (brando:Brand, brando:Context, brando:VisualToken, brando:VerbalToken, brando:AudioToken, brando:Policy, brando:Campaign, brando:BrandedCategory)

**Canonical URL:** `https://brandoschema.com/properties/downloadableFile`  
**Check for open issues.**

---

## Description

Links a brand, token, context, campaign, or policy node to one or more canonical downloadable file assets (e.g. master logo packs, current guideline PDFs) represented as schema:MediaObject. Intended as a stable pointer to the most up-to-date creative files exposed by the Brand OS or DAM.

---

## Values expected to be one of these types

* **schema:MediaObject**
* **List of schema:MediaObject values**

---

## Used on these types

* [brando:Brand](../types/brand.md)
* [brando:Context](../types/context.md)
* [brando:VisualToken](../types/visual-token.md)
* [brando:VerbalToken](../types/verbal-token.md)
* [brando:AudioToken](../types/audio-token.md)
* [brando:Policy](../types/policy.md)
* [brando:Campaign](../types/campaign.md)
* [brando:BrandedCategory](../types/branded-category.md)

---

## Example (JSON-LD)

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@type": "brando:Brand",
  "schema:name": "Example Brand",
  "brando:downloadableFile": {
    "@id": "https://example.com/example",
    "@type": "schema:MediaObject"
  }
}
```

---

## Example (YAML)

```yaml
@context:
  schema: https://schema.org/
  brando: https://brandoschema.com/

@type: brando:Brand
schema:name: Example Brand

brando:downloadableFile:
  @id: https://example.com/example
  @type: schema:MediaObject
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
