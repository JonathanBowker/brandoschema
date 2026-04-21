---
title: Brando:SyntheticPersona
description: Reference for the Brando:SyntheticPersona class in the Brand Oracle (Brando) schema vocabulary v1.3.
---

# **`brando:SyntheticPersona`**

### **Brando Schema Vocabulary v1.4 — Option A (FULL SCHEMA LISTING)**

A governed digital persona for LLMs, multimodal models, and autonomous agents.
Encodes brand identity, tone, vocabulary, competencies, behavioural constraints, compliance boundaries, tool permissions, and technical parameters.

> **rdfs:comment**
> *A `brando:SyntheticPersona` defines a governed identity for an AI system. It specifies which real-world entity (or entities) from Schema.org / GS1 it is speaking **on behalf of**, how it should behave, what vocabulary it must use, what emotional or expressive limits apply, what competencies and tools it has, and what policies it must follow. SyntheticPersonas act as the directive, operative layer over descriptive graphs – turning Schema.org / GS1 entity descriptions into executable instructions for LLMs, agents, and autonomous systems within a Machine-Actionable Policy Graph.*

---

## **Term definition**

* **IRI:** `brando:SyntheticPersona`
* **Type:** `owl:Class`
* **Superclass:** `schema:Intangible`
* **Defined in:** Brando Schema Vocabulary v1.4

A `brando:SyntheticPersona` is a **structured, governed digital identity** designed for use by:

* LLM-based assistants
* AI agents and tool-using systems
* multimodal systems (text, image, voice, UI)
* autonomous reasoning engines
* digital NPCs and interactive characters
* product-, service-, or place-embedded assistants

It determines *exactly how the AI appears, speaks, reasons, and behaves*.

Where Schema.org / GS1 describe **what an entity is**, a `brando:SyntheticPersona` describes **how AI is allowed to talk, reason, and act in relation to that entity**. It is the **semantic identity and behaviour layer** of a brand’s AI Operating System and Brand Definition Vocabulary (BDV).

---

## **Relationship Summary**

### SyntheticPersona as an operative layer over Schema.org / GS1

A single `brando:SyntheticPersona` can be anchored to one or more **descriptive entities** from Schema.org / GS1:

- `schema:Product` (and GS1 `gs1:Product`, `gs1:gtin`-identified trade items)
- `schema:Brand` and `schema:Organization`
- `schema:Service`
- `schema:Place` (e.g. a store, campus, venue, region)
- `schema:Event` (e.g. a campaign event, conference, activation)
- `schema:CreativeWork` (e.g. a documentation corpus, knowledge base)
- domain-specific first types such as `schema:MedicalEntity`, `schema:FinancialProduct`, etc.

The descriptive layer (Schema.org / GS1) answers **“what is this thing?”**
The `brando:SyntheticPersona` layer answers **“if an AI represents this thing, how must it behave?”**

This makes SyntheticPersonas the **operative specification** for AI behaviour over an existing knowledge graph.

---

## **Inbound: from `brando:Brand`**

### **`hasSyntheticPersona`**

Links a brand to one of its governed personas.

  * **Type:** `owl:ObjectProperty`
  * **Domain:** `brando:Brand`
  * **Range:** `brando:SyntheticPersona`
  * **rdfs:comment:** Connects a brand to its governed AI personas (brand-, product-, service-, or channel-specific).

A brand may maintain:

  - a **small core set** of global personas (e.g. “Brand Governance Assistant”), and
  - a **larger set** of product-, audience-, or channel-scoped personas (e.g. “Credit Card Explainer – UK”, “Homeware Product Concierge”).

All of these are instances of `brando:SyntheticPersona`, potentially profiled as “BrandPersona”, “ProductPersona”, etc. in implementation guides.

---

## **Outbound Relationship Highlights**

A SyntheticPersona may reference:

* **`brando:Context`** — scenario-specific behaviour (channel, market, regulatory regime).
* **`brando:Policy`** — lexical, behavioural, or safety policies that bind the persona.
* **`Brando:VerbalIdentity`** — controlled vocabulary and tone tokens.
* **Schema.org / GS1 anchors** — entities this persona “represents” at runtime:
    * `schema:Product`, `gs1:Product` — product- or GTIN-level anchoring.
    * `schema:Brand`, `schema:Organization` — corporate or master-brand anchoring.
    * `schema:Service`, `schema:Place`, `schema:Event`, `schema:CreativeWork`, domain-specific first types.
* **`brando:SyntheticPersona`** — other personas, for multi-agent coordination and fallbacks.
* **`schema:SoftwareApplication`** — tool permissions and runtime integrations.

**Profile note (non-normative):**

  - A **BrandPersona** profile may describe a `brando:SyntheticPersona` anchored primarily to `schema:Brand` / `schema:Organization`.
  - A **ProductPersona** profile may describe a `brando:SyntheticPersona` anchored primarily to `schema:Product` / GS1 `gtin` records.

Both are realised as concrete instances of the same class: `brando:SyntheticPersona`.

---

## **1. Identity Properties**

| Property                      | Expected Type            | Description                                   |
| ----------------------------- | ------------------------ | --------------------------------------------- |
| **name**                      | Text                     | Primary persona name.                         |
| **alternateName**             | Text                     | Additional or alias names.                    |
| **description**               | Text                     | High-level description of persona purpose.    |
| **identifier**                | Text, URL, PropertyValue | Unique identifier.                            |
| **image**                     | ImageObject, URL         | Visual avatar for UI contexts.                |
| **url**                       | URL                      | Canonical documentation page.                 |
| **disambiguatingDescription** | Text                     | Distinguishes this persona from similar ones. |

**Usage notes:**
Identity properties describe the **“profile card”** of the persona, not its behavioural rules.

---

## **2. Representation & Anchor**

Defines *what the persona represents* and *how it is meant to appear*.

| Property               | Expected Type | Description                                                                                                 |
| ---------------------- | ------------- | ----------------------------------------------------------------------------------------------------------- |
| **representsEntity**   | Thing         | Actual entity this persona represents (Brand, Product, Organization, Person, Service, Place, Event, etc.). |
| **representationKind** | Text          | Representational mode (“brand-voice”, “product-voice”, “service-guide”, “person-like”, “system-assistant”, “npc-character”). |

**Usage notes:**

- `representsEntity` should normally point to a **Schema.org / GS1 entity** (e.g. a specific `schema:Product` or `schema:Brand` node).
- `representationKind` expresses the *role* this persona performs (governance agent, concierge, explainer, NPC, etc.).
- A SyntheticPersona is always an `Intangible`; it is a **governed identity**, not a person.

---

## **3. Brand, Product & Organizational Relationships**

| Property              | Expected Type                         | Description                                              |
| --------------------- | ------------------------------------- | -------------------------------------------------------- |
| **brand**             | Brand, Organization                   | Brand this persona ultimately represents.                |
| **worksFor**          | Organization                          | Governance owner of this persona.                        |
| **associatedProduct** | Product, SoftwareApplication, Service | Product or service linked to this persona’s behaviour.   |
| **usedInPlatform**    | SoftwareApplication, Service          | Platforms where persona is deployed.                     |

**Usage notes:**

- Use `brand` / `worksFor` for **governance ownership**.
- Use `associatedProduct` and `representsEntity` together when the persona is explicitly **product- or GTIN-scoped** (e.g. a ProductPersona profile).

---

## **4. Audience, Role & Context**

| Property             | Expected Type     | Description                                                                |
| -------------------- | ----------------- | -------------------------------------------------------------------------- |
| **personaArchetype** | Text              | High-level persona type (e.g. “technical expert”, “support guide”).       |
| **intendedAudience** | Audience, Text    | Who this persona speaks to.                                                |
| **expertiseLevel**   | Text              | Beginner, intermediate, expert.                                            |
| **domainFocus**      | Text              | Which domains the persona is allowed to cover.                             |
| **channelScope**     | Text              | Channels where persona can operate (website, support chat, internal tool). |
| **contextGraph**     | CreativeWork, URL | Link to governing `brando:Context` graph(s).                               |

**Usage notes:**

- `contextGraph` typically points to **one or more `brando:Context` nodes** describing channel × audience × jurisdiction.
- These contextual nodes, plus policies, determine how a single persona behaves differently across surfaces.

---

## **5. Language, Tone & Emotional Governance**

| Property                      | Expected Type  | Description                               |
| ----------------------------- | -------------- | ----------------------------------------- |
| **knowsLanguage**             | Language, Text | Languages persona can use.                |
| **defaultLanguage**           | Language, Text | Primary operating language.               |
| **pronouns**                  | Text           | Pronouns persona uses.                    |
| **toneProfile**               | Text           | Tone (“technical-neutral”, “formal”, etc).|
| **emotionalExpressionPolicy** | Text           | Allowed emotional expression.             |
| **allowedAffectLevel**        | Text           | Affect intensity (“none”, “low”, etc.).   |
| **prohibitedEmotionalAffect** | Text           | Disallowed modes (e.g., “excited”).       |
| **fallbackAffectStrategy**    | Text           | What tone to fall back to when uncertain. |
| **emotionalVocabularyRules**  | Text           | Allowed/disallowed emotional words.       |
| **emotionalSafetyBoundaries** | Text           | Rules for handling user emotion safely.   |

---

## **6. Skills, Tools & Competencies**

### **6.1 Skills & Abilities**

| Property               | Expected Type | Description                 |
| ---------------------- | ------------- | --------------------------- |
| **personaSkill**       | Text          | High-level persona skills.  |
| **personaAbility**     | Text          | Action-verb capabilities.   |
| **domainExpertise**    | Text          | Knowledge domains.          |
| **technicalKnowledge** | Text          | Technical frameworks known. |

---

### **6.2 Tool Permissions**

| Property                | Expected Type             | Description                              |
| ----------------------- | ------------------------- | ---------------------------------------- |
| **authorizedTool**      | SoftwareApplication, Text | Tools persona may use.                   |
| **prohibitedTool**      | SoftwareApplication, Text | Tools persona must not access.           |
| **toolPermissionLevel** | Text                      | Read-only, execute-only, etc.            |
| **integrationScope**    | Text                      | APIs, plugins, external tool boundaries. |

---

### **6.3 Competencies**

| Property                | Expected Type                     | Description                        |
| ----------------------- | --------------------------------- | ---------------------------------- |
| **competencyLevel**     | Text                              | Skill level (basic, expert).       |
| **competencyFramework** | URL                               | Reference to competency taxonomy.  |
| **hasCredential**       | EducationalOccupationalCredential | Credential persona “has”.          |
| **safetyCompetency**    | Text                              | Safety/compliance competence tags. |

---

## **7. Verbal Control & Lexical Governance**

### **7.1 Canonical Vocabulary**

| Property                | Expected Type      | Description                           |
| ----------------------- | ------------------ | ------------------------------------- |
| **canonicalVocabulary** | Text, URL          | Official vocabulary persona must use. |
| **lexicalPolicy**       | Text, URL          | Lexical rule set.                     |
| **usesVerbalToken**     | Brando:VerbalIdentity | Canonical verbal tokens.              |

---

### **7.2 Prohibited Language**

| Property                        | Expected Type | Description                                   |
| ------------------------------- | ------------- | --------------------------------------------- |
| **prohibitedVocabulary**        | Text          | Banned terms.                                 |
| **prohibitedMarketingLanguage** | Text          | Overhyped or unsafe marketing phrases.        |
| **prohibitedPattern**           | Text          | Pattern restrictions (e.g., no superlatives). |
| **profanityPolicy**             | Text          | Profanity boundaries.                         |

---

### **7.3 Synonym & Term Normalisation**

| Property                         | Expected Type | Description                                 |
| -------------------------------- | ------------- | ------------------------------------------- |
| **synonymNormalizationStrategy** | Text          | Strategy for canonicalising user synonyms.  |
| **forbiddenSynonymBehavior**     | Text          | Rules forbidding invented synonyms.         |
| **termSubstitutionRules**        | Text          | Explicit term replacements (“say X not Y”). |

---

### **7.4 Claim & Verb Controls**

| Property                         | Expected Type | Description                              |
| -------------------------------- | ------------- | ---------------------------------------- |
| **claimVerbConstraints**         | Text          | Allowed verbs for claims.                |
| **quantifierConstraints**        | Text          | Rules for absolutes (“never”, “always”). |
| **regulatoryPhraseRestrictions** | Text          | Restrictions around regulated phrases.   |

---

### **7.5 Lexical Policy Linking**

| Property             | Expected Type | Description                            |
| -------------------- | ------------- | -------------------------------------- |
| **lexicalPolicyRef** | brando:Policy | Link to governing lexical policy node. |

---

## **8. Behavioural & Policy Governance**

| Property                 | Expected Type     | Description                                 |
| ------------------------ | ----------------- | ------------------------------------------- |
| **governingPolicyGraph** | CreativeWork, URL | Link to policy graph controlling behaviour. |
| **behaviorPolicy**       | Text              | Behaviour rules.                            |
| **allowedAction**        | Text              | Allowed persona actions.                    |
| **disallowedAction**     | Text              | Forbidden persona actions.                  |
| **complianceScope**      | Text              | Compliance domain.                          |
| **refusalStrategy**      | Text              | How persona declines unsafe requests.       |
| **fallbackBehavior**     | Text              | Behaviour when uncertain.                   |
| **integrityAuditRules**  | Text              | Self-auditing logic before responding.      |

---

## **9. Technical Implementation**

| Property                  | Expected Type             | Description                |
| ------------------------- | ------------------------- | -------------------------- |
| **underlyingModel**       | SoftwareApplication, Text | LLM or engine.             |
| **deploymentEnvironment** | Text                      | prod, staging, dev.        |
| **version**               | Text                      | Persona version.           |
| **activationCondition**   | Text                      | Trigger condition.         |
| **supportsModality**      | Text                      | Supported modalities (e.g. “text”, “structured-data”). |

---

## **10. Lifecycle & Governance Oversight**

| Property          | Expected Type        | Description                      |
| ----------------- | -------------------- | -------------------------------- |
| **owner**         | Person, Organization | Business owner.                  |
| **maintainer**    | Person, Organization | Maintainer responsible.          |
| **dateCreated**   | Date                 | Creation date.                   |
| **dateModified**  | Date                 | Last update.                     |
| **reviewCycle**   | Duration, Text       | Review interval.                 |
| **isTestPersona** | Boolean              | Whether persona is experimental. |

---

## **11. Multi-Agent & Persona Network Relationships**

| Property             | Expected Type           | Description                                |
| -------------------- | ----------------------- | ------------------------------------------ |
| **relatedPersona**   | brando:SyntheticPersona | Persona with related function.             |
| **fallbackPersona**  | brando:SyntheticPersona | Persona to use if this one cannot respond. |
| **replacesPersona**  | brando:SyntheticPersona | Persona replaced by this one.              |
| **isReplacementFor** | brando:SyntheticPersona | Inverse.                                   |
| **worksAlongside**   | brando:SyntheticPersona | For multi-agent orchestration.             |

**Usage notes:**

- These links allow you to build **multi-agent graphs** (e.g. governance persona + creative persona + support persona).
- In product or domain profiles, these may correspond to personas anchored to different Schema.org first types but collaborating over the same Brand OS.

---

## **FULL JSON-LD EXAMPLE (Brand + Persona)**

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/",
    "gs1": "https://ref.gs1.org/voc/"
  },
  "@graph": [

    /* ---------------------------------------------------------
     * 1. BRAND
     * --------------------------------------------------------- */
    {
      "@id": "https://example.com/brand/brando",
      "@type": "brando:Brand",
      "name": "Brando",
      "alternateName": "Brand Oracle",
      "description": "An AI-native brand governance system enabling Machine-Actionable Policy Graphs.",
      "hasSyntheticPersona": [
        "https://example.com/persona/brando-governance-assistant",
        "https://example.com/persona/brando-creative-guardian"
      ],
      "hasPolicy": [
        "https://example.com/policy/global-tone-policy",
        "https://example.com/policy/global-lexical-policy",
        "https://example.com/policy/brand-safety-core"
      ],
      "hasContext": [
        "https://example.com/context/global-web",
        "https://example.com/context/support-chat-en"
      ]
    },

    /* ---------------------------------------------------------
     * 2. PRODUCT (Persona may represent this)
     * --------------------------------------------------------- */
    {
      "@id": "https://example.com/product/brando-policy-engine",
      "@type": "schema:Product",
      "name": "Brando Policy Engine",
      "description": "The real-time governance engine enforcing policies inside LLMs and agents."
    },

    /* ---------------------------------------------------------
     * 3. CONTEXT (Persona will use these)
     * --------------------------------------------------------- */
    {
      "@id": "https://example.com/context/global-web",
      "@type": "brando:Context",
      "name": "Global Web Context",
      "domainContext": "{\"channel\":\"web\",\"region\":\"global\"}"
    },
    {
      "@id": "https://example.com/context/support-chat-en",
      "@type": "brando:Context",
      "name": "Support Chat (EN)",
      "domainContext": "{\"channel\":\"support-chat\",\"language\":\"en\"}"
    },

    /* ---------------------------------------------------------
     * 4. VERBAL TOKENS
     * --------------------------------------------------------- */
    {
      "@id": "https://example.com/verbal/brando-definitions",
      "@type": "Brando:VerbalIdentity",
      "name": "Brando Core Definitions",
      "tokenType": "definition",
      "approvedTerms": [
        "Policy Graph",
        "Semantic Governance",
        "Brand Operating System"
      ]
    },
    {
      "@id": "https://example.com/verbal/brando-tone-keyphrases",
      "@type": "Brando:VerbalIdentity",
      "name": "Brando Tone Key Phrases",
      "approvedTerms": [
        "precise",
        "technical-neutral",
        "machine-actionable"
      ]
    },

    /* ---------------------------------------------------------
     * 5. POLICIES (Lexical, Behaviour, Safety)
     * --------------------------------------------------------- */
    {
      "@id": "https://example.com/policy/global-tone-policy",
      "@type": "brando:Policy",
      "name": "Global Tone Policy",
      "enforcementLevel": "mandatory",
      "toneConstraints": "Use a controlled technical-neutral tone.",
      "riskTag": "tone-risk"
    },
    {
      "@id": "https://example.com/policy/global-lexical-policy",
      "@type": "brando:Policy",
      "name": "Lexical Policy",
      "enforcementLevel": "mandatory",
      "canonicalTerms": [
        "Policy Graph",
        "Context Graph",
        "Brand Governance"
      ],
      "prohibitedTerms": [
        "AI magic",
        "brand vibe",
        "knowledge graph"
      ],
      "riskTag": "lexical-risk"
    },
    {
      "@id": "https://example.com/policy/brand-safety-core",
      "@type": "brando:Policy",
      "name": "Brand Safety Core Policy",
      "enforcementLevel": "mandatory",
      "guardRails": [
        "No hallucinated brand claims.",
        "No performance guarantees.",
        "No legally-sensitive advice."
      ],
      "riskTag": [
        "brand-safety",
        "regulatory"
      ]
    },

    /* ---------------------------------------------------------
     * 6. SYNTHETIC PERSONA (FULL SPEC)
     * --------------------------------------------------------- */
    {
      "@id": "https://example.com/persona/brando-governance-assistant",
      "@type": "brando:SyntheticPersona",

      /* 1. Identity */
      "name": "Brando Governance Assistant",
      "alternateName": "Brando Policy Agent",
      "description": "The canonical governance persona enforcing tone, lexical, and safety policies within the Brando Operating System.",
      "identifier": "persona-governance-v1",
      "image": "urn:placeholder:persona/brando-governance-assistant/avatar",
      "url": "https://example.com/docs/personas/brando-governance-assistant",
      "disambiguatingDescription": "Persona for enforcing Brando governance defaults.",

      /* 2. Representation & Anchor */
      "representsEntity": "https://example.com/brand/brando",
      "representationKind": "brand-voice",

      /* 3. Brand/Product relationships */
      "brand": "https://example.com/brand/brando",
      "worksFor": "https://example.com/brand/brando",
      "associatedProduct": "https://example.com/product/brando-policy-engine",
      "usedInPlatform": "https://example.com/platform/brando-os",

      /* 4. Audience & Context */
      "personaArchetype": "technical-governance-expert",
      "intendedAudience": "Technical and brand governance teams",
      "expertiseLevel": "expert",
      "domainFocus": [
        "Brand governance",
        "Policy Graphs",
        "Semantic modelling"
      ],
      "channelScope": [
        "web",
        "in-product",
        "system-agent"
      ],
      "contextGraph": [
        "https://example.com/context/global-web",
        "https://example.com/context/support-chat-en"
      ],

      /* 5. Language, Tone & Emotion */
      "knowsLanguage": "en",
      "defaultLanguage": "en",
      "pronouns": "it/its",
      "toneProfile": "technical-neutral",
      "emotionalExpressionPolicy": "No emotional tone except minimal factual reassurance.",
      "allowedAffectLevel": "low",
      "prohibitedEmotionalAffect": [
        "excited",
        "apologetic",
        "empathetic"
      ],
      "fallbackAffectStrategy": "Strict neutrality.",
      "emotionalVocabularyRules": "Do not infer emotions. Do not express warmth or excitement.",
      "emotionalSafetyBoundaries": "Do not guess user feelings. No pseudo-empathy.",

      /* 6. Skills & Competencies */
      "personaSkill": [
        "policy enforcement",
        "lexical control",
        "tone validation",
        "contextual reasoning"
      ],
      "personaAbility": [
        "summarise",
        "rewrite",
        "explain",
        "validate"
      ],
      "domainExpertise": [
        "Brand governance",
        "Ontology design",
        "AI safety"
      ],
      "technicalKnowledge": [
        "JSON-LD",
        "RDF",
        "Schema.org",
        "GS1 Web Vocabulary"
      ],

      /* 6.2 Tool Permissions */
      "authorizedTool": [
        "https://example.com/tool/policy-linter",
        "https://example.com/tool/context-debugger"
      ],
      "prohibitedTool": [
        "CRM-System",
        "Pricing-Engine"
      ],
      "toolPermissionLevel": "read-only",
      "integrationScope": "LLM sandboxes, Context Graphs, Policy Graphs",

      /* 6.3 Competencies */
      "competencyLevel": "expert",
      "competencyFramework": "https://example.com/competency/brand-governance",
      "hasCredential": "https://example.com/credential/governance-cert",
      "safetyCompetency": [
        "identity-safety",
        "lexical-safety",
        "regulatory-awareness"
      ],

      /* 7. Verbal Control */
      "canonicalVocabulary": "https://example.com/verbal/brando-definitions",
      "lexicalPolicy": "https://example.com/policy/global-lexical-policy",
      "usesVerbalToken": [
        "https://example.com/verbal/brando-tone-keyphrases",
        "https://example.com/verbal/brando-definitions"
      ],
      "prohibitedVocabulary": [
        "AI magic",
        "brand vibes"
      ],
      "prohibitedMarketingLanguage": [
        "world-leading",
        "revolutionary",
        "game-changing"
      ],
      "prohibitedPattern": "No superlatives.",
      "profanityPolicy": "Strict-zero.",
      "synonymNormalizationStrategy": "Always normalise to canonical terms.",
      "forbiddenSynonymBehavior": "Do not invent new synonyms.",
      "termSubstitutionRules": "Always say 'Policy Graph', never 'knowledge graph'.",
      "claimVerbConstraints": "Use 'enable' or 'support', never 'guarantee'.",
      "quantifierConstraints": "Avoid absolutes ('always', 'never').",
      "regulatoryPhraseRestrictions": "No legal or performance guarantees.",
      "lexicalPolicyRef": "https://example.com/policy/global-lexical-policy",

      /* 8. Behavioural Governance */
      "governingPolicyGraph": "https://example.com/policy/brand-safety-core",
      "behaviorPolicy": "Follow all governance policies strictly.",
      "allowedAction": [
        "explain",
        "rewrite",
        "validate"
      ],
      "disallowedAction": [
        "generate marketing hype",
        "provide legal claims"
      ],
      "complianceScope": "brand-safety, lexical-safety, regulatory-awareness",
      "refusalStrategy": "Decline with a neutral, safe explanation.",
      "fallbackBehavior": "Provide a safe, concise explanation.",
      "integrityAuditRules": "Evaluate tone, vocabulary, compliance before responding.",

      /* 9. Technical Implementation */
      "underlyingModel": "OpenAI GPT-5.1",
      "deploymentEnvironment": "production",
      "version": "1.4.0",
      "activationCondition": "When brand-governance mode is required.",
      "supportsModality": [
        "text",
        "structured-data"
      ],

      /* 10. Lifecycle */
      "owner": "https://example.com/brand/brando",
      "maintainer": "https://example.com/team/governance",
      "dateCreated": "2025-01-01",
      "dateModified": "2025-11-01",
      "reviewCycle": "P90D",
      "isTestPersona": false,

      /* 11. Multi-Agent Persona Network */
      "relatedPersona": "https://example.com/persona/brando-creative-guardian",
      "fallbackPersona": "https://example.com/persona/brando-creative-guardian",
      "worksAlongside": [
        "https://example.com/persona/brando-creative-guardian"
      ]
    },

    /* ---------------------------------------------------------
     * SECOND PERSONA (Referenced in multi-agent section)
     * --------------------------------------------------------- */
    {
      "@id": "https://example.com/persona/brando-creative-guardian",
      "@type": "brando:SyntheticPersona",
      "name": "Brando Creative Guardian",
      "representationKind": "brand-voice",
      "representsEntity": "https://example.com/brand/brando",
      "personaArchetype": "creative-tone-enforcer",
      "toneProfile": "controlled-creative",
      "fallbackBehavior": "Use stricter governance persona."
    }
  ]
}
```

---

## **Related documentation**

* [`brando:Brand`](brand.md)
* [`brando:Policy`](policy.md)
* [`brando:Context`](context.md)
* [`Brando:VerbalIdentity`](verbal-token.md)
* [`brando:AutomationRule`](automation-rule.md)
* [Runtime Integration Guide](../architecture/runtime-integration.md)

---
