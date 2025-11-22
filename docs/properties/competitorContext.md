# `brando:competitorContext`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Brand :: competitorContext

**Canonical URL:** `https://brandoschema.com/properties/competitorContext`  
**Check for open issues.**

---

## Description

Summary of competitors, adjacent solutions, and how the brand differentiates.

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
  "brando:competitorContext": [
    "Example value for brando:competitorContext 1",
    "Example value for brando:competitorContext 2"
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

brando:competitorContext:
  - "Example value for brando:competitorContext 1"
  - "Example value for brando:competitorContext 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
