---
skill: give-first-cold-email
author: dima-bilous
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/dima-bilous/give-first-cold-email
pramaan_skills: [email, people-companies, web-search]
ids: [companies.enrich, people.email.find, web.page.audit, aeo.chatgpt.answer, email.send]
---

# Run "Give-first cold email" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Path 2. Do it for this prospect before writing | `web.page.audit`, `aeo.chatgpt.answer` | Examples: a page audit, or what ChatGPT says about them. Use whichever matches the offer. Other offers need other ids. |
| Find who to write to | `companies.enrich`, `people.email.find` | Company profile, then the contact's work email. |
| Send from your own name | `email.send` | From the user's connected Gmail or Outlook. |

The agent does the rest itself: the goal, path step 1 (the give), and the four-part email shape and follow-ups.

Which test to run depends on what the user sells, so these ids are examples only.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `email.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. None of the other ids send or change anything.
