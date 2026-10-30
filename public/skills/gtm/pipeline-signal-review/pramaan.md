---
skill: pipeline-signal-review
author: udi-cohen
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/udi-cohen/pipeline-signal-review
pramaan_skills: [people-companies, apps-connections]
ids: [apps.connections.list, apps.catalog.search, apps.action.execute, company.list.resolve, people.employment.check, people.role.find, people.search, companies.signals.get, companies.news]
---

# Run "Pipeline signal review" with Pramaan

This skill is built for Lusha. Pramaan can resolve each account, check contacts are still in seat, look for buying-group gaps and pull signals and news from its own sources. The risk scoring and the brief stay with the agent.

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Deal list and last activity | `apps.connections.list`, `apps.catalog.search`, `apps.action.execute` | Only if a CRM is connected. Otherwise ask for the deal list. Read actions only. |
| 2. Resolve accounts | `company.list.resolve` | Unresolved names come back apart. |
| 3. Contact verification | `people.employment.check` | Same employer, different employer or not listed, from the public profile. |
| 3. Buying group coverage | `people.role.find`, `people.search` | Look for the economic buyer, champion, technical evaluator and procurement by title. |
| 3. Buying signals | `companies.signals.get` | Dated events with a source URL. There is no Lusha intent score. |
| 3. Recent news | `companies.news` | Keep the last 30 days. Check each date. |

The agent flags stale deals (30+ days without activity), scores risk (step 4) and writes the brief (step 5) itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
