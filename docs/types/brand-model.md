---
title: brando:BrandModel
description: Reference for the brando:BrandModel class in the Brand Oracle (Brando) schema vocabulary v1.4.
---

# **`brando:BrandModel`**

### **Brando Schema Vocabulary v1.4**

A governed, **AI runtime profile for a brand**.

A `brando:BrandModel` encodes **how a brand is executed in AI runtimes** – which models/endpoints are used, which modalities they support (text, image, audio, video), which APIs they talk to (chat completions, images, assistants), and which safety / generation parameters and policies apply by default.

> **rdfs:comment**
> *A `brando:BrandModel` defines a governed AI “model profile” for a brand or brand segment. It describes which AI capabilities (chat, image generation, assistants) are available, which providers/endpoints are used, the default generation parameters (temperature, top_p, max tokens, etc.), and which policies and prompts are bound to that profile. It acts as the operational bridge between Brando’s Brand Directive Vocabulary and concrete AI infrastructure.*

---

## **Term definition**

- **IRI:** `brando:BrandModel`
- **Type:** `owl:Class`
- **Superclass:** `schema:Intangible`
- **Defined in:** Brando Schema Vocabulary v1.4

A `brando:BrandModel` is a **structured, governance-ready AI model profile** designed to be used by:

- one or more **BrandApplications** (e.g. Social Post Production, PDP Copy, Support Chat, Image Production),
- one or more **Prompts** (`brando:Prompt`) that specify detailed instructions and constraints,
- orchestration / routing layers that decide **which AI model profile** to use for a given request.

Within a Brand Operating System, it is the **runtime capability layer**, sitting between:

- **Brand & policies** (Brand, BrandApplication, BrandGuideline, BrandConstraint), and
- **AI infrastructure** (OpenAI, other providers, on-prem models, tool stacks).

---

## **Relationship Summary**

### BrandModel as a profile over AI infrastructure

A `brando:BrandModel` usually references:

- one or more **concrete AI endpoints** (e.g. OpenAI models) via `schema:SoftwareApplication`,
- one or more **Prompts** that it is allowed to run (`brando:hasPrompt`),
- one or more **BrandApplications** that it serves (`brando:servesApplication`),
- one or more **Policies** it must always respect (`brando:inheritsPolicies`).

The infrastructure answers **“which engine is being called?”**
`brando:BrandModel` answers **“how is this engine configured for this brand?”**

---

### **Inbound: from Brand / BrandApplication**

#### **`brando:hasBrandModel` (recommended)**

Links a brand or brand application to its model profile(s).

- **Type:** `owl:ObjectProperty`
- **Domain:** `brando:Brand`, `brando:BrandApplication`
- **Range:** `brando:BrandModel`
- **rdfs:comment:** Connects a brand or brand application to the AI model profiles that may be used to execute it.

This lets:

- a **Brand** declare its default AI runtime profile(s), and
- a **BrandApplication** override or narrow the allowed profiles.

#### **`brando:servesApplication`**

- **Type:** `owl:ObjectProperty`
- **Domain:** `brando:BrandModel`
- **Range:** `brando:BrandApplication`
- **rdfs:comment:** Declares which BrandApplications this BrandModel is intended to serve.

---

### **Outbound: to Prompts & Infrastructure**

A `brando:BrandModel` typically references:

- **Prompts**:
  - `brando:hasPrompt` → `brando:Prompt`

- **AI software endpoints**:
  - `schema:SoftwareApplication` → concrete model endpoints, APIs, runtimes

- **Policies & contexts**:
  - `brando:Policy` → safety / lexical / claim policies
  - `brando:Context` → regional / regulatory contexts
  - `brando:generationParameter` → default generation parameters

---

## **1. Identity Properties**

> Brand model “profile card”.

| Property                      | Expected Type            | Description                                                     |
| ----------------------------- | ------------------------ | --------------------------------------------------------------- |
| **name**                      | Text                     | Primary name of the brand model profile.                        |
| **alternateName**             | Text                     | Additional or internal names (e.g. “AI Brand Model – Prod”).    |
| **description**               | Text                     | High-level description of what this profile is for.             |
| **identifier**                | Text, URL, PropertyValue | Unique ID for the brand model (internal or external).           |
| **url**                       | URL                      | Canonical documentation page for this brand model.              |
| **disambiguatingDescription** | Text                     | Clarifies scope (e.g. “Global text+image production profile”).  |

---

## **2. Brand & Application Scope**

> Which brand and applications this model profile serves.

| Property               | Expected Type                  | Description                                                                 |
| ---------------------- | ------------------------------ | --------------------------------------------------------------------------- |
| **brand**              | `schema:Brand`                 | Brand visible to customers.                                                |
| **worksFor**           | `schema:Organization`          | Owning or accountable organisation.                                        |
| **hasBrandModel**      | `brando:BrandModel`, URL       | (From Brand/BrandApplication) references into this model.                  |
| **servesApplication**  | `brando:BrandApplication`, URL | Brand applications this model profile is intended to serve.                |
| **applicationCategory**| Text                           | High-level category (“social-content”, “support”, “creative-production”).  |
| **environment**        | Text                           | Deployment environment (“dev”, “stage”, “prod”, “sandbox”).                |
| **regionScope**        | Text                           | Regional scope (“global”, “EU-only”, “US+CA”).                             |

---

## **3. Capabilities & Modality**

> What this BrandModel can actually do.

### 3.1 Capability flags

| Property                         | Expected Type | Description                                                      |
| -------------------------------- | ------------- | ---------------------------------------------------------------- |
| **supportsChatCompletion**       | Boolean       | Whether this model profile can call chat-style completion APIs.  |
| **supportsImageGeneration**      | Boolean       | Whether this model profile can call image generation APIs.       |
| **supportsAssistantRuntime**     | Boolean       | Whether this model profile can use an assistants/agent runtime.  |
| **supportsAudioGeneration**      | Boolean       | Whether this model profile can generate or transform audio.      |
| **supportsVideoGeneration**      | Boolean       | Whether this model profile can generate or assist with video.    |

### 3.2 Modalities

| Property               | Expected Type | Description                                                            |
| ---------------------- | -------------| ---------------------------------------------------------------------- |
| **supportedModality**  | Text          | Modalities supported (`"text"`, `"image"`, `"audio"`, `"video"` etc.). |
| **preferredModality**  | Text          | Preferred modality/ies when multiple are available.                   |

**Usage notes:**
These flags & modality hints are for **orchestration logic**. They do not affect provider APIs by themselves but tell the Brand OS which flows this profile may be used for.

---

## **4. Provider & Endpoint Binding**

> How this profile maps onto concrete AI infrastructure.

| Property                  | Expected Type              | Description                                                                       |
| ------------------------- | -------------------------- | --------------------------------------------------------------------------------- |
| **runtimeProvider**       | `schema:Organization`, Text| AI provider (e.g. “OpenAI”, “Anthropic”, internal org).                           |
| **runtimeApplication**    | `schema:SoftwareApplication`| Concrete model / endpoint (e.g. “gpt-5.1-thinking”, “image-gen-vX”).            |
| **runtimeEndpoint**       | URL, Text                  | Optional explicit endpoint/path name (e.g. `/v1/chat/completions`).              |
| **runtimeVersion**        | Text                       | Human-readable version tag (“2025-11-01”, “v3.2-social”).                        |
| **runtimeNotes**          | Text                       | Notes about deployment, latency, cost, special behaviours.                       |
| **supportsTools**         | Boolean                    | Whether tools / function calls / actions are supported with this profile.        |
| **toolingScope**          | Text                       | Allowed tooling scope (“no-tools”, “read-only-tools”, “full-tools”).            |

---

## **5. Default Policies & Governance Binding**

> Global constraints that apply whenever this BrandModel is used.

| Property              | Expected Type       | Description                                                                  |
| --------------------- | -------------------| ---------------------------------------------------------------------------- |
| **inheritsPolicies**  | URL                | Brand or category policy graphs that always apply to this model profile.     |
| **governingPolicyGraph** | URL, CreativeWork | Link to the policy graph controlling default safety and brand constraints.   |
| **riskTag**           | Text, URL          | Risk category tags (“regulated-finance”, “healthcare-support”, “kids”).      |
| **complianceTags**    | Text               | Compliance markers (“ad-claims”, “KYC-adjacent”, “health-adjacent”).         |
| **guardRails**        | Text               | High-level guardrail statements at the model-profile level.                  |

**Usage notes:**
Prompts and Applications may add **more specific** policies; `BrandModel` defines the **global defaults** for that model profile.

---

## **6. Prompts & Routing**

> Which prompts this BrandModel can run, and how routing works.

| Property            | Expected Type          | Description                                                                 |
| ------------------- | ----------------------| --------------------------------------------------------------------------- |
| **hasPrompt**       | `brando:Prompt`, URL  | Prompt templates that may be executed under this model profile.            |
| **defaultPrompt**   | `brando:Prompt`, URL  | Default system prompt / scaffold for this model profile (if any).          |
| **routingHint**     | Text                  | Free-text guidance for routing logic (e.g. “use for high-governance flows”).|
| **priority**        | Number, Text          | Priority vs other BrandModels when several are eligible.                   |

**Usage notes:**
In many implementations, routing logic uses:

- **BrandApplication + Context + Modality** → set of eligible `BrandModel`s
- Then uses `priority` / `regionScope` / `riskTag` to pick one.

---

## **7. Generation Parameters (Defaults)**

> Default AI generation parameters for this BrandModel.

`brando:generationParameter` is already defined to work with both `brando:Prompt` and `brando:BrandModel`.

### Property

- **IRI:** `brando:generationParameter`
- **Type:** `owl:ObjectProperty`
- **Domain:** `brando:Prompt`, `brando:BrandModel`
- **Range:** `schema:PropertyValue`

> **rdfs:comment**
> *Declares one or more model-side generation parameters (e.g. temperature, top_p, max_output_tokens) to be applied when using this prompt or brand model. The parameter name and value are encoded as `schema:PropertyValue` to allow vendor-neutral, extensible configuration.*

### Typical usage on BrandModel

| Property                  | Expected Type       | Description                                                          |
| ------------------------- | -------------------| -------------------------------------------------------------------- |
| **generationParameter**   | `schema:PropertyValue` | Default generation parameters for this model profile.             |
| **creativityLevel**       | Text                | Governance label (“low”, “medium”, “high”) mapped to parameters.    |

Recommended `schema:name` values:

- `"temperature"` – float `0.0–1.0`
- `"top_p"` – float `0.0–1.0`
- `"max_output_tokens"` – integer
- `"presence_penalty"` – float
- `"frequency_penalty"` – float
- `"seed"` – integer

**Override behaviour:**
- `BrandModel` sets **defaults**.
- Individual `Prompt`s may **override or narrow** parameters for specific applications.

---

## **8. Monitoring, Metrics & Data Use**

> How this BrandModel is monitored and what data usage rules apply.

| Property              | Expected Type       | Description                                                                 |
| --------------------- | -------------------| --------------------------------------------------------------------------- |
| **monitoredMetric**   | Text, URL          | Metrics tracked for this profile (quality, safety, latency, cost).         |
| **dataUsePolicy**     | Text, URL          | Policy about data retention / training / logging.                          |
| **loggingLevel**      | Text               | Logging level (“minimal”, “normal”, “verbose”, “PII-redacted”).            |
| **retrievalAllowed**  | Boolean            | Whether this model is allowed to hit retrieval / vector stores.            |

---

## **9. Lifecycle & Governance**

> Who owns the model profile, and how it changes.

| Property             | Expected Type        | Description                                         |
| -------------------- | --------------------| --------------------------------------------------- |
| **owner**            | Person, Organization | Business owner (e.g. brand / CX / support).         |
| **maintainer**       | Person, Organization | Technical / AI governance owner.                    |
| **governanceModel**  | Text                 | Governance notes (“brand + AI governance council”). |
| **dateCreated**      | Date                 | Creation date.                                      |
| **dateModified**     | Date                 | Last modification date.                             |
| **reviewCycle**      | Duration, Text       | Review interval (e.g. “P90D”).                      |
| **visibilityRating** | Text                 | Visibility (“internal-only”, “org-wide”, “global”). |
| **isTestModel**      | Boolean              | Whether this profile is experimental.               |

---

## **JSON-LD EXAMPLE (BrandModel + Prompt + Application)**

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@graph": [

    /* ---------------------------------------------------------
     * 1. BRAND
     * --------------------------------------------------------- */
    {
      "@id": "https://brand.example.com/brand/example",
      "@type": "schema:Brand",
      "schema:name": "Example Brand",
      "brando:hasBrandModel": "https://brand.example.com/models/core-openai-text-image-prod"
    },

    /* ---------------------------------------------------------
     * 2. BRAND APPLICATION
     * --------------------------------------------------------- */
    {
      "@id": "https://brand.example.com/applications/social-campaign",
      "@type": "brando:BrandApplication",
      "name": "Social Campaign Assets",
      "description": "Generates paired social copy and images for campaigns.",
      "brando:hasBrandModel": "https://brand.example.com/models/core-openai-text-image-prod",
      "brando:hasPrompt": "https://brand.example.com/prompts/social-text-image-en-gb"
    },

    /* ---------------------------------------------------------
     * 3. BRAND MODEL
     * --------------------------------------------------------- */
    {
      "@id": "https://brand.example.com/models/core-openai-text-image-prod",
      "@type": "brando:BrandModel",

      "name": "Core OpenAI Brand Model – Text + Image (Prod)",
      "alternateName": "AI Brand Model – OpenAI (Production)",
      "description": "Default production profile for Example Brand using OpenAI for text and image generation.",
      "identifier": "brandmodel-openai-core-text-image-prod-v1",
      "url": "https://brand.example.com/docs/models/core-openai-text-image-prod",
      "disambiguatingDescription": "Global production profile for text and image generation with governance-heavy defaults.",

      "brand": "https://brand.example.com/brand/example",
      "servesApplication": [
        "https://brand.example.com/applications/social-campaign"
      ],
      "applicationCategory": "social-content",
      "environment": "prod",
      "regionScope": "global",

      "runtimeProvider": {
        "@type": "schema:Organization",
        "name": "OpenAI"
      },
      "runtimeApplication": {
        "@id": "https://api.openai.com/v1/chat/completions",
        "@type": "schema:SoftwareApplication",
        "schema:name": "OpenAI Chat + Images",
        "schema:applicationCategory": "AIModel"
      },
      "runtimeEndpoint": "chat+image",
      "runtimeVersion": "2025-11-01",

      "supportsChatCompletion": true,
      "supportsImageGeneration": true,
      "supportsAssistantRuntime": false,
      "supportsAudioGeneration": false,
      "supportsVideoGeneration": false,

      "supportedModality": [ "text", "image" ],
      "preferredModality": "text",

      "inheritsPolicies": [
        "https://brand.example.com/policies/global-tone",
        "https://brand.example.com/policies/global-brand-safety"
      ],
      "governingPolicyGraph": "https://brand.example.com/policy-graphs/core-governance",
      "riskTag": [
        "global-consumer",
        "social-content"
      ],

      "brando:generationParameter": [
        {
          "@type": "schema:PropertyValue",
          "schema:name": "temperature",
          "schema:value": 0.4,
          "schema:description": "Default low-creativity setting for governance-heavy flows."
        },
        {
          "@type": "schema:PropertyValue",
          "schema:name": "top_p",
          "schema:value": 0.9
        },
        {
          "@type": "schema:PropertyValue",
          "schema:name": "max_output_tokens",
          "schema:value": 800
        }
      ],
      "creativityLevel": "low",

      "hasPrompt": [
        "https://brand.example.com/prompts/social-text-image-en-gb"
      ],
      "routingHint": "Use this model for all governed social and campaign-related flows needing both text and image prompts.",
      "priority": 10,

      "monitoredMetric": [
        "https://brand.example.com/metrics/social-content-quality",
        "https://brand.example.com/metrics/safety-violations"
      ],
      "loggingLevel": "PII-redacted",
      "dataUsePolicy": "https://brand.example.com/policies/data-use-openai",
      "retrievalAllowed": true,

      "owner": "https://brand.example.com/teams/brand-marketing",
      "maintainer": "https://brand.example.com/teams/ai-governance",
      "governanceModel": "Joint ownership: brand marketing + AI governance.",
      "dateCreated": "2025-11-20",
      "dateModified": "2025-11-30",
      "reviewCycle": "P90D",
      "visibilityRating": "org-wide",
      "isTestModel": false
    },

    /* ---------------------------------------------------------
     * 4. PROMPT (referenced by BrandModel & Application)
     * --------------------------------------------------------- */
    {
      "@id": "https://brand.example.com/prompts/social-text-image-en-gb",
      "@type": "brando:Prompt",
      "name": "Social Post + Image Prompt (EN-GB)",
      "appliesToApplication": "https://brand.example.com/applications/social-campaign",
      "appliesToChannel": [ "social" ],
      "appliesToLocale": "en-GB",
      "outputModality": [ "text", "image" ]
      /* See full brando:Prompt spec for all properties */
    }
  ]
}
````

---

## **Related documentation**

* [`brando:Prompt`](prompt.md)
* [`brando:BrandApplication`](brand-application.md)
* [`brando:BrandTouchpoint`](brand-touchpoint.md)
* [`brando:Policy`](policy.md)
* [`brando:Context`](context.md)
* [JSON-LD context](../spec/jsonld-context.md)
* [Model routing & governance flow](../examples/model-routing.md)
