---
skill: google-ads-write-safety
author: john-williams
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/john-williams/google-ads-write-safety
pramaan_skills: [ads-marketing]
ids: [ads.campaigns.list, ads.insights.get]
---

# Run "Google Ads write safety" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

This skill is a set of rules for the agent, not a task. No superpower is needed. Use these two read-only ids to show the current value in a preview:

| Skill step | Pramaan id | Notes |
|---|---|---|
| 4. Preview: current value | `ads.campaigns.list`, `ads.insights.get` | Show the value before and after, and the money affected. |

The agent does every other step itself: the blast-radius label, propose-only default, confirmation tied to the preview and the receipt. The catalogue lists no Google write id here. For any write the agent could use, the same rules apply.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids change anything.
