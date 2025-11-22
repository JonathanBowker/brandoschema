# `brando:appliesToGTIN`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Multiple types :: appliesToGTIN (brando:BrandedCategory, brando:Policy)

**Canonical URL:** `https://brandoschema.com/properties/appliesToGTIN`  
**Check for open issues.**

---

## Description

GTIN(s) for which this branded category or policy is applicable.

---

## Values expected to be one of these types

* **Text**
* **List of Text values**

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
  "brando:appliesToGTIN": [
    "Example value for brando:appliesToGTIN 1",
    "Example value for brando:appliesToGTIN 2"
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

brando:appliesToGTIN:
  - "Example value for brando:appliesToGTIN 1"
  - "Example value for brando:appliesToGTIN 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
