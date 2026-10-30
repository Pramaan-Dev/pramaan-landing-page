---
skill: linkedin-post-to-newsletter
author: daniel-bustamante
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/daniel-bustamante/linkedin-post-to-newsletter
pramaan_skills: [social-media, ai-models]
ids: [linkedin.post.detail, llm.complete]
---

# Run "LinkedIn post to newsletter" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Read the source post | `linkedin.post.detail` | Use it when you have a post URL. Returns text, author and engagement. |
| Rewrite as a newsletter | `llm.complete` | Optional. |

The agent does the rewrite and the format choices itself. If you paste the post text, no superpower is needed.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. No id here needs approval.
