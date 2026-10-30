---
skill: sdr-master-prompts
author: alex-vacca
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/alex-vacca/sdr-master-prompts
pramaan_skills: [ai-models]
ids: [llm.complete]
---

# Run "SDR master prompts" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Run the master prompt for a lead status | `llm.complete` | Optional. Use it as the system message for an SDR assistant. |

This is a prompt library. No superpower is needed. The agent does every step itself.

## Before running

1. Quote `llm.complete` first (`quote`) if you use it. Nothing runs during a quote, and it returns the maximum price.
2. Nothing here sends anything.
