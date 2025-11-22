# `brando:namingConvention`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > VerbalToken :: namingConvention

**Canonical URL:** `https://brandoschema.com/properties/namingConvention`  
**Check for open issues.**

---

## Description

Rules for how products, features, dates, and other entities are named and formatted.

---

## Values expected to be one of these types

* **Text**
* **List of Text values**

---

## Used on these types

* [brando:VerbalToken](../types/verbal-token.md)

---

## Example (JSON-LD)

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@type": "brando:VerbalToken",
  "schema:name": "Example VerbalToken",
  "brando:namingConvention": [
    "Example value for brando:namingConvention 1",
    "Example value for brando:namingConvention 2"
  ]
}
```

---

## Example (YAML)

```yaml
@context:
  schema: https://schema.org/
  brando: https://brandoschema.com/

@type: brando:VerbalToken
schema:name: Example VerbalToken

brando:namingConvention:
  - "Example value for brando:namingConvention 1"
  - "Example value for brando:namingConvention 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
