# `brando:visionStatement`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Brand :: visionStatement

**Canonical URL:** `https://brandoschema.com/properties/visionStatement`  
**Check for open issues.**

---

## Description

The aspirational future state the brand is working toward.

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
  "brando:visionStatement": [
    "Example value for brando:visionStatement 1",
    "Example value for brando:visionStatement 2"
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

brando:visionStatement:
  - "Example value for brando:visionStatement 1"
  - "Example value for brando:visionStatement 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
