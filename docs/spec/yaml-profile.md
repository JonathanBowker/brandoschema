<!-- ===========================
docs/spec/yaml-profile.md
=========================== -->

# YAML schema profile

Brando can be authored in YAML for human-friendly configuration, then compiled into JSON-LD.

This page describes a **lightweight profile** for that YAML.

---

## 1. Basic mapping

- Top-level `context` → JSON-LD `@context`
- `id` → `@id`
- `type` → `@type`
- Simple properties (e.g. `name`, `mission`) map to `brando:` or `schema:` terms according to your tooling.

Example:

```yaml
context:
  schema: https://schema.org/
  brando: https://brandoschema.com/ontology#

brand:
  id: https://example.com/brand#core
  type: brando:Brand
  name: Example Brand
  url: https://www.example.com/
  mission: Help people manage their money with confidence.
```

---

## 2. References

IDs can be referenced elsewhere in the YAML:

```yaml
contexts:
  support_chat:
    id: https://example.com/context#support-chat
    type: brando:Context
    channel: web_chat
    audience: consumer
    goal: support
    activatesPolicies:
      - policy.no_financial_advice

policies:
  no_financial_advice:
    id: https://example.com/policy#no-financial-advice
    type: brando:Policy
    enforcementLevel: mandatory
```

Your build tool can resolve `policy.no_financial_advice` to its full `@id` and structure.

---

## 3. Recommendations

* Keep YAML keys snake_case or camelCase, but map them consistently.
* Store one brand per file where possible (easier for git).
* Treat YAML as **authoring UX**, JSON-LD as **runtime contract**.
