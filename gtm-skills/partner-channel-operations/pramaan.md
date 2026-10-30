---
skill: partner-channel-operations
author: rutger-katz
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/rutger-katz/partner-channel-operations
pramaan_skills: [people-companies, apps-connections]
ids: [companies.lookalike.search, companies.intro-paths.find, apps.action.execute, llm.complete]
---

# Run "Partner and channel operations" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

Mostly programme design. Pramaan helps find and track partners.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Ideal partner profile: find candidates | `companies.lookalike.search` | Companies like your best partners. |
| Co-selling: warm routes in | `companies.intro-paths.find` | Needs a connected professional network. |
| Partner pipeline and reporting | `apps.action.execute` | Read actions only, on deal registrations and partner-sourced deals in the connected CRM. |
| Draft programme text | `llm.complete` | Optional. |

The agent designs tiers, enablement, co-sell and deal registration rules itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
