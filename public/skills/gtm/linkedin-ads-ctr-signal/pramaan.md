---
skill: linkedin-ads-ctr-signal
author: brianne-thomas
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/brianne-thomas/linkedin-ads-ctr-signal
pramaan_skills: [ads-marketing, people-companies, email]
ids: [ads.account.connect, ads.campaigns.list, ads.ads.list, ads.insights.get, apps.catalog.search, apps.action.execute, companies.enrich, account.contacts.map, outreach.draft]
---

# Run "LinkedIn Ads CTR signal" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Find the active ad accounts | `ads.account.connect`, `ads.campaigns.list` | Connect once with a sign-in link. |
| 2. Company-level analytics | None | No Pramaan id returns which companies clicked the ads. Use the user's LinkedIn Ads export. |
| 3. Creative-level analytics | `ads.ads.list`, `ads.insights.get` | Clicks and impressions per ad. |
| 4. Calculate CTR and filter | None | The agent divides clicks by impressions. |
| 5. Suppression check | `apps.catalog.search`, `apps.action.execute` | Customers, open deals and recently touched accounts from the connected CRM. |
| 6. Per company: enrich, find buyers, draft | `companies.enrich`, `account.contacts.map`, `outreach.draft` | One company at a time. Drafts are saved in the user's inbox. |

Pramaan covers only part of this skill: the company-level click data, which is the core signal, must come from the user's export.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `outreach.draft` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
3. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
4. None of the other ids send or change anything.
