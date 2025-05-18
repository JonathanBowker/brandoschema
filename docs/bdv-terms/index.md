---
title: Brando Vocabulary – Brand Identity Schema Terms for AI Brand Modelling
description: Explore the Brando Schema's verbal, visual, audio, and governance identity properties — tone of voice, writing style, prompt scaffolds, positioning statements, and compliance metadata — purpose-built for AI brand alignment and LLM compliance.
keywords:
  - Brando schema
  - brand identity metadata
  - tone of voice schema
  - AI brand modelling
  - brand governance vocabulary
  - prompt scaffolds
  - semantic brand data
  - structured data for LLMs
  - verbal and visual identity schema
  - Brando ontology

author: Advanced Analytica

# Open Graph metadata
og_title: Brando Vocabulary – Brand Identity Metadata for AI Systems
og_description: Discover the Brando Schema — a full vocabulary for defining verbal, visual, and governance identity in AI models, intelligent agents, and branded LLM outputs.
og_type: website
og_url: https://brandoschema.com/bdv-terms
og_image: https://brandoschema.com/assets/logos/0.5x/Brando_9@0.5x.png

# Twitter Card metadata
twitter_card: summary_large_image
twitter_title: Brando Brand Metadata – Schema Terms for AI Identity Modelling
twitter_description: Explore structured metadata for brand tone, dialogue style, compliance cues, and multimodal brand presence — designed for LLM readiness and AI semantic integrity.
twitter_image: https://brandoschema.com/assets/logos/0.5x/Brando_9@0.5x.png
---

# Brando Vocabulary Terms

## Schema Term Field Reference

This table explains the meaning of each field label used in the Brando Schema vocabulary. It serves as a quick reference for understanding how each field contributes to the definition, structure, and usage of individual schema terms.

### Field Labels {#fieldLabels}

| **Label** | **Description** |
|----------|-----------------|
| **Ref** | Unique reference number within the schema (e.g. section.term) |
| **Term** | The programmatic name of the term |
| **Prefix** | The namespace prefix used (e.g., `brando`) |
| **Label** | Human-readable label for display or navigation |
| **IRI** | Full Internationalized Resource Identifier for the term |
| **Programmatic Key** | Dot-notated system key for code-based integration or UI scaffolds |
| **Type** | RDF/OWL classification (`rdfs:Property`, `skos:Concept`, etc.) |
| **Domain** | The class this property belongs to |
| **Range** | Expected value type, data type, or object class |
| **Parent** | The immediate superclass or broader concept that this term belongs to |
| **Object of Relation** | The inverse property or related predicate through which this term is linked to a subject |
| **Definition** | Concise semantic definition of the term |
| **Usage Note** | Practical guidance on how to apply this property |
| **Example** | A real-world example value for clarity and illustration |
| **Date Created** | Date the term was defined or introduced |
| **Contributors** | Organisation(s) or individual(s) responsible for defining the term |
| **See Also** | Related or adjacent terms in the schema |
| **Equivalent Schema.org Term** | Mapping if this term matches one from schema.org (or "None (custom)") |


---

### DataTypes {#rangeDataTypes}

| **DataType**        | **Hierarchy Type** | **Description**                                          |
| ------------------- | ------------------ | -------------------------------------------------------- |
| **DataType**          | Root (open)        | Base type for all value types used in BrandoSchema       |
| **Boolean**           | Closed             | Logical binary value: `True` or `False`                  |
| **True**              | Literal            | Boolean subtype: literal `true`                          |
| **False**             | Literal            | Boolean subtype: literal `false`                         |
| **Date**              | Open               | A calendar date (e.g. `18-05-2025`, `2025-05-18`). Subtype: `DateTime` |
| **DateTime**          | Open               | Full timestamp (e.g. `18-05-2025T14:30:00Z`)             |
| **Time**              | Open               | Time value without date (e.g. `14:30:00`)                |
| **Number**            | Closed             | A numeric value. Subtypes: `Integer`, `Float`            |
| **Integer**           | Closed             | Whole number (e.g. `5`, `100`)                           |
| **Float**             | Closed             | Decimal number (e.g. `3.14`, `0.75`)                     |
| **Text**              | Open               | Any string or unstructured text. Subtypes below ↓        |
| **PronounceableText** | Open               | Text optimised for voice assistants or screen readers    |
| **URL**               | Open               | A web address (e.g. `https://example.com`)               |
| **CssSelectorType**   | Open               | A CSS selector string for targeting HTML elements        |
| **XPathType**         | Open               | An XPath string for locating elements in HTML/XML trees  |

---

**Range Interpretation Notes {#rangeInterpretation}**

* **"Closed"** = limited to predefined subtypes or values.
* **"Open"** = extensible, supports free-form values or custom-defined subtypes.
* All subtypes inherit from `DataType` and may be used in BrandoSchema `range` fields.

---

## 1.1 - Verbal Identity

### Tone of Voice {#toneOfVoice}

| **KEY**                        | **VALUE**                                                                        |
| :----------------------------- | :------------------------------------------------------------------------------- |
| **Ref**                        | **1.1.1**                                                                        |
| **Term**                       | *`toneOfVoice`*                                                                  |
| **Prefix**                     | *`brando`*                                                                       |
| **Label**                      | *Tone of Voice*                                                                  |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#toneOfVoice`*                              |
| **Programmatic Key**           | *`verbal_identity.tone_of_voice`*                                                |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                |
| **Domain**                     | *`brando:VerbalIdentity`*                                                        |
| **Range**                      | *`PronounceableText`*                                                            |
| **Parent**                     | *`brando:VerbalIdentity → brando:Brand`*                                         |
| **Object of Relation**         | *`brando:hasVerbalIdentity`*                                                     |
| **Definition**                 | *Emotional texture of brand voice.*                                              |
| **Usage Note**                 | *Guides the tone and mood used in all brand communications.*                     |
| **Example**                    | *"Warm and reassuring, like a trusted friend. Calm, confident, and empathetic."* |
| **Date Created**               | *20-04-2025*                                                                     |
| **Contributors**               | *Jonny Bowker*                                                         |
| **See Also**                   | *`brando:dialogueStyle`, `brando:writingStyle`*                                  |
| **Equivalent Schema.org Term** | *None (custom)*                                                                  |

---

### Dialogue Style {#dialogueStyle}

| **KEY**                        | **VALUE**                                                                                      |
| :----------------------------- | :--------------------------------------------------------------------------------------------- |
| **Ref**                        | **1.1.2**                                                                                      |
| **Term**                       | *`dialogueStyle`*                                                                              |
| **Prefix**                     | *`brando`*                                                                                     |
| **Label**                      | *Dialogue Style*                                                                               |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#dialogueStyle`*                                          |
| **Programmatic Key**           | *`verbal_identity.dialogue_style`*                                                             |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                              |
| **Domain**                     | *`brando:VerbalIdentity`*                                                                      |
| **Range**                      | *`Text`*                                                                                       |
| **Parent**                     | *`brando:VerbalIdentity → brando:Brand`*                                                       |
| **Object of Relation**         | *`brando:hasVerbalIdentity`*                                                                   |
| **Definition**                 | *Conversational pacing and pronoun guidance.*                                                  |
| **Usage Note**                 | *Specifies whether to use first/second/third person, how formal to be, and dialogue patterns.* |
| **Example**                    | *"Uses second-person ('you') for direct engagement. Conversational but respectful."*           |
| **Date Created**               | *20-04-2025*                                                                                   |
| **Contributors**               | *Jonny Bowker*                                                                       |
| **See Also**                   | *`brando:toneOfVoice`, `brando:writingStyle`*                                                  |
| **Equivalent Schema.org Term** | *None (custom)*                                                                                |

---

### Writing Style {#writingStyle}

| **KEY**                        | **VALUE**                                                                                               |
| :----------------------------- | :------------------------------------------------------------------------------------------------------ |
| **Ref**                        | **1.1.3**                                                                                               |
| **Term**                       | *`writingStyle`*                                                                                        |
| **Prefix**                     | *`brando`*                                                                                              |
| **Label**                      | *Writing Style*                                                                                         |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#writingStyle`*                                                    |
| **Programmatic Key**           | *`verbal_identity.writing_style`*                                                                       |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                                       |
| **Domain**                     | *`brando:VerbalIdentity`*                                                                               |
| **Range**                      | *`Text`*                                                                                                |
| **Parent**                     | *`brando:VerbalIdentity → brando:Brand`*                                                                |
| **Object of Relation**         | *`brando:hasVerbalIdentity`*                                                                            |
| **Definition**                 | *Grammar, clarity, structure preferences.*                                                              |
| **Usage Note**                 | *Helps control the structure and formatting of written content.*                                        |
| **Example**                    | *"Short, clear sentences. Prefers active voice and logical structure with bullet points when listing."* |
| **Date Created**               | *20-04-2025*                                                                                            |
| **Contributors**               | *Jonny Bowker*                                                                                |
| **See Also**                   | *`brando:toneOfVoice`, `brando:dialogueStyle`*                                                          |
| **Equivalent Schema.org Term** | *None (custom)*                                                                                         |

---

### Naming Convention {#namingConvention}

| **KEY**                        | **VALUE**                                                                                  |
| :----------------------------- | :----------------------------------------------------------------------------------------- |
| **Ref**                        | **1.1.4**                                                                                  |
| **Term**                       | *`namingConvention`*                                                                       |
| **Prefix**                     | *`brando`*                                                                                 |
| **Label**                      | *Naming Convention*                                                                        |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#namingConvention`*                                   |
| **Programmatic Key**           | *`verbal_identity.naming_convention`*                                                      |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                          |
| **Domain**                     | *`brando:VerbalIdentity`*                                                                  |
| **Range**                      | *`Text`*                                                                                   |
| **Parent**                     | *`brando:VerbalIdentity → brando:Brand`*                                                   |
| **Object of Relation**         | *`brando:hasVerbalIdentity`*                                                               |
| **Definition**                 | *Rules for product names, formatting, date/time expressions.*                              |
| **Usage Note**                 | *Ensures consistent, brand-aligned naming and terminology.*                                |
| **Example**                    | *"Use Title Case for Product Names, ISO format for dates (YYYY-MM-DD), and 24-hour time."* |
| **Date Created**               | *20-04-2025*                                                                               |
| **Contributors**               | *Jonny Bowker*                                                                   |
| **See Also**                   | *`brando:writingStyle`, `brando:approvedTerms`*                                            |
| **Equivalent Schema.org Term** | *None (custom)*                                                                            |

---

### Persona Card {#personaCard}

| **KEY**                        | **VALUE**                                                                          |
| :----------------------------- | :--------------------------------------------------------------------------------- |
| **Ref**                        | **1.1.5**                                                                          |
| **Term**                       | *`personaCard`*                                                                    |
| **Prefix**                     | *`brando`*                                                                         |
| **Label**                      | *Persona Card*                                                                     |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#personaCard`*                                |
| **Programmatic Key**           | *`verbal_identity.persona_card`*                                                   |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                  |
| **Domain**                     | *`brando:VerbalIdentity`*                                                          |
| **Range**                      | *`Text`*                                                                           |
| **Parent**                     | *`brando:VerbalIdentity → brando:Brand`*                                           |
| **Object of Relation**         | *`brando:hasVerbalIdentity`*                                                       |
| **Definition**                 | *Humanised voice traits such as attitude, tone, and behavioural style.*            |
| **Usage Note**                 | *Used for prompt and voice modelling in LLMs.*                                     |
| **Example**                    | *"Alex is a helpful, upbeat expert with a sense of humour and a reassuring tone."* |
| **Date Created**               | *20-04-2025*                                                                       |
| **Contributors**               | *Jonny Bowker*                                                           |
| **See Also**                   | *`brando:toneOfVoice`, `brando:dialogueStyle`*                                     |
| **Equivalent Schema.org Term** | *None (custom)*                                                                    |

---

### Approved Terms {#approvedTerms}

| **KEY**                        | **VALUE**                                                  |
| :----------------------------- | :--------------------------------------------------------- |
| **Ref**                        | **1.1.6**                                                  |
| **Term**                       | *`approvedTerms`*                                          |
| **Prefix**                     | *`brando`*                                                 |
| **Label**                      | *Approved Terms*                                           |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#approvedTerms`*      |
| **Programmatic Key**           | *`verbal_identity.approved_terms`*                         |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                          |
| **Domain**                     | *`brando:VerbalIdentity`*                                  |
| **Range**                      | *`rdf:List of Text`*                                       |
| **Parent**                     | *`brando:VerbalIdentity → brando:Brand`*                   |
| **Object of Relation**         | *`brando:hasVerbalIdentity`*                               |
| **Definition**                 | *Vocabulary the brand prefers or requires in content.*     |
| **Usage Note**                 | *Ensures semantic consistency in communications.*          |
| **Example**                    | *\["sustainable", "cutting-edge", "customer-first"]*       |
| **Date Created**               | *20-04-2025*                                               |
| **Contributors**               | *Jonny Bowker*                                   |
| **See Also**                   | *`brando:prohibitedTerms`, `brando:vocabularyConstraints`* |
| **Equivalent Schema.org Term** | *None (custom)*                                            |

---

### Prohibited Terms {#prohibitedTerms}

| **KEY**    | **VALUE**           |
| :--------- | :------------------ |
| **Ref**    | **1.1.7**           |
| **Term**   | *`prohibitedTerms`* |
| **Prefix** | *`brando`*          |
| **Label**  | \*Prohibited        |


Terms\*                                        |
\| **IRI**                        | *`https://brandoschema.com/bdv-terms/#prohibitedTerms`*   |
\| **Programmatic Key**           | *`verbal_identity.prohibited_terms`*                      |
\| **Type**                       | *`rdfs:Property`, `skos:Concept`*                         |
\| **Domain**                     | *`brando:VerbalIdentity`*                                 |
\| **Range**                      | *`rdf:List of Text`*                                      |
\| **Parent**                     | *`brando:VerbalIdentity → brando:Brand`*                  |
\| **Object of Relation**         | *`brando:hasVerbalIdentity`*                              |
\| **Definition**                 | *Terms and phrases explicitly disallowed in brand voice.* |
\| **Usage Note**                 | *Helps avoid misalignment and unapproved expressions.*    |
\| **Example**                    | *\["cheap", "freebie", "guarantee"]*                      |
\| **Date Created**               | *20-04-2025*                                              |
\| **Contributors**               | *Jonny Bowker*                                  |
\| **See Also**                   | *`brando:approvedTerms`, `brando:vocabularyConstraints`*  |
\| **Equivalent Schema.org Term** | *None (custom)*                                           |

---

### Key Messages {#keyMessages}

| **KEY**                        | **VALUE**                                                                                |
| :----------------------------- | :--------------------------------------------------------------------------------------- |
| **Ref**                        | **1.1.8**                                                                                |
| **Term**                       | *`keyMessages`*                                                                          |
| **Prefix**                     | *`brando`*                                                                               |
| **Label**                      | *Key Messages*                                                                           |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#keyMessages`*                                      |
| **Programmatic Key**           | *`verbal_identity.key_messages`*                                                         |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                        |
| **Domain**                     | *`brando:VerbalIdentity`*                                                                |
| **Range**                      | *`Text`*                                                                                 |
| **Parent**                     | *`brando:VerbalIdentity → brando:Brand`*                                                 |
| **Object of Relation**         | *`brando:hasVerbalIdentity`*                                                             |
| **Definition**                 | *Core ideas and value propositions communicated consistently across all brand channels.* |
| **Usage Note**                 | *Used to train AI on foundational brand narratives.*                                     |
| **Example**                    | *"We simplify complex systems so you can focus on what matters."*                        |
| **Date Created**               | *20-04-2025*                                                                             |
| **Contributors**               | *Jonny Bowker*                                                                 |
| **See Also**                   | *`brando:taglines`, `brando:promptScaffold`*                                             |
| **Equivalent Schema.org Term** | *None (custom)*                                                                          |

---

### Tagline {#tagline}

| **KEY**                        | **VALUE**                                                                                                                                                   |
| :----------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Ref**                        | **1.1.9**                                                                                                                                                   |
| **Term**                       | *`tagline`*                                                                                                                                                 |
| **Prefix**                     | *`brando`*                                                                                                                                                  |
| **Label**                      | *Tagline*                                                                                                                                                   |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#tagline`*                                                                                                             |
| **Programmatic Key**           | *`verbal_identity.tagline`*                                                                                                                                 |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                                                                                           |
| **Domain**                     | *`brando:VerbalIdentity`*                                                                                                                                   |
| **Range**                      | *`rdf:List of Text`*                                                                                                                                        |
| **Parent**                     | *`brando:VerbalIdentity → brando:Brand`*                                                                                                                    |
| **Object of Relation**         | *`brando:hasVerbalIdentity`*                                                                                                                                |
| **Definition**                 | *The official brand tagline (or strapline) used in primary communications, along with any approved variants, campaign slogans, or situational adaptations.* |
| **Usage Note**                 | *Used across campaigns, metadata, and verbal banners.*                                                                                                      |
| **Example**                    | *\["Smarter by Design", "AI for Humans", "Trust the Data. Trust Us."]*                                                                                      |
| **Date Created**               | *20-04-2025*                                                                                                                                                |
| **Contributors**               | *Jonny Bowker*                                                                                                                                    |
| **See Also**                   | *`brando:keyMessages`, `brando:writingStyle`*                                                                                                               |
| **Equivalent Schema.org Term** | *None (custom)*                                                                                                                                             |

---

### Prompt Scaffold {#promptScaffold}

| **KEY**                        | **VALUE**                                                                                           |
| :----------------------------- | :-------------------------------------------------------------------------------------------------- |
| **Ref**                        | **1.1.10**                                                                                          |
| **Term**                       | *`promptScaffold`*                                                                                  |
| **Prefix**                     | *`brando`*                                                                                          |
| **Label**                      | *Prompt Scaffold*                                                                                   |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#promptScaffold`*                                              |
| **Programmatic Key**           | *`verbal_identity.prompt_scaffold`*                                                                 |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                                   |
| **Domain**                     | *`brando:VerbalIdentity`*                                                                           |
| **Range**                      | *`Text`*                                                                                            |
| **Parent**                     | *`brando:VerbalIdentity → brando:Brand`*                                                            |
| **Object of Relation**         | *`brando:hasVerbalIdentity`*                                                                        |
| **Definition**                 | *Reusable instructions and templates for AI model prompts (e.g., tone and format enforcement).*     |
| **Usage Note**                 | *Promotes consistency, compliance, and tone alignment in automated outputs.*                        |
| **Example**                    | *"Respond using a confident, plainspoken tone. Always begin with a positive framing of the topic."* |
| **Date Created**               | *20-04-2025*                                                                                        |
| **Contributors**               | *Jonny Bowker*                                                                            |
| **See Also**                   | *`brando:keyMessages`, `brando:mustDo`*                                                             |
| **Equivalent Schema.org Term** | *None (custom)*                                                                                     |

---

### Must Dos {#mustDos}

| **KEY**                        | **VALUE**                                                                                        |
| :----------------------------- | :----------------------------------------------------------------------------------------------- |
| **Ref**                        | **1.1.11**                                                                                       |
| **Term**                       | *`mustDos`*                                                                                      |
| **Prefix**                     | *`brando`*                                                                                       |
| **Label**                      | *Must Dos*                                                                                       |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#mustDos`*                                                  |
| **Programmatic Key**           | *`verbal_identity.must_dos`*                                                                     |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                                |
| **Domain**                     | *`brando:VerbalIdentity`*                                                                        |
| **Range**                      | *`Text`*                                                                                         |
| **Parent**                     | *`brando:VerbalIdentity → brando:Brand`*                                                         |
| **Object of Relation**         | *`brando:hasVerbalIdentity`*                                                                     |
| **Definition**                 | *Required actions and stylistic behaviours.*                                                     |
| **Usage Note**                 | *Guides LLMs and copywriters to mandatory tone or content inclusions.*                           |
| **Example**                    | *"Always cite clinical evidence when referring to product claims. Use active voice throughout."* |
| **Date Created**               | *20-04-2025*                                                                                     |
| **Contributors**               | *Jonny Bowker*                                                                         |
| **See Also**                   | *`brando:mustNotDos`, `brando:promptScaffold`*                                                   |
| **Equivalent Schema.org Term** | *None (custom)*                                                                                  |

---

### Must Not Dos {#mustNotDos}

| **KEY**                        | **VALUE**                                                                                   |
| :----------------------------- | :------------------------------------------------------------------------------------------ |
| **Ref**                        | **1.1.12**                                                                                  |
| **Term**                       | *`mustNotDos`*                                                                              |
| **Prefix**                     | *`brando`*                                                                                  |
| **Label**                      | *Must Not Dos*                                                                              |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#mustNotDos`*                                          |
| **Programmatic Key**           | *`verbal_identity.must_not_dos`*                                                            |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                           |
| **Domain**                     | *`brando:VerbalIdentity`*                                                                   |
| **Range**                      | *`Text`*                                                                                    |
| **Parent**                     | *`brando:VerbalIdentity → brando:Brand`*                                                    |
| **Object of Relation**         | *`brando:hasVerbalIdentity`*                                                                |
| **Definition**                 | *Explicit behavioural constraints.*                                                         |
| **Usage Note**                 | *Instructs AI models and authors on what to avoid stylistically or semantically.*           |
| **Example**                    | *"Never use sarcasm. Do not refer to competitors by name. Avoid idioms or regional slang."* |
| **Date Created**               | *20-04-2025*                                                                                |
| **Contributors**               | *Jonny Bowker*                                                                    |
| **See Also**                   | *`brando:mustDos`, `brando:guardRails`*                                                     |
| **Equivalent Schema.org Term** | *None (custom)*                                                                             |

---

## 1.2 - Visual Identity

### Brand Name {#brandName}

| **KEY**                        | **VALUE**                                                                                          |
| :----------------------------- | :------------------------------------------------------------------------------------------------- |
| **Ref**                        | **1.2.1**                                                                                          |
| **Term**                       | *`brandName`*                                                                                      |
| **Prefix**                     | *`brando`*                                                                                         |
| **Label**                      | *Brand Name*                                                                                       |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#name`*                                                       |
| **Programmatic Key**           | *`visual_identity.brand_name`*                                                                     |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                                  |
| **Domain**                     | *`brando:VisualIdentity`*                                                                          |
| **Range**                      | *`Text`*                                                                                           |
| **Parent**                     | *`brando:VisualIdentity → brando:Brand`*                                                           |
| **Object of Relation**         | *`brando:hasVisualIdentity`*                                                                       |
| **Definition**                 | *The official name of the brand used for identification in visual and generative AI systems.*      |
| **Usage Note**                 | *Must appear consistently across all branded output, visual templates, and AI-generated material.* |
| **Example**                    | *"Advanced Analytica"*                                                                             |
| **Date Created**               | *11-04-2025*                                                                                       |
| **Contributors**               | *Jonny Bowker*                                                                           |
| **See Also**                   | *`brando:logo`, `brando:tagline`, `brando:visualStyle`*                                            |
| **Equivalent Schema.org Term** | *`schema:name`*                                                                                    |

---

### Logo {#Logo}

| **KEY**                        | **VALUE**                                                                                                |
| :----------------------------- | :------------------------------------------------------------------------------------------------------- |
| **Ref**                        | **1.2.2**                                                                                                |
| **Term**                       | *`logo`*                                                                                                 |
| **Prefix**                     | *`brando`*                                                                                               |
| **Label**                      | *Logo*                                                                                                   |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#logo`*                                                             |
| **Programmatic Key**           | *`visual_identity.logo`*                                                                                 |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                                        |
| **Domain**                     | *`brando:VisualIdentity`*                                                                                |
| **Range**                      | *`URL`*                                                                                                  |
| **Parent**                     | *`brando:VisualIdentity → brando:Brand`*                                                                 |
| **Object of Relation**         | *`brando:hasVisualIdentity`*                                                                             |
| **Definition**                 | *A URI pointing to primary, alternate, mono, or responsive versions of the brand logo.*                  |
| **Usage Note**                 | *Logos must be retrievable and aligned to branding guidelines for use by AI agents.*                     |
| **Example**                    | *"[https://brandoschema.com/assets/logo-primary.svg](https://brandoschema.com/assets/logo-primary.svg)"* |
| **Date Created**               | *13-04-2025*                                                                                             |
| **Contributors**               | *Jonny Bowker*                                                                                 |
| **See Also**                   | *`brando:name`, `brando:tagline`, `brando:visualStyle`*                                                  |
| **Equivalent Schema.org Term** | *`schema:logo`*                                                                                          |

---

### Colour Palette {#colourPalette}

| **KEY**                        | **VALUE**                                                                                 |
| :----------------------------- | :---------------------------------------------------------------------------------------- |
| **Ref**                        | **1.2.3**                                                                                 |
| **Term**                       | *`colourPalette`*                                                                         |
| **Prefix**                     | *`brando`*                                                                                |
| **Label**                      | *Colour Palette*                                                                          |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#colourPalette`*                                     |
| **Programmatic Key**           | *`visual_identity.colour_palette`*                                                        |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                         |
| **Domain**                     | *`brando:VisualIdentity`*                                                                 |
| **Range**                      | *`Text`*                                                                                  |
| **Parent**                     | *`brando:VisualIdentity → brando:Brand`*                                                  |
| **Object of Relation**         | *`brando:hasVisualIdentity`*                                                              |
| **Definition**                 | *Codified brand colour definitions including hex codes, usage notes, and contrast pairs.* |
| **Usage Note**                 | *Should be machine-readable and used consistently for styling across branded content.*    |
| **Example**                    | *"Primary: #003366, Accent: #FF9900, Neutral: #F5F5F5, CTA: #00B28F"*                     |
| **Date Created**               | *13-04-2025*                                                                              |
| **Contributors**               | *Jonny Bowker*                                                                  |
| **See Also**                   | *`brando:typography`, `brando:visualStyle`*                                               |
| **Equivalent Schema.org Term** | *None (custom term)*                                                                      |

---

### Typography {#typography}

| **KEY**                        | **VALUE**                                                                                      |
| :----------------------------- | :--------------------------------------------------------------------------------------------- |
| **Ref**                        | **1.2.4**                                                                                      |
| **Term**                       | *`typography`*                                                                                 |
| **Prefix**                     | *`brando`*                                                                                     |
| **Label**                      | *Typography*                                                                                   |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#typography`*                                             |
| **Programmatic Key**           | *`visual_identity.typography`*                                                                 |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                              |
| **Domain**                     | *`brando:VisualIdentity`*                                                                      |
| **Range**                      | *`Text`*                                                                                       |
| **Parent**                     | *`brando:VisualIdentity → brando:Brand`*                                                       |
| **Object of Relation**         | *`brando:hasVisualIdentity`*                                                                   |
| **Definition**                 | *Font families, weights, sizing rules, and typographic principles used across brand media.*    |
| **Usage Note**                 | *Should be specified using CSS font stack syntax or typography token names.*                   |
| **Example**                    | *"Heading: Helvetica Neue Bold 32px, Body: Helvetica Neue Regular 18px, UI: Roboto Mono 14px"* |
| **Date Created**               | *13-04-2025*                                                                                   |
| **Contributors**               | *Jonny Bowker*                                                                       |
| **See Also**                   | *`brando:colourPalette`, `brando:visualStyle`*                                                 |
| **Equivalent Schema.org Term** | *None (custom term)*                                                                           |

---

### Imagery Styles {#imageryStyles}

| **KEY**                        | **VALUE**                                                                                                                                             |
| :----------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Ref**                        | **1.2.5**                                                                                                                                             |
| **Term**                       | *`imageryStyles`*                                                                                                                                     |
| **Prefix**                     | *`brando`*                                                                                                                                            |
| **Label**                      | *Imagery Styles*                                                                                                                                      |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#imageryStyles`*                                                                                                 |
| **Programmatic Key**           | *`visual_identity.imagery_styles`*                                                                                                                    |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                                                                                     |
| **Domain**                     | *`brando:VisualIdentity`*                                                                                                                             |
| **Range**                      | *`Text`*                                                                                                                                              |
| **Parent**                     | *`brando:VisualIdentity → brando:Brand`*                                                                                                              |
| **Object of Relation**         | *`brando:hasVisualIdentity`*                                                                                                                          |
| **Definition**                 | *Guidelines for image usage including photography, illustration, filters, and framing.*                                                               |
| **Usage Note**                 | *Supports AI image generation and brand asset QA.*                                                                                                    |
| **Example**                    | *"Use editorial-style photos with natural light, minimal props, and a desaturated colour grade. Avoid stock imagery with overly staged expressions."* |
| **Date Created**               | *13-04-2025*                                                                                                                                          |
| **Contributors**               | *Jonny Bowker*                                                                                                                              |
| **See Also**                   | *`brando:typography`, `brando:logo`*                                                                                                                  |
| **Equivalent Schema.org Term** | *None (custom term)*                                                                                                                                  |

---

### Motion Rules {#motionRules}

| **KEY**                        | **VALUE**                                                                                                                            |
| :----------------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| **Ref**                        | **1.2.6**                                                                                                                            |
| **Term**                       | *`motionRules`*                                                                                                                      |
| **Prefix**                     | *`brando`*                                                                                                                           |
| **Label**                      | *Motion Rules*                                                                                                                       |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#motionRules`*                                                                                  |
| **Programmatic Key**           | *`visual_identity.motion_rules`*                                                                                                     |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                                                                    |
| **Domain**                     | *`brando:VisualIdentity`*                                                                                                            |
| **Range**                      | *`Text`*                                                                                                                             |
| **Parent**                     | *`brando:VisualIdentity → brando:Brand`*                                                                                             |
| **Object of Relation**         | *`brando:hasVisualIdentity`*                                                                                                         |
| **Definition**                 | *Timing, easing, and animation principles for brand motion graphics and interactions.*                                               |
| **Usage Note**                 | *Should be implemented in UI and used for motion design consistency.*                                                                |
| **Example**                    | *"All UI animations should use a 250–300ms ease-out transition. Avoid bounce effects. Maintain consistent pacing between elements."* |
| **Date Created**               | *13-04-2025*                                                                                                                         |
| **Contributors**               | *Jonny Bowker*                                                                                                             |
| **See Also**                   | *`brando:visualToken`, `brando:imageryStyle`*                                                                                        |
| **Equivalent Schema.org Term** | *None (custom term)*                                                                                                                 |

---

### Visual Token {#visualToken}

| **KEY**                        | **VALUE**                                                                                            |
| :----------------------------- | :--------------------------------------------------------------------------------------------------- |
| **Ref**                        | **1.2.7**                                                                                            |
| **Term**                       | *`visualToken`*                                                                                      |
| **Prefix**                     | *`brando`*                                                                                           |
| **Label**                      | *Visual Token*                                                                                       |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#visualToken`*                                                  |
| **Programmatic Key**           | *`visual_identity.visual_token`*                                                                     |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                                    |
| **Domain**                     | *`brando:VisualIdentity`*                                                                            |
| **Range**                      | *`Text`*                                                                                             |
| **Parent**                     | *`brando:VisualIdentity → brando:Brand`*                                                             |
| **Object of Relation**         | *`brando:hasVisualIdentity`*                                                                         |
| **Definition**                 | *Design system tokens for spacing, border radius, shadow, and elevation.*                            |
| **Usage Note**                 | *Used to enforce styling consistency and support design automation.*                                 |
| **Example**                    | *"Spacing: 16px base grid, Border radius: 8px, Shadow: elevation-sm (0px 1px 3px rgba(0,0,0,0.12))"* |
| **Date Created**               | *13-04-2025*                                                                                         |
| **Contributors**               | *Jonny Bowker*                                                                             |
| **See Also**                   | *`brando:motionRule`, `brando:colourPalette`*                                                        |
| **Equivalent Schema.org Term** | *None (custom term)*                                                                                 |

---

### Visual Usage Guidelines {#visualUsageGuidelines}

| **KEY**                        | **VALUE**                                                                                                                                   |
| :----------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| **Ref**                        | **1.2.8**                                                                                                                                   |
| **Term**                       | *`visualUsageGuidelines`*                                                                                                                   |
| **Prefix**                     | *`brando`*                                                                                                                                  |
| **Label**                      | *Visual Usage Guidelines*                                                                                                                   |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#visualUsageGuidelines`*                                                                               |
| **Programmatic Key**           | *`visual_identity.usage_guideline`*                                                                                                         |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                                                                           |
| **Domain**                     | *`brando:VisualIdentity`*                                                                                                                   |
| **Range**                      | *`Text`*                                                                                                                                    |
| **Parent**                     | *`brando:VisualIdentity → brando:Brand`*                                                                                                    |
| **Object of Relation**         | *`brando:hasVisualIdentity`*                                                                                                                |
| **Definition**                 | *Do’s and don’ts for using brand elements like logos, colours, and imagery.*                                                                |
| **Usage Note**                 | *Can be used to programmatically validate AI-generated designs.*                                                                            |
| **Example**                    | *"✔ Use logo in full colour on white backgrounds. ✘ Do not place the logo over complex imagery. Maintain at least 20px padding around it."* |
| **Date Created**               | *13-04-2025*                                                                                                                                |
| **Contributors**               | *Jonny Bowker*                                                                                                                    |
| **See Also**                   | *`brando:logo`, `brando:colourPalette`*                                                                                                     |
| **Equivalent Schema.org Term** | *None (custom term)*                                                                                                                        |

---

### Visual Reference Link {#visualReferenceLink}

| **KEY**                        | **VALUE**                                                                                  |
| :----------------------------- | :----------------------------------------------------------------------------------------- |
| **Ref**                        | **1.2.9**                                                                                  |
| **Term**                       | *`visualReferenceLink`*                                                                    |
| **Prefix**                     | *`brando`*                                                                                 |
| **Label**                      | *Visual Reference Link*                                                                    |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#visualReferenceLink`*                                |
| **Programmatic Key**           | *`visual_identity.reference_link`*                                                         |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                          |
| **Domain**                     | *`brando:VisualIdentity`*                                                                  |
| **Range**                      | *`URL`*                                                                                    |
| **Parent**                     | *`brando:VisualIdentity → brando:Brand`*                                                   |
| **Object of Relation**         | *`brando:hasVisualIdentity`*                                                               |
| **Definition**                 | *A hyperlink to full brand guidelines or design repositories.*                             |
| **Usage Note**                 | *Enables API and assistant access to authoritative brand documents.*                       |
| **Example**                    | *"[https://figma.com/team/advanced-analytica](https://figma.com/team/advanced-analytica)"* |
| **Date Created**               | *13-04-2025*                                                                               |
| **Contributors**               | *Jonny Bowker*                                                                   |
| **See Also**                   | *`brando:visualUsageGuideline`, `brando:designSystemLink`*                                 |
| **Equivalent Schema.org Term** | *None (custom term)*                                                                       |

---

Here is the full updated **1.3 - Audio Identity** section with the ranges corrected to use your DataTypes (`URL` for anyURI, `Text` for strings):

---

## 1.3 - Audio Identity

### Audio Logo {#audioLogo}

| **KEY**                        | **VALUE**                                                                                               |
| :----------------------------- | :------------------------------------------------------------------------------------------------------ |
| **Ref**                        | **1.3.1**                                                                                               |
| **Term**                       | *`audioLogo`*                                                                                           |
| **Prefix**                     | *`brando`*                                                                                              |
| **Label**                      | *Audio Logo*                                                                                            |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#audioLogo`*                                                       |
| **Programmatic Key**           | *`audio_identity.audio_logo`*                                                                           |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                                       |
| **Domain**                     | *`brando:AudioIdentity`*                                                                                |
| **Range**                      | *`URL`*                                                                                                 |
| **Parent**                     | *`brando:AudioIdentity → brando:Brand`*                                                                 |
| **Object of Relation**         | *`brando:hasAudioIdentity`*                                                                             |
| **Definition**                 | *A URI or file path to the brand's sonic logo — a distinctive short sound used to represent the brand.* |
| **Usage Note**                 | *Used in voice assistants, smart devices, or digital products to signal the brand.*                     |
| **Example**                    | *`https://assets.brandoschema.com/audio/advanced-analytica-logo.mp3`*                                   |
| **Date Created**               | *21-04-2025*                                                                                            |
| **Contributors**               | *Jonny Bowker*                                                                                |
| **See Also**                   | *`brando:audioCue`, `brando:voiceSignature`*                                                            |
| **Equivalent Schema.org Term** | *None (custom)*                                                                                         |

---

### Voice Signature {#voiceSignature}

| **KEY**                        | **VALUE**                                                                                                  |
| :----------------------------- | :--------------------------------------------------------------------------------------------------------- |
| **Ref**                        | **1.3.2**                                                                                                  |
| **Term**                       | *`voiceSignature`*                                                                                         |
| **Prefix**                     | *`brando`*                                                                                                 |
| **Label**                      | *Voice Signature*                                                                                          |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#voiceSignature`*                                                     |
| **Programmatic Key**           | *`audio_identity.voice_signature`*                                                                         |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                                          |
| **Domain**                     | *`brando:AudioIdentity`*                                                                                   |
| **Range**                      | *`Text`*                                                                                                   |
| **Parent**                     | *`brando:AudioIdentity → brando:Brand`*                                                                    |
| **Object of Relation**         | *`brando:hasAudioIdentity`*                                                                                |
| **Definition**                 | *Defines the voice persona used in text-to-speech or synthetic voice systems (e.g., accent, tone, pitch).* |
| **Usage Note**                 | *Enables consistent auditory representation in voice interfaces.*                                          |
| **Example**                    | *"British male, warm tone, moderate speed, soft intonation."*                                              |
| **Date Created**               | *21-04-2025*                                                                                               |
| **Contributors**               | *Jonny Bowker*                                                                                   |
| **See Also**                   | *`brando:speechStyle`, `brando:pronunciationGuide`*                                                        |
| **Equivalent Schema.org Term** | *None (custom)*                                                                                            |

---

### Pronunciation Guide {#pronunciationGuide}

| **KEY**                        | **VALUE**                                                                                |
| :----------------------------- | :--------------------------------------------------------------------------------------- |
| **Ref**                        | **1.3.3**                                                                                |
| **Term**                       | *`pronunciationGuide`*                                                                   |
| **Prefix**                     | *`brando`*                                                                               |
| **Label**                      | *Pronunciation Guide*                                                                    |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#pronunciationGuide`*                               |
| **Programmatic Key**           | *`audio_identity.pronunciation_guide`*                                                   |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                        |
| **Domain**                     | *`brando:AudioIdentity`*                                                                 |
| **Range**                      | *`Text`*                                                                                 |
| **Parent**                     | *`brando:AudioIdentity → brando:Brand`*                                                  |
| **Object of Relation**         | *`brando:hasAudioIdentity`*                                                              |
| **Definition**                 | *Standardised pronunciation notes or phonetic guidance for brand-related terminology.*   |
| **Usage Note**                 | *Helps prevent mispronunciation of brand names or specialist terms in AI voice outputs.* |
| **Example**                    | *"BrandoSchema → /ˈbræn.dəʊ skiː.mə/"*                                                   |
| **Date Created**               | *21-04-2025*                                                                             |
| **Contributors**               | *Jonny Bowker*                                                                 |
| **See Also**                   | *`brando:voiceSignature`*                                                                |
| **Equivalent Schema.org Term** | *None (custom)*                                                                          |

---

### Audio Cue {#audioCue}

| **KEY**                        | **VALUE**                                                                                  |
| :----------------------------- | :----------------------------------------------------------------------------------------- |
| **Ref**                        | **1.3.4**                                                                                  |
| **Term**                       | *`audioCue`*                                                                               |
| **Prefix**                     | *`brando`*                                                                                 |
| **Label**                      | *Audio Cue*                                                                                |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#audioCue`*                                           |
| **Programmatic Key**           | *`audio_identity.audio_cue`*                                                               |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                          |
| **Domain**                     | *`brando:AudioIdentity`*                                                                   |
| **Range**                      | *`Text`*                                                                                   |
| **Parent**                     | *`brando:AudioIdentity → brando:Brand`*                                                    |
| **Object of Relation**         | *`brando:hasAudioIdentity`*                                                                |
| **Definition**                 | *Short sound effects used to signal transitions, confirmations, or brand-related actions.* |
| **Usage Note**                 | *Use for multimodal feedback, emotional responses, or interface transitions.*              |
| **Example**                    | *"Gentle tap sound when a message is sent in the app."*                                    |
| **Date Created**               | *21-04-2025*                                                                               |
| **Contributors**               | *Jonny Bowker*                                                                   |
| **See Also**                   | *`brando:audioLogo`, `brando:speechStyle`*                                                 |
| **Equivalent Schema.org Term** | *None (custom)*                                                                            |

---

### Speech Style {#speechStyle}

| **KEY**                        | **VALUE**                                                                         |
| :----------------------------- | :-------------------------------------------------------------------------------- |
| **Ref**                        | **1.3.5**                                                                         |
| **Term**                       | *`speechStyle`*                                                                   |
| **Prefix**                     | *`brando`*                                                                        |
| **Label**                      | *Speech Style*                                                                    |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#speechStyle`*                               |
| **Programmatic Key**           | *`audio_identity.speech_style`*                                                   |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                 |
| **Domain**                     | *`brando:AudioIdentity`*                                                          |
| **Range**                      | *`Text`*                                                                          |
| **Parent**                     | *`brando:AudioIdentity → brando:Brand`*                                           |
| **Object of Relation**         | *`brando:hasAudioIdentity`*                                                       |
| **Definition**                 | *Defines rhythm, pacing, pauses, and expressiveness used in spoken brand output.* |
| **Usage Note**                 | *Used to standardise AI-generated voice delivery.*                                |
| **Example**                    | *"Upbeat and energetic, with brief pauses after key statements."*                 |
| **Date Created**               | *21-04-2025*                                                                      |
| **Contributors**               | *Jonny Bowker*                                                          |
| **See Also**                   | *`brando:voiceSignature`, `brando:dialogueStyle`*                                 |
| **Equivalent Schema.org Term** | *None (custom)*                                                                   |

---

### Audio Reference Link {#audioReferenceLink}

| **KEY**                        | **VALUE**                                                                     |
| :----------------------------- | :---------------------------------------------------------------------------- |
| **Ref**                        | **1.3.6**                                                                     |
| **Term**                       | *`audioReferenceLink`*                                                        |
| **Prefix**                     | *`brando`*                                                                    |
| **Label**                      | *Audio Reference Link*                                                        |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#audioReferenceLink`*                    |
| **Programmatic Key**           | *`audio_identity.reference_link`*                                             |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                             |
| **Domain**                     | *`brando:AudioIdentity`*                                                      |
| **Range**                      | *`URL`*                                                                       |
| **Parent**                     | *`brando:AudioIdentity → brando:Brand`*                                       |
| **Object of Relation**         | *`brando:hasAudioIdentity`*                                                   |
| **Definition**                 | *Links to brand-approved audio repositories, sample files, or documentation.* |
| **Usage Note**                 | *Used for referencing structured sonic assets.*                               |
| **Example**                    | *`https://assets.brandoschema.com/audio-library/`*                            |
| **Date Created**               | *21-04-2025*                                                                  |
| **Contributors**               | *Jonny Bowker*                                                      |
| **See Also**                   | *`brando:audioLogo`, `brando:audioUsageGuideline`*                            |
| **Equivalent Schema.org Term** | *None (custom)*                                                               |

---

### Audio Usage Guidelines {#audioUsageGuidelines}

| **KEY**                        | **VALUE**                                                                                          |
| :----------------------------- | :------------------------------------------------------------------------------------------------- |
| **Ref**                        | **1.3.7**                                                                                          |
| **Term**                       | *`audioUsageGuidelines`*                                                                           |
| **Prefix**                     | *`brando`*                                                                                         |
| **Label**                      | *Audio Usage Guidelines*                                                                           |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#audioUsageGuidelines`*                                       |
| **Programmatic Key**           | *`audio_identity.usage_guidelines`*                                                                |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                                  |
| **Domain**                     | *`brando:AudioIdentity`*                                                                           |
| **Range**                      | *`Text`*                                                                                           |
| **Parent**                     | *`brando:AudioIdentity → brando:Brand`*                                                            |
| **Object of Relation**         | *`brando:hasAudioIdentity`*                                                                        |
| **Definition**                 | *Do's and don'ts for using branded audio in speech agents or smart assistants.*                    |
| **Usage Note**                 | *Ensures fidelity, tone, and appropriateness of sound branding in voice interfaces.*               |
| **Example**                    | *"Always play the audio logo at startup. Never layer background music over spoken brand content."* |
| **Date Created**               | *21-04-2025*                                                                                       |
| **Contributors**               | *Jonny Bowker*                                                                           |
| **See Also**                   | *`brando:audioCue`, `brando:audioReferenceLink`*                                                   |
| **Equivalent Schema.org Term** | *None (custom)*                                                                                    |

---

## 1.4 - Positioning Terms

### Mission Statement {#missionStatement}

| **KEY**                        | **VALUE**                                                                        |
| :----------------------------- | :------------------------------------------------------------------------------- |
| **Ref**                        | **1.4.1**                                                                        |
| **Term**                       | *`missionStatement`*                                                             |
| **Prefix**                     | *`brando`*                                                                       |
| **Label**                      | *Mission Statement*                                                              |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#missionStatement`*                         |
| **Programmatic Key**           | *`positioning.mission_statement`*                                                |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                |
| **Domain**                     | *`brando:Positioning`*                                                           |
| **Range**                      | *`Text`*                                                                         |
| **Parent**                     | *`brando:Positioning → brando:Brand`*                                            |
| **Object of Relation**         | *`brando:hasPositioning`*                                                        |
| **Definition**                 | *Brand’s reason for being and day-to-day focus.*                                 |
| **Usage Note**                 | *Often used in summaries, footers, or intro blurbs in AI responses.*             |
| **Example**                    | *"To make regulated health information clear, accurate, and accessible to all."* |
| **Date Created**               | *20-04-2025*                                                                     |
| **Contributors**               | *Jonny Bowker*                                                         |
| **See Also**                   | *`brando:visionStatement`, `brando:coreValues`*                                  |
| **Equivalent Schema.org Term** | *None (custom)*                                                                  |

---

### Vision Statement {#visionStatement}

| **KEY**                        | **VALUE**                                                                                                |
| :----------------------------- | :------------------------------------------------------------------------------------------------------- |
| **Ref**                        | **1.4.2**                                                                                                |
| **Term**                       | *`visionStatement`*                                                                                      |
| **Prefix**                     | *`brando`*                                                                                               |
| **Label**                      | *Vision Statement*                                                                                       |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#visionStatement`*                                                  |
| **Programmatic Key**           | *`positioning.vision_statement`*                                                                         |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                                        |
| **Domain**                     | *`brando:Positioning`*                                                                                   |
| **Range**                      | *`Text`*                                                                                                 |
| **Parent**                     | *`brando:Positioning → brando:Brand`*                                                                    |
| **Object of Relation**         | *`brando:hasPositioning`*                                                                                |
| **Definition**                 | *Aspirational future the brand is working toward.*                                                       |
| **Usage Note**                 | *Can be referenced in AI-generated mission-aligned statements.*                                          |
| **Example**                    | *"To become the world’s most inclusive medical AI companion, trusted by patients and clinicians alike."* |
| **Date Created**               | *20-04-2025*                                                                                             |
| **Contributors**               | *Jonny Bowker*                                                                                 |
| **See Also**                   | *`brando:missionStatement`, `brando:coreValues`*                                                         |
| **Equivalent Schema.org Term** | *None (custom)*                                                                                          |

---

### Core Values {#coreValues}

| **KEY**                        | **VALUE**                                                                 |
| :----------------------------- | :------------------------------------------------------------------------ |
| **Ref**                        | **1.4.3**                                                                 |
| **Term**                       | *`coreValues`*                                                            |
| **Prefix**                     | *`brando`*                                                                |
| **Label**                      | *Core Values*                                                             |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#coreValues`*                        |
| **Programmatic Key**           | *`positioning.core_values`*                                               |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                         |
| **Domain**                     | *`brando:Positioning`*                                                    |
| **Range**                      | *`rdf:List of Text`*                                                      |
| **Parent**                     | *`brando:Positioning → brando:Brand`*                                     |
| **Object of Relation**         | *`brando:hasPositioning`*                                                 |
| **Definition**                 | *Beliefs and principles that guide brand decisions.*                      |
| **Usage Note**                 | *Can be embedded as behavioural rules in LLM instructions.*               |
| **Example**                    | *\["Transparency", "Safety", "Equity", "Evidence-led", "Plain Language"]* |
| **Date Created**               | *20-04-2025*                                                              |
| **Contributors**               | *Jonny Bowker*                                                  |
| **See Also**                   | *`brando:missionStatement`, `brando:visionStatement`*                     |
| **Equivalent Schema.org Term** | *None (custom)*                                                           |

---

### Brand Promise {#brandPromise}

| **KEY**                        | **VALUE**                                                                        |
| :----------------------------- | :------------------------------------------------------------------------------- |
| **Ref**                        | **1.4.4**                                                                        |
| **Term**                       | *`brandPromise`*                                                                 |
| **Prefix**                     | *`brando`*                                                                       |
| **Label**                      | *Brand Promise*                                                                  |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#brandPromise`*                             |
| **Programmatic Key**           | *`positioning.brand_promise`*                                                    |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                |
| **Domain**                     | *`brando:Positioning`*                                                           |
| **Range**                      | *`Text`*                                                                         |
| **Parent**                     | *`brando:Positioning → brando:Brand`*                                            |
| **Object of Relation**         | *`brando:hasPositioning`*                                                        |
| **Definition**                 | *Commitment to customers expressed as a value exchange.*                         |
| **Usage Note**                 | *Often a short, internal pledge that supports outward messaging.*                |
| **Example**                    | *"We deliver clarity, without compromise, for every medical answer we provide."* |
| **Date Created**               | *20-04-2025*                                                                     |
| **Contributors**               | *Jonny Bowker*                                                         |
| **See Also**                   | *`brando:uniqueSellingPoint`, `brando:coreValues`*                               |
| **Equivalent Schema.org Term** | *None (custom)*                                                                  |

---

### Audience Persona {#audiencePersona}

| **KEY**                        | **VALUE**                                                                                                |
| :----------------------------- | :------------------------------------------------------------------------------------------------------- |
| **Ref**                        | **1.4.5**                                                                                                |
| **Term**                       | *`audiencePersona`*                                                                                      |
| **Prefix**                     | *`brando`*                                                                                               |
| **Label**                      | *Audience Persona*                                                                                       |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#audiencePersona`*                                                  |
| **Programmatic Key**           | *`positioning.audience_persona`*                                                                         |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                                        |
| **Domain**                     | *`brando:Positioning`*                                                                                   |
| **Range**                      | *`Text`*                                                                                                 |
| **Parent**                     | *`brando:Positioning → brando:Brand`*                                                                    |
| **Object of Relation**         | *`brando:hasPositioning`*                                                                                |
| **Definition**                 | *Key audience profiles based on need, behaviour, or segment.*                                            |
| **Usage Note**                 | *Helps LLMs modulate content for different comprehension levels or interests.*                           |
| **Example**                    | *"Parents with young children, non-native English speakers, rare disease patients, NHS trust managers."* |
| **Date Created**               | *20-04-2025*                                                                                             |
| **Contributors**               | *Jonny Bowker*                                                                                 |
| **See Also**                   | *`brando:brandPersona`, `brando:literacyLevel`*                                                          |
| **Equivalent Schema.org Term** | *None (custom)*                                                                                          |

---

### Market Position {#marketPosition}

| **KEY**                        | **VALUE**                                                                             |
| :----------------------------- | :------------------------------------------------------------------------------------ |
| **Ref**                        | **1.4.6**                                                                             |
| **Term**                       | *`marketPosition`*                                                                    |
| **Prefix**                     | *`brando`*                                                                            |
| **Label**                      | *Market Position*                                                                     |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#marketPosition`*                                |
| **Programmatic Key**           | *`positioning.market_position`*                                                       |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                     |
| **Domain**                     | *`brando:Positioning`*                                                                |
| **Range**                      | *`Text`*                                                                              |
| **Parent**                     | *`brando:Positioning → brando:Brand`*                                                 |
| **Object of Relation**         | *`brando:hasPositioning`*                                                             |
| **Definition**                 | *The space the brand occupies in the market and among competitors.*                   |
| **Usage Note**                 | *Used for AI-generated comparisons and positioning statements.*                       |
| **Example**                    | *"The leading UK AI brand trusted by NHS bodies for medicine safety communications."* |
| **Date Created**               | *20-04-2025*                                                                          |
| **Contributors**               | *Jonny Bowker*                                                              |
| **See Also**                   | *`brando:competitorContext`, `brando:uniqueSellingPoint`*                             |
| **Equivalent Schema.org Term** | *None (custom)*                                                                       |

---

### Brand Narrative {#brandNarrative}

| **KEY**                        | **VALUE**                                                                                                                      |
| :----------------------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| **Ref**                        | **1.4.7**                                                                                                                      |
| **Term**                       | *`brandNarrative`*                                                                                                             |
| **Prefix**                     | *`brando`*                                                                                                                     |
| **Label**                      | *Brand Narrative*                                                                                                              |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#brandNarrative`*                                                                         |
| **Programmatic Key**           | *`positioning.brand_narrative`*                                                                                                |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                                                              |
| **Domain**                     | *`brando:Positioning`*                                                                                                         |
| **Range**                      | *`Text`*                                                                                                                       |
| **Parent**                     | *`brando:Positioning → brando:Brand`*                                                                                          |
| **Object of Relation**         | *`brando:hasPositioning`*                                                                                                      |
| **Definition**                 | *Story of brand origin, purpose, and evolution.*                                                                               |
| **Usage Note**                 | *LLMs can use this for brand storytelling and user onboarding.*                                                                |
| **Example**                    | *"We began as a team of health writers and AI scientists determined to make medicine safer to understand — and safer to use."* |
| **Date Created**               | *20-04-2025*                                                                                                                   |
| **Contributors**               | *Jonny Bowker*                                                                                                       |
| **See Also**                   | *`brando:brandPromise`, `brando:missionStatement`*                                                                             |
| **Equivalent Schema.org Term** | *None (custom)*                                                                                                                |

---

### Competitor Context {#competitorContext}

| **KEY**                        | **VALUE**                                                                                                                          |
| :----------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| **Ref**                        | **1.4.8**                                                                                                                          |
| **Term**                       | *`competitorContext`*                                                                                                              |
| **Prefix**                     | *`brando`*                                                                                                                         |
| **Label**                      | *Competitor Context*                                                                                                               |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#competitorContext`*                                                                          |
| **Programmatic Key**           | *`positioning.competitor_context`*                                                                                                 |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                                                                  |
| **Domain**                     | *`brando:Positioning`*                                                                                                             |
| **Range**                      | *`Text`*                                                                                                                           |
| **Parent**                     | *`brando:Positioning → brando:Brand`*                                                                                              |
| **Object of Relation**         | *`brando:hasPositioning`*                                                                                                          |
| **Definition**                 | *Reference points or differentiators relative to other market players.*                                                            |
| **Usage Note**                 | *Used in AI decision-making or summary responses comparing solutions.*                                                             |
| **Example**                    | *"Unlike general-purpose LLMs, our platform is designed exclusively for regulated medical use and licensed by the UK government."* |
| **Date Created**               | *20-04-2025*                                                                                                                       |
| **Contributors**               | *Jonny Bowker*                                                                                                           |
| **See Also**                   | *`brando:marketPosition`, `brando:uniqueSellingPoint`*                                                                             |
| **Equivalent Schema.org Term** | *None (custom)*                                                                                                                    |

---

### Domain Context {#domainContext}

| **KEY**                        | **VALUE**                                                                                                                       |
| :----------------------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| **Ref**                        | **1.4.9**                                                                                                                       |
| **Term**                       | *`domainContext`*                                                                                                               |
| **Prefix**                     | *`brando`*                                                                                                                      |
| **Label**                      | *Domain Context*                                                                                                                |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#domainContext`*                                                                           |
| **Programmatic Key**           | *`positioning.domain_context`*                                                                                                  |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                                                               |
| **Domain**                     | *`brando:BrandPersonaCard`*                                                                                                     |
| **Range**                      | *`Text`*                                                                                                                        |
| **Parent**                     | *`brando:Positioning → brando:BrandPersonaCard`*                                                                                |
| **Object of Relation**         | *None*                                                                                                                          |
| **Definition**                 | *Defines the operational, jurisdictional, and audience-specific conditions in which the brand persona is valid or activated.*   |
| **Usage Note**                 | *Used by LLMs, agents, and assistant routing systems to determine which brand voice or behaviour applies in a given situation.* |
| **Example**                    | *{"sector": "Healthcare", "audience": "Carers and patients", "jurisdiction": "UK", "useCase": "Explanation of side effects"}*   |
| **Date Created**               | *20-04-2025*                                                                                                                    |
| **Contributors**               | *Jonny Bowker*                                                                                                        |
| **See Also**                   | *`brando:visibilityRating`, `brando:retrievableInLLM`, `brando:preferredPrompt`*                                                |
| **Equivalent Schema.org Term** | *None (custom)*                                                                                                                 |

---

## 1.5 – Governance Properties

### Guard Rails {#guardRails}

| **KEY**                        | **VALUE**                                                                    |
| :----------------------------- | :--------------------------------------------------------------------------- |
| **Ref**                        | **1.5.1**                                                                    |
| **Term**                       | *`guardRails`*                                                               |
| **Prefix**                     | *`brando`*                                                                   |
| **Label**                      | *Guard Rails*                                                                |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#guardRails`*                           |
| **Programmatic Key**           | *`governance.guard_rails`*                                                   |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                            |
| **Domain**                     | *`brando:Governance`*                                                        |
| **Range**                      | *`Text`*                                                                     |
| **Parent**                     | *`brando:Governance → brando:Brand`*                                         |
| **Object of Relation**         | *`brando:hasGovernance`*                                                     |
| **Definition**                 | *Red lines or behaviours that must be prevented or deflected by AI systems.* |
| **Usage Note**                 | *Typically used to avoid inappropriate, risky, or brand-damaging responses.* |
| **Example**                    | *"Do not speculate on user health conditions or provide diagnosis."*         |
| **Date Created**               | *20-04-2025*                                                                 |
| **Contributors**               | *Jonny Bowker*                                                     |
| **See Also**                   | *`brando:refusalStrategies`, `brando:riskScenarios`*                         |
| **Equivalent Schema.org Term** | *None (custom)*                                                              |

---

### Refusal Strategies {#refusalStrategies}

| **KEY**                        | **VALUE**                                                                         |
| :----------------------------- | :-------------------------------------------------------------------------------- |
| **Ref**                        | **1.5.2**                                                                         |
| **Term**                       | *`refusalStrategies`*                                                             |
| **Prefix**                     | *`brando`*                                                                        |
| **Label**                      | *Refusal Strategies*                                                              |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#refusalStrategies`*                         |
| **Programmatic Key**           | *`governance.refusal_strategies`*                                                 |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                 |
| **Domain**                     | *`brando:Governance`*                                                             |
| **Range**                      | *`Text`*                                                                          |
| **Parent**                     | *`brando:Governance → brando:Brand`*                                              |
| **Object of Relation**         | *`brando:hasGovernance`*                                                          |
| **Definition**                 | *Structured strategies for rejecting inappropriate or out-of-scope prompts.*      |
| **Usage Note**                 | *May include polite rephrasing, deflections, or escalation notices.*              |
| **Example**                    | *"Sorry, I can’t help with that. Please consult your doctor for medical advice."* |
| **Date Created**               | *20-04-2025*                                                                      |
| **Contributors**               | *Jonny Bowker*                                                          |
| **See Also**                   | *`brando:guardRails`, `brando:reviewWorkflow`*                                    |
| **Equivalent Schema.org Term** | *None (custom)*                                                                   |

---

### Compliance Tags {#complianceTags}

| **KEY**                        | **VALUE**                                                                  |
| :----------------------------- | :------------------------------------------------------------------------- |
| **Ref**                        | **1.5.3**                                                                  |
| **Term**                       | *`complianceTags`*                                                         |
| **Prefix**                     | *`brando`*                                                                 |
| **Label**                      | *Compliance Tags*                                                          |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#complianceTags`*                     |
| **Programmatic Key**           | *`governance.compliance_tags`*                                             |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                          |
| **Domain**                     | *`brando:Governance`*                                                      |
| **Range**                      | *`rdf:List of Text`*                                                       |
| **Parent**                     | *`brando:Governance → brando:Brand`*                                       |
| **Object of Relation**         | *`brando:hasGovernance`*                                                   |
| **Definition**                 | *Regulatory, legal, or ethical labels associated with brand content.*      |
| **Usage Note**                 | *Can be used as metadata for content tagging or AI output classification.* |
| **Example**                    | *\["UK MHRA Compliant", "ABPI Code", "EU AI Act - Minimal Risk"]*          |
| **Date Created**               | *20-04-2025*                                                               |
| **Contributors**               | *Jonny Bowker*                                                   |
| **See Also**                   | *`brando:updatePolicy`, `brando:reviewWorkflow`*                           |
| **Equivalent Schema.org Term** | *None (custom)*                                                            |

---

### Review Workflow {#reviewWorkflow}

| **KEY**                        | **VALUE**                                                                      |
| :----------------------------- | :----------------------------------------------------------------------------- |
| **Ref**                        | **1.5.4**                                                                      |
| **Term**                       | *`reviewWorkflow`*                                                             |
| **Prefix**                     | *`brando`*                                                                     |
| **Label**                      | *Review Workflow*                                                              |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#reviewWorkflow`*                         |
| **Programmatic Key**           | *`governance.review_workflow`*                                                 |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                              |
| **Domain**                     | *`brando:Governance`*                                                          |
| **Range**                      | *`Text`*                                                                       |
| **Parent**                     | *`brando:Governance → brando:Brand`*                                           |
| **Object of Relation**         | *`brando:hasGovernance`*                                                       |
| **Definition**                 | *Human or automated process for approving content before use.*                 |
| **Usage Note**                 | *Used to document moderation or compliance checkpoints for content pipelines.* |
| **Example**                    | *"Drafts are reviewed by brand and legal teams before going live."*            |
| **Date Created**               | *20-04-2025*                                                                   |
| **Contributors**               | *Jonny Bowker*                                                       |
| **See Also**                   | *`brando:updatePolicy`, `brando:complianceTags`*                               |
| **Equivalent Schema.org Term** | *None (custom)*                                                                |

---

### Update Policy {#updatePolicy}

| **KEY**                        | **VALUE**                                                                   |
| :----------------------------- | :-------------------------------------------------------------------------- |
| **Ref**                        | **1.5.5**                                                                   |
| **Term**                       | *`updatePolicy`*                                                            |
| **Prefix**                     | *`brando`*                                                                  |
| **Label**                      | *Update Policy*                                                             |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#updatePolicy`*                        |
| **Programmatic Key**           | *`governance.update_policy`*                                                |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                           |
| **Domain**                     | *`brando:Governance`*                                                       |
| **Range**                      | *`Text`*                                                                    |
| **Parent**                     | *`brando:Governance → brando:Brand`*                                        |
| **Object of Relation**         | *`brando:hasGovernance`*                                                    |
| **Definition**                 | *Rules governing content versioning and change management.*                 |
| **Usage Note**                 | *Helps ensure traceability and audit trails for AI-controlled information.* |
| **Example**                    | *"Policy documents must be versioned and reviewed biannually."*             |
| **Date Created**               | *20-04-2025*                                                                |
| **Contributors**               | *Jonny Bowker*                                                    |
| **See Also**                   | *`brando:reviewWorkflow`, `brando:visibilityRating`*                        |
| **Equivalent Schema.org Term** | *None (custom)*                                                             |

---

### Visibility Rating {#visibilityRating}

| **KEY**                        | **VALUE**                                                       |
| :----------------------------- | :-------------------------------------------------------------- |
| **Ref**                        | **1.5.6**                                                       |
| **Term**                       | *`visibilityRating`*                                            |
| **Prefix**                     | *`brando`*                                                      |
| **Label**                      | *Visibility Score*                                              |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#visibilityRating`*        |
| **Programmatic Key**           | *`governance.visibility_rating`*                                |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                               |
| **Domain**                     | *`brando:Governance`*                                           |
| **Range**                      | *`Text`*                                                        |
| **Parent**                     | *`brando:Governance → brando:Brand`*                            |
| **Object of Relation**         | *`brando:hasGovernance`*                                        |
| **Definition**                 | *Rating of how easily the brand is indexed or retrieved by AI.* |
| **Usage Note**                 | *Scale: very low, low, medium, high, very high.*                |
| **Example**                    | *"very high"*                                                   |
| **Date Created**               | *20-04-2025*                                                    |
| **Contributors**               | *Jonny Bowker*                                        |
| **See Also**                   | *`brando:retrievableInLLM`, `brando:embeddingQuality`*          |
| **Equivalent Schema.org Term** | *None (custom)*                                                 |

---

### Retrievable in LLM {#retrievableInLLM}

| **KEY**                        | **VALUE**                                                             |
| :----------------------------- | :-------------------------------------------------------------------- |
| **Ref**                        | **1.5.7**                                                             |
| **Term**                       | *`retrievableInLLM`*                                                  |
| **Prefix**                     | *`brando`*                                                            |
| **Label**                      | *Retrievable in LLM*                                                  |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#retrievableInLLM`*              |
| **Programmatic Key**           | *`governance.retrievable_in_llm`*                                     |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                     |
| **Domain**                     | *`brando:Governance`*                                                 |
| **Range**                      | *`Boolean`*                                                           |
| **Parent**                     | *`brando:Governance → brando:Brand`*                                  |
| **Object of Relation**         | *`brando:hasGovernance`*                                              |
| **Definition**                 | *Indicates whether brand content can be indexed or surfaced by LLMs.* |
| **Usage Note**                 | *Used to control inclusion in AI memory or vector databases.*         |
| **Example**                    | *true*                                                                |
| **Date Created**               | *20-04-2025*                                                          |
| **Contributors**               | *Jonny Bowker*                                              |
| **See Also**                   | *`brando:visibilityRating`, `brando:guardRails`*                      |
| **Equivalent Schema.org Term** | *None (custom)*                                                       |

---

### Embedding Quality {#embeddingQuality}

| **KEY**                        | **VALUE**                                                                                        |
| :----------------------------- | :----------------------------------------------------------------------------------------------- |
| **Ref**                        | **1.5.8**                                                                                        |
| **Term**                       | *`embeddingQuality`*                                                                             |
| **Prefix**                     | *`brando`*                                                                                       |
| **Label**                      | *Embedding Quality*                                                                              |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#embeddingQuality`*                                         |
| **Programmatic Key**           | *`governance.embedding_quality`*                                                                 |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                                |
| **Domain**                     | *`brando:Governance`*                                                                            |
| **Range**                      | *`Text`*                                                                                         |
| **Parent**                     | *`brando:Governance → brando:Brand`*                                                             |
| **Object of Relation**         | *`brando:hasGovernance`*                                                                         |
| **Definition**                 | *Subjective or model-based score for how well the brand’s content is represented in embeddings.* |
| **Usage Note**                 | *Can be derived from embedding precision or LLM relevance tests.*                                |
| **Example**                    | *"medium"*                                                                                       |
| **Date Created**               | *20-04-2025*                                                                                     |
| **Contributors**               | *Jonny Bowker*                                                                         |
| **See Also**                   | *`brando:retrievableInLLM`, `brando:visibilityRating`*                                           |
| **Equivalent Schema.org Term** | *None (custom)*                                                                                  |

---

### Risk Scenarios {#riskScenarios}

| **KEY**                        | **VALUE**                                                                                 |
| :----------------------------- | :---------------------------------------------------------------------------------------- |
| **Ref**                        | **1.5.9**                                                                                 |
| **Term**                       | *`riskScenarios`*                                                                         |
| **Prefix**                     | *`brando`*                                                                                |
| **Label**                      | *Risk Scenarios*                                                                          |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#riskScenarios`*                                     |
| **Programmatic Key**           | *`governance.risk_scenarios`*                                                             |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                         |
| **Domain**                     | *`brando:Governance`*                                                                     |
| **Range**                      | *`Text`*                                                                                  |
| **Parent**                     | *`brando:Governance → brando:Brand`*                                                      |
| **Object of Relation**         | *`brando:hasGovernance`*                                                                  |
| **Definition**                 | *Predefined edge cases or misuse risks relevant to AI or public use.*                     |
| **Usage Note**                 | *Can be used to trigger safeguards, escalation paths, or disclaimers.*                    |
| **Example**                    | *"Prompt encourages self-medication or provides dosing advice outside regulatory scope."* |
| **Date Created**               | *20-04-2025*                                                                              |
| **Contributors**               | *Jonny Bowker*                                                                  |
| **See Also**                   | *`brando:guardRails`, `brando:refusalStrategies`*                                         |
| **Equivalent Schema.org Term** | *None (custom)*                                                                           |

---

## 1.6 – Digital Asset Properties

### Logo Asset {#logoAsset}

| **KEY**                | **VALUE**                                                       |
| :--------------------- | :-------------------------------------------------------------- |
| **Ref**                | **1.6.1**                                                       |
| **Term**               | *`logoAsset`*                                                   |
| **Prefix**             | *`brando`*                                                      |
| **Label**              | *Logo Asset*                                                    |
| **IRI**                | *`https://brandoschema.com/bdv-terms/#logoAsset`*               |
| **Programmatic Key**   | *`assets.logo_asset`*                                           |
| **Type**               | *`rdfs:Property`, `skos:Concept`*                               |
| **Domain**             | *`brando:DigitalAsset`*                                               |
| **Range**              | *`URL`*                                                         |
| **Parent**             | *`brando:DigitalAsset → brando:Brand`*                                |
| **Object of Relation** | *`brando:hasDigitalAsset`*                                            |
| **Definition**         | *Downloadable versions of the brand’s logo in various formats.* |
| \*\*                   |                                                                 |


Usage Note\*\*                 | *Include formats like SVG, PNG, and EPS. May include mono and alt versions.*           |
\| **Example**                    | *[https://brandoschema.com/assets/logo.svg](https://brandoschema.com/assets/logo.svg)* |
\| **Date Created**               | *20-04-2025*                                                                           |
\| **Contributors**               | *Jonny Bowker*                                                               |
\| **See Also**                   | *`brando:visualReferenceLink`, `brando:iconography`*                                   |
\| **Equivalent Schema.org Term** | *None (custom)*                                                                        |

---

### Font Asset {#fontAsset}

| **KEY**                        | **VALUE**                                                                                                  |
| :----------------------------- | :--------------------------------------------------------------------------------------------------------- |
| **Ref**                        | **1.6.2**                                                                                                  |
| **Term**                       | *`fontAsset`*                                                                                              |
| **Prefix**                     | *`brando`*                                                                                                 |
| **Label**                      | *Font Asset*                                                                                               |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#fontAsset`*                                                          |
| **Programmatic Key**           | *`assets.font_asset`*                                                                                      |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                                          |
| **Domain**                     | *`brando:DigitalAsset`*                                                                                          |
| **Range**                      | *`URL`*                                                                                                    |
| **Parent**                     | *`brando:DigitalAsset → brando:Brand`*                                                                           |
| **Object of Relation**         | *`brando:hasDigitalAsset`*                                                                                       |
| **Definition**                 | *Font files and license information for official brand typography.*                                        |
| **Usage Note**                 | *Can reference Google Fonts, local files, or external foundry links.*                                      |
| **Example**                    | *[https://brandoschema.com/assets/fonts/WorkSans.zip](https://brandoschema.com/assets/fonts/WorkSans.zip)* |
| **Date Created**               | *20-04-2025*                                                                                               |
| **Contributors**               | *Jonny Bowker*                                                                                   |
| **See Also**                   | *`brando:typography`*                                                                                      |
| **Equivalent Schema.org Term** | *None (custom)*                                                                                            |

---

### Image Library {#imageLibrary}

| **KEY**                        | **VALUE**                                                                            |
| :----------------------------- | :----------------------------------------------------------------------------------- |
| **Ref**                        | **1.6.3**                                                                            |
| **Term**                       | *`imageLibrary`*                                                                     |
| **Prefix**                     | *`brando`*                                                                           |
| **Label**                      | *Image Library*                                                                      |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#imageLibrary`*                                 |
| **Programmatic Key**           | *`assets.image_library`*                                                             |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                    |
| **Domain**                     | *`brando:DigitalAsset`*                                                                    |
| **Range**                      | *`URL`*                                                                              |
| **Parent**                     | *`brando:DigitalAsset → brando:Brand`*                                                     |
| **Object of Relation**         | *`brando:hasDigitalAsset`*                                                                 |
| **Definition**                 | *Photographic and illustrative asset collections used in brand expressions.*         |
| **Usage Note**                 | *Links to brand-approved imagery, often hosted in DAM or cloud folders.*             |
| **Example**                    | *[https://brandoschema.com/assets/images/](https://brandoschema.com/assets/images/)* |
| **Date Created**               | *20-04-2025*                                                                         |
| **Contributors**               | *Jonny Bowker*                                                             |
| **See Also**                   | *`brando:imageryStyle`*                                                              |
| **Equivalent Schema.org Term** | *None (custom)*                                                                      |

---

### Video Asset {#videoAsset}

| **KEY**                        | **VALUE**                                                                                                          |
| :----------------------------- | :----------------------------------------------------------------------------------------------------------------- |
| **Ref**                        | **1.6.4**                                                                                                          |
| **Term**                       | *`videoAsset`*                                                                                                     |
| **Prefix**                     | *`brando`*                                                                                                         |
| **Label**                      | *Video Asset*                                                                                                      |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#videoAsset`*                                                                 |
| **Programmatic Key**           | *`assets.video_asset`*                                                                                             |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                                                  |
| **Domain**                     | *`brando:DigitalAsset`*                                                                                                  |
| **Range**                      | *`URL`*                                                                                                            |
| **Parent**                     | *`brando:DigitalAsset → brando:Brand`*                                                                                   |
| **Object of Relation**         | *`brando:hasDigitalAsset`*                                                                                               |
| **Definition**                 | *Links to brand-approved video content such as explainers or promos.*                                              |
| **Usage Note**                 | *Should align with brand voice and visual identity.*                                                               |
| **Example**                    | *[https://brandoschema.com/assets/videos/brand-intro.mp4](https://brandoschema.com/assets/videos/brand-intro.mp4)* |
| **Date Created**               | *20-04-2025*                                                                                                       |
| **Contributors**               | *Jonny Bowker*                                                                                           |
| **See Also**                   | *`brando:guidelinesPDF`, `brando:designSystemLink`*                                                                |
| **Equivalent Schema.org Term** | *None (custom)*                                                                                                    |

---

### Document Asset {#documentAsset}

| **KEY**                        | **VALUE**                                                                                                    |
| :----------------------------- | :----------------------------------------------------------------------------------------------------------- |
| **Ref**                        | **1.6.5**                                                                                                    |
| **Term**                       | *`documentAsset`*                                                                                                |
| **Prefix**                     | *`brando`*                                                                                                   |
| **Label**                      | *Text Asset*                                                                                                 |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#textAsset`*                                                            |
| **Programmatic Key**           | *`assets.text_asset`*                                                                                        |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                                            |
| **Domain**                     | *`brando:DigitalAsset`*                                                                                            |
| **Range**                      | *`URL`*                                                                                                      |
| **Parent**                     | *`brando:DigitalAsset → brando:Brand`*                                                                             |
| **Object of Relation**         | *`brando:hasDigitalAsset`*                                                                                         |
| **Definition**                 | *Links to reusable brand-approved documenst holding text blocks such as blogs, articles, disclosures, disclaimers, taglines, bios, or prompt templates.*     |
| **Usage Note**                 | *Useful for LLM grounding, boilerplate reuse, and brand consistency across touchpoints.*                     |
| **Example**                    | *[https://brandoschema.com/assets/text/disclaimer.txt](https://brandoschema.com/assets/text/disclaimer.txt)* |
| **Date Created**               | *20-05-2025*                                                                                                 |
| **Contributors**               | *Jonny Bowker*                                                                                     |
| **See Also**                   | *`brando:canonicalAnswer`, `brando:promptScaffold`*                                                          |
| **Equivalent Schema.org Term** | *None (custom)*                                                                                              |


### Single AI-agent Asset {#singleAgentAIAsset}

| **KEY**                        | **VALUE**                                                                                                                   |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| **Ref**                        | **1.6.6**                                                                                                                   |
| **Term**                       | *`singleAgentAIAsset`*                                                                                                      |
| **Prefix**                     | *`brando`*                                                                                                                  |
| **Label**                      | *Single Agent AI Asset*                                                                                                     |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#singleAgentAIAsset`*                                                                  |
| **Programmatic Key**           | *`assets.single_agent_ai_asset`*                                                                                            |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                                                           |
| **Domain**                     | *`brando:DigitalAsset`*                                                                                                           |
| **Range**                      | *`URL`*                                                                                                                     |
| **Parent**                     | *`brando:DigitalAsset → brando:Brand`*                                                                                            |
| **Object of Relation**         | *`brando:hasDigitalAsset`*                                                                                                        |
| **Definition**                 | *Links or references to configurations, models, scripts, or resources used by a single AI agent associated with the brand.* |
| **Usage Note**                 | *Helps organize and manage individual AI agent assets for version control and deployment.*                                  |
| **Example**                    | *[https://brandoschema.com/assets/agents/agent1-config.json](https://brandoschema.com/assets/agents/agent1-config.json)*    |
| **Date Created**               | *2025-05-18*                                                                                                                |
| **Contributors**               | *Jonny Bowker*                                                                                                    |
| **See Also**                   | *`brando:assets`, `brando:textAsset`, `brando:audioAsset`*                                                                  |
| **Equivalent Schema.org Term** | *None (custom)*                                                                                                             |


### Multi AI-agent Asset {#multiAgentAIAsset}

| **KEY**                        | **VALUE**                                                                                                              |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| **Ref**                        | **1.6.6**                                                                                                              |
| **Term**                       | *`multiAgentAIAsset`*                                                                                                  |
| **Prefix**                     | *`brando`*                                                                                                             |
| **Label**                      | *Multi-Agent AI Asset*                                                                                                 |
| **IRI**                        | *`https://brandoschema.com/bdv-terms/#multiAgentAI`*                                                              |
| **Programmatic Key**           | *`assets.multi_agent_ai`*                                                                                        |
| **Type**                       | *`rdfs:Property`, `skos:Concept`*                                                                                      |
| **Domain**                     | *`brando:DigitalAsset`*                                                                                                      |
| **Range**                      | *`URL`*                                                                                                                |
| **Parent**                     | *`brando:DigitalAssets → brando:Brand`*                                                                                       |
| **Object of Relation**         | *`brando:hasDigitalAsset`*                                                                                                   |
| **Definition**                 | *Links or references to configurations, data, or resources used by multi-agent AI systems associated with the brand.*  |
| **Usage Note**                 | *Useful for organizing and controlling multi-agent AI deployments, versioning, and asset tracking.*                    |
| **Example**                    | *[https://brandoschema.com/assets/agents/agent-config.yaml](https://brandoschema.com/assets/agents/agent-config.yaml)* |
| **Date Created**               | *2025-05-18*                                                                                                           |
| **Contributors**               | *Jonny Bowker*                                                                                               |
| **See Also**                   | *`brando:assets`, `brando:audioAsset`, `brando:textAsset`*                                                             |
| **Equivalent Schema.org Term** | *None (custom)*                                                                                                        |

---