---
skill: rfp-response
author: gali-firon
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/gali-firon/rfp-response
pramaan_skills: [web-search, people-companies]
ids: [company.research, web.read]
---

# Run "RFP response" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Qualify before you invest | `company.research` | Sourced profile of the issuing company: register record, news and site pages. |
| Structure the response to the scorecard | `web.read` | Pages the request links to. |

The agent does the bid or no-bid call, the deadline plan, the response and the status tracking itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. Nothing here sends anything.
