# `brando:monitoredMetric`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > AutomationRule :: monitoredMetric

**Canonical URL:** `https://brandoschema.com/properties/monitoredMetric`  
**Check for open issues.**

---

## Description

Structured JSON describing the metric being monitored, thresholds, and operators.

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
  "brando:monitoredMetric": [
    "Example value for brando:monitoredMetric 1",
    "Example value for brando:monitoredMetric 2"
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

brando:monitoredMetric:
  - "Example value for brando:monitoredMetric 1"
  - "Example value for brando:monitoredMetric 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
