# `brando:gpcCategoryCode`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > BrandedCategory :: gpcCategoryCode

**Canonical URL:** `https://brandoschema.com/properties/gpcCategoryCode`  
**Check for open issues.**

---

## Description

GS1 Global Product Classification (GPC) brick code associated with this branded category.

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
  "brando:gpcCategoryCode": [
    "Example value for brando:gpcCategoryCode 1",
    "Example value for brando:gpcCategoryCode 2"
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

brando:gpcCategoryCode:
  - "Example value for brando:gpcCategoryCode 1"
  - "Example value for brando:gpcCategoryCode 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
