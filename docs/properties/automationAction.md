# `brando:automationAction`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > AutomationRule :: automationAction

**Canonical URL:** `https://brandoschema.com/properties/automationAction`  
**Check for open issues.**

---

## Description

Structured JSON describing actions taken when trigger conditions are met.

---

## Values expected to be one of these types

* **Text**
* **List of Text values**

---

## Used on these types

* [brando:AutomationRule](../types/automation-rule.md)

---

## Example (JSON-LD)

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@type": "brando:AutomationRule",
  "schema:name": "Example AutomationRule",
  "brando:automationAction": [
    "Example value for brando:automationAction 1",
    "Example value for brando:automationAction 2"
  ]
}
```

---

## Example (YAML)

```yaml
@context:
  schema: https://schema.org/
  brando: https://brandoschema.com/

@type: brando:AutomationRule
schema:name: Example AutomationRule

brando:automationAction:
  - "Example value for brando:automationAction 1"
  - "Example value for brando:automationAction 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
