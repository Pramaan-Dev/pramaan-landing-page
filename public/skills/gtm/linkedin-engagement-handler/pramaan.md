---
skill: linkedin-engagement-handler
author: ariel-cohen
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ariel-cohen/linkedin-engagement-handler
pramaan_skills: [social-media, people-companies, email, apps-connections]
ids: [linkedin.post.comments, linkedin.post.reactions, linkedin.user.profile, companies.enrich, company.icp.score, linkedin.invitation.send, outreach.sequence.draft, apps.catalog.search, apps.action.execute]
---

# Run "LinkedIn engagement handler" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Read new comments and reactions | `linkedin.post.comments`, `linkedin.post.reactions` | Comments get the full treatment. Likes get a light CRM log. |
| Identify the person and company | `linkedin.user.profile`, `companies.enrich` | Headline first, then the company profile. |
| 1. Check relationship status | `apps.catalog.search`, `apps.action.execute` | Customer, pipeline or new. |
| 2 and 3. Mark awareness stage, update the CRM | `apps.action.execute` | Writes to the CRM. |
| 4. Lead scoring | `company.icp.score` | Fit against the user's criteria. |
| 5. Connection request, high-value path only | `linkedin.invitation.send` | No note, as the skill says. Needs a connected LinkedIn account. |
| Repeated engagement: build a sequence | `outreach.sequence.draft` | Email part only: three drafts in the user's inbox. |
| 6. Post to the engagement channel | `apps.action.execute` | Posts to a connected chat app. |

The agent does the ICP and persona gating and the alert wording itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `linkedin.invitation.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `outreach.sequence.draft` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
4. `apps.action.execute` runs one action in a connected app, and here it also writes. The agent shows the exact action and inputs and waits for the user's yes.
5. None of the other ids send or change anything.
