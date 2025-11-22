---
title: Using Brando
description: Practical guidance on how to adopt and operationalise the Brando (Brand Oracle) schema in your organisation.
---

# Using Brando

This guide walks through **how to use Brando in practice**, from first experiments to a fully operational Brand Knowledge Graph:

1. Get oriented.
2. Model a first brand.
3. Choose how you’ll store and version the graph.
4. Validate and iterate.
5. Integrate with LLMs, MCP, and APIs.
6. Grow into portfolios, categories, and automation.

It assumes you’ve read:

- [Getting started](getting-started.md)  
- [Quickstart (JSON-LD)](getting-started-jsonld.md)  
- [Quickstart (YAML)](getting-started-yaml.md)

and now want to **put Brando to work**.

---

## 1. Decide your initial scope

Start with a **narrow, high-leverage scope**, not the entire brand universe.

Typical starting points:

- One brand, one channel:
    - e.g. “Corporate brand, public website chatbot”.
- One brand, two key contexts:
    - e.g. “Support chatbot” and “Marketing landing pages”.
- A single **regulated flow**:
    - e.g. “Savings account recommendations in UK”, “Health information Q&A”.

For that scope, identify:

- the **brand** (top-level `brando:Brand`),
- the **context(s)** (`brando:Context`),
- the **tone & language** requirements (`brando:VerbalToken`),
- the **minimum policies** you need (`brando:Policy`).

You’ll add visuals, audio, categories, and automation later.

---

## 2. Model your first brand graph

Use **JSON-LD or YAML** as your authoring format (YAML is usually easier for human editing).

At minimum, create:

1. A `brando:Brand` node
2. A `brando:Context` node
3. A `brando:VerbalToken` node
4. A `brando:Policy` node

### 2.1 Brand node

Capture **identity and intent**:

```yaml
@context:
  schema: https://schema.org/
  brando: https://brandoschema.com/

@graph:
  - @id: https://example.com/brand/acme
    @type: brando:Brand

    schema:name: ACME Tools
    brando:missionStatement: >
      Make high-quality tools accessible to every builder.
    brando:visionStatement: >
      A world where anyone can build with confidence.
    brando:coreValues:
      - Reliability
      - Practicality
      - Straight-talking support
```

### 2.2 Context node

Capture **where and for whom** behaviour changes:

```yaml
  - @id: https://example.com/brand/acme/context/support-chat
    @type: brando:Context

    brando:audienceSegment:
      - Existing customers seeking product support
    brando:audiencePersona:
      - Hands-on builder
    brando:domainContext: >
      {"channel":"chat","surface":"support-portal","region":"global"}

    brando:usesVerbalToken:
      @id: https://example.com/brand/acme/tokens/verbal/support
```

### 2.3 VerbalToken node

Capture **tone, style, and vocabulary**:

```yaml
  - @id: https://example.com/brand/acme/tokens/verbal/support
    @type: brando:VerbalToken

    brando:toneOfVoice: >
      Straightforward, encouraging, and practical.
    brando:dialogueStyle: >
      Talk to the user like a colleague on the job site.
    brando:writingStyle: >
      Short, direct sentences. Concrete instructions first; theory later.

    brando:approvedTerms:
      - heavy-duty
      - reliable
      - safety first

    brando:prohibitedTerms:
      - indestructible
      - lifetime-guaranteed for anything

    brando:mustDos:
      - Offer a clear next step or action in every answer.

    brando:mustNotDos:
      - Mock or belittle the user’s level of expertise.
```

### 2.4 Policy node

Capture **guard rails and refusal patterns**:

```yaml
  - @id: https://example.com/brand/acme/policies/basic-brand-safety
    @type: brando:Policy

    brando:enforcementLevel: mandatory
    brando:riskTag:
      - brand-safety

    brando:guardRails:
      - Do not make claims about capabilities that are not documented.
      - Do not provide safety-critical advice without including an appropriate caution.

    brando:refusalStrategies:
      - >
        If the user asks for unsafe modifications, explain why it is unsafe
        and suggest a safer alternative.

    brando:retrievableInLLM: true
```

Link it from the brand:

```yaml
  - @id: https://example.com/brand/acme
    @type: brando:Brand
    # ...
    brando:hasContext:
      @id: https://example.com/brand/acme/context/support-chat
    brando:usesVerbalToken:
      @id: https://example.com/brand/acme/tokens/verbal/support
    brando:hasPolicy:
      @id: https://example.com/brand/acme/policies/basic-brand-safety
```

Now you have a **minimal working Brand Knowledge Graph**.

---

## 3. Choose where this lives

You need a **single source of truth**.

Common options:

* **Git repo**

    * YAML or JSON-LD files under `brands/<brand>/...`
    * Reviewed via PRs
    * Ideal for early pilots.

* **Graph database / triple store**

    * Store the JSON-LD as RDF/graph.
    * Useful when you already have a knowledge-graph stack.

* **Document store**

    * JSON-LD documents per brand.
    * A simpler option if you don’t need full graph DB features yet.

Non-normative suggestion:

* Start with Git-managed YAML → generate JSON-LD as a build artefact.
* Once stable, mirror into a graph store if your infra supports it.

---

## 4. Validate and iterate

Before wiring into production:

1. **Schema validation**

   * Check that:

    * each node has a valid `@type`,
    * properties are used on appropriate domains,
    * required properties are present (e.g. `schema:name` on `brando:Brand`).
   
   * You can use:

    * JSON Schema or similar for structural checks,
    * custom scripts to enforce your own usage rules.

2. **Brand review**

    * Have brand/marketing teams review:

        * tone of voice text,
        * approved/prohibited terms,
        * guard rails and refusal strategies.
   
   * Treat this as a **living extension** of your brand guidelines.

3. **Prompt simulation**

    * Build a simple script or notebook that:

        * loads the Brando graph,
        * generates a system prompt,
        * runs a few test questions through your LLM,
        * lets humans review the outputs vs the Brando rules.

Use this loop to refine `VerbalToken`, `Policy`, and `Context` contents.

---

## 5. Integrate with your chatbot / LLM

The basic integration pattern:

1. **At request time**, your backend receives:

    * a `brandId` (`brando:Brand` `@id`),
    * a `contextId` (`brando:Context` `@id`), or enough info to resolve one.

2. **Brand OS / middleware**:

    * loads Brand + Context + Tokens + Policies from the Brando graph,
    * constructs a `RuntimeBrandConfig` (see [Runtime Integration](architecture/runtime-integration.md)),
    * builds a **system prompt** and policy configuration for your LLM.

3. **LLM adapter**:

    * prepends the system prompt,
    * optionally applies output checks using Brando `Policy` and `VerbalToken` data,
    * logs which Brando nodes were used.

If you’re using MCP or a shared tools layer, you can expose this as:

* `get_brand_config(brandId, contextId)`
* `list_policies(brandId)`
* `get_prompt_scaffold(brandId, contextId)`

so any AI client can call into your Brand OS.

---

## 6. Add other modalities and structure

Once text is working, extend:

### 6.1 Visual identity

Add `brando:VisualToken` nodes for:

* colour palette (`brando:colourPalette` as JSON string),
* typography (`brando:typography`),
* design tokens (`brando:visualToken`),
* logo and imagery rules (`brando:visualUsageGuidelines`, `brando:visualReferenceLink`).

Link them:

```yaml
brando:usesVisualToken:
  @id: https://example.com/brand/acme/tokens/visual/master
```

These can drive:

* design systems,
* generative image tools,
* theming for UI.

### 6.2 Audio identity

Add `brando:AudioToken` nodes for:

* sonic logos,
* voice signature,
* pronunciation guide,
* audio usage guidelines.

Link with `brando:usesAudioToken`.

### 6.3 Product categories

Define `brando:BrandedCategory` nodes for key categories and link to:

* GS1 / UNSPSC / Google Product Taxonomy via:

    * `brando:gpcCategoryCode`
    * `brando:unspscCode`
    * `brando:googleProductCategoryId`

Then link from `Brand` via `brando:hasProductCategory`.

This enables **category-aware** prompts and RAG filters.

---

## 7. Introduce governance & automation

As you mature:

### 7.1 Governance detail

Use policy-level properties:

* `brando:enforcementLevel` – e.g. `"mandatory"`, `"advisory"`, `"conditional"`.
* `brando:riskTag` – e.g. `"brand-safety"`, `"financial-regulation"`.
* `brando:refusalStrategies`, `brando:riskScenarios` – for explainability and training.
* `brando:reviewWorkflow`, `brando:updatePolicy` – for lifecycle management.
* `brando:retrievableInLLM` – to control what enters high-trust RAG or prompt corpora.

### 7.2 Automation rules

Add `brando:AutomationRule` nodes to tie **metrics to behaviour**:

* triggers (`brando:triggerType`),
* metrics (`brando:monitoredMetric` JSON string),
* sources (`brando:dataSource`),
* actions (`brando:automationAction` JSON string).

Your Brand OS can then:

* detect rising unsafe output rates,
* tighten enforcement levels or add extra checks,
* notify governance teams automatically.

---

## 8. Common adoption patterns

Typical sequence organisations follow:

1. **Pilot (single brand, single use case)**

    * Minimal Brand + Context + VerbalToken + Policy.
    * YAML in Git; manual review; small-scale LLM integration.

2. **Operational rollout for text**

    * Multiple contexts per brand (support, marketing, sales).
    * Richer policies and refusal patterns.
    * Brand OS service/API introduced.

3. **Portfolio & categories**

    * Multiple `brando:Brand` nodes (house-of-brands, regional variants).
    * `BrandedCategory` plus GS1/UNSPSC/Google alignment.

4. **Multi-modal and automation**

    * Visual and audio tokens.
    * Automation rules driven by safety/quality metrics.
    * Integration with observability and risk platforms.

Brando vocab v1.3 is designed to support **each stage** without forcing you to adopt everything at once.

---

## 9. Where to look next

* **Concepts & Types**

    * [`brando:Brand`](types/brand.md)
    * [`brando:Context`](types/context.md)
    * [`brando:VerbalToken`](types/verbal-token.md)
    * [`brando:Policy`](types/policy.md)

* **Specification**

    * [JSON-LD context](spec/jsonld-context.md)
    * [YAML schema profile](spec/yaml-profile.md)
    * [TypeScript types](spec/typescript-model.md)

* **Architecture & Examples**

    * [Brand Operating System architecture](architecture/brand-os.md)
    * [Runtime Integration (LLMs, MCP, APIs)](architecture/runtime-integration.md)
    * [Minimal brand graph](examples/minimal-brand.md)
    * [Chatbot + Brando runtime flow](examples/chatbot-runtime.md)


