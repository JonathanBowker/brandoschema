# `brando:productCategoryName`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > BrandedCategory :: productCategoryName

**Canonical URL:** `https://brandoschema.com/properties/productCategoryName`  
**Check for open issues.**

---

## Description

Name of a product or service category with associated brand tokens and rules.

---

## Values expected to be one of these types

* **Text**
* **List of Text values**

---

## Used on these types

* [brando:BrandedCategory](../types/branded-category.md)

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
  "brando:productCategoryName": [
    "Example value for brando:productCategoryName 1",
    "Example value for brando:productCategoryName 2"
  ]
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

brando:productCategoryName:
  - "Example value for brando:productCategoryName 1"
  - "Example value for brando:productCategoryName 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
