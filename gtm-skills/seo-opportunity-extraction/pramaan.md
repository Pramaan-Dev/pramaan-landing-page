---
skill: seo-opportunity-extraction
author: sam-dunning
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/sam-dunning/seo-opportunity-extraction
pramaan_skills: [web-search, ai-models]
ids: [seo.competitor.profile, google.domain.ranked-keywords, web.search, llm.complete]
---

# Run "SEO opportunity extraction" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Competitor plays | `seo.competitor.profile` | A rival's search footprint: ranked keywords and pages. |
| What the client already ranks for | `google.domain.ranked-keywords` | Coverage and gaps. |
| Objection and pain topics | `web.search` | What buyers search and ask. |
| Form and rank opportunities | `llm.complete` | Optional. |

The agent does the signal scan, the opportunity write-up and the priority call itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything.
