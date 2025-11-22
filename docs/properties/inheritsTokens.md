# `brando:inheritsTokens`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Brand :: inheritsTokens

**Canonical URL:** `https://brandoschema.com/properties/inheritsTokens`  
**Check for open issues.**

---

## Description

Structured definition of which expression tokens (verbal, visual, audio) are inherited and how.

---

## Values expected to be one of these types

* **Text**
* **List of Text values**

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
  "brando:inheritsTokens": [
    "Example value for brando:inheritsTokens 1",
    "Example value for brando:inheritsTokens 2"
  ]
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

brando:inheritsTokens:
  - "Example value for brando:inheritsTokens 1"
  - "Example value for brando:inheritsTokens 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
