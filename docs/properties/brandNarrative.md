# `brando:brandNarrative`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Brand :: brandNarrative

**Canonical URL:** `https://brandoschema.com/properties/brandNarrative`  
**Check for open issues.**

---

## Description

Longer-form narrative that explains the brand's origin, evolution, and purpose.

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
  "brando:brandNarrative": [
    "Example value for brando:brandNarrative 1",
    "Example value for brando:brandNarrative 2"
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

brando:brandNarrative:
  - "Example value for brando:brandNarrative 1"
  - "Example value for brando:brandNarrative 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
