---
title: Quickstart – Brando in YAML
description: Copy-paste YAML examples for the Brand Oracle (Brando) schema vocabulary v1.3, treated as JSON-LD expressed in YAML, suitable for config repos and CI/CD.
---

# Quickstart: Brando in YAML

This page shows how to use the **Brando Schema Vocabulary v1.3** in **YAML**.

YAML is useful when you want Brando to behave like configuration:

- stored in a repo,
- reviewed via pull requests,
- processed by build/CI pipelines.

Brando is **JSON-LD–first**. The safest way to use YAML is:

> Treat YAML as “JSON-LD written with indentation instead of braces”.

That means:

- keep JSON-LD keys like `@context`, `@graph`, `@id`, `@type`,
- use YAML syntax for lists and objects,
- convert to JSON-LD as part of your build/deploy process.

A more ergonomic alias-based YAML profile (e.g. `id` instead of `@id`) is described in **[YAML schema profile](spec/yaml-profile.md)** and is **non-normative**. The examples below stick to the “direct JSON-LD in YAML” pattern.

If you haven’t yet, read:

- **[Getting started](getting-started.md)** – mental model and workflows  
- **[Quickstart (JSON-LD)](getting-started-jsonld.md)** – same examples in pure JSON-LD

---

## 1. Basic JSON-LD in YAML

At minimum, you need:

- a `@context` with `schema` and `brando` prefixes,
- a `@graph` array of nodes (`brando:Brand`, `brando:Context`, etc.).

In YAML:

```yaml
@context:
  schema: https://schema.org/
  brando: https://brandoschema.com/

@graph: []
```

You can drop this into a file such as `brandoschema.yaml` and later convert it to JSON (which will then be valid JSON-LD).

---

## 2. Minimal single-brand example (YAML)

This is the same **smallest useful Brando graph** as in the JSON-LD quickstart:

* one `brando:Brand`,
* one `brando:Context`,
* one `brando:VerbalToken`,
* one `brando:Policy`.

### 2.1 Full example

```yaml
@context:
  schema: https://schema.org/
  brando: https://brandoschema.com/

@graph:
  - @id: https://example.com/brand/northstar
    @type: brando:Brand
    schema:name: Northstar Bank
    brando:missionStatement: Financial clarity with absolute trust.
    brando:visionStatement: Help people feel in control of their financial future.
    brando:coreValues:
      - Clarity over complexity
      - Do the right thing
      - Long-term alignment with customers
    brando:marketPosition: Digital-first bank for risk-aware customers.
    brando:tagline: Clarity, not shortcuts.
    brando:hasContext:
      @id: https://example.com/brand/northstar/context/retail-chatbot
    brando:usesVerbalToken:
      @id: https://example.com/brand/northstar/tokens/verbal/default
    brando:hasPolicy:
      @id: https://example.com/brand/northstar/policies/regulated-claims

  - @id: https://example.com/brand/northstar/context/retail-chatbot
    @type: brando:Context
    brando:audienceSegment: Retail banking customers
    brando:audiencePersona: Everyday saver
    brando:domainContext: >
      {"channel":"chatbot","surface":"public-website","region":"UK"}

  - @id: https://example.com/brand/northstar/tokens/verbal/default
    @type: brando:VerbalToken
    brando:toneOfVoice: >
      Calm, empathetic, precise. Explain options in simple language without being
      patronising.
    brando:approvedTerms:
      - interest rate
      - fees
      - savings goals
    brando:prohibitedTerms:
      - get rich quick
      - guaranteed returns
    brando:keyMessages:
      - We help you understand the trade-offs, not hide them.
      - We prioritise long-term financial health over short-term hype.

  - @id: https://example.com/brand/northstar/policies/regulated-claims
    @type: brando:Policy
    brando:enforcementLevel: mandatory
    brando:riskTag:
      - financial-regulation
      - consumer-protection
    brando:mustNotDos:
      - Do not recommend specific products as 'best' without disclaimers.
      - Do not provide personalised investment advice.
    brando:refusalStrategies:
      - Explain that you cannot give personalised investment advice.
      - Offer to connect the user to a human advisor.
    brando:reviewWorkflow: >
      Compliance team reviews changes to this policy and any flagged AI outputs
      weekly.
    brando:retrievableInLLM: true
```

This is valid YAML that corresponds **1:1** to the JSON-LD example in
**[Quickstart (JSON-LD)](getting-started-jsonld.md)**.

### 2.2 How a runtime uses this

Your Brand OS or LLM app would:

1. Parse the YAML → JSON → treat it as JSON-LD.
2. Select the `brando:Brand` node for `https://example.com/brand/northstar`.
3. Follow:

    * `brando:hasContext` → `brando:Context`,
    * `brando:usesVerbalToken` → `brando:VerbalToken`,
    * `brando:hasPolicy` → `brando:Policy`.

4. Use properties such as:

    * `brando:toneOfVoice`, `brando:approvedTerms`, `brando:prohibitedTerms`,
    * `brando:mustNotDos`, `brando:refusalStrategies`, `brando:enforcementLevel`, to build prompts and guardrails.

From the YAML’s point of view, you’re just dealing with a config file; from the model’s point of view, it’s structured brand behaviour.

---

## 3. Adding classification and integrations (YAML)

Now we extend the previous graph with:

* a `brando:BrandedCategory` aligned to GS1 / UNSPSC / Google Product Taxonomy;
* integration metadata via `brando:externalSystem` and `brando:externalSystemId`;
* an asset reference via `brando:downloadableFile`.

```yaml
@context:
  schema: https://schema.org/
  brando: https://brandoschema.com/

@graph:
  - @id: https://example.com/brand/northstar
    @type: brando:Brand
    schema:name: Northstar Bank
    brando:missionStatement: Financial clarity with absolute trust.
    brando:coreValues:
      - Clarity over complexity
      - Do the right thing
      - Long-term alignment with customers
    brando:hasProductCategory:
      @id: https://example.com/brand/northstar/categories/savings-accounts
    brando:externalSystem:
      @id: https://example.com/integrations/adobe-genstudio
    brando:externalSystemId: northstar_brand_master

  - @id: https://example.com/brand/northstar/categories/savings-accounts
    @type: brando:BrandedCategory
    brando:productCategoryName: Savings accounts
    brando:gpcCategoryCode: "43191500"
    brando:gpcCategoryDescription: >
      Savings and investment accounts (example code for illustration only).
    brando:unspscCode: "84131500"
    brando:googleProductCategoryId: Finance > Banking Services
    brando:downloadableFile:
      @id: https://assets.example.com/northstar/brand/savings-accounts-guidelines.pdf
      @type: schema:MediaObject
      schema:name: Savings Accounts Brand Guidelines (PDF)

  - @id: https://example.com/integrations/adobe-genstudio
    @type: schema:SoftwareApplication
    schema:name: Adobe GenStudio
    schema:applicationCategory: Brand and content operations
    schema:url: https://business.adobe.com/products/genstudio.html
```

### What this enables

* `brando:BrandedCategory` + classification properties (`gpcCategoryCode`, `unspscCode`, `googleProductCategoryId`) allow:

    * lining up brand semantics with commerce, ads, and marketplace systems;
    * category-aware prompts and RAG routing.

* `brando:externalSystem` + `brando:externalSystemId` create a stable link between:

    * your Brand Knowledge Graph, and
    * specific objects in external tools (e.g. workspaces, ad accounts, design projects).

* `brando:downloadableFile` (and, where used, `brando:supportingFile`) give AIs and tools a direct pointer to canonical assets in a DAM or Brand OS.

---

## 4. Using YAML as config in a repo

A common pattern is to keep Brando data in **multiple YAML files** organised by type, then merge them into a single JSON-LD graph at build time.

Example layout (non-normative):

```text
config/
  brandoschema/
    brand.yaml
    contexts.yaml
    tokens-verbal.yaml
    tokens-visual.yaml
    tokens-audio.yaml
    policies.yaml
    categories.yaml
```

### Example: `brand.yaml`

```yaml
@context:
  schema: https://schema.org/
  brando: https://brandoschema.com/

@graph:
  - @id: https://example.com/brand/northstar
    @type: brando:Brand
    schema:name: Northstar Bank
    brando:missionStatement: Financial clarity with absolute trust.
    brando:coreValues:
      - Clarity over complexity
      - Do the right thing
      - Long-term alignment with customers
```

### Example: `contexts.yaml`

```yaml
@context:
  schema: https://schema.org/
  brando: https://brandoschema.com/

@graph:
  - @id: https://example.com/brand/northstar/context/retail-chatbot
    @type: brando:Context
    brando:audienceSegment: Retail banking customers
    brando:audiencePersona: Everyday saver
    brando:domainContext: >
      {"channel":"chatbot","surface":"public-website","region":"UK"}
```

### Example: `tokens-verbal.yaml`

```yaml
@context:
  schema: https://schema.org/
  brando: https://brandoschema.com/

@graph:
  - @id: https://example.com/brand/northstar/tokens/verbal/default
    @type: brando:VerbalToken
    brando:toneOfVoice: >
      Calm, empathetic, precise. Explain options in simple language without
      being patronising.
    brando:approvedTerms:
      - interest rate
      - fees
      - savings goals
    brando:prohibitedTerms:
      - get rich quick
      - guaranteed returns
```

You can then:

1. Load each YAML file in your build/CI step.
2. Concatenate their `@graph` arrays.
3. Emit one JSON-LD document, e.g. `brandoschema.jsonld`, that your Brand OS and LLM apps consume.

> **Profile note:**
> Some teams define a higher-level YAML profile with keys like `brands:`, `contexts:`, `tokens:` instead of `@graph:`. That is a **profile-level convenience**, not part of the core vocabulary, and is described in **[YAML schema profile](spec/yaml-profile.md)**.

---

## 5. Embedding or serving YAML-derived JSON-LD

Once your pipeline converts YAML → JSON → JSON-LD, you can:

* **Embed** the JSON-LD in your public site:

  ```html
  <script type="application/ld+json">
  {
    "@context": {
      "schema": "https://schema.org/",
      "brando": "https://brandoschema.com/"
    },
    "@graph": [
      {
        "@id": "https://example.com/brand/northstar",
        "@type": "brando:Brand",
        "schema:name": "Northstar Bank"
        /* ... */
      }
    ]
  }
  </script>
  ```

* **Serve** it over an internal or public API:

    * e.g. `GET /brandoschema.jsonld` returns your compiled Brando graph.

* **Load** it into a graph database or triple store for query and reasoning.

From the perspective of AI runtimes, it doesn’t matter that the source of truth was YAML; they only see JSON-LD.

---

## 6. JSON-LD vs YAML: staying aligned

To avoid drift between JSON-LD and YAML:

* Treat **JSON-LD** as the **canonical semantic representation**.
* Treat **YAML** as:

    * an authoring format for humans,
    * a configuration format for build/runtime.

Recommended practices (non-normative):

* Use tests or CI to validate YAML against:

    * the Brando vocabulary (domains, ranges, required fields where applicable),
    * your chosen YAML profile (see **[YAML schema profile](spec/yaml-profile.md)**).
* Have a single “emit” step that:

    * merges all Brando YAML files,
    * generates one or more JSON-LD documents.

---

## 7. Where to go next

* See the **JSON-LD equivalents** of these examples:
  → **[Quickstart (JSON-LD)](getting-started-jsonld.md)**

* Explore **formal class and property definitions**:
  → **[Types reference](types/index.md)**
  → **[Properties reference](properties/index.md)**

* Look at **runtime and architecture patterns** for using Brando in production:
  → **[Brand Operating System](architecture/brand-os.md)**
  → **[Runtime Integration (LLMs, MCP, APIs)](architecture/runtime-integration.md)**

Once you have a small YAML-based Brando graph wired into your build, you can gradually:

* add more brands and contexts,
* introduce visual and audio tokens,
* bring in policies and automation rules,
* and let AI help maintain the **living Brand Knowledge Graph** under human governance.
