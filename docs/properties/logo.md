# `brando:logo`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > VisualToken :: logo

**Canonical URL:** `https://brandoschema.com/properties/logo`  
**Check for open issues.**

---

## Description

Canonical reference URL to the primary logo asset or logo set.

---

## Values expected to be one of these types

* **URL**
* **List of URL values**

---

## Used on these types

* [brando:VisualToken](../types/visual-token.md)

---

## Example (JSON-LD)

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@type": "brando:VisualToken",
  "schema:name": "Example VisualToken",
  "brando:logo": "https://example.com/example"
}
```

---

## Example (YAML)

```yaml
@context:
  schema: https://schema.org/
  brando: https://brandoschema.com/

@type: brando:VisualToken
schema:name: Example VisualToken

brando:logo: "https://example.com/example"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
