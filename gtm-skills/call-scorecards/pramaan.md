---
skill: call-scorecards
author: kevin-kd-dorsey
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/kevin-kd-dorsey/call-scorecards
pramaan_skills: [ai-models, media]
ids: [audio.transcription.create, meeting.summarize, llm.complete]
---

# Run "Call scorecards" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 3. Score: get a transcript, if only audio exists | `audio.transcription.create` | Skip if the call tool already gives text. |
| 3. Score: summary with timestamps | `meeting.summarize` | A mission. Each item is tied to a passage. |
| When a transcript is supplied: score it | `llm.complete` | Optional. Quote the line as evidence for each score. |

The agent does steps 1, 2 and 4 itself: mapping the key conversations, building each card and practice. They need no superpower.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
