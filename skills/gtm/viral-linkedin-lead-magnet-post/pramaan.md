---
skill: viral-linkedin-lead-magnet-post
author: pete-mientkiewicz
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/pete-mientkiewicz/viral-linkedin-lead-magnet-post
pramaan_skills: [social-media, ai-models]
ids: [linkedin.search.posts, social.post.validate.length, social.post.queue]
---

# Run "Viral LinkedIn Lead Magnet Post" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

This skill is writing. No superpower is needed to write the post.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 3. Hook angles: study comparable posts | `linkedin.search.posts` | Optional. Find recent giveaway posts and their comment counts. |
| 5. Self-score: check the length | `social.post.validate.length` | Length check before posting. |
| 5. Deliver: schedule it, only if asked | `social.post.queue` | Mission. Schedules into the next free slot on a connected account. |

The agent does intake, the hook, pain block, deliverable stack, CTA, media direction and first-comment draft itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `social.post.queue` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. None of the other ids send or change anything.
