---
skill: call-kpi-scoring
author: amit-rotstein
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/amit-rotstein/call-kpi-scoring
pramaan_skills: [media, ai-models]
ids: [recording.transcribe.tuned, audio.transcribe-configured, text.sentiment.analyze, meeting.summarize]
---

# Run "Call KPI scoring" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Transcribe an audio file | `recording.transcribe.tuned` | A mission: transcript with speakers. Needs speaker labels and timestamps for the timing KPIs. |
| 1. Transcribe with set options | `audio.transcribe-configured` | Timed words, speaker labels and formatting. |
| Customer sentiment KPI | `text.sentiment.analyze` | Tone of the buyer's turns. |
| Next steps check | `meeting.summarize` | Summary, decisions and action items tied to the transcript. |

The agent does the speaker attribution, call typing, the nine KPIs, citations and tips itself. If the user supplies a transcript, no superpower is needed.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
