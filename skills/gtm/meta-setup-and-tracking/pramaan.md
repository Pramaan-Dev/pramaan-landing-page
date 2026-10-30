---
skill: meta-setup-and-tracking
author: ivan-falco
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ivan-falco/meta-setup-and-tracking
pramaan_skills: [ads-marketing]
ids: [ads.account.connect, ads.tracking-tag.install, ads.tracking-tag.status]
---

# Run "Meta Ads setup & tracking" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Where things live: the ad account | `ads.account.connect` | Sign-in link for the owner, then the ad accounts are read back. |
| 1.2 Install the pixel on the website | `ads.tracking-tag.install` | On a connected store or site. Webflow needs a site publish afterwards; this call never publishes. |
| 1.3 Verify the pixel | `ads.tracking-tag.status` | Whether the tag is installed. Test events still run in Events Manager. |

Pramaan does not create the pixel, set up events or verify the domain. Steps 1.1, 2 and 3 run in Events Manager and Business Settings.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `ads.tracking-tag.install` changes a live site. The agent shows the exact inputs and waits for the user's yes.
3. None of the other ids send or change anything.
