---
skill: signal-sourcer
author: alex-vacca
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/alex-vacca/signal-sourcer
pramaan_skills: [people-companies, social-media]
ids: [company.signals.find, companies.signals.get, companies.signals.monitor.create, contacts.changes.watch, company.visitors.identify, company.hiring.signal, company.techstack, companies.funding.signals]
---

# Run "Signal sourcer" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`company.signals.find` is a mission (several steps, one result). It finds companies with dated buying signals and checks their fit.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Read signals for one company | `companies.signals.get` | Newest verified signals. |
| Watch a company over time | `companies.signals.monitor.create` | Standing watch, billed per signal found. |
| Job changes | `contacts.changes.watch` | Standing paid watch. |
| Website visitors | `company.visitors.identify` | Companies on the site. |
| Hiring, tech stack, funding | `company.hiring.signal`, `company.techstack`, `companies.funding.signals` | One read per signal type. |

The agent does the signal scoring and stacking and the signal-to-action choice itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `companies.signals.monitor.create` starts a paid standing watch. The agent shows the exact inputs and waits for the user's yes.
3. `contacts.changes.watch` starts a paid standing watch. The agent shows the exact inputs and waits for the user's yes.
4. None of the other ids send or change anything.
