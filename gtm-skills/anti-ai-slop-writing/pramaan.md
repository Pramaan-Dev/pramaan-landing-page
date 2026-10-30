---
skill: anti-ai-slop-writing
author: gali-firon
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/gali-firon/anti-ai-slop-writing
pramaan_skills: [ai-models]
ids: [text.ai.detect]
---

# Run "Anti AI slop writing" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| After both passes: spot check | `text.ai.detect` | Optional. A 0 to 1 estimate of how machine-written the result reads. It does not find the eight patterns. |

This is an editing skill. The agent runs both passes and the brand rules itself.

## Before running

1. Quote `text.ai.detect` first (`quote`) if you use it. Nothing runs during a quote, and it returns the maximum price.
2. Nothing here sends anything.
