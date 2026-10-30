---
skill: seo-serp-qualification
author: sam-dunning
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/sam-dunning/seo-serp-qualification
pramaan_skills: [web-search]
ids: [google.serp.organic, seo.serp.snapshot, google.keywords.intent, web.read]
---

# Run "SEO SERP qualification" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Check what ranks (the skill uses an Ahrefs SERP overview) | `google.serp.organic` | Position, title, URL and snippet from a live search. |
| 1. See every result type | `seo.serp.snapshot` | Organic, ads, news, video and more in one call. A mission. |
| 2. Intent clarity | `google.keywords.intent` | Many keywords at once. |
| 2. Rewarded format and beatable gaps | `web.read` | Read the top pages to judge format and depth. |

The agent does the six questions and the QUALIFY, CONDITIONAL or DROP verdicts itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything.
