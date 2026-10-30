---
skill: procurement-navigation
author: rutger-katz
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/rutger-katz/procurement-navigation
pramaan_skills: [web-search, ai-models]
ids: [web.search, llm.complete]
---

# Run "Procurement navigation" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

This skill is deal process work. No superpower is needed except optionally `web.search` for the buyer's published vendor or security requirements, and `llm.complete` for drafting responses. The agent maps the gauntlet and sequences the work itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
