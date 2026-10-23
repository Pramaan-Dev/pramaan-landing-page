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

- `payments.transfer-request.cancel`: Cancel a bank transfer request so the buyer can no longer pay it. The request stays readable; money already received is not moved by cancelling. (needs a connected account)
- `payments.transfer-request.create`: Ask your customer to pay by bank transfer into your own connected payment account. Returns the bank details and the reference the buyer must quote. The request becomes paid only on the provider's signed notification matched to it — track it with payments.transfer-request.get. (needs a connected account)
- `payments.transfer-request.get`: Read one bank transfer request: whether money has arrived, and how much. paid is reported only after the provider's signed notification was matched to the stored request — nothing the buyer or the caller says can make it paid, and neither can this read alone. (needs a connected account)
- `payments.transfer-request.list`: List your bank transfer requests, newest first, each with its state; a row's ref opens with payments.transfer-request.get or payments.transfer-request.cancel. (needs a connected account)

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
- `billing.subscription-charge.create`: Charge an authorized subscription as a job and poll until its payment finishes; approval required. (needs approval; needs a connected account)
- `billing.subscription-invoice.get`: Get subscription invoice amounts and customer names and emails; no payment card data. (needs a connected account)
- `billing.subscription-invoices.list`: List subscription invoice amounts and customer names and emails; no payment card data. (needs a connected account)
- `billing.subscription-item.get`: Get a subscription item quantity and applied price. (needs a connected account)
- `billing.subscription-item.update`: Change a customer subscription quantity; this can change charges and requires approval. (needs approval; needs a connected account)
- `billing.subscription-items.list`: List subscription quantities, price associations and usage billing flags. (needs a connected account)
- `billing.subscription-payment.get`: Read a charge or authorization payment belonging to your subscription. (needs a connected account)
- `billing.subscription.cancel`: Cancel a subscription at the end of its paid period (default) or immediately; returns its new state. (needs approval; needs a connected account)
- `billing.subscription.create`: Start a subscription in your billing account: authorize a customer against a plan, or schedule recurring charges for a stored customer. Charges continue until canceled when no count is set. (needs approval; needs a connected account)
- `billing.subscription.get`: Get one subscription's status, price and billing dates from your billing account. (needs a connected account)
- `billing.subscription.update`: Pause, reactivate or change the plan of your own subscription, or change a recurring charge's schedule or amount. (needs approval; needs a connected account)
- `billing.subscriptions.list`: List subscriptions in your connected billing account, optionally for one customer or status. (needs a connected account)
- `billing.transaction-item.get`: Get one purchased charge item and its unit price. (needs a connected account)
- `billing.transaction-items.list`: List purchased charge items, unit prices and product associations. (needs a connected account)
- `billing.transaction.get`: Get one charge total, status and customer association from your connected billing account. (needs a connected account)
- `billing.transactions.list`: List charges in your connected billing account with totals and status, optionally per customer or subscription. (needs a connected account)
- `billing.usage.record`: Record a billable usage event for a customer; meters turn events into charges. (needs a connected account)
- `billing.variant.get`: Get a catalog variant and its license settings; price records are available separately. (needs a connected account)
- `billing.variants.list`: List catalog variants, including license settings. (needs a connected account)

## Company financials

Read a company's statements, ratios, revenue estimates, credit history and filings.

- `companies.credit-history.get`: Company credit ratings and disclosed default facts. Does not score a person.
- `companies.financial-assessment.get`: Published corporate financial assessment and factual company indicators. Individuals and sole proprietors are not assessed.
- `companies.financial-ratios.get`: Published company financial ratios by period and statement basis; no invented calculations.
- `companies.registry.financials.get`: Official company statements with periods, currency, line items and disclosed auditor names. At most 20 periods.
- `companies.revenue.estimate`: Published business revenue range estimates by period; never presented as audited turnover.
- `companies.sec-filings.list`: List a US-listed company's filings with the securities regulator, newest first, with the form type and a link to each, by its website domain or its ticker.
- `stocks.balance-sheets.list`: A listed company's balance sheets by period, with its assets, liabilities and equity.
- `stocks.cash-flow-statements.list`: A listed company's cash-flow statements by period, with operating, investing and financing cash flows.
- `stocks.company.filings`: A company's regulatory filings, with form type, date and link.
- `stocks.company.statements`: A listed company's financial statements.
- `stocks.earnings.list`: A listed company's reported earnings, quarter by quarter, with earnings per share, revenue and the surprise against estimates.
- `stocks.income-statements.list`: A listed company's income statements by period, with revenue, costs, profit and earnings per share.
- `stocks.kpi.guidance`: The guidance a listed company has given for its operating metrics, with the range, the period and the source sentence.
- `stocks.kpi.metrics`: A listed company's reported operating metrics (customers, units, subscribers and the like), by period.
- `stocks.kpi.non-gaap`: A listed company's non-GAAP measures as it reports them, by period.
- `stocks.metrics.latest`: A listed company's latest valuation and financial ratios, such as price to earnings, margins, growth and debt to equity.
- `stocks.segments.list`: Read one annual or quarterly income-statement breakdown by business segment, product and geography.
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

## Exchange rates

Look up exchange rates, convert currencies and get conversion quotes.

- `finance.currencies.list`: List currency symbols and names, optionally including alternative and inactive currencies. The catalogue request is free.
- `finance.currency.convert`: Convert an amount from one currency to another at the latest central bank reference rate.
- `finance.exchange-rate.get`: The latest central bank reference exchange rate between two currencies.
- `finance.exchange-rate.history`: Daily exchange rates between two currencies over a period, with the average, low, high and change.
- `finance.fx.conversion.create`: Convert currency in your own connected account; requires approval before moving money. (needs approval; needs a connected account)
- `finance.fx.conversion.get`: Get a currency conversion, or reconcile an unclear outcome using the original call key. (needs a connected account)
- `finance.fx.quote.create`: Create an executable currency quote without moving money. (needs a connected account)
- `finance.fx.quote.get`: Get an executable quote and its validity in your connected account. (needs a connected account)
- `finance.market-rates.convert`: Convert an amount using market currency rates, with decimal arithmetic by default. Estimated call budget 0.0012 USD; premium direct pricing is provisional.
- `finance.market-rates.historical`: Read daily historical market currency rates, not central-bank reference rates. At most 100 requested symbols. Estimated call budget 0.0012 USD; premium pricing is provisional.
- `finance.market-rates.historical-bulk`: Read up to 31 daily market-rate snapshots as a background job. Each result echoes your row id; missing or failed rows are free. Native time series requires enabled access and consecutive dates in one calendar month. Worst-case provisional budget 0.0372 USD. (needs a connected account)
- `finance.market-rates.latest`: Read latest market currency rates, not central-bank reference rates. At most 100 requested symbols. Estimated call budget 0.0012 USD; premium pricing is provisional.
- `finance.market-rates.ohlc`: Read premium open, high, low, close and average market currency prices for a completed interval. Explicit premium:true required. Provisional maximum budget 0.0012 USD.

## Google Finance

Get stock, index and currency quotes and market news from Google Finance.

- `google.finance.markets`: Google Finance's market overview, with the leading indexes, currencies and movers.
- `google.finance.news`: Read the financial news on the front page of Google Finance; returns its news sections with their stories.
- `google.finance.quote`: Get the current quote of a stock, index, currency or future from Google Finance.
- `google.finance.tickers.search`: Search Google Finance for stocks, indexes and other instruments by name or ticker.

## India GST

File GST returns and issue e-invoices and e-way bills for Indian taxpayers.

- `india.gst.consent.create`: Connect a taxpayer using a portal OTP for returns or NIC API credentials for invoices and way bills. Credentials are kept in the encrypted vault. Returns OTP goes to the registered taxpayer. Estimated maximum call cost is $0.12. (needs approval)
- `india.gst.consent.delete`: Read, verify or disconnect taxpayer consent. Expired access requires reconnecting. Disconnect leaves filed returns and issued documents untouched. Estimated maximum call cost is $0.12.
- `india.gst.consent.get`: Read, verify or disconnect taxpayer consent. Expired access requires reconnecting. Disconnect leaves filed returns and issued documents untouched. Estimated maximum call cost is $0.12.
- `india.gst.consent.verify`: Read, verify or disconnect taxpayer consent. Expired access requires reconnecting. Disconnect leaves filed returns and issued documents untouched. Estimated maximum call cost is $0.12.
- `india.gst.einvoice.cancel`: Cancel an issued e-invoice irreversibly. Estimated maximum call cost is $0.12. (needs approval)
- `india.gst.einvoice.create`: Register one legal e-invoice. Returns government IRN, acknowledgement and unchanged signed invoice or QR strings; includes party identities and addresses inside signed data. Estimated maximum call cost is $0.12. (needs approval)
- `india.gst.einvoice.get`: Read an issued e-invoice and its legal signed data. Estimated maximum call cost is $0.12.
- `india.gst.einvoice.qr.get`: Read the unchanged NIC-signed QR string for an issued invoice. The B2C payment QR is a separate idea. Estimated maximum call cost is $0.12.
- `india.gst.ewaybill.cancel`: Cancel a government e-way bill irreversibly. Estimated maximum call cost is $0.12. (needs approval)
- `india.gst.ewaybill.consolidation.create`: Create a consolidated e-way bill from up to 500 government numbers already issued by this taxpayer. Only numbers recorded through this connection are accepted. Estimated maximum call cost is $0.12. (needs approval)
- `india.gst.ewaybill.create`: Issue one e-way bill. Returns the government number the taxpayer must print. Includes taxpayer and transport document information. Estimated maximum call cost is $0.12. (needs approval)
- `india.gst.ewaybill.extend`: Update the vehicle or extend an e-way bill with taxpayer transport details. Estimated maximum call cost is $0.12. (needs approval)
- `india.gst.ewaybill.get`: Read a government e-way bill, including taxpayer identities, document and vehicle details. Estimated maximum call cost is $0.12.
- `india.gst.ewaybill.vehicle.update`: Update the vehicle or extend an e-way bill with taxpayer transport details. Estimated maximum call cost is $0.12.
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

- `stocks.congress.trades`: List publicly filed securities transactions by members of Congress. Returns personal data: Public names, profiles, wallet activity or published records; see the result fields..
- `stocks.insider-buys.list`: Get insider buys.
- `stocks.insider-buys.significant`: Get significant insider buys.
- `stocks.insider-options.list`: Get insider stock options.
- `stocks.insider-sales.list`: Get insider sales.
- `stocks.insider-trades.list`: Trades in a listed company's shares by its own officers and directors, as filed with the regulator. Returns personal data: the names and titles of the company insiders who traded, as they appear in public filings.
- `stocks.insiders.search`: Search reported US insider transactions in plain words, with each hit's title, source and page. The hit text names the insiders as the public filings do. Returns personal data: the names of company insiders, as the public filings name them.
- `stocks.institutional-holdings.list`: The institutions that hold a listed company's shares, from their quarterly filings, with shares held and value.
- `stocks.ownership-filings.list`: Get 13D filings.

## Interest rates

See a central bank's policy interest rate over time.

- `markets.interest-rates.list`: A central bank's policy interest rate over time.
- `real-estate.mortgage-rates`: Get mortgage rates.

## Kalshi

Read Kalshi prediction markets: prices, trades, volume and order books.

- `prediction.kalshi.events`: Events on the Kalshi prediction market with their markets.
- `prediction.kalshi.markets`: Markets on the Kalshi prediction market, with prices and volume.
- `prediction.kalshi.open-interest`: Daily open interest of a Kalshi market.
- `prediction.kalshi.order-books`: Historical order book snapshots of a Kalshi market.
- `prediction.kalshi.prices`: Price history of a Kalshi market, daily or hourly.
- `prediction.kalshi.trades`: Individual trades on a Kalshi market.
- `prediction.kalshi.volumes`: Daily trading volume of a Kalshi market.

## Money transfers

Save recipients, quote and send money, and check your balances.

- `finance.balances.list`: Read ledger and available balances, per currency, in your own account. (needs a connected account)
- `finance.beneficiaries.list`: List saved beneficiaries, including recipient identity, address and bank details. (needs a connected account)
- `finance.beneficiaries.search`: Find a saved beneficiary by their exact bank account and routing code; returns name and account details. (needs a connected account)
- `finance.beneficiary-requirements.get`: Discover conditional beneficiary fields; an optional draft forwards holder identity and bank details for validation only. (needs a connected account)
- `finance.beneficiary-transfers.list`: List transfer history for your saved beneficiary during a date range. (needs a connected account)
- `finance.beneficiary.create`: Save a recipient's bank details in your own account, in any currency or country the account serves; returns the saved record. (needs a connected account)
- `finance.beneficiary.delete`: Delete a saved beneficiary from your own account after explicit confirmation. (needs a connected account)
- `finance.beneficiary.get`: Read a saved beneficiary, including their name, bank details, scheme and supplied contact details. (needs a connected account)
- `finance.cash-redemption.cancel`: Cancel your own cash-redemption link after explicit confirmation. (needs a connected account)
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
- `banking.user.delete`: Permanently delete your end-user banking record and associated bank connections. Requires confirm: true. Independent reports and identity-verification records are not erased by this call. (needs a connected account)
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

- `payments.payment-link.cancel`: Cancel a payment link. It stays readable and earlier payments are not refunded. (needs a connected account)
- `payments.payment-link.create`: Create a payment request. May contact the customer only when notification or reminder options are enabled. Accepts customer name, email and phone for delivery, and optional bank and fund account references for payment validation. (needs approval; needs a connected account)
- `payments.payment-link.get`: Read a payment link from your connected merchant account. (needs a connected account)
- `payments.payment-link.notify`: Send a payment link to its saved customer by email or text message. (needs approval; needs a connected account)
- `payments.payment-link.orders.list`: List your order IDs, amounts and states for a payment link; at most 1000 orders. (needs a connected account)
- `payments.payment-link.update`: Update a payment link in your connected account: reference, expiry, notes, description, methods, lines, addresses, minimum amount or archived state. A source declines any field its account cannot change. (needs approval; needs a connected account)
- `payments.payment-links.list`: List payment links in your connected merchant account. (needs a connected account)

## Payment mandates

Record customer consent for repeat debits and revoke it.

- `payments.mandate.create`: Register customer consent for future payments; financial credentials are sent once and omitted from the result. (needs approval; needs a connected account)
- `payments.mandate.get`: Get a customer payment authorization state without financial credentials. (needs a connected account)
- `payments.mandate.revoke`: Revoke a customer payment authorization and cancel subscriptions that use it. (needs approval; needs a connected account)
- `payments.mandates.list`: List a customer's payment authorizations without bank accounts or wallet credentials. (needs a connected account)

## Payment QR codes

Create QR codes customers scan to pay.

- `payments.qr-code.close`: Close a payment QR code. It stays readable and earlier payments are not refunded. (needs a connected account)
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
- `payments.checkout.create`: Create a hosted checkout page that charges your customer on your own connected payment account. (needs a connected account)
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
- `payments.order.terminate`: Request termination of your unpaid order; requested termination is distinct from confirmed termination. (needs a connected account)
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
- `payments.saved-method.delete`: Delete a customer’s saved payment method from your connected account after explicit confirmation. (needs a connected account)
- `payments.saved-method.get`: Get masked card or bank details from a saved payment method in your connected account. (needs a connected account)
- `payments.saved-methods.list`: List a customer’s saved payment methods on your connected account; return method IDs and masked card facts only, fetching at most 1000 records. (needs a connected account)
- `payments.transactions.search`: Search financial records in your connected payment account within a dated window of at most 31 days. Results contain transaction amounts and actual fees, with no buyer contacts. Reporting can lag settlement.

## Payouts

Send money to people and businesses, singly or in bulk.

- `payments.compliance-request.get`: Get requested sender and recipient compliance details, including any existing personal values. (needs a connected account)
- `payments.compliance-request.respond`: Submit personal sender and recipient details for payment compliance; acceptance does not mean payment release. (needs approval; needs a connected account)
- `payments.payout.cancel`: Cancel an unclaimed payout and return its funds to your account. Completed transfers cannot be cancelled. (needs approval)
- `payments.payout.get`: Read a recipient payout in your own connected account.
- `payments.payout.send`: Send money from your connected account to one recipient. Wallet recipients use an email, phone or handle; UPI recipients a payment address; bank and card destinations depend on the connected source. Pending does not mean received. (needs approval; needs a connected account)
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
- `prediction.markets.analytics`: Trends across prediction markets, the top markets and their momentum.
- `prediction.markets.correlations`: Pairs of prediction markets whose prices moved in step over 30 days, with the correlation.
- `prediction.markets.daily-comparison`: Daily volume and open interest of the same question on two prediction market platforms, side by side.
- `prediction.markets.matching`: Pairs of markets on two prediction platforms that ask the same question.
- `prediction.markets.search`: Browse and search prediction markets across platforms.

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
- `stocks.company.news`: Recent news about a listed company, by its ticker, with each headline, source and date.
- `stocks.company.onchain-markets`: On-chain markets where tokens tracking a listed company's shares trade.
- `stocks.company.profile`: The company behind a ticker, with its exchange, country, market value and listing date. Free, but it runs on a pool of 50 calls a day shared by every caller: after the 50th call of a day the source refuses until the next day.
- `stocks.company.score`: Get MarketRank score.
- `stocks.company.summary`: A live market summary of a listed company, with price, market value, valuation ratios and 52-week range.
- `stocks.dividends.list`: List the dividends a stock has paid, with each ex-date and amount per share.
- `stocks.earnings.calendar`: Upcoming and recent company earnings dates.
- `stocks.eod.history`: Daily open/high/low/close/volume bars for a stock ticker, oldest first.
- `stocks.eod.latest`: The latest end-of-day prices of a stock, with open, high, low, close and volume.
- `stocks.exchanges.list`: List stock exchanges, with their market identifier codes, countries, currencies and time zones.
- `stocks.fund.holdings`: The holdings of an exchange-traded or index fund, with each holding's weight, shares and market value.
- `stocks.index.detail`: Get index detail.
- `stocks.indices.list`: Get market indices.
- `stocks.industries.list`: Industries with their companies and market value.
- `stocks.intraday.prices`: A stock's prices through the trading day, bar by bar, with open, high, low, close and volume.
- `stocks.ipos.list`: Recent listing and registration filings of companies going public in the US, with the filing form and status.
- `stocks.market.status`: Whether the US stock market is open right now, with the state of each exchange and of pre-market and after-hours trading.
- `stocks.movers.list`: Get market movers.
- `stocks.news-sentiment.get`: Get news sentiment.
- `stocks.options.chain`: Get option chain.
- `stocks.price-forecast.get`: Get price forecast.
- `stocks.quote.live`: Latest price for a stock ticker, with change since the previous close.
- `stocks.retail-activity.get`: Get retail trading activity.
- `stocks.screener.run`: Run screener.
- `stocks.sector.detail`: One stock market sector with its companies and performance.
- `stocks.sectors.list`: Stock market sectors.
- `stocks.sectors.overview`: Market-wide performance of stock market sectors, with the best and worst sectors and market coverage.
- `stocks.short-interest.get`: Get short interest.
- `stocks.splits.list`: List a stock's splits, with each date and split factor.
- `stocks.tickers.search`: Find the tickers of listed securities by company name or part of a ticker, with the kind of security each is; it answers tickers only, where google.finance.tickers.search answers Google Finance's instrument pages with prices. Free, but it runs on a pool of 50 calls a day shared by every caller: after the 50th call of a day the source refuses until the next day.
- `stocks.tracked-companies.list`: Public companies tracked with market and financial data, with ticker and country.

## Tax and VAT

Check VAT numbers and invoices and look up tax rates by country.

- `finance.invoice.validate`: Check an invoice's VAT number format, line item sums and tax arithmetic, and list the errors.
- `finance.tax-rates.get`: A country's company tax, VAT, income tax, capital gains and social security rates.
- `finance.vat-number.validate`: Check a European VAT number against the EU register, with the registered company name and address.
- `finance.vat-rates.get`: A European country's VAT rates, standard, reduced and zero, with the goods each applies to.

## Transaction merchants

Turn a card or bank transaction line into a clear merchant name and logo.

- `brand.from-transaction`: Identify the merchant brand (name, domain, logo) behind a card or bank transaction descriptor.
- `brand.transaction.enrich`: Identify a merchant or clean a transaction descriptor, with optional real transaction and account-holder context. May return personal names. No person is scored or ranked. Optional logo copies cost at most $0.06; each file is capped at 10 MiB.
