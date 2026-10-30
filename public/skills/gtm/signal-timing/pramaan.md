---
skill: signal-timing
author: peter-cools
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/peter-cools/signal-timing
pramaan_skills: [ai-models]
ids: [llm.complete]
---

# Run "Signal timing" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

No superpower is needed. The agent classifies the signal, sets the window, picks cadence and channel order, and writes the angle. Use `llm.complete` only if you want a model to draft the angle.

## Before running

1. Quote `llm.complete` first (`quote`) if you use it. Nothing runs during a quote.
2. Nothing here sends anything.
