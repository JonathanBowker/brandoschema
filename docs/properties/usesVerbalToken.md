# `brando:usesVerbalToken`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Multiple types :: usesVerbalToken (brando:Brand, brando:Context)

**Canonical URL:** `https://brandoschema.com/properties/usesVerbalToken`  
**Check for open issues.**

---

## Description

Attaches a verbal expression token defining how the brand speaks in this scope.

---

## Values expected to be one of these types

* **brando:VerbalToken**
* **List of brando:VerbalToken values**

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
  "brando:usesVerbalToken": {
    "@id": "https://example.com/example",
    "@type": "brando:VerbalToken"
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

brando:usesVerbalToken: {'@id': 'https://example.com/example', '@type': 'brando:VerbalToken'}
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
