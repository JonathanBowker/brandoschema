# `brando:supportingFile`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Multiple types :: supportingFile (brando:Brand, brando:Context, brando:VisualToken, brando:VerbalToken, brando:AudioToken, brando:Policy, brando:Campaign, brando:BrandedCategory)

**Canonical URL:** `https://brandoschema.com/properties/supportingFile`  
**Check for open issues.**

---

## Description

Links a brand, token, context, campaign, or policy node to non-canonical supporting creative files (e.g. templates, mockups, working documents, previous guideline versions) represented as schema:MediaObject. These files are helpful for production but are not the primary source-of-truth asset.

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
  "brando:supportingFile": {
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

brando:supportingFile: {'@id': 'https://example.com/example', '@type': 'schema:MediaObject'}
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
