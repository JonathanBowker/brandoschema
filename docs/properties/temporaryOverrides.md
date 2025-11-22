# `brando:temporaryOverrides`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Campaign :: temporaryOverrides

**Canonical URL:** `https://brandoschema.com/properties/temporaryOverrides`  
**Check for open issues.**

---

## Description

Structured JSON describing temporary modifications to brand rules during this campaign.

---

## Values expected to be one of these types

* **Text**
* **List of Text values**

---

## Used on these types

* [brando:Campaign](../types/campaign.md)

---

## Example (JSON-LD)

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@type": "brando:Campaign",
  "schema:name": "Example Campaign",
  "brando:temporaryOverrides": [
    "Example value for brando:temporaryOverrides 1",
    "Example value for brando:temporaryOverrides 2"
  ]
}
```

---

## Example (YAML)

```yaml
@context:
  schema: https://schema.org/
  brando: https://brandoschema.com/

@type: brando:Campaign
schema:name: Example Campaign

brando:temporaryOverrides:
  - "Example value for brando:temporaryOverrides 1"
  - "Example value for brando:temporaryOverrides 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
