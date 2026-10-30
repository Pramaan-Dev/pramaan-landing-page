---
skill: bulk-contact-enrichment
author: nylan-richard
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/nylan-richard/bulk-contact-enrichment
pramaan_skills: [people-companies, email]
ids: [people.enrich-bulk, people.email.find-bulk, people.email.verify-bulk, people.phone.find-bulk, leads.quality.score, lead.list.clean]
---

# Run "Enrich a contact file without corrupting it" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Profile before spending | `leads.quality.score` | Cheap quality grade per row. Run on a sample. |
| Clean non-destructively | `lead.list.clean` | Mission. Checks lead rows one by one. Use when the file is already full of emails. |
| Execute: professional fields | `people.enrich-bulk` | Up to 500 people per run. Send canonical rows only. |
| Execute: work emails | `people.email.find-bulk` | Only rows that lack one. |
| Execute: check emails | `people.email.verify-bulk` | Before any outreach or import. |
| Execute: phones | `people.phone.find-bulk` | Only if the downstream use needs phones. |

The agent does profiling, field mapping, `source_row_id`, non-destructive merge and the export itself. They need no superpower.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price. Price it on the rows that need each field, not the file size.
2. None of these ids send anything. Approval for one field type or one run is not approval for the next, as the skill says.
