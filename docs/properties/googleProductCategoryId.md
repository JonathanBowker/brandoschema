# `brando:googleProductCategoryId`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > BrandedCategory :: googleProductCategoryId

**Canonical URL:** `https://brandoschema.com/properties/googleProductCategoryId`  
**Check for open issues.**

---

## Description

Google Product Taxonomy category identifier associated with this branded category, typically used for shopping feeds, SEO, and retail media. Enables alignment between brand-level categories and Google Merchant Center classification.

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
  "brando:googleProductCategoryId": [
    "Example value for brando:googleProductCategoryId 1",
    "Example value for brando:googleProductCategoryId 2"
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

brando:googleProductCategoryId:
  - "Example value for brando:googleProductCategoryId 1"
  - "Example value for brando:googleProductCategoryId 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
