---
skill: clear-my-desk
author: ido-goldberg
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ido-goldberg/clear-my-desk
pramaan_skills: [email, social-media, people-companies]
ids: [email.drafts.list, social.posts.list, social.post.approval.review, social.accounts.health, data.monitor.list, data.monitor.runs, research.jobs.review]
---

# Run "Clear my desk" with Pramaan

The skill says what to do. This page says which Pramaan calls do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan call | Notes |
|---|---|---|
| 1. Calls waiting for approval | `GET /v1/approvals`, `GET /v1/approvals/{id}` | Account calls, not superpowers, and free. Each shows the action, its inputs and the maximum price. |
| 2. Unsent email drafts | `email.drafts.list` | Subjects and previews, with a handle per draft. |
| 2. Social posts: drafts, awaiting review, failed | `social.posts.list` | Filter by status. |
| 2. Monitors | `data.monitor.list`, `data.monitor.runs` | Each monitor, then its recent runs: failed or empty ones. |
| 2. Social accounts to reconnect | `social.accounts.health` | Connected or not; it does not test posting. |
| 2. Old research runs | `research.jobs.review` | Lists runs and offers to delete old finished ones. |
| 5. Decide an approval | `POST /v1/approvals/{id}/decide` | Approve or deny one call. Only a member who may approve can do this. |
| 5. Review a social post | `social.post.approval.review` | Approve or reject one post. |
| 5. A running job the user wants stopped | `POST /v1/jobs/{id}/cancel` | Account call. |

The agent does the bucketing, the report and the counts itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `POST /v1/approvals/{id}/decide` runs or refuses a real call. The agent shows the exact call, inputs and price and waits for the user's yes, one decision at a time.
3. `social.post.approval.review` needs approval. The agent shows the exact inputs and waits for the user's yes.
4. `research.jobs.review` needs approval. The agent shows the exact inputs and waits for the user's yes.
5. None of the other ids send or change anything.
