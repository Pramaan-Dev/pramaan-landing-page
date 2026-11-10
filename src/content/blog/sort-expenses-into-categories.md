---
title: "How to sort expenses into categories without a spreadsheet"
description: "For finance teams: turn card descriptors and new bank transactions into merchants and spending categories, with booked and pending totals kept apart."
author: "Pramaan"
date: 2026-11-10
audience: business
roles: [finance]
draft: false
og:
  tag: "For finance teams"
  steps:
    - "Hand over the card lines"
    - "Pramaan names the merchant"
    - "Each line gets a category"
    - "Review and book"
---

If you work in finance, you know the month-end chore. A card export full of lines like "SQ *BLUEBIRD 0231" and a spreadsheet where you type a category next to each one. With Pramaan you hand over the card lines and get back the merchant and a spending category for each. A second mission does the same for new bank transactions, and keeps booked and pending totals apart.

## Why does expense coding take so long?

Card descriptors are written for the bank, not for you. "AMZN Mktp" could be office supplies or a team gift. A line with only a code and a city tells you nothing.

So you look each one up, guess, and type. Do that for hundreds of lines and month-end slips by days. Errors creep in, and they surface at audit time.

## What changes with Pramaan?

Pramaan turns each descriptor into a named merchant and assigns a spending category, for the whole list at once. You review the result instead of building it. For bank data, it handles only transactions added since your last look, and reports booked and pending money separately.

## How do I categorize card expenses, step by step?

The lines below are made up.

**You ask:** "Here are this month's card lines. Tell me the merchant and category for each."

**Pramaan plans.** It treats each line as one item: find the merchant, then pick the category.

**It names the merchant.** The [Categorise card expenses by merchant](/missions/expenses.categorize) mission reads the merchant from the descriptor, looks up the company behind it, then assigns a spending category. This mission does not need approval.

**Done, with proof.** You get a list with merchant and category per line. You check the odd ones, change what you disagree with, and move on.

## What does the result look like?

Here are three made-up lines to show the layout. The descriptors, merchants and categories are invented.

<table>
<tr><th>Card line (made up)</th><th>Merchant (made up)</th><th>Category (made up)</th></tr>
<tr><td>SQ *BLUEBIRD 0231</td><td>Bluebird Coffee</td><td>Meals</td></tr>
<tr><td>CLOUDHOST 8812</td><td>CloudHost</td><td>Software</td></tr>
<tr><td>TRNLN 55 LDN</td><td>Unclear</td><td>For you to check</td></tr>
</table>

The third line is the one to look at. When a descriptor gives nothing to go on, send it to a person instead of accepting a confident guess.

## How do I categorize bank transactions?

The [Categorise new bank transactions](/missions/bank.transactions.categorize) mission works on new additions to a connected bank feed. It syncs the new transactions, categorizes them, and reports totals per currency with booked and pending kept apart. It does not need approval.

Keeping them apart matters because a pending charge can change or disappear. Mixing it into your totals gives you a number you cannot defend.

## Tips for cleaner categories

- Decide your category list before you start, and give it to Pramaan in the request.
- Check a sample of 20 lines in the first run. If a pattern is wrong, say so and rerun.
- Review the lines with unclear merchants yourself. A label you checked beats a confident wrong one.
- Keep booked and pending separate until the bank confirms the pending ones.

## What else can my team ask for?

- "Check this invoice's VAT." This runs [Audit an invoice's VAT](/missions/invoice.vat.audit): arithmetic, the VAT registration, and the stated rate against standard country rates.
- "Check this supplier's bank details before we pay." This runs [Check a payee's bank or payment address](/missions/payee.destination.check). It needs approval.
- "Answer a question about our payment history." This runs [Ask questions of your payment history](/missions/payments.ask), with each sentence tied to numbered rows.

## Questions finance teams ask

**Can it move money?**
No. These two missions categorize. Anything that moves money needs approval first.

**Who approves payments?**
You do, in your own process. Neither categorizing mission pays anyone.

**Is there a record of every action?**
Each run shows the steps it took. Ask us how long runs are kept before you rely on it for an audit.

**Will it post to my ledger?**
No. It returns categories for you to review. You decide what to book.

**What if it picks the wrong category?**
Change it and tell Pramaan your rule. It is a first pass for you to check, not a final posting.

**Do I need a developer?**
No. You describe the job in plain words, or your AI assistant asks for you.

**What else can it do?**
There are 891 missions and 10,428 superpowers today. [Browse the missions](/missions).

[Get early access](/#start) and sort this month's card lines before month-end.
