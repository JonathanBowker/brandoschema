---
title: House of brands example
description: Example Brand Knowledge Graph for a house-of-brands architecture using the Brando (Brand Oracle) schema.
---

# House of brands example

This example shows how to model a **house of brands** portfolio in Brando:

- one **group-level** brand (`Northstar Group`),
- several **independent operating brands**:
    - `Northstar Bank`
    - `Aurora Investments`
    - `Solace Insurance`
- shared **group-level policies**,
- optional brand-specific policies and tokens.

The goal is to demonstrate:

- multiple `brando:Brand` nodes in a single graph,
- policy inheritance via `brando:inheritsPolicies`,
- brand-specific contexts and tokens.

---

## 1. JSON-LD example

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  },
  "@graph": [
    {
      "@id": "https://example.com/brand/northstar-group",
      "@type": "brando:Brand",
      "schema:name": "Northstar Group",
      "brando:missionStatement": "Build trusted financial experiences across markets.",
      "brando:visionStatement": "A connected portfolio of brands that people trust with their money.",
      "brando:coreValues": [
        "Integrity",
        "Clarity",
        "Long-term alignment"
      ],
      "brando:hasPolicy": {
        "@id": "https://example.com/brand/northstar-group/policies/group-risk-baseline"
      }
    },
    {
      "@id": "https://example.com/brand/northstar-bank",
      "@type": "brando:Brand",
      "schema:name": "Northstar Bank",
      "brando:missionStatement": "Financial clarity with absolute trust.",
      "brando:inheritsPolicies": {
        "@id": "https://example.com/brand/northstar-group"
      },
      "brando:hasContext": {
        "@id": "https://example.com/brand/northstar-bank/context/retail-chatbot"
      },
      "brando:usesVerbalToken": {
        "@id": "https://example.com/brand/northstar-bank/tokens/verbal/default"
      }
    },
    {
      "@id": "https://example.com/brand/aurora-investments",
      "@type": "brando:Brand",
      "schema:name": "Aurora Investments",
      "brando:missionStatement": "Disciplined, long-term investing for serious investors.",
      "brando:inheritsPolicies": {
        "@id": "https://example.com/brand/northstar-group"
      },
      "brando:hasContext": {
        "@id": "https://example.com/brand/aurora-investments/context/advisor-portal"
      },
      "brando:usesVerbalToken": {
        "@id": "https://example.com/brand/aurora-investments/tokens/verbal/professional"
      }
    },
    {
      "@id": "https://example.com/brand/solace-insurance",
      "@type": "brando:Brand",
      "schema:name": "Solace Insurance",
      "brando:missionStatement": "Make uncertainty feel manageable for families and small businesses.",
      "brando:inheritsPolicies": {
        "@id": "https://example.com/brand/northstar-group"
      },
      "brando:hasContext": {
        "@id": "https://example.com/brand/solace-insurance/context/claims-chat"
      },
      "brando:usesVerbalToken": {
        "@id": "https://example.com/brand/solace-insurance/tokens/verbal/empathy-first"
      }
    },
    {
      "@id": "https://example.com/brand/northstar-group/policies/group-risk-baseline",
      "@type": "brando:Policy",
      "brando:enforcementLevel": "mandatory",
      "brando:riskTag": [
        "brand-safety",
        "financial-regulation"
      ],
      "brando:guardRails": [
        "Do not provide personalised investment advice.",
        "Do not make promises about returns or guarantees that are not documented.",
        "Do not provide legal or tax advice."
      ],
      "brando:refusalStrategies": [
        "Explain that you cannot provide personalised advice and suggest speaking to a regulated advisor.",
        "Offer to provide general educational information instead of personalised guidance."
      ],
      "brando:retrievableInLLM": true
    },
    {
      "@id": "https://example.com/brand/northstar-bank/context/retail-chatbot",
      "@type": "brando:Context",
      "brando:audienceSegment": [
        "Retail banking customers",
        "Prospects researching savings accounts"
      ],
      "brando:domainContext": {
        "channel": "chatbot",
        "surface": "public-website",
        "region": "UK"
      },
      "brando:usesVerbalToken": {
        "@id": "https://example.com/brand/northstar-bank/tokens/verbal/default"
      }
    },
    {
      "@id": "https://example.com/brand/northstar-bank/tokens/verbal/default",
      "@type": "brando:VerbalToken",
      "brando:toneOfVoice": "Calm, reassuring, and practical.",
      "brando:approvedTerms": [
        "interest rate",
        "savings goals",
        "fees"
      ],
      "brando:prohibitedTerms": [
        "get rich quick",
        "guaranteed returns"
      ]
    },
    {
      "@id": "https://example.com/brand/aurora-investments/context/advisor-portal",
      "@type": "brando:Context",
      "brando:audienceSegment": [
        "Professional financial advisors"
      ],
      "brando:domainContext": {
        "channel": "web",
        "surface": "advisor-portal",
        "region": "global"
      },
      "brando:usesVerbalToken": {
        "@id": "https://example.com/brand/aurora-investments/tokens/verbal/professional"
      }
    },
    {
      "@id": "https://example.com/brand/aurora-investments/tokens/verbal/professional",
      "@type": "brando:VerbalToken",
      "brando:toneOfVoice": "Technical, precise, and data-backed.",
      "brando:approvedTerms": [
        "risk profile",
        "volatility",
        "asset allocation"
      ],
      "brando:prohibitedTerms": [
        "sure bet",
        "guaranteed win"
      ]
    },
    {
      "@id": "https://example.com/brand/solace-insurance/context/claims-chat",
      "@type": "brando:Context",
      "brando:audienceSegment": [
        "Policyholders filing a claim"
      ],
      "brando:domainContext": {
        "channel": "chat",
        "surface": "claims-portal",
        "region": "global"
      },
      "brando:usesVerbalToken": {
        "@id": "https://example.com/brand/solace-insurance/tokens/verbal/empathy-first"
      }
    },
    {
      "@id": "https://example.com/brand/solace-insurance/tokens/verbal/empathy-first",
      "@type": "brando:VerbalToken",
      "brando:toneOfVoice": "Warm, empathetic, and steady under stress.",
      "brando:approvedTerms": [
        "we're here to help",
        "we'll go step by step",
        "we understand this is stressful"
      ],
      "brando:prohibitedTerms": [
        "it's not a big deal",
        "calm down"
      ]
    }
  ]
}
```

### What this graph shows

* **Four brands** in one portfolio:

    * `northstar-group` – group-level brand with group-level policy.
    * `northstar-bank`, `aurora-investments`, `solace-insurance` – operating brands.
* All three operating brands **inherit group policies** via `brando:inheritsPolicies`.
* Each operating brand has:

    * at least one `Context`,
    * at least one `VerbalToken`.

A Brand OS can now:

* enforce a shared **risk baseline** across all brands,
* let each brand express its own **tone and vocabulary** in context,
* provide brand-specific runtime configs to LLMs and agents.

---

## 2. YAML example

Same graph, using the **Brando YAML profile**:

```yaml
@context:
  schema: https://schema.org/
  brando: https://brandoschema.com/

@graph:
  - @id: https://example.com/brand/northstar-group
    @type: brando:Brand

    schema:name: Northstar Group

    brando:missionStatement: >
      Build trusted financial experiences across markets.

    brando:visionStatement: >
      A connected portfolio of brands that people trust with their money.

    brando:coreValues:
      - Integrity
      - Clarity
      - Long-term alignment

    brando:hasPolicy:
      @id: https://example.com/brand/northstar-group/policies/group-risk-baseline

  - @id: https://example.com/brand/northstar-bank
    @type: brando:Brand

    schema:name: Northstar Bank

    brando:missionStatement: >
      Financial clarity with absolute trust.

    brando:inheritsPolicies:
      @id: https://example.com/brand/northstar-group

    brando:hasContext:
      @id: https://example.com/brand/northstar-bank/context/retail-chatbot

    brando:usesVerbalToken:
      @id: https://example.com/brand/northstar-bank/tokens/verbal/default

  - @id: https://example.com/brand/aurora-investments
    @type: brando:Brand

    schema:name: Aurora Investments

    brando:missionStatement: >
      Disciplined, long-term investing for serious investors.

    brando:inheritsPolicies:
      @id: https://example.com/brand/northstar-group

    brando:hasContext:
      @id: https://example.com/brand/aurora-investments/context/advisor-portal

    brando:usesVerbalToken:
      @id: https://example.com/brand/aurora-investments/tokens/verbal/professional

  - @id: https://example.com/brand/solace-insurance
    @type: brando:Brand

    schema:name: Solace Insurance

    brando:missionStatement: >
      Make uncertainty feel manageable for families and small businesses.

    brando:inheritsPolicies:
      @id: https://example.com/brand/northstar-group

    brando:hasContext:
      @id: https://example.com/brand/solace-insurance/context/claims-chat

    brando:usesVerbalToken:
      @id: https://example.com/brand/solace-insurance/tokens/verbal/empathy-first

  - @id: https://example.com/brand/northstar-group/policies/group-risk-baseline
    @type: brando:Policy

    brando:enforcementLevel: mandatory

    brando:riskTag:
      - brand-safety
      - financial-regulation

    brando:guardRails:
      - Do not provide personalised investment advice.
      - Do not make promises about returns or guarantees that are not documented.
      - Do not provide legal or tax advice.

    brando:refusalStrategies:
      - >
        Explain that you cannot provide personalised advice and suggest
        speaking to a regulated advisor.
      - >
        Offer to provide general educational information instead of
        personalised guidance.

    brando:retrievableInLLM: true

  - @id: https://example.com/brand/northstar-bank/context/retail-chatbot
    @type: brando:Context

    brando:audienceSegment:
      - Retail banking customers
      - Prospects researching savings accounts

    brando:domainContext: >
      {"channel":"chatbot","surface":"public-website","region":"UK"}

    brando:usesVerbalToken:
      @id: https://example.com/brand/northstar-bank/tokens/verbal/default

  - @id: https://example.com/brand/northstar-bank/tokens/verbal/default
    @type: brando:VerbalToken

    brando:toneOfVoice: >
      Calm, reassuring, and practical.

    brando:approvedTerms:
      - interest rate
      - savings goals
      - fees

    brando:prohibitedTerms:
      - get rich quick
      - guaranteed returns

  - @id: https://example.com/brand/aurora-investments/context/advisor-portal
    @type: brando:Context

    brando:audienceSegment:
      - Professional financial advisors

    brando:domainContext: >
      {"channel":"web","surface":"advisor-portal","region":"global"}

    brando:usesVerbalToken:
      @id: https://example.com/brand/aurora-investments/tokens/verbal/professional

  - @id: https://example.com/brand/aurora-investments/tokens/verbal/professional
    @type: brando:VerbalToken

    brando:toneOfVoice: >
      Technical, precise, and data-backed.

    brando:approvedTerms:
      - risk profile
      - volatility
      - asset allocation

    brando:prohibitedTerms:
      - sure bet
      - guaranteed win

  - @id: https://example.com/brand/solace-insurance/context/claims-chat
    @type: brando:Context

    brando:audienceSegment:
      - Policyholders filing a claim

    brando:domainContext: >
      {"channel":"chat","surface":"claims-portal","region":"global"}

    brando:usesVerbalToken:
      @id: https://example.com/brand/solace-insurance/tokens/verbal/empathy-first

  - @id: https://example.com/brand/solace-insurance/tokens/verbal/empathy-first
    @type: brando:VerbalToken

    brando:toneOfVoice: >
      Warm, empathetic, and steady under stress.

    brando:approvedTerms:
      - we're here to help
      - we'll go step by step
      - we understand this is stressful

    brando:prohibitedTerms:
      - it's not a big deal
      - calm down
```

---

## 3. How a Brand OS uses this

Given this house-of-brands graph, a Brand OS can:

* load the **relevant brand** by `@id`,
* automatically bring in **group-level policies** via `inheritsPolicies`,
* attach the right **Context** and **VerbalToken** based on channel and audience,
* assemble **brand-specific prompts**, while:

    * preserving the group risk baseline,
    * respecting each brand’s distinct voice.

For deeper runtime details, see:

* [Brand Operating System architecture](../architecture/brand-os.md)
* [Runtime Integration (LLMs, MCP, APIs)](../architecture/runtime-integration.md)
* [Brand portfolios & architecture](../architecture/brand-architecture.md)

