---
skill: gtm-compensation
author: rutger-katz
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/rutger-katz/gtm-compensation
pramaan_skills: [web-search, ai-models]
ids: [web.search, llm.complete]
---

# Run "GTM compensation" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

This skill is plan design. No superpower is needed except optionally `web.search` for current pay benchmarks and `llm.complete` for drafting plan text. The agent does the quota, OTE and accelerator math itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
