# `brando:colourPalette`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > VisualToken :: colourPalette

**Canonical URL:** `https://brandoschema.com/properties/colourPalette`  
**Check for open issues.**

---

## Description

Structured description of the brand's colour system, including roles and values.

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
  "brando:colourPalette": [
    "Example value for brando:colourPalette 1",
    "Example value for brando:colourPalette 2"
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

brando:colourPalette:
  - "Example value for brando:colourPalette 1"
  - "Example value for brando:colourPalette 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
