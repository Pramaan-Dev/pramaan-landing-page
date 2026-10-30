---
skill: reply-pull-gate
author: nadav-david
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/nadav-david/reply-pull-gate
pramaan_skills: [ai-models]
ids: [llm.complete]
---

# Run "Reply pull gate" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

No superpower is needed. This is scoring a draft and returning SEND or SEND BACK with a named rewrite. Optionally use `llm.complete` as a second reader. The agent does the verdict itself.

## Before running

1. Quote `llm.complete` first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. It sends nothing.
