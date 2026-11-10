---
title: "How to check a payee before you pay them"
description: "For finance teams: check a new payee's bank details and the supplier behind them before money moves, with a record of what was checked."
author: "Pramaan"
date: 2026-11-10
audience: business
roles: [finance]
draft: false
og:
  tag: "For finance teams"
  steps:
    - "Paste the payee's bank details"
    - "Pramaan checks the account identifier"
    - "Look at the company's financial record"
    - "You decide whether to pay"
---

If you work in finance or accounts payable, you know the moment. A supplier sends new bank details, the invoice is due, and someone has to decide whether the account is real. Pramaan checks the bank identifier you were given and pulls the supplier's financial record, so you decide with facts in front of you. You approve the payee check before it runs, and nothing moves money.

## Why is checking a payee so slow?

The checks live in different places. You look up whether the IBAN is valid, work out which bank it belongs to, then search for the supplier's accounts, and each step happens in a different tab.

Under deadline, checks get skipped. A payment to the wrong account is hard to undo, so the skipped check is the one that counts.

## What changes with Pramaan?

You give Pramaan the bank identifier and the supplier's name. It checks that the identifier is well formed, finds the bank it points to, and reads the company's published financial record. You get one summary with the sources named.

It does not tell you who owns the account. A person still decides.

## How does it work, step by step?

**You ask:** "Check this IBAN for a new supplier, Northfield Packaging. Then show me how the company is doing." (Northfield Packaging is a made-up name for this example.)

**Pramaan checks the account details.** The [Check a payee's bank or payment address](/missions/payee.destination.check) mission validates one bank identifier, looks up the bank behind it, and checks a routing code or BIC where you give one. If you have a phone number linked to a payment address instead, it can look that up. Where a bank detail can't be found, the result says unknown. It does not guess.

**This mission needs approval.** You see exactly what will be checked before it runs, and it waits for your approval.

**Pramaan reads the supplier's record.** The [Check a company's financial health](/missions/company.financial.health) mission pulls official statements, ratios, published assessments, credit history, charges and capital. It keeps each figure's period and currency, so you aren't comparing a year-old number with a current one.

**You get one page.** The bank check and the financial record sit side by side, each with its source.

**You decide.** If the details match what the supplier told you and the company looks sound, you pay through your normal process. If something is off, you call the supplier on a number you already had on file, not the one in the email.

## What does the result look like?

Here is a made-up result for the supplier above. Every value is invented to show the layout.

<table>
<tr><th>Check (made up)</th><th>Result (made up)</th><th>What you do</th></tr>
<tr><td>Identifier is well formed</td><td>Yes</td><td>Carry on</td></tr>
<tr><td>Bank behind the identifier</td><td>Named bank found</td><td>Compare with the bank the supplier told you</td></tr>
<tr><td>BIC or routing code</td><td>Unknown</td><td>Ask the supplier for it</td></tr>
<tr><td>Company financial record</td><td>Statements found, period and currency shown</td><td>Read it before you decide</td></tr>
</table>

The unknown row stays unknown. Pramaan does not fill a gap with a guess, so you know exactly what is still open.

## What does a check not tell you?

A valid identifier means the account is well formed and belongs to a named bank. It does not prove the account belongs to your supplier. Treat a pass as one input, and keep your usual call-back step for changed details.

## What else can my team ask for?

- "Check whether this supplier filed GST on time." This runs [Check suppliers filed GST on time](/missions/gst.supplier.check). It compares public filings to the return deadlines you supply.
- "Compare the financials of these two public companies." This runs [Compare company financials](/missions/financials.compare). It puts income, balance sheet, cash flow and ratios in one table.
- "Show me this company's court and insolvency record." This runs [Look up a company's legal record](/missions/company.legal.record). It lists the facts without a verdict.

## Questions finance teams ask

**Can it move money?**
No. It checks and reports. Your own payment process stays in charge of payments.

**Who approves payments?**
You do, in your own process. Pramaan pays nothing. It only asks you to approve the check itself.

**Who approves a payee check?**
The person running it. The mission needs approval, and it waits until you give it.

**Is there a record of every action?**
Every run shows its steps and sources. Ask us how long runs are kept before you rely on it for an audit.

**Do I need a developer?**
No. You ask in plain words, or your AI assistant asks for you.

**How many missions are there?**
There are 891 missions and 10,428 superpowers today. [Browse the missions](/missions).

[Get early access](/#start) and run your first payee check this week.
