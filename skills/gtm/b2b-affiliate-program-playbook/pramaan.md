---
skill: b2b-affiliate-program-playbook
author: victor-moen
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/victor-moen/b2b-affiliate-program-playbook
pramaan_skills: [social-media, people-companies, web-search, email, ads-marketing, apps-connections]
ids: [linkedin.search.posts, lead.find, web.linking-domains.list, web.search, linkedin.user.posts, outreach.draft, google.serp.ads, apps.catalog.search, apps.action.execute]
---

# Run "B2B affiliate program playbook" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 5. Partner list: LinkedIn micro-influencers | `linkedin.search.posts` | Who posts often on the ICP's problems. |
| 5. Partner list: agencies and consultancies | `lead.find` | Companies that fit a description, each with a named contact and a checked work email. |
| 5. Partner list: review sites, newsletters, competitors' partners | `web.linking-domains.list`, `web.search` | Domains that link to competitors. Leave coupon sites out. |
| 5. Personal openers from recent content | `linkedin.user.posts` | One real line per partner. |
| 5. Outreach email | `outreach.draft` | A draft only. Nothing is sent. |
| 9. Fraud: brand bidding | `google.serp.ads` | Who runs search ads on the brand name. |
| 9. Partner audit | `apps.catalog.search`, `apps.action.execute` | Read the partner platform or CRM, if connected. Read actions only. |

No Pramaan id runs the LinkedIn side of the sequence or the partner platform itself. The agent does the partner personas, commission maths, cookie window, stack choice, onboarding emails, launch challenge and the top-20% plan itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `outreach.draft` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
3. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
4. None of the other ids send or change anything.
