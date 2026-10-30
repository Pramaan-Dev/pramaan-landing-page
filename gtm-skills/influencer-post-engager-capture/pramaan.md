---
skill: influencer-post-engager-capture
author: ariel-cohen
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ariel-cohen/influencer-post-engager-capture
pramaan_skills: [social-media, people-companies, apps-connections]
ids: [lead.engagers.find, linkedin.post.detail, linkedin.post.comments, linkedin.post.reactions, linkedin.post.react, linkedin.user.profile, companies.enrich, company.icp.score, apps.catalog.search, apps.action.execute]
---

# Run "Influencer post engager capture" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`lead.engagers.find` is a mission. It finds who reacted to or commented on a LinkedIn post. Use it for steps 2 to 3 when you have the post URL.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Verify the post is about your product | `linkedin.post.detail` | Reads text, author and engagement. |
| 1b. Like the post | `linkedin.post.react` | Needs a connected LinkedIn account. |
| 2. Get all engagers | `linkedin.post.comments`, `linkedin.post.reactions` | Comments and reactions on the post. |
| 3. Identify companies | `linkedin.user.profile` | One call per engager. |
| 4. Enrich, ICP gate, pipeline check | `companies.enrich`, `apps.catalog.search`, `apps.action.execute` | Search the CRM by company name. |
| 5. Score | `company.icp.score` | One company at a time. |
| 6. Post to the signals channel | `apps.action.execute` | Posts to a connected chat app. |

The agent does the engager filter, the dedup against earlier runs and the alert text itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `linkedin.post.react` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `apps.action.execute` runs one action in a connected app, and here it also writes. The agent shows the exact action and inputs and waits for the user's yes.
4. None of the other ids send or change anything.
