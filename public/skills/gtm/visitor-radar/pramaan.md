---
skill: visitor-radar
author: ido-goldberg
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ido-goldberg/visitor-radar
pramaan_skills: [people-companies, apps-connections]
ids: [company.visitors.identify, companies.identify-ip, companies.enrich, people.enrich, people.email.find, apps.catalog.search, apps.action.execute, apps.action.run]
---

# Run "Visitor radar" with Pramaan

This skill is built for the Swan workspace: Swan's website tracking or a webhook triggers it, and it logs to Swan. Pramaan can still resolve visitors, read the CRM and create the owner's task.

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`company.visitors.identify` is a mission (several steps, one result). It turns visitor IPs into companies and keeps the ones that fit the ideal customer. It names no people. Use it for the anonymous, company-only case.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Resolve identity: company only | `companies.identify-ip`, `companies.enrich` | The company behind an IP, then its profile. |
| 2. Resolve identity: form fill with email | `people.enrich` | The person and employer from the email. |
| 2. Resolve identity: name, no email | `people.email.find` | Name plus company domain. |
| 3. CRM context | `apps.catalog.search`, `apps.action.execute` | Find the CRM's search action, then run it for the company's contacts and deals. |
| 7. Channel and routing: task for the owner | `apps.action.run` | Creates the task in the CRM. |

The agent does steps 1, 4, 5 and 6 itself: signal tiers, content angle, timing and drafting. Step 8 logs to Swan.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.run` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
4. None of the other ids send or change anything.
