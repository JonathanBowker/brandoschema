# `brando:visualReferenceLink`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > VisualToken :: visualReferenceLink

**Canonical URL:** `https://brandoschema.com/properties/visualReferenceLink`  
**Check for open issues.**

---

## Description

URL pointing to full visual identity guidelines or design system documentation.

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
  "brando:visualReferenceLink": "https://example.com/example"
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

brando:visualReferenceLink: "https://example.com/example"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
