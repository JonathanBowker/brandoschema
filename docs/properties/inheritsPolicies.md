# `brando:inheritsPolicies`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Brand :: inheritsPolicies

**Canonical URL:** `https://brandoschema.com/properties/inheritsPolicies`  
**Check for open issues.**

---

## Description

Indicates whether a sub-brand inherits governance policies from its parent brand.

---

## Values expected to be one of these types

* **Boolean**
* **List of Boolean values**

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
  "brando:inheritsPolicies": true
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

brando:inheritsPolicies: True
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
