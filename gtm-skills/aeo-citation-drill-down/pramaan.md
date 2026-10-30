---
skill: aeo-citation-drill-down
author: yahav-fuchs
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/yahav-fuchs/aeo-citation-drill-down
pramaan_skills: [web-search, ai-models]
ids: [aeo.citation.gap, aeo.domains.top, aeo.pages.top, aeo.mentions.search, aeo.chatgpt.answer, aeo.perplexity.answer, web.read]
---

# Run "AEO citation drill-down" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`aeo.citation.gap` is a mission (several steps, one result). It shows the pages and domains AI engines cite most for a topic, against your own pages.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Level 1: domains | `aeo.domains.top` | Domains cited most for a keyword or domain. |
| Level 2: URLs | `aeo.pages.top` | Pages cited most. |
| Level 3: full answers | `aeo.mentions.search`, `aeo.chatgpt.answer`, `aeo.perplexity.answer` | The answer text and its cited sources. |
| Read the winning page | `web.read` | See what it covers that yours does not. |

The agent does the strategy from the findings itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything.
