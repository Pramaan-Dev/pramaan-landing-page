---
skill: icp-matrix-builder
author: tanyo-gochev
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/tanyo-gochev/icp-matrix-builder
pramaan_skills: [people-companies, apps-connections]
ids: [company.icp.score, companies.search-suggest, companies.search, companies.enrich, companies.signals.get, apps.catalog.search, apps.action.execute]
---

# Run "ICP matrix builder" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`company.icp.score` is a mission (several steps, one result). It scores companies against your ideal customer and returns a fit probability for each. Use it to test the matrix on a list.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Anchor to closed-won and closed-lost | `apps.catalog.search`, `apps.action.execute` | Pull deals from the connected CRM. Otherwise ask for a list. |
| Describe each account | `companies.enrich` | Industry, size, location, technology. |
| Pick the exact filter values | `companies.search-suggest` | Values each filter accepts. |
| Check how many accounts fit | `companies.search` | Counts and samples. |
| Gates 2 and 6: problem evidence and timing signal | `companies.signals.get` | Dated events with a source URL, per company domain. |
| Score a list against the matrix | `company.icp.score` | Fit probability per company. |

The agent does the default-deny matrix design and the pass or fail rules itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
