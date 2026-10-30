---
skill: track-champion-job-changes
author: sung-jo
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/sung-jo/track-champion-job-changes
pramaan_skills: [people-companies, apps-connections]
ids: [people.changes.monitor.create, data.monitor.runs, data.monitor.run.read, people.enrich, linkedin.user.profile, companies.enrich, people.email.find, people.email.verify, apps.catalog.search, apps.action.execute]
---

# Run "Track champion job changes" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

This skill is built for Clay. Pramaan can do the watching, the role check and the email lookup without Clay. Step 0 (verify Clay) does not apply.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Collect the champion list | `apps.catalog.search`, `apps.action.execute` | From the connected CRM, with profile URLs. Otherwise ask for a CSV. |
| 3. Watch the list for job changes | `people.changes.monitor.create` | New job, title move, certification. Standing spend. Start with a few people. |
| 3. Read what changed | `data.monitor.runs`, `data.monitor.run.read` | Free to read. No notifications are sent: poll at the agreed cadence. |
| 3. Confirm the new role and company | `people.enrich`, `linkedin.user.profile`, `companies.enrich` | Check it is a real move, not a title tweak. Apply the ICP filter for the FOLLOW play. |
| 3. Find a new work email | `people.email.find`, `people.email.verify` | Skip unverified addresses. |

The agent does the interview, the plan and approval (step 2), the scale-up decision and the digest itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. `people.changes.monitor.create` starts a paid standing watch. The agent shows the exact inputs and waits for the user's yes. Test on a few people first, as the skill says.
4. None of the other ids send or change anything.
