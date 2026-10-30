---
skill: sales-methodology
author: rutger-katz
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/rutger-katz/sales-methodology
pramaan_skills: [texting-calls, ai-models]
ids: [call.review, llm.complete]
---

# Run "Sales methodology" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

Mostly method design and coaching. One superpower helps with "Score this deal" when the call was recorded: `call.review` checks a call against a list of criteria, such as each SPICED or MEDDPICC element, and backs each one with quoted words and a timestamp. Optionally use `llm.complete` to draft playbooks.

The agent does every step itself: choosing a framework, stage criteria, qualification questions and coaching guides.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. Nothing here sends or changes anything.
