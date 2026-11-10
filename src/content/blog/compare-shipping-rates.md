---
title: "How to compare shipping rates before you book"
description: "For operations teams: compare carrier quotes and delivery times for a parcel, and plan routes for up to 100 deliveries without a spreadsheet."
author: "Pramaan"
date: 2026-10-16
audience: business
roles: [operations]
draft: false
og:
  tag: "For operations teams"
  steps:
    - "Describe the parcel"
    - "Approve the carrier check"
    - "Compare quotes and delivery days"
    - "Book the one you pick"
---

If you run operations, shipping admin eats more time than it should. You open the carrier sites one by one, type the same parcel details into each, and copy the quotes into a sheet. With Pramaan you name the parcel once and get checked carrier quotes with estimated delivery days in one list. For a day with many drops, a second mission plans the routes.

## Why does comparing shipping rates take so long?

Every carrier has its own form and its own way of showing a price. You enter the weight and the addresses again and again. One quote gives delivery in days, another gives a date, a third shows the fee only at the last step.

By the time you have compared three, someone is waiting on an answer. So you book the carrier you used last time, which may not be the cheapest or the fastest for this parcel.

## What changes with Pramaan?

You name one parcel. Pramaan works through your connected shipping app, asks for the carrier quotes and shows them together with the estimated delivery days. You choose. For many deliveries, a planning mission groups them into routes.

## How do I compare rates, step by step?

The parcel and the numbers below are made up.

**You ask:** "Compare shipping rates for the parcel in order 4471 going to Leeds." (Order 4471 is a made-up example.)

**Pramaan plans.** It looks for your connected shipping app and the shipment record you named.

**It asks for approval.** The [Compare shipping rates](/missions/shipping.rates.compare) mission needs approval, because it works through your connected shipping account. Pramaan shows you what it will check and waits for your approval.

**It gets the quotes.** The mission lists your connected apps, finds the shipping app in the catalogue, then runs the quote action on that app. You get checked carrier quotes and estimated delivery days for the existing parcel shipment.

**Done, with proof.** You see the options and pick one. Comparing does not book anything, and Pramaan does not buy a label in this mission.

The mission works on a shipment that already exists in your connected app. Which carriers appear depends on what your shipping account offers.

## What does the result look like?

Here is a made-up result for the parcel above. The carriers, prices and days are invented to show the layout.

<table>
<tr><th>Carrier (made up)</th><th>Quote (made up)</th><th>Estimated delivery (made up)</th></tr>
<tr><td>Carrier A</td><td>$9.40</td><td>2 days</td></tr>
<tr><td>Carrier B</td><td>$7.10</td><td>4 days</td></tr>
<tr><td>Carrier C</td><td>$12.75</td><td>1 day</td></tr>
</table>

In this example Carrier B is cheapest and Carrier C is fastest. If the customer paid for next-day delivery, the answer is C. If the parcel is a restock for your own shelf, it is probably B.

## How do I plan a day of deliveries?

The [Plan routes for up to 100 deliveries](/missions/deliveries.plan) mission takes a list of delivery addresses and splits them across vehicles in optimised routes. It geocodes each address, finds the best tours, then computes the routes. Addresses it cannot place on a map are listed separately, so you can fix them. It does not need approval.

The unplaceable list saves the most time. A bad address found at 7 a.m. costs less than one a driver finds at the door.

## A routine you can copy

1. Before booking, compare rates for any parcel that is heavy, urgent or going far.
2. Note the cheapest and the fastest. If they differ, decide which matters for that order.
3. For multi-drop days, run the route plan the evening before and fix the unplaceable addresses.

The aim is to see every option before you choose, instead of defaulting to habit.

## What else can my team ask for?

- "A customer's delivery failed. Explain why and draft a reply." This runs [Explain a failed delivery](/missions/delivery.exception.handle). It drafts the message, and new instructions go to the carrier only after approval.
- "Set up a return for this order." This runs [Create a return label](/missions/return.label.create). Each action happens only after approval.
- "Draft a reply about where this order is." This runs [Draft a reply about an order's status](/missions/order.status.answer). The reply is saved as a draft, after approval.

## Questions operations teams ask

**Which carriers does it cover?**
That depends on your connected shipping account. The quotes come from the carriers it offers.

**Can it buy labels without me?**
No. Comparing rates does not book or buy. Anything that acts needs your approval.

**Does it fit our current tools?**
The comparison runs through a shipping app you have already connected. If your app is not connected, Pramaan has nothing to ask.

**Does it work for a parcel that has not been created yet?**
No. The mission checks an existing parcel shipment, so create the shipment in your shipping app first.

**Do I need a developer?**
No. You describe the parcel in plain words, or your AI assistant asks for you.

**What else can it do?**
There are 891 missions and 10,428 superpowers today. [Browse the missions](/missions).

[Get early access](/#start) and compare your next shipment before you book it.
