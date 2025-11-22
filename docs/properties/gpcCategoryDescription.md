# `brando:gpcCategoryDescription`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > BrandedCategory :: gpcCategoryDescription

**Canonical URL:** `https://brandoschema.com/properties/gpcCategoryDescription`  
**Check for open issues.**

---

## Description

Human-readable description of the GS1 Global Product Classification (GPC) brick associated with this branded category.

---

## Values expected to be one of these types

* **Text (language-tagged)**
* **List of Text (language-tagged) values**

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
  "brando:gpcCategoryDescription": [
    "Example value for brando:gpcCategoryDescription 1",
    "Example value for brando:gpcCategoryDescription 2"
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

brando:gpcCategoryDescription:
  - "Example value for brando:gpcCategoryDescription 1"
  - "Example value for brando:gpcCategoryDescription 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
