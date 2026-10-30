---
skill: signal-anchored-message
author: peter-cools
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/peter-cools/signal-anchored-message
pramaan_skills: [email, ai-models]
ids: [companies.news, email.draft.create, llm.complete]
---

# Run "Signal-anchored message" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

This skill is writing. No superpower is needed except to fill gaps.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Confirm the signal | `companies.news` | Optional. Check the date and wording of the trigger. |
| 3. Three touches | `llm.complete` | Optional drafting help. Strip the AI tells after. |
| Save for review | `email.draft.create` | Draft only, if the user wants the note in a mailbox. |

The agent does the anchoring, the clean-context check and the rewrite itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `email.draft.create` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
3. None of the other ids send or change anything.
