---
skill: icp-score-and-route
author: udi-cohen
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/udi-cohen/icp-score-and-route
pramaan_skills: [people-companies, web-search, email]
ids: [company.icp.score, company.list.resolve, companies.enrich, web.tech.detect, companies.signals.get, people.role.find, people.email.find, people.email.verify, people.phone.find]
---

# Run "ICP score and route" with Pramaan

This skill is built for Lusha. Pramaan can resolve the accounts, pull the data, find and check a key contact, and score fit from its own sources. The routing call stays with the agent.

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`company.icp.score` is a mission (several steps, one result). It returns a fit probability per company against written criteria, with the profile evidence. Use it as an input to step 4. It does not route and does not find contacts.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Resolve accounts | `company.list.resolve` | Unresolved names come back apart. List them under Unresolved Accounts. |
| 3. Firmographics | `companies.enrich` | Industry, size, location. |
| 3. Tech stack | `web.tech.detect` | Technologies seen on the company's website. |
| 3. Buying signals | `companies.signals.get` | Dated events with a source URL. There is no Lusha intent score. |
| 3. Key contact | `people.role.find` | The person in the named buying role, with their profile. |
| 3. Verify email and direct dial | `people.email.find`, `people.email.verify`, `people.phone.find` | Only for AE and SDR routes. |
| 4. Score against the ICP | `company.icp.score` | Optional. The agent still shows Met, Missed or Uncertain per criterion. |

The agent restates the ICP (step 1), weights the score, applies the routing thresholds (step 5), sets confidence and masks contact details (step 6) itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything.
