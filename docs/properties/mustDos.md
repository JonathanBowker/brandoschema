# `brando:mustDos`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > VerbalToken :: mustDos

**Canonical URL:** `https://brandoschema.com/properties/mustDos`  
**Check for open issues.**

---

## Description

Required behaviours and inclusions this verbal token must follow.

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
  "brando:mustDos": [
    "Example value for brando:mustDos 1",
    "Example value for brando:mustDos 2"
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

brando:mustDos:
  - "Example value for brando:mustDos 1"
  - "Example value for brando:mustDos 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
