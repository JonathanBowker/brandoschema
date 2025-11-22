# `brando:hasProductCategory`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Brand :: hasProductCategory

**Canonical URL:** `https://brandoschema.com/properties/hasProductCategory`  
**Check for open issues.**

---

## Description

Links a brand to its branded product or service category taxonomy nodes.

---

## Values expected to be one of these types

* **brando:BrandedCategory**
* **List of brando:BrandedCategory values**

---

## Used on these types

* [brando:Brand](../types/brand.md)

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
  "brando:hasProductCategory": {
    "@id": "https://example.com/example",
    "@type": "brando:BrandedCategory"
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

brando:hasProductCategory: {'@id': 'https://example.com/example', '@type': 'brando:BrandedCategory'}
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
