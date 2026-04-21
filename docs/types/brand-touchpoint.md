---
title: brando:BrandTouchpoint
description: Reference for modelling a channel, surface, or placement where Brando-governed brand behaviour is executed.
---

# `brando:BrandTouchpoint`

A brand touchpoint is a concrete surface, channel, or placement where brand behaviour appears.

Examples include a homepage hero, product detail page, email subject line, support-chat response, paid social creative, in-app notification, retail shelf label, or voice assistant response.

---

## Usage

Use `brando:BrandTouchpoint` to make prompts and model profiles channel-aware. A touchpoint narrows a broader brand application to a specific execution surface.

| Relationship | Purpose |
| --- | --- |
| `brando:BrandApplication` | The broader use case the touchpoint belongs to. |
| `brando:Prompt` | Touchpoint-specific prompt or instruction template. |
| `brando:Context` | Audience, region, journey stage, or channel context. |
| `brando:Policy` | Rules that apply at this exact surface. |

---

## Example

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@id": "https://example.com/touchpoints/product-page-hero",
  "@type": "brando:BrandTouchpoint",
  "schema:name": "Product page hero",
  "schema:description": "Above-the-fold product copy and image treatment."
}
```

---

## See also

- [`brando:BrandApplication`](brand-application.md)
- [`brando:Prompt`](prompt.md)
- [`brando:Context`](context.md)
- [`brando:Policy`](policy.md)
