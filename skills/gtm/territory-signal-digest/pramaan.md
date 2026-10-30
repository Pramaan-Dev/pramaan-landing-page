---
skill: territory-signal-digest
author: gal-tamir
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/gal-tamir/territory-signal-digest
pramaan_skills: [people-companies]
ids: [companies.enrich, companies.signals.bulk, company.hiring.signal, people.profile.details]
---

# Run "Territory signal digest" with Pramaan

The skill pulls its data through the Lusha connector. The Pramaan ids below cover most of the same pulls.

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Resolve accounts | `companies.enrich` | One company from its name or domain. List the ones that do not resolve. |
| 3. Pull signals: news, funding, launches | `companies.signals.bulk` | Newest dated signals for up to 200 domains in one job. |
| 3. Pull signals: hiring | `company.hiring.signal` | Open roles at one company and what they suggest. |
| 3. Pull signals: contact changes | `people.profile.details` | Current role and employment history for each key contact. |

Pramaan has no third-party intent-topic scores, so the skill's buying-intent pull has no id here. The agent does the scoring, triage and digest itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
