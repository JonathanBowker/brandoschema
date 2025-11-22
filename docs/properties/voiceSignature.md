# `brando:voiceSignature`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > AudioToken :: voiceSignature

**Canonical URL:** `https://brandoschema.com/properties/voiceSignature`  
**Check for open issues.**

---

## Description

Description of the desired voice profile for TTS or voice agents.

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
  "brando:voiceSignature": [
    "Example value for brando:voiceSignature 1",
    "Example value for brando:voiceSignature 2"
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

brando:voiceSignature:
  - "Example value for brando:voiceSignature 1"
  - "Example value for brando:voiceSignature 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
