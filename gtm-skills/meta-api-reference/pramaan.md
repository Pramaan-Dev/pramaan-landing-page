---
skill: meta-api-reference
author: ivan-falco
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ivan-falco/meta-api-reference
pramaan_skills: [ads-marketing]
ids: [ads.account.connect.start, ads.accounts.list, ads.campaigns.list, ads.ad-sets.list, ads.ads.list, ads.targeting.search, ads.audiences.list, ads.insights.get, ads.conversions.send, ads.catalog-ad.create]
---

# Run "Meta Marketing API reference" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

This skill is a reference to Meta's raw API. Pramaan does not expose those endpoints. These ids cover parts of it on a connected Meta account.

| Skill step | Pramaan id | Notes |
|---|---|---|
| Configuration: access | `ads.account.connect.start` | A sign-in link for the account owner, instead of a token in a file. |
| Account hierarchy | `ads.accounts.list` | Ad accounts with name, currency and balance. |
| Campaign, ad set and ad schemas: reading | `ads.campaigns.list`, `ads.ad-sets.list`, `ads.ads.list` | Read-only, with status, budget and results. |
| Targeting spec | `ads.targeting.search` | Interest and other targeting options and their availability. |
| Custom audience schema: reading | `ads.audiences.list` | Custom and lookalike audiences with size. |
| Insights and reporting | `ads.insights.get` | Spend, reach, clicks and conversions, in total and per day. |
| Conversions API | `ads.conversions.send` | Server-side events. Use stable event ids. |
| Ad schema: catalog ads only | `ads.catalog-ad.create` | A catalog-template ad, created paused in an existing ad set. |

Creating campaigns, ad sets, creatives and audiences, uploads, reach estimates and status changes have no Pramaan id. The agent uses the API reference in the skill for those.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `ads.conversions.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `ads.catalog-ad.create` creates a paused ad. The agent shows the exact inputs and waits for the user's yes.
4. None of the other ids send or change anything.
