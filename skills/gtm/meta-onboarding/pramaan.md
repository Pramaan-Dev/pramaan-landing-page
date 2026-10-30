---
skill: meta-onboarding
author: ivan-falco
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ivan-falco/meta-onboarding
pramaan_skills: [ads-marketing]
ids: [ads.account.connect, ads.ads.list]
---

# Run "Meta ads onboarding" with Pramaan

This skill sets up Meta API access for the skill pack's own scripts: a developer app, a token and a `.env` file. With Pramaan, connecting the ads account replaces that setup.

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Steps 2 and 3: API access and the .env | `ads.account.connect` | The account owner signs in, and the ad accounts are read back to prove it. No token to copy. |
| Step 4: test the connection | `ads.ads.list` | Lists the active ads, as the skill's test script does. |

The agent does the welcome and the next-step suggestions itself. The skill's own scripts still need the token if the user wants them.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything.
