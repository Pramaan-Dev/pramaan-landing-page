---
skill: earned-autonomy
author: nadav-david
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/nadav-david/earned-autonomy
pramaan_skills: [ai-models]
ids: [llm.complete]
---

# Run "Earned autonomy" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

No superpower is needed. This is a policy for how much an agent may do unchecked. It uses the team's own track record. Pramaan helps with part of this: many ids that send, pay or change something are marked `needs approval` in the catalogue, and `quote` shows the maximum price first. Not every write is marked (running an action in a connected app is not), so the agent's own level rules still apply. Optionally use `llm.complete` to draft the levels.

## Before running

1. Quote `llm.complete` first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. It sends nothing.
