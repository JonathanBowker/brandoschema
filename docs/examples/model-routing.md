---
title: Model routing and governance flow
description: Example runtime flow for selecting a Brando BrandModel and enforcing policy before generation.
---

# Model routing and governance flow

This example shows how a Brand OS can route an AI request through Brando governance before generation.

---

## Flow

1. Resolve the active `brando:Brand`.
2. Resolve the current `brando:BrandApplication` and `brando:BrandTouchpoint`.
3. Load relevant `brando:Context` nodes for market, audience, channel, and journey stage.
4. Select an eligible `brando:BrandModel`.
5. Attach required `brando:Prompt` templates and `brando:Policy` nodes.
6. Run pre-flight validation before model execution.
7. Run post-generation validation before publishing or returning output.

---

## Minimal graph

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@graph": [
    {
      "@id": "https://example.com/brand/northstar",
      "@type": "brando:Brand",
      "schema:name": "Northstar"
    },
    {
      "@id": "https://example.com/applications/social-campaign",
      "@type": "brando:BrandApplication",
      "schema:name": "Social Campaign Production"
    },
    {
      "@id": "https://example.com/models/social-text-image",
      "@type": "brando:BrandModel",
      "schema:name": "Social text and image model profile"
    }
  ]
}
```

---

## See also

- [`brando:BrandModel`](../types/brand-model.md)
- [`brando:BrandApplication`](../types/brand-application.md)
- [`brando:Prompt`](../types/prompt.md)
- [`brando:Policy`](../types/policy.md)
