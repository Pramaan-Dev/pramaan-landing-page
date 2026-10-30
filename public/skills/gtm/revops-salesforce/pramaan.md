---
skill: revops-salesforce
author: rutger-katz
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/rutger-katz/revops-salesforce
pramaan_skills: [apps-connections]
ids: [apps.connection.start, apps.connections.list, apps.catalog.search, apps.action.execute, apps.action.run]
---

# Run "RevOps Salesforce" with Pramaan

This skill is built for Salesforce. Pramaan can connect a Salesforce org, read records through the app's read actions, and make changes the user approves. Object design, Flows and Agentforce setup stay with the agent and the admin.

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Connect Salesforce | `apps.connection.start` | Returns a sign-in link for the user. |
| Check the connection | `apps.connections.list` | Confirm Salesforce is live. |
| Find the Salesforce action | `apps.catalog.search` | Returns action keys and input fields. |
| Check the org against the implementation checklist and anti-patterns | `apps.catalog.search`, `apps.action.execute` | Read actions only. If the CRM is not connected, ask the user for an export. |
| Change fields or records | `apps.action.run` | Writes to Salesforce. One approved change at a time. |

The agent does the design work itself: object model, validation rules, Flow logic and reporting. No superpower does that.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.run` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
4. None of the other ids send or change anything.
