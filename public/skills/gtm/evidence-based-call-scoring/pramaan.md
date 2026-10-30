---
skill: evidence-based-call-scoring
author: ryan-iyengar
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ryan-iyengar/evidence-based-call-scoring
pramaan_skills: [texting-calls, ai-models]
ids: [call.review, call.insights, audio.transcription.create, audio.transcription.get]
---

# Run "Evidence-based call scoring" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`call.review` is a mission (several steps, one result). It checks a call against your list of criteria. Each one is met only with words quoted from the call, with a timestamp. `call.insights` adds the deal view: objections, next steps and risks.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Get the transcript | `audio.transcription.create`, `audio.transcription.get` | Needs a public audio URL. Speaker labels help. |
| Score against the rubric | `call.review` | Put each rubric dimension in as a criterion. |
| Deal evidence and next actions | `call.insights` | Keep buyer facts apart from seller claims. |

The agent does the rubric, calibration, coaching view and the decision to update any CRM field itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `call.insights` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. None of the other ids send or change anything.
