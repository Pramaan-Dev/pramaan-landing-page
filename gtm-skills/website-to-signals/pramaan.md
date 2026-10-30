---
skill: website-to-signals
author: peter-cools
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/peter-cools/website-to-signals
pramaan_skills: [web-search, people-companies]
ids: [web.read, web.crawl, company.research, companies.signals.search]
---

# Run "Website to signals" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Read the site | `web.read`, `web.crawl` | Homepage, product, pricing, customers, blog. |
| 1. Company profile | `company.research` | Sourced profile from the domain. |
| 4. Test detectability | `companies.signals.search` | Run a signal as a question. If it returns real, dated accounts, it is detectable. |

The agent does steps 2, 3 and the ranking itself: turning why-now into observable proxies and cutting to 3 to 5.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
