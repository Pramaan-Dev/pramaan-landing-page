# Superpowers: Finance

Take payments, run billing, move money, handle tax and read the markets.

## Bank account checks

Check bank accounts, IBANs, bank codes and payment addresses are real.

- `finance.bank-account-verification.create`: Start a person-approved bank verification flow by mobile or reverse transfer. Handles mobile and bank data; any token principal is included in the estimate. Maximum estimate USD 0.10. (needs approval)
- `finance.bank-account-verification.get`: Read bank verification progress. Account numbers are masked by default; full numbers, holder names, bank facts and payment addresses require explicit flags.
- `finance.bic.lookup`: Check a BIC (SWIFT) code and name the bank, country and branch behind it.
- `finance.iban.bank`: Name the bank and branch behind an IBAN, with its BIC.
- `finance.iban.validate`: Check an IBAN's format, length and checksum, and split it into country, bank and account parts.
- `finance.payment-address.verify`: Check one payment address or bank account (a bank check may move a token amount to the account). Optionally returns the holder name as the bank records it, which is personal data. Maximum estimate USD 0.57. (needs approval)
- `finance.payment-address.verify-queued`: Queue a bank account check that may move a token amount; at most ten status reads. Optionally returns the holder name, which is personal data. Maximum estimate USD 0.22. (needs approval)
- `finance.payment-addresses.find`: Find payment addresses linked to an Indian mobile number. Returns up to 100 addresses and active states, without holder names or rankings. Maximum estimate USD 0.57. (needs approval)
- `finance.routing-code.lookup`: Verify an Indian bank routing code. Returns the requested code and its verification verdict; no account data. Maximum estimate USD 0.57.

## Bank statements

Upload bank statements and read income, spending, balances and obligations.

- `finance.statement-account.get`: Read personal bank statement account facts from a collected analysis.
- `finance.statement-accounts.list`: Read personal bank statement accounts facts from a collected analysis.
- `finance.statement-analysis.collect`: Start a hosted page where a person uploads or connects their own bank statements for analysis. Processes personal financial data (accounts, balances, transactions, holder details). The page does not return the person to your app; poll finance.statement-analysis.get with the ref.
- `finance.statement-analysis.delete`: Delete a statement session. Original PDFs are documented as retained for 30 days; derived-data deletion scope is undocumented. (needs approval)
- `finance.statement-analysis.get`: Check upload and processing states for personal bank statements.
- `finance.statement-analysis.process`: Trigger analysis of up to ten uploaded personal bank statements; provisional worst case $4.90.
- `finance.statement-balances.list`: Read personal bank statement balances facts from a collected analysis.
- `finance.statement-banks.list`: List banks and their supported statement collection modes.
- `finance.statement-credit-score.get`: Read a person's bank statement credit scores on their native 300 to 900 scale; score direction is not published.
- `finance.statement-expenses.list`: Read personal bank statement expenses facts from a collected analysis.
- `finance.statement-fraud.get`: Read personal bank statement fraud facts from a collected analysis.
- `finance.statement-income.get`: Read personal bank statement income facts from a collected analysis.
- `finance.statement-metrics.get`: Read selected factual statement measures; no person score, probability or rank is returned.
- `finance.statement-months.list`: Read monthly personal statement balances, credits, debits, salary and observed repayments; at most 60 rows per page.
- `finance.statement-obligations.get`: Read personal bank statement obligations facts from a collected analysis.
- `finance.statement-recurring.list`: Read personal bank statement recurring facts from a collected analysis.
- `finance.statement-report.export`: Copy a personal statement XLSX report into your files; maximum 10 MiB.
- `finance.statement-transactions.list`: Read personal bank statement transactions facts from a collected analysis.

## Bank transfers

Ask customers to pay by bank transfer and see when it arrives.

- `payments.transfer-request.cancel`: Cancel a bank transfer request so the buyer can no longer pay it. The request stays readable; money already received is not moved by cancelling. (needs approval; needs a connected account)
- `payments.transfer-request.create`: Ask your customer to pay by bank transfer into your own connected payment account. Returns the bank details and the reference the buyer must quote. The request becomes paid only on the provider's signed notification matched to it — track it with payments.transfer-request.get. (needs a connected account)
- `payments.transfer-request.get`: Read one bank transfer request: whether money has arrived, and how much. paid is reported only after the provider's signed notification was matched to the stored request — nothing the buyer or the caller says can make it paid, and neither can this read alone. (needs a connected account)
- `payments.transfer-request.list`: List your bank transfer requests, newest first, each with its state; a row's ref opens with payments.transfer-request.get or payments.transfer-request.cancel. (needs a connected account)

## Banks and bank products

Look up banks, branches, deposit rates, savings and bank products.

- `banking.acquisitions.list`: List acquisitions in the United States.
- `banking.branches.list`: List a bank or credit union's branch offices in a state.
- `banking.branches.search`: Search branches for the chosen market or collection.
- `banking.business-loan-products.list`: List Australian commercial lending offerings with their published names and descriptions. The catalogue covers advertised financing products for enterprises and organisations, with each entry describing the available lending product.
- `banking.business-products.list`: List Spanish commercial banking catalogue entries, returning each offering's name and public information link. These are advertised financial products for enterprises, drawn from the selected institution's corporate banking product pages.
- `banking.card-products.list`: List card products from a Spanish bank.
- `banking.collective-savings-products.list`: List Spanish bank-distributed collective savings vehicles from the selected institution's public product catalogue. Each record contains the advertised product name and information page link, within the institution's published range of financial offerings.
- `banking.current-account-products.list`: List current account products from a Spanish bank.
- `banking.demographics.get`: Read demographics in the United States.
- `banking.deposit-institutions.search`: Search banks and credit unions by name.
- `banking.deposit-rates.list`: Compare savings and deposit account rates across institutions.
- `banking.deposits.get`: Read deposits in the United States.
- `banking.es-insurance-products.list`: List insurance products from a Spanish bank.
- `banking.failures.list`: List failures in the United States.
- `banking.fixed-deposit-rates.list`: List fixed deposit interest rates by tenure for a product.
- `banking.historical-statistics.get`: Read aggregate United States insured-bank statistics by reporting year, including institution counts and published financial totals. Annual figures describe regulated depository institutions and the periods covered by their regulatory reporting.
- `banking.history-changes.list`: List history changes in the United States.
- `banking.institution-financials.list`: List institution financials in the United States.
- `banking.institution-history.list`: List institution history in the United States.
- `banking.institution-locations.list`: List institution locations in the United States.
- `banking.loan-products.list`: List a bank's loan products with their rates and fees.
- `banking.pension-products.list`: List pension products from a Spanish bank.
- `banking.personal-loan-products.list`: List personal loan products for the chosen market or collection.
- `banking.personal-loan-terms.get`: Read personal loan terms from an Australian bank.
- `banking.product-overview.get`: Read product overview from a Spanish bank.
- `banking.product.get`: Read product from a Spanish bank.
- `banking.products.search`: Search products from a Spanish bank.
- `banking.savings-product-rates.get`: Read savings product rates from an Australian bank.
- `banking.savings-products.list`: List savings products from a Spanish bank.
- `finance.bic.search`: SWIFT/BIC codes for a country, optionally narrowed to a bank, with city and branch.
- `finance.transfer-fees.list`: Transfer fee options for a currency pair and amount, with pay-in and pay-out methods.

## Billing and subscriptions

Manage customers, plans, subscriptions, invoices and refunds in your billing account.

- `billing.credits.balance`: Get a customer's prepaid credit balances: money credit and usage credits. (needs a connected account)
- `billing.customer.create`: Create a customer in your connected billing account (returns the existing one for a known email). (needs a connected account)
- `billing.customer.delete`: Delete a customer and end their mandates and subscriptions; requires explicit confirmation. (needs approval; needs a connected account)
- `billing.customer.get`: Get customer contact details from your connected billing account. (needs a connected account)
- `billing.customer.update`: Update customer contact details, locale or business labels in your connected billing account. (needs a connected account)
- `billing.customers.list`: List the customers in your connected billing account, optionally by exact email. (needs a connected account)
- `billing.discounts.list`: List discount codes, values, redemption limits and validity dates. (needs a connected account)
- `billing.license.get`: Get customer license metadata, names and emails; includeKey explicitly returns the customer credential. (needs a connected account)
- `billing.licenses.list`: List customer license metadata, including names and emails; customer credentials are omitted. (needs a connected account)
- `billing.plan.create`: Create a recurring or on-demand plan in your own billing account. (needs a connected account)
- `billing.plan.get`: Read the amount limits and schedule of your own billing plan. (needs a connected account)
- `billing.portal.create`: Create a short-lived link to private customer billing details on your connected account. Give it only to an authenticated customer you have authorized. This call sends no email and changes no billing details. (needs a connected account)
- `billing.price.get`: Get an exact catalog price record, including decimal prices and tiers. (needs a connected account)
- `billing.prices.list`: List exact catalog price records, including tiers, trials and historic prices. (needs a connected account)
- `billing.product.get`: Get a product and its selling prices from your connected billing catalog. (needs a connected account)
- `billing.products.list`: List products and selling prices in your connected billing catalog. (needs a connected account)
- `billing.refund.create`: Refund all or part of a completed charge to the customer's original payment method. (needs approval; needs a connected account)
- `billing.refund.create-configured`: Refund a completed charge with an explicit speed preference and optional transfer reversal. Moves money back to the customer. (needs approval; needs a connected account)
- `billing.subscription-charge.create`: Charge an authorized subscription as a job and poll until its payment finishes; approval required. subscription.charge.once wraps it with a check of the subscription and authorisation and a payment read-back. (needs approval; needs a connected account)
- `billing.subscription-invoice.get`: Get subscription invoice amounts and customer names and emails; no payment card data. (needs a connected account)
- `billing.subscription-invoices.list`: List subscription invoice amounts and customer names and emails; no payment card data. (needs a connected account)
- `billing.subscription-item.get`: Get a subscription item quantity and applied price. (needs a connected account)
- `billing.subscription-item.update`: Change a customer subscription quantity; this can change charges and requires approval. (needs approval; needs a connected account)
- `billing.subscription-items.list`: List subscription quantities, price associations and usage billing flags. (needs a connected account)
- `billing.subscription-payment.get`: Read a charge or authorization payment belonging to your subscription. (needs a connected account)
- `billing.subscription.cancel`: Cancel a subscription at the end of its paid period (default) or immediately; returns its new state. (needs approval; needs a connected account)
- `billing.subscription.create`: Start a subscription in your billing account: authorize a customer against a plan, or schedule recurring charges for a stored customer. Charges continue until canceled when no count is set. subscription.start wraps this call with an exact-terms check, an approval step and a read-back. (needs approval; needs a connected account)
- `billing.subscription.get`: Get one subscription's status, price and billing dates from your billing account. (needs a connected account)
- `billing.subscription.update`: Pause, reactivate or change the plan of your own subscription, or change a recurring charge's schedule or amount. (needs approval; needs a connected account)
- `billing.subscriptions.list`: List subscriptions in your connected billing account, optionally for one customer or status. (needs a connected account)
- `billing.transaction-item.get`: Get one purchased charge item and its unit price. (needs a connected account)
- `billing.transaction-items.list`: List purchased charge items, unit prices and product associations. (needs a connected account)
- `billing.transaction.get`: Get one charge total, status and customer association from your connected billing account. (needs a connected account)
- `billing.transactions.list`: List charges in your connected billing account with totals and status, optionally per customer or subscription. (needs a connected account)
- `billing.usage.record`: Record a billable usage event for a customer; meters turn events into charges. (needs approval; needs a connected account)
- `billing.variant.get`: Get a catalog variant and its license settings; price records are available separately. (needs a connected account)
- `billing.variants.list`: List catalog variants, including license settings. (needs a connected account)

## Bonds and treasuries

Read bond yields, spreads, debentures and treasury auction results.

- `bonds.debenture.detail`: Detail a debenture: issuer, maturity, remuneration and indicative price.
- `bonds.debentures.search`: Search corporate debentures by code or issuer.
- `bonds.listed.list`: List an exchange's listed debt instruments with terms.
- `bonds.spread.get`: Read a government bond spread against its benchmark.
- `bonds.yields.history`: Read historical government bond yields for a country across expiries.
- `bonds.yields.list`: List government bond yield instruments across countries and expiries.
- `economy.latest-bond-auction.get`: Read latest bond auction in Zambia.
- `economy.latest-treasury-auction.get`: Read latest treasury auction in Zambia.
- `economy.treasury-auctions.list`: List treasury auctions in Zambia.
- `government.tbill-auctions.list`: Read a treasury bill auction release's results by tenor.
- `markets.bond-activity.get`: Read bond activity in India.
- `markets.bond-announcements.list`: List bond announcements in India.
- `markets.bonds.list`: List bonds in India.
- `markets.government-securities.get`: Read government securities in India.

## Brokers and regulated firms

Look up brokers, regulated firms, bank codes and payment networks.

- `finance.broker-dealers.search`: Search registered broker-dealer firms with registration status.
- `finance.brokers.compare`: Compare brokers.
- `finance.brokers.list`: List brokers.
- `finance.brokers.rank`: Rank brokers.
- `finance.brokers.search`: Search brokers.
- `finance.regulated-firms.search`: Search European regulated financial firms by name and return their published authorisation status and legal framework.
- `payments.directory.search`: Look up a participant bank in a US clearing network's directory by name, BIC, UID or LEI.
- `payments.network-participants.list`: Financial institutions participating in the real-time payments network, with their US state.

## Central banks

Follow central bank meetings, policy news, monetary data and calendars.

- `centralbank.calendar.list`: List a central bank's upcoming publications and rate decisions.
- `economy.central-bank-communications.search`: Search central bank communications in Argentina.
- `economy.central-bank-events.list`: List central bank events for the chosen market or collection.
- `economy.central-bank-news.list`: List central bank news in Argentina.
- `economy.monetary-indicators.get`: Read monetary indicators in Argentina.
- `economy.monetary-policy-meetings.list`: List monetary policy meetings in the United Kingdom.
- `economy.monetary-series.get`: Read monetary series in Argentina.
- `economy.monetary-series.list`: List monetary series in Argentina.
- `government.sg-mas.coins.list`: Read details of Singapore circulation currency coins from MAS.
- `government.sg-mas.news.search`: Full-text search over MAS news, media releases, speeches, parliamentary replies, publications and other content. Returns paginated results with facets for conte
- `government.sg-mas.suggestions.get`: Read search autocomplete suggestions from MAS.

## Commodities and metals

Get gold, silver, commodity and energy prices and price history.

- `commodities.news.list`: List commodity industry news headlines.
- `commodities.price-index.history`: Read daily commodity price index values.
- `commodities.prices.list`: Current commodity prices across categories, with day changes.
- `energy.auction-status.list`: List power auction statuses and operational messages.
- `energy.crude.prices.list`: List current crude oil benchmark prices.
- `energy.flows.search`: Search monthly official oil and natural gas supply, demand, imports, exports and stocks by country, product and flow.
- `energy.gas.prices.list`: List natural gas spot and futures settlement prices by hub.
- `energy.markets.list`: List energy market areas and their trading metadata.
- `energy.power-futures.prices.list`: List power futures settlement prices by maturity.
- `energy.prices.day-ahead.list`: List day-ahead electricity prices by bidding zone.
- `energy.prices.history`: Read an energy market's daily price history.
- `energy.prices.intraday.list`: List intraday electricity prices with volumes.
- `energy.series.observations`: Read dated energy observations and their units for a public statistical series, including electricity, petroleum and natural gas.
- `energy.spot-prices.list`: Day-ahead electricity spot prices at 15-minute resolution for a bidding zone and date range.
- `markets.bullion-history.get`: Read bullion history for metals markets.
- `markets.bullion-prices.get`: Read bullion prices for metals markets.
- `markets.bullion-trades.list`: List bullion trades for metals markets.
- `markets.commodity-price.get`: Read commodity price in France.
- `markets.corn-futures.list`: List corn futures in Brazil.
- `markets.electricity-board-minutes.search`: Search electricity board minutes in the Brazilian electricity market.
- `markets.electricity-document-filters.get`: Read electricity document filters in the Brazilian electricity market.
- `markets.electricity-documents.search`: Search electricity documents in the Brazilian electricity market.
- `markets.electricity-prices.get`: Read electricity prices in the Brazilian electricity market.
- `markets.gold-news.list`: List gold news for metals markets.
- `markets.gold-prices.get`: Read gold prices for metals markets.
- `markets.silver-prices.get`: Read silver prices for metals markets.
- `metals.gold.change.get`: Read the gold price move against the previous published price.
- `metals.gold.city-rates.list`: Read today's gold rates for a city.
- `metals.gold.gram-rates.get`: Read gold prices per gram by purity.
- `metals.gold.india-rates.history`: Read recent daily gold rates by purity.
- `metals.gold.india-rates.list`: List today's gold rates by weight and purity.
- `metals.gold.performance.get`: Read gold price performance over standard periods.
- `metals.gold.price.get`: Read the current gold spot price.
- `metals.gold.price.history`: Read gold price history.
- `metals.products.price-history`: Read a precious-metal product's recorded price history.
- `metals.products.prices.list`: List precious-metal product buy and sell prices.
- `metals.silver.india-rates.list`: List today's silver rates by weight.
- `metals.silver.price.get`: Read the current silver spot price.

## Company financials

Read a company's statements, ratios, revenue estimates, credit history and filings.

- `companies.credit-history.get`: Company credit ratings and disclosed default facts. Does not score a person.
- `companies.dividends.list`: List an issuer's declared dividends with decision and payment dates.
- `companies.financial-assessment.get`: Published corporate financial assessment and factual company indicators. Individuals and sole proprietors are not assessed.
- `companies.financial-ratios.get`: Published company financial ratios by period and statement basis; no invented calculations.
- `companies.financials.get`: Read one Lithuanian company's multi-year revenue and profit figures.
- `companies.ir-events.list`: List a company's investor-relations events.
- `companies.issued-securities.list`: List an issuer's registered securities with ISINs and listing details.
- `companies.issuer-filings.list`: List an issuer's regulatory filings and reports.
- `companies.issuers.search`: Search a securities registry's issuers by name or ticker.
- `companies.material-fact.detail`: Read a material-fact disclosure in full.
- `companies.material-facts.list`: List an issuer's material-fact disclosures.
- `companies.portfolio-omissions.list`: List organisations featured in a venture capital partnership's published account of opportunities it passed on, with available descriptions, websites and sector themes. Each entry belongs to a curated editorial portfolio retrospective.
- `companies.registry.financials.get`: Official company statements with periods, currency, line items and disclosed auditor names. At most 20 periods.
- `companies.reporting-companies.search`: Find issuers in an annual financial statement archive using exchange, industry, sector, initial letter or text filters. Results identify registrants and the classification used by the document catalogue.
- `companies.reporting-industries.list`: Browse the sector classification and nested industry identifiers used by an annual-statement document archive. The returned hierarchy supports narrowing issuer searches to a particular industry grouping or reporting-sector category.
- `companies.reporting-program-companies.list`: List issuers enrolled in a selected annual-statement publication programme, including available registrant names, sectors, industries and archive slugs. Each row identifies an organisation in that document publishing programme.
- `companies.revenue.estimate`: Published business revenue range estimates by period; never presented as audited turnover.
- `companies.sec-filings.list`: List a US-listed company's filings with the securities regulator, newest first, with the form type and a link to each, by its website domain or its ticker. For a ticker with a country choice use stocks.company.filings.
- `government.jp-financial-disclosures.announcements.get`: Read announcements for Japanese financial disclosure publications.
- `government.jp-financial-disclosures.document-metadata.get`: Read document metadata for Japanese financial disclosure publications.
- `stocks.analyst-ratings.history`: Read a stock's monthly analyst rating counts.
- `stocks.announcement.detail`: Read an exchange announcement's details.
- `stocks.announcements.list`: List announcements in Australia.
- `stocks.announcements.search`: Search announcements in Australia.
- `stocks.balance-sheets.list`: A listed company's balance sheets by period, with its assets, liabilities and equity.
- `stocks.cash-flow-statements.list`: A listed company's cash-flow statements by period, with operating, investing and financing cash flows.
- `stocks.company-announcements.list`: List a listed company's exchange announcements.
- `stocks.company.filings`: A company's regulatory filings by ticker and country, with form type, date and link. For a US-listed company by website domain or ticker use companies.sec-filings.list.
- `stocks.company.statements`: A listed company's financial statements.
- `stocks.disclosure-document.get`: Read disclosure document in Canada.
- `stocks.disclosure-documents.search`: Search disclosure documents in Canada.
- `stocks.dividend-yields.list`: Rank stocks by dividend yield.
- `stocks.dividends.upcoming.list`: List upcoming dividend payments with ex-dates.
- `stocks.earnings-surprise.get`: Earnings-per-share surprise for a stock over its recent quarters, reported versus estimated.
- `stocks.earnings.list`: A listed company's reported earnings, quarter by quarter, with earnings per share, revenue and the surprise against estimates.
- `stocks.earnings.recent.list`: List recently reported earnings with estimate comparisons.
- `stocks.earnings.submitted.list`: List companies that submitted financial reports this week.
- `stocks.earnings.upcoming.list`: List upcoming earnings reports with estimates.
- `stocks.exempt-distribution-filings.search`: Search exempt distribution filings in Canada.
- `stocks.financial-disclosures.search`: Search financial disclosures in Canada.
- `stocks.income-statements.list`: A listed company's income statements by period, with revenue, costs, profit and earnings per share.
- `stocks.ir.documents.list`: Investor-relations documents for a listed company, selected by document kind.
- `stocks.kpi.guidance`: The guidance a listed company has given for its operating metrics, with the range, the period and the source sentence.
- `stocks.kpi.metrics`: A listed company's reported operating metrics (customers, units, subscribers and the like), by period.
- `stocks.kpi.non-gaap`: A listed company's non-GAAP measures as it reports them, by period.
- `stocks.kpi.summary`: Read a stock's key fundamental metrics.
- `stocks.metrics.latest`: A listed company's latest valuation and financial ratios, such as price to earnings, margins, growth and debt to equity.
- `stocks.offer-documents.search`: Search offer documents in India.
- `stocks.segments.list`: Read one annual or quarterly income-statement breakdown by business segment, product and geography.
- `valuation.industry-multiples.list`: List EV-to-EBITDA ratios grouped by industry.
- `web.sec-edgar`: Sec Edgar.

## Credit scores and reports

Get a credit score or report for a person who agrees to share bank data.

- `finance.credit-report.create`: Start a consumer report about a consenting person's bank data; poll for completion. Produced reports have no published erasure endpoint. (needs approval)
- `finance.credit-report.get`: Poll a consented consumer report and read masked bank account balance summaries when ready.
- `finance.credit-score.band`: Place a credit score in its band for a scoring system and say how far it is from the next band.
- `finance.credit-score.get`: Read a credit risk score about a person from consented bank data; higher is safer on a 1 to 99 scale.
- `finance.credit-subject.create`: Create a consumer credit subject from the person's consented identity data; identity values are forwarded once and not stored locally. (needs approval)
- `finance.credit-subject.delete`: Delete the credit subject and end its local report connections; previously produced reports are not proven erased. (needs approval)
- `finance.credit-subject.get`: Read a consumer credit subject's state, report purpose and held identity field names; never the identity values.
- `finance.income-insights.get`: Read a person's income categories and modeled amounts from a consented consumer report; forecasts are explicitly separate.
- `finance.partner-risk-insights.get`: Read credit risk scores about a consenting person from bank data, using the models chosen at report creation. Native scores range from 1 to 999; higher is safer. Read the base report first. The models are charged when the report is created; reading them is not charged again.
- `finance.payment-return-risk.evaluate`: Check a person's consented US bank debit for return risk. (needs approval)
- `finance.payment-return-risk.prepare`: Prepare a consented US bank connection for debit return-risk checks; no payment is sent and no score is returned.
- `finance.payment-return-risk.report-decision`: Record the decision taken on an evaluated bank debit; no payment is sent. (needs approval)
- `finance.payment-return-risk.report-return`: Record the bank return code for an evaluated debit; no payment is sent. (needs approval)
- `finance.payment-return-risk.schedule`: Recommend a date for a person's consented US bank debit; no payment is sent. (needs approval)

## Crowdfunding and fundraisers

Browse crowdfunding campaigns, fundraisers, updates and charities.

- `charity.foundations.search`: Search Swiss charitable foundations by cause and form of impact.
- `fundraising.campaign-categories.list`: List fundraising campaign categories.
- `fundraising.campaign-updates.list`: List a fundraising campaign's posted updates.
- `fundraising.campaign.detail`: Read a fundraising campaign's goal, story and progress.
- `fundraising.campaigns.search`: Search fundraising campaigns with progress and deadlines.
- `fundraising.fundraiser-comments.get`: Read fundraiser comments on ketto.org. Returns personal data: personal details as published.
- `fundraising.fundraiser-detail.get`: Read fundraiser detail on ketto.org. Returns personal data: personal details as published.
- `fundraising.fundraiser-updates.get`: Read fundraiser updates on ketto.org. Returns personal data: personal details as published.
- `fundraising.fundraisers.list`: Browse fundraisers on ketto.org. Returns personal data: personal details as published.
- `fundraising.fundraisers.search`: Search fundraisers on ketto.org. Returns personal data: personal details as published.
- `fundraising.public-statistics.get`: Read aggregate public fundraising campaign and donor counts on ketto.org.
- `fundraising.trending-fundraisers.get`: Read trending fundraisers on ketto.org. Returns personal data: personal details as published.
- `marketplace.campaign-comments.get`: Read campaign comments on indiegogo.com. Returns personal data: personal details as published.
- `marketplace.creator-projects.get`: Read creator projects on indiegogo.com. Returns personal data: personal details as published.
- `marketplace.crowdfunding-campaign-faq.get`: List public crowdfunding campaign faq on indiegogo.com.
- `marketplace.crowdfunding-campaign-rewards.list`: List public crowdfunding campaign rewards from the selected marketplace.
- `marketplace.crowdfunding-campaign-updates.get`: List public crowdfunding campaign updates on indiegogo.com.
- `marketplace.crowdfunding-campaign.get`: Read public crowdfunding campaign on indiegogo.com.
- `marketplace.crowdfunding-campaigns.search`: Search public crowdfunding campaigns on indiegogo.com.
- `marketplace.featured-campaigns.get`: List featured crowdfunding campaigns with their public project identifiers and display titles on indiegogo.com.

## Disputes

Respond to payment disputes with evidence.

- `payments.dispute.accept`: Accept a dispute in your connected account; this commits the disputed money. (needs approval; needs a connected account)
- `payments.dispute.arbitration-report.get`: Get the file identifier of a submitted dispute evidence report; report bytes are not returned. (needs a connected account)
- `payments.dispute.arbitration.submit`: Submit saved arbitration evidence, which can include customer communications and delivery details. (needs approval; needs a connected account)
- `payments.dispute.evidence-report.get`: Get the file identifier of a submitted dispute evidence report; report bytes are not returned. (needs a connected account)
- `payments.dispute.evidence.get`: Get saved dispute evidence, including requested customer communications and delivery facts, with the disputed amount, the evidence deadline, the evidence kinds the dispute asks for and the disputed payment. (needs a connected account)
- `payments.dispute.evidence.submit`: Submit saved dispute evidence, which can include customer communications and delivery details. (needs approval; needs a connected account)
- `payments.dispute.evidence.update`: Update a dispute evidence draft, including customer communications or delivery facts; does not submit it. (needs a connected account)
- `payments.dispute.get`: Get a disputed payment amount, reason and reversal dates in your account. (needs a connected account)
- `payments.dispute.scheme-files.list`: List scheme evidence file identifiers for a dispute; file contents are not returned. (needs a connected account)
- `payments.disputes.list`: List disputed payment amounts and reasons in your account. (needs a connected account)
- `payments.evidence-file.get`: Get evidence file metadata, which may include a customer-related filename; no download URL or file contents. (needs a connected account)
- `payments.evidence-file.upload`: Upload a PDF, JPEG or PNG evidence file from your private storage, at most 4 MB; it may contain customer details. (needs a connected account)

## ETFs and mutual funds

Look up ETFs and mutual funds: holdings, fees, performance and distributions.

- `asset-management.approaches.list`: List portfolio-management investment approaches with returns and benchmark comparisons.
- `asset-management.approaches.search`: Search portfolio-management approaches and providers by name.
- `asset-management.aum-breakdown.list`: Break assets under management down by strategy and service type.
- `asset-management.industry.summary`: Summarise the portfolio-management industry's assets under management and their monthly trend.
- `asset-management.provider.detail`: Read a portfolio-management provider's detail.
- `etf.broad-market-funds.list`: List broad market funds in an US fund range.
- `etf.detail.get`: Read an ETF's NAV, costs and performance summary.
- `etf.distributions.list`: List an ETF's distribution history.
- `etf.documents.list`: List an ETF's published documents.
- `etf.fund-facts.get`: Read fund facts in an US fund range.
- `etf.fund-fees.get`: Read fund fees in an US fund range.
- `etf.fund-range.list`: List fund range in an US fund range.
- `etf.fund-range.search`: Search fund range in an US fund range.
- `etf.fund-sectors.get`: Read fund sectors in an US fund range.
- `etf.holdings-document.get`: Read holdings document in an US fund range.
- `etf.list`: List exchange-traded funds with costs and returns.
- `etf.monthly-performance.list`: List an ETF's monthly returns since inception.
- `etf.price.get`: Read an ETF's latest price and day change.
- `etf.price.history`: Read an ETF's daily price history.
- `etf.sector-allocation.list`: List an ETF's sector weights.
- `funds.categories.list`: List mutual fund categories and subcategories.
- `funds.detail.get`: Read a mutual fund's NAV, costs and returns.
- `funds.distributions.list`: List a fund's dividend and split announcements.
- `funds.holdings.list`: The holdings of a fund as a national fund site publishes them, by the fund's local code.
- `funds.institutional-rankings.list`: Institutional fund performance rankings from disclosure filings, a row per fund.
- `funds.list`: Listed funds and ETFs with tickers, names and size, filterable by type or category.
- `funds.managers.list`: List mutual fund management companies.
- `funds.nav.history`: Read a mutual fund's daily net-asset-value history.
- `funds.periodic-data.list`: Read a fund's periodic share value and assets data.
- `funds.portfolio.summary`: Read a fund's asset allocation summary.
- `funds.rankings.list`: Rank mutual funds by their published returns.
- `funds.reit.rankings.list`: Rank real-estate investment funds by market value.
- `funds.risk-rating.get`: Read a fund's risk rating against its category.
- `funds.search`: Search investment funds by name or code.

## Exchange rates

Look up exchange rates, convert currencies and get conversion quotes.

- `currency.rates.venues.list`: Compare a currency's buy and sell rates across market venues.
- `economy.average-exchange-rates.get`: Read average exchange rates in Zambia.
- `economy.currency-price-history.get`: Read currency price history in Argentina.
- `economy.currency-prices.get`: Read currency prices in Argentina.
- `economy.official-exchange-rates.get`: Read official exchange rates in Zambia.
- `finance.currencies.list`: List currency symbols and names, optionally including alternative and inactive currencies. The catalogue request is free.
- `finance.currency-index.get`: Read a currency basket index values and changes.
- `finance.currency.convert`: Convert an amount from one currency to another at the latest central bank reference rate.
- `finance.exchange-rate.get`: The latest central bank reference exchange rate between two currencies.
- `finance.exchange-rate.history`: Daily exchange rates between two currencies over a period, with the average, low, high and change.
- `finance.exchange-rates.official.list`: List official exchange rates published by a monetary authority.
- `finance.fx-quotes.list`: List indicative foreign-exchange quotes for major pairs.
- `finance.fx.conversion.create`: Convert currency in your own connected account; requires approval before moving money. (needs approval; needs a connected account)
- `finance.fx.conversion.get`: Get a currency conversion, or reconcile an unclear outcome using the original call key. (needs a connected account)
- `finance.fx.quote.create`: Create an executable currency quote without moving money. (needs a connected account)
- `finance.fx.quote.get`: Get an executable quote and its validity in your connected account. (needs a connected account)
- `finance.market-rates.convert`: Convert an amount using market currency rates, with decimal arithmetic by default. Estimated call budget 0.0012 USD; premium direct pricing is provisional.
- `finance.market-rates.historical`: Read daily historical market currency rates, not central-bank reference rates. At most 100 requested symbols. Estimated call budget 0.0012 USD; premium pricing is provisional.
- `finance.market-rates.historical-bulk`: Read up to 31 daily market-rate snapshots as a background job. Each result echoes your row id; missing or failed rows are free. Native time series requires enabled access and consecutive dates in one calendar month. Worst-case provisional budget 0.0372 USD. (needs a connected account)
- `finance.market-rates.latest`: Read latest market currency rates, not central-bank reference rates. At most 100 requested symbols. Estimated call budget 0.0012 USD; premium pricing is provisional.
- `finance.market-rates.ohlc`: Read premium open, high, low, close and average market currency prices for a completed interval. Explicit premium:true required. Provisional maximum budget 0.0012 USD.
- `fx.client-sentiment.list`: List retail client positioning per currency pair.
- `fx.pivot-points.get`: Read classic pivot points with supports and resistances for a pair.
- `fx.quote.get`: A currency pair's live quote, with open, high, low, spread and performance context.
- `fx.quotes.list`: List indicative quotes for major currency pairs.
- `fx.retail-sentiment.get`: Read retail sentiment.
- `fx.rollover-rates.list`: List overnight rollover rates for currency pairs.
- `fx.session-hours.list`: List forex trading session hours per market and day.

## Google Finance

Get stock, index and currency quotes and market news from Google Finance.

- `google.finance.markets`: Google Finance's market overview, with the leading indexes, currencies and movers.
- `google.finance.news`: Read the financial news on the front page of Google Finance; returns its news sections with their stories.
- `google.finance.quote`: Get the current quote of a stock, index, currency or future from Google Finance. For a plain stock ticker price use stocks.quote.live.
- `google.finance.tickers.search`: Search Google Finance for stocks, indexes and other instruments by name or ticker.

## India GST

File GST returns and issue e-invoices and e-way bills for Indian taxpayers.

- `government.in-gst-publications.gst-notifications.get`: Read gst notifications for Indian goods and services tax publications.
- `government.in-gst-publications.updates.list`: List updates for Indian goods and services tax publications.
- `india.gst.consent.create`: Connect a taxpayer using a portal OTP for returns or NIC API credentials for invoices and way bills. Credentials are kept in the encrypted vault. Returns OTP goes to the registered taxpayer. Estimated maximum call cost is $0.12. (needs approval)
- `india.gst.consent.delete`: Read, verify or disconnect taxpayer consent. Expired access requires reconnecting. Disconnect leaves filed returns and issued documents untouched. Estimated maximum call cost is $0.12.
- `india.gst.consent.get`: Read, verify or disconnect taxpayer consent. Expired access requires reconnecting. Disconnect leaves filed returns and issued documents untouched. Estimated maximum call cost is $0.12.
- `india.gst.consent.verify`: Read, verify or disconnect taxpayer consent. Expired access requires reconnecting. Disconnect leaves filed returns and issued documents untouched. Estimated maximum call cost is $0.12.
- `india.gst.einvoice.cancel`: Cancel an issued e-invoice irreversibly. Estimated maximum call cost is $0.12. gst.einvoice.cancel wraps it with a read of the invoice, an approval step and a state check. (needs approval)
- `india.gst.einvoice.create`: Register one legal e-invoice. Returns government IRN, acknowledgement and unchanged signed invoice or QR strings; includes party identities and addresses inside signed data. Estimated maximum call cost is $0.12. (needs approval)
- `india.gst.einvoice.get`: Read an issued e-invoice and its legal signed data. Estimated maximum call cost is $0.12.
- `india.gst.einvoice.qr.get`: Read the unchanged NIC-signed QR string for an issued invoice. The B2C payment QR is a separate idea. Estimated maximum call cost is $0.12.
- `india.gst.ewaybill.cancel`: Cancel a government e-way bill irreversibly. Estimated maximum call cost is $0.12. (needs approval)
- `india.gst.ewaybill.consolidation.create`: Create a consolidated e-way bill from up to 500 government numbers already issued by this taxpayer. Only numbers recorded through this connection are accepted. Estimated maximum call cost is $0.12. (needs approval)
- `india.gst.ewaybill.create`: Issue one e-way bill. Returns the government number the taxpayer must print. Includes taxpayer and transport document information. Estimated maximum call cost is $0.12. (needs approval)
- `india.gst.ewaybill.extend`: Update the vehicle or extend an e-way bill with taxpayer transport details. Estimated maximum call cost is $0.12. (needs approval)
- `india.gst.ewaybill.get`: Read a government e-way bill, including taxpayer identities, document and vehicle details. Estimated maximum call cost is $0.12.
- `india.gst.ewaybill.vehicle.update`: Update the vehicle or extend an e-way bill with taxpayer transport details. Estimated maximum call cost is $0.12. ewaybill.update wraps it with a read, an approval step and a read-back.
- `india.gst.filing-otp.send`: Send the EVC filing OTP to the authorised signatory. Estimated maximum call cost is $0.12. (needs approval)
- `india.gst.filings.list`: List public GST filing history, including taxpayer return periods and filing dates. No consent is needed. Estimated maximum call cost is $0.12.
- `india.gst.gstr1.save`: Save GSTR1 in one request. Returns taxpayer and counterparty tax information. At most 500 invoice records and 5 MB; split larger returns yourself. Estimated maximum call cost is $0.12.
- `india.gst.gstr2a.records.get`: Read GSTR2A invoice records. Large file parts are fetched server-side with a 10 MB cap and returned as rows. At most 500 rows per page. Estimated maximum call cost is $0.12.
- `india.gst.gstr2b.generate`: Request generation of 2B; check the returned operation reference for completion. Estimated maximum call cost is $0.12.
- `india.gst.gstr2b.records.get`: Read GSTR2B invoice records. Large file parts are fetched server-side with a 10 MB cap and returned as rows. At most 500 rows per page. Estimated maximum call cost is $0.12.
- `india.gst.gstr3b.save`: Save GSTR3B in one request. Returns taxpayer and counterparty tax information. At most 500 invoice records and 5 MB; split larger returns yourself. Estimated maximum call cost is $0.12.
- `india.gst.ims.actions.reset`: Update taxpayer IMS invoice actions in one bounded request. Check the operation reference for completion. Estimated maximum call cost is $0.12.
- `india.gst.ims.actions.save`: Update taxpayer IMS invoice actions in one bounded request. Check the operation reference for completion. Estimated maximum call cost is $0.12.
- `india.gst.ims.invoices.count`: Read taxpayer IMS invoice counts. Estimated maximum call cost is $0.12.
- `india.gst.ims.invoices.get`: Read taxpayer IMS invoices, including counterparty tax identifiers and values. Estimated maximum call cost is $0.12.
- `india.gst.return-operation.get`: Read the state of a saved, prepared or filed return, 2B generation, or IMS action. Estimated maximum call cost is $0.12.
- `india.gst.return.file`: File a taxpayer return using the current government summary. A signature is supplied by the builder; no private signing key reaches this call. Filing is irreversible. Estimated maximum call cost is $0.12. (needs approval)
- `india.gst.return.prepare`: Prepare a return for filing; processing does not mean filed. Estimated maximum call cost is $0.12.
- `india.gst.return.summary.get`: Read a taxpayer return summary and checksums by form. Returns tax totals, not a compliance score. Estimated maximum call cost is $0.12.

## Insider and fund filings

See insider trades and who holds a company's shares.

- `stocks.block-deals.list`: List an exchange's disclosed block and bulk deals.
- `stocks.broker-activity.list`: List broker-level buying and selling for a stock.
- `stocks.broker-distribution.get`: Read broker distribution in Turkey.
- `stocks.ccass-holdings.get`: Clearing-system participants and their holdings for a Hong Kong stock on a date.
- `stocks.congress.trades`: List publicly filed securities transactions by members of Congress. Returns personal data: Public names, profiles, wallet activity or published records; see the result fields..
- `stocks.insider-buys.list`: Get insider buys.
- `stocks.insider-buys.significant`: Get significant insider buys.
- `stocks.insider-clusters.list`: List recent cluster buys by multiple insiders.
- `stocks.insider-flow.history`: Read aggregate daily insider purchase and sale activity.
- `stocks.insider-options.list`: Get insider stock options.
- `stocks.insider-sales.list`: Get insider sales.
- `stocks.insider-trades.list`: Trades in a listed company's shares by its own officers and directors, as filed with the regulator. Returns personal data: the names and titles of the company insiders who traded, as they appear in public filings.
- `stocks.insiders.search`: Search reported US insider transactions in plain words, with each hit's title, source and page. The hit text names the insiders as the public filings do. Returns personal data: the names of company insiders, as the public filings name them.
- `stocks.institutional-filing.get`: Read institutional filing in the United States.
- `stocks.institutional-filings.list`: List institutional filings in the United States.
- `stocks.institutional-holdings.list`: The institutions that hold a listed company's shares, from their quarterly filings, with shares held and value.
- `stocks.institutional-managers.list`: List institutional managers in the United States.
- `stocks.institutional-managers.search`: Search institutional managers in the United States.
- `stocks.manager-security-history.get`: Read manager security history in the United States.
- `stocks.ownership-filings.list`: Get 13D filings.

## Insurance

Compare insurance products, health plans, car cover and life insurance quotes.

- `government.us-illinois-insurance.site.search`: Perform a keyword search across the IDOI website to find bulletins, reports, regulations, and general content pages. Returns paginated results with title, descr
- `government.us-insurance-regulation.committees.list`: List committees for US insurance regulation.
- `government.us-insurance-regulation.glossary-terms.list`: List glossary terms for US insurance regulation.
- `government.us-insurance-regulation.newsroom.search`: Search newsroom for US insurance regulation.
- `health.insurance-conditions.list`: List public insurance conditions on menzis.nl.
- `health.insurance-plans.list`: List public insurance plans on menzis.nl.
- `insurance.car-makes.list`: List the car makes a vehicle-insurance quote form offers for one first-registration month
- `insurance.car-models.list`: List the models one make's insurance quote form offers for one first-registration month
- `insurance.car-trims.list`: List the trims one model's insurance quote form offers for one first-registration month
- `insurance.coverages.list`: Coverage types for an insurance product, with plain-language descriptions.
- `insurance.critical-illness.quote`: Quote a critical illness insurance premium from coverage inputs.
- `insurance.discounts.list`: Discount programmes for an insurance product, with descriptions.
- `insurance.health-plans.list`: List health and dental plan tiers with coverage summaries.
- `insurance.product.detail`: An insurance product's page details, addressed by its product slug.
- `insurance.products.list`: Insurance products an insurer offers, with links to each product page.
- `insurance.term-life.detail`: Read term life insurance product terms and coverage range.
- `insurance.term-life.quote`: Quote a term life insurance premium from age and coverage inputs.
- `insurance.term-life.rates-table.get`: Read representative term life monthly rates by age.

## Interest rates

See a central bank's policy interest rate over time.

- `markets.interest-rates.list`: A central bank's policy interest rate over time.
- `real-estate.mortgage-rates`: Get mortgage rates.

## IPOs

Track upcoming and recent IPOs with grey market premiums.

- `stocks.ipo-gmp.list`: List IPOs with their grey market premium.
- `stocks.ipo.detail`: Read an IPO's pricing, dates and lot terms.
- `stocks.ipo.news`: List news coverage of an IPO.
- `stocks.ipo.subscription.list`: List live IPO subscription levels by investor category.
- `stocks.ipos.calendar.list`: List an exchange's IPO calendar with dates and pricing.
- `stocks.ipos.search`: Search IPOs by company name.

## Kalshi

Read Kalshi prediction markets: prices, trades, volume and order books.

- `prediction.kalshi.events`: Events on the Kalshi prediction market with their markets.
- `prediction.kalshi.markets`: Markets on the Kalshi prediction market, with prices and volume.
- `prediction.kalshi.open-interest`: Daily open interest of a Kalshi market.
- `prediction.kalshi.order-books`: Historical order book snapshots of a Kalshi market.
- `prediction.kalshi.prices`: Price history of a Kalshi market, daily or hourly.
- `prediction.kalshi.trades`: Individual trades on a Kalshi market.
- `prediction.kalshi.volumes`: Daily trading volume of a Kalshi market.

## Loans, mortgages and cards

Compare loans, mortgage rates and credit cards, and estimate repayments.

- `banking.fixed-mortgage-details.get`: Read fixed mortgage details from an Australian bank.
- `banking.fixed-mortgage-rates.get`: Read fixed mortgage rates from an Australian bank.
- `banking.mortgage-calculators.list`: List mortgage calculators from an Australian bank.
- `banking.mortgage-grants.list`: List mortgage grants from an Australian bank.
- `banking.mortgage-offers.list`: List mortgage offers from an Australian bank.
- `banking.mortgage-products.list`: List mortgage products for the chosen market or collection.
- `banking.refinance-information.get`: Read refinance information from an Australian bank.
- `banking.variable-mortgage-rates.get`: Read variable mortgage rates from an Australian bank.
- `consumer.credit-cards.list`: List credit card products with fees and features.
- `consumer.guides.list`: List consumer finance guides and calculators.
- `credit-cards.list`: Credit cards a bank currently offers, with fees and marketing highlights.
- `credit-cards.terms.get`: The published pricing terms for a credit card, addressed by the card list's identifier.
- `loans.rates.list`: Consumer loan products other than mortgages, with their current rate ranges.
- `microloans.partners.list`: List microfinance field partners with performance metrics.
- `mortgage.quotes.search`: Compare mortgage quotes across lenders for a borrower scenario.
- `mortgage.rates.list`: Current mortgage products and their rates, a row per product or fixation period.
- `mortgage.rates.lowest.get`: Read the lowest current mortgage rates by product type.
- `mortgage.rates.national.list`: List national average mortgage rates by product.
- `mortgage.repayments.calculate`: Calculate monthly repayments and total interest for a home loan on the chosen site.

## Market data and rates

Read market overviews, reference rates, futures, derivatives and trading hours.

- `derivatives.certificates.detail`: Read a leveraged certificate's quote and terms.
- `derivatives.certificates.list`: List leveraged certificates with strikes and barriers.
- `finance.corporate-actions.list`: List scheduled corporate actions on private securities.
- `finance.credit-ratings.list`: List corporate credit ratings with sectors and dates.
- `finance.infrastructure-trust-metrics.get`: Read infrastructure trust metrics for Indian infrastructure investment trusts.
- `finance.property-trust-debt.get`: Read property trust debt for Indian real-estate investment trusts.
- `finance.reference-rates.history`: Read a monetary authority's daily reference rates for major currencies.
- `markets.central-bank-rates.list`: List central bank policy rates with changes and meeting dates.
- `markets.cfd-instruments.search`: Search a forex and CFD broker's tradeable instruments by keyword.
- `markets.clearing-news.list`: List clearing news in India.
- `markets.clearing-notifications.list`: List clearing notifications in India.
- `markets.clearing-research.list`: List clearing research in India.
- `markets.data-products.list`: List an exchange's market data products.
- `markets.data-schemas.list`: List a market data platform's schemas with column definitions.
- `markets.forex-trades.get`: Read forex trades in India.
- `markets.futures-products.list`: List futures products for commodity futures.
- `markets.futures-settlements.list`: Read daily commodity contract observations with open, high, low, closing and official end-of-session prices, expiry month, open interest and traded volume. Use product and date filters to select the relevant exchange records.
- `markets.holidays.list`: List market and bank holidays with closures.
- `markets.instruments.list`: List tradeable instruments with metadata.
- `markets.instruments.search`: Search instruments in France.
- `markets.interbank-rates.get`: Read interbank rates in Poland.
- `markets.money-market.get`: Read Indian short-term interbank trading statistics, including opening, highest, lowest and latest rates, turnover, previous volume and weighted averages. Published figures describe the clearing market's instruments and reporting period.
- `markets.overview.list`: List major market instruments with latest prices.
- `markets.rate-changes.list`: The dates on which a benchmark rate changed, with the level that applied in each period.
- `markets.reference-rates.history`: Read a benchmark rate's daily history over a date range.
- `markets.reference-rates.list`: List a benchmark rate's current values by tenor.
- `markets.sentiment.summary.get`: Current smart-money and retail sentiment confidence readings with the spread between them.
- `markets.settlement-statistics.get`: Read settlement statistics in India.
- `markets.summary.get`: Read a market's headline indices and session statistics.
- `markets.trading-hours.get`: Read an exchange's trading hours and timezone.
- `markets.trading-summary.get`: Summarise a session's trading by instrument segment.
- `markets.trending-symbols.list`: Symbols trending by sentiment or community attention, with ranks and scores.
- `markets.volatility.curve.get`: The current volatility futures term structure, a row per contract month.
- `markets.volatility.history`: Daily volatility index and futures prices for a date range of at most a month.

## Money transfers

Save recipients, quote and send money, and check your balances.

- `finance.balances.list`: Read ledger and available balances, per currency, in your own account. (needs a connected account)
- `finance.beneficiaries.list`: List saved beneficiaries, including recipient identity, address and bank details. (needs a connected account)
- `finance.beneficiaries.search`: Find a saved beneficiary by their exact bank account and routing code; returns name and account details. (needs a connected account)
- `finance.beneficiary-requirements.get`: Discover conditional beneficiary fields; an optional draft forwards holder identity and bank details for validation only. (needs a connected account)
- `finance.beneficiary-transfers.list`: List transfer history for your saved beneficiary during a date range. (needs a connected account)
- `finance.beneficiary.create`: Save a recipient's bank details in your own account, in any currency or country the account serves; returns the saved record. (needs a connected account)
- `finance.beneficiary.delete`: Delete a saved beneficiary from your own account after explicit confirmation. (needs approval; needs a connected account)
- `finance.beneficiary.get`: Read a saved beneficiary, including their name, bank details, scheme and supplied contact details. (needs a connected account)
- `finance.cash-redemption.cancel`: Cancel your own cash-redemption link after explicit confirmation. (needs approval; needs a connected account)
- `finance.cash-redemption.create`: Create a payout redemption link and send it to the named recipient; uses their name, phone and optional email. (needs approval; needs a connected account)
- `finance.cash-redemption.get`: Read the status of your own cash-redemption link. (needs a connected account)
- `finance.profiles.list`: List your connected account profiles; holder names, contact details and addresses are returned only when requested. (needs a connected account)
- `finance.receiving-account.create`: Create a receiving account with bank details and holder identity; requires approval for the account commitment. (needs approval; needs a connected account)
- `finance.receiving-account.get`: Get bank details and holder identity for your own receiving account. (needs a connected account)
- `finance.receiving-accounts.list`: List your receiving accounts, including bank details and holder identity. (needs a connected account)
- `finance.transfer-batch.get`: Read the status and transfers of your own payout batch, up to 1000 rows. (needs a connected account)
- `finance.transfer-quote.create`: Create a transfer quote with fees and payout options; this does not send money. (needs a connected account)
- `finance.transfer-quote.get`: Read a transfer quote, its expiry, fees and payment options. (needs a connected account)
- `finance.transfer-quote.update`: Change a transfer quote recipient, payout method or tax details; changing payout method requires approval. (needs approval; needs a connected account)
- `finance.transfer-requirements.get`: Discover transfer reference, purpose and source-of-funds requirements for your quote and beneficiary. (needs a connected account)
- `finance.transfer.create`: Send money from your own account to a saved or inline beneficiary, in an explicit currency; approval required. With a quoteId the transfer is bound to that quote's rate and amounts. The result may be pending (some accounts wait for funding, see finance.transfer.fund); read it again with finance.transfer.get. (needs approval; needs a connected account)
- `finance.transfer.create-bulk`: Transfer money to saved beneficiaries as a job; at most 100 uniquely identified transfers, with approval required. (needs approval; needs a connected account)
- `finance.transfer.fund`: Fund a transfer from your connected account within approved debit and fee limits. Requires approval; ambiguous outcomes must be reconciled before trying again. (needs approval)
- `finance.transfer.get`: Read the confirmed status and principal of your own transfer. (needs a connected account)
- `finance.transfers.list`: List transfers from your connected account, with exact date, recipient and state filters. (needs a connected account)

## Open banking

Connect bank accounts with consent and read balances, holders and transactions.

- `banking.account.balances.get`: Read current bank-reported balances for one owned account.
- `banking.account.get`: Read an owned bank account description, type and masked number.
- `banking.account.owners.get`: Read bank-supplied account-holder names and only the contact fields you request. No person is scored or ranked.
- `banking.accounts.list`: List accounts within an owned bank consent; account numbers stay masked.
- `banking.connection.start`: Start a bank consent for an end user. The monthly connection rental begins only after authorization.
- `banking.connection.status`: Read a bank connection state and complete its one-time account claim.
- `banking.institution.get`: Read a bank directory entry.
- `banking.institutions.search`: Find banks available in a country.
- `banking.transactions.list`: Read up to 100 transactions from an owned bank account within an explicit date range.
- `banking.transactions.sync`: Read genuine transaction additions, modifications and removals since an owned consent cursor.
- `banking.user.create`: Create an end-user banking record on your connected account, optionally supplying consented name, birth date, contact details and government identity numbers. Reusing your user ID returns the same record. (needs a connected account)
- `banking.user.delete`: Permanently delete your end-user banking record and associated bank connections. Requires confirm: true. Independent reports and identity-verification records are not erased by this call. (needs approval; needs a connected account)
- `banking.user.get`: Read your end-user banking record and only the requested consented name, birth date, email, phone, address or government identity numbers. Identity facts are omitted by default. (needs a connected account)
- `finance.account-availability.check`: Check whether a person’s mobile has financial accounts and return opaque consent choices; requires their permission.
- `finance.consent-collection.create`: Combine an existing mandatory financial consent with one newly created consent for the same person. Returns a protected approval link. Maximum estimate USD 0.20. (needs approval)
- `finance.consent-collection.get`: Read the two member consent states. Returns owned row handles usable for consent reads and financial data sessions; includes no financial record content.
- `finance.consent-status.get`: Read the last financial data fetch time and range without starting or restarting a fetch.
- `finance.consent.create`: Create a person-approved financial consent covering explicit record types, dates, use, frequency and retention. Returns a protected consent link. (needs approval)
- `finance.consent.get`: Read a financial consent’s state and authorized scope; no account locators or route identifiers are returned.
- `finance.consent.revoke`: Revoke a person’s financial consent. (needs approval)
- `finance.data-session.create`: Start a financial data fetch under an owned active consent for an explicit date range.
- `finance.data-session.get`: Read requested financial balance and transaction facts from a consented session. Account numbers stay masked; returns up to 100 accounts and 100 transactions.
- `finance.data-sessions.list`: List data sessions under one owned consent. Each selected session is checked against that consent before its reference is returned.
- `finance.data.refresh`: Request a financial data refresh under an owned consent. Restart is an explicit option; this operation changes state.
- `finance.institution.get`: Read public institution details using its owned row reference.
- `finance.institutions.list`: List public financial institutions and their supported record types, up to 100 per page.

## Payment links

Create payment links, send them to customers and track their orders.

- `payments.payment-link.cancel`: Cancel a payment link. It stays readable and earlier payments are not refunded. (needs approval; needs a connected account)
- `payments.payment-link.create`: Create a payment link (payment request) for a customer. May contact the customer only when notification or reminder options are enabled. Accepts customer name, email and phone for delivery, and optional bank and fund account references for payment validation. (needs approval; needs a connected account)
- `payments.payment-link.get`: Read a payment link from your connected merchant account. (needs a connected account)
- `payments.payment-link.notify`: Send a payment link to its saved customer by email or text message. (needs approval; needs a connected account)
- `payments.payment-link.orders.list`: List your order IDs, amounts and states for a payment link; at most 1000 orders. (needs a connected account)
- `payments.payment-link.update`: Update a payment link in your connected account: reference, expiry, notes, description, methods, lines, addresses, minimum amount or archived state. A source declines any field its account cannot change. (needs approval; needs a connected account)
- `payments.payment-links.list`: List payment links in your connected merchant account. (needs a connected account)

## Payment mandates

Record customer consent for repeat debits and revoke it.

- `payments.mandate.create`: Register customer consent for future payments; financial credentials are sent once and omitted from the result. (needs approval; needs a connected account)
- `payments.mandate.get`: Get a customer payment authorization state without financial credentials. (needs a connected account)
- `payments.mandate.revoke`: Revoke a customer payment authorization and cancel subscriptions that use it. mandate.revoke finds the mandate, asks approval and reads its state back. (needs approval; needs a connected account)
- `payments.mandates.list`: List a customer's payment authorizations without bank accounts or wallet credentials. (needs a connected account)

## Payment QR codes

Create QR codes customers scan to pay.

- `payments.qr-code.close`: Close a payment QR code. It stays readable and earlier payments are not refunded. (needs approval; needs a connected account)
- `payments.qr-code.create`: Create a payment QR code in your connected merchant account and copy its image to platform storage. Optional tax invoice data includes the customer name. (needs a connected account)
- `payments.qr-code.get`: Read a qr code from your connected merchant account. (needs a connected account)
- `payments.qr-code.payments.list`: List payments collected through a QR code in your connected merchant account. (needs a connected account)
- `payments.qr-code.update`: Update a qr code in your connected merchant account. (needs a connected account)
- `payments.qr-codes.list`: List payment QR codes in your connected merchant account. (needs a connected account)

## Payments

Take payments, check out customers, hold and capture money, and save payment methods.

- `payments.account.connect`: Start or resume onboarding of your own payment account; returns an embedded next step or a hosted onboarding link for older accounts.
- `payments.account.session.create`: Create a short-lived session for your own connected payment account. Always enables account_onboarding, account_management and notification_banner (required so the payment service stays liable for losses), plus the requested components. Returns the client secret and the public key to load the components with. Free; the client secret is returned once and never saved for replay. Call payments.account.connect first if no account is connected. (needs a connected account)
- `payments.account.status`: Check whether your connected payment account can take charges and receive payouts, and what is still due. (needs a connected account)
- `payments.capture.get`: Read a captured payment in your own connected account, including its amount and settlement state. (needs a connected account)
- `payments.captures.list`: List capture amounts and status for a payment in your account. (needs a connected account)
- `payments.checkout.create`: Create a hosted checkout page that charges your customer on your own connected payment account. (needs approval; needs a connected account)
- `payments.checkout.create-catalog`: Create a hosted checkout for a saved catalog variant, with optional customer contact and billing prefill. (needs a connected account)
- `payments.checkout.get`: Read a checkout: by ref, whether it was paid, with a refundable reference for each confirmed captured payment; by checkoutId and your client’s completion token, the completion snapshot with payment IDs, authorisation states and amounts. No contact or card data. (needs a connected account)
- `payments.financial-actions.list`: List financial action facts for a payment or action; account identifiers and processor fees are omitted. (needs a connected account)
- `payments.methods.list`: List payment methods eligible for a purchase. Optional buyer email and phone are sent only to assess eligibility; results contain method categories and requested account presence, never contacts or tokens.
- `payments.order.authorize`: Reserve the money for an approved order in your connected account. Pending results do not confirm payment. (needs approval; needs a connected account)
- `payments.order.capture`: Collect the money for an approved order in your connected account. Pending results do not confirm payment. (needs approval; needs a connected account)
- `payments.order.confirm`: Confirm a buyer wallet payment source for an order. The optional buyer email is sent only for this payment; capture remains a separate step. (needs approval; needs a connected account)
- `payments.order.create`: Create an order in your connected merchant account. (needs a connected account)
- `payments.order.get`: Read a order from your connected merchant account. (needs a connected account)
- `payments.order.payments.list`: List payments for an order in your connected merchant account. (needs a connected account)
- `payments.order.terminate`: Request termination of your unpaid order; requested termination is distinct from confirmed termination. (needs approval; needs a connected account)
- `payments.order.update`: Update a order in your connected merchant account. (needs a connected account)
- `payments.orders.list`: List orders in your connected merchant account. (needs a connected account)
- `payments.payment-actions.list`: List actions on a payment in your connected account, without payer contact data. (needs a connected account)
- `payments.payment.cancel`: Release an uncaptured payment authorization in your connected account. This does not refund a settled payment. (needs approval; needs a connected account)
- `payments.payment.cancel-by-key`: Cancel a payment using the exact original creation key when its payment id is unavailable; does not refund a completed payment. (needs approval; needs a connected account)
- `payments.payment.capture`: Capture an authorized payment. Moves money from the customer to your merchant account. (needs approval; needs a connected account)
- `payments.payment.get`: Read a payment from your connected merchant account. (needs a connected account)
- `payments.payment.reauthorize`: Renew an uncaptured payment authorization in your account. The renewed record can have a different paymentId. (needs approval; needs a connected account)
- `payments.payment.update`: Update a payment in your connected merchant account. (needs a connected account)
- `payments.payment.update-amount`: Request a new total for an authorised, uncaptured payment on your connected account; an accepted request remains pending. (needs approval; needs a connected account)
- `payments.payments.list`: List payments in your connected account for an exact order reference; up to 50 per page. (needs a connected account)
- `payments.saved-method.create`: Save encrypted card details for a consented customer on your connected account; return the method ID and masked card facts only. (needs a connected account)
- `payments.saved-method.delete`: Delete a customer’s saved payment method from your connected account after explicit confirmation. (needs approval; needs a connected account)
- `payments.saved-method.get`: Get masked card or bank details from a saved payment method in your connected account. (needs a connected account)
- `payments.saved-methods.list`: List a customer’s saved payment methods on your connected account; return method IDs and masked card facts only, fetching at most 1000 records. (needs a connected account)
- `payments.transactions.search`: Search financial records in your connected payment account within a dated window of at most 31 days. Results contain transaction amounts and actual fees, with no buyer contacts. Reporting can lag settlement.

## Payouts

Send money to people and businesses, singly or in bulk.

- `payments.compliance-request.get`: Get requested sender and recipient compliance details, including any existing personal values. (needs a connected account)
- `payments.compliance-request.respond`: Submit personal sender and recipient details for payment compliance; acceptance does not mean payment release. (needs approval; needs a connected account)
- `payments.payout.cancel`: Cancel an unclaimed payout and return its funds to your account. Completed transfers cannot be cancelled. (needs approval)
- `payments.payout.get`: Read a recipient payout in your own connected account.
- `payments.payout.send`: Send money from your connected account to one recipient. Wallet recipients use an email, phone or handle; UPI recipients a payment address; bank and card destinations depend on the connected source. Pending does not mean received. vendor.pay wraps this call with destination and holder-name checks, a quote and an approval step; prefer it for paying a vendor. (needs approval; needs a connected account)
- `payments.payout.send-bulk`: Send up to 100 recipient payouts as one background job. Every result echoes your row id. Money is sent from your connected account; pending or unclaimed results are not completed transfers. (needs approval)

## Polymarket

Read Polymarket markets, prices, volume, positions and smart-money moves.

- `prediction.polymarket.candles`: Price candles of a Polymarket market.
- `prediction.polymarket.cohorts.stats`: Read anonymous Polymarket cohort counts for the source default window.
- `prediction.polymarket.events`: Events on the Polymarket prediction market with their markets.
- `prediction.polymarket.events-list`: List published Polymarket events from the first result page.
- `prediction.polymarket.markets`: Markets on the Polymarket prediction market, by market slug, with prices and volume.
- `prediction.polymarket.open-interest`: Daily open interest of a Polymarket market.
- `prediction.polymarket.order-books`: Historical order book snapshots of a Polymarket outcome token.
- `prediction.polymarket.positions`: A wallet's open and closed positions on Polymarket.
- `prediction.polymarket.prices`: Price history of a Polymarket market.
- `prediction.polymarket.smart-money`: Polymarket Smart Money.
- `prediction.polymarket.trades`: List recent public prediction-market trades. Returns personal data: Public names, profiles, wallet activity or published records; see the result fields..
- `prediction.polymarket.volume-split`: Trading volume of a Polymarket market split by YES and NO outcome.
- `prediction.polymarket.volumes`: Trading volume and trade count of a Polymarket market over time.

## Prediction markets

Read open markets and volumes on Polymarket, Kalshi and other prediction sites.

- `crypto.pm-kalshi-markets`: Kalshi markets.
- `crypto.pm-limitless-markets`: Limitless markets.
- `crypto.pm-opinion-markets`: Opinion markets.
- `crypto.pm-polymarket-crypto-updown`: Polymarket crypto up/down.
- `crypto.pm-polymarket-markets`: Polymarket markets.
- `crypto.pm-polymarket-markets-hash-volume`: Volume.
- `crypto.pm-polymarket-markets-keyset`: Polymarket markets (keyset page).
- `crypto.pm-polymarket-markets-token-id-volume`: Volume.
- `crypto.pm-predictfun-markets`: Predict.fun markets.
- `prediction.commodity-strike.get`: Read a prediction market's implied commodity price strike ladder.
- `prediction.markets.analytics`: Trends across prediction markets, the top markets and their momentum.
- `prediction.markets.correlations`: Pairs of prediction markets whose prices moved in step over 30 days, with the correlation.
- `prediction.markets.daily-comparison`: Daily volume and open interest of the same question on two prediction market platforms, side by side.
- `prediction.markets.detail`: Read a prediction market's description, outcomes and volume.
- `prediction.markets.matching`: Pairs of markets on two prediction platforms that ask the same question.
- `prediction.markets.search`: Browse and search prediction markets across platforms.
- `prediction.markets.tags.list`: List prediction market categories with active counts.
- `prediction.minute-market.history`: Read one-minute candles for a minute-resolution prediction market.
- `prediction.minute-market.snapshot`: Read the current state of a minute-resolution prediction market.
- `prediction.trader.pnl-history`: Read a prediction-market trader's daily profit-and-loss history.
- `prediction.trader.positions`: List a prediction-market trader's open and past positions.
- `prediction.trader.stats`: Read a prediction-market trader's performance statistics.
- `prediction.trader.trades`: List a prediction-market trader's recent trades.
- `prediction.trader.transfers`: List a prediction-market trader's deposits and withdrawals.

## Prop trading firms

Compare prop trading firms, their challenges, rules and plans.

- `propfirm.challenges.list`: Prop-trading evaluation challenges with prices, account sizes, rules and firm context.
- `propfirm.directory.list`: Proprietary trading evaluation firms with review scores, platforms and markets covered.
- `trading.asset-schedule.list`: List a platform's asset trading schedule for a day.
- `trading.assets.list`: List a trading platform's assets with payouts.
- `trading.evaluation-plans.list`: List trading evaluation plans with prices and rules.
- `trading.funded-rules.list`: List funded-account rules after passing an evaluation.
- `trading.scaling-plans.list`: List position-size scaling tiers as accounts grow.

## Refunds

Reverse payments and manage refunds.

- `payments.payment.reverse`: Request cancellation or a full refund of a payment on your connected account; an accepted request is pending until confirmed separately. (needs approval; needs a connected account)
- `payments.refund.cancel`: Cancel a queued refund before it is sent to the customer. (needs approval; needs a connected account)
- `payments.refund.get`: Read a refund from your connected merchant account. (needs a connected account)
- `payments.refund.update`: Update a refund in your connected merchant account. (needs a connected account)
- `payments.refunds.list`: List refunds in your connected merchant account, optionally for a payment. (needs a connected account)

## Settlements

See what was settled to your bank and match it to orders.

- `payments.order.settlements.get`: Read settlement status and net amount for your own order. (needs a connected account)
- `payments.settlement.lines.list`: List the payments, refunds, disputes and adjustments one settlement in your own merchant account paid out, each with your order ID, so a bank credit can be matched to its orders. (needs a connected account)
- `payments.settlements.list`: List settlement outcomes and net amounts during a date range in your own merchant account. Each row's ref lists the payments, refunds and disputes it settled (payments.settlement.lines.list). (needs a connected account)

## Stock prices and markets

Get stock quotes, history, indices, sectors, movers and company news.

- `stocks.company.competitors`: Get competitors.
- `stocks.company.competitors-list`: List a stock's competitor comparison sections.
- `stocks.company.news`: Recent news about a listed company, by its ticker, with each headline, source and date.
- `stocks.company.onchain-markets`: On-chain markets where tokens tracking a listed company's shares trade.
- `stocks.company.profile`: The company behind a ticker, with its exchange, country, market value and listing date. Free, but it runs on a pool of 50 calls a day shared by every caller: after the 50th call of a day the source refuses until the next day.
- `stocks.company.score`: Get MarketRank score.
- `stocks.company.summary`: A live market summary of a listed company, with price, market value, valuation ratios and 52-week range.
- `stocks.dividends.list`: List the dividends a stock has paid, with each ex-date and amount per share.
- `stocks.earnings.calendar`: Upcoming and recent company earnings dates.
- `stocks.eod.history`: Daily open/high/low/close/volume bars for a stock ticker, oldest first.
- `stocks.eod.latest`: The latest end-of-day prices of a stock, with open, high, low, close and volume.
- `stocks.exchange-news.list`: Recent news about a company listed on a national exchange, by its local ticker.
- `stocks.exchange-tickers.search`: Search the stocks listed on an exchange or national market by company name or symbol.
- `stocks.exchanges.list`: List stock exchanges, with their market identifier codes, countries, currencies and time zones.
- `stocks.fund.holdings`: The holdings of an exchange-traded or index fund, with each holding's weight, shares and market value.
- `stocks.futures-prices.list`: List futures prices in the United States.
- `stocks.index.constituents.list`: List an index's constituent stocks with weights and prices.
- `stocks.index.detail`: Get index detail.
- `stocks.index.history`: Read an index's daily OHLC history for a date range.
- `stocks.index.sector-weights.list`: List an index's sector weights.
- `stocks.indices.list`: Get market indices.
- `stocks.indices.names.list`: List an exchange's tracked indices by name.
- `stocks.industries.list`: Industries with their companies and market value.
- `stocks.instrument.detail`: Read an exchange instrument's registration details.
- `stocks.intraday.bars.list`: Read a stock's intraday OHLCV bars.
- `stocks.intraday.prices`: A stock's prices through the trading day, bar by bar, with open, high, low, close and volume.
- `stocks.ipos.list`: Recent listing and registration filings of companies going public in the US, with the filing form and status.
- `stocks.listings.list`: List an exchange's listed companies with float data.
- `stocks.market-caps.list`: List listed securities with market capitalisations.
- `stocks.market-overview.get`: Read market overview for the chosen market or collection.
- `stocks.market-prices.list`: List market prices for the chosen market or collection.
- `stocks.market-securities.list`: List market securities for the chosen market or collection.
- `stocks.market-status.multi`: Read the open or closed state of several markets at once.
- `stocks.market.holidays.list`: Exchange holiday closures for a date range, with the exchange and whether it fully closed.
- `stocks.market.status`: Whether the US stock market is open right now, with the state of each exchange and of pre-market and after-hours trading.
- `stocks.microcaps.list`: List small-capitalisation stocks with fundamentals.
- `stocks.movers.list`: Get market movers.
- `stocks.news-sentiment.get`: Get news sentiment.
- `stocks.option-gamma.get`: Read option gamma in the United States.
- `stocks.options.chain`: Get option chain.
- `stocks.options.chain-full.list`: Read an option chain with greeks per strike.
- `stocks.options.expirations.list`: List an underlying's option expirations with summary statistics.
- `stocks.options.flow.list`: List large recent option trades.
- `stocks.options.most-active.list`: List underlyings with the most active options.
- `stocks.orderbook.get`: Read orderbook in Uzbekistan.
- `stocks.otc-badges.get`: Read an OTC company's compliance and risk badges.
- `stocks.payouts.list`: List declared equity distributions and ex-dividend dates.
- `stocks.pitches.list`: Stock pitches posted by members of a value-investing club, with the company, long or short side and rating.
- `stocks.price-forecast.get`: Get price forecast.
- `stocks.price.history.get`: Read a stock's full price history as a series of timestamped bars.
- `stocks.prices.board.list`: List a board's securities with latest prices and turnover.
- `stocks.put-call-ratios.get`: Read US equity option positioning totals for the nearest listed expiration, including the ratio between bearish and bullish contracts and related derivatives statistics. Select the underlying security symbol to inspect its listed options market.
- `stocks.quote.live`: Latest price for a stock ticker, with change since the previous close. For indexes, currencies and futures too use google.finance.quote.
- `stocks.quote.summary`: Read a stock's latest quote with session statistics.
- `stocks.quotes.board.list`: List equity quotes for a selected exchange.
- `stocks.range-extremes.list`: List stocks at their 52-week highs or lows.
- `stocks.rank-score.get`: Read a stock's composite rank score and components.
- `stocks.rankings.list`: List top stocks with their fundamental indicators.
- `stocks.reporting-issuers.list`: List reporting issuers in Canada.
- `stocks.retail-activity.get`: Get retail trading activity.
- `stocks.screener.run`: Run a stock screener with your own filters and return the matching tickers. For tickers matching valuation and size criteria, with the figures that qualified them, use stocks.screen.
- `stocks.sector.detail`: One stock market sector with its companies and performance.
- `stocks.sectors.list`: Stock market sectors.
- `stocks.sectors.overview`: Market-wide performance of stock market sectors, with the best and worst sectors and market coverage.
- `stocks.sectors.performance.list`: List sector indices with performance and valuation.
- `stocks.sectors.summary`: Summarise a session's trading by sector.
- `stocks.sentiment-survey.get`: Read the weekly United States equity-market outlook survey. The aggregate contains bullish, bearish and neutral percentages, recent weekly observations, long-run averages, one-year high readings, current voting proportions, and the published commentary's heading, date, summary and public link.
- `stocks.short-interest.get`: Get short interest.
- `stocks.signals.divergence.list`: List stocks with fresh technical divergence signals.
- `stocks.signals.fundamental.list`: List stocks with their fundamental factor readings.
- `stocks.signals.risk.list`: List stocks with quantitative risk metrics.
- `stocks.signals.technical.list`: List stocks with technical indicator readings and summaries.
- `stocks.splits.list`: List a stock's splits, with each date and split factor.
- `stocks.stocklists.list`: List curated stocklists with their sizes.
- `stocks.tickers.list`: List an exchange's listed tickers with names.
- `stocks.tickers.search`: Find the tickers of listed securities by company name or part of a ticker, with the kind of security each is; it answers tickers only, where google.finance.tickers.search answers Google Finance's instrument pages with prices. Free, but it runs on a pool of 50 calls a day shared by every caller: after the 50th call of a day the source refuses until the next day.
- `stocks.tracked-companies.list`: Public companies tracked with market and financial data, with ticker and country.
- `stocks.trade-log.list`: List an exchange session's individual trades for a stock.
- `stocks.trader-updates.list`: List an exchange's trader and regulatory notices.
- `stocks.trading-halts.list`: List trading halts with reasons and resumptions.
- `stocks.upcoming-listings.list`: List upcoming listings in Australia.
- `stocks.volume-metrics.get`: Read volume metrics in the United States.
- `stocks.volume.get`: Read a stock's traded volume against its average.

## Tax and VAT

Check VAT numbers and invoices and look up tax rates by country.

- `edi.einvoice.status.get`: Check the exchange state of an invoice you submitted, using its original connected account. Pending includes states without a definitive receipt. Acceptance by the exchange is separate from delivery or the recipient's business acceptance. (needs a connected account)
- `edi.einvoice.submit`: Submit one Italian national XML invoice using your connected invoicing account. Select that account with Pramaan-Account and use an idempotency key. Queued means pending, not acceptance. An uncertain submission must be checked manually and never automatically resent. The invoice service bills your connected account directly; no platform key is used. (needs approval; needs a connected account)
- `finance.invoice.validate`: Check an invoice's VAT number format, line item sums and tax arithmetic, and list the errors.
- `finance.tax-rates.get`: A country's company tax, VAT, income tax, capital gains and social security rates.
- `finance.vat-number.validate`: Check a European VAT number against the EU register, with the registered company name and address.
- `finance.vat-rates.get`: A European country's VAT rates, standard, reduced and zero, with the goods each applies to.
- `government.in-income-tax.notifications.list`: Bulk-fetch all notifications for a given year by auto-paginating through every page internally. Returns the complete set with total and fetched counts. Suitable
- `government.in-income-tax.notifications.search`: Search and browse notifications with optional year filter, text search, and pagination. Returns a page of results with pagination metadata (total_count, last_
- `government.in-income-tax.years.list`: Read the complete list of years for which notifications are available.

## Transaction merchants

Turn a card or bank transaction line into a clear merchant name and logo.

- `brand.from-transaction`: Identify the merchant brand (name, domain, logo) behind a card or bank transaction descriptor.
- `brand.transaction.enrich`: Identify a merchant or clean a transaction descriptor, with optional real transaction and account-holder context. May return personal names. No person is scored or ranked. Optional logo copies cost at most $0.06; each file is capped at 10 MiB.
