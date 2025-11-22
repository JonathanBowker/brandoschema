---
title: AI Optimisation Workshop
description: A structured workshop format for turning brand guidelines into a Brando-powered Brand Knowledge Graph and runtime configuration.
---

# AI Optimisation Workshop

The **AI Optimisation Workshop** is a structured format for:

- taking existing brand guidelines, tone-of-voice docs, and policies,
- mapping them into **Brando vocab v1.3**,
- and validating how they behave in **LLMs, agents, and other AI runtimes**.

This page describes the workshop in implementation terms so you can:

- run it internally,
- or adapt it into your own onboarding process for Brando.

> **Scope**  
> This is non-normative guidance about *process*.  
> The canonical definitions of classes and properties live in the Brando JSON-LD vocabulary and the Types/Properties reference.

---

## 1. Objectives

By the end of an AI Optimisation Workshop you should have:

1. A **minimal Brand Knowledge Graph** for at least one brand:
    - `brando:Brand`
    - `brando:Context` (1–3)
    - `brando:VerbalToken` (1–3)
    - `brando:Policy` (1–3)

2. A **Brando YAML/JSON-LD bundle** checked into a repo or config store.

3. A working **runtime experiment**:
    - a small chatbot / LLM integration,
    - or a scripted test harness,
    - using the graph to assemble system prompts and guard rails.

4. A short list of **gaps and optimisations**:
    - missing policies or contexts,
    - unclear tone or vocabulary,
    - integration work required for production.

---

## 2. Recommended participants

You get the best results if you combine:

- **Brand / marketing**  
  People who own positioning, tone of voice, and guidelines.

- **CX / product / service owners**  
  People who understand the key customer journeys and channel behaviours.

- **Engineering / data / AI**  
  People who can wire Brando into LLMs, MCP, APIs, and analytics.

- **Risk / compliance (for regulated use cases)**  
  People who care about auditability, enforcement, and guard rails.

Typical group size: **4–8 people**.

---

## 3. Inputs and prerequisites

Before the workshop, gather:

- Brand artefacts:
    - Brand guidelines (verbal, visual, audio).
    - Tone of voice docs.
    - Key campaigns / messages.
- Governance artefacts:
    - Compliance manuals.
    - Risk policies.
    - Any existing “prompt guidelines” for AI tools.
- Technical context:
    - Target AI stack (LLM vendor / infra).
    - Existing chatbots / assistants / flows.
    - Where the Brand Knowledge Graph will live (Git, graph DB, etc.).

Technical prerequisites:

- Ability to run:
    - a script or notebook that calls your target LLM, or
    - an existing chatbot that can be configured via system prompts.
- A repo (or folder) for Brando YAML/JSON-LD files.

---

## 4. Workshop structure

A typical workshop can be run as:

- **Half-day** (fast pilot), or
- **Full day** (more content and live testing).

Below is a structure that maps directly to Brando types.

### Phase 1 – Use-case and context framing (Brand + Context)

**Goal:** agree what you’re optimising *for*.

Activities:

1. Choose **one priority use case**, e.g.:
    - “Support chatbot for existing customers”
    - “Product discovery assistant for savings accounts”
    - “Internal sales copilot for frontline teams”

2. Identify the **brand and variant**:
    - Which `brando:Brand`?
    - Global vs regional?

3. Describe the **context**:
    - Channel (chatbot, email, call centre, web).
    - Surface (public site, logged-in area, internal tool).
    - Region or jurisdiction.
    - Audience segment and persona.

Provisional Brando nodes:

- 1 × `brando:Brand`
- 1 × `brando:Context` with:
    - `brando:audienceSegment`
    - `brando:audiencePersona`
    - `brando:domainContext` (JSON string)

---

### Phase 2 – Verbal tokens (VerbalToken)

**Goal:** turn tone-of-voice and language rules into **machine-readable tokens**.

Activities:

1. Extract from existing guidelines:
    - Tone of voice descriptors,
    - Dialogue / writing style examples,
    - “Do / Don’t” lists,
    - Preferred and forbidden terms.

2. Map them into Brando properties, e.g.:

    - `brando:toneOfVoice`
    - `brando:dialogueStyle`
    - `brando:writingStyle`
    - `brando:approvedTerms`
    - `brando:prohibitedTerms`
    - `brando:mustDos`
    - `brando:mustNotDos`
    - `brando:tagline`, `brando:keyMessages` (if needed)

Provisional Brando node:

- 1 × `brando:VerbalToken` for the selected context.

Example YAML (live during workshop):

```yaml
@id: https://example.com/brand/northstar/tokens/verbal/support
@type: brando:VerbalToken

brando:toneOfVoice: >
  Reassuring and efficient. Focus on clear next steps.

brando:dialogueStyle: >
  Use second person; acknowledge emotion, then move to options.

brando:writingStyle: >
  Short paragraphs, concrete steps, minimal jargon.

brando:approvedTerms:
    - interest rate
    - fees
    - savings goals

brando:prohibitedTerms:
    - get rich quick
    - guaranteed returns

brando:mustDos:
    - Offer at least one clear next step in each answer.

brando:mustNotDos:
    - Minimise or dismiss user concerns.
```

---

### Phase 3 – Policies and guard rails (Policy)

**Goal:** encode **risk and governance rules** as `brando:Policy`.

Activities:

1. Identify **non-negotiable rules** for this context:

    * Legal / regulatory no-gos.
    * Content and tone red lines.
    * Escalation / handoff rules.

2. Distinguish between:

     baseline brand safety,
    * context-specific rules,
    * category- or product-specific rules.

3. Map to Brando properties:

    * `brando:guardRails`
    * `brando:refusalStrategies`
    * `brando:riskScenarios`
    * `brando:complianceTags`
    * `brando:riskTag`
    * `brando:enforcementLevel`
    * `brando:retrievableInLLM`

Provisional Brando node:

* 1–2 × `brando:Policy` nodes.

Example YAML:

```yaml
@id: https://example.com/brand/northstar/policies/global-brand-safety
@type: brando:Policy

brando:enforcementLevel: mandatory
brando:riskTag:
  - brand-safety
  - financial-regulation

brando:guardRails:
  - Do not provide personalised investment advice.
  - Do not promise guaranteed returns.
  - Do not provide legal or tax advice.

brando:refusalStrategies:
  - >
    If the user asks for personalised advice, explain that you
    cannot provide it and why.
  - >
    Offer general educational information instead and suggest
    speaking to a regulated advisor.

brando:retrievableInLLM: true
```

Link it from `brando:Brand` via `brando:hasPolicy`.

---

### Phase 4 – Graph assembly and runtime test

**Goal:** plug the new Brando graph into a **real LLM call**.

Activities:

1. Combine nodes into a single YAML/JSON-LD graph:

    * `Brand` + `Context` + `VerbalToken` + `Policy`.
2. Use a simple script / notebook to:

    * load the YAML,
    * convert to JSON-LD,
    * build a **system prompt** from the Brando nodes,
    * run a handful of test questions.

Example test questions:

* “Explain our main savings account in simple terms.”
* “What should I do with £5,000 to get the best returns?”
* “Can you guarantee I won’t lose money?”

3. Review outputs live:

    * Is tone correct?
    * Are guard rails triggered appropriately?
    * Are refused answers phrased in a way that brand/risk are comfortable with?

---

### Phase 5 – Gap analysis and optimisation

**Goal:** decide what to change or add to improve behaviour.

Activities:

* Compare outputs against:

    * original brand guidelines,
    * risk/compliance expectations,
    * desired user experience.

* Identify gaps in the Brando graph:

    * missing context distinctions (e.g. public vs logged-in),
    * missing policies (e.g. product-specific rules),
    * missing approved/prohibited terms,
    * unclear refusal strategies.

Produce a short backlog:

* “Add a `Policy` for investment-heavy queries.”
* “Split support context into ‘pre-sales’ and ‘post-sale’.”
* “Refine `toneOfVoice` to discourage over-familiar language.”

These items become the **next iteration** on the Brand Knowledge Graph.

---

## 5. Artefacts you should leave with

From a well-run workshop, you should have:

1. **Brando graph file(s)**

   * YAML and/or JSON-LD files for:

     * Brand,
     * Context,
     * VerbalToken,
     * Policy.

2. **System prompt template or generator**

   * A function or script that:

     * loads the Brando graph,
     * builds a structured system prompt for your LLM.

3. **Test notebook / script**

    * A reproducible way to:

        * run sample questions,
        * show what Brando is doing,
        * compare “before vs after” behaviour.

4. **Change log / backlog**

    * What needs to be added or refined in the Brando model.
    * What needs to be integrated (e.g. into an existing chatbot).

---

## 6. Scaling beyond the workshop

After the initial workshop, typical next steps:

* **Move from YAML to a managed Brand Knowledge Graph**

    * Keep YAML as an authoring layer,
    * Compile to JSON-LD and load into a graph DB or central config service.

* **Add more contexts**

    * e.g. “Support email”, “Sales discovery calls”, “App notifications”.

* **Introduce category and portfolio modelling**

    * `brando:BrandedCategory` with GS1/UNSPSC/Google alignment.
    * Multiple `brando:Brand` nodes for sub-brands and regions.

* **Wire into production**

  * Make Brand + Context selection a first-class parameter in:

    * chatbot/assistant backends,
    * MCP tools,
    * internal APIs.

* **Introduce automation**

    * Add `brando:AutomationRule` nodes,
    * tie them to metrics (unsafe outputs, escalation rates, etc.),
    * let the Brand OS *adjust enforcement* based on live signals.

---

## 7. Templates and references

When designing your own workshop, refer to:

* **Concepts & Types**

    * [`brando:Brand`](types/brand.md)
    * [`brando:Context`](types/context.md)
    * [`brando:VerbalToken`](types/verbal-token.md)
    * [`brando:Policy`](types/policy.md)
    * [`brando:AutomationRule`](types/automation-rule.md) (for later stages)

* **Specification**

    * [JSON-LD context](spec/jsonld-context.md)
    * [YAML schema profile](spec/yaml-profile.md)
    * [TypeScript model](spec/typescript-model.md)

* **Architecture & Examples**

    * [Brand Operating System architecture](architecture/brand-os.md)
    * [Runtime Integration (LLMs, MCP, APIs)](architecture/runtime-integration.md)
    * [Minimal brand graph](examples/minimal-brand.md)
    * [Chatbot + Brando runtime flow](examples/chatbot-runtime.md)

Use this workshop as a **repeatable pattern**: each new brand, context, or use case should go through a similar cycle of **modelling → testing → optimisation** until it behaves as intended in AI systems.
