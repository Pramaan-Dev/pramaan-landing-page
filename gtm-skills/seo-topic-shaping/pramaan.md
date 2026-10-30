---
skill: seo-topic-shaping
author: sam-dunning
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/sam-dunning/seo-topic-shaping
pramaan_skills: [web-search, ai-models]
ids: [seo.keyword.cluster, llm.complete]
---

# Run "SEO topic shaping" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Cluster related topics | `seo.keyword.cluster` | Groups keywords by intent, with volume and difficulty. A mission. |
| Assign a format per topic | `llm.complete` | Optional. |

The agent does the format decision and the site-architecture flags itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything.
