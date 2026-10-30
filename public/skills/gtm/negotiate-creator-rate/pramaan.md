---
skill: negotiate-creator-rate
author: maxwell-nimmo
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/maxwell-nimmo/negotiate-creator-rate
pramaan_skills: [ai-models, email]
ids: [llm.complete, email.draft.create]
---

# Run "Negotiate creator rate" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

No superpower is needed. This is writing three replies from the creator's counter and a rate anchor. Optionally use `llm.complete` to polish them and `email.draft.create` to save the chosen one as a draft. The agent does every other step itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `email.draft.create` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
3. None of the other ids send or change anything.
