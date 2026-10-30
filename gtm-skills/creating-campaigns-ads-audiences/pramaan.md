---
skill: creating-campaigns-ads-audiences
author: ivan-falco
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ivan-falco/creating-campaigns-ads-audiences
pramaan_skills: [ads-marketing]
ids: [ads.account.connect, ads.accounts.list, ads.audiences.list, ads.targeting.search, ads.catalog-ad.create]
---

# Run "Create Meta campaigns & audiences" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Before step 1: pick the ad account | `ads.account.connect`, `ads.accounts.list` | Connect by sign-in link, then list the ad accounts behind it. |
| 1. Audiences | `ads.audiences.list` | Existing custom and lookalike audiences, with size. It does not create audiences. |
| 3. Ad set: targeting | `ads.targeting.search` | Interest and other targeting options to put in the ad set. |
| 5. Ad | `ads.catalog-ad.create` | Catalog-template ads only, created paused in an existing ad set. Preview by default. |

Pramaan cannot create Meta campaigns, ad sets, creatives or custom audiences, or switch anything live. Steps 2, 3, 4 and 6 run with the skill's own scripts or in Ads Manager.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `ads.catalog-ad.create` creates a paused ad. The agent shows the exact inputs and waits for the user's yes.
3. None of the other ids send or change anything.
