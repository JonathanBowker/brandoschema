# How to use Brando Schema

Use Brando Schema as a document authoring and publishing pattern rather than as a standalone schema catalogue.

The practical workflow is:

1. Write the document as Markdown.
2. Describe the same entity in YAML frontmatter.
3. Publish the matching JSON sidecar.
4. Keep the three representations aligned as one triad.

## Work from entity types first

Start with the [Entity Types](entity-types/index.md) section.

Each entity-type page shows:

- what the entity is for
- the expected entity properties
- one complete example for `ABC Example Inc`
- the same example as `Markdown Body`, `YAML Frontmatter`, and `JSON Sidecar`

## Use properties as supporting reference

Use the [Properties](properties/index.md) section when you need field definitions, especially for shared fields such as `brando:jsonLdSidecar`.
