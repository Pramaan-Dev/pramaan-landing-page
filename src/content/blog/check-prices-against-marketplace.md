---
title: "How to check your prices against the marketplace"
description: "For e-commerce teams: see what comparable items sell for in your area, and which products beat yours on Amazon, without opening ten tabs."
author: "Pramaan"
date: 2026-10-31
audience: business
roles: [ecommerce]
draft: false
og:
  tag: "For e-commerce teams"
  steps:
    - "Name the item and the place"
    - "Read the price range and the listings behind it"
    - "Map the Amazon products that compete with yours"
    - "Decide the price yourself"
---

If you run an online store, you have asked the same question many times: is this price out of line with the market? Answering it by hand means searching a marketplace, opening listings one by one, and pasting prices into a sheet. With Pramaan you name the item and the place, and you get back a price range with the listings it came from. For Amazon, you give one product code and get the products that compete with yours.

## Why does checking prices take so long?

The market is spread across pages. Each listing has its own price, its own condition and its own seller, and none of it lines up until you copy it somewhere.

By the time the sheet is done, some of the prices have changed. So most teams check a few products and skip the rest of the catalogue.

## What changes with Pramaan?

You describe the item once, in the words a buyer would search for. Pramaan reads comparable listings, works out the price range in code, and shows you the listings behind the range so you can check it. Both missions in this post only read. Neither one changes a price in your store.

## How do I check what an item sells for in my area?

Use the [Check marketplace prices for an item](/missions/marketplace.price.check) mission. It needs two things: the item, and the city or area to look in.

**You ask:** "What does a used standing desk, 160 cm wide, sell for in Leeds?" (a made-up example)

**Pramaan plans.** The mission has three steps. It looks up the place on Facebook Marketplace, searches that place for comparable listings, and opens individual listings to read the details. By default it asks for 20 listings and opens 8 of them to read the full price. You can change both numbers.

**It picks the tools.** Each step is a superpower, a single action with a fixed request and result. The lowest, highest and typical price are worked out in code from the listings.

**You see the proof.** You get the range and the listings behind it. If one listing looks wrong for your item, you can see it and ignore it.

This mission does not need approval. It does not send anything or change your store.

## What does the result look like?

Here is a made-up result for the standing desk. The listings and prices are invented to show the shape.

<table>
<tr><th>Listing (made up)</th><th>Condition</th><th>Price</th></tr>
<tr><td>Standing desk, 160 cm, oak top</td><td>Used, good</td><td>$120</td></tr>
<tr><td>Electric desk, 160 cm, white</td><td>Used, like new</td><td>$210</td></tr>
<tr><td>Standing desk, 140 cm</td><td>Used, worn</td><td>$70</td></tr>
<tr><td><strong>Range from these three</strong></td><td></td><td>$70 to $210</td></tr>
</table>

The 140 cm desk is not a close match, and you can see that because the listing is right there. You can drop it and read the range again yourself.

## How do I see which Amazon products compete with mine?

Use the [Map your Amazon competitors](/missions/amazon.competitor.map) mission. You give it your product's ASIN (the 10-character code on the Amazon page) and, if you like, the country.

**You ask:** "Who competes with my product on Amazon in the US, and where do I rank against them?"

**Pramaan plans.** The mission has four steps. It finds the products that compete with yours, reads the keywords they win, reads where you rank against them, and reads your own product's details. By default it reads 10 competitors and looks at 3 in detail. You can raise that to 20 and 5.

**You see the proof.** You get the competing products and keywords in one result. You can see which search terms a competitor wins and you don't.

This mission does not need approval either.

## What else can my team ask for?

- "Make this listing better." This runs [Improve a marketplace listing](/missions/product.listing.improve).
- "Rewrite our product titles and descriptions." This runs [Improve product titles and descriptions](/missions/catalog.enrich).
- "How do our reviews compare with nearby competitors?" This runs [Compare your reviews with local competitors](/missions/reviews.competitor.compare).

## Questions e-commerce teams ask

**Does it work with my store?**
The two checks above don't connect to your store at all. You give the item and place, or an ASIN.

**Will it change prices on its own?**
No. These missions only read and report. You decide what to change.

**Which marketplaces does it cover?**
The local price check reads Facebook Marketplace listings. The competitor map covers Amazon. Check the mission pages for the current detail.

**Can it buy a shipping label for an order?**
Not from these two missions. The [label-buying mission](/missions/shipping.label.buy) is separate, and it needs approval, so it waits for your approval before it runs.

**Do I need a developer?**
No. You ask in plain words, or your AI assistant asks for you.

**What else can it do?**
There are 891 missions and 10,428 superpowers today. [Browse the missions](/missions).

[Get early access](/#start) and check your first price.
