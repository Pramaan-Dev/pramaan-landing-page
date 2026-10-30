---
skill: community-radar
author: ido-goldberg
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ido-goldberg/community-radar
pramaan_skills: [social-media, people-companies, ai-models]
ids: [brand.monitor, linkedin.search.posts, text.classify, people.enrich, company.icp.score]
---

# Run "Community radar" with Pramaan

This skill is built for the Swan workspace: a Swan schedule trigger feeds it mentions and it logs to Swan. Pramaan can still find the mentions, classify them, identify authors and check fit.

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| When this fires: find mentions | `brand.monitor` | Posts naming the brand across news and social right now, with themes. |
| When this fires: find mentions | `linkedin.search.posts` | LinkedIn posts by keyword, for competitor and pain wording. |
| 1. Classify the mention | `text.classify` | Sorts a mention into the skill's own classes, with a confidence. |
| 2. Identify the author | `people.enrich` | Role and company from a profile link. |
| 3. ICP and CRM context | `company.icp.score` | Fit of the author's company against the user's criteria. |

The agent does steps 4 to 6 itself: the responder, the reply draft and the reply or DM choice. Step 8 logs to Swan, which Pramaan does not write. No id here posts or sends a reply.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or post anything.
