---
skill: prospect-to-outreach
author: omer-levy
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/omer-levy/prospect-to-outreach
pramaan_skills: [people-companies, email]
ids: [lead.find, people.profile.search, people.email.find, people.email.verify, companies.signals.get, companies.news, email.draft.create]
---

# Run "Prospect to outreach" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

The skill is built for Lusha and Gmail. On Pramaan the same job runs on the people search, email check and email draft superpowers.

## Fastest path

`lead.find` returns companies that fit a description, each with a named contact whose work email was checked. Use it when the target is a company description. For a persona search, use the steps below.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Find the contacts | `people.profile.search` | Director, VP and C-suite by default. Page size about 15. |
| 2. Work emails | `people.email.find`, `people.email.verify` | Only addresses that verify. |
| 4. Why now | `companies.signals.get`, `companies.news` | Funding, hiring, news for the opener. Check dates. |
| 5. Drafts | `email.draft.create` | Drafts in the user's mailbox. |

The agent does the clarifying questions, the shortlist, and the writing itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `email.draft.create` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
3. None of the other ids send or change anything.
