# `brando:jsonLdSidecar`

`brando:jsonLdSidecar` links a Markdown-authored document and its YAML frontmatter to the JSON sidecar for the same entity.

## Why it matters

The current Brando Schema site is built around a Markdown / YAML / JSON triad. This property is the explicit connection between the authoring forms and the machine-readable sidecar.

## Expected value

| Field | Value |
| --- | --- |
| Property | `brando:jsonLdSidecar` |
| Expected value | URL |
| Used on | Document entity types and related governed document patterns |

## Example

```yaml
"brando:jsonLdSidecar": https://example.com/brands/abc-example-inc/reports/workflow-automation-market-review-2026.json
```

```json
{
  "brando:jsonLdSidecar": "https://example.com/brands/abc-example-inc/reports/workflow-automation-market-review-2026.json"
}
```

## Usage guidance

- Put the property in the YAML frontmatter for the entity.
- Repeat the same value in the JSON sidecar.
- Keep the URL stable so the Markdown, YAML, and JSON versions continue to describe the same object.
