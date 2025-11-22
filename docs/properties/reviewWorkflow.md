# `brando:reviewWorkflow`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Policy :: reviewWorkflow

**Canonical URL:** `https://brandoschema.com/properties/reviewWorkflow`  
**Check for open issues.**

---

## Description

Description of human and/or automated steps for reviewing content and policy changes.

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
  "brando:reviewWorkflow": [
    "Example value for brando:reviewWorkflow 1",
    "Example value for brando:reviewWorkflow 2"
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

brando:reviewWorkflow:
  - "Example value for brando:reviewWorkflow 1"
  - "Example value for brando:reviewWorkflow 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
