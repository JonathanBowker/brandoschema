# `brando:audioLogo`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > AudioToken :: audioLogo

**Canonical URL:** `https://brandoschema.com/properties/audioLogo`  
**Check for open issues.**

---

## Description

URI pointing to the brand's sonic logo or audio mark.

---

## Values expected to be one of these types

* **URL**
* **List of URL values**

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
  "brando:audioLogo": "https://example.com/example"
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

brando:audioLogo: "https://example.com/example"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
