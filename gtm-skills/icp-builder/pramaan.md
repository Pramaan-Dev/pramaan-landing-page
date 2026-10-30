---
skill: icp-builder
author: rutger-katz
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/rutger-katz/icp-builder
pramaan_skills: [people-companies, apps-connections]
ids: [apps.action.execute, companies.enrich-bulk, companies.lookalike.search, company.icp.score, companies.filters.resolve, companies.discovery-count]
---

# Run "ICP builder" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Mode 2, step 1. Gather data: best customers | `apps.action.execute` | Read actions only, on the connected CRM. |
| Mode 2, step 1. Firmographics for those customers | `companies.enrich-bulk` | Up to 100 per job. |
| Mode 1. Validate: check fit | `company.icp.score` | Fit probability against written criteria. |
| Mode 2, steps 5 and 6. Goldilocks check and TAM size | `companies.filters.resolve`, `companies.discovery-count` | Turn words into filters, then count. |
| Mode 3. Expand: find more like them | `companies.lookalike.search` | Seed with the best customers' domains. |

The agent runs the GAP and SPICED method and the customer interviews itself. They need no superpower.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
