---
skill: data-enrichment
author: rutger-katz
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/rutger-katz/data-enrichment
pramaan_skills: [people-companies, email, apps-connections]
ids: [crm.record.enrich, lead.enrich, lead.quality.report, companies.enrich, companies.enrich-bulk, people.enrich-bulk, people.email.find-bulk, people.email.verify-bulk]
---

# Run "Data enrichment" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

The skill compares vendors by name. On Pramaan one API covers company and contact data, so the vendor choice goes away.

## Fastest path

`crm.record.enrich` enriches one owned CRM record and fills only empty fields. `lead.enrich` gives a full record from a work email or a profile. Both are good for inbound leads.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Coverage gaps | `lead.quality.report` | Grades lead records: mailbox, address and field gaps. |
| Company size, industry, revenue | `companies.enrich`, `companies.enrich-bulk` | Up to 100 companies per bulk job. |
| Contact fields | `people.enrich-bulk` | Up to 500 people per run. |
| Work emails | `people.email.find-bulk`, `people.email.verify-bulk` | Find, then verify. |

The agent maps gaps, sets the waterfall order, and decides refresh rules itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `crm.record.enrich` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. None of the other ids send or change anything.
