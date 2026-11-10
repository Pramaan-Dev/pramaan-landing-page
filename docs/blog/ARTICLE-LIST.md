# Blog articles to write

Written 2026-11-10. This replaces `BUSINESS-TOPICS.md`. Business posts follow the blog-business skill and developer posts follow blog-dev; both use VOICE.md. Every mission and superpower id below exists in `public/data/` today, and every docs guide exists on docs.pramaan.dev.

Tick the ones you want, cross out the rest, and add notes.

Already live: `ideal-customer-profile`, `lead-list-without-the-spreadsheet`, `418-gtm-skills`. Draft: `agent-in-ten-minutes` (placeholder; D1 below replaces it).

Search volumes are not checked yet. Pramaan's own keyword missions can check them, but that is paid, so I haven't run them.

## A. Learn guides (business)

Long "what is X" guides like the ICP one: define the term, show the steps, then how Pramaan does the work. 1,200 to 1,600 words each.

| # | Working title | Search term | Missions |
|---|---|---|---|
| A1 | Buying signals: what they are and how to act on them | buying signals | `company.signals.find`, `outreach.signal.campaign`, `account.signals.review` |
| A2 | Lead scoring: how to rank leads by fit and timing | lead scoring | `company.icp.score`, `lead.qualify`, `account.signals.review` |
| A3 | Account-based marketing (ABM): a plain guide | account-based marketing | `account.contacts.map`, `account.watch.setup`, `company.research` |
| A4 | Lead enrichment: how to fill the gaps in your CRM | lead enrichment | `crm.record.enrich`, `lead.enrich`, `table.enrich` |
| A5 | Website visitor identification: how it works | website visitor identification | `company.visitors.identify`, `lead.qualify` |
| A6 | TAM: how to size your market before you sell | total addressable market | `market.size`, `market.map`, `company.list.build` |
| A7 | Technographic data: what your prospects run | technographic data | `company.techstack`, `lead.techstack.find`, `site.stack.changes` |
| A8 | Email deliverability: why emails land in spam | email deliverability | `email.domain.check`, `email.deliverability.fix`, `email.list.hygiene` |
| A9 | Answer engine optimization (AEO): get cited by AI | answer engine optimization | `brand.visibility`, `aeo.citation.gap`, `aeo.fix.plan` |
| A10 | Keyword gap analysis: find what rivals rank for | keyword gap analysis | `keyword.gap`, `links.gap`, `content.brief` |

## B. How-to posts (business)

One job, one reader, 800 to 1,200 words.

| # | Working title | Reader | Missions |
|---|---|---|---|
| B1 | How to research a company before a sales call | Sales | `company.research`, `startup.founders.brief`, `company.changes.snapshot` |
| B2 | How to find companies hiring for the role you help | Sales | `lead.hiring.find`, `company.hiring.signal` |
| B3 | How to clean a lead list before you send anything | Sales | `lead.list.clean`, `email.list.audit`, `lead.quality.report` |
| B4 | How to sort outreach replies so hot ones go first | Sales | `outreach.replies.triage`, `outreach.reply.draft` |
| B5 | How to turn LinkedIn post likes into leads | Sales | `lead.engagers.find`, `lead.engagement.watch` |
| B6 | How to see every ad a competitor is running | Marketing | `ads.competitor.footprint`, `ad.intel`, `ads.competitor.compare` |
| B7 | How to find ads that spent money and brought nothing | Marketing | `ads.waste.find`, `ads.creative.fatigue`, `ads.performance.report` |
| B8 | How to find creators in your niche with real audiences | Marketing | `creator.find`, `creator.audience.check`, `creator.outreach.draft` |
| B9 | How to find people already posting about your brand | Marketing | `advocates.find`, `brand.monitor`, `complaints.mine` |
| B10 | How to shortlist investors for your raise | Founders | `fundraising.investor.shortlist`, `funding.round.benchmark` |
| B11 | How to check a supplier is a real business | Founders, finance | `company.verify`, `vendor.risk.check`, `company.diligence` |
| B12 | How to watch a competitor's pricing page | Founders | `pricing.change.watch`, `page.change.watch` |
| B13 | How to benchmark pay before you post a job | HR | `job.salary.benchmark`, `salary.benchmark`, `candidate.pool.size` |
| B14 | How to spot an at-risk customer before they churn | Customer success | `account.health`, `accounts.changes.watch` |
| B15 | How to plan your day from your calendar and inbox | Everyone | `daily.agenda`, `inbox.triage`, `tasks.from.email` |
| B16 | How to compare shipping rates before you book | Operations | `shipping.rates.compare` (needs approval), `deliveries.plan` |
| B17 | How to clean a messy address list | Operations | `addresses.clean.batch` (needs approval) |
| B18 | How to sort expenses into categories without a spreadsheet | Finance | `expenses.categorize`, `bank.transactions.categorize` |
| B19 | How to check a payee before you pay them | Finance | `payee.destination.check` (needs approval), `company.financial.health` |
| B20 | How to do a first pass on a contract | Legal | `contract.review` |
| B21 | How to find who really owns a company | Legal | `company.ownership.map`, `company.legal.record` |
| B22 | How to find what users complain about | Product | `complaints.mine`, `community.questions.find`, `topic.listen` |
| B23 | How to compare your reviews with a competitor's | Product | `reviews.competitor.compare`, `app.competitor.map` |
| B24 | How to fix product listings that don't sell | E-commerce | `product.listing.improve`, `catalog.enrich` |
| B25 | How to check your prices against the marketplace | E-commerce | `marketplace.price.check`, `amazon.competitor.map` |
| B26 | How to find fake domains copying your brand | IT and security | `domain.lookalikes.find`, `email.phishing.check` |
| B27 | How to check if staff emails were in a breach | IT and security | `breach.exposure.check`, `access.review` |
| B28 | How to draft support answers from your help docs | Customer success | `support.answer.draft`, `ticket.answer.draft` (needs approval) |
| B29 | How to screen a pile of resumes | HR | `resume.screen`, `job.posting.audit` |

## C. Developer posts

Working code, exact ids, what happens when it fails. 900 to 1,600 words.

| # | Working title | Surface | Ids and docs |
|---|---|---|---|
| D1 | How to give Claude Code 10,000+ superpowers with MCP | MCP | docs: tools/mcp, quickstart |
| D2 | How to add web search to an AI agent in TypeScript | SDK | `web.search`, `web.read`; docs: tools/sdk |
| D3 | How to handle approval_required in your agent | SDK, REST | docs: guides/approvals |
| D4 | How to retry API calls safely with idempotency keys | REST | docs: guides/idempotency |
| D5 | How to see what a call costs before it runs | REST | docs: guides/pricing |
| D6 | How to run long jobs and wait for the result | SDK | docs: guides/jobs, guides/webhooks |
| D7 | How to verify webhook signatures in TypeScript | SDK | docs: guides/webhooks |
| D8 | How to build a company research agent with the SDK | SDK | `company.research`, `companies.enrich` |
| D9 | How to send email from your agent with your own inbox | SDK | `email.send`; docs: guides/connections |
| D10 | How to use your own provider key and pay nothing | REST | docs: guides/own-keys |
| D11 | How to read Pramaan errors and fix each one | REST | docs: guides/errors |
| D12 | How to stream chat replies with one API | SDK | `llm.chat`; docs: guides/streaming |

## My pick for the first ten

Alternate business and developer, so both audiences get a post every week.

1. **A1 Buying signals.** Pairs with the ICP guide; the two link to each other.
2. **D1 Claude Code with MCP.** Replaces the placeholder draft, and it's how most developers will try Pramaan first.
3. **A2 Lead scoring.** Builds on ICP and buying signals.
4. **D3 Handling approval_required.** Explains how our approvals work, which sets Pramaan apart.
5. **B1 Research a company before a call.** A daily sales job that one mission already covers.
6. **D2 Web search for an agent.** A common search from developers.
7. **A9 AEO.** A new term with few good guides yet.
8. **D5 Cost before it runs.** Answers the first question developers ask about pricing.
9. **A8 Email deliverability.** Every outbound team runs into it.
10. **D4 Idempotency keys.** Short, useful, and links to the docs.
