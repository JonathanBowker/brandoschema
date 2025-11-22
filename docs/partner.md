---
title: Partners & Ecosystem
description: Information for organisations interested in partnering around the Brando (Brand Oracle) schema, implementations, and integrations.
---

# Partners & ecosystem

Brando (Brand Oracle) is designed as an **open, vendor-neutral schema** that can be implemented by:

- agencies and consultancies,
- systems integrators,
- product and platform teams,
- internal “Brand OS” and AI engineering teams.

To support real-world adoption while protecting the integrity of the vocabulary, Advanced Analytica operates a **lightweight partner model** rather than a heavy certification programme.

This page explains:

- what we mean by a **Brando Implementation Partner**,  
- how technology providers can be recognised as having **Brando-aware integrations**,  
- and how to express alignment with Brando in a way that’s consistent with our [trademark](use-brando-trademark.md) and [Terms of Service](terms-of-service.md).

> **Note**  
> This page is descriptive, not contractual. Any formal partnership, co-marketing, or certification arrangement will be governed by a separate written agreement.

---

## 1. Brando Implementation Partners

A **Brando Implementation Partner** is an organisation (typically an agency, consultancy, or SI) that:

- has **successfully implemented** Brando vocab v1.3 in at least one real environment, and
- uses the schema in a way that is **compatible with the published vocabulary** (no silent forks or incompatible semantics).

Typical characteristics:

- Experience modelling brands and brand portfolios using:
    - `brando:Brand`, `brando:Context`,
    - `brando:VerbalToken`, `brando:VisualToken`, `brando:AudioToken`,
    - `brando:Policy`, and where relevant `brando:BrandedCategory` and `brando:Campaign`.
- Ability to produce **Brando JSON-LD / YAML graphs** that:
    - follow the published domains and ranges,
    - separate identity, expression, and governance cleanly,
    - can be consumed by LLMs, agents, and Brand OS runtimes.
- Some experience integrating Brando with:
    - existing brand stacks (DAM, CMS, portals),
    - AI runtimes (chatbots, copilots, agents),
    - or knowledge-graph / data platforms.

### 1.1 What partner status means

Where we recognise an organisation as a Brando Implementation Partner:

- We may list them on this site (with their consent) as having **demonstrated experience** with Brando implementations.
- They may describe themselves in factual terms such as:
    - “Brando implementation partner”, or
    - “We implement Brand Knowledge Graphs using the Brando schema v1.3”,

    provided they:

    - follow the guidelines in [Using the Brando name and trademark](use-brando-trademark.md),
    - do not imply exclusive or official status beyond what is agreed in writing.

Partner status does **not** mean:

- that Advanced Analytica guarantees or warrants any particular outcome of a partner’s work,
- that the partner is acting as our legal representative or agent,
- or that we endorse their entire technology stack or service portfolio.

---

## 2. Technology & integration partners

A **technology or integration partner** is typically:

- a software product,
- platform,
- or internal system

that can **consume or produce Brando-aligned data**, for example:

- ingesting Brando JSON-LD as configuration for prompts or policies,
- exposing Brando-compatible fields in a UI or API,
- using Brando types and properties to configure agents, workflows, or content generation.

Examples of integration patterns (non-exhaustive):

- A design tool that can read `brando:VisualToken` to configure themes and components.
- A chatbot platform that selects `brando:Brand` + `brando:Context` and assembles system prompts and guard rails from linked tokens and policies.
- A knowledge-graph platform that treats Brando vocab v1.3 as a first-class schema for brand and governance data.

### 2.1 Describing Brando-aware integrations

If your product or platform supports Brando, preferred wording includes:

- “Supports the Brando (Brand Oracle) schema v1.3”
- “Can ingest Brando JSON-LD Brand Knowledge Graphs”
- “Brando-compatible configuration for brand identity, tokens, and policies”

Avoid wording that implies official certification or ownership, such as “Official Brando Platform”, unless explicitly agreed with us in writing.

---

## 3. Alignment expectations

To keep the Brando ecosystem healthy, we ask that partners:

1. **Respect the vocabulary semantics**

    - Use the `brando:` classes and properties with the meaning given in the official JSON-LD vocabulary.
    - Avoid redefining existing terms in incompatible ways.
    - If you need extra fields, define them as **extensions** in your own namespace (and describe them clearly).

2. **Keep versioning explicit**

    - State which Brando vocab version you target (e.g. “Brando schema v1.3”).
    - If you introduce profiles (e.g. “Brando for [industry]”), label them clearly as **profiles or extensions**, not as the core schema.

3. **Avoid confusing naming**

    - Follow the guidance in [Using the Brando name and trademark](use-brando-trademark.md).
    - Use qualifiers like “for Brando”, “Brando-compatible”, “Brando-aware” rather than names that suggest you *are* Brando.

4. **Feed back implementation experience**

    - Where possible, share bug reports, ambiguities, and improvement ideas.
    - This helps us evolve the schema and documentation based on real-world use.

---

## 4. How to explore partnership

If you are:

- an agency, consultancy, or SI that wants to be recognised as a Brando Implementation Partner, or  
- a technology provider building Brando-aware integrations,

you can start with a simple email:

- **Email:** `ops@advancedanalytica.co.uk`  
- **Subject line suggestion:** “Brando partnership enquiry – [Your organisation]”

Helpful information to include:

- A short description of your organisation and focus.
- How you are currently using (or planning to use) Brando.
- Links to:
    - any public examples or repos (if applicable),
    - documentation or internal architecture notes (where you can share them).
- Whether you are primarily interested in:
    - implementation collaboration,
    - co-designing extensions/profiles,
    - product/platform integration,
    - or something else.

We will typically:

- review the information you provide,
- schedule a short call to understand your use case,
- and decide together whether a formal partner designation or a looser “Brando-compatible” relationship makes sense.

---

## 5. Relationship to trademarks and Terms of Service

This page should be read together with:

- [Using the Brando name and trademark](use-brando-trademark.md)  
- [Terms of Service](terms-of-service.md)

In case of any conflict:

- the **Terms of Service** and any **formal written agreement** between your organisation and Advanced Analytica will take precedence over this descriptive partner page.

---

If you’re experimenting with Brando and are not yet ready for any formal partnership, that’s completely fine. The schema is intentionally open: you can start building **Brand Knowledge Graphs and Brand Operating Systems** using the documentation and examples on this site, and only later decide whether a more formal collaboration makes sense.
