---
skill: scale-b2b-qualified-pipeline
author: ivan-falco
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ivan-falco/scale-b2b-qualified-pipeline
pramaan_skills: [ads-marketing, people-companies, apps-connections]
ids: [market.size, audience.keys.prepare, ads.audiences.report, ads.conversions.send, ads.library.search, ads.creative.fatigue, ads.performance.report, apps.catalog.search, apps.action.execute]
---

# Run "Scale qualified pipeline on Meta" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Map the market | `market.size` | Company and people counts for the target market, without pulling records. |
| 2. Structure the audiences: closed-won list | `audience.keys.prepare` | Hashed email and mobile keys for the user's own customers. It does not upload them. |
| 2. Structure the audiences: sizes | `ads.audiences.report` | Custom and lookalike audiences with the sizes Meta reports. |
| 3. Optimise by funnel event | `ads.conversions.send` | Sends qualified-lead events back to Meta. |
| 4. Creative process | `ads.library.search`, `ads.creative.fatigue` | Competitors' Meta ads, and the user's ads that are wearing out. |
| 6. Report on real SQLs | `ads.performance.report`, `apps.catalog.search`, `apps.action.execute` | Spend by campaign, then the CRM's search action run for SQLs. |

Pramaan does not create Meta audiences, lookalikes or campaigns. The user uploads the lists and builds them in Ads Manager. The agent does the tiers, step 5's segment tests and the pipeline maths itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `ads.conversions.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
4. None of the other ids send or change anything.
