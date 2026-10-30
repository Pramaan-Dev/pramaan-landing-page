---
skill: b2b-demo-builder
author: monica-dinu
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/monica-dinu/b2b-demo-builder
pramaan_skills: [people-companies, ai-models]
ids: [meeting.brief, company.research, llm.complete]
---

# Run "B2B demo builder" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Phase 0. Audience and industry | `meeting.brief`, `company.research` | Optional. Only when the demo is for a named company or person. |
| Phases 1 to 5. Talk tracks and objection handles | `llm.complete` | Optional. |

The agent does the intake questions, the script, the fallback plan and the recording notes itself. For a generic demo no superpower is needed.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
