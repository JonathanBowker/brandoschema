---
title: Brand portfolios & architecture
description: How to model brand portfolios, brand architecture patterns, and inheritance in the Brando (Brand Oracle) schema.
---

# Brand portfolios & architecture

Most organisations don’t have a single monolithic brand. They have a **brand architecture**:

- corporate / group brands
- product and service brands
- endorsed / sub-brands
- regional variants
- campaign “brands within the brand”

Brando vocab v1.3 is designed to model **full portfolios**, not just a single logo or master brand. This page explains how to:

- represent different brand architecture patterns,
- use multiple `brando:Brand` nodes in one graph,
- control **inheritance** of tokens and policies,
- handle regional and category-specific variations.

---

## 1. Brand architecture patterns

Common patterns (non-normative) and how they map to Brando:

### 1.1 Branded house

One master brand (e.g. “Northstar Bank”) covers most offers.

- **Brando representation:**
    - One primary `brando:Brand` node (master brand).
    - Optional “sub-brands” as additional `brando:Brand` nodes with clear relationships (e.g. specialised products, regions).
    - Sub-brands typically **inherit** tokens and policies from the master.

### 1.2 House of brands

Multiple distinct brands under a group or holding entity.

- **Brando representation:**
    - One `brando:Brand` for the group / holding brand (optional).
    - Separate `brando:Brand` nodes for each product or business brand.
    - Limited or no inheritance; each brand has its own tokens and policies.

### 1.3 Endorsed / hybrid architectures

Sub-brands carry the master brand as an endorsement (“Product X by Brand Y”).

- **Brando representation:**
    - A `brando:Brand` node for the master brand.
    - Additional `brando:Brand` nodes for each endorsed brand.
    - Sub-brands **selectively inherit** certain tokens and policies:
        - e.g. brand safety and legal policies,
        - core values,
        - some visual patterns.

Brando doesn’t prescribe a single “right” architecture; it provides:

- multiple `brando:Brand` nodes,
- relationships and **inheritance properties**,
- a way to make the structure **machine-readable** for AI systems.

---

## 2. Multiple `brando:Brand` nodes in one graph

Brand portfolios are represented by **more than one `brando:Brand` node** in the same `@graph`.

Example (simplified):

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
      "schema:name": "Northstar Bank",
      "brando:missionStatement": "Financial clarity with absolute trust."
    },
    {
      "@id": "https://example.com/brand/northstar-wealth",
      "@type": "brando:Brand",
      "schema:name": "Northstar Wealth",
      "brando:missionStatement": "Stewarding long-term wealth with disciplined advice."
    }
  ]
}
```

Each `brando:Brand` is a first-class node. The relationships between them can be:

* modelled explicitly (e.g. “is part of group brand”, “endorsed by”),
* or implied via IDs and metadata (e.g. naming conventions, external references).

> **Non-normative recommendation**
> Use stable `@id` URIs that encode your actual brand taxonomy (e.g. `/brand/group/`, `/brand/product/`, `/brand/region/`) so that automated tooling can reason about relationships more easily.

---

## 3. Inheritance of tokens and policies

Brando introduces **inheritance properties** so that sub-brands, contexts, and categories can reuse and override behaviour.

### 3.1 `brando:inheritsTokens`

* **Type:** `owl:ObjectProperty`
* **Domain:** typically `brando:Brand`, `brando:Context`, sometimes other nodes
* **Range:** nodes that provide tokens (e.g. another `brando:Brand`, or a token node)
* **Purpose:** declare where a brand or context **inherits expression tokens** from.

Typical patterns:

* Sub-brand inherits verbal & visual tokens from master brand.
* Regional variant inherits tokens from global brand.
* Specific context inherits from a base context and adds overrides.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar-wealth",
  "@type": "brando:Brand",
  "schema:name": "Northstar Wealth",
  "brando:inheritsTokens": {
    "@id": "https://example.com/brand/northstar"
  }
}
```

Runtime behaviour (non-normative):

* When resolving tokens for `northstar-wealth`, the Brand OS:

  * loads `northstar-wealth` tokens,
  * also loads tokens from `northstar`,
  * applies override/precedence rules (usually: child overrides parent).

### 3.2 `brando:inheritsPolicies`

* **Type:** `owl:ObjectProperty`
* **Domain:** typically `brando:Brand`, `brando:Context`
* **Range:** nodes that provide policies (e.g. another `brando:Brand`, or a `brando:Policy` collection)
* **Purpose:** declare where a brand or context **inherits governance** from.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar-wealth",
  "@type": "brando:Brand",
  "schema:name": "Northstar Wealth",
  "brando:inheritsPolicies": {
    "@id": "https://example.com/brand/northstar"
  }
}
```

Runtime behaviour (non-normative):

* A sub-brand inherits global policies (e.g. brand safety, regulatory constraints) from the master.
* The sub-brand may define **additional** policies for its own risk profile.

---

## 4. Modelling specific architecture scenarios

### 4.1 Branded house with regional variants

Suppose you have:

* “Northstar Bank” (global master brand).
* “Northstar Bank UK”, “Northstar Bank US” (regional variants).

You can model:

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
      "schema:name": "Northstar Bank",
      "brando:missionStatement": "Financial clarity with absolute trust."
    },
    {
      "@id": "https://example.com/brand/northstar-uk",
      "@type": "brando:Brand",
      "schema:name": "Northstar Bank (UK)",
      "brando:inheritsTokens": {
        "@id": "https://example.com/brand/northstar"
      },
      "brando:inheritsPolicies": {
        "@id": "https://example.com/brand/northstar"
      }
    },
    {
      "@id": "https://example.com/brand/northstar-us",
      "@type": "brando:Brand",
      "schema:name": "Northstar Bank (US)",
      "brando:inheritsTokens": {
        "@id": "https://example.com/brand/northstar"
      },
      "brando:inheritsPolicies": {
        "@id": "https://example.com/brand/northstar"
      }
    }
  ]
}
```

You can then:

* define **regional policies** (e.g. FCA vs SEC rules),
* attach them directly to `northstar-uk` and `northstar-us`,
* while still inheriting global brand safety rules.

### 4.2 House of brands under a group

Example: “Northstar Group” with independent brands:

* “Northstar Bank”
* “Aurora Investments”
* “Solace Insurance”

You may want:

* a `brando:Brand` node for the group (for governance, risk, and corporate-level messaging),
* separate nodes for each operating brand,
* minimal or no token inheritance, but possible policy inheritance (e.g. shared risk baseline).

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar-group",
  "@type": "brando:Brand",
  "schema:name": "Northstar Group",
  "brando:missionStatement": "Build trusted financial experiences across markets."
},
{
  "@id": "https://example.com/brand/northstar-bank",
  "@type": "brando:Brand",
  "schema:name": "Northstar Bank",
  "brando:inheritsPolicies": {
    "@id": "https://example.com/brand/northstar-group"
  }
},
{
  "@id": "https://example.com/brand/aurora-investments",
  "@type": "brando:Brand",
  "schema:name": "Aurora Investments",
  "brando:inheritsPolicies": {
    "@id": "https://example.com/brand/northstar-group"
  }
}
```

Tokens (voice, visuals) remain **distinct**; global risk policies can be shared.

### 4.3 Endorsed brand

Example: “Solace Home Insurance – by Northstar”.

You may:

* define a sub-brand with its own tokens,
* inherit certain tokens (e.g. core voice principles) and policies from the parent.

```jsonld
{
  "@id": "https://example.com/brand/solace-home",
  "@type": "brando:Brand",
  "schema:name": "Solace Home Insurance",
  "brando:inheritsTokens": {
    "@id": "https://example.com/brand/northstar"
  },
  "brando:inheritsPolicies": {
    "@id": "https://example.com/brand/northstar"
  }
}
```

At runtime, your Brand OS can:

* merge tokens and policies according to rules (e.g. “child overrides specific tone fields, but keeps parent guard rails”),
* represent the endorsed relationship in prompts (“Solace Home Insurance, part of Northstar Group”).

---

## 5. Context-level specialisation

Brand architecture is not only about `brando:Brand` nodes. You can also specialise at the **context** level:

* a global support context,
* a region-specific support context,
* a specialised context for a high-risk product or audience.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/context/support-global",
  "@type": "brando:Context",
  "brando:audienceSegment": [
    "Global customers"
  ],
  "brando:usesVerbalToken": {
    "@id": "https://example.com/brand/northstar/tokens/verbal/support-global"
  }
},
{
  "@id": "https://example.com/brand/northstar/context/support-uk",
  "@type": "brando:Context",
  "brando:audienceSegment": [
    "UK customers"
  ],
  "brando:domainContext": {
    "channel": "chatbot",
    "surface": "public-website",
    "region": "UK"
  },
  "brando:inheritsTokens": {
    "@id": "https://example.com/brand/northstar/context/support-global"
  }
}

```

Non-normative runtime behaviour:

* For `support-uk`, your Brand OS:

  * loads tokens and policies from `support-uk`,
  * also loads from `support-global` via `inheritsTokens`,
  * merges them.

---

## 6. Product and category-level structure

`brando:BrandedCategory` lets you model product/service structures:

* e.g. “Savings accounts”, “Mortgage products”, “Travel insurance”.

Each brand can link to categories via:

* `brando:hasProductCategory` (brand → category),
* categories can then be aligned with GS1 / UNSPSC / Google Product Taxonomy.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar",
  "@type": "brando:Brand",
  "schema:name": "Northstar Bank",
  "brando:hasProductCategory": [
    {
      "@id": "https://example.com/brand/northstar/categories/savings-accounts"
    },
    {
      "@id": "https://example.com/brand/northstar/categories/mortgages"
    }
  ]
}
```

Each `brando:BrandedCategory` can have:

* `brando:productCategoryName`
* `brando:categoryDepartment`
* `brando:categoryClass`
* `brando:categoryItemType`
* `brando:categoryApprovedTerms`
* `brando:categoryProhibitedTerms`
* and classification codes:

    * `brando:gpcCategoryCode`
    * `brando:unspscCode`
    * `brando:googleProductCategoryId`

This allows:

* category-specific vocabularies,
* category-specific policies,
* clear mappings to external product classification systems.

---

## 7. Campaign overlays

`brando:Campaign` provides **time-bound overlays** that can:

* adjust tone,
* add or modify messages,
* introduce campaign-specific policies.

Brands link to campaigns via:

* `brando:hasCampaign` (Brand → Campaign),
* campaigns can have `brando:effectiveDuring` (JSON string) plus `schema:startDate` / `schema:endDate`.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar",
  "@type": "brando:Brand",
  "schema:name": "Northstar Bank",
  "brando:hasCampaign": {
    "@id": "https://example.com/brand/northstar/campaigns/summer-savings-2025"
  }
},
{
  "@id": "https://example.com/brand/northstar/campaigns/summer-savings-2025",
  "@type": "brando:Campaign",
  "brando:campaignName": "Summer Savings 2025",
  "brando:campaignTheme": "Make your summer money go further without adding risk.",
  "brando:effectiveDuring": {
    "validFrom": "2025-06-01",
    "validThrough": "2025-08-31"
  },
  "schema:startDate": "2025-06-01",
  "schema:endDate": "2025-08-31"
}

```

Runtime:

* When within the campaign window, the Brand OS:

    * attaches campaign messaging and rules,
    * preserves the underlying brand architecture.

---

## 8. Governance in multi-brand setups

In multi-brand architectures, governance challenges increase:

* Some policies apply to **all brands** (e.g. group-level risk policies).
* Some apply only to **certain brands** or **categories**.
* Enforcement levels can differ by brand and region.

Brando provides tools to model this:

* `brando:inheritsPolicies` for shared baselines.
* `brando:riskTag` to classify policies by risk domain.
* `brando:appliesTo` / `brando:appliesToGTIN` / category links to constrain scope.
* `brando:enforcementLevel` to differentiate how strict a policy is per node.

Your Brand OS can then:

* generate **brand-level governance dashboards**,
* apply stricter rules to certain brands or categories,
* ensure that all brands at least meet group-level minimum standards.

---

## 9. Non-normative implementation tips

* Use **namespacing in IDs** to reflect architecture:

    * `/brand/group/northstar-group`
    * `/brand/master/northstar`
    * `/brand/sub/northstar-wealth`
    * `/brand/region/northstar-uk`

* Store **inheritance logic** in code or config, not in the Brando vocabulary:

    * Brando supplies `inheritsTokens` and `inheritsPolicies`.
    * Your Brand OS defines how to merge and override properties (e.g. parent vs child precedence).

* Keep **per-brand JSON-LD or YAML files**:

    * easier Git review,
    * clear separation between brands,
    * but still link into a portfolio-level graph when needed.

---

## 10. Related documentation

* **Concepts & types**

    * [`brando:Brand`](../types/brand.md)
    * [`brando:Context`](../types/context.md)
    * [`brando:BrandedCategory`](../types/branded-category.md)
    * [`brando:Campaign`](../types/campaign.md)
    * [`brando:AutomationRule`](../types/automation-rule.md)

* **Governance & lifecycle**

    * [`brando:Policy`](../types/policy.md)
    * Governance properties such as `brando:enforcementLevel`, `brando:riskTag`, `brando:effectiveDuring` (see Properties reference).

* **Architecture & runtime**

    * [Brand Operating System](brand-os.md)
    * [Runtime Integration (LLMs, MCP, APIs)](runtime-integration.md)

* **Examples**

    * [House of brands example](../examples/house-of-brands.md)
    * [Minimal brand graph](../examples/minimal-brand.md)
