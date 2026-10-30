---
skill: zero-click-organic-pipeline-audit
author: gaetano-romeo
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/gaetano-romeo/zero-click-organic-pipeline-audit
pramaan_skills: [web-search]
ids: [seo.domain.trend, rank.check, aeo.overview.check, seo.serp.snapshot]
---

# Run "Zero-click organic pipeline audit" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Stage 1: visibility over time | `seo.domain.trend` | Keywords by position band over time. Estimates, not the user's Search Console data. |
| Test 1: impression stability | `rank.check` | Current positions for the query list. Stable positions with fewer clicks point to a zero-click shift. |
| Stage 1: where the clicks went | `aeo.overview.check` | Whether Google shows an AI overview for each query and which sources it cites. |
| Stage 1: where the clicks went | `seo.serp.snapshot` | Every result type on the page for one query. |

Impressions, clicks and pipeline come from the user's Search Console and CRM. The agent does the intent buckets, the four tests and the verdict itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
