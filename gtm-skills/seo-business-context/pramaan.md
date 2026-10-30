---
skill: seo-business-context
author: sam-dunning
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/sam-dunning/seo-business-context
pramaan_skills: [web-search, ai-models]
ids: [web.crawl, web.read, google.domain.overview, google.domain.ranked-keywords, google.domain.pages, google.domain.competitors, llm.complete]
---

# Run "SEO business context" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Website intelligence | `web.crawl`, `web.read` | Product, pricing, customer and about pages. |
| 1. Site search data (the skill uses Ahrefs) | `google.domain.overview`, `google.domain.ranked-keywords`, `google.domain.pages` | Traffic, ranked keywords and top pages from another source. |
| 1. Organic competitors | `google.domain.competitors` | Domains that share keywords. Competitors named in calls still count for more. |
| 1. Search Console data | none | No Pramaan id reads Search Console. Ask the user for an export. |
| 3. Write the account intelligence document | `llm.complete` | Optional. |

The agent gathers inputs (step 0), reads the user's own materials (step 2), writes the synthesis and saves the file (step 4) itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything.
