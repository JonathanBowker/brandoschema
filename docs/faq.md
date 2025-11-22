---
title: FAQs
description: Frequently asked questions about the Brando (Brand Oracle) schema, Brand Knowledge Graphs, and runtime integration.
---

# Frequently asked questions

This FAQ covers common questions about **what Brando is**, **how to use it**, and **how it fits** into existing stacks and AI runtimes.

---

## 1. What is Brando in one sentence?

**Brando (Brand Oracle)** is a **JSON-LD vocabulary and schema** for modelling brand identity, expression, and governance in a way that **LLMs, agents, and AI tools can consume as a control layer**, not just as SEO metadata.

It defines types like `brando:Brand`, `brando:Context`, `brando:VerbalToken`, `brando:Policy`, etc., and a set of properties that together form a **Brand Knowledge Graph**.

See: [Getting started](getting-started.md)

---

## 2. How is Brando different from Schema.org?

Brando:

- **extends** Schema.org patterns (JSON-LD, `schema:Brand`, `schema:Intangible`),
- but has a different **purpose**:

> Schema.org primarily describes what a brand *is* for search and structured data.  
> Brando primarily describes **how a brand behaves** in AI systems.

Key differences:

- Behavioural types (`brando:VerbalToken`, `brando:VisualToken`, `brando:AudioToken`, `brando:Policy`, `brando:AutomationRule`).
- Governance concepts (enforcement levels, risk tags, retrievability for LLMs).
- Explicit runtime integration patterns (contexts, external systems, automation rules).

Brando JSON-LD *always* uses Schema.org alongside it:

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@type": "brando:Brand",
  "schema:name": "Example Brand"
}
```

See: [JSON-LD context](spec/jsonld-context.md)

---

## 3. Is JSON-LD or YAML the “real” format?

**JSON-LD is canonical.**

* The vocabulary v1.3 is defined in JSON-LD.
* Domains, ranges, and comments are all in the JSON-LD vocab file.
* Interoperability with other graph tools expects JSON-LD / RDF.

**YAML is a profile for authoring and operations.**

* Easier to edit and review.
* Follows a **lossless mapping** to JSON-LD.
* Recommended for Git-based workflows, CI/CD, and human authoring.

Pattern:

```text
YAML (authoring) → JSON → JSON-LD (canonical) → Brand OS / graph / LLM
```

See: [YAML schema profile](spec/yaml-profile.md)

---

## 4. Do I need a graph database to use Brando?

No.

You **can**, but do not have to, use a graph database.

Typical setups:

* **Early-stage / simple**

  * YAML or JSON-LD in a Git repo.
  * A small service that loads them into memory and exposes an API.

* **More advanced**

  * JSON-LD loaded into:

    * a graph DB (RDF store, property graph),
    * or a document store with IDs + relationships.

Brando only requires that:

* you keep a **consistent `@id` scheme**,
* you can resolve linked nodes (`brando:hasContext`, `brando:usesVerbalToken`, etc.),
* you can serve a Brand Knowledge Graph to whatever runtime you have.

See:

* [Using Brando](how-to-use.md)
* [Brand Operating System architecture](architecture/brand-os.md)

---

## 5. How does Brando relate to my DAM / CMS / PIM?

Brando is a **semantic control layer**, not a replacement for existing systems:

* DAM: still stores assets (images, templates, audio, etc.).
* CMS: still stores content and manages publishing.
* PIM: still stores products and attributes.

Brando:

* describes **how the brand behaves**, and
* links to these systems using properties like:

    * `brando:downloadableFile`
    * `brando:supportingFile`
    * `brando:assetURL`
    * `brando:externalSystem`
    * `brando:externalSystemId`

The Brand OS typically:

* queries Brando to figure out:

  * which tokens/policies apply,
  * which assets/systems to call,
* then calls DAM/CMS/PIM with **Brando-driven parameters**.

See: [Runtime Integration (LLMs, MCP, APIs)](architecture/runtime-integration.md)

---

## 6. Is Brando “AI-managed”? What does that mean?

Yes, Brando is explicitly designed to support **AI-managed Brand Knowledge Graphs**.

That means:

* The **structure** (types and properties) is stable and machine-readable.
* The **content** (e.g. tokens, policies, categories) can be:

    * drafted by humans,
    * refined and proposed by AI tooling,
    * validated and approved by humans (and/or governance workflows),
    * then consumed by AI runtimes.

Without automation and AI assistance, maintaining a detailed Brand Knowledge Graph across:

* multiple brands,
* many contexts,
* policies, categories, campaigns, automation rules,

would be **extremely hard to do by hand at scale**.

Brando’s job is to give you a structure that:

* machines can maintain,
* humans can audit and govern.

---

## 7. What is a Brand Knowledge Graph in Brando terms?

A **Brand Knowledge Graph** is just:

* a set of Brando JSON-LD nodes:

    * `brando:Brand`,
    * `brando:Context`,
    * `brando:VerbalToken` / `VisualToken` / `AudioToken`,
    * `brando:Policy`,
    * `brando:BrandedCategory`,
    * `brando:Campaign`,
    * `brando:AutomationRule`,

* linked by their relationships:

    * `brando:hasContext`,
    * `brando:usesVerbalToken`,
    * `brando:hasPolicy`,
    * `brando:hasProductCategory`,
    * `brando:hasCampaign`,
    * `brando:hasAutomationRule`,
    * `brando:inheritsTokens`,
    * `brando:inheritsPolicies`, etc.

You can represent it:

* in a single JSON-LD file with `@graph`,
* as multiple YAML/JSON-LD files combined into a graph,
* or in a database that stores the same structure.

See:

* [Minimal brand graph](examples/minimal-brand.md)
* [House of brands example](examples/house-of-brands.md)

---

## 8. How do I actually plug Brando into an LLM?

At runtime, your backend (or Brand OS) will:

1. Resolve:

    * `brando:Brand` node,
    * `brando:Context`,
    * linked tokens and policies.

2. Build a **runtime config object**, e.g.:

   ```ts
   interface RuntimeBrandConfig {
     brand: Brand;
     context: Context;
     verbalTokens: VerbalToken[];
     visualTokens: VisualToken[];
     audioTokens: AudioToken[];
     policies: Policy[];
     campaigns: Campaign[];
     automationRules: AutomationRule[];
   }
   ```

3. Convert that into:

    * System prompt text,
    * Policy objects / guard rails,
    * Optional tool configurations (for MCP, etc.).

4. Optionally run **post-generation checks** against the same policies and tokens.

The actual code depends on your stack, but the pattern is stable.

See:

* [Runtime Integration (LLMs, MCP, APIs)](architecture/runtime-integration.md)
* [Chatbot + Brando runtime flow](examples/chatbot-runtime.md)

---

## 9. Do I have to adopt all Brando types at once?

No.

The vocabulary is designed to be **incrementally adoptable**.

Common adoption path:

1. Start with:

    * `brando:Brand`
    * `brando:Context`
    * `brando:VerbalToken`
    * `brando:Policy`

2. Add later as needed:

    * Visual identity → `brando:VisualToken`
    * Audio identity → `brando:AudioToken`
    * Product structure → `brando:BrandedCategory`
    * Campaign overlays → `brando:Campaign`
    * Automation → `brando:AutomationRule`

Each type is useful on its own; they just work better together.

See: [Using Brando](how-to-use.md)

---

## 10. How does Brando handle product categories and taxonomies?

Brando provides `brando:BrandedCategory` to represent:

* brand-specific product or service categories,
* aligned with external classification systems.

Properties include:

* `brando:productCategoryName`
* `brando:categoryDepartment`
* `brando:categoryClass`
* `brando:categoryItemType`
* `brando:categoryApprovedTerms`
* `brando:categoryProhibitedTerms`
* `brando:gpcCategoryCode` (GS1)
* `brando:unspscCode`
* `brando:googleProductCategoryId`
* `brando:appliesToGTIN` (for GTIN-level links)

This allows you to:

* keep **brand language** about categories,
* while maintaining **machine alignment** with GS1 / UNSPSC / Google Product Taxonomy.

See: [`brando:BrandedCategory`](types/branded-category.md) reference.

---

## 11. How do enforcement levels and risk tags work?

`brando:enforcementLevel` and `brando:riskTag` are core governance fields used on:

* `brando:Policy`
* `brando:AutomationRule` (and sometimes other nodes)

Typical pattern:

* `brando:enforcementLevel`:

    * `"mandatory"` – must always apply; violations are incidents.
    * `"advisory"` – guidance; tracked but not necessarily blocking.
    * `"conditional"` – depends on additional logic (e.g. an AutomationRule).

* `brando:riskTag`:

    * free-form tags like `"brand-safety"`, `"financial-regulation"`, `"health-information"`,
    * used for filtering, dashboards, and reporting.

Your Brand OS uses these to:

* decide how strict to be,
* group policies by domain,
* drive automation decisions.

See:

* [`brando:Policy`](types/policy.md)
* [`brando:AutomationRule`](types/automation-rule.md)
* Governance & lifecycle docs (if present)

---

## 12. What about versioning of the Brando vocabulary?

Brando vocab v1.3 includes:

* `owl:versionInfo` – the vocabulary version string,
* `dcterms:created` / `dcterms:modified` – when this version was authored,
* other metadata about the vocab itself.

For your implementation:

* treat the **`brando` prefix** as stable for the 1.x line,
* track the vocab version in:

    * your repo (tags/branches),
    * your Brand OS metadata,
    * or your CI/CD config.

If you need to support multiple versions in parallel, use:

* clear documentation per version,
* migration scripts for any breaking changes in future versions.

See: [JSON-LD context](spec/jsonld-context.md)

---

## 13. Is Brando a standard? Is it vendor-neutral?

Brando is intended and published as a **vendor-neutral schema**, not a proprietary format.

What that means:

* Any brand, agency, or platform can implement it.
* There is no requirement to use a specific tool or vendor.
* The vocabulary is defined in open JSON-LD that can be:

  * embedded on websites,
  * stored in any graph/document DB,
  * consumed by any LLM/agent runtime.

The initial stewardship is by **Advanced Analytica**; the intent is to evolve it based on real-world use with brands, agencies, and technology partners.

---

## 14. Where should I start?

If you’re starting from zero:

1. Read:

    * [Getting started](getting-started.md)
    * [Minimal brand graph](examples/minimal-brand.md)

2. Implement a **tiny pilot**:

    * one brand,
    * one context,
    * one verbal token,
    * one policy,
    * wired into one LLM or chatbot.

3. Use that as the basis for:

    * an internal **AI optimisation workshop**,
    * a roadmap for extending Brando across more channels and brands.

See: [AI Optimisation Workshop](optimisation-workshop.md)

