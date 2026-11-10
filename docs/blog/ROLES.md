# Business readers, by department

The blog-business skill reads this after VOICE.md. Pick the reader's department in the brief, then use its row to choose the pain, the words and the missions. The `roles:` id goes in the post's front matter, and `/resources` filters on it.

Every mission below exists in `public/data/missions.json` (checked 2026-11-10). "Needs approval" means its `requiresApproval` flag is on. Say so in the post.

| Department | `roles:` id |
|---|---|
| Founders and leadership | `founders` |
| Sales | `sales` |
| Marketing | `marketing` |
| Customer success and support | `customer-success` |
| Operations | `operations` |
| Finance | `finance` |
| HR and hiring | `hr` |
| Legal and compliance | `legal` |
| Product | `product` |
| E-commerce | `ecommerce` |
| IT and security | `security` |

## Founders and leadership (`founders`)

- **Pains:** too many jobs and no team for most of them; deciding fast with thin information; fundraising takes months.
- **Their words:** runway, raise, market, competitors, hire, focus.
- **Missions:** `company.research`, `fundraising.investor.shortlist`, `market.size`, `company.verify`, `pricing.change.watch` (needs approval), `daily.agenda` (needs approval).
- **They ask:** "Can I do this without hiring someone?" "What does it cost per month?" "Is my data shared?"

## Sales (`sales`)

- **Pains:** building lists by hand; reps researching instead of selling; good replies buried in the inbox.
- **Their words:** pipeline, quota, prospects, accounts, outbound, meetings booked.
- **Missions:** `lead.list.build`, `company.signals.find`, `company.research`, `lead.qualify`, `outreach.draft`, `outreach.replies.triage`.
- **They ask:** "Will it email people on its own?" "Where do the emails come from?" "Does it work with our CRM?"

## Marketing (`marketing`)

- **Pains:** not knowing what to write; rivals outranking them; no idea how AI answers describe the brand.
- **Their words:** traffic, rankings, campaigns, brand, content, creators.
- **Missions:** `keyword.gap`, `content.brief`, `brand.visibility`, `ads.competitor.footprint`, `creator.find`, `advocates.find`.
- **They ask:** "Can it post for us?" "Which networks does it cover?" "How fresh is the data?"

## Customer success and support (`customer-success`)

- **Pains:** spotting unhappy accounts too late; answering the same question again; review replies piling up.
- **Their words:** churn, renewals, tickets, response time, health score, CSAT.
- **Missions:** `account.health` (needs approval), `support.answer.draft`, `ticket.answer.draft` (needs approval), `reviews.reply` (needs approval), `inbox.triage`, `meeting.summarize`.
- **They ask:** "Does it reply to customers by itself?" "Can it use our help docs?" "Which help desk does it work with?"

## Operations (`operations`)

- **Pains:** shipping and delivery admin; messy address lists; tasks lost in email threads.
- **Their words:** fulfilment, routes, suppliers, SLAs, handoffs, admin.
- **Missions:** `deliveries.plan`, `shipping.rates.compare` (needs approval), `order.ship` (needs approval), `addresses.clean.batch` (needs approval), `tasks.from.email` (needs approval), `vendor.risk.check`.
- **They ask:** "Which carriers does it cover?" "Can it buy labels without me?" "Does it fit our current tools?"

## Finance (`finance`)

- **Pains:** coding expenses by hand; paying the wrong account; checking suppliers and invoices.
- **Their words:** reconciliation, month-end, VAT, payees, cash flow, audit trail.
- **Missions:** `expenses.categorize`, `bank.transactions.categorize`, `invoice.vat.audit`, `payee.destination.check` (needs approval), `company.financial.health`, `payments.ask`.
- **They ask:** "Can it move money?" "Who approves payments?" "Is there a record of every action?"

## HR and hiring (`hr`)

- **Pains:** slow hiring; guessing pay; screening piles of resumes.
- **Their words:** time to hire, candidates, pipeline, offer, payroll, headcount.
- **Missions:** `candidate.source`, `resume.screen`, `job.posting.audit`, `job.salary.benchmark`, `candidate.pool.size`, `payroll.summary` (needs approval).
- **They ask:** "Is screening fair?" "Where does candidate data go?" "Can it run payroll?"

## Legal and compliance (`legal`)

- **Pains:** first-pass contract review; checking who a counterparty really is; research hours.
- **Their words:** clauses, risk, due diligence, ownership, case law, citations.
- **Missions:** `contract.review`, `company.legal.record`, `company.ownership.map`, `statute.answer`, `case.law.research`, `citations.verify`.
- **They ask:** "Does it replace a lawyer?" "Where do the sources come from?" "Which countries does it cover?"

## Product (`product`)

- **Pains:** guessing what users want; missing what competitors ship; feedback scattered across sites.
- **Their words:** roadmap, feedback, feature requests, competitors, users, launch.
- **Missions:** `complaints.mine`, `community.questions.find`, `topic.listen`, `app.competitor.map`, `reviews.competitor.compare`, `page.change.watch` (needs approval).
- **They ask:** "Which sites does it read?" "Can it watch a competitor for us?" "How often does it check?"

## E-commerce (`ecommerce`)

- **Pains:** weak product listings; prices out of line with the market; order questions all day.
- **Their words:** listings, catalogue, conversion, marketplace, orders, returns.
- **Missions:** `catalog.enrich`, `product.listing.improve`, `marketplace.price.check`, `amazon.competitor.map`, `order.status.answer` (needs approval), `shipping.label.buy` (needs approval).
- **They ask:** "Does it work with my store?" "Will it change prices on its own?" "Which marketplaces does it cover?"

## IT and security (`security`)

- **Pains:** fake domains copying the brand; old access nobody removed; staff clicking phishing links.
- **Their words:** vulnerabilities, access, phishing, breach, exposure, audit.
- **Missions:** `domain.lookalikes.find`, `site.vuln.check`, `breach.exposure.check`, `email.phishing.check`, `access.review`, `dependency.audit`.
- **They ask:** "Does it change anything in our systems?" "Where are results stored?" "Who on the team can see them?"
