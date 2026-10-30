---
skill: humanize-content
author: amith-tk
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/amith-tk/humanize-content
pramaan_skills: [ai-models]
ids: [text.ai.detect, text.rewrite]
---

# Run "Humanize content" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Check how machine-like a draft reads | `text.ai.detect` | Optional. A probability from 0 to 1. |
| Rewrite with a tone or style | `text.rewrite` | Optional. Up to 5,000 characters. |

This is an editing skill. No superpower is needed. The agent retires the six patterns itself.

## Before running

1. Quote each id first (`quote`) if you use them. Nothing runs during a quote, and it returns the maximum price.
2. Nothing here sends anything.
