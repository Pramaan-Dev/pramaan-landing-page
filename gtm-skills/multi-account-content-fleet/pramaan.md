---
skill: multi-account-content-fleet
author: vesselin-malev
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/vesselin-malev/multi-account-content-fleet
pramaan_skills: [social-media, ai-models]
ids: [social.post.draft, social.posts.list, text.ai.detect]
---

# Run "Multi-account content fleet" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Write per account | `social.post.draft` | One draft per connected platform from a brief, not one per account. Run it once per account brief. Nothing is published. |
| Stagger the surface | `social.posts.list` | See what is already scheduled per account. |
| Watch correlation | `text.ai.detect` | Check drafts do not read as one machine voice. |

The agent does the fingerprints, the engagement plan and the correlation checks itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids publish anything.
