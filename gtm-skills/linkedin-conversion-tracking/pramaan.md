---
skill: linkedin-conversion-tracking
author: justin-rowe
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/justin-rowe/linkedin-conversion-tracking
pramaan_skills: [ads-marketing, developer-tools]
ids: [ads.tracking-tag.status, ads.tracking-tag.install, ads.conversions.send, web.read]
---

# Run "LinkedIn conversion tracking" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Pillar 1. Is the tag installed | `ads.tracking-tag.status` | Read-only. Only for a connected store or site. |
| Pillar 1. Check the thank-you page | `web.read` | Read the page text for the tag or event. |
| Pillar 1. Install the tag | `ads.tracking-tag.install` | Changes a live site or store. Not every platform is supported. |
| Pillar 2. Send server-side events | `ads.conversions.send` | Check the ad platform is supported first. Customer identity is personal data. Use stable event ids. |

The agent does the advice itself: offline uploads, the Revenue Attribution Report, windows, match rates, deduplication and troubleshooting. Those are set up in LinkedIn's own tools. Most of this skill is explanation.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `ads.conversions.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `ads.tracking-tag.install` changes a live site. The agent shows the exact inputs and waits for the user's yes.
4. None of the other ids send or change anything.
