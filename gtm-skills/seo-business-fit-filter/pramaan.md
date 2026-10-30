---
skill: seo-business-fit-filter
author: sam-dunning
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/sam-dunning/seo-business-fit-filter
pramaan_skills: [web-search, ai-models]
ids: [google.domain.ranked-keywords, llm.complete]
---

# Run "SEO business fit filter" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

Mostly judgement against the account context. One superpower helps with Filter 5 (net new, update or cannibalization): `google.domain.ranked-keywords` shows whether the client already ranks for the keyword, and with which page. Optionally use `llm.complete` to apply the five filters to a long list.

The agent does Filters 1 to 4 and the output itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. Nothing here sends or changes anything.
