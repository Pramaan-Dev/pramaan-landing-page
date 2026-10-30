---
skill: buying-group
author: gal-tamir
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/gal-tamir/buying-group
pramaan_skills: [people-companies, email]
ids: [companies.enrich, account.contacts.map, people.email.verify, people.profile.details]
---

# Run "Buying group" with Pramaan

The skill pulls its data through the Lusha connector. The Pramaan ids below do the same pulls.

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`account.contacts.map` is a mission (several steps, one result). It maps contacts at one company by role, with public profiles and checked work emails.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Resolve the account | `companies.enrich` | Company profile from a domain or name. |
| 3. Pull contacts by function | `account.contacts.map` | Run once per function the deal stage needs. |
| 3. Verify emails | `people.email.verify` | Checks the mailbox. Pramaan does not verify direct dials here. |
| 6. Departure and tenure risk | `people.profile.details` | Employment history, so tenure in the current role can be read. |

The agent does steps 1, 4, 5 and 7 itself: the deal-stage anchor, buying roles, coverage gaps and the summary.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
