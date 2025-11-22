# `brando:unspscCode`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > BrandedCategory :: unspscCode

**Canonical URL:** `https://brandoschema.com/properties/unspscCode`  
**Check for open issues.**

---

## Description

UNSPSC (United Nations Standard Products and Services Code) associated with this branded category or product grouping. Used to align brand-defined categories with procurement and B2B classification schemes.

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
  "brando:unspscCode": [
    "Example value for brando:unspscCode 1",
    "Example value for brando:unspscCode 2"
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

brando:unspscCode:
  - "Example value for brando:unspscCode 1"
  - "Example value for brando:unspscCode 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
