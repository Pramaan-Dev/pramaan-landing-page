---
skill: set-creator-benchmarks
author: maxwell-nimmo
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/maxwell-nimmo/set-creator-benchmarks
pramaan_skills: [social-media]
ids: [linkedin.user.posts, linkedin.company.posts, creators.performance.history]
---

# Run "Set creator benchmarks" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Build the comparable set: creator history | `linkedin.user.posts`, `creators.performance.history` | Public history. The skill prefers the team's own past campaigns. |
| 1. Build the comparable set: the brand's page | `linkedin.company.posts` | Baseline for the client. |

The agent does the ICP reach estimate (step 2), the conservative, target and stretch bands and the client framing itself, from the user's historical data.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
