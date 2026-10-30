---
skill: cold-email-first-touch
author: tanyo-gochev
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/tanyo-gochev/cold-email-first-touch
pramaan_skills: [email, people-companies]
ids: [people.email.find, people.email.verify, email.draft.create, email.draft.send]
---

# Run "Cold email first touch" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Get the address | `people.email.find` | From name and company. |
| Deliverability is a copy constraint | `people.email.verify` | Skip bad addresses. |
| Save the draft for review | `email.draft.create` | Saves the draft in the user's connected Gmail or Outlook, or in a Pramaan agent inbox. Nothing is sent. |
| Send after review | `email.draft.send` | Sends that same draft from the mailbox it was saved in. |

The agent does the copy itself: the skeleton, the segment-level relevance, the ask and the follow-up plan.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `email.draft.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `email.draft.create` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
4. None of the other ids send or change anything.
