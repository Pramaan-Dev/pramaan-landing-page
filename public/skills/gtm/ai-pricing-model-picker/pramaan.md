---
skill: ai-pricing-model-picker
author: manny-medina
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/manny-medina/ai-pricing-model-picker
pramaan_skills: [web-search, ai-models]
ids: [web.search, llm.complete]
---

# Run "AI pricing model picker" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

No superpower is needed. This is a pricing decision from what the agent does and the budget it replaces. Optionally use `web.search` to check what competitors charge, and `llm.complete` for wording. The agent does every step itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
