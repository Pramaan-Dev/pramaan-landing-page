---
skill: never-guess-an-email
author: lucas-godtfredsen
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/lucas-godtfredsen/never-guess-an-email
pramaan_skills: [people-companies, email, developer-tools]
ids: [people.email.find-published, companies.emails.search, security.dns.lookup, people.email.verify, people.linkedin.find, company.contact.channels.find, email.suppression.add]
---

# Run "Never guess an email" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Take only what was published | `people.email.find-published`, `companies.emails.search` | Both return only addresses seen on public pages. Do not use finders that build an address from a name pattern. |
| 2. Check the domain can receive mail | `security.dns.lookup`, `people.email.verify` | MX records first, then the mailbox check. |
| 3. Rank the role inboxes | `companies.emails.search` | The published addresses for the domain. The agent ranks them. |
| 5. No address: route | `people.linkedin.find`, `company.contact.channels.find` | A LinkedIn page, or the company's published channels. |
| 6. Suppress on a hard bounce or dead domain | `email.suppression.add` | Only for mail sent through Pramaan. It changes your suppression list. |

The agent does step 4 (writing to a reception desk) and the routing decision itself: send, switch channel, or mark unreachable and say so.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `email.suppression.add` changes your suppression list. The agent shows the exact inputs and waits for the user's yes.
3. None of the other ids send or change anything.
