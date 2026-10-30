---
skill: revops-hubspot
author: rutger-katz
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/rutger-katz/revops-hubspot
pramaan_skills: [apps-connections]
ids: [apps.connection.start, apps.connections.list, apps.catalog.search, apps.action.execute, apps.action.run]
---

# Run "RevOps HubSpot" with Pramaan

This skill is built for HubSpot. Pramaan can connect a HubSpot account, read records through the app's read actions, and make changes the user approves. The design work stays with the agent.

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Connect HubSpot | `apps.connection.start` | Returns a sign-in link for the user. |
| Check the connection | `apps.connections.list` | Confirm HubSpot is live. |
| Find the HubSpot actions | `apps.catalog.search` | Returns action keys and input fields. |
| Audit a messy instance: lifecycle stage spread, stale deals, empty fields | `apps.catalog.search`, `apps.action.execute` | Read actions only. If the CRM is not connected, ask the user for an export. |
| Build properties, pipelines and workflows, or clean records | `apps.action.run` | Writes to HubSpot. One approved change at a time. |

The agent does the design work itself: architecture principles, lifecycle stages, pipelines, property names, lead scoring, workflow logic and reports. No superpower does that.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.run` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
4. None of the other ids send or change anything.
