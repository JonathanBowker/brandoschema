# `brando:refusalStrategies`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Policy :: refusalStrategies

**Canonical URL:** `https://brandoschema.com/properties/refusalStrategies`  
**Check for open issues.**

---

## Description

Preferred patterns for declining or redirecting unsafe or out-of-scope requests.

---

## Values expected to be one of these types

* **Text**
* **List of Text values**

---

## Used on these types

* [brando:Policy](../types/policy.md)

---

## Example (JSON-LD)

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@type": "brando:Policy",
  "schema:name": "Example Policy",
  "brando:refusalStrategies": [
    "Example value for brando:refusalStrategies 1",
    "Example value for brando:refusalStrategies 2"
  ]
}
```

---

## Example (YAML)

```yaml
@context:
  schema: https://schema.org/
  brando: https://brandoschema.com/

@type: brando:Policy
schema:name: Example Policy

brando:refusalStrategies:
  - "Example value for brando:refusalStrategies 1"
  - "Example value for brando:refusalStrategies 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
