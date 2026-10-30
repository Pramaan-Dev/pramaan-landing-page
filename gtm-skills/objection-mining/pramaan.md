---
skill: objection-mining
author: tanyo-gochev
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/tanyo-gochev/objection-mining
pramaan_skills: [texting-calls, ai-models]
ids: [call.insights, audio.transcription.create, audio.transcription.get, llm.complete]
---

# Run "Objection mining" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`call.insights` is a mission (several steps, one result). Give it a sales call recording. It returns the objections, next steps and risks, each tied to the call. Run it per call.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Transcribe calls | `audio.transcription.create`, `audio.transcription.get` | Needs a public audio URL. |
| Pull objections from each call | `call.insights` | Cited to the call. |
| Sort into the six categories and spot patterns | `llm.complete` | Optional. Give it all the insight outputs together. |

The agent does the category reading, the timing-objection follow-ups and the upstream pre-handling itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `call.insights` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. None of the other ids send or change anything.
