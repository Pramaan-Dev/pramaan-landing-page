---
skill: reddit-account-health
author: yahav-fuchs
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/yahav-fuchs/reddit-account-health
pramaan_skills: [social-media]
ids: [reddit.user.profile, reddit.user.posts, reddit.user.comments, reddit.user-active.subreddits]
---

# Run "Reddit account health" with Pramaan

No Pramaan id reads an account's inbox or modmail, so bans, removals and rule notes cannot be classified from here. Pramaan can only read the account's public profile and public history.

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Read the signals: account standing | `reddit.user.profile` | Public profile, activity counts and join date. |
| Read the signals: did a comment disappear | `reddit.user.comments`, `reddit.user.posts` | Compare the public history with what the account posted. A missing comment is a removal until modmail says otherwise. |
| Membership | `reddit.user-active.subreddits` | Where the account is active. This is not the joined list. |

The agent classifies messages the user pastes from modmail and applies the circuit-breaker rule for suspensions itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything.
