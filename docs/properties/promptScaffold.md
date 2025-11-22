# `brando:promptScaffold`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > VerbalToken :: promptScaffold

**Canonical URL:** `https://brandoschema.com/properties/promptScaffold`  
**Check for open issues.**

---

## Description

Reusable instruction block or template for priming language models.

---

## Values expected to be one of these types

* **Text**
* **List of Text values**

---

## Used on these types

* [brando:VerbalToken](../types/verbal-token.md)

---

## Example (JSON-LD)

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@type": "brando:VerbalToken",
  "schema:name": "Example VerbalToken",
  "brando:promptScaffold": [
    "Example value for brando:promptScaffold 1",
    "Example value for brando:promptScaffold 2"
  ]
}
```

---

## Example (YAML)

```yaml
@context:
  schema: https://schema.org/
  brando: https://brandoschema.com/

@type: brando:VerbalToken
schema:name: Example VerbalToken

brando:promptScaffold:
  - "Example value for brando:promptScaffold 1"
  - "Example value for brando:promptScaffold 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
