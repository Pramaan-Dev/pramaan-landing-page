---
skill: discovery-to-demo-bridge
author: gal-aga
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/gal-aga/discovery-to-demo-bridge
pramaan_skills: [media]
ids: [recording.transcribe.tuned]
---

# Run "Discovery-to-demo bridge" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Inputs: pains in the buyer's words | `recording.transcribe.tuned` | Optional. Only if the discovery call was recorded. A transcript with speakers, so pains can be quoted exactly. |

This is a thinking and writing skill. The agent does steps 1 to 6 itself: ranking pains, putting numbers on them, root causes, demo moments, the cut-list and the sequence.

## Before running

1. Quote `recording.transcribe.tuned` first (`quote`) if you use it. Nothing runs during a quote, and it returns the maximum price.
2. Nothing here sends anything.
