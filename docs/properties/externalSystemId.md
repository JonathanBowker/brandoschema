# `brando:externalSystemId`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Multiple types :: externalSystemId (brando:Brand, brando:Context, brando:Policy, brando:Campaign, brando:AutomationRule)

**Canonical URL:** `https://brandoschema.com/properties/externalSystemId`  
**Check for open issues.**

---

## Description

Identifier for the corresponding object in an external tool or platform (e.g. brand, workspace, guideline set, ad account, or project ID). Used by Brand OS plugins to bind Brando Brand/Context/Policy/Campaign nodes to concrete entities in systems such as Adobe GenStudio, Meta Ads Manager, Figma, or internal CMSs.

---

## Values expected to be one of these types

* **Text**
* **List of Text values**

---

## Used on these types

* [brando:Brand](../types/brand.md)
* [brando:Context](../types/context.md)
* [brando:Policy](../types/policy.md)
* [brando:Campaign](../types/campaign.md)
* [brando:AutomationRule](../types/automation-rule.md)

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
  "brando:externalSystemId": [
    "Example value for brando:externalSystemId 1",
    "Example value for brando:externalSystemId 2"
  ]
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

brando:externalSystemId:
  - "Example value for brando:externalSystemId 1"
  - "Example value for brando:externalSystemId 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
