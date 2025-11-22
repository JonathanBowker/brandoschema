# `brando:visualToken`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > VisualToken :: visualToken

**Canonical URL:** `https://brandoschema.com/properties/visualToken`  
**Check for open issues.**

---

## Description

Core design tokens such as spacing, radius, and elevation.

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
  "brando:visualToken": [
    "Example value for brando:visualToken 1",
    "Example value for brando:visualToken 2"
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

brando:visualToken:
  - "Example value for brando:visualToken 1"
  - "Example value for brando:visualToken 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
