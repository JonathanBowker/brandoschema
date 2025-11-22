# `brando:enforcementLevel`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Multiple types :: enforcementLevel (brando:Policy, brando:AutomationRule)

**Canonical URL:** `https://brandoschema.com/properties/enforcementLevel`  
**Check for open issues.**

---

## Description

Indicates how strongly a policy or automation rule must be applied at runtime. Typical values include 'mandatory', 'advisory', and 'conditional' and may be extended by implementations.

---

## Values expected to be one of these types

* **Text**
* **List of Text values**

---

## Used on these types

* [brando:Policy](../types/policy.md)
* [brando:AutomationRule](../types/automation-rule.md)

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
  "brando:enforcementLevel": [
    "Example value for brando:enforcementLevel 1",
    "Example value for brando:enforcementLevel 2"
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

brando:enforcementLevel:
  - "Example value for brando:enforcementLevel 1"
  - "Example value for brando:enforcementLevel 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
