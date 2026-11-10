---
title: "How to clean a lead list before you send anything"
description: "For sales and RevOps teams: check every row, spot duplicates and bad addresses, audit the list for risk and grade lead quality before you email."
author: "Pramaan"
date: 2026-11-10
audience: business
roles: [sales]
draft: false
og:
  tag: "For sales teams"
  steps:
    - "Hand over the list"
    - "Check every row"
    - "Audit for risk"
    - "Grade lead quality"
---

If you run outbound, one dirty list can hurt you for weeks. Bounced emails, duplicates and typos make your sending domain look careless, and the replies you wanted never arrive. With Pramaan you hand over the list and get every row checked, a risk audit of the whole list, and a quality grade for the leads. You find the problems before you hit send.

## Why does a dirty list cost so much?

Because mailbox providers watch how many of your emails bounce. A list full of dead addresses tells them you don't know who you're writing to.

The cleanup is dull work, so it gets skipped. Someone scrolls the sheet, spots a few obvious errors, and sends anyway.

## What changes with Pramaan?

Every row gets checked one by one and comes back with a status and a reason. You see which addresses are duplicates, malformed or undeliverable. For a bigger list, a separate audit adds delivery and risk signals, and a quality report grades the leads themselves.

## What does it look like, step by step?

**You ask:** "Clean this list of leads before I send Monday's campaign."

**Pramaan checks each row.** The [Check and clean a lead list](/missions/lead.list.clean) mission goes through your rows one by one. Every row comes back by its position in the list, with a status and a reason. Duplicates, malformed addresses and undeliverable addresses are marked, so you know exactly which rows to fix or drop. Each address gets a mailbox check, and its domain gets a DNS lookup.

**Pramaan audits the whole list.** [Audit an email list for risk](/missions/email.list.audit) checks a list for mailbox delivery and risk signals. It analyzes the list, verifies and inspects the mailboxes, and runs threat and toxicity checks. It names the concerning rows and can request cleanup of the saved list. This one needs approval, because its last steps read the saved list and can remove it. It waits for your approval before it runs.

**Pramaan grades the leads.** [Grade the quality of your leads](/missions/lead.quality.report) scores the lead records. It gives separate readings for each mailbox, notes about each address, and a list of repair tasks. Behind the grade are readings on each address's quality, reputation, activity, sources and signals.

**You send to a list you trust.** Drop the flagged rows, fix the repair tasks, and send.

## How do I phrase the ask?

Name the list, say where it sits, and say when you plan to send. Hand it over in the form you have it. Results come back by row position, so keep a copy of the original order and don't sort it while you work.

## What if I already send to this list every week?

Use [Clean a mailing list](/missions/email.list.hygiene). It needs no approval. It keeps only verified addresses that aren't suppressed, and it records confirmed bounces and complaints as suppressions, so those addresses stay off later sends.

## What does each check tell me?

Each check answers a different question, so use them in order.

<table>
<tr><th>Mission</th><th>The question it answers</th></tr>
<tr><td>Check and clean a lead list</td><td>Which rows are duplicates, malformed or undeliverable?</td></tr>
<tr><td>Audit an email list for risk</td><td>Which addresses carry delivery or risk signals?</td></tr>
<tr><td>Grade the quality of your leads</td><td>How good are the lead records, and what needs repair?</td></tr>
</table>

For a small list, the row check alone may be enough. For a list you plan to send to thousands of people, run all three.

## What does a checked row look like?

Each row comes back with its position, a status and a reason. Here are three flagged rows from a made-up list:

<table>
<tr><th>Row</th><th>Status</th><th>Reason</th></tr>
<tr><td>4</td><td>Duplicate</td><td>Same address as row 1</td></tr>
<tr><td>9</td><td>Malformed</td><td>No domain after the @ sign</td></tr>
<tr><td>15</td><td>Undeliverable</td><td>The mailbox check found no mailbox for this address</td></tr>
</table>

Drop the undeliverable rows and keep one copy of each duplicate. Fix a malformed row by hand when you can see the typo, and drop it when you can't. Then run the audit on what is left.

## What else can my team ask for?

- "Find work emails for these named people." This runs [Find work emails for a list of people](/missions/lead.emails.find-bulk).
- "Guess this person's email from the company's pattern, then check it." This runs [Guess and check a work email](/missions/lead.email.guess).
- "Clean my mailing list and record bounces." This runs [Clean a mailing list](/missions/email.list.hygiene).

## Questions sales teams ask

**Do I need a developer?**
No. You hand over the list and ask in plain words.

**Will it email anyone?**
No. These missions check addresses and report. They don't send messages.

**Is my list safe?**
The risk audit reads the saved list and can request its removal. Because that changes something that lasts, it waits for your approval.

**What if a row can't be checked?**
It comes back with a status and a reason. You see what was unclear instead of getting a quiet pass.

**Which check do I run first?**
Start with the row check. It reads and reports, and it shows you the worst rows fast. Add the audit and the quality report when the list is large or the campaign matters.

**Does it work with our CRM?**
The checks here work on a list you hand over. [Enrich a CRM record](/missions/crm.record.enrich) works on one record in a CRM you have connected. It fills only empty fields, never overwrites a value already there, and needs approval.

**How big is the catalogue?**
There are 891 missions and 10,428 superpowers today. [Browse the missions](/missions).

[Get early access](/#start) and clean your next list before it costs you a sending domain.
