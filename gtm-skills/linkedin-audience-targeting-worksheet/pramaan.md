---
skill: linkedin-audience-targeting-worksheet
author: justin-rowe
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/justin-rowe/linkedin-audience-targeting-worksheet
pramaan_skills: [ads-marketing, people-companies]
ids: [ads.targeting.search, company.list.build, company.icp.score, linkedin.company.employees, companies.enrich, llm.complete]
---

# Run "LinkedIn audience targeting worksheet" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 4. Account-based: build the named list | `company.list.build`, `company.icp.score` | `company.list.build` counts first, then fetches after approval. |
| 4. Titles inside a named account | `linkedin.company.employees`, `companies.enrich` | Which roles exist there. |
| 5. Cold LinkedIn, official attributes only | `ads.targeting.search` | Exact option names, per the hard rule. |
| Write the worksheet | `llm.complete` | Optional. |

The agent does tiers 1 to 3 (CRM pools, warm engagers, search traffic), the efficiency ladder and the HTML and DOCX build itself. The warm pools come from the user's CRM and ad account.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `company.list.build` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. None of the other ids send or change anything.
