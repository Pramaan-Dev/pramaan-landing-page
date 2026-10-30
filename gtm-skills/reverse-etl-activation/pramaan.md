---
skill: reverse-etl-activation
author: austin-hay
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/austin-hay/reverse-etl-activation
pramaan_skills: [apps-connections, documents-files, email]
ids: [csv.prepare, companies.domain.find, people.email.verify, people.email.disposable, prospect.exclusions.sync, crm.leads.push, apps.catalog.search, apps.action.execute]
---

# Run "Reverse ETL activation" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Inputs. Load the audience export | `csv.prepare` | Pramaan has no warehouse reader. Export from BigQuery, Snowflake or Redshift as CSV first. |
| 1. Resolve identity before writing | `companies.domain.find`, `apps.catalog.search`, `apps.action.execute` | Match on the sync key against destination records. |
| 3. Type and format guards | `people.email.verify`, `people.email.disposable` | Check emails before they sync. |
| 4. Suppression and consent | `prospect.exclusions.sync` | A mission. Appends customers and opt-outs to an exclusion list. |
| 7. Live sync to the CRM | `apps.action.execute`, `crm.leads.push` | `crm.leads.push` suits found company leads. |

The agent does step 2 (the change diff), step 5 (batching), step 6 (the dry run and max-delete guard) and the reconciliation report itself.

Pramaan covers only part of this skill: it has no warehouse reader, and no id here syncs audiences to ad platforms or enrolls contacts in a sequencer.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `crm.leads.push` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `apps.action.execute` runs one action in a connected app, and here it also writes. The agent shows the exact action and inputs and waits for the user's yes.
4. `prospect.exclusions.sync` changes an exclusion list. The agent shows the exact inputs and waits for the user's yes.
5. None of the other ids send or change anything.
