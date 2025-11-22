# `brando:hasPolicy`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Multiple types :: hasPolicy (brando:Brand, brando:Context)

**Canonical URL:** `https://brandoschema.com/properties/hasPolicy`  
**Check for open issues.**

---

## Description

Attaches governance, safety, and compliance policies to a brand or context.

---

## Values expected to be one of these types

* **brando:Policy**
* **List of brando:Policy values**

---

## Used on these types

* [brando:Brand](../types/brand.md)
* [brando:Context](../types/context.md)

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
  "brando:hasPolicy": {
    "@id": "https://example.com/example",
    "@type": "brando:Policy"
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

brando:hasPolicy: {'@id': 'https://example.com/example', '@type': 'brando:Policy'}
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
