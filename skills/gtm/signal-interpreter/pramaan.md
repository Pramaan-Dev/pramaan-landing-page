---
skill: signal-interpreter
author: din-arbel
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/din-arbel/signal-interpreter
pramaan_skills: [people-companies, web-search, ai-models]
ids: [account.signals.review, companies.signals.get, news.signals.search, companies.enrich, companies.jobs.search, people.search, llm.complete]
---

# Run "Signal interpreter" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`account.signals.review` is a mission. It reviews signal evidence on target companies. Use it when the signal is already tied to a company.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Relevance gate | `companies.enrich` | Does the company fit? |
| 2. Business event | `companies.signals.get`, `news.signals.search` | Dated events: funding, hiring, launches. |
| 2. Hiring signal | `companies.jobs.search` | Open roles at the company. |
| 3. Output. Relevant contacts | `people.search` | Search by persona and company domain. |
| 3. Write the interpretation | `llm.complete` | Optional. |

The agent does the strength, confidence and category judgement itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. No id here is marked as needing approval.
