---
skill: reddit-campaign-launcher
author: yahav-fuchs
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/yahav-fuchs/reddit-campaign-launcher
pramaan_skills: [social-media, ai-models]
ids: [subreddit.post.prepare, social.post.validate.subreddit, reddit.subreddit.posts, reddit.posts.search-public, llm.complete, social.reddit.subreddit.default.set, social.post.publish]
---

# Run "Reddit campaign launcher" with Pramaan

This skill is built for the ReddGrow CLI: campaigns, advocates and a draft queue. Pramaan has none of those. It can find threads, check subreddits, prepare drafts and, after the user's yes, publish to a connected account.

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Launch 2: vet target subreddits | `social.post.validate.subreddit` | Public or not, members, allowed post types. Check before the first post. |
| Launch 4: find threads | `reddit.posts.search-public`, `reddit.subreddit.posts` | Where the questions are. |
| Launch 4: draft | `subreddit.post.prepare`, `llm.complete` | A draft that fits the subreddit's limits and flairs. Nothing is posted. |
| Approval loop: pick the subreddit | `social.reddit.subreddit.default.set` | Sets the connected Reddit account's default subreddit. `social.post.publish` has no subreddit field, so set this before each post to a new subreddit. |
| Approval loop: post one approved draft | `social.post.publish` | Posts publicly from the user's connected Reddit account, to its default subreddit. It takes text and media only, with no separate title or flair. One draft per approval. |

The agent sets the mention framing, plays the advocate role with a low daily cap and runs the approve-or-skip loop with the user.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `social.reddit.subreddit.default.set` changes the connected Reddit account's default subreddit. The agent shows the exact inputs and waits for the user's yes.
3. `social.post.publish` posts publicly. The agent shows the exact inputs and waits for the user's yes. Never bulk-approve.
4. None of the other ids send or change anything.
