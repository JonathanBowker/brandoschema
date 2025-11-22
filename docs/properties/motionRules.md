# `brando:motionRules`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > VisualToken :: motionRules

**Canonical URL:** `https://brandoschema.com/properties/motionRules`  
**Check for open issues.**

---

## Description

Principles for animation, transitions, and micro-interactions.

---

## Values expected to be one of these types

* **Text**
* **List of Text values**

---

## Used on these types

* [brando:VisualToken](../types/visual-token.md)

---

## Example (JSON-LD)

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@type": "brando:VisualToken",
  "schema:name": "Example VisualToken",
  "brando:motionRules": [
    "Example value for brando:motionRules 1",
    "Example value for brando:motionRules 2"
  ]
}
```

---

## Example (YAML)

```yaml
@context:
  schema: https://schema.org/
  brando: https://brandoschema.com/

@type: brando:VisualToken
schema:name: Example VisualToken

brando:motionRules:
  - "Example value for brando:motionRules 1"
  - "Example value for brando:motionRules 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
