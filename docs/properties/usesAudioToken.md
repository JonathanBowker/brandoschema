# `brando:usesAudioToken`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Multiple types :: usesAudioToken (brando:Brand, brando:Context)

**Canonical URL:** `https://brandoschema.com/properties/usesAudioToken`  
**Check for open issues.**

---

## Description

Attaches an audio expression token defining how the brand sounds in this scope.

---

## Values expected to be one of these types

* **brando:AudioToken**
* **List of brando:AudioToken values**

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
  "brando:usesAudioToken": {
    "@id": "https://example.com/example",
    "@type": "brando:AudioToken"
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

brando:usesAudioToken: {'@id': 'https://example.com/example', '@type': 'brando:AudioToken'}
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
