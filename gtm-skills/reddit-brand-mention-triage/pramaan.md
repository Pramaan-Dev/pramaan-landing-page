---
skill: reddit-brand-mention-triage
author: yahav-fuchs
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/yahav-fuchs/reddit-brand-mention-triage
pramaan_skills: [social-media]
ids: [reddit.posts.search-public, reddit.post.detail, reddit.post.comments, text.sentiment.analyze, text.classify]
---

# Run "Reddit brand mention triage" with Pramaan

This skill is built for ReddGrow's mention monitor and queue. Pramaan has no mention queue, but it can search Reddit for the brand, read each thread and score tone.

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Set up monitoring | `reddit.posts.search-public` | One search per brand name and keyword. Leave out negative keywords in the query. Re-run at an agreed cadence. |
| Loop 2: read the mention and the live thread | `reddit.post.detail`, `reddit.post.comments` | Post and thread, before any verdict. |
| Loop 3: sentiment and intent | `text.sentiment.analyze`, `text.classify` | Tone, then reply, ignore or escalate as categories. The agent makes the final call. |

The agent keeps the handled list, writes the stats view and drafts any reply for a human to approve. Nothing is posted.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids post anything.
