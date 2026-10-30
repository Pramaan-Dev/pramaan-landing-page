---
skill: ambassador-finder
author: osnat-lidor
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/osnat-lidor/ambassador-finder
pramaan_skills: [web-search, people-companies, social-media]
ids: [people.discover, web.search, linkedin.search.posts, people.profile.details]
---

# Run "Ambassador finder" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Source candidates | `people.discover`, `web.search` | Describe the person in plain words: "former VP of X, now independent". Also search talks, podcasts and articles. |
| 2. Thought leadership and reach | `linkedin.search.posts` | Find who writes well-engaged posts in the field. |
| 3. Screen each candidate | `people.profile.details` | Past roles, independence, current work. Mark each criterion confirmed, likely or unverified. |

The agent does the clarifying (step 1), ranking and the shortlist itself. They need no superpower.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
