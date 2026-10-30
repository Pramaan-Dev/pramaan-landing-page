---
skill: ai-visibility-prompt-research
author: elad-hefetz
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/elad-hefetz/ai-visibility-prompt-research
pramaan_skills: [web-search, ai-models]
ids: [aeo.prompt.research, google.keywords.ideas, google.serp.autocomplete, community.questions.find, bing.keywords.ideas]
---

# Run "AI visibility prompt research" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`aeo.prompt.research` is a mission. It researches the questions people ask AI tools about a category. Use it for steps 2 to 3, then add the brand pass yourself.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Harvest category language | `google.keywords.ideas`, `bing.keywords.ideas`, `google.serp.autocomplete` | Keywords, volumes and what people type. |
| 2. Real buyer questions | `community.questions.find` | A mission. Questions asked about a topic in communities. |

The agent does steps 1, 3, 4 and 5 itself: framing, personas, the non-branded prompt set, the isolated brand pass, and building and checking the importer file.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. No id here is marked as needing approval.
