---
skill: bridge-before-cold
author: nadav-david
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/nadav-david/bridge-before-cold
pramaan_skills: [people-companies, social-media, web-search]
ids: [people.social-profiles.find, people.profile.details, linkedin.user.profile, linkedin.user.posts, linkedin.relation.get, linkedin.connections.list, linkedin.chats.list, companies.news, web.search]
---

# Run "Bridge before cold" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 4. A live network edge | `linkedin.relation.get`, `linkedin.connections.list` | Needs the user's connected LinkedIn account. |
| 5. A conversation already happened on a social channel | `linkedin.chats.list` | Sent messages in the user's connected LinkedIn account. |
| 6. A shared room: their profile | `people.social-profiles.find`, `people.profile.details`, `linkedin.user.profile` | Find the profile from an email, then read shared employers, schools and events. |
| 8. A why-now event | `companies.news`, `linkedin.user.posts`, `web.search` | A dated event or post you can cite. |

Rungs 1 to 3 and 7 come from the user's own inbox, CRM, revenue system and proof set, so the agent reads those directly. The agent picks the highest rung and writes the one-line premise itself. If no bridge can be sourced, it says the account is cold.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
