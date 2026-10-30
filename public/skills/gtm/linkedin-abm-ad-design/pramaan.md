---
skill: linkedin-abm-ad-design
author: emilia-korczynska
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/emilia-korczynska/linkedin-abm-ad-design
pramaan_skills: [ads-marketing, apps-connections]
ids: [ad.intel, ads.creative.brief, apps.catalog.search, apps.action.execute]
---

# Run "LinkedIn ABM ad design" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 3. Write the ad briefs | `ad.intel` | Optional. Competitors' ads from the public LinkedIn library, grouped into themes. |
| 3. Write the ad briefs | `ads.creative.brief` | Optional. Copy ideas from the user's best ads and competitors' public ads. Needs a connected ads account. Drafts only. |
| 6. Campaign database | `apps.catalog.search`, `apps.action.execute` | Find the Notion or Sheets action, then write one row per ad. Needs the app connected. |

The agent does steps 0 to 5 itself: finding the strategy, the campaign outline, the interview, the briefs, the HTML and PNG mockups, and the output folder. Pramaan does not render the mockups.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app, and here it also writes. The agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
