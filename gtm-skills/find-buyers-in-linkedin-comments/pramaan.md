---
skill: find-buyers-in-linkedin-comments
author: thomas-maitre
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/thomas-maitre/find-buyers-in-linkedin-comments
pramaan_skills: [people-companies, social-media]
ids: [lead.engagers.find, linkedin.search.posts, linkedin.post.detail, linkedin.post.comments, linkedin.post.reactions, linkedin.user.profile, people.enrich, text.classify, outreach.linkedin.opener, linkedin.invitation.send]
---

# Run "Find buyers in LinkedIn comments" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`lead.engagers.find` is a mission (several steps, one result). Give it one post. It returns who reacted and who commented. Use it from step 4 on, once you have chosen posts.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Write the searches | `linkedin.search.posts` | One call per query and language. Newest first. |
| 2. Filter on engagement | `linkedin.post.detail` | Reads reactions and comments for the post. Rank in code. |
| 3. Score the post | `text.classify` | Sort the post into your four buckets. |
| 4. Take the right people | `linkedin.post.comments`, `linkedin.post.reactions`, `linkedin.user.profile` | Commenters first, then reactors. Profile checks title and company. |
| 4. Fill gaps | `people.enrich` | Company and role from a profile link. |
| 5. Approach warm | `outreach.linkedin.opener`, `linkedin.invitation.send` | The opener is a draft. Sending an invite needs approval. |

The agent does the scoring rules and the order of approach itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `linkedin.invitation.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. None of the other ids send or change anything.
