---
skill: draft-creator-campaign-brief
author: maxwell-nimmo
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/maxwell-nimmo/draft-creator-campaign-brief
pramaan_skills: [social-media, ai-models]
ids: [linkedin.user.profile, linkedin.user.posts, creator.profile, llm.complete]
---

# Run "Draft creator campaign brief" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 3. Pull the creator's examples | `linkedin.user.profile`, `linkedin.user.posts` | Pick 3 recent high performers. Read them for tone and topics. |
| 3. Other platforms | `creator.profile` | Optional. |
| 4. Write the four-part brief | `llm.complete` | Optional. |

The agent does the guardrails (step 1), the depth setting (step 2), and the messaging direction, guidelines and dos and don'ts itself, from the client's ideal customer.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
