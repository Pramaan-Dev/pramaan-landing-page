---
skill: personalization-6-buckets
author: alex-vacca
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/alex-vacca/personalization-6-buckets
pramaan_skills: [people-companies, social-media, web-search]
ids: [person.public.brief, linkedin.user.posts, linkedin.user.profile, linkedin.user.comments, people.profile.details, companies.news, web.search]
---

# Run "6 buckets of personalization" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`person.public.brief` is a mission (several steps, one result). It returns public professional facts and a short sourced brief for one named person.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Self-authored content | `linkedin.user.posts`, `web.search` | Their posts, articles and talks. |
| 2. Engaged content | `linkedin.user.comments` | What they comment on. |
| 3. Self-identified traits | `linkedin.user.profile` | Headline and about text. |
| 5. Background | `people.profile.details` | Employment and education. |
| 6. Company level | `companies.news` | Dated news. Check the date. |

The agent does the bucket choice (4 is a free-form drawer) and the fallback relevance itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
