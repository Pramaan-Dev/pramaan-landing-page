---
skill: bridgebound-relationship-39
author: alex-vacca
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/alex-vacca/bridgebound-relationship-39
pramaan_skills: [people-companies, social-media]
ids: [companies.intro-paths.find, linkedin.connections.list, companies.founders.list, companies.portfolio.list, linkedin.company.employees]
---

# Run "Bridgebound relationship triggers" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Find warm paths into an account | `companies.intro-paths.find` | Uses the user's connected network. |
| Read the user's connections | `linkedin.connections.list` | Needs a connected LinkedIn account. |
| Shared VC or investor | `companies.portfolio.list` | Companies an investor has backed. |
| C-suite and founders | `companies.founders.list` | Founders with public profiles. |
| Employees, customers and advisors at an account | `linkedin.company.employees` | People who name the company as their current employer. It does not list former staff. |

The agent does the trigger choice and the referral message itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
