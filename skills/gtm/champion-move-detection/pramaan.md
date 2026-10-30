---
skill: champion-move-detection
author: ariel-cohen
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ariel-cohen/champion-move-detection
pramaan_skills: [people-companies, social-media, apps-connections]
ids: [people.changes.monitor.create, linkedin.user.profile, people.profile.details, companies.enrich, companies.funding-history, companies.headcount.get, company.icp.score, apps.catalog.search, apps.action.execute]
---

# Run "Champion move detection" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Phase 1. Build the watchlist from CRM deals and usage | `apps.catalog.search`, `apps.action.execute` | Needs the CRM connected. Find the read action first, then run it. |
| Phase 1 (optional). Watch the list instead of checking monthly | `people.changes.monitor.create` | Give it LinkedIn URLs. It reports job changes. |
| Phase 2. Check the experience section on LinkedIn | `linkedin.user.profile`, `people.profile.details` | MOVED needs a new employer listed. No profile found means UNCERTAIN. |
| Phase 3. Verify the new company | `companies.enrich`, `companies.funding-history`, `companies.headcount.get` | Do not guess funding or size. |
| Phase 3. Score the new company | `company.icp.score` | A mission. Feed it the new company. |
| Phase 3 and 4. Write the move to the CRM and post the digest | `apps.action.execute` | Writes to a connected CRM or chat app. |

The agent does the rest itself: the champion qualification gate, the wrong-person check, the competitor check, account memory notes and the digest text.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app, and here it also writes. The agent shows the exact action and inputs and waits for the user's yes.
3. `people.changes.monitor.create` starts a paid standing watch. The agent shows the exact inputs and waits for the user's yes.
4. None of the other ids send or change anything.
