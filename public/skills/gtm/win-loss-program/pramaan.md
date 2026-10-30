---
skill: win-loss-program
author: rutger-katz
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/rutger-katz/win-loss-program
pramaan_skills: [texting-calls, ai-models]
ids: [call.insights, audio.transcription.create, audio.transcription.get]
---

# Run "Win-loss program" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`call.insights` is a mission (several steps, one result). Give it a win or loss interview recording. It returns objections, next steps and risks, each tied to the call. Run it once per interview.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Lane 1: mine recorded calls of decided deals | `call.insights` | One recording per call. Returns cited objections, next steps and risks. |
| Lane 2: transcribe buyer interviews | `audio.transcription.create`, `audio.transcription.get` | Needs an audio URL. |
| Lane 2: pull reasons from each interview | `call.insights` | Same mission, one interview at a time. |

No superpower reads CRM email threads for Lane 1; ask the user for them. The agent runs Lane 3 (the customer arena), builds the decision-driver taxonomy and writes the report itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `call.insights` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. None of the other ids send or change anything.
