# `brando:imageryStyles`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > VisualToken :: imageryStyles

**Canonical URL:** `https://brandoschema.com/properties/imageryStyles`  
**Check for open issues.**

---

## Description

Guidance on photography, illustration, and composition style.

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
  "brando:imageryStyles": [
    "Example value for brando:imageryStyles 1",
    "Example value for brando:imageryStyles 2"
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

brando:imageryStyles:
  - "Example value for brando:imageryStyles 1"
  - "Example value for brando:imageryStyles 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
