---
title: brando:BrandApplication
description: Reference for modelling a brand application served by Brando runtime configuration.
---

# `brando:BrandApplication`

A brand application is a governed use case where brand rules are executed by people, systems, or AI runtimes.

Examples include social post production, product-detail-page copy, support chat, campaign image generation, CRM email, retail-media ads, and internal brand assistant workflows.

---

## Usage

Use `brando:BrandApplication` to define what a runtime is for before binding it to prompts, model profiles, policies, contexts, and touchpoints.

| Relationship | Purpose |
| --- | --- |
| `brando:BrandModel` | Defines which AI runtime profile may serve the application. |
| `brando:Prompt` | Defines how the application should instruct AI systems. |
| `brando:Policy` | Defines governance rules for the application. |
| `brando:Context` | Defines channel, market, audience, and scenario constraints. |
| `brando:BrandTouchpoint` | Defines the concrete surface or placement where the application runs. |

---

## Example

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@id": "https://example.com/applications/social-campaign",
  "@type": "brando:BrandApplication",
  "schema:name": "Social Campaign Production",
  "schema:description": "Governed text and image generation for social campaigns."
}
```

---

## See also

- [`brando:BrandModel`](brand-model.md)
- [`brando:Prompt`](prompt.md)
- [`brando:BrandTouchpoint`](brand-touchpoint.md)
- [`brando:Policy`](policy.md)
