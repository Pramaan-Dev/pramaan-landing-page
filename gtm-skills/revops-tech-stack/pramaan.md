---
skill: revops-tech-stack
author: rutger-katz
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/rutger-katz/revops-tech-stack
pramaan_skills: [apps-connections, web-search]
ids: [apps.connections.list, apps.definitions.list, web.tech.detect, web.search]
---

# Run "RevOps tech stack" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

Mostly evaluation and design. Superpowers help to see what is already connected and to research tools.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Stack audit: inventory | `apps.connections.list` | Shows the apps the user has connected to Pramaan. It is not the full stack; ask for the rest. |
| Stack audit: tools on the website | `web.tech.detect` | Lists technologies seen on the company's own site, such as analytics or chat. Internal tools do not show up. |
| Check which apps Pramaan can connect to | `apps.definitions.list` | Needs a connected account. |
| Evaluate a tool | `web.search` | Pricing, reviews and integrations. |

The agent does usage analysis, capability mapping, value assessment, the buy-or-not call and the integration map itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything.
