---
skill: cold-email-4-sequence
author: alex-vacca
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/alex-vacca/cold-email-4-sequence
pramaan_skills: [email, ai-models]
ids: [outreach.sequence.draft, email.send]
---

# Run "Cold email 4-sequence" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`outreach.sequence.draft` is a mission (several steps, one result). It drafts a three-step sequence for one lead from their company and news. This skill has four emails, so add the break-up yourself.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Emails 1 to 3 (trigger, pain, someone else's job) | `outreach.sequence.draft` | Saves drafts in the user's connected inbox. Nothing is sent. The agent rewrites each draft to fit the skill's angle. |
| Email 4 (break-up) | None | The agent writes it. |
| Send an approved email | `email.send` | From the user's connected Gmail or Outlook. |

The agent does the structure checklist and the timing itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `email.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `outreach.sequence.draft` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
