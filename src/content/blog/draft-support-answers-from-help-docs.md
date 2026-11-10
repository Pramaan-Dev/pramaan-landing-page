---
title: "How to draft support answers from your help docs"
description: "For support teams: turn a customer message into a draft reply built only from your own help documents, with every sentence checked. Nothing is sent."
author: "Pramaan"
date: 2026-11-05
audience: business
roles: [customer-success]
draft: false
og:
  tag: "For support teams"
  ask: "Draft a reply to this customer from our help docs"
  done: "Draft saved in your inbox, nothing sent"
---

If you lead support, you know the loop. A customer asks something your help docs already answer, and an agent spends ten minutes finding the page and rewording it. With Pramaan you point at the message, and a draft reply is written from your own documents. Each sentence is checked against the passage it came from. The draft is saved in your inbox and nothing is sent.

## Why do support answers take so long to write?

The answer exists, but finding it and fitting it to this customer takes time. The same ten questions come back every week.

The risk runs the other way too. A fast reply that guesses at a refund rule or a timeline causes more tickets than it closes.

## What changes with Pramaan?

The reply is built from your documents only. A policy, price, refund or timeline appears in the draft only when a passage you stored, or notes you gave, say so. If the documents don't cover the question, there is nothing to cite.

## How do I draft an answer for an email?

Use the [Draft a support answer from your documents](/missions/support.answer.draft) mission. It needs the inbox, the ID of the message to reply to, and the index that holds your help documents. Your documents have to be stored there first.

**You ask:** "Draft a reply to this message in the support inbox from our help docs."

**Pramaan plans.** The mission reads the email thread and your document index. By default it looks at up to 8 matching passages and rests the reply on up to 3. You can raise those to 20 and 5.

**It picks the tools.** Each step is a superpower, a single action with a fixed request and result. One turns the question into a search, one finds matching passages in your index, one ranks them against the question, one writes the reply, and the last saves it as a draft in the inbox. Each sentence of the reply is checked against the passage it cites.

**You see the proof.** The draft is saved in the inbox. You read it, edit it and send it yourself.

This mission does not need approval, because it only saves a draft. Sending stays a separate step.

You can add notes of your own, up to 2,000 characters: a tone, an offer, a policy. The reply treats your notes as a source of fact too.

## What does a draft look like?

Here is a made-up example. The customer, the policy and the passage are invented to show how the check works.

<table>
<tr><th>Draft sentence (made up)</th><th>Passage it cites</th></tr>
<tr><td>You can return an unopened item within 30 days.</td><td>Returns page: "Unopened items can be returned within 30 days."</td></tr>
<tr><td>Refunds go back to your original payment method.</td><td>Returns page: "Refunds are sent to the original payment method."</td></tr>
<tr><td>We will refund you within 2 days.</td><td>No passage found. A sentence like this should not stay in the draft.</td></tr>
</table>

The last row is what the check is for. A timeline with no passage behind it is the kind of guess that causes a second ticket. If your documents don't state it, the draft shouldn't either, and you should read every draft before it goes out.

## How do I draft an answer for a ticket?

Use the [Draft an answer to a support ticket](/missions/ticket.answer.draft) mission. It works from a ticket in a connected ticket app, and from a document index you already have. You give the ticket, the expected company on it, and the document collection to draw from.

This mission needs approval. It asks before it runs. By default it only drafts. If you choose to store the draft, it is saved as a private note on the ticket, again after approval.

## What else can my team ask for?

- "Find the questions customers keep asking in public." This runs [Mine posts for complaints and requests](/missions/complaints.mine).
- "Answer a question from our stored documents." This runs [Ask questions of your stored documents](/missions/documents.ask).
- "Check an email someone sent us for phishing." This runs [Check an email for phishing](/missions/email.phishing.check).

## Questions support teams ask

**Will it send replies to customers?**
No. The email mission saves a draft. Sending is your call.

**Can it use our help docs?**
Yes. That is the point of both missions. The reply is built from the documents you point at.

**What if our docs don't cover the question?**
The draft can only state a policy, price, refund or timeline that a passage or your notes support. Read every draft before you send it.

**Which help desk does it work with?**
The ticket mission works from a ticket in a connected ticket app. Check the mission page, and your account's connected apps, before you plan a rollout.

**Do I need a developer?**
Someone needs to store your help documents once, and connect your inbox or ticket app. After that you ask in plain words.

**Is my data safe?**
The reply uses your own documents, scoped to the ones you name. Share access with only the people who should have it.

**What else can it do?**
There are 891 missions and 10,428 superpowers today. [Browse the missions](/missions).

[Get early access](/#start) and draft your first reply.
