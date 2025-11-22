# `brando:visualUsageGuidelines`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > VisualToken :: visualUsageGuidelines

**Canonical URL:** `https://brandoschema.com/properties/visualUsageGuidelines`  
**Check for open issues.**

---

## Description

Do's and don'ts for applying logos, colours, typography, and imagery.

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
  "brando:visualUsageGuidelines": [
    "Example value for brando:visualUsageGuidelines 1",
    "Example value for brando:visualUsageGuidelines 2"
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

brando:visualUsageGuidelines:
  - "Example value for brando:visualUsageGuidelines 1"
  - "Example value for brando:visualUsageGuidelines 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
