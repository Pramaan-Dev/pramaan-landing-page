---
skill: enrich-company
author: udi-cohen
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/udi-cohen/enrich-company
pramaan_skills: [people-companies, web-search]
ids: [company.research, companies.identify, companies.enrich, companies.registry.network.get, companies.funding-history, web.tech.detect, companies.signals.get, people.search-count]
---

# Run "Enrich a company" with Pramaan

This skill is built for Lusha and its company database. Pramaan can build the same profile from its own sources. It has no Lusha company ID and no Lusha signal score, so the score-60 filter does not apply.

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`company.research` is a mission (several steps, one result). It returns one sourced profile from a domain or name: register record, news, site pages, social page, technologies, open jobs and a summary. Use it when one profile is enough. It does not count contacts.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Resolve the company | `companies.identify` | Returns ranked matches. If two are close, ask the user, as the skill says. |
| 2. Firmographics | `companies.enrich` | Industry, size, founding year, location, links. |
| 2. Corporate structure | `companies.registry.network.get` | Parents and subsidiaries from official records, with ownership where disclosed. |
| 2. Funding | `companies.funding-history` | Rounds, dates, amounts and investors. |
| 2. Tech stack | `web.tech.detect` | Technologies seen on the company's website. Internal tools do not show up. |
| 2-3. Buying signals | `companies.signals.get` | Dated events with a source URL. Keep the last 90 days. |
| 2. Contact coverage by seniority | `people.search-count` | One count per seniority level at the company's domain. No contacts are returned. |

The agent triages signals, writes the profile and builds the comparison table for several companies itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything.
