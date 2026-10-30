---
skill: clay-enrichment-9step
author: alex-vacca
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/alex-vacca/clay-enrichment-9step
pramaan_skills: [people-companies, email]
ids: [lead.find, lead.enrich, companies.enrich, people.enrich, people.email.find, people.email.verify, people.phone.find, company.icp.score, web.extract]
---

# Run "Clay 9-step enrichment" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`lead.enrich` is a mission (several steps, one result). It returns a full contact record from a work email or profile link. `lead.find` finds leads at companies that fit a description.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Upload and clean | None | The agent reads and de-duplicates the user's file. |
| 2. Company enrichment | `companies.enrich` | From a domain, name or LinkedIn page. |
| 3. People enrichment | `people.enrich` | From a profile, email or name. |
| 4. Email waterfall | `people.email.find` | One call per person. |
| 5. Email verification | `people.email.verify` | Check the mailbox before using the address. |
| 6. Phone numbers | `people.phone.find` | Only when the user wants phone outreach. |
| 7. Custom data | `web.extract` | Pull named fields from one page, in place of Claygent. |
| 8. Scoring | `company.icp.score` | Fit probability against the user's criteria. The agent adds the 100-point score and tiers. |
| 9. Export | None | The agent writes the file. No id here loads it into a sending tool or CRM. |

Pramaan does not use Clay. The agent does the table layout itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
