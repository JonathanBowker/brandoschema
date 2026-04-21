---
title: brando:ImpactAssessment
description: Reference for the brando:ImpactAssessment class in the Brand Oracle (Brando) schema vocabulary v1.3. Focused on AI brand impact, aligned with enterprise AI governance and ISO/IEC 42005-style impact assessments.
---

# `brando:ImpactAssessment`

AI brand impact assessment record aligned with **enterprise AI governance** and **emerging AI impact assessment practices** (e.g. [ISO/IEC 42005](https://www.iso.org/standard/42005)). It captures purpose, scope, brand and customer risks, mitigations, **expected and observed value**, and decisions for an AI system, use case, or model **from a brand, communications, and CX perspective**.

> **rdfs:comment**
> *An assessment of the brand, customer, and regulatory impact of an AI system, use case, or model, including risks, mitigations, governance decisions, and value outcomes. Designed to* ***complement*** *enterprise AI, privacy, and model risk frameworks, and align with impact assessment practices such as ISO/IEC 42005.*

---

## Term definition

- **IRI:** `brando:ImpactAssessment`
- **Type:** `owl:Class`
- **Superclass:** `schema:Action`, `schema:CreativeWork`
- **Defined in:** `brando:` (Brando Schema Vocabulary v1.3)

`brando:ImpactAssessment` is the **core brand-focused impact, risk, and value node** in Brando. It represents a **first-class assessment object** that:

- links to the **brand**, **context**, and **AI artefacts** (models, prompts, automations) being assessed,
- describes **intended use**, **brand and customer impacts**, **risks**, **value hypotheses**, and **mitigations**,
- records **governance outcomes** (e.g. approved, rejected, pilot-only),
- can reference or sit alongside **enterprise AI / privacy / model risk assessments** maintained elsewhere,
- provides a **measurement spine** for tracking **success metrics and value over time** for anything integrated with the Brand Oracle.

It is designed to align structurally with AI impact assessment flows such as **ISO/IEC 42005**, while remaining light enough to be used operationally inside a Brand Oracle, with a focus on **how AI touches the brand and what value it creates** rather than the entirety of enterprise AI governance.

---

## Intended usage

Use `brando:ImpactAssessment` whenever you need to **formally record how an AI use case or configuration has been evaluated from a brand, customer, communications, and regulatory-signal perspective, including how success will be measured.**

Common patterns:

- **Pre-deployment brand impact & value assessment**

    - New assistant, tool, or feature using generative AI in a branded surface.
    - New prompt flows or agents that can speak or act on behalf of the brand.

- **Material change assessment**

    - Model upgrade, new data source, new high-risk channel (e.g. wealth, healthcare, youth, public social).

- **Periodic / portfolio review**

    - Quarterly re-assessment of high-impact, high-visibility use cases.
    - The Brand Brain’s “AI inventory” view: each live use case has an attached brand impact & value assessment.

This class is **not** intended to replace:

- enterprise AI ethics / responsible AI processes,
- privacy / data protection impact assessments,
- model risk governance or security assessments.

Instead, it **links to and references** those where relevant (e.g. via `brando:linkedPolicy`, `brando:externalSystemId`, or tags), while providing a **brand-governance front door**:

- Is this use case on-brand?
- What could it do to trust, tone, and customer outcomes?
- What **value** do we expect it to create?
- How will we **measure** that value as it evolves?
- Under what conditions is it allowed to run?

In a typical flow:

  1. A team defines a `brando:Brand`, `brando:Context`, and relevant runtime artefacts:

    - `brando:BrandModel`, `brando:Prompt`, `brando:AutomationRule`.

  2. They create a `brando:ImpactAssessment` instance linked to those nodes.

  3. The assessment captures:

    - purpose, user groups, channels, jurisdictions;
    - potential **brand & customer harms** and **regulatory exposure as it shows up in comms**;
    - **success criteria, metrics, and expected outcomes**;
    - mitigations (policies, controls, guard rails) and residual risk.

  4. A governance body (e.g. Brand, Legal, Risk, Compliance) records a **decision** (approve, reject, pilot-only) and a **rationale**.

  5. Runtimes and dashboards query `brando:ImpactAssessment` to determine:

    - whether a given use case is **approved**,
    - under what **conditions**,
    - how it is **performing against its success metrics**, and
    - when it must be **re-reviewed**.

---

## Relationships

### Inbound

Impact assessments are usually reached from:

- **`brando:hasImpactAssessment`**

    - **Domain:** `brando:Brand`, `brando:Context`, `brando:BrandModel`, `brando:AutomationRule`
    - **Range:** `brando:ImpactAssessment`
    - **Comment (summary):** Links a brand, context, model, or automation rule to one or more recorded AI impact assessments.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/models/wealth-assistant-v1",
  "@type": "brando:BrandModel",
  "schema:name": "Northstar Wealth Assistant v1",
  "brando:hasImpactAssessment": {
    "@id": "https://example.com/brand/northstar/assessments/wealth-assistant-v1-initial"
  }
}
```

Impact assessments will often also be linked **via governance structures**, for example:

* `brando:linkedPolicy` → `brando:Policy`
* future governance types such as a `brando:GovernanceModel` or governance-decision node

These properties have `brando:ImpactAssessment` in their domain and allow you to join the assessment to the wider **Brand Brain governance graph** and, via external IDs, to **enterprise AI governance registers**.

---

## Key properties (domain includes `brando:ImpactAssessment`)

Below are the main properties intended to be used with `brando:ImpactAssessment`. They can also be reused on other governance classes where appropriate, but are described here from the **impact assessment** perspective.

---

### 1. Scope and subject of assessment

| Property IRI                    | Range                   | Type                   | Comment (summary)                                                                                  |
| ------------------------------- | ----------------------- | ---------------------- | -------------------------------------------------------------------------------------------------- |
| `brando:assessesBrand`          | `brando:Brand`          | `owl:ObjectProperty`   | Brand whose reputation, trust, or equity is impacted by this AI system or use case.                |
| `brando:assessesContext`        | `brando:Context`        | `owl:ObjectProperty`   | Specific context (channel, audience, region) in which the AI behaviour is evaluated.               |
| `brando:assessesModel`          | `brando:BrandModel`     | `owl:ObjectProperty`   | Brand model, agent, or AI system that is the primary subject of this assessment.                   |
| `brando:assessesPrompt`         | `brando:Prompt`         | `owl:ObjectProperty`   | Prompt, workflow, or orchestration pattern being assessed (e.g. a particular runbook or flow).     |
| `brando:assessesAutomationRule` | `brando:AutomationRule` | `owl:ObjectProperty`   | Automation or routing rule whose impact is being assessed (e.g. auto-send, auto-escalate).         |
| `brando:assessmentScope`        | `xsd:string`            | `owl:DatatypeProperty` | Free-text or JSON-encoded description of scope (use case boundary, channels, jurisdictions, etc.). |
| `brando:assessmentUseCaseId`    | `xsd:string`            | `owl:DatatypeProperty` | Stable identifier for the use case in internal inventories or registers.                           |
| `brando:assessmentPhase`        | `xsd:string`            | `owl:DatatypeProperty` | Stage of the lifecycle (e.g. “design”, “pilot”, “production”, “retrospective”).                    |

**Usage notes (non-normative):**

* `assessesBrand`, `assessesContext`, and `assessesModel` are the **primary anchors** used for queries like:

  * “show all approved AI use cases for Brand X in Region Y”
  * “list impact assessments for this model.”

* `assessmentScope` is deliberately flexible. Common patterns:

  * simple string: `"Retail wealth advisory chatbot for UK and EU"`, or
  * JSON string:

    ```json
    {
      "channels": ["mobile app", "web"],
      "jurisdictions": ["UK", "DE"],
      "audiences": ["retail-high-net-worth"]
    }
    ```

* `assessmentUseCaseId` is useful for connecting the graph to:

  * internal AI inventories / registers,
  * risk registers,
  * internal LLM Suite registries or AI catalogs.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/assessments/wealth-assistant-v1-initial",
  "@type": "brando:ImpactAssessment",
  "brando:assessesBrand": { "@id": "https://example.com/brand/northstar" },
  "brando:assessesContext": { "@id": "https://example.com/brand/northstar/context/wealth-chat" },
  "brando:assessesModel": { "@id": "https://example.com/brand/northstar/models/wealth-assistant-v1" },
  "brando:assessmentUseCaseId": "NSB-WEALTH-CHAT-001",
  "brando:assessmentPhase": "design"
}
```

---

### 2. Risks, impacts, and harms

| Property IRI                | Range        | Type                   | Comment (summary)                                                                                       |
| --------------------------- | ------------ | ---------------------- | ------------------------------------------------------------------------------------------------------- |
| `brando:impactSummary`      | `xsd:string` | `owl:DatatypeProperty` | Short human-readable summary of the overall brand, customer, and regulatory-signal impact.              |
| `brando:impactAreas`        | `xsd:string` | `owl:DatatypeProperty` | List or JSON string describing impacted dimensions (e.g. “brand trust”, “vulnerable customers”, “ESG”). |
| `brando:harmScenarios`      | `xsd:string` | `owl:DatatypeProperty` | Example scenarios where the use case could cause harm or unacceptable outcomes.                         |
| `brando:riskRating`         | `xsd:string` | `owl:DatatypeProperty` | Overall brand/impact rating for the use case (e.g. “Low”, “Medium”, “High”, “VeryHigh”).                |
| `brando:residualRiskRating` | `xsd:string` | `owl:DatatypeProperty` | Risk rating **after** mitigations and controls are applied.                                             |
| `brando:riskFactors`        | `xsd:string` | `owl:DatatypeProperty` | Key factors that drive risk up or down (e.g. audience sensitivity, autonomy level, data sensitivity).   |
| `brando:affectedPersonas`   | `xsd:string` | `owl:DatatypeProperty` | Product/synthetic personas most affected by this use case (free text or references encoded as strings). |

**Usage notes (non-normative):**

* `impactAreas`, `harmScenarios`, and `riskFactors` work well as **JSON arrays** stored as strings, e.g.:

  ```json
  [
    "Potential mis-selling of complex financial products",
    "Over-reliance on AI responses during market stress",
    "Disproportionate impact on vulnerable or less literate customers"
  ]
  ```

* `riskRating` and `residualRiskRating` can be aligned to:

  * internal brand/AI risk scales (e.g. `L`, `M`, `H`), or
  * a 1–5 style scale if harmonised with a wider risk vocabulary.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/assessments/wealth-assistant-v1-initial",
  "@type": "brando:ImpactAssessment",
  "brando:impactSummary": "High customer-impact, high brand-sensitivity use case for retail wealth advice. Medium residual risk with mitigations.",
  "brando:impactAreas": [
    "brand-trust",
    "customer-outcomes",
    "regulatory-exposure"
  ],
  "brando:harmScenarios": [
    "Customer interprets general guidance as personalised investment advice.",
    "Assistant encourages unsuitable risk profiles during market volatility."
  ],
  "brando:riskRating": "High",
  "brando:residualRiskRating": "Medium",
  "brando:riskFactors": [
    "Retail, non-professional investors",
    "Complex financial instruments",
    "High reliance on natural-language explanations"
  ]
}
```

---

### 3. Mitigations, controls, and decisions

| Property IRI                | Range           | Type                   | Comment (summary)                                                                                                |
| --------------------------- | --------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `brando:linkedPolicy`       | `brando:Policy` | `owl:ObjectProperty`   | Policies that govern this use case (brand, legal, conduct, regional, product-specific).                          |
| `brando:requiredMitigation` | `xsd:string`    | `owl:DatatypeProperty` | Mitigations or controls required before or during deployment (guard rails, escalation, human-in-the-loop).       |
| `brando:mitigationStatus`   | `xsd:string`    | `owl:DatatypeProperty` | Status of mitigations (e.g. “planned”, “in-progress”, “implemented”, “not-feasible”).                            |
| `brando:decisionStatus`     | `xsd:string`    | `owl:DatatypeProperty` | Governance decision outcome for the use case (e.g. “approved”, “approved-with-conditions”, “rejected”, “pilot”). |
| `brando:decisionRationale`  | `xsd:string`    | `owl:DatatypeProperty` | Human-readable rationale explaining why the decision was taken, trade-offs, and assumptions.                     |
| `brando:reviewedByRole`     | `schema:Role`   | `owl:ObjectProperty`   | Role (team or governance function) responsible for the assessment and decision (e.g. Brand, Legal, Risk).        |

**Usage notes (non-normative):**

* `linkedPolicy` is the glue between **impact assessments** and **machine-readable policies** (`brando:Policy`) that Brand Brain runtimes actually enforce.
* `requiredMitigation` is often easiest as a list of bullet-style strings; it can also hold JSON describing more structured actions.
* `decisionStatus` is free-form but benefits from a constrained vocabulary in practice, e.g.:

  * `"approved"`, `"approved-with-conditions"`, `"pilot-only"`, `"rejected"`, `"needs-more-information"`.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/assessments/wealth-assistant-v1-initial",
  "@type": "brando:ImpactAssessment",
  "brando:linkedPolicy": [
    { "@id": "https://example.com/brand/northstar/policies/global-brand-safety" },
    { "@id": "https://example.com/brand/northstar/policies/regulated-claims-uk" }
  ],
  "brando:requiredMitigation": [
    "Enforce refusal strategies for personalised investment advice.",
    "Route high-risk conversations to human advisors after 2 follow-up questions.",
    "Log and monitor conversations mentioning vulnerable customers for QA review."
  ],
  "brando:mitigationStatus": "in-progress",
  "brando:decisionStatus": "approved-with-conditions",
  "brando:decisionRationale": "High potential customer impact; residual risk acceptable with strict guard rails and human escalation."
}
```

---

### 4. Lifecycle, timing, and alignment with standards

| Property IRI                 | Range         | Type                   | Comment (summary)                                                                                             |
| ---------------------------- | ------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------- |
| `brando:assessmentDate`      | `xsd:date`    | `owl:DatatypeProperty` | Date when the core impact assessment was completed or approved.                                               |
| `brando:nextReviewDue`       | `xsd:date`    | `owl:DatatypeProperty` | Date by which the assessment should be reviewed or renewed.                                                   |
| `brando:assessmentOwnerRole` | `schema:Role` | `owl:ObjectProperty`   | Role accountable for maintaining this assessment over time (e.g. “Head of Brand Strategy”).                   |
| `brando:assessmentMethod`    | `xsd:string`  | `owl:DatatypeProperty` | Short description of the method/framework used (e.g. “ISO/IEC 42005-style brand impact lens on AI use case”). |
| `brando:externalSystemId`    | `xsd:string`  | `owl:DatatypeProperty` | Identifier for this assessment in external governance tools or AI registries (enterprise AI/ML risk systems). |

**Usage notes (non-normative):**

* `assessmentMethod` is where you can make **standards alignment explicit**, e.g.:

  ```json
  "assessmentMethod": "Aligned with ISO/IEC 42005 structure; scoped to brand, customer, and communications impact."
  ```

* `nextReviewDue` supports operational hygiene:

  * dashboards can show which assessments are “stale”,
  * agents can automatically flag use cases due for re-assessment (e.g. after a model or policy change).

* `externalSystemId` is a natural bridge into:

  * enterprise AI registers,
  * model risk systems,
  * DPIA / PIA registers (where applicable).

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/assessments/wealth-assistant-v1-initial",
  "@type": "brando:ImpactAssessment",
  "brando:assessmentDate": "2025-03-15",
  "brando:nextReviewDue": "2025-09-15",
  "brando:assessmentMethod": "ISO/IEC 42005-aligned AI brand impact assessment template layered on top of enterprise AI/ML risk review.",
  "brando:externalSystemId": "AIREG-NSB-001"
}
```

---

### 5. Value, outcomes, and measurement

| Property IRI              | Range                        | Type                   | Comment (summary)                                                                                                 |
| ------------------------- | ---------------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `brando:successCriteria`  | `xsd:string`                 | `owl:DatatypeProperty` | Definition of success in brand, CX, or commercial terms (e.g. “reduce review time by 30% while maintaining NPS”). |
| `brando:expectedOutcomes` | `xsd:string`                 | `owl:DatatypeProperty` | Expected qualitative and quantitative outcomes versus baseline.                                                   |
| `brando:measurementPlan`  | `xsd:string`                 | `owl:DatatypeProperty` | Description of how success will be measured (metrics, data sources, cadence, owners).                             |
| `brando:keyMetrics`       | `xsd:string`                 | `owl:DatatypeProperty` | List or JSON string of key metrics tracked for this use case (e.g. AHT, brand consistency score, CSAT, revenue).  |
| `brando:baselineSnapshot` | `xsd:string`                 | `owl:DatatypeProperty` | Baseline metrics or conditions before deployment (typically a JSON string or structured summary).                 |
| `brando:observedOutcomes` | `xsd:string`                 | `owl:DatatypeProperty` | Observed qualitative and quantitative impact after deployment / review cycles.                                    |
| `brando:telemetrySource`  | `schema:SoftwareApplication` | `owl:ObjectProperty`   | Analytics or BI systems feeding measurements into this assessment (e.g. call centre BI, CMS logs, web analytics). |

**Usage notes (non-normative):**

* These properties turn `brando:ImpactAssessment` into a **closed loop**: not just “is it safe?” but “is it working and how well?”.

* `successCriteria` should read like a contract between brand, product, and governance, e.g.:

  ```text
  Automate 25% of routine wealth queries while maintaining or improving brand trust and complaint rates.
  ```

* `keyMetrics`, `baselineSnapshot`, and `observedOutcomes` typically contain **JSON strings**, e.g.:

  ```json
  {
    "avg_handling_time": 520,
    "complaint_rate_mis-selling": 0.8,
    "brand_consistency_score": 72
  }
  ```

* `telemetrySource` helps wire the assessment to real data platforms, so dashboards and agents can automatically pull metrics.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/assessments/wealth-assistant-v1-initial",
  "@type": "brando:ImpactAssessment",
  "brando:successCriteria": [
    "Automate at least 25% of routine wealth queries.",
    "Maintain or improve brand trust and mis-selling complaint rates vs baseline."
  ],
  "brando:expectedOutcomes": [
    "20–30% reduction in average handling time for routine wealth queries.",
    "Improved perceived clarity of communications in post-interaction surveys."
  ],
  "brando:measurementPlan": "Compare AHT, escalation rates, complaint rates, CSAT, and brand consistency for wealth chat before/after rollout over 90 days.",
  "brando:keyMetrics": [
    "avg_handling_time",
    "complaint_rate_mis-selling",
    "wealth_chat_csat",
    "brand_consistency_score"
  ],
  "brando:baselineSnapshot": "{\"avg_handling_time\":520,\"complaint_rate_mis-selling\":0.8,\"brand_consistency_score\":72}",
  "brando:observedOutcomes": "{\"avg_handling_time\":410,\"complaint_rate_mis-selling\":0.7,\"brand_consistency_score\":79}",
  "brando:telemetrySource": {
    "@id": "https://example.com/systems/contact-centre-bi",
    "@type": "schema:SoftwareApplication",
    "schema:name": "Contact Centre BI"
  }
}
```

---

### 6. Files and documentation

As with `brando:Policy`, these shared properties are often used to attach **artefacts** to impact assessments:

| Property IRI              | Range                | Type                 | Comment (summary)                                                                                                    |
| ------------------------- | -------------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `brando:downloadableFile` | `schema:MediaObject` | `owl:ObjectProperty` | Links an impact assessment to the current canonical assessment document (e.g. PDF, doc, structured template export). |
| `brando:supportingFile`   | `schema:MediaObject` | `owl:ObjectProperty` | Links to supporting materials such as risk analyses, user research, or design artefacts.                             |

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/assessments/wealth-assistant-v1-initial",
  "@type": "brando:ImpactAssessment",
  "brando:downloadableFile": {
    "@id": "https://assets.example.com/northstar/impact/wealth-assistant-v1-initial.pdf",
    "@type": "schema:MediaObject",
    "schema:name": "AI Brand Impact & Value Assessment – Wealth Assistant v1 (PDF)"
  },
  "brando:supportingFile": [
    {
      "@id": "https://assets.example.com/northstar/research/wealth-persona-research-2025.pdf",
      "@type": "schema:MediaObject",
      "schema:name": "Wealth Customer Persona Research 2025"
    }
  ]
}
```

---

## Example: Brand + Context + Model + Impact Assessment

A combined example showing how `brando:ImpactAssessment` connects the **Brand Brain** governance objects, coexists with enterprise AI governance, and tracks value over time:

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
        "@id": "https://example.com/brand/northstar/context/wealth-chat"
      },
      "brando:hasPolicy": {
        "@id": "https://example.com/brand/northstar/policies/global-brand-safety"
      }
    },
    {
      "@id": "https://example.com/brand/northstar/context/wealth-chat",
      "@type": "brando:Context",
      "brando:audienceSegment": "Retail wealth customers",
      "brando:domainContext": {
        "channel": "chat",
        "surface": "mobile-app",
        "region": "UK"
      },
      "brando:hasPolicy": {
        "@id": "https://example.com/brand/northstar/policies/regulated-claims-uk"
      }
    },
    {
      "@id": "https://example.com/brand/northstar/models/wealth-assistant-v1",
      "@type": "brando:BrandModel",
      "schema:name": "Wealth Assistant v1",
      "brando:hasImpactAssessment": {
        "@id": "https://example.com/brand/northstar/assessments/wealth-assistant-v1-initial"
      }
    },
    {
      "@id": "https://example.com/brand/northstar/assessments/wealth-assistant-v1-initial",
      "@type": "brando:ImpactAssessment",
      "brando:assessesBrand": { "@id": "https://example.com/brand/northstar" },
      "brando:assessesContext": { "@id": "https://example.com/brand/northstar/context/wealth-chat" },
      "brando:assessesModel": { "@id": "https://example.com/brand/northstar/models/wealth-assistant-v1" },
      "brando:assessmentUseCaseId": "NSB-WEALTH-CHAT-001",
      "brando:assessmentPhase": "design",
      "brando:impactSummary": "High-impact wealth advisory chatbot; approved with strict brand and conduct guard rails, human escalation, and clear success metrics.",
      "brando:impactAreas": [
        "brand-trust",
        "customer-outcomes",
        "regulatory-exposure"
      ],
      "brando:harmScenarios": [
        "Customer interprets generic explanations as personalised advice.",
        "Assistant downplays risks in volatile markets."
      ],
      "brando:riskRating": "High",
      "brando:residualRiskRating": "Medium",
      "brando:linkedPolicy": [
        { "@id": "https://example.com/brand/northstar/policies/global-brand-safety" },
        { "@id": "https://example.com/brand/northstar/policies/regulated-claims-uk" }
      ],
      "brando:requiredMitigation": [
        "Hard refusal on personalised investment advice.",
        "Escalate to human advisor for complex or vulnerable-customer situations.",
        "Monitor conversation samples weekly for mis-selling risks."
      ],
      "brando:decisionStatus": "approved-with-conditions",
      "brando:decisionRationale": "Residual brand and customer risk acceptable with guard rails, human-in-the-loop oversight, and active monitoring of success metrics.",
      "brando:assessmentMethod": "ISO/IEC 42005-aligned AI brand impact assessment layered on top of enterprise AI model risk review.",
      "brando:assessmentDate": "2025-03-15",
      "brando:nextReviewDue": "2025-09-15",
      "brando:externalSystemId": "AIREG-NSB-001",
      "brando:successCriteria": [
        "Automate at least 25% of routine wealth queries.",
        "Maintain or improve wealth-chat CSAT and brand trust scores.",
        "No increase in mis-selling or suitability complaint rates."
      ],
      "brando:expectedOutcomes": [
        "20–30% reduction in AHT for routine wealth queries.",
        "Improved perceived clarity and reassurance during market volatility."
      ],
      "brando:measurementPlan": "Track AHT, escalation rate, complaint rate, CSAT, and brand consistency for wealth chat in monthly governance reviews over the first 90 days.",
      "brando:keyMetrics": [
        "avg_handling_time",
        "escalation_rate",
        "complaint_rate_mis-selling",
        "wealth_chat_csat",
        "brand_consistency_score"
      ],
      "brando:baselineSnapshot": "{\"avg_handling_time\":520,\"complaint_rate_mis-selling\":0.8,\"wealth_chat_csat\":4.2,\"brand_consistency_score\":72}",
      "brando:observedOutcomes": "{\"avg_handling_time\":410,\"complaint_rate_mis-selling\":0.7,\"wealth_chat_csat\":4.5,\"brand_consistency_score\":79}",
      "brando:telemetrySource": {
        "@id": "https://example.com/systems/contact-centre-bi",
        "@type": "schema:SoftwareApplication",
        "schema:name": "Contact Centre BI"
      },
      "brando:retrievableInLLM": true
    }
  ]
}
```

**Runtime pattern (non-normative):**

1. Resolve current `brando:Brand`, `brando:Context`, and `brando:BrandModel`.
2. Lookup associated `brando:ImpactAssessment` nodes.
3. Filter to:

   * `decisionStatus` ∈ `approved`, `approved-with-conditions`
   * `assessmentDate` and `nextReviewDue` still valid.
4. Use `linkedPolicy` to pull the precise `brando:Policy` guard rails.
5. Use `successCriteria`, `keyMetrics`, `baselineSnapshot`, and `observedOutcomes` to:

   * populate dashboards for **value tracking**,
   * drive alerts when value drifts or metrics degrade,
   * inform re-assessments.
6. Use `externalSystemId` / `assessmentMethod` to show how this use case maps into wider **enterprise AI governance**.

---

## Related documentation

* **Concepts / overview**

    * [Brando types overview](index.md)
    * [Getting started](../getting-started.md)

* **Related types**

    * [`brando:Brand`](brand.md)
    * [`brando:Context`](context.md)
    * [`brando:Policy`](policy.md)
    * [`brando:BrandModel`](brand-model.md)
    * [`brando:AutomationRule`](automation-rule.md)

* **Properties index**

    * [Properties overview](../properties/index.md)
