---
title: Quickstart – Markdown
description: How to author the Markdown body in the Brando Schema triad.
---

# Quickstart: Markdown body

In the Brando Schema triad, the Markdown body is the authored document.

It should contain the human-readable content that an editor, reviewer, or partner would actually work on. It should not contain YAML frontmatter and it should not duplicate the JSON sidecar syntax.

## What belongs in the Markdown body

Use standard Markdown for:

- the document title
- section headings
- paragraphs
- bullet lists
- short reference links

For document entity examples in this site, the Markdown body usually includes sections such as:

- `Summary`
- `Properties`
- `Relationships`
- `Controls`
- `References`

## What does not belong in the Markdown body

Do not put these in the Markdown tab:

- YAML frontmatter
- raw JSON
- schema prefixes or context blocks

## Example shape

```md
# ABC Example Inc workflow automation market review 2026

## Summary

This report summarises the workflow automation category language, competitor framing, and market shifts relevant to ABC Example Inc.

## Properties

- **Brand:** ABC Example Inc
- **Data source:** Analyst desk research and approved internal notes
- **Review workflow:** Strategy lead review, legal review, brand review

## Relationships

- **Applies to product:** ABC Flow Pilot
- **Effective during:** 2026 planning cycle

## Controls

- **Required:** Cite approved market sources only
- **Reviewed:** Quarterly by strategy and legal

## References

- ABC Example Inc category notes
- Approved benchmark examples
- Source documents and evidence records
```
