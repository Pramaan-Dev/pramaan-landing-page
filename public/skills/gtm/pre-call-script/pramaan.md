---
skill: pre-call-script
author: dyanesh-perumal
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/dyanesh-perumal/pre-call-script
pramaan_skills: [people-companies, web-search, ai-models]
ids: [meeting.brief, person.public.brief, companies.news, web.search, llm.complete]
---

# Run "Pre-call script" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`meeting.brief` is a mission. It returns company and person profiles, news and a sourced brief. Use it for one prospect and one company.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Before you script. Research the person | `person.public.brief` | Mission. |
| Before you script. Company news | `companies.news` | News is dated by event. |
| Before you script. Extra context | `web.search` | |
| Build the script | `llm.complete` | Optional. Give it the research and your talk track. |

The agent does the script structure, the objection answers and the after-call notes itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. No id here is marked as needing approval. Nothing sends.
