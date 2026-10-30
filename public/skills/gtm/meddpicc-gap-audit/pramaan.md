---
skill: meddpicc-gap-audit
author: amit-rotstein
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/amit-rotstein/meddpicc-gap-audit
pramaan_skills: [media, email, apps-connections]
ids: [deal.brief, recording.transcribe.tuned, thread.summarize, apps.catalog.search, apps.action.execute]
---

# Run "MEDDPICC gap audit" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Gather deal material | `deal.brief` | A mission: a checked CRM deal, its notes and optional news. |
| 1. Transcribe a recording | `recording.transcribe.tuned` | Transcript with speakers. |
| 1. Read an email thread | `thread.summarize` | Who said what and what is open. Quote the original lines yourself. |
| 4. Read CRM contacts and owners | `apps.catalog.search`, `apps.action.execute` | Also gives the current qualification fields to reconcile against. |
| 9. Write back, only if asked | `apps.action.execute` | One field at a time. |

The agent does the MEDDPICC mapping, citations, reconciliation and stage weighting itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `deal.brief` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `apps.action.execute` runs one action in a connected app, and here it also writes. The agent shows the exact action and inputs and waits for the user's yes.
4. None of the other ids send or change anything.
