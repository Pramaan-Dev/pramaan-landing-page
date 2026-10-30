---
skill: quora-authority-answering
author: vesselin-malev
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/vesselin-malev/quora-authority-answering
pramaan_skills: [web-search, ai-models]
ids: [google.serp.organic, web.read, llm.complete, text.ai.detect]
---

# Run "Quora authority answering" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

There is no Quora superpower. Posting is done by the user.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Triage the batch | `google.serp.organic` | Find Quora questions that rank, and check what shows. |
| Read the question page | `web.read` | Read the existing answers. |
| Build the body | `llm.complete`, `text.ai.detect` | Optional. Draft, then check it does not read as machine-written. |

The agent does account setup, pacing, the preview line and the linkless rule itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or post anything.
