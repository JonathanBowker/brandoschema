---
title: brando:AutomationRule
description: Reference for the brando:AutomationRule class in the Brand Oracle (Brando) schema vocabulary v1.3.
---

# `brando:AutomationRule`

Automated governance rule that reacts to monitored metrics or events to adjust brand behaviour.

> **rdfs:comment**  
> *Automated governance rule that reacts to monitored metrics or events to adjust brand behaviour.*

---

## Term definition

- **IRI:** `brando:AutomationRule`
- **Type:** `owl:Class`
- **Superclass:** `schema:Intangible`
- **Defined in:** `brando:` (Brando Schema Vocabulary v1.3)

A `brando:AutomationRule` represents a **machine-readable, event-driven rule** that can:

- watch metrics or signals,
- evaluate conditions (thresholds, events, schedules),
- and trigger actions that **change how brand rules are applied**.

Typical uses:

- automatically tighten enforcement in high-risk situations,
- route interactions for human review when metrics cross thresholds,
- toggle visibility or retrieval of certain policies or tokens,
- adjust behaviour for specific products, channels, or personas.

It complements `brando:Policy`:

- **`brando:Policy`** → *what* the rules are.  
- **`brando:AutomationRule`** → *when / under what conditions* rules or behaviour should change.

---

## Relationships

### Inbound: from `brando:Brand`

Brands link to their automation rules via:

- **`brando:hasAutomationRule`**
    - **Type:** `owl:ObjectProperty`
    - **Domain:** `brando:Brand`
    - **Range:** `brando:AutomationRule`
    - **rdfs:comment:**  
      *Links a brand to automated governance rules and triggers.*

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar",
  "@type": "brando:Brand",
  "schema:name": "Northstar Bank",
  "brando:hasAutomationRule": {
    "@id": "https://example.com/brand/northstar/automation/rag-high-risk-monitor"
  }
}
```

> **Pattern (non-normative):**
> Attach automation rules at **brand level** and then use rule properties like `brando:appliesTo` to scope them to specific contexts, products, or channels.

---

## Key properties (domain includes `brando:AutomationRule`)

The following properties have `brando:AutomationRule` in their `rdfs:domain`.

### 1. Scope and applicability

| Property IRI       | Range        | Type                   | rdfs:comment                                                                                 |
| ------------------ | ------------ | ---------------------- | -------------------------------------------------------------------------------------------- |
| `brando:appliesTo` | `xsd:string` | `owl:DatatypeProperty` | Optional scoping for which products, categories, personas, or channels this node applies to. |

**Usage notes (non-normative):**

* `appliesTo` is deliberately free-form (`xsd:string`). You can encode:

  * simple descriptions: `"Retail chatbot; UK; savings accounts"`;
  * or structured JSON-as-string if your runtime prefers: `{"contexts":["retail-chatbot-uk"],"personas":["Everyday saver"]}`.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/automation/rag-high-risk-monitor",
  "@type": "brando:AutomationRule",
  "brando:appliesTo": {
    "contexts": [
      "retail-chatbot-uk"
    ],
    "personas": [
      "Everyday saver"
    ]
  }
}

```

---

### 2. Triggers and monitored metrics

| Property IRI             | Range        | Type                   | rdfs:comment                                                                      |
| ------------------------ | ------------ | ---------------------- | --------------------------------------------------------------------------------- |
| `brando:triggerType`     | `xsd:string` | `owl:DatatypeProperty` | Type of event or condition that activates this automation rule.                   |
| `brando:monitoredMetric` | `xsd:string` | `owl:DatatypeProperty` | Structured JSON describing the metric being monitored, thresholds, and operators. |
| `brando:dataSource`      | `xsd:string` | `owl:DatatypeProperty` | API endpoint or data source providing metrics or signals.                         |

**Usage notes (non-normative):**

* `triggerType` might describe things like:

    * `"metric-threshold"`,
    * `"time-scheduled"`,
    * `"manual-review-queue-size"`,
    * `"incident-report-received"`.

* `monitoredMetric` is intended for **JSON-as-string**, for example:

  ```json
  {
  "name": "unsafe_output_rate",
  "threshold": 0.05,
  "operator": ">",
  "window": "7d"
  }

  ```

* `dataSource` can be:

    * a URL or identifier of the metric API,
    * a description of the system responsible for emitting events.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/automation/rag-high-risk-monitor",
  "@type": "brando:AutomationRule",
  "brando:triggerType": "metric-threshold",
  "brando:monitoredMetric": {
    "name": "unsafe_output_rate",
    "threshold": 0.05,
    "operator": ">",
    "window": "7d"
  },
  "brando:dataSource": "https://monitoring.example.com/api/metrics/unsafe_output_rate"
}
```

---

### 3. Actions

| Property IRI              | Range        | Type                   | rdfs:comment                                                              |
| ------------------------- | ------------ | ---------------------- | ------------------------------------------------------------------------- |
| `brando:automationAction` | `xsd:string` | `owl:DatatypeProperty` | Structured JSON describing actions taken when trigger conditions are met. |

**Usage notes (non-normative):**

* Again, intended as **JSON-as-string**. Common patterns might include:

    * changing enforcement level of a policy,
    * enabling or disabling retrieval of certain nodes,
    * routing interactions to human review queues,
    * notifying governance owners.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/automation/rag-high-risk-monitor",
  "@type": "brando:AutomationRule",
  "brando:automationAction": {
    "actionType": "increase_enforcement",
    "targetPolicies": [
      "global-brand-safety"
    ],
    "newLevel": "mandatory",
    "notify": [
      "risk-team@northstar.example"
    ]
  }
}
```

Your own runtime would parse this JSON string and apply it according to your internal automation engine.

---

### 4. Enforcement strength and risk tagging

`brando:AutomationRule` shares some governance properties with `brando:Policy`:

| Property IRI              | Range        | Type                   | rdfs:comment                                                                                                                                                                          |
| ------------------------- | ------------ | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `brando:enforcementLevel` | `xsd:string` | `owl:DatatypeProperty` | Indicates how strongly a policy or automation rule must be applied. Suggested values include "mandatory", "advisory", and "conditional" and may be extended by implementations.       |
| `brando:riskTag`          | `xsd:string` | `owl:DatatypeProperty` | One or more lightweight tags describing the primary risk domains involved (e.g. "brand-safety", "financial-regulation"). Intended for querying, reporting, and governance dashboards. |

**Usage notes (non-normative):**

* Use `enforcementLevel` to describe the **strength** of the automation itself (not the policy it may affect), for example:

    * `"mandatory"` – must always run; failing to apply is itself a governance issue.
    * `"advisory"` – recommended but not strictly required.
    * `"conditional"` – dependent on additional logic.

* `riskTag` is helpful for:

    * grouping automation rules by risk category,
    * dashboards (for example, “how many rules relate to financial regulation?”).

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/automation/rag-high-risk-monitor",
  "@type": "brando:AutomationRule",
  "brando:enforcementLevel": "mandatory",
  "brando:riskTag": [
    "brand-safety",
    "llm-guardrails"
  ]
}
```

---

### 5. External systems and integrations

`brando:AutomationRule` participates in the same integration pattern as brands, contexts, policies, and campaigns:

| Property IRI              | Range                        | Type                   | rdfs:comment                                                                                                                                |
| ------------------------- | ---------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `brando:externalSystem`   | `schema:SoftwareApplication` | `owl:ObjectProperty`   | Links a brand, context, policy, campaign, or automation rule to a `schema:SoftwareApplication` node that describes the integration target.  |
| `brando:externalSystemId` | `xsd:string`                 | `owl:DatatypeProperty` | Identifier for the corresponding object in an external tool or platform such as Adobe GenStudio, Meta Ads Manager, Figma, or internal CMSs. |

**Usage notes (non-normative):**

* Use `externalSystem` + `externalSystemId` to tie the AutomationRule to:

    * an incident rule in an observability platform,
    * a workflow in an orchestration engine,
    * a job definition in a scheduling system.

Example:

```jsonld
{
  "@id": "https://example.com/brand/northstar/automation/rag-high-risk-monitor",
  "@type": "brando:AutomationRule",
  "brando:externalSystem": {
    "@id": "https://example.com/integrations/governance-orchestrator"
  },
  "brando:externalSystemId": "northstar_rag_high_risk_monitor_v1"
}
```

External system node:

```jsonld
{
  "@id": "https://example.com/integrations/governance-orchestrator",
  "@type": "schema:SoftwareApplication",
  "schema:name": "Governance Orchestrator",
  "schema:applicationCategory": "Workflow automation"
}
```

---

## Combined example: Brand + policies + automation rule

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/",
    "gs1": "https://ref.gs1.org/voc/"
  },
  "@graph": [
    {
      "@id": "https://example.com/brand/northstar",
      "@type": "brando:Brand",
      "schema:name": "Northstar Bank",
      "brando:hasPolicy": {
        "@id": "https://example.com/brand/northstar/policies/global-brand-safety"
      },
      "brando:hasAutomationRule": {
        "@id": "https://example.com/brand/northstar/automation/rag-high-risk-monitor"
      }
    },
    {
      "@id": "https://example.com/brand/northstar/policies/global-brand-safety",
      "@type": "brando:Policy",
      "brando:enforcementLevel": "mandatory",
      "brando:riskTag": [
        "brand-safety"
      ],
      "brando:guardRails": [
        "Do not output hate speech, harassment, or discriminatory language.",
        "Do not claim features or capabilities the brand does not provide."
      ],
      "brando:retrievableInLLM": true
    },
    {
      "@id": "https://example.com/brand/northstar/automation/rag-high-risk-monitor",
      "@type": "brando:AutomationRule",
      "brando:appliesTo": {
        "contexts": [
          "retail-chatbot-uk"
        ],
        "personas": [
          "Everyday saver"
        ]
      },
      "brando:triggerType": "metric-threshold",
      "brando:monitoredMetric": {
        "name": "unsafe_output_rate",
        "threshold": 0.05,
        "operator": ">",
        "window": "7d"
      },
      "brando:dataSource": "https://monitoring.example.com/api/metrics/unsafe_output_rate",
      "brando:automationAction": {
        "actionType": "increase_enforcement",
        "targetPolicies": [
          "https://example.com/brand/northstar/policies/global-brand-safety"
        ],
        "newLevel": "mandatory",
        "notify": [
          "risk-team@northstar.example"
        ]
      },
      "brando:enforcementLevel": "mandatory",
      "brando:riskTag": [
        "brand-safety",
        "llm-guardrails"
      ],
      "brando:externalSystem": {
        "@id": "https://example.com/integrations/governance-orchestrator"
      },
      "brando:externalSystemId": "northstar_rag_high_risk_monitor_v1"
    },
    {
      "@id": "https://example.com/integrations/governance-orchestrator",
      "@type": "schema:SoftwareApplication",
      "schema:name": "Governance Orchestrator",
      "schema:applicationCategory": "Workflow automation"
    }
  ]
}

```

**Runtime pattern (non-normative):**

1. Brand OS periodically evaluates automation rules (or listens for events) for a given brand.
2. For each `brando:AutomationRule`:

    * reads `triggerType`, `monitoredMetric`, `dataSource`,
    * checks if conditions are met.

3. If conditions are met:

    * parses `automationAction`,
    * applies the described changes (for example, increasing enforcement, enabling extra checks, notifying teams),
    * honours `enforcementLevel` and `riskTag` when deciding whether failures to execute are themselves incidents.

4. Logs what rules were evaluated and which actions were taken, so governance teams can audit rule behaviour over time.

---

## Related documentation

* **Concepts / overview**

    * [Brando types overview](index.md)
    * [Getting started](../getting-started.md)

* **Related types**

    * [`brando:Brand`](brand.md)
    * [`brando:Policy`](policy.md)
    * [`brando:Context`](context.md)

* **Integration patterns**

    * [Runtime Integration (LLMs, MCP, APIs)](../architecture/runtime-integration.md)