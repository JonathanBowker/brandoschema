# `brando:audienceSegment`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Context :: audienceSegment

**Canonical URL:** `https://brandoschema.com/properties/audienceSegment`  
**Check for open issues.**

---

## Description

Strategic grouping of individuals who share needs or characteristics relevant to this context.

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
  "brando:audienceSegment": [
    "Example value for brando:audienceSegment 1",
    "Example value for brando:audienceSegment 2"
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

brando:audienceSegment:
  - "Example value for brando:audienceSegment 1"
  - "Example value for brando:audienceSegment 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
