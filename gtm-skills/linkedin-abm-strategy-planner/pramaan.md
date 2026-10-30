---
skill: linkedin-abm-strategy-planner
author: emilia-korczynska
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/emilia-korczynska/linkedin-abm-strategy-planner
pramaan_skills: [people-companies, web-search, ads-marketing]
ids: [company.research, web.read, ads.performance.report, market.size]
---

# Run "LinkedIn ABM strategy planner" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Research the company | `company.research` | Sourced profile from the domain: site pages, news and a summary. |
| 2. Research the company | `web.read` | Product, use-case and customer pages, one URL at a time. |
| 1. Real LinkedIn CPC | `ads.performance.report` | Optional. If the LinkedIn ads account is connected, spend and clicks give the real CPC instead of the $8 default. |
| 3. Accounts needed and audience size | `market.size` | Optional. Company counts for the target industries and regions, without pulling records. |

The agent does the interview, the funnel maths, the ad-count model and the strategy document itself. Pramaan has no LinkedIn audience sizer.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
