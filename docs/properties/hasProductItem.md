# `brando:hasProductItem`

*A Brando Property*
*Defined in the Brando<sup>®</sup> vocabulary.*

---

## Brand > Property > Multiple types :: hasProductItem (brando:Brand, brando:BrandedCategory)

**Canonical URL:** `https://brandoschema.com/properties/hasProductItem`
**Check for open issues.**

---

## Description

Links a brand or branded product/service category to one or more individually identifiable product items (e.g. SKUs, GTIN-level items, or internal product records) that inherit and specialise its tokens and governance rules.

`brando:hasProductItem` connects the brand/category layer to concrete `brando:ProductItem` nodes so AI runtimes can apply brand expression tokens and policies at product level, reason over baskets, and ground behaviour in actual items being viewed or purchased.

---

## Values expected to be one of these types

* **brando:ProductItem**
* **List of brando:ProductItem values**

---

## Used on these types

* [brando:Brand](../types/brand.md)
* [brando:BrandedCategory](../types/branded-category.md)

---

## Example (JSON-LD)

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@id": "https://example.com/brand/northstar",
  "@type": "brando:Brand",
  "schema:name": "Northstar",
  "brando:hasProductItem": [
    {
      "@id": "https://example.com/product-item/northstar/current-account/standard",
      "@type": "brando:ProductItem",
      "schema:name": "Northstar Standard Current Account",
      "schema:sku": "NS-CA-STD-001"
    },
    {
      "@id": "https://example.com/product-item/northstar/current-account/premium",
      "@type": "brando:ProductItem",
      "schema:name": "Northstar Premium Current Account",
      "schema:sku": "NS-CA-PRM-001"
    }
  ]
}
```

---

## Example (YAML)

```yaml
@context:
  schema: https://schema.org/
  brando: https://brandoschema.com/

@id: https://example.com/brand/northstar
@type: brando:Brand

schema:name: Northstar

brando:hasProductItem:
  - @id: https://example.com/product-item/northstar/current-account/standard
    @type: brando:ProductItem
    schema:name: Northstar Standard Current Account
    schema:sku: NS-CA-STD-001
  - @id: https://example.com/product-item/northstar/current-account/premium
    @type: brando:ProductItem
    schema:name: Northstar Premium Current Account
    schema:sku: NS-CA-PRM-001
```

---

## Acknowledgements

This element is based on the work of **Advanced Analytica**.
Many Type and Property definitions are inspired by extensive analysis of brand guidelines, governance systems, commerce schemas, and AI content-safety practices.
