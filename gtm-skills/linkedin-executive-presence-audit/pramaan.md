---
skill: linkedin-executive-presence-audit
author: gaetano-romeo
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/gaetano-romeo/linkedin-executive-presence-audit
pramaan_skills: [social-media, people-companies]
ids: [linkedin.user.profile, linkedin.user.posts, lead.engagers.find]
---

# Run "LinkedIn executive presence audit" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Inputs to load: the profile | `linkedin.user.profile` | Headline, about and location. |
| Inputs to load: recent posts | `linkedin.user.posts` | Text, date, media and engagement. Feeds tests 2 to 4. |
| Test 5: audience quality | `lead.engagers.find` | Who reacted to or commented on one post. Run on a sample of posts. |

Saves and private analytics are not public. Use them only if the user provides them. The agent does the five tests, the conversion path check and the verdict itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
