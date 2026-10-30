---
skill: prospect-to-pipeline
author: omer-levy
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/omer-levy/prospect-to-pipeline
pramaan_skills: [people-companies, email]
ids: [lead.contact.find, companies.identify, people.profile.search, people.email.verify, people.phone.find, companies.signals.get, companies.news, email.draft.create]
---

# Run "Prospect to pipeline" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

The skill is built for Lusha. On Pramaan the same job runs on the company, people search, contact and signal superpowers.

## Fastest path

`lead.contact.find` finds a work email on the company's own domain and a phone number for one lead. Use it once the contact is chosen.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Resolve the account | `companies.identify` | If the name is ambiguous, show the top two and ask. |
| 3. Find the contact | `people.profile.search` | Filter by company domain, function and seniority. Rank the top 3. |
| 4. Verify details | `people.email.verify`, `people.phone.find` | Email deliverability and direct dial. |
| 5. Signals and news | `companies.signals.get`, `companies.news` | Shape the first message around what is new. |
| 6. First message | `email.draft.create` | Draft only. |

The agent does the anchoring and the writing itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `email.draft.create` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
3. None of the other ids send or change anything.
