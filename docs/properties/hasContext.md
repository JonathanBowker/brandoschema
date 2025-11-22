# `brando:hasContext`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Brand :: hasContext

**Canonical URL:** `https://brandoschema.com/properties/hasContext`  
**Check for open issues.**

---

## Description

Links a brand to one or more activation contexts in which it operates.

---

## Values expected to be one of these types

* **brando:Context**
* **List of brando:Context values**

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
  "brando:hasContext": {
    "@id": "https://example.com/example",
    "@type": "brando:Context"
  }
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

brando:hasContext: {'@id': 'https://example.com/example', '@type': 'brando:Context'}
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
