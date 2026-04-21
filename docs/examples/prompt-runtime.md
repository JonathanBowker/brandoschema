---
title: Prompt governance and runtime flow
description: Example runtime flow for resolving Brando prompts, context, and policies before AI generation.
---

# Prompt governance and runtime flow

This example shows how a governed prompt is assembled from Brando graph components at runtime.

---

## Flow

1. Resolve the active `brando:Prompt` for the application and touchpoint.
2. Load inherited brand, context, and policy nodes.
3. Merge verbal, visual, or audio tokens that apply to the requested modality.
4. Bind runtime variables such as locale, product, campaign, and audience.
5. Validate required policies before sending instructions to the model.
6. Validate the generated output against mandatory and advisory policies.

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
      "@id": "https://example.com/prompts/social-text-en-gb",
      "@type": "brando:Prompt",
      "schema:name": "Social post prompt EN-GB"
    },
    {
      "@id": "https://example.com/touchpoints/social-caption",
      "@type": "brando:BrandTouchpoint",
      "schema:name": "Social caption"
    }
  ]
}
```

---

## See also

- [`brando:Prompt`](../types/prompt.md)
- [`brando:BrandTouchpoint`](../types/brand-touchpoint.md)
- [`brando:Context`](../types/context.md)
- [`brando:Policy`](../types/policy.md)
