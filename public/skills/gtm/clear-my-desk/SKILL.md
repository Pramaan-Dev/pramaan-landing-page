---
name: "clear-my-desk"
title: Clear my desk
description: "Triages everything waiting on you in Pramaan. Use to sort calls waiting for your approval, unsent drafts, posts awaiting review, failed monitor runs and accounts that need reconnecting into act-now, bulk-approve, acknowledge or investigate buckets."
category: RevOps
---

Adapted for Pramaan from "Clear my desk" by Ido Goldberg (Swan), MIT licence.

## Instructions

**State check.** This skill assumes the caller is the Pramaan member whose desk is being cleared, and that their agents actually run work through Pramaan: calls that wait for approval, drafts, scheduled posts or monitors. List pending approvals first. If that and every other source below come back empty, the desk is empty because nothing is producing work yet, not because the user is on top of it. Say so in one sentence and stop.

### What this skill does

The user has a backlog and wants to clear it in one pass without reading every item. Triage in slices, summarise as you go, never load the whole desk at once. After a few high-signal slices the agent should know what is safe to approve in bulk and what needs attention.

### Step 1 - Calls waiting for approval

List the calls waiting for a member's approval, newest first, at most 20 at a time. Each one shows what it will do (the action, its inputs and its maximum price). Classify each in one pass:

- **Act today**: it sends, pays or books something time-sensitive, for a named person or account.
- **Bulk approve**: the same action with the same kind of inputs repeated, and it looks safe (for example five drafts saved from the same campaign).
- **Stop / investigate**: something looks wrong: the wrong person, an odd amount, a price far above the others, inputs that don't match the request.
- **Worth a look**: needs the user's judgement; give an impact score 1-5.

Keep one line per item. Drop the full records after classifying.

### Step 2 - The rest of the desk

Then check, one slice each:

- Unsent email drafts: group by campaign or template; consistent ones are bulk-send candidates, odd ones go to stop / investigate.
- Social posts that are drafts, waiting for review, or failed: failed posts are act-today; posts awaiting review group like approvals.
- Monitors whose last run failed or delivered nothing for a long time: acknowledge or investigate.
- Social accounts that are not connected or whose connect flow never finished: act today if a scheduled post depends on them.
- Research runs that finished long ago: acknowledge; old finished runs can be cleared in bulk.

### Step 3 - Decide whether to keep going

- At least 8 items in act today or stop / investigate: the desk is hot. Stop scanning, report, let the user act.
- Mostly acknowledge: fetch the next 20, same pass, up to about 60 items in total.
- Mostly empty: the desk is in good shape; report briefly and stop.

Over 100 items and the user wants everything: write the lists to a file and classify them in code, not in messages.

### Step 4 - Compose the report

In this order, leaving out empty buckets:

1. **Act today**: numbered, one sentence of context each.
2. **Bulk approve**: one line per group: "5 calls saving drafts for the [campaign] list, up to $0.40 in total. Approve all?"
3. **Acknowledge**: one line per group: "3 monitors with no deliveries for 30 days. Clear all?"
4. **Stop / investigate**: each flagged item with the specific concern.
5. **Worth a look**: the top 1-3, with why.

Then one sentence: "Scanned X items. Y need you, Z ready to clear in bulk."

### Step 5 - Act on the user's answer

Only after the user says yes, decide each approval (approve or deny) one call at a time, send or delete the drafts, review the posts. Report exact counts: "Approved 5 calls, denied 1, sent 3 drafts, cleared 2 old research runs."

### Rules

- NEVER pull the whole desk up front. Slice, classify, continue.
- NEVER approve on your own. Bulk approve is a question ("approve all?"), answered by the user, never "approving now".
- NEVER bulk-approve anything from act today or stop / investigate.
- MUST show the maximum price of every approval group before asking.
- MUST report exact counts after acting, not just "done".
- If the desk is empty after the first slice, say so in one sentence and stop. Don't invent work.
