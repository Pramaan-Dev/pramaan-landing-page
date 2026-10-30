---
skill: lead-form-optimization
author: ivan-falco
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ivan-falco/lead-form-optimization
pramaan_skills: [ads-marketing, people-companies]
ids: [lead.ads.capture, ads.leads.list, ads.performance.report]
---

# Run "Lead form optimization" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`lead.ads.capture` is a mission (several steps, one result). It returns new leads from the ad forms, each with the email checked, the title read and the employer looked up.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Step 2. Work email check: is it working | `lead.ads.capture` | Shows how many leads gave a real work email. |
| Mistake 6. Segment lead data by ad set | `ads.leads.list` | Leads from the forms, newest first. Contains personal data. |
| Friction framework: cost against quality | `ads.performance.report` | Spend and results by campaign, for cost per lead. |

Pramaan cannot edit Meta lead forms. The agent does the form type, the questions, the confirmation message and the friction choice itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything.
