---
skill: outreach-personalization
author: yoni-tserruya
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/yoni-tserruya/outreach-personalization
pramaan_skills: [people-companies, email, social-media]
ids: [people.enrich, people.employment.check, people.email.find, people.email.verify, companies.signals.get, companies.news, companies.jobs.search, outreach.draft, outreach.linkedin.opener]
---

# Run "Outreach personalization" with Pramaan

This skill is built for Lusha. Pramaan can verify the contact, pull live account signals and save a draft, from its own sources. There is no Lusha intent score.

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Verify the contact | `people.enrich`, `people.employment.check` | Current title and employer. Departed means no message. |
| 1. Verified email | `people.email.find`, `people.email.verify` | Skip addresses that do not verify. |
| 2. Signal pull | `companies.signals.get`, `companies.news` | Dated events and news. Keep funding to 90 days and executive moves to 30. |
| 2. Hiring surges | `companies.jobs.search` | Open roles in the target function. |
| 5. Write the email | `outreach.draft` | Writes and saves a draft, checked sentence by sentence. It never sends. Check it against the hook, tone and word limits. |
| 5. LinkedIn instead of email | `outreach.linkedin.opener` | Returns text only. It never sends. |

The agent picks the hook (step 3), sets tone by seniority (step 4), returns batch output (step 6) and masks contact details (step 7) itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `outreach.draft` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
3. None of the other ids send or change anything.
