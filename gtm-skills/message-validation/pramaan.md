---
skill: message-validation
author: ivan-falco
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ivan-falco/message-validation
pramaan_skills: [ads-marketing, social-media, apps-connections]
ids: [ads.leads.list, apps.catalog.search, apps.action.execute, ads.ads.list, ads.insights.get, ad.variants.make, linkedin.user.posts]
---

# Run "Message validation & ad scaling" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Phase 2: score the first 20 demos | `ads.leads.list` | Which ad each lead came from. Contains personal data. |
| Phase 2: score the first 20 demos | `apps.catalog.search`, `apps.action.execute` | Find the CRM's search action, then run it for each lead's demo and deal outcome. |
| Phase 3: identify the true top 3 ads | `ads.ads.list`, `ads.insights.get` | Every ad and its spend and results, to set beside the quality scores. |
| Phase 4: 10 variations of each winner | `ad.variants.make` | New sizes, translations or one varied element of a winning ad. |
| Organically validated ads | `linkedin.user.posts` | The user's own posts with engagement, to find what already worked. |

The agent lists the buyer situations, scores the meetings and writes the copy itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
