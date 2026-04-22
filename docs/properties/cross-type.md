# Cross-type properties

Cross-type properties are reused across more than one entity type or document pattern.

## Core shared properties for the current site

### [`brando:jsonLdSidecar`](jsonLdSidecar.md)

| Field | Value |
| --- | --- |
| Description | Links a Markdown document and its YAML frontmatter to the JSON sidecar for the same entity. |
| Values expected | **URL** |
| Used on | Document entity types and related governed document patterns |

### [`brando:dataSource`](dataSource.md)

| Field | Value |
| --- | --- |
| Description | Identifies the approved source basis for a document or structured entity. |
| Values expected | **Text** |
| Used on | Reports, disclosures, evidence records, source documents, and similar entities |

### [`brando:reviewWorkflow`](reviewWorkflow.md)

| Field | Value |
| --- | --- |
| Description | Records the expected human review and approval path. |
| Values expected | **Text** |
| Used on | Most governed document entity types |

### [`brando:hasPolicy`](hasPolicy.md)

| Field | Value |
| --- | --- |
| Description | Links the entity to the policy that governs it. |
| Values expected | **brando:Policy** or text reference |
| Used on | Claims, examples, reports, and other governed documents |

### [`brando:appliesToProduct`](appliesToProduct.md)

| Field | Value |
| --- | --- |
| Description | Identifies the product the entity applies to. |
| Values expected | **Text** or linked product node |
| Used on | Claims, examples, disclosures, and planning documents |

### [`brando:effectiveDuring`](effectiveDuring.md)

| Field | Value |
| --- | --- |
| Description | Records the period, campaign, or reporting window for which the entity is valid. |
| Values expected | **Text** |
| Used on | Reports, strategies, disclosures, and audits |

### [`brando:inheritsTokens`](inheritsTokens.md)

| Field | Value |
| --- | --- |
| Description | Indicates inherited expression behavior or token carry-through. |
| Values expected | **Text** |
| Used on | Contextual and inherited brand structures |

### [`brando:usesVisualToken`](usesVisualToken.md)

| Field | Value |
| --- | --- |
| Description | Identifies a visual token used by an entity or governed asset. |
| Values expected | **brando:VisualToken** or text reference |
| Used on | Design-linked documents and operational entities |
