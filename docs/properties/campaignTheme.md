# `brando:campaignTheme`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Campaign :: campaignTheme

**Canonical URL:** `https://brandoschema.com/properties/campaignTheme`  
**Check for open issues.**

---

## Description

Central message or creative theme for the campaign.

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
  "brando:campaignTheme": [
    "Example value for brando:campaignTheme 1",
    "Example value for brando:campaignTheme 2"
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

brando:campaignTheme:
  - "Example value for brando:campaignTheme 1"
  - "Example value for brando:campaignTheme 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
