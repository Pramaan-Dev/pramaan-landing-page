---
title: "How to clean a messy address list"
description: "For operations teams: fix, deduplicate and map a messy list of addresses in one pass, with the rejects listed so you know what to correct by hand."
author: "Pramaan"
date: 2026-10-18
audience: business
roles: [operations]
draft: false
og:
  tag: "For operations teams"
  ask: "Clean up this list of customer addresses"
  done: "Clean list ready, rejects listed"
---

If you run operations, you have met the address list nobody wants to open. Typos, missing postcodes, the same house entered three ways, "Flat 2 " with a trailing space. With Pramaan you hand over the list and get it back parsed, corrected, deduplicated and given map coordinates. Rows it could not fix are listed, so you know what to check by hand.

## Why are address lists so messy?

People type them. Customers use their own format, imports from old systems mix upper and lower case, and one person writes "St." where another writes "Street". Now you have two customers at one door.

The cost shows up later. A parcel goes to the wrong place, a route plan fails on an address it cannot find, and a mailing reaches the same household twice.

## What changes with Pramaan?

You give Pramaan the list. It splits each address into parts, checks it, fixes what it can, removes duplicates and adds coordinates. Rows it rejects come back in their own list with the reason. You fix the small remainder, not the whole list.

## How do I clean a list, step by step?

The example is made up.

**You ask:** "Clean this list of 300 customer addresses. Remove duplicates and tell me which ones you couldn't fix." (The list and its size are made up.)

**Pramaan plans.** It sorts the work into parsing, checking, locating and flagging.

**It asks for approval.** The [Clean up a list of addresses](/missions/addresses.clean.batch) mission needs approval. Pramaan shows you what it will do with the list and waits for your approval. One of its steps sends feedback on the validation to the address provider, which is a reason to read the plan before you say yes.

**It cleans.** Each address is parsed into parts, validated in detail, and given coordinates in bulk. The mission also counts secondary units, such as the flats in one building. Duplicates are removed, and rejects are listed.

**Done, with proof.** You get the cleaned list and the reject list. You open the rejects, fix them by hand or ask the customer, and you are finished.

## What does the result look like?

Here are three made-up rows, to show what changes. The addresses are invented.

<table>
<tr><th>Row (made up)</th><th>What you typed</th><th>What comes back</th></tr>
<tr><td>1</td><td>12 mill st., flat 2</td><td>Cleaned into parts, with coordinates</td></tr>
<tr><td>2</td><td>12 Mill Street Flat 2</td><td>Removed as a duplicate of row 1</td></tr>
<tr><td>3</td><td>Unit 9, nowhere road</td><td>Rejected, with the reason listed</td></tr>
</table>

Rows 1 and 2 are one customer. Row 3 goes on the reject list for you to check.

## What does "rejects" mean for me?

A reject is an address Pramaan could not confirm. It might be incomplete, misspelled beyond repair, or not a real place. Pramaan lists it with a reason, so you can decide. It does not guess and slip a wrong address into your clean list.

Many manual clean-ups skip the reject list. Without one, a bad row looks like a good one.

## Tips for a better result

- Keep one address per row, and keep the country if you have it. It helps the match.
- Run a small test of 20 rows first, and check the output before the full list.
- Keep your original file, and compare a few rows before and after.
- Fix the reject list once, then reuse the cleaned list instead of re-cleaning the same rows every month.

## What else can my team ask for?

- "Plan tomorrow's delivery routes from this list." This runs [Plan routes for up to 100 deliveries](/missions/deliveries.plan). Addresses it cannot place are listed.
- "Check these phone numbers too." This runs [Clean a list of phone numbers](/missions/phone.list.clean), marking duplicates and unusable rows.
- "Check this contact list for bad emails." This runs [Check and clean a lead list](/missions/lead.list.clean), with a status and reason for each row.

## Questions operations teams ask

**Do I need a developer?**
No. You describe the job in plain words, or your AI assistant asks for you.

**Will it change my customer records?**
No. It returns a cleaned list. You decide what to load back.

**Does it cover addresses in any country?**
Check the mission page for coverage. Rows it cannot place come back as rejects.

**Does it fit our current tools?**
It works on a list you give it, so it does not need to connect to your systems. You load the cleaned list back yourself.

**What else can it do?**
There are 891 missions and 10,428 superpowers today. [Browse the missions](/missions).

[Get early access](/#start) and clean your worst list this week.
