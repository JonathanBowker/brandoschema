# `brando:productItem`

*A Brando Property*
*Defined in the Brando<sup>®</sup> vocabulary.*

---

## Brand > Property > Multiple types :: productItem (brando:BrandedCategory, brando:Brand)

**Canonical URL:** `https://brandoschema.com/properties/productItem`
**Check for open issues.**

---

## Description

Links a brand or brand-specific product category to one or more individually identifiable sellable product items (e.g. SKUs, GTIN-based items, or internal product records).

`brando:productItem` is used to connect Brando’s brand and category layer to concrete product-level nodes (`brando:ProductItem`) so AI runtimes can apply brand tokens, policies, and guardrails at SKU level and reason over baskets, purchase history, and browsing context.

---

## Values expected to be one of these types

* **brando:ProductItem**
* **List of brando:ProductItem values**

---

## Used on these types

* [brando:BrandedCategory](../types/branded-category.md)
* [brando:Brand](../types/brand.md)

---

## Example (JSON-LD)

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@id": "https://example.com/brand/northstar/category/current-accounts",
  "@type": "brando:BrandedCategory",
  "schema:name": "Current Accounts",
  "brando:productItem": [
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
````

---

## Example (YAML)

```yaml
@context:
  schema: https://schema.org/
  brando: https://brandoschema.com/

@id: https://example.com/brand/northstar/category/current-accounts
@type: brando:BrandedCategory

schema:name: Current Accounts

brando:productItem:
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