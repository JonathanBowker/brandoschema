# `brando:externalSystem`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Multiple types :: externalSystem (brando:Brand, brando:Context, brando:Policy, brando:Campaign, brando:AutomationRule)

**Canonical URL:** `https://brandoschema.com/properties/externalSystem`  
**Check for open issues.**

---

## Description

Links a brand, context, policy, campaign, or automation rule to the external tool or platform (e.g. Adobe GenStudio, Meta Ads Manager, Figma, CMS) that executes or consumes the corresponding brand rules. Typically points to a schema:SoftwareApplication node that describes the integration target.

---

## Values expected to be one of these types

* **schema:SoftwareApplication**
* **List of schema:SoftwareApplication values**

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
  "brando:externalSystem": {
    "@id": "https://example.com/example",
    "@type": "schema:SoftwareApplication"
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

brando:externalSystem: {'@id': 'https://example.com/example', '@type': 'schema:SoftwareApplication'}
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
