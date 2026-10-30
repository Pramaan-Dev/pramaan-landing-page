---
skill: ai-personalization-prompts
author: alex-vacca
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/alex-vacca/ai-personalization-prompts
pramaan_skills: [ai-models, people-companies]
ids: [llm.complete, companies.enrich, web.read]
---

# Run "AI personalization prompts" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Get company facts for the prompt | `companies.enrich`, `web.read` | Profile from a domain, and the company's own pages. |
| Run each prompt (ICP, description, hook) | `llm.complete` | Send the skill's prompt with the facts. One call per prospect. |

The agent does the prompt writing and email templates itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
