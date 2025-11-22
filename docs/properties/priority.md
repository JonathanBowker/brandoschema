# `brando:priority`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Policy :: priority

**Canonical URL:** `https://brandoschema.com/properties/priority`  
**Check for open issues.**

---

## Description

Governance precedence for this policy when multiple rules could apply.

---

## Values expected to be one of these types

* **Integer**
* **List of Integer values**

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
  "brando:priority": 1
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

brando:priority: 1
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
