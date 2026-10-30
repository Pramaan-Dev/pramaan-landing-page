---
skill: deal-qualification-gates
author: rutger-katz
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/rutger-katz/deal-qualification-gates
pramaan_skills: [apps-connections, ai-models]
ids: [apps.action.execute, meeting.summarize, llm.complete]
---

# Run "Deal qualification gates" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Deployment 1 and 3. Read the open pipeline and notes | `apps.action.execute` | Read actions on the connected CRM. Writing scores back needs the user's yes. |
| Deployment 4. Score from transcripts | `meeting.summarize` | Summary of a call recording, with items tied to what was said. |
| The stage gates: draft the wording | `llm.complete` | Optional. |

The agent scores evidence quality 1 to 5, sets minimums per stage and applies qualify-or-kill itself. Writing to the CRM needs the user's yes.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app, and here it also writes. The agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
