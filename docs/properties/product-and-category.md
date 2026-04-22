---
title: Product and category
description: Brand-specific category, product taxonomy, and product-level properties.
---

# Product and category

Brand-specific category, product taxonomy, and product-level properties.

[Back to all properties](index.md)

## Sections

| Section | Properties | Purpose |
| --- | ---: | --- |
| [Branded category properties](branded-category.md) | 10 | Product/category taxonomy, classification, and category-language properties. |

## Properties

### [Branded category properties](branded-category.md)

Product/category taxonomy, classification, and category-language properties.

| Property | Description | Values | Used on |
| --- | --- | --- | --- |
| [`brando:categoryApprovedTerms`](categoryApprovedTerms.md) | Terms encouraged for this category, layered on top of brand-level approved terms. | **Text**<br>**List of Text values** | `brando:BrandedCategory` |
| [`brando:categoryClass`](categoryClass.md) | Class-level categorisation within a department. | **Text**<br>**List of Text values** | `brando:BrandedCategory` |
| [`brando:categoryDepartment`](categoryDepartment.md) | Department-level categorisation within a product category. | **Text**<br>**List of Text values** | `brando:BrandedCategory` |
| [`brando:categoryItemType`](categoryItemType.md) | Specific item type within a category class. | **Text**<br>**List of Text values** | `brando:BrandedCategory` |
| [`brando:categoryProhibitedTerms`](categoryProhibitedTerms.md) | Terms prohibited for this category, layered on top of brand-level prohibited terms. | **Text**<br>**List of Text values** | `brando:BrandedCategory` |
| [`brando:googleProductCategoryId`](googleProductCategoryId.md) | Google Product Taxonomy category identifier associated with this branded category, typically used for shopping feeds, SEO, and retail media. Enables alignment between brand-level categories and Google Merchant Center classification. | **Text**<br>**List of Text values** | `brando:BrandedCategory` |
| [`brando:gpcCategoryCode`](gpcCategoryCode.md) | GS1 Global Product Classification (GPC) brick code associated with this branded category. | **Text**<br>**List of Text values** | `brando:BrandedCategory` |
| [`brando:gpcCategoryDescription`](gpcCategoryDescription.md) | Human-readable description of the GS1 Global Product Classification (GPC) brick associated with this branded category. | **Text (language-tagged)**<br>**List of Text (language-tagged) values** | `brando:BrandedCategory` |
| [`brando:productCategoryName`](productCategoryName.md) | Name of a product or service category with associated brand tokens and rules. | **Text**<br>**List of Text values** | `brando:BrandedCategory` |
| [`brando:unspscCode`](unspscCode.md) | UNSPSC (United Nations Standard Products and Services Code) associated with this branded category or product grouping. Used to align brand-defined categories with procurement and B2B classification schemes. | **Text**<br>**List of Text values** | `brando:BrandedCategory` |
