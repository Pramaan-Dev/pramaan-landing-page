---
skill: post-radar
author: ido-goldberg
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ido-goldberg/post-radar
pramaan_skills: [social-media, people-companies, apps-connections]
ids: [lead.engagers.find, people.enrich, company.icp.score, apps.catalog.search, apps.action.execute, linkedin.post.detail, outreach.linkedin.opener]
---

# Run "Post radar" with Pramaan

This skill is built for the Swan workspace: a Swan LinkedIn engagement trigger feeds it and it logs to Swan. Pramaan can still find the engagers, enrich and check them, read the post and draft the reply.

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| When this fires: who engaged | `lead.engagers.find` | People who reacted to or commented on one post. Stands in for the Swan trigger. |
| 2. Enrich the engager | `people.enrich` | Title and company from the profile link. |
| 3. ICP fit | `company.icp.score` | Fit of the engager's company. |
| 3. CRM relationship | `apps.catalog.search`, `apps.action.execute` | Find the CRM's contact search action, then run it for the engager. |
| 4. Read the post they engaged with | `linkedin.post.detail` | Text, author and engagement. |
| 6. Draft the response | `outreach.linkedin.opener` | A short LinkedIn message from their profile and posts. The text is returned, never sent. |

The agent does steps 1 and 5 itself: the noise filter and the channel choice. Steps 7 and 8 use Swan's sequence and logging tools.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
