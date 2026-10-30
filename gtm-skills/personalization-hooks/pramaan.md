---
skill: personalization-hooks
author: alex-vacca
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/alex-vacca/personalization-hooks
pramaan_skills: [social-media, ai-models]
ids: [linkedin.user.posts, llm.complete]
---

# Run "Personalization hooks" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Get something to quote | `linkedin.user.posts` | A member's recent posts. |
| Write the hook | `llm.complete` | Optional. The agent can write it directly. |

The agent does the strong or lite hook choice itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
