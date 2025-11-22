# `brando:triggerType`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > AutomationRule :: triggerType

**Canonical URL:** `https://brandoschema.com/properties/triggerType`  
**Check for open issues.**

---

## Description

Type of event or condition that activates this automation rule.

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
  "brando:triggerType": [
    "Example value for brando:triggerType 1",
    "Example value for brando:triggerType 2"
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

brando:triggerType:
  - "Example value for brando:triggerType 1"
  - "Example value for brando:triggerType 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
