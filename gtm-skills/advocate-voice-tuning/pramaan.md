---
skill: advocate-voice-tuning
author: yahav-fuchs
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/yahav-fuchs/advocate-voice-tuning
pramaan_skills: [ai-models]
ids: [text.rewrite, llm.complete]
---

# Run "Advocate voice tuning" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

This skill is built for ReddGrow's advocate personas and their knowledge base. Pramaan has no advocate or knowledge-base feature. It can only help redraft a comment in the person's voice, with `text.rewrite` or `llm.complete`.

The agent does the rewrite-to-teach loop, the extracted voice guidelines and the knowledge-base refresh itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. Nothing here posts anything.
