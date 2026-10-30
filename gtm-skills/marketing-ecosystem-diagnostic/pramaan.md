---
skill: marketing-ecosystem-diagnostic
author: justin-rowe
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/justin-rowe/marketing-ecosystem-diagnostic
pramaan_skills: [ads-marketing, people-companies]
ids: [company.techstack, company.research, ads.performance.report, ads.competitor.footprint, llm.complete]
---

# Run "Marketing ecosystem diagnostic" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| What the company already runs | `company.techstack`, `company.research` | Tools on the site, open roles, and a profile. |
| Paid spend by channel | `ads.performance.report` | Only for connected ad accounts. |
| What competitors run | `ads.competitor.footprint` | Optional. |
| Write the board | `llm.complete` | Optional. |

Spend by funnel stage comes from the user. The agent does the 22-motion scoring and the investment map itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
