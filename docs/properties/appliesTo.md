# `brando:appliesTo`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Multiple types :: appliesTo (brando:Context, brando:Policy, brando:AutomationRule)

**Canonical URL:** `https://brandoschema.com/properties/appliesTo`  
**Check for open issues.**

---

## Description

Optional scoping for which products, categories, personas, or channels this node applies to.

---

## Values expected to be one of these types

* **Text**
* **List of Text values**

---

## Used on these types

* [brando:Context](../types/context.md)
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
  "@type": "brando:Context",
  "schema:name": "Example Context",
  "brando:appliesTo": [
    "Example value for brando:appliesTo 1",
    "Example value for brando:appliesTo 2"
  ]
}
```

---

## Example (YAML)

```yaml
@context:
  schema: https://schema.org/
  brando: https://brandoschema.com/

@type: brando:Context
schema:name: Example Context

brando:appliesTo:
  - "Example value for brando:appliesTo 1"
  - "Example value for brando:appliesTo 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
