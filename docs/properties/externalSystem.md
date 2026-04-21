# `brando:externalSystem`

*A Brando Property*
*Defined in the Brando<sup>®</sup> vocabulary.*

---

## Brand > Property > Multiple types :: externalSystem (brando:Brand, brando:Context, brando:Policy, brando:Campaign, brando:AutomationRule)

**Canonical URL:** `https://brandoschema.com/properties/externalSystem`
**Check for open issues.**

---

## Description

Links a brand, context, policy, campaign, or automation rule to the external tool or platform that executes, manages, or consumes the corresponding brand rules.

`brando:externalSystem` typically points to a `schema:SoftwareApplication` node describing an integration target such as a CMS, DAM, product catalogue, advertising platform, design tool, or internal Brand OS.

For binding a Brando node to a specific native object inside that external system, use [`brando:externalSystemId`](./externalSystemId.md).

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
  "@id": "https://brandoschema.com/brand/example",
  "@type": "brando:Brand",
  "schema:name": "Example Brand",
  "brando:externalSystem": {
    "@id": "https://apps.example.com/brand-os",
    "@type": "schema:SoftwareApplication",
    "schema:name": "Brand Management Platform"
  }
}
```

---

## Example (YAML)

```yaml
@context:
  schema: https://schema.org/
  brando: https://brandoschema.com/

@id: https://brandoschema.com/brand/example
@type: brando:Brand
schema:name: Example Brand

brando:externalSystem:
  '@id': https://apps.example.com/brand-os
  '@type': schema:SoftwareApplication
  schema:name: Brand Management Platform
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
