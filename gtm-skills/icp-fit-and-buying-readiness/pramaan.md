---
skill: icp-fit-and-buying-readiness
author: brian-carroll
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/brian-carroll/icp-fit-and-buying-readiness
pramaan_skills: [people-companies, web-search]
ids: [lead.qualify, company.icp.score, companies.icp.validate-bulk, company.techstack, companies.signals.get, companies.jobs.search, companies.enrich]
---

# Run "ICP fit and buying readiness" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`lead.qualify` is a mission. It checks one company against up to eight of your criteria. Use it once steps 1 to 3 have given you the criteria.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 4. Fit threshold: gather fit facts | `companies.enrich`, `company.techstack` | Size, industry, tools in use. |
| 4. Score fit at scale | `company.icp.score`, `companies.icp.validate-bulk` | Bulk takes 1 to 100 companies. |
| 5. Readiness signal library | `companies.signals.get`, `companies.jobs.search` | Funding, hiring and other dated events. Check each against its signal window. |
| 6. Pre-discovery verdict | `lead.qualify` | Each criterion answered met, not met or unknown. |

The agent does steps 1 to 3 itself: studying wins and no-decisions, interviewing the team, sorting criteria. It also keeps facts, hypotheses and unknowns apart.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. No id here is marked as needing approval. Reading only.
