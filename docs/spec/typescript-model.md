---
title: Brando TypeScript model
description: TypeScript typing patterns for working with the Brando (Brand Oracle) JSON-LD vocabulary in applications and Brand OS runtimes.
---

# Brando TypeScript model

Brando vocab v1.3 is defined in **JSON-LD**.  
TypeScript is a **convenience layer** for:

- application developers,
- Brand OS / middleware implementers,
- internal tooling around validation, editing, and runtime configuration.

> **Normative statement**  
> The TypeScript types in this page are **non-normative**. They are a faithful mapping of the JSON-LD model for typical application use, but they do not replace the JSON-LD vocabulary as the canonical specification.

This page:

- describes two common patterns for modelling Brando in TypeScript,
- provides a reference “raw JSON-LD” type model,
- and shows a more ergonomic “domain model” pattern.

---

## 1. Modelling strategies

There are two main ways to represent Brando JSON-LD in TypeScript:

1. **Raw JSON-LD types**  
   - Keys like `"@id"` and `"brando:missionStatement"` appear literally.
   - Directly matches the on-the-wire JSON-LD structure.
   - Best for generic tooling, loaders, and validators.

2. **Domain model types**  
   - Map JSON-LD keys to more idiomatic field names (e.g. `id`, `type`, `missionStatement`).
   - Convert IRI-like keys (`"brando:toneOfVoice"`) into camelCase properties.
   - Best for application logic and runtime code.

You can use both:

- accept/emit **raw JSON-LD** at boundaries (APIs, files),  
- convert into **domain model types** inside your Brand OS.

The examples below cover both.

---

## 2. Raw JSON-LD TypeScript model

### 2.1 Base JSON-LD node types

```ts
export type JsonLdType = string | string[];

export interface JsonLdNode {
  "@id"?: string;
  "@type"?: JsonLdType;
  [key: string]: unknown;
}

export interface JsonLdDocument {
  "@context": Record<string, string> | string;
  "@graph"?: JsonLdNode[];
  // Allow top-level node documents as well
  "@id"?: string;
  "@type"?: JsonLdType;
}
```

This is the minimal generic representation:

* Every node is a `JsonLdNode`.
* Arbitrary properties are allowed via index signature (`[key: string]: unknown`).
* The `@graph` key holds an array of nodes.

### 2.2 Core Brando node shapes (raw)

You can optionally define **narrowed** interfaces for the main Brando types by constraining `@type` and making key properties explicit.

```ts
export type BrandoType =
  | "brando:Brand"
  | "brando:Context"
  | "brando:VerbalToken"
  | "brando:VisualToken"
  | "brando:AudioToken"
  | "brando:Policy"
  | "brando:BrandedCategory"
  | "brando:Campaign"
  | "brando:AutomationRule";

export interface BrandoBaseNode extends JsonLdNode {
  "@type": BrandoType | JsonLdType;
}

export interface BrandoBrandNode extends BrandoBaseNode {
  "@type": "brando:Brand";
  "schema:name"?: string;
  "brando:missionStatement"?: string;
  "brando:visionStatement"?: string;
  "brando:coreValues"?: string | string[];
  "brando:brandPromise"?: string;
  "brando:brandNarrative"?: string;
  "brando:marketPosition"?: string;
  "brando:competitorContext"?: string;
  "brando:hasContext"?: JsonLdNode | JsonLdNode[];
  "brando:usesVerbalToken"?: JsonLdNode | JsonLdNode[];
  "brando:usesVisualToken"?: JsonLdNode | JsonLdNode[];
  "brando:usesAudioToken"?: JsonLdNode | JsonLdNode[];
  "brando:hasPolicy"?: JsonLdNode | JsonLdNode[];
  "brando:hasProductCategory"?: JsonLdNode | JsonLdNode[];
  "brando:hasCampaign"?: JsonLdNode | JsonLdNode[];
  "brando:hasAutomationRule"?: JsonLdNode | JsonLdNode[];
}
```

You can repeat this pattern for contexts, tokens, policies, etc. For example:

```ts
export interface BrandoContextNode extends BrandoBaseNode {
  "@type": "brando:Context";
  "brando:audienceSegment"?: string | string[];
  "brando:audiencePersona"?: string | string[];
  "brando:domainContext"?: string;
  "brando:effectiveDuring"?: string;
  "brando:appliesTo"?: string;
  "brando:usesVerbalToken"?: JsonLdNode | JsonLdNode[];
  "brando:usesVisualToken"?: JsonLdNode | JsonLdNode[];
  "brando:usesAudioToken"?: JsonLdNode | JsonLdNode[];
}
```

> **Non-normative guidance**
> In the raw model, property names with colons (e.g. `"brando:toneOfVoice"`) are represented as **string literal keys**. This keeps the TypeScript model perfectly aligned to the JSON-LD vocabulary.

---

## 3. Domain model TypeScript types

The raw model is ideal for **generic tools**, but ergonomic TypeScript usually prefers:

* `id` instead of `"@id"`,
* `type` instead of `"@type"`,
* `missionStatement` instead of `"brando:missionStatement"`.

### 3.1 Base domain types

```ts
export interface BrandoBaseDomain {
  id: string;
  type: BrandoType;
  name?: string;
}

/**
 * Utility dictionary for unknown extensions.
 * This can capture extra JSON-LD fields if you choose to keep them.
 */
export type UnknownProps = Record<string, unknown>;
```

### 3.2 Brand, Context, Token, Policy (domain model)

Example domain interfaces (simplified):

```ts
export interface Brand extends BrandoBaseDomain {
  type: "brando:Brand";
  missionStatement?: string;
  visionStatement?: string;
  coreValues?: string[];
  brandPromise?: string;
  brandNarrative?: string;
  marketPosition?: string;
  competitorContext?: string;

  contexts?: Context[];
  verbalTokens?: VerbalToken[];
  visualTokens?: VisualToken[];
  audioTokens?: AudioToken[];
  policies?: Policy[];
  categories?: BrandedCategory[];
  campaigns?: Campaign[];
  automationRules?: AutomationRule[];
}

export interface Context extends BrandoBaseDomain {
  type: "brando:Context";
  audienceSegment?: string[];
  audiencePersona?: string[];
  domainContext?: string; // JSON string describing channel/surface/region
  effectiveDuring?: string; // JSON string for time window
  appliesTo?: string;
  verbalTokens?: VerbalToken[];
  visualTokens?: VisualToken[];
  audioTokens?: AudioToken[];
}

export interface VerbalToken extends BrandoBaseDomain {
  type: "brando:VerbalToken";
  toneOfVoice?: string;
  dialogueStyle?: string;
  writingStyle?: string;
  namingConvention?: string;
  personaCard?: string;
  approvedTerms?: string[];
  prohibitedTerms?: string[];
  keyMessages?: string[];
  tagline?: string | string[];
  promptScaffold?: string;
  mustDos?: string[];
  mustNotDos?: string[];
}

export interface VisualToken extends BrandoBaseDomain {
  type: "brando:VisualToken";
  brandName?: string;
  logo?: string;
  colourPalette?: string;   // JSON string
  typography?: string;      // JSON string
  visualToken?: string;     // JSON string for design tokens
  imageryStyles?: string;
  motionRules?: string;
  visualUsageGuidelines?: string | string[];
}

export interface AudioToken extends BrandoBaseDomain {
  type: "brando:AudioToken";
  audioLogo?: string;
  voiceSignature?: string;
  pronunciationGuide?: string;
  speechStyle?: string;
  audioCue?: string | string[];
  audioUsageGuidelines?: string | string[];
  audioReferenceLink?: string;
}

export interface Policy extends BrandoBaseDomain {
  type: "brando:Policy";
  guardRails?: string[];
  mustDos?: string[];
  mustNotDos?: string[];
  refusalStrategies?: string[];
  riskScenarios?: string[];
  complianceTags?: string[];
  enforcementLevel?: string;
  riskTag?: string | string[];
  visibilityRating?: string;
  retrievableInLLM?: boolean;
  embeddingQuality?: string;
  reviewWorkflow?: string;
  updatePolicy?: string;
}

export interface BrandedCategory extends BrandoBaseDomain {
  type: "brando:BrandedCategory";
  productCategoryName?: string;
  categoryDepartment?: string;
  categoryClass?: string;
  categoryItemType?: string;
  categoryApprovedTerms?: string[];
  categoryProhibitedTerms?: string[];
  gpcCategoryCode?: string;
  gpcCategoryDescription?: string;
  unspscCode?: string;
  googleProductCategoryId?: string;
  appliesToGTIN?: string[];
}

export interface Campaign extends BrandoBaseDomain {
  type: "brando:Campaign";
  campaignName?: string;
  campaignTheme?: string;
  effectiveDuring?: string; // JSON string
}

export interface AutomationRule extends BrandoBaseDomain {
  type: "brando:AutomationRule";
  appliesTo?: string;
  triggerType?: string;
  monitoredMetric?: string;   // JSON string
  dataSource?: string;
  automationAction?: string;  // JSON string
  enforcementLevel?: string;
  riskTag?: string | string[];
}
```

You can extend these interfaces with:

* `downloadableFile`,
* `supportingFile`,
* `externalSystem`,
* `externalSystemId`,
* and other cross-cutting properties as needed.

---

## 4. Mapping between JSON-LD and domain model

A simple transformation layer can map from raw JSON-LD to the domain interfaces.

### 4.1 Example: Brand node mapper

```ts
import type { JsonLdNode } from "./jsonld-types";
import type {
  Brand,
  Context,
  VerbalToken,
  Policy
} from "./brando-domain";

export function mapBrandNode(node: JsonLdNode): Brand {
  if (node["@type"] !== "brando:Brand") {
    throw new Error("Expected brando:Brand node");
  }

  const brandId = node["@id"] ?? "";
  const name = (node["schema:name"] as string) || undefined;

  return {
    id: brandId,
    type: "brando:Brand",
    name,
    missionStatement: node["brando:missionStatement"] as string | undefined,
    visionStatement: node["brando:visionStatement"] as string | undefined,
    coreValues: asStringArray(node["brando:coreValues"]),
    brandPromise: node["brando:brandPromise"] as string | undefined,
    brandNarrative: node["brando:brandNarrative"] as string | undefined,
    marketPosition: node["brando:marketPosition"] as string | undefined,
    competitorContext: node["brando:competitorContext"] as string | undefined,
    // Relationship fields can be wired later by graph assembly
    contexts: [],
    verbalTokens: [],
    visualTokens: [],
    audioTokens: [],
    policies: [],
    categories: [],
    campaigns: [],
    automationRules: []
  };
}

function asStringArray(value: unknown): string[] | undefined {
  if (Array.isArray(value)) {
    return value.filter((v): v is string => typeof v === "string");
  }
  if (typeof value === "string") {
    return [value];
  }
  return undefined;
}
```

### 4.2 Graph assembly

Typically, your Brand OS will:

1. Parse the JSON-LD document into a list of `JsonLdNode`s.
2. Index them by `@id`.
3. Map each node into domain types.
4. Resolve relationships via ID references (`brando:hasContext`, `brando:usesVerbalToken`, etc.).

This is **implementation-specific** and not mandated by the vocabulary, but a typical pattern looks like:

```ts
export interface BrandGraph {
  brand: Brand;
  contexts: Context[];
  verbalTokens: VerbalToken[];
  visualTokens: VisualToken[];
  audioTokens: AudioToken[];
  policies: Policy[];
  categories: BrandedCategory[];
  campaigns: Campaign[];
  automationRules: AutomationRule[];
}
```

---

## 5. Runtime integration patterns with TypeScript

Brando TypeScript types are most useful when you integrate them into:

* **Runtime configuration** for LLM apps / agents,
* **MCP tools** / API handlers,
* **validation pipelines** in CI/CD.

### 5.1 Example: Prompt configuration type

```ts
export interface PromptConfig {
  brand: Brand;
  context: Context;
  verbalTokens: VerbalToken[];
  visualTokens?: VisualToken[];
  audioTokens?: AudioToken[];
  policies: Policy[];
}
```

Your runtime can then have a strongly typed function like:

```ts
export function buildSystemPrompt(config: PromptConfig): string {
  const { brand, context, verbalTokens, policies } = config;

  const tone = verbalTokens
    .map(v => v.toneOfVoice)
    .filter(Boolean)
    .join("\n");

  const guardRails = policies
    .flatMap(p => p.guardRails || [])
    .join("\n");

  return [
    `You are speaking as ${brand.name}.`,
    brand.missionStatement && `Mission: ${brand.missionStatement}`,
    `Context: ${context.domainContext || "unspecified"}`,
    tone && `Tone of voice:\n${tone}`,
    guardRails && `Guard rails:\n${guardRails}`
  ]
    .filter(Boolean)
    .join("\n\n");
}
```

This keeps the link from **spec → application behaviour** very explicit.

---

## 6. Versioning and compatibility

Because the canonical Brando vocab is JSON-LD:

* TypeScript models should be treated as **generated or derived** artefacts.
* When you upgrade from Brando v1.3 to a future version:

  * update the JSON-LD vocabulary,
  * regenerate or adjust your TypeScript interfaces,
  * ensure your mapping functions still cover all required properties.

Non-normative suggestions:

* Keep your TypeScript types in a module with an explicit version tag, e.g. `brando-v1_3`.
* For breaking changes, introduce new types (e.g. `BrandV1_4`) rather than mutating existing ones without migration.

---

## 7. Summary

* Brando’s canonical model is JSON-LD; TypeScript is for **developer ergonomics**.
* Use:

  * **raw JSON-LD types** when working with generic tooling and loaders,
  * **domain model types** for application logic and runtime configuration.
* The mapping between JSON-LD and TypeScript should be:

  * deterministic,
  * reversible (no loss of semantics),
  * version-aware.

For related information:

* [JSON-LD context](jsonld-context.md)
* [YAML schema profile](yaml-profile.md)
* [Runtime integration (LLMs, MCP, APIs)](../architecture/runtime-integration.md)
