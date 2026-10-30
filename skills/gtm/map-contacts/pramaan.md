---
skill: map-contacts
author: ido-goldberg
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ido-goldberg/map-contacts
pramaan_skills: [people-companies, social-media, apps-connections]
ids: [apps.catalog.search, apps.action.execute, companies.intro-paths.find, people.profile.details, account.contacts.map, linkedin.company.employees]
---

# Run "Map contacts" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`account.contacts.map` is a mission (several steps, one result). It maps contacts at one company by role, with public profiles and checked work emails. It covers step 5 only.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 3. Mine known relationships: CRM | `apps.catalog.search`, `apps.action.execute` | Find the CRM's search action, then run it for past contacts and interactions at the account. |
| 3. Mine known relationships: network | `companies.intro-paths.find` | Warm paths through the user's connected professional network. |
| 4. Find people who moved | `people.profile.details` | Current employer for each past contact who left the account. |
| 5. Fill gaps with net-new search | `account.contacts.map`, `linkedin.company.employees` | People at the account for the persona roles still missing. |

The agent does steps 1, 2, 6 and 7 itself: the target, the persona model, the map and the hand-off.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
