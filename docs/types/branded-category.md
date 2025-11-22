---
title: brando:BrandedCategory
description: Reference for the brando:BrandedCategory class in the Brand Oracle (Brando) schema vocabulary v1.3.
---

# `brando:BrandedCategory`

Product or service category overlaid with brand-specific language, constraints, and hierarchy.

> **rdfs:comment**  
> *Product or service category overlaid with brand-specific language, constraints, and hierarchy. May be aligned to GS1 Global Product Classification (GPC) and other standards such as UNSPSC and Google Product Taxonomy.*

---

## Term definition

- **IRI:** `brando:BrandedCategory`
- **Type:** `owl:Class`
- **Superclass:** `schema:Intangible`
- **Alignments:**
    - `rdfs:seeAlso` → `gs1:Product`
    - `rdfs:seeAlso` → `gs1:AdditionalProductClassificationDetails`
- **Defined in:** `brando:` (Brando Schema Vocabulary v1.3)

`brando:BrandedCategory` represents a **brand-level product or service category** that:

- uses the brand’s own **category language**,
- can carry **category-specific vocabulary and rules**, and
- can be **aligned to external classification schemes** (GS1 GPC, UNSPSC, Google Product Taxonomy).

It is the main way Brando connects a Brand Knowledge Graph to **commerce, ads, and marketplace taxonomies** while preserving brand semantics.

---

## Relationships

### Inbound: linked from `brando:Brand`

Branded categories are attached to brands via:

- **`brando:hasProductCategory`**
    - **Type:** `owl:ObjectProperty`
    - **Domain:** `brando:Brand`
    - **Range:** `brando:BrandedCategory`
    - **Comment:** *Links a brand to its branded product or service category taxonomy nodes.*

Example (brand → category link):

```jsonld
{
  "@id": "https://example.com/brand/northstar",
  "@type": "brando:Brand",
  "schema:name": "Northstar Bank",
  "brando:hasProductCategory": {
    "@id": "https://example.com/brand/northstar/categories/savings-accounts"
  }
}
```

You will typically define multiple `brando:BrandedCategory` nodes for a brand, then use `brando:hasProductCategory` to connect them.

---

## Key properties (domain = `brando:BrandedCategory`)

The following properties have `brando:BrandedCategory` in their `rdfs:domain`.

### 1. Category naming and internal structure

| Property IRI                 | Range        | Type                   | rdfs:comment                                                                    |
| ---------------------------- | ------------ | ---------------------- | ------------------------------------------------------------------------------- |
| `brando:productCategoryName` | `xsd:string` | `owl:DatatypeProperty` | *Name of a product or service category with associated brand tokens and rules.* |
| `brando:categoryDepartment`  | `xsd:string` | `owl:DatatypeProperty` | *Department-level categorisation within a product category.*                    |
| `brando:categoryClass`       | `xsd:string` | `owl:DatatypeProperty` | *Class-level categorisation within a department.*                               |
| `brando:categoryItemType`    | `xsd:string` | `owl:DatatypeProperty` | *Specific item type within a category class.*                                   |

**Usage notes (non-normative):**

* `productCategoryName` is the **brand-facing label** for the category (what people call it internally/externally).
* `categoryDepartment`, `categoryClass`, and `categoryItemType` let you model **hierarchy within your brand**:

  * e.g. `"Banking"` (department) → `"Deposit accounts"` (class) → `"Savings accounts"` (item type).
* These fields are **purely brand-side** – you still use the alignment properties (below) for GS1/UNSPSC/Google.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/categories/savings-accounts",
  "@type": "brando:BrandedCategory",
  "brando:productCategoryName": "Savings accounts",
  "brando:categoryDepartment": "Banking",
  "brando:categoryClass": "Deposit accounts",
  "brando:categoryItemType": "Savings accounts"
}
```

---

### 2. Category-level vocabulary

| Property IRI                     | Range        | Type                   | rdfs:comment                                                                          |
| -------------------------------- | ------------ | ---------------------- | ------------------------------------------------------------------------------------- |
| `brando:categoryApprovedTerms`   | `xsd:string` | `owl:DatatypeProperty` | *Terms encouraged for this category, layered on top of brand-level approved terms.*   |
| `brando:categoryProhibitedTerms` | `xsd:string` | `owl:DatatypeProperty` | *Terms prohibited for this category, layered on top of brand-level prohibited terms.* |

**Usage notes (non-normative):**

* These properties let you **refine vocabulary per category** on top of:

    * global `brando:approvedTerms` / `brando:prohibitedTerms` on `brando:VerbalToken` or `brando:Brand`.
* Good for:

    * regulated categories,
    * sensitive product lines,
    * categories with specialised language.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/categories/savings-accounts",
  "@type": "brando:BrandedCategory",
  "brando:productCategoryName": "Savings accounts",
  "brando:categoryApprovedTerms": [
    "savings goals",
    "interest rate",
    "deposit"
  ],
  "brando:categoryProhibitedTerms": [
    "no-risk investment",
    "get rich quick"
  ]
}
```

At runtime, your Brand OS can merge:

* brand-level verbal rules and
* `categoryApprovedTerms` / `categoryProhibitedTerms`

to produce effective constraints for content related to that category.

---

### 3. GS1 GPC alignment

| Property IRI                    | Range            | Type                   | rdfs:comment                                                                                                             |
| ------------------------------- | ---------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `brando:gpcCategoryCode`        | `xsd:string`     | `owl:DatatypeProperty` | *GS1 Global Product Classification (GPC) brick code associated with this branded category.*                              |
| `brando:gpcCategoryDescription` | `rdf:langString` | `owl:DatatypeProperty` | *Human-readable description of the GS1 Global Product Classification (GPC) brick associated with this branded category.* |

**Usage notes (non-normative):**

* Use these properties to **link your brand taxonomy to GS1 GPC**:

    * `gpcCategoryCode` → numeric/alpha GPC brick code,
    * `gpcCategoryDescription` → label/description from GS1.
* These are particularly useful when:

    * you participate in GS1-driven data sharing,
    * or want AI/search to honour GS1 semantics.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/categories/savings-accounts",
  "@type": "brando:BrandedCategory",
  "brando:productCategoryName": "Savings accounts",
  "brando:gpcCategoryCode": "43191500",
  "brando:gpcCategoryDescription": "Savings and investment accounts (example only)"
}
```

*(The code above is illustrative, not a canonical GS1 value.)*

---

### 4. UNSPSC alignment

| Property IRI        | Range        | Type                   | rdfs:comment (truncated in vocab, summarised)                                                                                                                                  |
| ------------------- | ------------ | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `brando:unspscCode` | `xsd:string` | `owl:DatatypeProperty` | *UNSPSC (United Nations Standard Products and Services Code) associated with this category to align brand-defined categories with procurement and B2B classification schemes.* |

Use `brando:unspscCode` when you need to align your branded categories with **UNSPSC** for:

* procurement systems,
* B2B marketplaces,
* analytics that rely on UNSPSC segments/families/classes.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/categories/savings-accounts",
  "@type": "brando:BrandedCategory",
  "brando:productCategoryName": "Savings accounts",
  "brando:unspscCode": "84131500"
}
```

---

### 5. Google Product Taxonomy alignment

| Property IRI                     | Range        | Type                   | rdfs:comment (truncated in vocab, summarised)                                                                                                          |
| -------------------------------- | ------------ | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `brando:googleProductCategoryId` | `xsd:string` | `owl:DatatypeProperty` | *Google Product Taxonomy category identifier associated with this category to align brand-level categories and Google Merchant Center classification.* |

Use `brando:googleProductCategoryId` to connect your BrandedCategory to **Google Product Taxonomy**, especially when:

* feeding Google Merchant Center,
* configuring Shopping campaigns,
* aligning with other Google surfaces.

The value can be:

* an ID (`"188"`),
* or a full category path string, depending on your internal convention.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/categories/savings-accounts",
  "@type": "brando:BrandedCategory",
  "brando:productCategoryName": "Savings accounts",
  "brando:googleProductCategoryId": "Finance > Banking Services"
}
```

---

### 6. GTIN and product-level scoping

`brando:BrandedCategory` shares some scope properties with `brando:Policy`:

| Property IRI              | Range         | Type                   | rdfs:comment                                                           |
| ------------------------- | ------------- | ---------------------- | ---------------------------------------------------------------------- |
| `brando:appliesToGTIN`    | `xsd:string`  | `owl:DatatypeProperty` | *GTIN(s) for which this branded category or policy is applicable.*     |
| `brando:appliesToProduct` | `gs1:Product` | `owl:ObjectProperty`   | *Links a branded category or policy to one or more GS1 Product nodes.* |

**Usage notes (non-normative):**

* Use `appliesToGTIN` when you know specific GTINs that belong to this BrandedCategory.
* Use `appliesToProduct` when you maintain explicit `gs1:Product` nodes in your graph and want to link them.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/categories/savings-accounts",
  "@type": "brando:BrandedCategory",
  "brando:productCategoryName": "Savings accounts",
  "brando:appliesToGTIN": [
    "12345678901234",
    "12345678905678"
  ],
  "brando:appliesToProduct": {
    "@id": "https://example.com/gs1/product/12345678901234",
    "@type": "gs1:Product"
  }
}
```

---

### 7. Files and supporting material

These properties are shared across several Brando types, including `brando:BrandedCategory`:

| Property IRI              | Range                | Type                 | rdfs:comment (truncated in vocab, summarised)                                                                                                                          |
| ------------------------- | -------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `brando:downloadableFile` | `schema:MediaObject` | `owl:ObjectProperty` | *Links a brand, token, context, campaign, or policy node to one or more media objects representing the most up-to-date creative files exposed by the Brand OS or DAM.* |
| `brando:supportingFile`   | `schema:MediaObject` | `owl:ObjectProperty` | *Links a brand, token, context, campaign, or policy node to non-canonical files that are helpful for production but are not the primary source-of-truth asset.*        |

For `brando:BrandedCategory`, you can use these to point at:

* category-specific guidelines,
* product photography packs,
* merchandising guides.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/categories/savings-accounts",
  "@type": "brando:BrandedCategory",
  "brando:productCategoryName": "Savings accounts",
  "brando:downloadableFile": {
    "@id": "https://assets.example.com/northstar/categories/savings-accounts-guidelines.pdf",
    "@type": "schema:MediaObject",
    "schema:name": "Savings Accounts Brand Guidelines (PDF)",
    "schema:contentUrl": "https://assets.example.com/northstar/categories/savings-accounts-guidelines.pdf"
  },
  "brando:supportingFile": {
    "@id": "https://assets.example.com/northstar/categories/savings-accounts-examples.zip",
    "@type": "schema:MediaObject",
    "schema:name": "Savings Accounts Example Assets (ZIP)"
  }
}
```

---

## Combined example: Brand + BrandedCategory + external classifications

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/",
    "gs1": "https://ref.gs1.org/voc/"
  },
  "@graph": [
    {
      "@id": "https://example.com/brand/northstar",
      "@type": "brando:Brand",
      "schema:name": "Northstar Bank",
      "brando:hasProductCategory": {
        "@id": "https://example.com/brand/northstar/categories/savings-accounts"
      }
    },

    {
      "@id": "https://example.com/brand/northstar/categories/savings-accounts",
      "@type": "brando:BrandedCategory",
      "brando:productCategoryName": "Savings accounts",
      "brando:categoryDepartment": "Banking",
      "brando:categoryClass": "Deposit accounts",
      "brando:categoryItemType": "Savings accounts",
      "brando:categoryApprovedTerms": [
        "savings goals",
        "interest rate",
        "deposit"
      ],
      "brando:categoryProhibitedTerms": [
        "guaranteed returns",
        "get rich quick"
      ],
      "brando:gpcCategoryCode": "43191500",
      "brando:gpcCategoryDescription": "Savings and investment accounts (example only)",
      "brando:unspscCode": "84131500",
      "brando:googleProductCategoryId": "Finance > Banking Services",
      "brando:appliesToGTIN": [
        "12345678901234",
        "12345678905678"
      ],
      "brando:appliesToProduct": {
        "@id": "https://example.com/gs1/product/12345678901234",
        "@type": "gs1:Product"
      }
    }
  ]
}
```

**Runtime pattern (non-normative):**

1. Resolve `brando:Brand` for the request.
2. Determine relevant `brando:BrandedCategory`:

    * based on product/GTIN,
    * or via your own mapping logic.

3. Use the BrandedCategory to:

    * align with GS1 GPC, UNSPSC, Google Product Taxonomy,
    * add category-specific vocabulary (`categoryApprovedTerms`, `categoryProhibitedTerms`),
    * feed downstream systems (ads, marketplaces, analytics) with aligned classification metadata.

---

## Related documentation

* **Concepts / overview**

    * [Brando types overview](index.md)
    * [Getting started](../getting-started.md)

* **Related types**

    * [`brando:Brand`](brand.md)
    * [`brando:Policy`](policy.md)

* **Classification & architecture**

    * [Brand portfolios & architecture](../architecture/brand-architecture.md)

