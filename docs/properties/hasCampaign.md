# `brando:hasCampaign`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Brand :: hasCampaign

**Canonical URL:** `https://brandoschema.com/properties/hasCampaign`  
**Check for open issues.**

---

## Description

Links a brand to time-bound campaigns that may temporarily adjust rules and tokens.

---

## Values expected to be one of these types

* **brando:Campaign**
* **List of brando:Campaign values**

---

## Used on these types

* [brando:Brand](../types/brand.md)

---

## Example (JSON-LD)

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@type": "brando:Brand",
  "schema:name": "Example Brand",
  "brando:hasCampaign": {
    "@id": "https://example.com/example",
    "@type": "brando:Campaign"
  }
}
```

---

## Example (YAML)

```yaml
@context:
  schema: https://schema.org/
  brando: https://brandoschema.com/

@type: brando:Brand
schema:name: Example Brand

brando:hasCampaign: {'@id': 'https://example.com/example', '@type': 'brando:Campaign'}
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
