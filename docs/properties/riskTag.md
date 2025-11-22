# `brando:riskTag`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Multiple types :: riskTag (brando:Policy, brando:AutomationRule)

**Canonical URL:** `https://brandoschema.com/properties/riskTag`  
**Check for open issues.**

---

## Description

One or more lightweight tags describing the primary risk domains addressed by a policy or automation rule (e.g. 'regulatory', 'tone', 'brand-safety', 'platform-policy'). Intended for querying, reporting, and governance dashboards.

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
  "brando:riskTag": [
    "Example value for brando:riskTag 1",
    "Example value for brando:riskTag 2"
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

brando:riskTag:
  - "Example value for brando:riskTag 1"
  - "Example value for brando:riskTag 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
