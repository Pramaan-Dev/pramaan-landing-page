---
skill: cold-call-scripts
author: alex-vacca
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/alex-vacca/cold-call-scripts
pramaan_skills: [ai-models]
ids: [llm.complete]
---

# Run "Cold call scripts" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Write a script for a prospect | `llm.complete` | Optional. The agent can write it directly. |

This is a writing skill. No superpower is needed. The agent does every step itself.

## Before running

1. Quote `llm.complete` first (`quote`) if you use it. Nothing runs during a quote, and it returns the maximum price.
2. Nothing here places a call.
