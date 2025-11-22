---
title: Using the Brando name and trademark
description: Guidelines for referring to the Brando (Brand Oracle) schema, name, and trademarks in documentation, software, and integrations.
---

# Using the Brando name and trademark

**Brando** and **Brand Oracle (Brando)** are trademarks of **Advanced Analytica Ltd**.

This page explains how you may:

- refer to Brando in **documentation, talks, and articles**,
- describe **implementations and integrations**,
- use the **Brando name** in open source projects, products, or services,

while avoiding confusion about who owns and maintains the schema.

> This page is not a substitute for legal advice.  
> If you’re unsure about a specific use, contact **ops@advancedanalytica.co.uk**.

---

## 1. What is protected?

The following are protected as trademarks / brand identifiers of **Advanced Analytica Ltd**:

- **Name:**  
    - “Brando”  
    - “Brand Oracle”  
    - “Brand Oracle (Brando)”
- **Stylised forms and logos** used on this site and related materials.
- The combination of the above with terms such as:
    - “Brand Oracle Schema”  
    - “Brando Schema”  
    - “Brando Brand Definition Vocabulary (BDV)”

The **schema / vocabulary itself** (the JSON-LD terms and technical specification) is published for open use under the license described on the [About](about.md) page, but the **names and logos** remain the property of Advanced Analytica.

---

## 2. Acceptable ways to refer to Brando

You are encouraged to reference Brando when:

- describing how your system integrates with Brando,
- documenting that your schemas or APIs are compatible with Brando vocab v1.3,
- writing articles, talks, or tutorials about Brando and Brand Knowledge Graphs.

### 2.1 Examples of acceptable wording

In technical documentation, you can say things like:

- “This library provides utilities for working with the **Brando (Brand Oracle) schema**.”
- “Our Brand OS is compatible with the **Brando JSON-LD vocabulary** for brand governance.”
- “This example uses `brando:Brand` and `brando:Context` types defined in the **Brando schema v1.3**.”
- “We store brand identity and policies using **Brando-compatible JSON-LD**.”

Where practical, include attribution once per document or page, for example:

> “Brando and Brand Oracle are trademarks of Advanced Analytica Ltd.  
> This implementation is not affiliated with or endorsed by Advanced Analytica.”

---

## 3. Uses that require permission

You **must not** imply that your product, library, or service is:

- **official**,  
- **endorsed by**,  
- **certified by**, or  
- **maintained by**

Advanced Analytica unless you have an explicit written agreement.

In particular, the following uses **require prior permission**:

- Naming a product or company in a way that suggests official origin, e.g.:
    - `Brando Cloud`, `Brando Studio`, `Brand Oracle Platform`, etc.
- Using the Brando logo or similar branding in:
    - product logos,
    - marketing materials,
    - or UI elements that could be mistaken for official Brando or Advanced Analytica products.
- Claiming “official Brando certification” or similar status without an agreed programme.

If you want to explore official partnerships, co-branding, or certification, contact:

- **Email:** `ops@advancedanalytica.co.uk`

---

## 4. Recommended naming patterns for implementations

If you are building tools around Brando, a few patterns help keep things clear:

### 4.1 Libraries and SDKs

Good patterns:

- `brand-schema-brando-adapter`
- `mycompany-brando-toolkit`
- `brando-v1.3-typescript-model` (for open source bindings)

Less good (likely confusing):

- `Official Brando SDK`
- `Brand Oracle™ Core` (if not maintained by Advanced Analytica)

When in doubt, add qualifiers such as:

- “for Brando schema v1.3”
- “Brando-compatible”
- “Brando-integrated”

and include a short attribution:

> “Brando is a trademark of Advanced Analytica Ltd. This library is an independent, community-maintained implementation.”

### 4.2 Internal projects and repos

For **internal-only** code and configuration (within your organisation), you have more flexibility. You can:

- name repos `brandoschema-config`, `brando-graph`, etc.,
- describe teams as “owning the Brando integration” internally.

The same core principle still applies: if you expose something externally (open source or commercial), avoid naming it in a way that suggests it is the **official** Brando implementation unless that is actually the case.

---

## 5. Using Brando examples and documentation

You may:

- copy code examples, JSON-LD snippets, and YAML fragments from this documentation,
- adapt them to your own environment,
- include them in your own documentation or demos,

provided that:

- you do not remove or obscure references to Brando where they are semantically necessary (e.g. the `brando:` namespace),
- you do not present the material as if it were your original specification.

Where you use substantial portions of examples or explanatory text, a simple attribution is appropriate, for example:

> “Based on examples from the Brando (Brand Oracle) schema documentation (brandoschema.com), © Advanced Analytica Ltd.”

---

## 6. Modifying or extending the Brando vocabulary

You are free to:

- define **extensions** to the Brando schema (additional classes/properties),
- publish **profiles** or specialisations for specific industries or platforms,
- describe your work as “Brando-compatible” where it follows the core vocabulary.

You should not:

- redefine the meaning of existing `brando:` terms in a way that conflicts with the published vocabulary,
- publish a fork under a name that suggests it is the canonical Brando schema.

If you create substantial extensions and want to reference them publicly, preferred language is:

- “Our schema **extends the Brando (Brand Oracle) vocabulary v1.3** with additional classes for [domain].”
- “This profile is **based on Brando schema v1.3** and adds [details].”

---

## 7. Questions and contact

If you are:

- unsure whether your intended use of “Brando” or “Brand Oracle” is appropriate,
- planning a product or project that uses the Brando name prominently,
- interested in an official partnership, certification, or co-branded initiative,

please contact:

- **Email:** `ops@advancedanalytica.co.uk`

We’re happy to clarify acceptable use and, where appropriate, explore formal agreements.

---

**Summary**

- The **schema and vocab** are open and intended for wide implementation.
- The **names and logos** (“Brando”, “Brand Oracle”) are protected marks of Advanced Analytica Ltd.
- You can freely say that your work is **Brando-compatible**, uses the **Brando schema**, or integrates with Brando—so long as you don’t imply official endorsement or ownership.
- When in doubt, attribute clearly and reach out for clarification.
