---
skill: lead-sources-guide
author: alex-vacca
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/alex-vacca/lead-sources-guide
pramaan_skills: [people-companies]
ids: [lead.list.build, company.list.build, people.search, companies.search, lead.find, local.contacts.collect]
---

# Run "Lead sources guide" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`lead.list.build` is a mission (several steps, one result). It sizes a people search, shows a masked sample, then exports a capped list. `company.list.build` does the same for companies.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Source people (Apollo, Sales Navigator style) | `people.search` | Describe the role, company or filters. |
| Source companies (Clay, Ocean style) | `companies.search` | Filters or a plain description. |
| Leads with a named contact | `lead.find` | Companies that fit, each with a checked work email. |
| Local directories | `local.contacts.collect` | Businesses in an area with the contacts they publish. |

The agent does the choice of source mix and the Clay template advice itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `company.list.build` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. None of the other ids send or change anything. `lead.list.build` exports paid records after a count, so the agent shows the count and price first.
