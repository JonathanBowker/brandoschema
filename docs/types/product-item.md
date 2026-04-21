---
title: brando:ProductItem
description: Reference for the brando:ProductItem class in the Brand Oracle (Brando) schema vocabulary.
---

# `brando:ProductItem`

An individually identifiable product or service item that can inherit and specialise brand tokens, context, and policy.

`brando:ProductItem` is used when a brand needs product-level governance rather than only category-level governance. It can represent SKUs, GTIN-level items, product records, packages, or internal product entities that need their own voice, claims, compliance rules, or channel-specific behaviour.

---

## Term definition

- **IRI:** `brando:ProductItem`
- **Type:** `owl:Class`
- **Aligned with:** `schema:Product` and GS1 product modelling patterns

Use this type below `brando:Brand` and `brando:BrandedCategory` when product-specific rules need to be machine-readable.

---

## Common properties

| Property | Purpose |
| --- | --- |
| `schema:name` | Human-readable product name. |
| `schema:sku` | Internal SKU or product identifier. |
| `schema:gtin` | GTIN, when available. |
| `brando:usesVerbal` | Product-specific verbal identity or copy rules. |
| `brando:usesVisual` | Product-specific visual identity or merchandising treatment. |
| `brando:usesAudio` | Product-specific audio identity, where relevant. |
| `brando:hasPolicy` | Product-level governance, claims, and compliance policy. |
| `brando:externalSystem` | External platform that manages or consumes this item. |
| `brando:externalSystemId` | Native ID for this item in an external system. |

---

## Example

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@id": "https://example.com/product-item/northstar/current-account/standard",
  "@type": "brando:ProductItem",
  "schema:name": "Northstar Standard Current Account",
  "schema:sku": "NS-CA-STD-001",
  "brando:externalSystemId": "pim:NS-CA-STD-001"
}
```

---

## See also

- [`brando:Brand`](brand.md)
- [`brando:BrandedCategory`](branded-category.md)
- [`brando:hasProductItem`](../properties/hasProductItem.md)
- [`brando:productItem`](../properties/productItem.md)
