---
title: brando:VerbalToken
description: Reference for the brando:VerbalToken class in the Brand Oracle (Brando) schema vocabulary v1.3.
---

# `brando:VerbalToken`

Reusable configuration of the brand’s voice, language, and behavioural prompt rules.

> **rdfs:comment**  
> *Reusable configuration of the brand's voice, language, and behavioural prompt rules.*

---

## Term definition

- **IRI:** `brando:VerbalToken`
- **Type:** `owl:Class`
- **Superclasses:**
    - `brando:BrandExpressionToken`
    - `schema:Intangible`
- **Defined in:** `brando:` (Brando Schema Vocabulary v1.3)

A `brando:VerbalToken` is a **reusable verbal expression preset**. It tells AI systems *how the brand speaks* in a given scope:

- tone and emotional texture,
- conversational / writing style,
- vocabulary do/don’t lists,
- key messages,
- reusable prompt scaffolds,
- hard “must do / must not do” rules at the language level.

You typically **do not** call a VerbalToken directly at runtime; instead, you attach it to:

- a `brando:Brand`, and/or
- a `brando:Context`,

via `brando:usesVerbalToken`. Your Brand OS or AI middleware then reads the token and turns it into prompts, system messages, and constraints.

---

## Relationships

### Inbound: where VerbalTokens are used

VerbalTokens are attached from brands and contexts via:

- **`brando:usesVerbalToken`**
    - **Type:** `owl:ObjectProperty`
    - **Domain:** `brando:Brand`, `brando:Context`
    - **Range:** `brando:VerbalToken`
    - **Comment:** “Attaches a verbal expression token defining how the brand speaks in this scope.”

Example (brand & context attaching the same token):

```jsonld
{
  "@id": "https://example.com/brand/northstar",
  "@type": "brando:Brand",
  "schema:name": "Northstar Bank",
  "brando:usesVerbalToken": {
    "@id": "https://example.com/brand/northstar/tokens/verbal/default"
  }
}
````

```jsonld
{
  "@id": "https://example.com/brand/northstar/context/retail-chatbot",
  "@type": "brando:Context",
  "brando:usesVerbalToken": {
    "@id": "https://example.com/brand/northstar/tokens/verbal/support"
  }
}
```

A common pattern (non-normative):

* **Brand-level** VerbalToken → default voice.
* **Context-level** VerbalToken → specialisation or override (e.g. “support voice”, “investor voice”).

---

## Key properties (domain = `brando:VerbalToken`)

The following properties have `brando:VerbalToken` in their `rdfs:domain`.

### 1. Tone, dialogue, writing, and persona

| Property IRI              | Range        | Type                   | Comment (from vocab)                                                                   |
| ------------------------- | ------------ | ---------------------- | -------------------------------------------------------------------------------------- |
| `brando:toneOfVoice`      | `xsd:string` | `owl:DatatypeProperty` | *Emotional texture and attitude of the brand's voice in this token.*                   |
| `brando:dialogueStyle`    | `xsd:string` | `owl:DatatypeProperty` | *Guidance on conversational patterns, pacing, and pronoun usage.*                      |
| `brando:writingStyle`     | `xsd:string` | `owl:DatatypeProperty` | *Preferences for grammar, sentence structure, and clarity.*                            |
| `brando:namingConvention` | `xsd:string` | `owl:DatatypeProperty` | *Rules for how products, features, dates, and other entities are named and formatted.* |
| `brando:personaCard`      | `xsd:string` | `owl:DatatypeProperty` | *Humanised brand-as-a-person description used to guide tone and behaviour.*            |

**Usage notes (non-normative):**

* Keep these fields **focused and operational** – they should be easy for an LLM or agent to turn into actual behaviour.
* `personaCard` is often a short paragraph (“If this brand were a person…”).
* `dialogueStyle` and `writingStyle` can be brief bullet-like sentences or more structured text.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/tokens/verbal/default",
  "@type": "brando:VerbalToken",
  "brando:toneOfVoice": "Calm, empathetic, precise. Never rushed, never flippant.",
  "brando:dialogueStyle": "Use second person ('you'), ask clarifying questions before answering complex queries.",
  "brando:writingStyle": "Short paragraphs, concrete examples, no jargon without explanation.",
  "brando:namingConvention": "Use full product names on first mention, then short names. Dates in ISO (YYYY-MM-DD).",
  "brando:personaCard": "If Northstar were a person, they’d be a thoughtful financial coach: calm, patient, and pragmatic."
}
```

---

### 2. Vocabulary and messaging

| Property IRI             | Range        | Type                   | Comment (from vocab)                                                  |
| ------------------------ | ------------ | ---------------------- | --------------------------------------------------------------------- |
| `brando:approvedTerms`   | `xsd:string` | `owl:DatatypeProperty` | *Words and phrases that are encouraged in this verbal token.*         |
| `brando:prohibitedTerms` | `xsd:string` | `owl:DatatypeProperty` | *Words and phrases that must not be used in this verbal token.*       |
| `brando:keyMessages`     | `xsd:string` | `owl:DatatypeProperty` | *Core value propositions and ideas that should recur across outputs.* |
| `brando:tagline`         | `xsd:string` | `owl:DatatypeProperty` | *Primary tagline plus any sanctioned variants for this verbal token.* |

**Usage notes (non-normative):**

* In JSON-LD, you can supply multiple values by:

    * repeating the property; or
    * using a JSON array (depending on your tooling).
* `approvedTerms` / `prohibitedTerms` are *per VerbalToken* – you can vary them across contexts or campaigns.
* `keyMessages` are useful raw material for RAG / prompt construction.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/tokens/verbal/default",
  "@type": "brando:VerbalToken",
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
    "We help you understand trade-offs, not hide them.",
    "We prioritise long-term financial health over short-term hype."
  ],
  "brando:tagline": "Clarity, not shortcuts."
}
```

---

### 3. Prompt scaffolds and behavioural rules

| Property IRI            | Range        | Type                   | Comment (from vocab)                                                  |
| ----------------------- | ------------ | ---------------------- | --------------------------------------------------------------------- |
| `brando:promptScaffold` | `xsd:string` | `owl:DatatypeProperty` | *Reusable instruction block or template for priming language models.* |
| `brando:mustDos`        | `xsd:string` | `owl:DatatypeProperty` | *Required behaviours and inclusions this verbal token must follow.*   |
| `brando:mustNotDos`     | `xsd:string` | `owl:DatatypeProperty` | *Behaviours and constructions this verbal token must never produce.*  |

**Usage notes (non-normative):**

* `promptScaffold` is designed to be **machine-consumed**:

    * think of it as a reusable system-prompt fragment you can slot into LLM calls.
    * it can include placeholders your runtime fills in.
* `mustDos` / `mustNotDos` are best expressed as **short, imperative sentences**:

    * easier for both humans and models to interpret.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/tokens/verbal/support",
  "@type": "brando:VerbalToken",
  "brando:promptScaffold": "You are speaking as Northstar Bank's support assistant. Be calm, empathetic, and precise. Explain options simply and always disclose trade-offs.",
  "brando:mustDos": [
    "Acknowledge the user's concern before giving instructions.",
    "Offer a next-best action if you cannot fully resolve the issue."
  ],
  "brando:mustNotDos": [
    "Do not speculate about regulatory or legal outcomes.",
    "Do not tell the user what they 'should' feel."
  ]
}
```

At runtime, your Brand OS might:

1. Load the relevant VerbalToken.
2. Insert `promptScaffold` into the system prompt.
3. Convert `mustDos` / `mustNotDos` into explicit instructions or post-check rules.

---

### 4. Files and supporting material

These are shared properties used across several Brando types; for VerbalTokens they typically point at **voice/tone guidelines** and reference materials.

| Property IRI              | Range                | Type                 | Comment (from vocab, summarised)                                                                                                              |
| ------------------------- | -------------------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `brando:downloadableFile` | `schema:MediaObject` | `owl:ObjectProperty` | Links a brand, token, context, campaign, or policy node to the most up-to-date creative files exposed by the Brand OS or DAM.                 |
| `brando:supportingFile`   | `schema:MediaObject` | `owl:ObjectProperty` | Links a brand, token, context, campaign, or policy node to additional files helpful for production but not the primary source-of-truth asset. |

**Usage notes (non-normative):**

* For VerbalTokens:

    * `downloadableFile` → canonical voice/tone guidelines (e.g. “Northstar Voice & Tone Guidelines (PDF)”).
    * `supportingFile` → examples, workshop decks, annotated transcripts, etc.
* These `schema:MediaObject` nodes can themselves carry:

    * `schema:contentUrl`,
    * `schema:encodingFormat`,
    * and other standard Schema.org metadata.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/tokens/verbal/default",
  "@type": "brando:VerbalToken",
  "brando:downloadableFile": {
    "@id": "https://assets.example.com/northstar/voice/northstar-voice-tone.pdf",
    "@type": "schema:MediaObject",
    "schema:name": "Northstar Voice & Tone Guidelines (PDF)",
    "schema:contentUrl": "https://assets.example.com/northstar/voice/northstar-voice-tone.pdf"
  },
  "brando:supportingFile": {
    "@id": "https://assets.example.com/northstar/voice/example-conversations.pdf",
    "@type": "schema:MediaObject",
    "schema:name": "Example Conversations – Retail Support"
  }
}
```

---

## Example: Brand + Context + VerbalTokens

A combined JSON-LD example showing how `brando:VerbalToken` works with `brando:Brand` and `brando:Context`:

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@graph": [
    {
      "@id": "https://example.com/brand/northstar",
      "@type": "brando:Brand",
      "schema:name": "Northstar Bank",
      "brando:hasContext": {
        "@id": "https://example.com/brand/northstar/context/retail-chatbot"
      },
      "brando:usesVerbalToken": {
        "@id": "https://example.com/brand/northstar/tokens/verbal/default"
      }
    },
    {
      "@id": "https://example.com/brand/northstar/context/retail-chatbot",
      "@type": "brando:Context",
      "brando:audienceSegment": "Retail banking customers",
      "brando:domainContext": {
        "channel": "chatbot",
        "surface": "public-website",
        "region": "UK"
      },
      "brando:usesVerbalToken": {
        "@id": "https://example.com/brand/northstar/tokens/verbal/support"
      }
    },
    {
      "@id": "https://example.com/brand/northstar/tokens/verbal/default",
      "@type": "brando:VerbalToken",
      "brando:toneOfVoice": "Calm, empathetic, precise. Explain trade-offs clearly.",
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
        "We help you understand your options.",
        "We are transparent about risks and costs."
      ],
      "brando:tagline": "Clarity, not shortcuts."
    },
    {
      "@id": "https://example.com/brand/northstar/tokens/verbal/support",
      "@type": "brando:VerbalToken",
      "brando:toneOfVoice": "Reassuring and efficient. Focus on clear next steps.",
      "brando:dialogueStyle": "Acknowledge feelings, then move quickly to options.",
      "brando:promptScaffold": "You are Northstar Bank's support assistant for UK retail customers...",
      "brando:mustDos": [
        "Confirm understanding of the user's question before giving instructions."
      ],
      "brando:mustNotDos": [
        "Do not blame the user for mistakes.",
        "Do not minimise concerns."
      ]
    }
  ]
}

```

**Runtime pattern (non-normative):**

1. **Resolve Brand + Context** for the request.
2. Load VerbalTokens from:

    * Brand (`/tokens/verbal/default`),
    * Context (`/tokens/verbal/support`).
3. Merge or layer properties according to your precedence rules:

    * e.g. context-specific `promptScaffold` takes precedence over brand default.
    
4. Compile:

    * system prompts using `promptScaffold`, `toneOfVoice`, `dialogueStyle`, `writingStyle`,
    * lexical constraints using `approvedTerms`, `prohibitedTerms`, `mustDos`, `mustNotDos`.

---

## Related documentation

* **Concepts / overview**

    * [Brando types overview](index.md)
    * [Getting started](../getting-started.md)
    * [Quickstart (JSON-LD)](../getting-started-jsonld.md)
    * [Quickstart (YAML)](../getting-started-yaml.md)

* **Related types**

    * [`brando:Brand`](brand.md)
    * [`brando:Context`](context.md)
    * [`brando:BrandExpressionToken`](brand-expression-token.md)
    * [`brando:VisualToken`](visual-token.md)
    * [`brando:AudioToken`](audio-token.md)
    * [`brando:Policy`](policy.md)

