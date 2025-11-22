# `brando:brandArchitectureRole`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Brand :: brandArchitectureRole

**Canonical URL:** `https://brandoschema.com/properties/brandArchitectureRole`  
**Check for open issues.**

---

## Description

The role this brand plays in the broader brand architecture (e.g. master brand, endorsed brand, sub-brand).

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
  "brando:brandArchitectureRole": [
    "Example value for brando:brandArchitectureRole 1",
    "Example value for brando:brandArchitectureRole 2"
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

brando:brandArchitectureRole:
  - "Example value for brando:brandArchitectureRole 1"
  - "Example value for brando:brandArchitectureRole 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
