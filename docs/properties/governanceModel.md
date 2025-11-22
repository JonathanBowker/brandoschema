# `brando:governanceModel`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Brand :: governanceModel

**Canonical URL:** `https://brandoschema.com/properties/governanceModel`  
**Check for open issues.**

---

## Description

Description of how the brand is governed (e.g. centralised, federated, hybrid) for decision-making and approvals.

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
  "brando:governanceModel": [
    "Example value for brando:governanceModel 1",
    "Example value for brando:governanceModel 2"
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

brando:governanceModel:
  - "Example value for brando:governanceModel 1"
  - "Example value for brando:governanceModel 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
