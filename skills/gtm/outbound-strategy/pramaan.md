---
skill: outbound-strategy
author: peter-cools
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/peter-cools/outbound-strategy
pramaan_skills: [web-search, people-companies]
ids: [web.read, web.crawl, company.research, companies.products.list, companies.similar, company.techstack, companies.signals.search]
---

# Run "Outbound strategy from intent" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1-2. What they sell and who buys | `web.read`, `web.crawl`, `companies.products.list` | Site, pricing, docs and case studies. |
| 1. Company profile | `company.research` | One sourced profile from the domain. |
| 3. Competitors and alternatives | `companies.similar` | Companies like the seed. |
| 3. Their stack | `company.techstack` | Useful for stack-based signals. |
| 7. Check a signal is detectable | `companies.signals.search` | Try the signal question and see if real accounts come back. |

The agent does steps 4 to 6 itself: ICPs, personas and value props. They need no superpower. Label unverified claims as Assumption.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
