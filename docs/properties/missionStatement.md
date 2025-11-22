# `brando:missionStatement`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Brand :: missionStatement

**Canonical URL:** `https://brandoschema.com/properties/missionStatement`  
**Check for open issues.**

---

## Description

The brand's core purpose and day-to-day reason for existing.

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
  "brando:missionStatement": [
    "Example value for brando:missionStatement 1",
    "Example value for brando:missionStatement 2"
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

brando:missionStatement:
  - "Example value for brando:missionStatement 1"
  - "Example value for brando:missionStatement 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
