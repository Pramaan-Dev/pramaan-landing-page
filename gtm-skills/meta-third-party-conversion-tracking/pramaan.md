---
skill: meta-third-party-conversion-tracking
author: ivan-falco
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ivan-falco/meta-third-party-conversion-tracking
pramaan_skills: [ads-marketing]
ids: [ads.tracking-tag.status]
---

# Run "Meta off-domain conversion tracking" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Where to track: thank-you page option | `ads.tracking-tag.status` | Whether the tag is installed on the user's own connected site. |

Pramaan cannot add a pixel inside Luma or another event platform, or pass UTMs through a signup link. The agent writes the setup steps and the message to the platform owner itself.

## Before running

1. Quote `ads.tracking-tag.status` first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. Nothing here sends or changes anything.
