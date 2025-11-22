# `brando:updatePolicy`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Policy :: updatePolicy

**Canonical URL:** `https://brandoschema.com/properties/updatePolicy`  
**Check for open issues.**

---

## Description

Rules for how often, by whom, and under what process policies are updated.

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
  "brando:updatePolicy": [
    "Example value for brando:updatePolicy 1",
    "Example value for brando:updatePolicy 2"
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

brando:updatePolicy:
  - "Example value for brando:updatePolicy 1"
  - "Example value for brando:updatePolicy 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
