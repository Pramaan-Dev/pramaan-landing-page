---
skill: email-deliverability
author: joshua-waldman
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/joshua-waldman/email-deliverability
pramaan_skills: [email, developer-tools]
ids: [email.domain.check, email.deliverability.fix, security.domain.email-auth, security.dns.lookup, security.ip.reputation, email.domain.get, email.events.list, email.suppressions.list, people.email.verify-bulk]
---

# Run "Email deliverability" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`email.domain.check` is a mission. It reads a domain's mail servers and SPF and the reputation of its addresses. It does not check DMARC or DKIM, so add `security.domain.email-auth`. `email.deliverability.fix` repairs an owned sending domain and sends a test. It needs approval.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Scope: what happened | `email.events.list`, `email.suppressions.list` | Only for mail sent through Pramaan. Bounces and complaints. |
| 3. Authentication pillar | `security.domain.email-auth`, `security.dns.lookup`, `email.domain.get` | SPF, DKIM, DMARC and the domain's verification status. |
| 3. Reputation pillar | `security.ip.reputation` | Blocklist and reputation for the sending IP. |
| 3. List pillar | `people.email.verify-bulk` | Clean the list before the next send. |
| 4. Fix | `email.deliverability.fix` | Applies DNS changes and sends a test. |

The agent does the mode choice, the content pillar, the delist plan and the monitoring thresholds itself. Open rates by provider come from the user's sending tool.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `email.deliverability.fix` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. None of the other ids send or change anything.
