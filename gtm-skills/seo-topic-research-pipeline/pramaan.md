---
skill: seo-topic-research-pipeline
author: sam-dunning
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/sam-dunning/seo-topic-research-pipeline
pramaan_skills: [web-search, ads-marketing, ai-models]
ids: [keyword.research, seo.keyword.cluster, keyword.gap, seo.competitor.profile, google.keywords.volume, google.keywords.difficulty, google.keywords.intent, google.serp.organic, google.domain.ranked-keywords, web.crawl, llm.complete]
---

# Run "SEO topic research pipeline" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

Pramaan has no Ahrefs. These ids give the same facts.

## Fastest path

`keyword.research` and `keyword.gap` are missions (several steps, one result). Use them for the keyword and gap phases. `seo.keyword.cluster` groups keywords by intent.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Business context | `web.crawl`, `google.domain.ranked-keywords` | Site content and current rankings. |
| 2. Opportunity extraction | `seo.competitor.profile` | Competitor plays. |
| 3. Keyword validation | `keyword.research`, `google.keywords.volume`, `google.keywords.difficulty`, `keyword.gap` | Volume, difficulty and gaps. |
| 4. SERP qualification | `google.serp.organic`, `google.keywords.intent` | Intent and who ranks. |
| 5. Topic shaping | `seo.keyword.cluster` | Group by intent. |
| Business fit and priority | `llm.complete` | Optional. |

The agent does the commercial filter, the scoring, the checkpoints and the final roadmap itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything.
