---
title: Cross-type properties
description: Properties that apply to more than one Brando class.
---

# Cross-type properties

Properties that apply to more than one Brando class.

Properties in this section: **16**

[Back to all properties](index.md)

## [`brando:appliesTo`](appliesTo.md)

| Field | Value |
| --- | --- |
| Description | Optional scoping for which products, categories, personas, or channels this node applies to. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Context](../types/context.md)<br>[brando:Policy](../types/policy.md)<br>[brando:AutomationRule](../types/automation-rule.md) |
| Vocabulary path | Brand > Property > Multiple types :: appliesTo (brando:Context, brando:Policy, brando:AutomationRule) |
| Canonical URL | [`https://brandoschema.com/properties/appliesTo`](https://brandoschema.com/properties/appliesTo) |

## [`brando:appliesToGTIN`](appliesToGTIN.md)

| Field | Value |
| --- | --- |
| Description | GTIN(s) for which this branded category or policy is applicable. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:BrandedCategory](../types/branded-category.md)<br>[brando:Policy](../types/policy.md) |
| Vocabulary path | Brand > Property > Multiple types :: appliesToGTIN (brando:BrandedCategory, brando:Policy) |
| Canonical URL | [`https://brandoschema.com/properties/appliesToGTIN`](https://brandoschema.com/properties/appliesToGTIN) |

## [`brando:appliesToProduct`](appliesToProduct.md)

| Field | Value |
| --- | --- |
| Description | Links a branded category or policy to one or more GS1 Product nodes. |
| Values expected | **gs1:Product**<br>**List of gs1:Product values** |
| Used on | [brando:BrandedCategory](../types/branded-category.md)<br>[brando:Policy](../types/policy.md) |
| Vocabulary path | Brand > Property > Multiple types :: appliesToProduct (brando:BrandedCategory, brando:Policy) |
| Canonical URL | [`https://brandoschema.com/properties/appliesToProduct`](https://brandoschema.com/properties/appliesToProduct) |

## [`brando:downloadableFile`](downloadableFile.md)

| Field | Value |
| --- | --- |
| Description | Links a brand, token, context, campaign, or policy node to one or more canonical downloadable file assets (e.g. master logo packs, current guideline PDFs) represented as schema:MediaObject. Intended as a stable pointer to the most up-to-date creative files exposed by the Brand OS or DAM. |
| Values expected | **schema:MediaObject**<br>**List of schema:MediaObject values** |
| Used on | [brando:Brand](../types/brand.md)<br>[brando:Context](../types/context.md)<br>[brando:VisualToken](../types/visual-token.md)<br>[brando:VerbalToken](../types/verbal-token.md)<br>[brando:AudioToken](../types/audio-token.md)<br>[brando:Policy](../types/policy.md)<br>[brando:Campaign](../types/campaign.md)<br>[brando:BrandedCategory](../types/branded-category.md) |
| Vocabulary path | Brand > Property > Multiple types :: downloadableFile (brando:Brand, brando:Context, brando:VisualToken, brando:VerbalToken, brando:AudioToken, brando:Policy, brando:Campaign, brando:BrandedCategory) |
| Canonical URL | [`https://brandoschema.com/properties/downloadableFile`](https://brandoschema.com/properties/downloadableFile) |

## [`brando:effectiveDuring`](effectiveDuring.md)

| Field | Value |
| --- | --- |
| Description | Time window or schedule when this context, campaign, or policy is active, expressed as a structured JSON value. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Context](../types/context.md)<br>[brando:Campaign](../types/campaign.md)<br>[brando:Policy](../types/policy.md) |
| Vocabulary path | Brand > Property > Multiple types :: effectiveDuring (brando:Context, brando:Campaign, brando:Policy) |
| Canonical URL | [`https://brandoschema.com/properties/effectiveDuring`](https://brandoschema.com/properties/effectiveDuring) |

## [`brando:enforcementLevel`](enforcementLevel.md)

| Field | Value |
| --- | --- |
| Description | Indicates how strongly a policy or automation rule must be applied at runtime. Typical values include 'mandatory', 'advisory', and 'conditional' and may be extended by implementations. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Policy](../types/policy.md)<br>[brando:AutomationRule](../types/automation-rule.md) |
| Vocabulary path | Brand > Property > Multiple types :: enforcementLevel (brando:Policy, brando:AutomationRule) |
| Canonical URL | [`https://brandoschema.com/properties/enforcementLevel`](https://brandoschema.com/properties/enforcementLevel) |

## [`brando:externalSystem`](externalSystem.md)

| Field | Value |
| --- | --- |
| Description | Links a brand, context, policy, campaign, or automation rule to the external tool or platform that executes, manages, or consumes the corresponding brand rules. |
| Values expected | **schema:SoftwareApplication**<br>**List of schema:SoftwareApplication values** |
| Used on | [brando:Brand](../types/brand.md)<br>[brando:Context](../types/context.md)<br>[brando:Policy](../types/policy.md)<br>[brando:Campaign](../types/campaign.md)<br>[brando:AutomationRule](../types/automation-rule.md) |
| Vocabulary path | Brand > Property > Multiple types :: externalSystem (brando:Brand, brando:Context, brando:Policy, brando:Campaign, brando:AutomationRule) |
| Canonical URL | [`https://brandoschema.com/properties/externalSystem`](https://brandoschema.com/properties/externalSystem) |

## [`brando:externalSystemId`](externalSystemId.md)

| Field | Value |
| --- | --- |
| Description | System-specific identifier for the corresponding object in an external tool or platform (for example a brand record, workspace, guideline set, ad account, product record, or project ID). |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Brand](../types/brand.md)<br>[brando:Context](../types/context.md)<br>[brando:Policy](../types/policy.md)<br>[brando:Campaign](../types/campaign.md)<br>[brando:AutomationRule](../types/automation-rule.md)<br>[brando:ProductItem](../types/product-item.md) |
| Vocabulary path | Brand > Property > Multiple types :: externalSystemId (brando:Brand, brando:Context, brando:Policy, brando:Campaign, brando:AutomationRule, brando:ProductItem) |
| Canonical URL | [`https://brandoschema.com/properties/externalSystemId`](https://brandoschema.com/properties/externalSystemId) |

## [`brando:hasPolicy`](hasPolicy.md)

| Field | Value |
| --- | --- |
| Description | Attaches governance, safety, and compliance policies to a brand or context. |
| Values expected | **brando:Policy**<br>**List of brando:Policy values** |
| Used on | [brando:Brand](../types/brand.md)<br>[brando:Context](../types/context.md) |
| Vocabulary path | Brand > Property > Multiple types :: hasPolicy (brando:Brand, brando:Context) |
| Canonical URL | [`https://brandoschema.com/properties/hasPolicy`](https://brandoschema.com/properties/hasPolicy) |

## [`brando:hasProductItem`](hasProductItem.md)

| Field | Value |
| --- | --- |
| Description | Links a brand or branded product/service category to one or more individually identifiable product items (e.g. SKUs, GTIN-level items, or internal product records) that inherit and specialise its tokens and governance rules. |
| Values expected | **brando:ProductItem**<br>**List of brando:ProductItem values** |
| Used on | [brando:Brand](../types/brand.md)<br>[brando:BrandedCategory](../types/branded-category.md) |
| Vocabulary path | Brand > Property > Multiple types :: hasProductItem (brando:Brand, brando:BrandedCategory) |
| Canonical URL | [`https://brandoschema.com/properties/hasProductItem`](https://brandoschema.com/properties/hasProductItem) |

## [`brando:productItem`](productItem.md)

| Field | Value |
| --- | --- |
| Description | Links a brand or brand-specific product category to one or more individually identifiable sellable product items (e.g. SKUs, GTIN-based items, or internal product records). |
| Values expected | **brando:ProductItem**<br>**List of brando:ProductItem values** |
| Used on | [brando:BrandedCategory](../types/branded-category.md)<br>[brando:Brand](../types/brand.md) |
| Vocabulary path | Brand > Property > Multiple types :: productItem (brando:BrandedCategory, brando:Brand) |
| Canonical URL | [`https://brandoschema.com/properties/productItem`](https://brandoschema.com/properties/productItem) |

## [`brando:riskTag`](riskTag.md)

| Field | Value |
| --- | --- |
| Description | One or more lightweight tags describing the primary risk domains addressed by a policy or automation rule (e.g. 'regulatory', 'tone', 'brand-safety', 'platform-policy'). Intended for querying, reporting, and governance dashboards. |
| Values expected | **Text**<br>**List of Text values** |
| Used on | [brando:Policy](../types/policy.md)<br>[brando:AutomationRule](../types/automation-rule.md) |
| Vocabulary path | Brand > Property > Multiple types :: riskTag (brando:Policy, brando:AutomationRule) |
| Canonical URL | [`https://brandoschema.com/properties/riskTag`](https://brandoschema.com/properties/riskTag) |

## [`brando:supportingFile`](supportingFile.md)

| Field | Value |
| --- | --- |
| Description | Links a brand, token, context, campaign, or policy node to non-canonical supporting creative files (e.g. templates, mockups, working documents, previous guideline versions) represented as schema:MediaObject. These files are helpful for production but are not the primary source-of-truth asset. |
| Values expected | **schema:MediaObject**<br>**List of schema:MediaObject values** |
| Used on | [brando:Brand](../types/brand.md)<br>[brando:Context](../types/context.md)<br>[brando:VisualToken](../types/visual-token.md)<br>[brando:VerbalToken](../types/verbal-token.md)<br>[brando:AudioToken](../types/audio-token.md)<br>[brando:Policy](../types/policy.md)<br>[brando:Campaign](../types/campaign.md)<br>[brando:BrandedCategory](../types/branded-category.md) |
| Vocabulary path | Brand > Property > Multiple types :: supportingFile (brando:Brand, brando:Context, brando:VisualToken, brando:VerbalToken, brando:AudioToken, brando:Policy, brando:Campaign, brando:BrandedCategory) |
| Canonical URL | [`https://brandoschema.com/properties/supportingFile`](https://brandoschema.com/properties/supportingFile) |

## [`brando:usesAudioToken`](usesAudioToken.md)

| Field | Value |
| --- | --- |
| Description | Attaches an audio expression token defining how the brand sounds in this scope. |
| Values expected | **brando:AudioToken**<br>**List of brando:AudioToken values** |
| Used on | [brando:Brand](../types/brand.md)<br>[brando:Context](../types/context.md) |
| Vocabulary path | Brand > Property > Multiple types :: usesAudio (brando:Brand, brando:Context) |
| Canonical URL | [`https://brandoschema.com/properties/usesAudio`](https://brandoschema.com/properties/usesAudio) |

## [`brando:usesVerbalToken`](usesVerbalToken.md)

| Field | Value |
| --- | --- |
| Description | Attaches a verbal expression token defining how the brand speaks in this scope. |
| Values expected | **brando:VerbalToken**<br>**List of brando:VerbalToken values** |
| Used on | [brando:Brand](../types/brand.md)<br>[brando:Context](../types/context.md) |
| Vocabulary path | Brand > Property > Multiple types :: usesVerbal (brando:Brand, brando:Context) |
| Canonical URL | [`https://brandoschema.com/properties/usesVerbal`](https://brandoschema.com/properties/usesVerbal) |

## [`brando:usesVisualToken`](usesVisualToken.md)

| Field | Value |
| --- | --- |
| Description | Attaches a visual expression token defining how the brand looks in this scope. |
| Values expected | **brando:VisualToken**<br>**List of brando:VisualToken values** |
| Used on | [brando:Brand](../types/brand.md)<br>[brando:Context](../types/context.md) |
| Vocabulary path | Brand > Property > Multiple types :: usesVisual (brando:Brand, brando:Context) |
| Canonical URL | [`https://brandoschema.com/properties/usesVisual`](https://brandoschema.com/properties/usesVisual) |
