# `brando:assetPreview`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > BrandExpressionToken :: assetPreview

**Canonical URL:** `https://brandoschema.com/properties/assetPreview`  
**Check for open issues.**

---

## Description

Preview-friendly URL or data reference for displaying this token's associated asset.

---

## Values expected to be one of these types

* **URL**
* **List of URL values**

---

## Used on these types

* [brando:BrandExpressionToken](../types/brand-expression-token.md)

---

## Example (JSON-LD)

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@type": "brando:BrandExpressionToken",
  "schema:name": "Example BrandExpressionToken",
  "brando:assetPreview": "https://example.com/example"
}
```

---

## Example (YAML)

```yaml
@context:
  schema: https://schema.org/
  brando: https://brandoschema.com/

@type: brando:BrandExpressionToken
schema:name: Example BrandExpressionToken

brando:assetPreview: "https://example.com/example"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
