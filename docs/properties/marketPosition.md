# `brando:marketPosition`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Brand :: marketPosition

**Canonical URL:** `https://brandoschema.com/properties/marketPosition`  
**Check for open issues.**

---

## Description

How the brand positions itself in its category relative to alternatives and peers.

---

## Values expected to be one of these types

* **Text**
* **List of Text values**

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
  "brando:marketPosition": [
    "Example value for brando:marketPosition 1",
    "Example value for brando:marketPosition 2"
  ]
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

brando:marketPosition:
  - "Example value for brando:marketPosition 1"
  - "Example value for brando:marketPosition 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
