# `brando:usesVisualToken`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Multiple types :: usesVisualToken (brando:Brand, brando:Context)

**Canonical URL:** `https://brandoschema.com/properties/usesVisualToken`  
**Check for open issues.**

---

## Description

Attaches a visual expression token defining how the brand looks in this scope.

---

## Values expected to be one of these types

* **brando:VisualToken**
* **List of brando:VisualToken values**

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
  "brando:usesVisualToken": {
    "@id": "https://example.com/example",
    "@type": "brando:VisualToken"
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

brando:usesVisualToken: {'@id': 'https://example.com/example', '@type': 'brando:VisualToken'}
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
