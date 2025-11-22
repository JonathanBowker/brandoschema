# `brando:complianceTags`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Policy :: complianceTags

**Canonical URL:** `https://brandoschema.com/properties/complianceTags`  
**Check for open issues.**

---

## Description

Regulatory or legal tags such as GDPR, HIPAA, or FCA.

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
  "brando:complianceTags": [
    "Example value for brando:complianceTags 1",
    "Example value for brando:complianceTags 2"
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

brando:complianceTags:
  - "Example value for brando:complianceTags 1"
  - "Example value for brando:complianceTags 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
