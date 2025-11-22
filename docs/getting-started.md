# Getting started with Brando

This page is a **practical** introduction to the Brand Oracle (Brando) schema vocabulary v1.3.

It assumes you:

- know what your brand is and roughly how it should behave,
- are comfortable with JSON or YAML,
- have at least passing familiarity with Schema.org / JSON-LD (or are happy to copy a template).

If you want the broader motivation and positioning, start with the **[homepage](index.md)**.  
If you want to jump straight to templates, see:

- **[Quickstart (JSON-LD)](getting-started-jsonld.md)**
- **[Quickstart (YAML)](getting-started-yaml.md)**

---

## 1. What Brando gives you in practice

Brando provides a **schema and ontology** for describing:

- **Brand identity**  
  `brando:Brand` nodes you can extend with mission, core values, positioning, and architecture.

- **Brand expression**  
  Reusable tokens for:

    - **verbal** (`brando:VerbalToken`) – tone, vocabulary, phrasing rules;
    - **visual** (`brando:VisualToken`) – colour, typography, logo, imagery, motion;
    - **audio** (`brando:AudioToken`) – voice, sonic logos, cues, usage rules.

- **Governance & automation**  
    - `brando:Policy` – guard rails, risk tags, refusal strategies, enforcement levels;
    - `brando:AutomationRule` – trigger/condition/action rules that adjust brand behaviour.

- **Context & classification**  
    - `brando:Context` – where, for whom, and under what conditions the brand is active;
    - `brando:BrandedCategory` – product/service categories aligned with GS1, UNSPSC, and Google Product Taxonomy.

You use these as building blocks for a **Brand Knowledge Graph** that your Brand Operating System (Brand OS), LLM apps, and agents can read and apply.

---

## 2. Mental model: a Brando graph

A minimal Brando setup is a **graph of linked nodes**:

```text
brando:Brand
  ├─ brando:hasContext → brando:Context
  ├─ brando:usesVerbalToken → brando:VerbalToken
  ├─ brando:usesVisualToken → brando:VisualToken
  ├─ brando:usesAudioToken → brando:AudioToken
  ├─ brando:hasPolicy → brando:Policy
  └─ brando:hasProductCategory → brando:BrandedCategory
```

At runtime, a Brand OS or AI middleware typically does:

1. Resolve the **Brand** and **Context** for the current interaction.
2. Load the relevant **tokens** (verbal / visual / audio).
3. Load applicable **policies** (and automation rules).
4. Compile these into prompts, configuration, and guardrails for:

    - LLM calls,
    - agent tools,
    - design systems,
    - search / recommendation pipelines.

---

## 3. AI-manageable by design

A Brando-based Brand Knowledge Graph is meant to be **living**:

* brands, portfolios, and campaigns change,
* channels and surfaces proliferate,
* policies evolve with regulation and risk.

At portfolio scale, **maintaining this graph purely by hand becomes prohibitively hard**:

* many `brando:Context` nodes to keep aligned,
* many tokens (`brando:VerbalToken`, `brando:VisualToken`, `brando:AudioToken`) to update,
* many `brando:Policy` and `brando:AutomationRule` nodes to refactor.

Brando is therefore **AI-manageable by design**:

* it reuses familiar JSON-LD and Schema.org structures, so LLMs can **propose and edit nodes** zero-shot;
* properties such as `brando:reviewWorkflow`, `brando:enforcementLevel`, and `brando:riskTag` are explicit, so changes can be **routed through human governance** rather than applied blindly;
* you can treat the Brand Knowledge Graph as **machine-editable configuration**, with humans approving and auditing changes.

In practice:

> Humans define intent and governance; AI handles the mechanics of keeping the Brando graph up to date.

---

## 4. Choose your primary representation

Brando is **JSON-LD–first** but is also profiled for **YAML**.

### JSON-LD (canonical)

Use JSON-LD if you:

* want to publish Brando data on the web (for AI/search/discovery),
* already use linked data / knowledge graph tooling,
* prefer keeping everything in one semantic format.

See:

* **[Quickstart (JSON-LD)](getting-started-jsonld.md)**
* **[JSON-LD context](spec/jsonld-context.md)**

### YAML (ops-friendly profile)

Use YAML in addition to JSON-LD if you:

* want to store brand configuration alongside code (e.g. in Git),
* drive CI/CD workflows or internal tooling,
* want a more authoring-friendly syntax for non-developers.

See:

* **[Quickstart (YAML)](getting-started-yaml.md)**
* **[YAML schema profile](spec/yaml-profile.md)**

Typical pattern:

* Author / review in **YAML**,
* Compile or emit **JSON-LD** for publication and runtime.

---

## 5. The smallest useful Brando graph

For a first implementation, aim for the **smallest graph that still encodes real brand behaviour**:

  1. One `brando:Brand`
  2. One `brando:Context`
  3. One `brando:VerbalToken`
  4. One `brando:Policy`

### Step 1 – Create a Brand node

Model your core brand identity as `brando:Brand` extending `schema:Brand`.

Recommended baseline properties:

* `schema:name` – human-readable name of the brand.
* `brando:missionStatement` – short description of what the brand exists to do.
* `brando:visionStatement` – optional long-term ambition.
* `brando:coreValues` – list of values (as strings).
* `brando:marketPosition` – how the brand positions itself competitively.
* `brando:tagline` – concise external tagline, if applicable.

Example (JSON-LD):

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@id": "https://example.com/brand/northstar",
  "@type": "brando:Brand",
  "schema:name": "Northstar Bank",
  "brando:missionStatement": "Financial clarity with absolute trust.",
  "brando:visionStatement": "Help people feel in control of their financial future.",
  "brando:coreValues": [
    "Clarity over complexity",
    "Do the right thing",
    "Long-term alignment with customers"
  ],
  "brando:marketPosition": "Digital-first bank for risk-aware customers.",
  "brando:tagline": "Clarity, not shortcuts."
}
```

### Step 2 – Add a Context

A `brando:Context` describes a situation where the brand behaves in a specific way: audience, channel, operational conditions, etc.

Useful properties include:

* `brando:audienceSegment` – short descriptors for who this is for.
* `brando:audiencePersona` – names of internal personas, if you use them.
* `brando:domainContext` – a structured JSON payload (stored as a string) describing channel, region, or other conditions.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/context/retail-chatbot",
  "@type": "brando:Context",
  "brando:audienceSegment": "Retail banking customers",
  "brando:audiencePersona": "Everyday saver",
  "brando:domainContext": "{\"channel\":\"chatbot\",\"surface\":\"public-website\",\"region\":\"UK\"}"
}
```

Attach the context to the brand using `brando:hasContext`:

```jsonld
{
  "@id": "https://example.com/brand/northstar",
  "@type": "brando:Brand",
  "schema:name": "Northstar Bank",
  "brando:hasContext": {
    "@id": "https://example.com/brand/northstar/context/retail-chatbot"
  }
}
```

> **Implementation note (non-normative):**
> Internally you may resolve contexts by ID and load them via an API or graph store; the JSON-LD above shows inline linking for clarity.

### Step 3 – Define a VerbalToken

A `brando:VerbalToken` encodes **how the brand speaks** in a reusable way.

Recommended starting fields:

* `brando:toneOfVoice` – free-text description of tone.
* `brando:approvedTerms` – terms you want the model to use.
* `brando:prohibitedTerms` – terms the model should avoid.
* `brando:keyMessages` – core messages to emphasise.
* `brando:promptScaffold` – optional prompt snippet for your runtime to use.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/tokens/verbal/default",
  "@type": "brando:VerbalToken",
  "brando:toneOfVoice": "Calm, empathetic, precise. Explain options in simple language without being patronising.",
  "brando:approvedTerms": [
    "interest rate",
    "fees",
    "savings goals"
  ],
  "brando:prohibitedTerms": [
    "get rich quick",
    "guaranteed returns"
  ],
  "brando:keyMessages": [
    "We help you understand the trade-offs, not hide them.",
    "We prioritise long-term financial health over short-term hype."
  ]
}
```

Attach it to the brand and/or context using `brando:usesVerbalToken`:

```jsonld
{
  "@id": "https://example.com/brand/northstar",
  "@type": "brando:Brand",
  "schema:name": "Northstar Bank",
  "brando:usesVerbalToken": {
    "@id": "https://example.com/brand/northstar/tokens/verbal/default"
  }
}
```

You can override or extend tokens per context (e.g., a more concise variant for SMS) by attaching additional tokens to the relevant `brando:Context`.

### Step 4 – Add a Policy

`brando:Policy` captures guard rails, risk, and governance.

Common starting properties:

* `brando:enforcementLevel` – `"mandatory"`, `"advisory"`, or `"conditional"` (values are non-normative strings, but these are suggested).
* `brando:riskTag` – tags for the type of risk (e.g. `"financial-regulation"`).
* `brando:refusalStrategies` – how AI should refuse or redirect.
* `brando:mustDos` / `brando:mustNotDos` – explicit behaviours.
* `brando:reviewWorkflow` – description of human/automated review.
* `brando:retrievableInLLM` – whether the policy can be indexed/retrieved by LLMs.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/policies/regulated-claims",
  "@type": "brando:Policy",
  "brando:enforcementLevel": "mandatory",
  "brando:riskTag": [
    "financial-regulation",
    "consumer-protection"
  ],
  "brando:mustNotDos": [
    "Do not recommend specific products as 'best' without disclaimers.",
    "Do not provide personalised investment advice."
  ],
  "brando:refusalStrategies": [
    "Explain that you cannot give personalised investment advice.",
    "Offer to connect the user to a human advisor."
  ],
  "brando:reviewWorkflow": "Compliance team reviews changes to this policy and any flagged AI outputs weekly.",
  "brando:retrievableInLLM": true
}
```

Attach the policy using `brando:hasPolicy`:

```jsonld
{
  "@id": "https://example.com/brand/northstar",
  "@type": "brando:Brand",
  "brando:hasPolicy": {
    "@id": "https://example.com/brand/northstar/policies/regulated-claims"
  }
}
```

You can also attach policies to **contexts** when rules only apply in specific channels or regions.

---

## 6. Optional: add a BrandedCategory

If your runtime cares about products or services, add at least one `brando:BrandedCategory`.

This lets you:

* represent the brand’s own category language (`brando:productCategoryName`),
* and align it with external standards via:

    - `brando:gpcCategoryCode` / `brando:gpcCategoryDescription` (GS1),
    - `brando:unspscCode` (UNSPSC),
    - `brando:googleProductCategoryId` (Google Product Taxonomy).

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/categories/savings-accounts",
  "@type": "brando:BrandedCategory",
  "brando:productCategoryName": "Savings accounts",
  "brando:gpcCategoryCode": "43191500",
  "brando:gpcCategoryDescription": "Savings and investment accounts (example only)",
  "brando:unspscCode": "84131500",
  "brando:googleProductCategoryId": "Financial Services > Banking"
}
```

Link it from the brand using `brando:hasProductCategory`:

```jsonld
{
  "@id": "https://example.com/brand/northstar",
  "@type": "brando:Brand",
  "brando:hasProductCategory": {
    "@id": "https://example.com/brand/northstar/categories/savings-accounts"
  }
}
```

---

## 7. Wiring Brando into your runtime

With a minimal graph in place, your runtime (LLM app, agent, or Brand OS) should:

1. **Resolve Brand + Context**

    - Decide which `brando:Brand` and `brando:Context` apply to the current request.
    - Typically done via URL, tenant ID, channel, region, or some internal mapping.

2. **Load tokens and policies**

    - Follow `brando:usesVerbalToken`, `brando:usesVisualToken`, and `brando:usesAudioToken`.
    - Follow `brando:hasPolicy` and `brando:hasAutomationRule`.

3. **Compile prompts and configuration**

    - Use `brando:toneOfVoice`, `brando:approvedTerms`, `brando:prohibitedTerms`, and `brando:promptScaffold` to construct system prompts or style instructions.
    - Use `brando:mustDos`, `brando:mustNotDos`, `brando:refusalStrategies`, and `brando:enforcementLevel` to drive pre- and post-generation checks.

4. **Enforce governance and logging**

    - Log which policies were in effect for each interaction.
    - Record deviations for later review using `brando:reviewWorkflow` as guidance.

5. **Allow AI-assisted maintenance (optional)**

    - Use an LLM or agent to propose changes to YAML or JSON-LD (e.g. new contexts, updated tokens).
    - Require human approval before those changes are published.

For more detailed architecture patterns, see:

* **[Brand Operating System](architecture/brand-os.md)**
* **[Runtime Integration (LLMs, MCP, APIs)](architecture/runtime-integration.md)**
* **[Chatbot + Brando runtime flow](examples/chatbot-runtime.md)**

---

## 8. Recommended next steps

To move beyond a minimal graph:

1. **Add more contexts**
   Represent key channels (web, app, email, support, sales) as `brando:Context` nodes.

2. **Separate default vs specialised tokens**
   Use multiple `brando:VerbalToken`, `brando:VisualToken`, and `brando:AudioToken` nodes with clear IDs (e.g. `/tokens/verbal/default`, `/tokens/verbal/support`).

3. **Introduce enforcement levels and automation rules**
   Use `brando:enforcementLevel`, `brando:AutomationRule`, `brando:triggerType`, and `brando:automationAction` to control how strictly rules are applied.

4. **Align classifications**
   Model `brando:BrandedCategory` for key products/services and align with GS1/UNSPSC/Google via the relevant properties.

5. **Document and version your profile**
   Use the **[YAML profile](spec/yaml-profile.md)** and **[TypeScript types](spec/typescript-model.md)** to keep your implementation stable and testable.

At this point you will have the core of an AI-manageable, governance-ready **Brand Knowledge Graph** that can scale across brands, markets, and channels.
