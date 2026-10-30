---
name: "inbox-zero"
title: Inbox zero
description: "Triage a user's inbox across email, Slack and LinkedIn. Use for inbox sweeps where the agent should clear obvious noise, draft replies, and return a single summary of items needing attention."
category: RevOps
---

Adapted for Pramaan from "Inbox zero" by Ido Goldberg (Swan), MIT licence.

## The four-bucket model

For each item the agent encounters, exactly one of these:

- **1. Clear**: obvious noise (newsletters, mass mailers, status alerts), items someone else already handled, items needing no action. One-line FYI in the batched summary, always with a reason.
- **2. Auto-handle**: the agent can finish the work itself, for example marking a CRM task done or setting a follow-up reminder. One-line FYI in the batched summary.
- **3. Draft, then approve**: a reply is needed. Reviewed one by one in the batched output.
- **4. Park**: ambiguous, or the user's judgement is needed. Left in the inbox with a one-line reason.

## Steps

1. **Sweep every connected surface.** Pull unread or unactioned items from email, Slack DMs, LinkedIn messages and the CRM task queue. Count them. Above about 30, write the snapshot to a file and process it in passes in code.

2. **Classify silently into the four buckets.** For each item:
   - Read the message.
   - **Investigate first when facts are needed**: check the CRM for prior touches and the account record, check the subscription, search the product docs, read recent Slack threads where the customer came up. If the question is about a bug or product behaviour, hand it to the team's investigation agent when there is one.
   - Decide the bucket. When unsure, park; don't clear.

3. **Do the autonomous actions.** Clear bucket 1 and finish bucket 2. Keep a running tally of WHY each was actioned, so the summary is specific ("David replied he's on it"), not generic ("cleared 14").

4. **Draft replies for bucket 3.** Substantive, in the sender's voice (read past approved messages first), citing the facts gathered in step 2. Save each as a draft on the same surface; never send.

5. **Present the batched output.** In this order:
   - **FYIs first**: cleared and auto-handled items, each with its reason in one line.
   - **Drafts second**: numbered, each with one or two lines of context above the draft. Compress to what the user needs to decide.
   - **Parked last**: each with a one-line reason.
   Then wait. The user answers in one go: "send 1, edit 2 to add X, skip 3, leave parked alone."

6. **Carry out the user's decisions.** Send approved drafts, apply edits, clear skipped items. Report exact counts: "Sent 2 drafts, cleared 1, 2 parked items left for you."

## What good looks like

The best pass touches the user exactly once. They read the FYIs, scan the drafts, approve most, edit one, leave the parked items alone. The inbox is empty or holds only what they chose to keep.

- **Catches first**: the real ask buried in a thread that looks clearable. The "thanks!" email with a feature request in paragraph 4. The churn signal mentioned in passing.
- **Gets overlooked**: a teammate's "I'm on it" that means the customer email is already handled. A trial-extension ask inside a long account update.
- **The trap**: narrating every clear ("I'm about to clear 14 newsletters..."). Confirming obvious noise is asking permission for work the agent should own.
- **Failure modes**: generic "thanks, will look into it" drafts (investigate first); investigating items that didn't need it; clearing when unsure (park instead); dumping the customer's full history in the context line; showing drafts one by one with confirmations in between.
- **Success**: every draft reads like the agent did the homework. The user hits send without rewriting.

## Rules

- **MUST** process every item, and surface them only in the single batched output.
- **MUST** investigate before drafting when the reply needs facts.
- **MUST** give the reason in every clear and auto-handle FYI.
- **MUST** park, not clear, when unsure, and say why.
- **NEVER** send a draft without the user's approval.
- **NEVER** ask the user to confirm clearing obvious noise. Do it and report.
