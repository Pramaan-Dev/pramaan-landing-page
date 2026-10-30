---
skill: abm-signal-watchlist
author: ryan-iyengar
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ryan-iyengar/abm-signal-watchlist
pramaan_skills: [people-companies, apps-connections]
ids: [company.list.resolve, companies.enrich, company.signals.watch.start, companies.signals.monitor.events, companies.signals.get, people.search, people.enrich, apps.catalog.search, apps.action.execute, llm.complete]
---

# Run "ABM signal watchlist" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`company.signals.watch.start` is a mission (several steps, one result). It starts one scheduled watch on a company and bills per signal found. Run it once per account on the list. Read results with `companies.signals.monitor.events`.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Resolve the account list | `company.list.resolve`, `companies.enrich` | Turns messy names into real domains. Send ambiguous ones for review. |
| Check CRM for existing records | `apps.catalog.search`, `apps.action.execute` | Existing owners, open deals, customers. |
| Define and collect signals | `companies.signals.get`, `company.signals.watch.start`, `companies.signals.monitor.events` | Dated, typed events with a source. |
| Find stakeholders | `people.search`, `people.enrich` | Verify current employer. |
| Rank the action queue | `llm.complete` | Optional. |

The agent does the signal definitions, ranking rules and learning loop itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `company.signals.watch.start` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
4. None of the other ids send or change anything.
