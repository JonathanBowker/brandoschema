# `brando:campaignName`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Campaign :: campaignName

**Canonical URL:** `https://brandoschema.com/properties/campaignName`  
**Check for open issues.**

---

## Description

Human-readable name of a marketing or communications campaign.

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
  "brando:campaignName": [
    "Example value for brando:campaignName 1",
    "Example value for brando:campaignName 2"
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

brando:campaignName:
  - "Example value for brando:campaignName 1"
  - "Example value for brando:campaignName 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
