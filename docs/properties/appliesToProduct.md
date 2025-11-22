# `brando:appliesToProduct`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Multiple types :: appliesToProduct (brando:BrandedCategory, brando:Policy)

**Canonical URL:** `https://brandoschema.com/properties/appliesToProduct`  
**Check for open issues.**

---

## Description

Links a branded category or policy to one or more GS1 Product nodes.

---

## Values expected to be one of these types

* **gs1:Product**
* **List of gs1:Product values**

---

## Used on these types

* [brando:BrandedCategory](../types/branded-category.md)
* [brando:Policy](../types/policy.md)

---

## Example (JSON-LD)

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@type": "brando:BrandedCategory",
  "schema:name": "Example BrandedCategory",
  "brando:appliesToProduct": {
    "@id": "https://example.com/example",
    "@type": "gs1:Product"
  }
}
```

---

## Example (YAML)

```yaml
@context:
  schema: https://schema.org/
  brando: https://brandoschema.com/

@type: brando:BrandedCategory
schema:name: Example BrandedCategory

brando:appliesToProduct: {'@id': 'https://example.com/example', '@type': 'gs1:Product'}
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
