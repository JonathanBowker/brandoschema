---
title: Minimal brand graph
description: A minimal, end-to-end Brando (Brand Oracle) Brand Knowledge Graph example in JSON-LD and YAML.
---

# Minimal brand graph

This example shows a **minimal but valid** Brand Knowledge Graph using Brando vocab v1.3.

It demonstrates:

- a single `brando:Brand` node,
- a single `brando:Context` node,
- one `brando:VerbalToken` node,
- one `brando:Policy` node,
- basic linking between them.

The goal is to show the **smallest useful graph** that a Brand OS or LLM runtime can work with.

---

## 1. Minimal JSON-LD example

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@graph": [
    {
      "@id": "https://example.com/brand/acme",
      "@type": "brando:Brand",
      "schema:name": "ACME Tools",
      "brando:missionStatement": "Make high-quality tools accessible to every builder.",
      "brando:visionStatement": "A world where anyone can build with confidence.",
      "brando:coreValues": [
        "Reliability",
        "Practicality",
        "Straight-talking support"
      ],
      "brando:hasContext": {
        "@id": "https://example.com/brand/acme/context/support-chat"
      },
      "brando:usesVerbalToken": {
        "@id": "https://example.com/brand/acme/tokens/verbal/default"
      },
      "brando:hasPolicy": {
        "@id": "https://example.com/brand/acme/policies/basic-brand-safety"
      }
    },
    {
      "@id": "https://example.com/brand/acme/context/support-chat",
      "@type": "brando:Context",
      "brando:audienceSegment": [
        "Existing customers seeking product support"
      ],
      "brando:audiencePersona": [
        "Hands-on builder"
      ],
      "brando:domainContext": {
        "channel": "chat",
        "surface": "support-portal",
        "region": "global"
      },
      "brando:usesVerbalToken": {
        "@id": "https://example.com/brand/acme/tokens/verbal/default"
      }
    },
    {
      "@id": "https://example.com/brand/acme/tokens/verbal/default",
      "@type": "brando:VerbalToken",
      "brando:toneOfVoice": "Straightforward, encouraging, and practical.",
      "brando:dialogueStyle": "Talk to the user like a colleague on the job site.",
      "brando:writingStyle": "Short, direct sentences. Concrete instructions first; theory later.",
      "brando:approvedTerms": [
        "heavy-duty",
        "reliable",
        "safety first"
      ],
      "brando:prohibitedTerms": [
        "indestructible",
        "lifetime-guaranteed for anything"
      ],
      "brando:mustDos": [
        "Offer a clear next step or action in every answer."
      ],
      "brando:mustNotDos": [
        "Mock or belittle the user’s level of expertise."
      ]
    },
    {
      "@id": "https://example.com/brand/acme/policies/basic-brand-safety",
      "@type": "brando:Policy",
      "brando:enforcementLevel": "mandatory",
      "brando:riskTag": [
        "brand-safety"
      ],
      "brando:guardRails": [
        "Do not make claims about capabilities that are not documented.",
        "Do not provide safety-critical advice without including an appropriate caution."
      ],
      "brando:refusalStrategies": [
        "If the user asks for unsafe modifications, explain why it is unsafe and suggest a safer alternative."
      ],
      "brando:retrievableInLLM": true
    }
  ]
}

```

### What this graph provides

With just these four nodes, a runtime can:

* resolve **brand identity**: mission, vision, core values,
* load a **support chat context** with audience and channel metadata,
* apply a **default verbal token** for tone and language,
* enforce a **basic brand safety policy** with clear guard rails.

This is enough to:

* build a structured system prompt,
* constrain language use (approved/prohibited terms),
* enforce a minimal set of safety rules.

---

## 2. Minimal YAML example

The same graph, expressed using the **Brando YAML profile**:

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

    brando:hasContext:
      @id: https://example.com/brand/acme/context/support-chat

    brando:usesVerbalToken:
      @id: https://example.com/brand/acme/tokens/verbal/default

    brando:hasPolicy:
      @id: https://example.com/brand/acme/policies/basic-brand-safety

  - @id: https://example.com/brand/acme/context/support-chat
    @type: brando:Context

    brando:audienceSegment:
      - Existing customers seeking product support

    brando:audiencePersona:
      - Hands-on builder

    brando:domainContext: >
      {"channel":"chat","surface":"support-portal","region":"global"}

    brando:usesVerbalToken:
      @id: https://example.com/brand/acme/tokens/verbal/default

  - @id: https://example.com/brand/acme/tokens/verbal/default
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
        If the user asks for unsafe modifications, explain why it is
        unsafe and suggest a safer alternative.

    brando:retrievableInLLM: true
```

You can:

* store this YAML in Git,
* convert it mechanically to JSON-LD,
* serve it via a Brand OS API to your LLM runtime.

---

## 3. How “minimal” can you go?

Strictly speaking, the absolute minimum for a valid Brando instance is:

* `@context` with `schema` and `brando`,
* one `brando:Brand` node with at least `schema:name`.

However, for **practical runtime integration**, this example adds:

* one `Context` (so behaviour can change by channel),
* one `VerbalToken` (so tone and vocabulary are explicit),
* one `Policy` (so there is at least one guard-rail set).

This is the recommended **starting point** for experimentation and pilots.

---

## 4. Where to go from here

From this minimal base, you can incrementally add:

* `brando:VisualToken` for colours, typography, and logos,
* `brando:AudioToken` for sonic identity,
* `brando:BrandedCategory` for product-specific vocabulary,
* `brando:Campaign` for time-bound overlays,
* `brando:AutomationRule` for metric-driven behaviour changes.

See also:

* [Getting started](../getting-started.md)
* [Quickstart (JSON-LD)](../getting-started-jsonld.md)
* [Quickstart (YAML)](../getting-started-yaml.md)
* [House of brands example](house-of-brands.md)
* [Chatbot + Brando runtime flow](chatbot-runtime.md)
