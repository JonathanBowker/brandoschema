# `brando:retrievableInLLM`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Policy :: retrievableInLLM

**Canonical URL:** `https://brandoschema.com/properties/retrievableInLLM`  
**Check for open issues.**

---

## Description

Boolean flag indicating whether this policy may be indexed or retrieved by language models.

---

## Values expected to be one of these types

* **Boolean**
* **List of Boolean values**

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
  "brando:retrievableInLLM": true
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

brando:retrievableInLLM: True
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
