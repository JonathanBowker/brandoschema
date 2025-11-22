# `brando:dataSource`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > AutomationRule :: dataSource

**Canonical URL:** `https://brandoschema.com/properties/dataSource`  
**Check for open issues.**

---

## Description

API endpoint or data source providing metrics or signals.

---

## Values expected to be one of these types

* **URL**
* **List of URL values**

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
  "brando:dataSource": "https://example.com/example"
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

brando:dataSource: "https://example.com/example"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
