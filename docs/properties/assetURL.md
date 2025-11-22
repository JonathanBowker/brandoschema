# `brando:assetURL`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > BrandExpressionToken :: assetURL

**Canonical URL:** `https://brandoschema.com/properties/assetURL`  
**Check for open issues.**

---

## Description

Canonical source URL for an asset associated with this expression token (e.g. avatar, badge, waveform).

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
  "brando:assetURL": "https://example.com/example"
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

brando:assetURL: "https://example.com/example"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
