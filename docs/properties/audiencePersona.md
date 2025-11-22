# `brando:audiencePersona`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Context :: audiencePersona

**Canonical URL:** `https://brandoschema.com/properties/audiencePersona`  
**Check for open issues.**

---

## Description

Persona-style archetypes representing typical users in this context.

---

## Values expected to be one of these types

* **Text**
* **List of Text values**

---

## Used on these types

* [brando:Context](../types/context.md)

---

## Example (JSON-LD)

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@type": "brando:Context",
  "schema:name": "Example Context",
  "brando:audiencePersona": [
    "Example value for brando:audiencePersona 1",
    "Example value for brando:audiencePersona 2"
  ]
}
```

---

## Example (YAML)

```yaml
@context:
  schema: https://schema.org/
  brando: https://brandoschema.com/

@type: brando:Context
schema:name: Example Context

brando:audiencePersona:
  - "Example value for brando:audiencePersona 1"
  - "Example value for brando:audiencePersona 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
