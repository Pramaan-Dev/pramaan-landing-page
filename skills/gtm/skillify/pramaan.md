---
skill: skillify
author: ido-goldberg
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ido-goldberg/skillify
pramaan_skills: []
ids: []
---

# Run "Skillify" with Pramaan

The skill says what to do. This page says which Pramaan calls do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan call | Notes |
|---|---|---|
| 5. Confirm each id the new skill names | `describe_capability`, `describe_outcome` (MCP), or `GET /v1/capabilities/{id}`, `GET /v1/outcomes/{id}` | Free reads. Only ids the conversation used go into the new skill's `pramaan.md`. |

The agent does the rest itself: reconstructing the procedure, generalising it, and writing the files into the skills folder.

## Before running

1. Nothing here sends anything or costs anything.
2. The agent confirms the name, category and scope before it writes any file.
