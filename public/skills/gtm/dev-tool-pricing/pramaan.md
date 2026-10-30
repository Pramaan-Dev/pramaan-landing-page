---
skill: dev-tool-pricing
author: shane-oconnor
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/shane-oconnor/dev-tool-pricing
pramaan_skills: [web-search, ai-models]
ids: [competitor.pricing.read, web.search, llm.complete]
---

# Run "Dev tool pricing" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

Mostly pricing judgement. One superpower helps with competitor anchoring: `competitor.pricing.read` reads a competitor's plans from its own pricing page. Use `web.search` to find which tools the buyer would compare against. Optionally use `llm.complete` to draft.

The agent does the value metric, the free-to-paid line, the range question and the final number itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. Nothing here sends or changes anything.
