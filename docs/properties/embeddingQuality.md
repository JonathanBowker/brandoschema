# `brando:embeddingQuality`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Policy :: embeddingQuality

**Canonical URL:** `https://brandoschema.com/properties/embeddingQuality`  
**Check for open issues.**

---

## Description

Qualitative or scored assessment of how well this content performs in vector search or RAG.

---

## Values expected to be one of these types

* **Text**
* **List of Text values**

---

## Used on these types

* [brando:Policy](../types/policy.md)

---

## Example (JSON-LD)

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@type": "brando:Policy",
  "schema:name": "Example Policy",
  "brando:embeddingQuality": [
    "Example value for brando:embeddingQuality 1",
    "Example value for brando:embeddingQuality 2"
  ]
}
```

---

## Example (YAML)

```yaml
@context:
  schema: https://schema.org/
  brando: https://brandoschema.com/

@type: brando:Policy
schema:name: Example Policy

brando:embeddingQuality:
  - "Example value for brando:embeddingQuality 1"
  - "Example value for brando:embeddingQuality 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
