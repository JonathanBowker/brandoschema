# `brando:tagline`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > VerbalToken :: tagline

**Canonical URL:** `https://brandoschema.com/properties/tagline`  
**Check for open issues.**

---

## Description

Primary tagline plus any sanctioned variants for this verbal token.

---

## Values expected to be one of these types

* **Text**
* **List of Text values**

---

## Used on these types

* [brando:VerbalToken](../types/verbal-token.md)

---

## Example (JSON-LD)

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@type": "brando:VerbalToken",
  "schema:name": "Example VerbalToken",
  "brando:tagline": [
    "Example value for brando:tagline 1",
    "Example value for brando:tagline 2"
  ]
}
```

---

## Example (YAML)

```yaml
@context:
  schema: https://schema.org/
  brando: https://brandoschema.com/

@type: brando:VerbalToken
schema:name: Example VerbalToken

brando:tagline:
  - "Example value for brando:tagline 1"
  - "Example value for brando:tagline 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
