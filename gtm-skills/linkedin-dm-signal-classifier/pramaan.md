---
skill: linkedin-dm-signal-classifier
author: ariel-cohen
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ariel-cohen/linkedin-dm-signal-classifier
pramaan_skills: [social-media, people-companies, ai-models, apps-connections]
ids: [linkedin.chats.list, linkedin.chat.messages.list, linkedin.user.profile, llm.complete, companies.enrich, company.icp.score, apps.catalog.search, apps.action.execute]
---

# Run "LinkedIn DM signal classifier" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Fetch chats since the cursor | `linkedin.chats.list` | Newest first, with unread counts. Needs a connected LinkedIn account. |
| 3. Read messages | `linkedin.chat.messages.list` | One call per chat. |
| 4. Identify the company | `linkedin.user.profile`, `companies.enrich` | Headline first, then enrich. |
| 5. Classify into a bucket | `llm.complete` | Pass the thread and the bucket list. |
| 6. Score mid-deal and pipeline signals | `company.icp.score` | Mission. |
| 6. Update CRM, post to channels | `apps.catalog.search`, `apps.action.execute` | |

The agent does the cursor, the dedup, the eval mode and the account memory updates itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app, and here it also writes. The agent shows the exact action and inputs and waits for the user's yes. DMs are private, so keep them out of shared channels unless the skill says to post them.
3. None of the other ids send or change anything.
