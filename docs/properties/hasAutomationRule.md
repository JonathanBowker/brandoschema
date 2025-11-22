# `brando:hasAutomationRule`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Brand :: hasAutomationRule

**Canonical URL:** `https://brandoschema.com/properties/hasAutomationRule`  
**Check for open issues.**

---

## Description

Links a brand to automated governance rules and triggers.

---

## Values expected to be one of these types

* **brando:AutomationRule**
* **List of brando:AutomationRule values**

---

## Used on these types

* [brando:Brand](../types/brand.md)

---

## Example (JSON-LD)

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@type": "brando:Brand",
  "schema:name": "Example Brand",
  "brando:hasAutomationRule": {
    "@id": "https://example.com/example",
    "@type": "brando:AutomationRule"
  }
}
```

---

## Example (YAML)

```yaml
@context:
  schema: https://schema.org/
  brando: https://brandoschema.com/

@type: brando:Brand
schema:name: Example Brand

brando:hasAutomationRule: {'@id': 'https://example.com/example', '@type': 'brando:AutomationRule'}
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
