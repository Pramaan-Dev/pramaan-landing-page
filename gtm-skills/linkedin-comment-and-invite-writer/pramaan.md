---
skill: linkedin-comment-and-invite-writer
author: thomas-maitre
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/thomas-maitre/linkedin-comment-and-invite-writer
pramaan_skills: [social-media, ai-models]
ids: [linkedin.post.detail, linkedin.user.profile, linkedin.user.posts, outreach.linkedin.opener, text.rewrite, text.ai.detect]
---

# Run "LinkedIn comment and invite writer" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Write the comment | `linkedin.post.detail` | Read the post first. |
| 3. Write the note | `linkedin.user.profile`, `linkedin.user.posts` | Facts for one real line. Keep to 200 characters. |
| 4. First message | `outreach.linkedin.opener` | Draft checked against the profile. |
| 5. Anti-pattern pass | `text.rewrite`, `text.ai.detect` | Optional. Rewrite what the list flags. |

The agent does step 1 (the voice line) and the length checks itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything. The agent only writes drafts.
