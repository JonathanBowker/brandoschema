---
title: brando:Prompt
description: Reference for the brando:Prompt class in the Brand Oracle (Brando) schema vocabulary v1.4.
---

# **`brando:Prompt`**

### **Brando Schema Vocabulary v1.4**

A governed, **brand-anchored prompt template** for LLMs, multimodal models, and agents.

A `brando:Prompt` encodes **how an AI should be instructed in a specific brand application** – including role, task, tone, constraints, variables, inputs, modalities, and expected output format – while remaining strictly aligned with:

- the **brand’s directives** (Brando BGV – Brand Governance Vocabulary),
- the **domain / application configuration** (e.g. BrandModel, BrandApplication, BrandTouchpoint),
- and the **governing policies** (tone, lexical, safety, regulatory).

> **rdfs:comment**
> *A `brando:Prompt` defines a governed, reusable prompt template for a given brand application (e.g. social post generation, PDP copy, support chat, image or video generation). It acts as a semantic bridge between Brando’s Brand Governance Vocabulary (tone, constraints, policies) and the runtime AI system (LLMs, multimodal models, tools, routes). It specifies the system role, task, constraints, variables, channels, modalities and output schema required for safe, on-brand AI behaviour.*

---

## **Term definition**

- **IRI:** `brando:Prompt`
- **Type:** `owl:Class`
- **Superclass:** `schema:CreativeWork`
- **Defined in:** Brando Schema Vocabulary v1.4

A `brando:Prompt` is a **structured, governance-ready instruction layer** designed for use by:

- **text generators** (web, email, social, ads, help centre, docs),
- **image / visual generators** (campaign visuals, PDP imagery, social creatives, layouts),
- **video generators** (scripts, storyboards, motion assets, short-form video),
- **audio / voice / sonic generators** (TTS voices, audio logos, sonic cues),
- **support / chat agents** (customer support, sales assistants, internal Q&A),
- **internal brand assistants** (brand guideline copilots, policy assistants),
- **campaign and creative tools** (brief-to-creative systems, concepting tools),
- **automation and policy engines** (pre-flight checks, routing, moderation, evaluation).

It determines **how an AI is instructed**, which context and policies are applied, and which outputs (including modalities) are expected, for a given brand use case.

Within a Brand Operating System, it is the **prompt-level semantic layer**, sitting on top of **BrandApplication / BrandModel / BrandGuideline** and under the **runtime AI execution environment**.

---

## **Relationship Summary**

### Prompt as an operative layer over BrandModel + BrandApplication

A `brando:Prompt` is typically anchored to **one or more concrete brand application nodes**:

- `brando:BrandApplication` (e.g. “Social Media Post Production”, “Homepage Hero Copy”, “Image Production”),
- `brando:BrandModel` (overall model configuration / routing),
- `brando:BrandTouchpoint` (channel-specific execution, e.g. “web PDP hero”, “email subject”, “support reply”, “social image creative”).

The BrandApplication and BrandModel answer **“what is this AI experience for?”**
`brando:Prompt` answers **“exactly how should this AI be instructed for that experience, in this modality?”**

### **Inbound: from BrandApplication / BrandModel**

#### **`brando:hasPrompt` (recommended)**

Links a brand application or model to its governed prompt template(s).

- **Type:** `owl:ObjectProperty`
- **Domain:** `brando:BrandApplication`, `brando:BrandModel`, `brando:BrandTouchpoint`
- **Range:** `brando:Prompt`
- **rdfs:comment:** Connects a brand application (e.g. “Social Post Generator”, “Image Generator”, “Support Chat”) to the prompt(s) that govern how the AI is instructed.

This lets each application declare **its canonical prompt templates**, and each BrandModel declare **its default system scaffolds**.

---

### **Inbound: from `brando:Brand`**

A `brando:Brand` may reference:

- brand-wide prompt templates: `brando:Prompt` (e.g. “global system prompt”),
- brand-specific models: `brando:BrandModel`.

Together, these support **portfolio-wide governance**: corporate voice + application-specific prompts + model configuration.

---

### **Outbound Relationships (anchor & governance)**

A `brando:Prompt` typically references:

- **Brand application nodes**:
  - `brando:BrandApplication` — what this prompt is for.
  - `brando:BrandTouchpoint` — where it runs (channel, placement).

- **Brand & policy nodes**:
  - `brando:Brand` — brand identity this prompt serves.
  - `brando:Policy` — lexical, claim, and safety constraints.
  - `brando:Context` — channel / region / audience contexts.

- **Runtime configuration**:
  - `schema:SoftwareApplication` — the LLM / multimodal endpoint.
  - `brando:generationParameter` — model-side parameters such as temperature, top_p, max tokens.

In many implementations, a `brando:Prompt` is also treated as the **binding between a BrandApplication and a BrandModel**, specialised around a channel, locale, touchpoint and modality.

---

## **1. Identity Properties**

> Prompt “profile card”.

| Property                      | Expected Type            | Description                                                |
| ----------------------------- | ------------------------ | ---------------------------------------------------------- |
| **name**                      | Text                     | Primary name of the prompt template.                       |
| **alternateName**             | Text                     | Additional, internal, or test names.                       |
| **description**               | Text                     | High-level description of the prompt’s purpose.            |
| **identifier**                | Text, URL, PropertyValue | Unique ID for the prompt (internal or external).           |
| **image**                     | ImageObject, URL         | Icon/avatar used in tools (optional).                      |
| **url**                       | URL                      | Canonical documentation page for this prompt.              |
| **disambiguatingDescription** | Text                     | Clarifies scope (e.g. “IG social post prompt v2.1 EN-GB”). |

**Usage notes:**
These fields describe the **prompt itself**, not the underlying brand guidelines or assets.

---

## **2. Application Anchor & Scope**

> Where the prompt “lands” in brand application space.

| Property                 | Expected Type                  | Description                                                                 |
| ------------------------ | ------------------------------ | --------------------------------------------------------------------------- |
| **appliesToApplication** | `brando:BrandApplication`, URL | Brand application this prompt serves (e.g. social posts, PDP copy, images).|
| **appliesToTouchpoint**  | `brando:BrandTouchpoint`, URL  | Specific touchpoint (e.g. “homepage hero”, “email subject”, “social image”).|
| **appliesToChannel**     | Text, URL                      | Channel labels: “web”, “email”, “social”, “support-chat”, “ads”, “OOH”.    |
| **appliesToLocale**      | Text                           | Locale code(s), e.g. `"en-GB"`, `"en-US"`.                                  |
| **useCaseScope**         | Text                           | Use-case labels (“generation”, “review”, “routing”, “summarisation”).      |
| **contextGraph**         | `brando:Context`, URL          | Linked contexts describing channel, region, audience, journey stage.       |

**Usage notes:**
This anchors the prompt to a **specific BrandApplication + context**, so it’s clear where it should and shouldn’t be used.

---

## **3. Brand & Ownership Context**

> How this prompt sits inside the brand governance model.

| Property                  | Expected Type         | Description                                                |
| ------------------------- | --------------------- | ---------------------------------------------------------- |
| **brand**                 | `schema:Brand`        | Brand visible to customers.                                |
| **worksFor**              | `schema:Organization` | Owning or accountable organisation.                        |
| **brandArchitectureRole** | Text                  | Role in brand architecture (“masterbrand”, “house-brand”). |
| **applicationCategory**   | Text                  | Category (e.g. “social-content”, “support”, “web-copy”, “image-generation”). |

---

## **4. Audience, Personas & Context**

> Who the assistant is effectively “talking to” when this prompt is used.

| Property             | Expected Type                 | Description                                                              |
| -------------------- | ----------------------------- | ------------------------------------------------------------------------ |
| **intendedAudience** | Audience, Text                | Shoppers, prospects, customers, employees, partners, etc.               |
| **audiencePersona**  | `brando:AudiencePersona`, URL | Linked audience persona definitions (if used).                           |
| **productPersona**   | `brando:ProductPersona`, URL  | Linked product persona (for product-centric prompts).                    |
| **syntheticPersona** | `brando:SyntheticPersona`, URL| Synthetic persona(s) used for evaluation/simulation.                     |
| **riskProfile**      | Text                          | Risk description (“regulated finance support”, “kids content”, etc.).    |

---

## **5. Language, Tone & Brand Expression**

> How the prompt instructs the AI to speak (for text/voice) or conceptually frame outputs (for visual/audio).

| Property            | Expected Type              | Description                                                             |
| ------------------- | -------------------------- | ----------------------------------------------------------------------- |
| **knowsLanguage**   | Language, Text             | Languages supported by this prompt.                                     |
| **defaultLanguage** | Language, Text             | Primary language (e.g. `"en-GB"`).                                      |
| **toneOfVoice**     | Text                       | Tone description (“warm, clear, non-hyped”, etc.).                      |
| **writingStyle**    | Text                       | Style hints (“short sentences”, “plain language”, etc.).                |
| **speechStyle**     | Text                       | For voice experiences (if applicable).                                  |
| **keyMessages**     | Text                       | Core “meta messages” about how the assistant should behave.             |
| **usesVerbalToken** | `brando:VerbalToken`, URL | Linked verbal identity assets (BGV tokens, phrases, patterns).        |

---

## **6. Constraints, Safety & Policy Binding**

> What the AI may and may not do under this prompt (across modalities).

| Property              | Expected Type       | Description                                                                   |
| --------------------- | ------------------- | ----------------------------------------------------------------------------- |
| **guardRails**        | Text                | Guardrail statements for outputs (e.g. “no political opinions”, “no nudity”).|
| **mustDos**           | Text                | Required behaviours (e.g. “always disclose sponsorship when…”).              |
| **mustNotDos**        | Text                | Prohibited behaviours (e.g. “no competitor bashing”, “no regulated advice”). |
| **prohibitedTerms**   | Text                | Words/phrases that must never be generated in text contexts.                 |
| **approvedTerms**     | Text                | Canonical phrases that should be preferred where relevant.                   |
| **riskTag**           | Text, URL           | Risk category tags (“regulated-finance”, “healthcare”, “youth”).             |
| **complianceTags**    | Text                | Compliance markers for this prompt (“ad-disclosure”, “GDPR-sensitive”).      |
| **refusalStrategies** | Text                | How to decline unsafe or out-of-scope requests.                              |
| **governingPolicyGraph** | URL, CreativeWork | Link to the policy graph controlling this prompt’s behaviour.                |
| **inheritsPolicies**  | URL                 | Brand or category policies this prompt inherits.                             |

---

## **7. Data, Inputs, Outputs & Modality**

> What the prompt expects in, what it produces, and in which modality.

| Property            | Expected Type | Description                                                                |
| ------------------- | -------------| -------------------------------------------------------------------------- |
| **inputs**          | Text          | Human-readable description of expected inputs (content, metadata, etc.).  |
| **outputs**         | Text          | Description of expected outputs (copy, JSON, images, audio, etc.).        |
| **inputSchema**     | Text, URL     | Formal schema or shape for inputs if applicable (e.g. JSON schema).       |
| **outputSchema**    | Text, URL     | Formal schema or shape for outputs (e.g. JSON schema).                    |
| **dataSource**      | Text, URL     | Data sources this prompt may rely on (knowledge bases, feeds, APIs).      |
| **outputModality**  | Text          | Primary output modality or modalities (e.g. `"text"`, `"image"`, `"video"`, `"audio"`, `"multimodal"`). |

**Usage notes:**
`outputModality` can be a single value (e.g. `"text"`) or a small list (e.g. `"text"`, `"image"`) for multimodal prompts that produce copy *and* a generated image prompt string.

---

## **8. Prompt Text, Variables & Runtime Configuration**

> The actual instructions and the knobs that steer the model.

### 8.1 Prompt text & structure

| Property              | Expected Type   | Description                                                                                   |
| --------------------- | ---------------| --------------------------------------------------------------------------------------------- |
| **systemInstructions**| Text           | Canonical “system” / role instructions applied by this prompt.                               |
| **userTemplate**      | Text           | Template text for user-facing parts (`{variables}` etc.).                                    |
| **assistantTemplate** | Text           | Template or pattern for assistant behaviour (optional).                                      |
| **promptScaffold**    | Text           | High-level description of how system + user + constraints fit together in this prompt.       |

### 8.2 Variables / slots

| Property           | Expected Type       | Description                                                                                   |
| ------------------ | -------------------| --------------------------------------------------------------------------------------------- |
| **promptVariable** | PropertyValue       | Prompt variable definition (name, example, default, type).                                   |

Each `promptVariable` SHOULD be a `schema:PropertyValue` with:

- `schema:name` – variable name (e.g. `"platform"`, `"audienceSegment"`, `"imageConcept"`),
- `schema:value` – example or default,
- optionally `schema:description` / `valueReference` for richer semantics.

### 8.3 Model binding & generation parameters

| Property                    | Expected Type             | Description                                                                                          |
| --------------------------- | ------------------------ | ---------------------------------------------------------------------------------------------------- |
| **promptModel**             | SoftwareApplication, Text| Model / endpoint this prompt is bound to (e.g. “gpt-5.1-thinking-social-lowtemp”, “image-gen-v2”).  |
| **generationParameter**     | PropertyValue            | Vendor-neutral generation parameter configuration (e.g. temperature, top_p, max_output_tokens).     |
| **toolingScope**            | Text                     | Whether tools / actions may be invoked under this prompt (e.g. “no tools”, “read-only”, “full”).    |
| **creativityLevel** (opt.) | Text                     | High-level governance knob, e.g. `"low"`, `"medium"`, `"high"` (mapped to generation parameters).   |

#### `brando:generationParameter`

- **IRI:** `brando:generationParameter`
- **Type:** `owl:ObjectProperty`
- **Domain:** `brando:Prompt`, `brando:BrandModel`
- **Range:** `schema:PropertyValue`

> **rdfs:comment**
> *Declares one or more model-side generation parameters (e.g. temperature, top_p, max_output_tokens) to be applied when using this prompt or brand model. The parameter name and value are encoded as `schema:PropertyValue` to allow vendor-neutral, extensible configuration.*

Common `schema:name` values (recommended but not mandated):

- `"temperature"` – float `0.0–1.0`
- `"top_p"` – float `0.0–1.0`
- `"max_output_tokens"` – integer
- `"presence_penalty"` – float
- `"frequency_penalty"` – float
- `"seed"` – integer (for reproducibility where supported)

---

## **9. Lifecycle & Governance**

> Who owns the prompt, and how it changes.

| Property             | Expected Type        | Description                                         |
| -------------------- | -------------------- | --------------------------------------------------- |
| **owner**            | Person, Organization | Business owner (e.g. brand / growth / support).     |
| **maintainer**       | Person, Organization | Day-to-day maintainer / prompt engineer.            |
| **governanceModel**  | Text                 | Governance notes (“brand + ops joint ownership”).   |
| **dateCreated**      | Date                 | Creation date.                                      |
| **dateModified**     | Date                 | Last modification date.                             |
| **reviewCycle**      | Duration, Text       | Review interval (e.g. “P90D”).                      |
| **visibilityRating** | Text                 | Visibility (“internal-only”, “org-wide”, “global”). |
| **isTestPrompt**     | Boolean              | Whether this prompt is experimental.                |

---

## **JSON-LD EXAMPLE (Multimodal Social Prompt – Text + Image)**

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@graph": [

    {
      "@id": "https://brand.example.com/applications/social-campaign",
      "@type": "brando:BrandApplication",
      "name": "Social Campaign Assets",
      "description": "Generates paired social post copy and image concepts.",
      "brando:hasPrompt": "https://brand.example.com/prompts/social-text-image-en-gb"
    },

    {
      "@id": "https://brand.example.com/prompts/social-text-image-en-gb",
      "@type": "brando:Prompt",

      "name": "Social Post + Image Prompt (EN-GB)",
      "description": "Governed prompt template for generating on-brand social copy and an aligned image prompt.",
      "identifier": "prompt-social-text-image-en-gb-v1",
      "url": "https://brand.example.com/docs/prompts/social-text-image-en-gb",

      "appliesToApplication": "https://brand.example.com/applications/social-campaign",
      "appliesToChannel": [ "social" ],
      "appliesToLocale": "en-GB",
      "useCaseScope": [ "generation" ],
      "outputModality": [ "text", "image" ],

      "brand": "https://brand.example.com/brand/example",
      "applicationCategory": "social-content",

      "intendedAudience": [
        "Prospective customers and existing followers on social platforms."
      ],

      "toneOfVoice": "Warm, confident and down-to-earth.",
      "writingStyle": "Short, concrete, plain English captions.",
      "keyMessages": [
        "We are honest, clear, and practical in how we help people."
      ],

      "guardRails": [
        "No political, hateful, or adult themes in text or visuals.",
        "No depictions of real people without consent."
      ],

      "inputs": "Campaign theme, product or offer, audience segment, platform.",
      "outputs": "One or more social post drafts and a matching natural-language image prompt per post.",

      "systemInstructions": "You are the social media voice of Example Brand. For each request, generate on-brand social copy AND a safe, brand-aligned image prompt for an image-generation model.",
      "userTemplate": "Create {variants} social posts for {platform} promoting {topicOrProduct} to {audienceSegment}, focusing on {objective}. For each, also provide an image prompt for the visual.",
      "promptVariable": [
        {
          "@type": "schema:PropertyValue",
          "schema:name": "platform",
          "schema:value": "instagram | linkedin | tiktok"
        },
        {
          "@type": "schema:PropertyValue",
          "schema:name": "variants",
          "schema:value": "1–3"
        },
        {
          "@type": "schema:PropertyValue",
          "schema:name": "audienceSegment",
          "schema:value": "e.g. busy parents in the UK"
        }
      ],

      "promptModel": {
        "@type": "schema:SoftwareApplication",
        "schema:name": "Example LLM Endpoint – Social + Image",
        "schema:applicationCategory": "AIModel"
      },

      "brando:generationParameter": [
        {
          "@type": "schema:PropertyValue",
          "schema:name": "temperature",
          "schema:value": 0.65
        },
        {
          "@type": "schema:PropertyValue",
          "schema:name": "top_p",
          "schema:value": 0.9
        },
        {
          "@type": "schema:PropertyValue",
          "schema:name": "max_output_tokens",
          "schema:value": 600
        }
      ],

      "creativityLevel": "medium",

      "owner": "https://brand.example.com/team/brand-marketing",
      "maintainer": "https://brand.example.com/team/genai-governance",
      "governanceModel": "Joint ownership: brand marketing + AI governance.",
      "dateCreated": "2025-11-30",
      "reviewCycle": "P90D",
      "isTestPrompt": false
    }
  ]
}
````

---

## **Related documentation**

* [`brando:BrandApplication`](brand-application.md)
* [`brando:BrandModel`](brand-model.md)
* [`brando:BrandTouchpoint`](brand-touchpoint.md)
* [`brando:SyntheticPersona`](synthetic-persona.md)
* [`brando:Policy`](policy.md)
* [`brando:VerbalToken`](verbal-token.md)
* [JSON-LD context](../spec/jsonld-context.md)
* [Prompt governance & runtime flow](../examples/prompt-runtime.md)
