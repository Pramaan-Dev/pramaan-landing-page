---
skill: enrich-contact
author: omer-levy
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/omer-levy/enrich-contact
pramaan_skills: [people-companies, email]
ids: [lead.enrich, people.enrich, people.email.verify, people.phone.find, people.employment.check]
---

# Run "Enrich a contact" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

The skill is built for Lusha. On Pramaan the same job runs on the people enrichment and contact check superpowers.

## Fastest path

`lead.enrich` returns a full contact record from a work email or a professional profile. Use it for one contact. For a name plus company, use the steps below.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Resolve the contact | `people.enrich` | Accepts a profile link, email, or name plus employer. If no confident match, ask. Never guess. |
| 2. Verify the email | `people.email.verify` | Deliverability check. |
| 2. Direct dial | `people.phone.find` | Best coverage from a profile link. |
| 2. Departure flag | `people.employment.check` | Is the person still at the company. |

The agent does the final single clean record and the recent-hire flag itself. For a list, run these per row.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
