---
title: JSON-LD context
description: JSON-LD context, namespace, and prefix usage for the Brand Oracle (Brando) schema vocabulary v1.3.
---

# JSON-LD context

Brando vocab v1.3 is defined as a **JSON-LD vocabulary** with its own `@context` and namespace.

This page explains:

- the **namespace** and prefix for Brando,
- the **JSON-LD context** used in the vocabulary file,
- how to use that context in **instance data** (your Brand Knowledge Graph),
- and some **implementation guidelines**.

> **Normative note**  
> The canonical definitions of classes and properties live in the Brando JSON-LD vocabulary file (`brandoVoc_v1.3.jsonld`) and its `@graph`. This page describes how to *use* that vocabulary in your own JSON-LD.

---

## 1. Namespace and prefix

Brando uses a single primary namespace:

- **Namespace IRI:** `https://brandoschema.com/`
- **Preferred prefix:** `brando`

In JSON-LD, the namespace mapping is:

```jsonld
{
  "@context": {
    "brando": "https://brandoschema.com/"
  }
}
```

Examples:

* `brando:Brand` → `https://brandoschema.com/Brand`
* `brando:toneOfVoice` → `https://brandoschema.com/toneOfVoice`

> **Note**
> The exact IRIs for classes and properties are defined in the vocabulary’s `@graph`. The prefix mapping above is how you refer to them in your instance data.

---

## 2. Vocabulary-level context

The Brando vocabulary JSON-LD file declares a `@context` that includes standard prefixes used throughout the vocab:

```jsonld
{
  "@context": {
    "rdf":    "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    "rdfs":   "http://www.w3.org/2000/01/rdf-schema#",
    "owl":    "http://www.w3.org/2002/07/owl#",
    "xsd":    "http://www.w3.org/2001/XMLSchema#",

    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/",
    "gs1":    "https://ref.gs1.org/voc/",

    "dcterms": "http://purl.org/dc/terms/",
    "vann":    "http://purl.org/vocab/vann/",
    "voaf":    "http://purl.org/vocommons/voaf#",
    "cc":      "http://creativecommons.org/ns#",
    "skos":    "http://www.w3.org/2004/02/skos/core#"
  },
  "@graph": [
    // vocabulary classes and properties…
  ]
}
```

This context is **for the vocabulary itself**:

* it lets the vocab express:

  * `owl:Class`, `owl:ObjectProperty`, `owl:DatatypeProperty`,
  * `rdfs:label`, `rdfs:comment`, `rdfs:domain`, `rdfs:range`,
  * metadata via `dcterms:` and `cc:`,
  * alignments to `schema:` and `gs1:`,
* it is *not* required to be copied verbatim into every instance document.

---

## 3. Recommended context for instance data

For **your own Brando instance data** (Brand Knowledge Graphs), you almost always only need a **small subset** of that context:

* `schema` – for `schema:Brand`, `schema:name`, and other Schema.org fields.
* `brando` – for Brando classes and properties.
* (Optionally) `gs1` – if you’re using GS1 Web Vocabulary.

### 3.1 Minimal instance context

For most use cases:

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  }
}
```

Example instance document:

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
      "brando:missionStatement": "Financial clarity with absolute trust."
    }
  ]
}
```

### 3.2 With GS1 alignment

If you use `brando:BrandedCategory` with GS1 codes:

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/",
    "gs1": "https://ref.gs1.org/voc/"
  }
}
```

Example:

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/",
    "gs1": "https://ref.gs1.org/voc/"
  },
  "@graph": [
    {
      "@id": "https://example.com/brand/northstar/categories/savings-accounts",
      "@type": "brando:BrandedCategory",
      "brando:productCategoryName": "Savings accounts",
      "brando:gpcCategoryCode": "43191500"
    }
  ]
}
```

---

## 4. Embedding the Brando context in YAML

If you author Brand Knowledge Graphs in YAML (Brando YAML profile), you mirror the same context:

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
```

Your build tooling then:

1. Loads the YAML.
2. Preserves the `@context` mapping.
3. Outputs equivalent JSON-LD.

---

## 5. Using the full vocabulary context vs a slim instance context

You have two broad options when creating instance data:

### Option A – **Slim instance context (recommended)**

Use a **minimal `@context`** with just the prefixes you actually need, e.g.:

```jsonld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.com/"
  }
}
```

Pros:

* human-readable,
* easy to reason about,
* avoids pulling in vocab-specific prefixes (`owl`, `rdfs`, etc.) you never use in instance data.

### Option B – **Re-use the vocab context directly**

You can, if you wish, copy the full vocab `@context` into your instance docs, or host a JSON-LD context file that contains it.

Pros:

* Consistency between vocab and instances.
* Handy if you’re using a lot of RDF-native tooling.

Cons:

* Heavier context than most Brand OS / LLM use cases need.
* Introduces prefixes into instance data that typical runtime code never touches.

**Recommendation:**
For most Brando deployments (Brand OS + LLMs + APIs), use the **slim instance context** and treat the vocab’s own `@context` as an internal detail of the vocabulary file.

---

## 6. Context, IDs, and graph structure

Regardless of the context you use, a few rules matter for interoperability:

1. **Use stable `@id` URIs**

   * Treat `@id` as the **canonical identifier** for each:

     * `brando:Brand`
     * `brando:Context`
     * token, policy, category, campaign, automation rule.
   * Keep them stable across deployments and environments where possible.

2. **Use `@graph` for multi-node documents**

   * A Brand Knowledge Graph is typically represented as a JSON-LD document with:

     * a single `@context`,
     * a single `@graph` containing multiple nodes.

3. **Use the same prefixes consistently**

   * Always map `schema` to `https://schema.org/`.
   * Always map `brando` to `https://brandoschema.com/`.
   * If you need GS1, always map `gs1` to `https://ref.gs1.org/voc/`.

Example multi-node document:

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
      "brando:hasContext": {
        "@id": "https://example.com/brand/acme/context/support-chat"
      }
    },
    {
      "@id": "https://example.com/brand/acme/context/support-chat",
      "@type": "brando:Context",
      "brando:audienceSegment": [
        "Existing customers seeking product support"
      ]
    }
  ]
}
```

---

## 7. Relation to the vocabulary JSON-LD file

The vocabulary file (`brandoVoc_v1.3.jsonld`):

* is itself a **JSON-LD document** with:

  * the vocabulary `@context` (prefixes, including `brando`),
  * an `@graph` of:

    * classes (`owl:Class`),
    * properties (`owl:ObjectProperty`, `owl:DatatypeProperty`),
    * metadata (title, description, license, version info).

Your instance data:

* **imports the semantics**, not the whole file:

  * you don’t embed the vocab’s `@graph`,
  * you just **use** the IRIs it defines under the `brando` namespace.

In other words:

* The vocab file is the **schema**.
* Your Brand Knowledge Graph is the **data**, using the same context prefixes.

---

## 8. Summary

* Brando’s namespace is **`https://brandoschema.com/`** with prefix `brando`.
* The vocabulary has its own rich `@context` for RDF/OWL metadata and alignments.
* **For instance data**, use a **slim context** with at least:

    * `schema: "https://schema.org/"`
    * `brando: "https://brandoschema.com/"`
    * (optionally `gs1` if you need GS1 alignment).
* Keep `@id` URIs stable and group nodes under `@graph`.

For next steps:

* [YAML schema profile](yaml-profile.md) – how this context appears in YAML.
* [TypeScript model](typescript-model.md) – how JSON-LD maps to runtime types.
* [Using Brando](../how-to-use.md) – practical guidance on authoring and integrating Brand Knowledge Graphs.

