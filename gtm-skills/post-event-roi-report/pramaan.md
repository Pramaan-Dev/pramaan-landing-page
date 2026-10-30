---
skill: post-event-roi-report
author: ariel-cohen
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ariel-cohen/post-event-roi-report
pramaan_skills: [documents-files, apps-connections, ai-models]
ids: [csv.prepare, companies.name.normalize, companies.name.match, apps.catalog.search, apps.action.execute, llm.complete]
---

# Run "Post-event ROI report" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Inputs. Load the event lead list | `csv.prepare` | Mission. Cleans the CSV into rows. |
| Inputs. Pull CRM deals | `apps.catalog.search`, `apps.action.execute` | Read only. |
| Attribution. Match accounts to deals by company name | `companies.name.normalize`, `companies.name.match` | Handles Inc, LLC and spelling. |
| Write the report | `llm.complete` | Optional. The numbers come from your own join, not the model. |

The agent does the attribution rules, funnel counts, money totals, checkpoints, breakdowns and follow-up health itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
