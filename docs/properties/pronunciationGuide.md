# `brando:pronunciationGuide`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > AudioToken :: pronunciationGuide

**Canonical URL:** `https://brandoschema.com/properties/pronunciationGuide`  
**Check for open issues.**

---

## Description

Standardised pronunciation notes (e.g. IPA or phonetic spelling) for brand names and key terms.

---

## Values expected to be one of these types

* **Text**
* **List of Text values**

---

## Used on these types

* [brando:AudioToken](../types/audio-token.md)

---

## Example (JSON-LD)

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@type": "brando:AudioToken",
  "schema:name": "Example AudioToken",
  "brando:pronunciationGuide": [
    "Example value for brando:pronunciationGuide 1",
    "Example value for brando:pronunciationGuide 2"
  ]
}
```

---

## Example (YAML)

```yaml
@context:
  schema: https://schema.org/
  brando: https://brandoschema.com/

@type: brando:AudioToken
schema:name: Example AudioToken

brando:pronunciationGuide:
  - "Example value for brando:pronunciationGuide 1"
  - "Example value for brando:pronunciationGuide 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
