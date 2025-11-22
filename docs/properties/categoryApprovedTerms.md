# `brando:categoryApprovedTerms`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > BrandedCategory :: categoryApprovedTerms

**Canonical URL:** `https://brandoschema.com/properties/categoryApprovedTerms`  
**Check for open issues.**

---

## Description

Terms encouraged for this category, layered on top of brand-level approved terms.

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
  "brando:categoryApprovedTerms": [
    "Example value for brando:categoryApprovedTerms 1",
    "Example value for brando:categoryApprovedTerms 2"
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

brando:categoryApprovedTerms:
  - "Example value for brando:categoryApprovedTerms 1"
  - "Example value for brando:categoryApprovedTerms 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
