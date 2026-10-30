---
skill: campaign-challenger
author: erwann-lefevre
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/erwann-lefevre/campaign-challenger
pramaan_skills: [ai-models]
ids: [text.ai.detect, text.readability.check]
---

# Run "Campaign challenger" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Name the gap: score against the quality bar | `text.ai.detect`, `text.readability.check` | Optional. How machine-written each touch reads, and its readability. Inputs to the score, not the score. |

The past campaigns, their stats and their copy come from the user's sending tool. The agent does the ranking on meetings, the gap in both directions and the three fixes itself.

## Before running

1. Quote each id first (`quote`) if you use them. Nothing runs during a quote, and it returns the maximum price.
2. Nothing here sends anything.
