---
skill: call-followup-sweep
author: boaz-descalo
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/boaz-descalo/call-followup-sweep
pramaan_skills: [email, apps-connections, ai-models]
ids: [meeting.summarize, meeting.followup, email.draft.create, email.messages.search, apps.catalog.search, apps.action.execute]
---

# Run "Call follow-up sweep" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Pull every call in the window | `apps.catalog.search`, `apps.action.execute` | Reads from the user's call recorder, if it is a connected app. |
| 3. Extract commitments | `meeting.summarize` | A mission. Summary, decisions and action items from one recording. |
| 5. Dedupe by account | `email.messages.search` | Find existing threads so one account gets one email. |
| 6. Draft to the call's shape | `meeting.followup`, `email.draft.create` | Stored as drafts. `meeting.followup` can also create tasks. |

The agent does step 1 (the window question), step 4 (triage) and step 7 (the sweep report) itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `meeting.followup` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `email.draft.create` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
4. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
5. None of the other ids send or change anything.
