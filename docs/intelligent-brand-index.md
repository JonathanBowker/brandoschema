---
title: Intelligent Brand Index (IBI) – AI Readiness Scoring for Brand Websites
description: The Intelligent Brand Index (IBI) is a comprehensive scoring framework that evaluates how well your brand’s website is structured, governed, and optimised for AI systems, LLMs, and accessibility.
keywords:
  - Intelligent Brand Index
  - AI readiness score
  - structured data audit
  - brand metadata
  - AI SEO
  - JSON-LD scoring
  - accessibility audit
  - machine-readable content
  - semantic markup evaluation
  - brand governance schema
author: Advanced Analytica

# Open Graph metadata
og_title: Intelligent Brand Index (IBI) – AI Readiness for Brands
og_description: Score and optimise your brand’s website for AI agents, structured data, accessibility, and LLM visibility. Powered by Brando Schema and Lighthouse.
og_type: website
og_url: https://brandoschema.com/optimisation-workshop
og_image: https://brandoschema.com/assets/logos/0.5x/Brando_9@0.5x.png

# Twitter Card metadata
twitter_card: summary_large_image
twitter_title: Intelligent Brand Index (IBI) – Score Your Brand for the AI Web
twitter_description: Discover how AI-ready your website is. IBI combines structured data quality, AI-friendliness, and accessibility into a unified score.
twitter_image: https://brandoschema.com/assets/logos/0.5x/Brando_9@0.5x.png
---


# Intelligent Brand Index (IBI)

The **Intelligent Brand Index (IBI)** is a comprehensive scoring system designed by Advanced Analytica to evaluate how effectively a brand's website communicates with AI systems and large language models (LLMs),search engines, and accessibility tools. It combines structured data quality, discoverability, AI-readiness, and accessibility into a single score out of 100.

The IBI system contains the accessibility scoring component of the IBI, powered by **Lighthouse CLI** and **axe-core**.

---

## Purpose of IBI

As AI-generated answers, voice assistants, and search overviews increasingly depend on machine-readable content, brands must ensure they are discoverable and interpretable by machines. IBI provides a benchmark for:

- **AI discoverability** via structured data (e.g., JSON-LD + Schema.org)
- **Governance and crawlability** (robots.txt, sitemaps, AI guidance files)
- **AI-readiness** (semantic markup, content freshness, media accessibility)
- **Accessibility** based on WCAG 2.1 AA conformance

---

## IBI Scoring Framework

The full IBI score is composed of four main categories:

| Category                        | Max Points |
|--------------------------------|------------|
| A. Structured-Data Quality     | 50         |
| B. Discoverability & Governance| 30         |
| C. AI-Friendliness & Media     | 20         |
| D. Accessibility (WCAG 2.1 AA) | 15         |
| **Total Raw Points**           | **115**    |

The final score is normalised to a 0–100 scale.

---

## Expanded IBI Scoring Categories**

The IBI evaluates a website’s machine-readability and digital governance using a multi-dimensional score. It ensures your site is **visually appealing**, **machine-readable** and **LLM-interpretable**.

---

### A. Structured Data Quality

**Definition:**
Measures the presence, accuracy, and coverage of semantic metadata embedded on the site using formats like `JSON-LD`, `Microdata`, or `RDFa`, following `Schema.org` vocabularies.

**Why It Matters:**
AI systems (including Google, ChatGPT, and voice assistants) increasingly depend on structured data to understand entities, products, events, and questions and asnwers (QAs). Well-formed data increases search visibility and enables features like rich snippets and knowledge graph inclusion.

**Scoring Components:**

| Sub-Metric                           | Description                                                                     | Pts |
| ------------------------------------ | ------------------------------------------------------------------------------- | --- |
| A-1. Schema.org Type Coverage        | Presence of types like `Organization`, `Brand`, `Product`, `Event`, `FAQ`, etc.          | 15  |
| A-2. Field Completeness              | Degree to which required/recommended fields are populated (e.g., `name`, `url`) | 10  |
| A-3. Nested Entities & Relationships | Use of nested schema (e.g., `Product` has `Brand`, `Offer`, `Review`)           | 10  |
| A-4. JSON-LD Syntax Validity         | Checks for valid, parseable JSON-LD syntax                                      | 5   |
| A-5. Duplicate / Conflicting Markup  | Penalizes repeated or contradictory structured data entries                     | 5   |
| A-6. Use of Custom Extensions        | Bonus for custom vocab extensions where applicable                              | 5   |

---

### B. Discoverability & Governance

**Definition:**
Audits whether a site is technically configured for bots and agents to discover, crawl, and interpret the content — while also supporting newer AI agents and systems.

**Why It Matters:**
Good governance helps ensure that crawlers (from search engines to AI scrapers) can properly index and access your content — improving visibility in SERPs, chat and voice search.

**Scoring Components:**

| Sub-Metric                     | Description                                                                   | Pts |
| ------------------------------ | ----------------------------------------------------------------------------- | --- |
| B-1. Valid `robots.txt` file   | Should exist, be reachable, and contain appropriate disallow/allow directives | 5   |
| B-2. Sitemap Presence          | `sitemap.xml` is present and submitted                                        | 5   |
| B-3. AI Guidance (`ai.txt`)    | Support for `ai.txt` or `llms.txt` to guide AI agents (e.g., OpenAI, Anthropic)             | 5   |
| B-4. Canonical Tag Usage       | Correct canonical tag on pages to prevent duplicate content confusion         | 5   |
| B-5. Page Indexability         | Page should not be `noindex` unless intended                                  | 5   |
| B-6. Crawl Budget Optimization | Avoid excessive redirects or dead links                                       | 5   |

---

### C. AI-Friendliness & Media Semantics

**Definition:**
Evaluates how machine-readable your content is, especially rich media like images, video, and interactive widgets.

**Why It Matters:**
AI systems like GPT-4, Gemini, and Perplexity attempt to interpret content across modalities. Media needs metadata, captions, and context to be useful to machine reasoning.

**Scoring Components:**

| Sub-Metric                                  | Description                                                              | Pts |
| ------------------------------------------- | ------------------------------------------------------------------------ | --- |
| C-1. Descriptive Alt Text                   | Contextually accurate `alt` attributes on visual content                 | 5   |
| C-2. Video Metadata & Captions              | Titles, transcripts, and subtitles present (especially for hero content) | 5   |
| C-3. Headless & Semantically Tagged Content | Uses `<article>`, `<section>`, `<main>`, etc. to define intent           | 5   |
| C-4. Freshness & Update Signals             | `lastModified`, updated timestamps, or freshness indicators for content  | 5   |

---

### D. Accessibility

> \[Already well defined in your original message — retained with slight expansion below]

**Definition:**
Assesses the ability of people with impairments (e.g., vision impairment, limited mobility) to navigate and consume the content, per [WCAG 2.1 AA](https://www.w3.org/WAI/WCAG21/quickref/).

**Why It Matters:**
Accessibility is not just ethical and often legally required — it improves semantic clarity and boosts SEO/AI-readability for all users and agents.

**Scoring Components:**

| ID  | Metric                                | Description                                              | Max Points |
| --- | ------------------------------------- | -------------------------------------------------------- | ---------- |
| D-1 | Alt text on images                    | All meaningful images have non-empty alt attributes      | 3          |
| D-2 | Semantic heading order                | Headings follow logical `h1 > h2 > h3` structure         | 2          |
| D-3 | Colour contrast (4.5:1 or better)      | Meets WCAG contrast standards for legibility             | 3          |
| D-4 | Keyboard navigation                   | All interactive elements are accessible without a mouse  | 2          |
| D-5 | ARIA landmarks and skip links         | Uses roles like `main`, `navigation`, `complementary`    | 2          |
| D-6 | Critical accessibility violations < 5 | Lighthouse/axe-core reports fewer than 5 critical issues | 3          |

---

### Final Score Computation

* Each raw category is summed (max 115 pts).
* Then normalised to a **score out of 100**:

  ```python
  ibi_score = round((raw_score / 115) * 100, 1)
  ```



----

## How It Works

### 1. Run Lighthouse

```bash
python ibi_accessibility_scoring.py https://example.com output_dir/
```

This uses Lighthouse CLI (Node.js required) to generate a JSON report and extract accessibility data.

### 2. Extract Metrics

The script parses Lighthouse's audits and evaluates the presence and quality of WCAG-relevant elements.

### 3. Score Calculation

Each sub-metric is weighted according to the IBI framework and produces a total score out of 15.

---

## Dependencies

- Node.js with Lighthouse CLI (`npm i -g lighthouse`)
- Python 3.8+
- Chrome installed and available to CLI

---

## Output Example

```bash
Accessibility Sub-Metrics:
  D1_alt_text: true
  D2_headings_order: true
  D3_contrast: false
  D4_keyboard_nav: true
  D5_landmarks: true
  D6_critical_violations: true

Total Accessibility Score: 13 / 15
```

---

## Notes

- This module evaluates **accessibility only**. For the full IBI score (structured data, governance, and AI-friendliness), integrate this into the broader pipeline.
- Only public URLs are supported unless Lighthouse is run with custom Chrome sessions.


