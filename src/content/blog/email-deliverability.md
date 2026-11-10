---
title: "Email deliverability: why emails land in spam and how to fix it"
description: "For sales and marketing teams: learn why emails land in spam, check your domain setup, clean your list and fix deliverability before the next send."
author: "Pramaan"
date: 2026-10-27
audience: business
roles: [sales, marketing]
draft: false
og:
  tag: "For sales and marketing teams"
  steps:
    - "Check what your domain publishes"
    - "Fix how your mail proves who sent it"
    - "Clean the list before you send"
    - "Send a test and watch where it lands"
---

If you run sales outreach or marketing email, deliverability decides whether anyone reads what you write. An email can be sent, accepted and still land in spam. This guide explains why that happens, what to check on your domain and your list, and how to fix it before your next campaign.

**Quick summary**

- Deliverability is whether your email reaches the inbox. Being accepted by the receiving server is only the first part.
- Most spam problems come from three places: how your domain proves who sent the mail, the state of your list, and how you send.
- Check your domain's public email settings first, then fix what's missing, then clean the list.
- Send a test to yourself before any campaign, and watch bounces after it goes out.

## What is email deliverability?

Email deliverability is how often your emails reach the inbox instead of the spam folder or nowhere at all.

Mailbox providers like Gmail and Outlook decide where each message goes. They look at who sent it, whether the sender can prove it, how people reacted to past mail from that sender, and what the message looks like.

Here's an example: a sales team sends 300 emails from a new domain on Monday. All 300 are accepted. By Wednesday, two replies have come in, and a prospect mentions finding the email in spam. Every email was delivered. Few of them were delivered to the inbox.

## Is deliverability the same as delivery rate?

No. Delivery rate counts emails the receiving server accepted. Deliverability asks where those accepted emails ended up.

<table>
<thead><tr><th></th><th>Delivery rate</th><th>Deliverability</th></tr></thead>
<tbody>
<tr><td>Measures</td><td>Emails accepted by the receiving server</td><td>Emails that reach the inbox</td></tr>
<tr><td>Hurt by</td><td>Wrong or dead addresses (bounces)</td><td>Missing domain settings, complaints, poor lists, spammy sending</td></tr>
<tr><td>Answers</td><td>"Did it arrive anywhere?"</td><td>"Will they see it?"</td></tr>
</tbody>
</table>

A high delivery rate can hide a deliverability problem. That's why teams often find out late.

## Why do emails land in spam?

Usually for one of four reasons:

- **Your domain can't prove the mail is yours.** Providers check settings your domain publishes. If they're missing or wrong, your mail looks like it could be forged.
- **Your list has bad addresses.** Sending to dead or mistyped addresses causes bounces, and providers notice.
- **People mark you as spam.** Every complaint tells the provider your mail isn't wanted.
- **You send too much, too fast, from somewhere new.** A new domain sending hundreds of emails on day one looks like a spammer.

## What are SPF, DKIM and DMARC?

They are three settings on your domain that prove an email really came from you. You set them in your domain's DNS, which is the public address book for your domain.

- **SPF** lists the mail servers allowed to send for your domain.
- **DKIM** adds a signature to each email so the receiver can tell it wasn't changed on the way.
- **DMARC** tells receivers what to do when a message fails those checks, and where to send reports.

If you send from a tool like a newsletter service or a sales sequencer, each one needs to be covered by these settings.

## How do you fix email deliverability?

Work through it in five steps, in this order.

### 1. Check what your domain publishes

Start by looking at your domain from the outside, the way a mailbox provider does.

"[Check a domain's email setup](/missions/email.domain.check)" shows a domain's mail servers and its SPF setting, plus the reputation of the addresses its website runs on. It does not check DMARC or DKIM, so treat it as a first look.

### 2. Fix your sending domain

If the check shows gaps, fix them on the domain you send from.

"[Fix your email deliverability](/missions/email.deliverability.fix)" repairs a sending domain you already own. It reads the domain's current records, applies the missing ones, checks authentication, and sends a test email. It needs approval, because it changes your domain's settings and sends a message.

Setting up a new sending domain instead? "[Set up a sending domain for email](/missions/email.domain.setup)" adds the domain to your connected mail account, compares the records it needs with what is live, and reads back whether the account sees it as verified, pending or failed.

### 3. Clean the list before you send

Remove addresses that will bounce or have already complained.

"[Clean a mailing list](/missions/email.list.hygiene)" keeps only verified addresses that aren't on your suppression list. When it finds a confirmed bounce or complaint, it adds that address to your suppression list, so you don't mail it again. It runs without approval.

For a deeper look, "[Audit an email list for risk](/missions/email.list.audit)" flags rows with delivery and risk signals and asks to clean up the saved list. It needs approval.

### 4. Send small, then grow

Start a new domain or a new list with a small batch to people most likely to reply. Increase the volume over a few weeks as replies come in and complaints stay low.

### 5. Write like a person

Plain text, a real name, one link and a clear reason for writing. Heavy images, many links and all-caps subject lines look like bulk mail.

## What does a deliverability checklist look like?

Here is a filled-in checklist for a made-up company, Acme Tiles, sending sales email from a new domain. Copy the rows and fill in your own.

<table>
<thead><tr><th>Check</th><th>Made-up result</th><th>What to do</th></tr></thead>
<tbody>
<tr><td>Mail servers listed</td><td>Yes</td><td>Nothing</td></tr>
<tr><td>SPF covers every sending tool</td><td>Missing the newsletter tool</td><td>Add it to the SPF setting</td></tr>
<tr><td>DKIM signing on</td><td>Not set for the sales tool</td><td>Turn it on and publish the key</td></tr>
<tr><td>DMARC published</td><td>No</td><td>Publish one that only reports, then tighten it</td></tr>
<tr><td>List cleaned this month</td><td>No</td><td>Clean it and suppress bounces</td></tr>
<tr><td>Test email reached the inbox</td><td>Landed in spam</td><td>Fix the items above, then test again</td></tr>
</tbody>
</table>

Re-run the test after every change until the email lands in the inbox.

## How do you put this to work with Pramaan?

You ask in plain words, or your AI agent asks for you. For example: "Check acme-tiles.com's email setup and tell me what's missing."

1. **You ask.** Name the domain, or the list you want cleaned.
2. **Pramaan plans** the steps: check the domain, then fix it, then clean the list.
3. **It picks the superpowers** for each step, such as a DNS lookup or an address check.
4. **It waits for your approval** before it changes your domain's settings or sends a test.
5. **Done, with proof.** You see what was found, what was changed, and the result of the test.

When the domain and list are ready, "[Send a tracked email](/missions/email.send-tracked)" sends one email from your connected mail account after approval and follows it to its delivery state: queued, sent, delivered, bounced or another state the account reports.

For the list itself, see [How sales teams build a lead list without the spreadsheet](/blog/lead-list-without-the-spreadsheet).

## What mistakes should you avoid?

- **Sending cold email from your main domain.** If it gets a bad name, your everyday mail suffers too. Many teams use a separate domain for outreach.
- **Buying a list.** Bought lists are full of dead addresses and people who never asked to hear from you.
- **Fixing SPF and forgetting your other tools.** Every service that sends as you needs to be covered.
- **Skipping the test.** A setting that looks right can still fail. Send a test and check where it landed.
- **Ignoring bounces.** Mailing a bounced address again tells providers you don't clean your list.

## What else can my team ask for?

- "Set up outreach.acme-tiles.com as a sending domain." This runs [Set up a sending domain for email](/missions/email.domain.setup).
- "Check this list of 2,000 addresses for risky rows." This runs [Audit an email list for risk](/missions/email.list.audit), which needs approval.
- "Send this email to Priya and tell me if it bounced." This runs [Send a tracked email](/missions/email.send-tracked), which needs approval.

## Questions teams ask about deliverability

**Do I need a developer to fix this?**
No. You ask in plain words. Changes to your domain wait for your approval.

**Will Pramaan send email on its own?**
No. Sending a test or a real email needs approval each time.

**Where do the emails come from?**
From your own connected mail account or your own sending domain.

**Does the domain check cover DKIM and DMARC?**
No. It covers mail servers, SPF and address reputation. The fix mission checks authentication as part of the repair.

[Get early access](/#start) and check your sending domain before the next campaign.
