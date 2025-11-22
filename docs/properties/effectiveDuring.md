# `brando:effectiveDuring`

*A Brando Property*  
*Defined in the brando section.*

---

## Thing > Intangible > Multiple types :: effectiveDuring (brando:Context, brando:Campaign, brando:Policy)

**Canonical URL:** `https://brandoschema.com/properties/effectiveDuring`  
**Check for open issues.**

---

## Description

Time window or schedule when this context, campaign, or policy is active, expressed as a structured JSON value.

---

## Values expected to be one of these types

* **Text**
* **List of Text values**

---

## Used on these types

* [brando:Context](../types/context.md)
* [brando:Campaign](../types/campaign.md)
* [brando:Policy](../types/policy.md)

---

## Example (JSON-LD)

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@type": "brando:Context",
  "schema:name": "Example Context",
  "brando:effectiveDuring": [
    "Example value for brando:effectiveDuring 1",
    "Example value for brando:effectiveDuring 2"
  ]
}
```

---

## Example (YAML)

```yaml
@context:
  schema: https://schema.org/
  brando: https://brandoschema.com/

@type: brando:Context
schema:name: Example Context

brando:effectiveDuring:
  - "Example value for brando:effectiveDuring 1"
  - "Example value for brando:effectiveDuring 2"
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.  
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, and AI content-safety practices.
