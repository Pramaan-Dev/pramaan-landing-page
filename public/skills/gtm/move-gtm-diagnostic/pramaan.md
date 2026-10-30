---
skill: move-gtm-diagnostic
author: sangram-vajre
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/sangram-vajre/move-gtm-diagnostic
pramaan_skills: [ai-models]
ids: [llm.complete]
---

# Run "MOVE GTM diagnostic" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

No superpower is needed. This is a diagnostic interview and judgement. Optionally use `llm.complete` to draft the write-up.

The agent does every step itself: fit stage, the four MOVE questions, the four motions and the diagnosis.

## Before running

1. Quote `llm.complete` first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. Nothing here sends or changes anything.
