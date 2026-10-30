---
name: pramaan-payments-money
version: 1.0.0
description: Use Pramaan superpowers and missions when working with payments & money.
---

# Payments & money

Find one superpower for one job, or a mission for a sequence of jobs. This is a catalogue, not proof of live availability.

Setup and shared safety rules: https://www.pramaan.dev/skill.md

## Search → inspect → quote → run

1. Search with list_capabilities (superpowers) or list_outcomes (missions).
2. Inspect with describe_capability or describe_outcome. Build input from the schema; check availability.
3. Call quote with kind (superpower or mission), id and input; include mission options if needed. Read price_max_micro, can_run and message, and the mission plan. Prices are millionths of a dollar. If can_run is false, resolve the stated need before continuing. Nothing runs during a quote.
4. Show the maximum price. Get an explicit yes for actions that require approval, then use run_capability or run_outcome with the same input. Reuse the same idempotency key on retries. Mission runs validate their plan and ask for approval when needed. Quote again if inputs change.

## Superpowers

### General

| Id | What it does | Price basis |
|---|---|---|
| `banking.account.balances.get` | Read current bank-reported balances for one owned account. | Per successful call; quote exact input for the maximum price. |
| `banking.account.get` | Read an owned bank account description, type and masked number. | Per successful call; quote exact input for the maximum price. |
| `banking.account.owners.get` | Read bank-supplied account-holder names and only the contact fields you request. No person is scored or ranked. | Per successful call; quote exact input for the maximum price. |
| `banking.accounts.list` | List accounts within an owned bank consent; account numbers stay masked. | Per successful call; quote exact input for the maximum price. |
| `banking.connection.start` | Start a bank consent for an end user. The monthly connection rental begins only after authorization. | Per successful call; quote exact input for the maximum price. |
| `banking.connection.status` | Read a bank connection state and complete its one-time account claim. | Per successful call; quote exact input for the maximum price. |
| `banking.institution.get` | Read a bank directory entry. | Per successful call; quote exact input for the maximum price. |
| `banking.institutions.search` | Find banks available in a country. | Per successful call; quote exact input for the maximum price. |
| `banking.transactions.list` | Read up to 100 transactions from an owned bank account within an explicit date range. | Per successful call; quote exact input for the maximum price. |
| `banking.transactions.sync` | Read genuine transaction additions, modifications and removals since an owned consent cursor. | Per successful call; quote exact input for the maximum price. |
| `banking.user.create` | Create an end-user banking record on your connected account, optionally supplying consented name, birth date, contact details and government identity numbers. Reusing your user ID returns the same record. | Per successful call; quote exact input for the maximum price. |
| `banking.user.delete` | Permanently delete your end-user banking record and associated bank connections. Requires confirm: true. Independent reports and identity-verification records are not erased by this call. | Per successful call; quote exact input for the maximum price. |
| `banking.user.get` | Read your end-user banking record and only the requested consented name, birth date, email, phone, address or government identity numbers. Identity facts are omitted by default. | Per successful call; quote exact input for the maximum price. |
| `billing.credits.balance` | Get a customer's prepaid credit balances: money credit and usage credits. | Per successful call; quote exact input for the maximum price. |
| `billing.customer.create` | Create a customer in your connected billing account (returns the existing one for a known email). | Per successful call; quote exact input for the maximum price. |
| `billing.customer.delete` | Delete a customer and end their mandates and subscriptions; requires explicit confirmation. | Per successful call; quote exact input for the maximum price. |
| `billing.customer.get` | Get customer contact details from your connected billing account. | Per successful call; quote exact input for the maximum price. |
| `billing.customer.update` | Update customer contact details, locale or business labels in your connected billing account. | Per successful call; quote exact input for the maximum price. |
| `billing.customers.list` | List the customers in your connected billing account, optionally by exact email. | Per successful call; quote exact input for the maximum price. |
| `billing.discounts.list` | List discount codes, values, redemption limits and validity dates. | Per successful call; quote exact input for the maximum price. |
| `billing.license.get` | Get customer license metadata, names and emails; includeKey explicitly returns the customer credential. | Per successful call; quote exact input for the maximum price. |
| `billing.licenses.list` | List customer license metadata, including names and emails; customer credentials are omitted. | Per successful call; quote exact input for the maximum price. |
| `billing.plan.create` | Create a recurring or on-demand plan in your own billing account. | Per successful call; quote exact input for the maximum price. |
| `billing.plan.get` | Read the amount limits and schedule of your own billing plan. | Per successful call; quote exact input for the maximum price. |
| `billing.portal.create` | Create a short-lived link to private customer billing details on your connected account. Give it only to an authenticated customer you have authorized. This call sends no email and changes no billing details. | Per successful call; quote exact input for the maximum price. |
| `billing.price.get` | Get an exact catalog price record, including decimal prices and tiers. | Per successful call; quote exact input for the maximum price. |
| `billing.prices.list` | List exact catalog price records, including tiers, trials and historic prices. | Per successful call; quote exact input for the maximum price. |
| `billing.product.get` | Get a product and its selling prices from your connected billing catalog. | Per successful call; quote exact input for the maximum price. |
| `billing.products.list` | List products and selling prices in your connected billing catalog. | Per successful call; quote exact input for the maximum price. |
| `billing.refund.create` | Refund all or part of a completed charge to the customer's original payment method. | Per successful call; quote exact input for the maximum price. |
| `billing.refund.create-configured` | Refund a completed charge with an explicit speed preference and optional transfer reversal. Moves money back to the customer. | Per successful call; quote exact input for the maximum price. |
| `billing.subscription-charge.create` | Charge an authorized subscription as a job and poll until its payment finishes; approval required. | Per successful call; quote exact input for the maximum price. |
| `billing.subscription-invoice.get` | Get subscription invoice amounts and customer names and emails; no payment card data. | Per successful call; quote exact input for the maximum price. |
| `billing.subscription-invoices.list` | List subscription invoice amounts and customer names and emails; no payment card data. | Per successful call; quote exact input for the maximum price. |
| `billing.subscription-item.get` | Get a subscription item quantity and applied price. | Per successful call; quote exact input for the maximum price. |
| `billing.subscription-item.update` | Change a customer subscription quantity; this can change charges and requires approval. | Per successful call; quote exact input for the maximum price. |
| `billing.subscription-items.list` | List subscription quantities, price associations and usage billing flags. | Per successful call; quote exact input for the maximum price. |
| `billing.subscription-payment.get` | Read a charge or authorization payment belonging to your subscription. | Per successful call; quote exact input for the maximum price. |
| `billing.subscription.cancel` | Cancel a subscription at the end of its paid period (default) or immediately; returns its new state. | Per successful call; quote exact input for the maximum price. |
| `billing.subscription.create` | Start a subscription in your billing account: authorize a customer against a plan, or schedule recurring charges for a stored customer. Charges continue until canceled when no count is set. | Per successful call; quote exact input for the maximum price. |
| `billing.subscription.get` | Get one subscription's status, price and billing dates from your billing account. | Per successful call; quote exact input for the maximum price. |
| `billing.subscription.update` | Pause, reactivate or change the plan of your own subscription, or change a recurring charge's schedule or amount. | Per successful call; quote exact input for the maximum price. |
| `billing.subscriptions.list` | List subscriptions in your connected billing account, optionally for one customer or status. | Per successful call; quote exact input for the maximum price. |
| `billing.transaction-item.get` | Get one purchased charge item and its unit price. | Per successful call; quote exact input for the maximum price. |
| `billing.transaction-items.list` | List purchased charge items, unit prices and product associations. | Per successful call; quote exact input for the maximum price. |
| `billing.transaction.get` | Get one charge total, status and customer association from your connected billing account. | Per successful call; quote exact input for the maximum price. |
| `billing.transactions.list` | List charges in your connected billing account with totals and status, optionally per customer or subscription. | Per successful call; quote exact input for the maximum price. |
| `billing.usage.record` | Record a billable usage event for a customer; meters turn events into charges. | Per successful call; quote exact input for the maximum price. |
| `billing.variant.get` | Get a catalog variant and its license settings; price records are available separately. | Per successful call; quote exact input for the maximum price. |
| `billing.variants.list` | List catalog variants, including license settings. | Per successful call; quote exact input for the maximum price. |
| `crypto.address.validate` | Check that an Ethereum address is well formed and its checksum is right, and return its normalised form. | Per successful call; quote exact input for the maximum price. |
| `crypto.airdrops.activities` | The tasks and activities of crypto airdrops. | Per successful call; quote exact input for the maximum price. |
| `crypto.airdrops.search` | Find crypto airdrop opportunities by keyword or status. | Per successful call; quote exact input for the maximum price. |
| `crypto.block.at-time` | The block of a chain closest to a given time. | Per successful call; quote exact input for the maximum price. |
| `crypto.borrow.markets` | Lending markets with the latest borrowing rates and amounts. | Per successful call; quote exact input for the maximum price. |
| `crypto.borrow.pools` | Borrowing costs of assets on lending markets, with annual rates and value locked. | Per successful call; quote exact input for the maximum price. |
| `crypto.borrow.routes` | Ways to borrow an asset across lending markets, with the latest rates. | Per successful call; quote exact input for the maximum price. |
| `crypto.bridges.day-stats` | A day's bridge volume on a chain, broken down by token and address. | Per successful call; quote exact input for the maximum price. |
| `crypto.bridges.list` | Cross-chain bridges with their recent daily, weekly and monthly volume. | Per successful call; quote exact input for the maximum price. |
| `crypto.bridges.ranking` | Cross-chain bridge protocols ranked by volume in US dollars over a period. | Per successful call; quote exact input for the maximum price. |
| `crypto.bridges.volume-history` | Daily bridge deposit and withdrawal volume on a chain. | Per successful call; quote exact input for the maximum price. |
| `crypto.chains.assets` | The assets held on each blockchain, by kind (canonical, native, bridged), in US dollars. | Per successful call; quote exact input for the maximum price. |
| `crypto.chains.tvl` | The value locked on each blockchain now. | Per successful call; quote exact input for the maximum price. |
| `crypto.chains.tvl-history` | Historical value locked in DeFi across all chains or one chain, in US dollars. Returns up to 50 observations in source order. | Per successful call; quote exact input for the maximum price. |
| `crypto.coin.profile` | A crypto coin's profile by its id, with its description, categories, launch date and current price and market value in US dollars. | Per successful call; quote exact input for the maximum price. |
| `crypto.defi.metric-history` | One metric of a DeFi protocol (such as daily value locked or fees) over time. | Per successful call; quote exact input for the maximum price. |
| `crypto.defi.metric-overview` | Totals and changes of a DeFi metric (such as fees, revenue or DEX volume) over the last day, week, month and year, for all of DeFi or one category, chain or protocol. | Per successful call; quote exact input for the maximum price. |
| `crypto.defi.ranking` | DeFi protocols ranked by value locked, fees or revenue. | Per successful call; quote exact input for the maximum price. |
| `crypto.derivatives.overview` | Trading volume of derivatives exchanges, with totals and changes. | Per successful call; quote exact input for the maximum price. |
| `crypto.derivatives.protocol` | Trading volume of one derivatives exchange, with totals and changes. | Per successful call; quote exact input for the maximum price. |
| `crypto.dex.activity` | Traders, trades and volume for a decentralised exchange protocol over a period. | Per successful call; quote exact input for the maximum price. |
| `crypto.dex.summary` | Trading volume of one decentralised exchange, with totals and changes. | Per successful call; quote exact input for the maximum price. |
| `crypto.dex.token-price` | Price bars (open, high, low, close, volume) of a token across decentralised exchange pools, by contract address and chain. | Per successful call; quote exact input for the maximum price. |
| `crypto.dexs.overview` | Trading volume of decentralised exchanges, with totals and changes. | Per successful call; quote exact input for the maximum price. |
| `crypto.earn.pools` | Earning pools (staking, lending, liquidity) with the latest yields. | Per successful call; quote exact input for the maximum price. |
| `crypto.earn.verified-pools` | Earning pools whose yields the source has measured and verified. | Per successful call; quote exact input for the maximum price. |
| `crypto.ens.resolve` | Resolve an ENS name to its Ethereum address. | Per successful call; quote exact input for the maximum price. |
| `crypto.entities.list` | The entities (companies and funds) that hold or run crypto assets tracked by the source, with their holdings. | Per successful call; quote exact input for the maximum price. |
| `crypto.etf.flows` | Daily inflows and outflows of spot crypto exchange-traded funds. | Per successful call; quote exact input for the maximum price. |
| `crypto.etf.snapshot` | Crypto exchange-traded funds with their assets, flows and fees. | Per successful call; quote exact input for the maximum price. |
| `crypto.events.search` | Find crypto project events (launches, upgrades, listings) by keyword and type. | Per successful call; quote exact input for the maximum price. |
| `crypto.exchange.candles` | Historical price candles of a spot market on a Korean or Japanese crypto exchange. | Per successful call; quote exact input for the maximum price. |
| `crypto.exchange.klines` | Price candles of a trading pair on an exchange, with a summary of the period's high, low and volume. | Per successful call; quote exact input for the maximum price. |
| `crypto.exchange.markets-coverage` | The spot markets covered on several Asian crypto exchanges, with their latest price and 24-hour change. | Per successful call; quote exact input for the maximum price. |
| `crypto.exchange.order-book` | The order book of a trading pair on an exchange, with bid and ask levels and spread. | Per successful call; quote exact input for the maximum price. |
| `crypto.exchange.pairs` | The trading pairs listed on a crypto exchange. | Per successful call; quote exact input for the maximum price. |
| `crypto.exchange.ticker` | The live ticker of a trading pair on a crypto exchange, with price, change and volume. | Per successful call; quote exact input for the maximum price. |
| `crypto.exchanges.list` | List crypto exchanges by trading volume, with their country, year founded and trust score. | Per successful call; quote exact input for the maximum price. |
| `crypto.fear-greed.get` | The crypto market fear and greed index, from 0 (extreme fear) to 100 (extreme greed), with its trend. | Per successful call; quote exact input for the maximum price. |
| `crypto.fees.overview` | Fees and revenue of DeFi protocols, with totals and changes. | Per successful call; quote exact input for the maximum price. |
| `crypto.fees.protocol` | Fees and revenue of one DeFi protocol, with totals and changes. | Per successful call; quote exact input for the maximum price. |
| `crypto.fork.overview` | Value locked in forks of DeFi protocols, with totals and changes. | Per successful call; quote exact input for the maximum price. |
| `crypto.fund.portfolio` | The funding rounds a crypto venture fund took part in, newest first. | Per successful call; quote exact input for the maximum price. |
| `crypto.fund.profile` | A crypto venture fund's profile, with its description, jurisdiction, tier and portfolio size. | Per successful call; quote exact input for the maximum price. |
| `crypto.fundraising.search` | Find crypto fundraising and token sale events, or the latest ones. | Per successful call; quote exact input for the maximum price. |
| `crypto.funds.ranking` | The leading crypto venture funds, ranked by tier or by portfolio size. | Per successful call; quote exact input for the maximum price. |
| `crypto.funds.search` | Find crypto venture funds by keyword. | Per successful call; quote exact input for the maximum price. |
| `crypto.futures.overview` | Futures market figures (open interest, funding, volume) across tracked tokens, ranked. | Per successful call; quote exact input for the maximum price. |
| `crypto.gas.price` | The current gas price of an EVM chain. | Per successful call; quote exact input for the maximum price. |
| `crypto.hacks.list` | Recorded crypto hacks and exploits, with the amount taken, chain, technique and funds returned. | Per successful call; quote exact input for the maximum price. |
| `crypto.hyperliquid.account` | A wallet's portfolio on the Hyperliquid exchange across perpetuals, spot, vaults and staking. | Per successful call; quote exact input for the maximum price. |
| `crypto.hyperliquid.candles` | Price candles of a Hyperliquid market. | Per successful call; quote exact input for the maximum price. |
| `crypto.hyperliquid.fills` | A wallet's individual trade fills on Hyperliquid, newest first. | Per successful call; quote exact input for the maximum price. |
| `crypto.hyperliquid.orders` | A wallet's open orders on Hyperliquid (resting, stop, take-profit and limit). | Per successful call; quote exact input for the maximum price. |
| `crypto.hyperliquid.performance` | Read public account balances and trading performance on Hyperliquid. Returns personal data: Public names, profiles, wallet activity or published records; see the result fields.. | Per successful call; quote exact input for the maximum price. |
| `crypto.hyperliquid.positions` | A wallet's open perpetual positions on Hyperliquid, with its margin summary. | Per successful call; quote exact input for the maximum price. |
| `crypto.hyperliquid.trade-context` | The funding paid and leverage used over one closed Hyperliquid trade. | Per successful call; quote exact input for the maximum price. |
| `crypto.hyperliquid.trades` | A wallet's closed trades on Hyperliquid, one row per position from open to close. | Per successful call; quote exact input for the maximum price. |
| `crypto.hyperliquid.trades-summary` | A wallet's closed trades on Hyperliquid rolled up into one row per group (such as market or day). | Per successful call; quote exact input for the maximum price. |
| `crypto.liquid-staking.rates` | Exchange rates of liquid staking tokens against ether, and how far each is off its peg. | Per successful call; quote exact input for the maximum price. |
| `crypto.liquidations.by-exchange` | Liquidations broken down by exchange, ranked. | Per successful call; quote exact input for the maximum price. |
| `crypto.liquidations.chart` | Liquidations of a token on an exchange over time, as long and short totals per period. | Per successful call; quote exact input for the maximum price. |
| `crypto.liquidations.large-orders` | Individual large liquidation orders above a size in US dollars. | Per successful call; quote exact input for the maximum price. |
| `crypto.listings.events` | Historical crypto exchange listing and delisting events. | Per successful call; quote exact input for the maximum price. |
| `crypto.market.global` | The whole crypto market at a glance - total market value, how much bitcoin and ether make up, and how many coins and markets there are. | Per successful call; quote exact input for the maximum price. |
| `crypto.market.rankings` | The largest crypto coins by market value, with price, 24-hour range and change, priced in the currency you choose. | Per successful call; quote exact input for the maximum price. |
| `crypto.market.trending` | The coins most searched for in the last 24 hours, with their price and how it moved. | Per successful call; quote exact input for the maximum price. |
| `crypto.news.feed` | The latest crypto news from major sources. | Per successful call; quote exact input for the maximum price. |
| `crypto.news.search` | Find crypto news articles by keyword. | Per successful call; quote exact input for the maximum price. |
| `crypto.onchain.indicator` | An on-chain indicator over time for bitcoin or ether. | Per successful call; quote exact input for the maximum price. |
| `crypto.onchain.sql` | Run a read-only SQL query against indexed blockchain tables and get the rows back. | Per successful call; quote exact input for the maximum price. |
| `crypto.onchain.sql-estimate` | Check a read-only SQL query against the blockchain tables and estimate how much data it reads, without running it. | Per successful call; quote exact input for the maximum price. |
| `crypto.open-interest.overview` | Open interest across derivatives exchanges, with totals and changes. | Per successful call; quote exact input for the maximum price. |
| `crypto.options.market` | Options market figures for a crypto asset, such as open interest, volume and put to call ratio. | Per successful call; quote exact input for the maximum price. |
| `crypto.options.overview` | Trading volume of options exchanges, with totals and changes. | Per successful call; quote exact input for the maximum price. |
| `crypto.options.protocol` | Trading volume of one options exchange, with totals and changes. | Per successful call; quote exact input for the maximum price. |
| `crypto.perp.funding-history` | The funding rate history of a perpetual futures contract on an exchange. | Per successful call; quote exact input for the maximum price. |
| `crypto.perp.funding-rates` | Funding rates and open interest of perpetual futures across exchanges. | Per successful call; quote exact input for the maximum price. |
| `crypto.perp.long-short` | The ratio of long to short positions over time for a perpetual futures contract. | Per successful call; quote exact input for the maximum price. |
| `crypto.perp.snapshot` | A snapshot of a perpetual futures contract, with its funding rate, open interest and prices. | Per successful call; quote exact input for the maximum price. |
| `crypto.pm-kalshi-markets` | Kalshi markets. | Per successful call; quote exact input for the maximum price. |
| `crypto.pm-limitless-markets` | Limitless markets. | Per successful call; quote exact input for the maximum price. |
| `crypto.pm-opinion-markets` | Opinion markets. | Per successful call; quote exact input for the maximum price. |
| `crypto.pm-polymarket-crypto-updown` | Polymarket crypto up/down. | Per successful call; quote exact input for the maximum price. |
| `crypto.pm-polymarket-markets` | Polymarket markets. | Per successful call; quote exact input for the maximum price. |
| `crypto.pm-polymarket-markets-hash-volume` | Volume. | Per successful call; quote exact input for the maximum price. |
| `crypto.pm-polymarket-markets-keyset` | Polymarket markets (keyset page). | Per successful call; quote exact input for the maximum price. |
| `crypto.pm-polymarket-markets-token-id-volume` | Volume. | Per successful call; quote exact input for the maximum price. |
| `crypto.pm-predictfun-markets` | Predict.fun markets. | Per successful call; quote exact input for the maximum price. |
| `crypto.price.currencies` | The currencies crypto prices can be quoted in. | Per successful call; quote exact input for the maximum price. |
| `crypto.price.history` | A crypto token's price over a time range. | Per successful call; quote exact input for the maximum price. |
| `crypto.price.ohlc` | Read public open, high, low and close price candles for one crypto currency pair. Returns up to fifty candles. | Per successful call; quote exact input for the maximum price. |
| `crypto.project.ai-news` | News about a crypto project with a written analysis of what it signals. | Per successful call; quote exact input for the maximum price. |
| `crypto.project.detail` | A crypto project's profile, with its overview, token, team, funding and social links. | Per successful call; quote exact input for the maximum price. |
| `crypto.protocol.detail` | A DeFi protocol's profile and value locked, with its chains, category and links. | Per successful call; quote exact input for the maximum price. |
| `crypto.protocol.financials` | A DeFi protocol's income statement (revenue, costs, earnings) by period. | Per successful call; quote exact input for the maximum price. |
| `crypto.protocol.flows` | The inflows and outflows of a DeFi protocol over the day after a given time. | Per successful call; quote exact input for the maximum price. |
| `crypto.protocol.treasury` | A DeFi protocol's treasury value and holdings, with totals and changes. | Per successful call; quote exact input for the maximum price. |
| `crypto.protocol.tvl` | Read the current total USD value locked in one DeFi protocol. | Per successful call; quote exact input for the maximum price. |
| `crypto.protocol.tvl-metrics` | A DeFi protocol's value locked, with totals and changes over time. | Per successful call; quote exact input for the maximum price. |
| `crypto.protocols.list` | DeFi protocols with their value locked, category, chains and recent change. | Per successful call; quote exact input for the maximum price. |
| `crypto.raises.list` | Crypto fundraising rounds, with amount, round type, lead investors and date. | Per successful call; quote exact input for the maximum price. |
| `crypto.rwa.chain` | Tokenised real-world assets on a chain, with their value and issuer. | Per successful call; quote exact input for the maximum price. |
| `crypto.rwa.chain-history` | Historical market value and DeFi value locked for tokenised real-world assets on a chain, in US dollars. Returns up to 50 observations in source order. | Per successful call; quote exact input for the maximum price. |
| `crypto.rwa.list` | Tokenised real-world assets, with their class, issuer, chains and value. | Per successful call; quote exact input for the maximum price. |
| `crypto.rwa.stats` | Totals of tokenised real-world assets by chain, category, platform and asset group. | Per successful call; quote exact input for the maximum price. |
| `crypto.search` | Find crypto coins by name or symbol, with the id other crypto capabilities take. | Per successful call; quote exact input for the maximum price. |
| `crypto.signals.project` | The attention signal card of a crypto project, with its score, price and social activity. | Per successful call; quote exact input for the maximum price. |
| `crypto.signals.projects` | Crypto projects ranked by attention signal, with each project's score and price change. | Per successful call; quote exact input for the maximum price. |
| `crypto.signals.token-of-day` | The crypto tokens with the strongest attention signal today, with their price and change. | Per successful call; quote exact input for the maximum price. |
| `crypto.signals.token-of-week` | The crypto tokens with the strongest attention signal this week, with their price and change. | Per successful call; quote exact input for the maximum price. |
| `crypto.stablecoin.detail` | A stablecoin's profile, with its peg, supply and supply by chain. | Per successful call; quote exact input for the maximum price. |
| `crypto.stablecoin.flows` | A stablecoin's circulating supply on a chain, with how it changed over the last day, week and month. | Per successful call; quote exact input for the maximum price. |
| `crypto.stablecoins.chains` | The total stablecoin supply on each chain now. | Per successful call; quote exact input for the maximum price. |
| `crypto.stablecoins.dominance-history` | Historical stablecoin totals and the largest stablecoin on a chain, in US dollars. Returns up to 50 observations in source order. | Per successful call; quote exact input for the maximum price. |
| `crypto.stablecoins.list` | Stablecoins with their peg, mechanism and circulating supply. | Per successful call; quote exact input for the maximum price. |
| `crypto.stablecoins.price-history` | Read daily historical US-dollar stablecoin prices by public ticker symbol. | Per successful call; quote exact input for the maximum price. |
| `crypto.stablecoins.supply-history` | Historical circulating supply of USD-pegged stablecoins across all chains or one chain. Returns up to 50 observations in source order. | Per successful call; quote exact input for the maximum price. |
| `crypto.technical.indicator` | A technical indicator (such as RSI or MACD) for a trading pair on an exchange and interval. | Per successful call; quote exact input for the maximum price. |
| `crypto.token.counterparties` | The addresses that received or sent the most of a token over a period. | Per successful call; quote exact input for the maximum price. |
| `crypto.token.dex-trades` | Recent decentralised exchange swaps of a token, by contract address. | Per successful call; quote exact input for the maximum price. |
| `crypto.token.emissions` | A protocol token's unlock and emission schedule. | Per successful call; quote exact input for the maximum price. |
| `crypto.token.generation-event` | Whether and when a crypto project held its token generation event. | Per successful call; quote exact input for the maximum price. |
| `crypto.token.holders` | The largest holders of a token, by contract address. | Per successful call; quote exact input for the maximum price. |
| `crypto.token.prices` | Read current or historical US-dollar prices and percentage changes for public token contracts. | Per successful call; quote exact input for the maximum price. |
| `crypto.token.protocols` | How much of a token each DeFi protocol holds. | Per successful call; quote exact input for the maximum price. |
| `crypto.token.public-sale` | The public sale (ICO, IDO or IEO) of a crypto project, with its price, raise and dates. | Per successful call; quote exact input for the maximum price. |
| `crypto.token.resolve` | Turn a token ticker symbol into its likely contract addresses on supported chains. | Per successful call; quote exact input for the maximum price. |
| `crypto.token.transfer-stats` | A summary of a token's transfer activity over a period, with counts, volume and active addresses. | Per successful call; quote exact input for the maximum price. |
| `crypto.token.transfers` | Recent transfers of a token, by contract address. | Per successful call; quote exact input for the maximum price. |
| `crypto.token.unlocks` | A token's unlock schedule over time, with cumulative amounts and allocation. | Per successful call; quote exact input for the maximum price. |
| `crypto.tokens.emissions` | Tokens with unlock schedules, with their next unlock and circulating supply. | Per successful call; quote exact input for the maximum price. |
| `crypto.traders.leaderboard` | List public wallet trading totals on a selected market. Returns personal data: Public names, profiles, wallet activity or published records; see the result fields.. | Per successful call; quote exact input for the maximum price. |
| `crypto.transaction.detail` | One blockchain transaction by its hash, with sender, receiver, value, fee and status. | Per successful call; quote exact input for the maximum price. |
| `crypto.treasuries.list` | DeFi protocol treasuries, with their value and holdings. | Per successful call; quote exact input for the maximum price. |
| `crypto.treasury-companies.list` | Listed companies that hold crypto on their balance sheet, with their holdings. | Per successful call; quote exact input for the maximum price. |
| `crypto.treasury-company.detail` | One listed company's crypto treasury, with its holdings and purchases. | Per successful call; quote exact input for the maximum price. |
| `crypto.wallet.age` | When a wallet first moved funds on a chain and how old it is in days. | Per successful call; quote exact input for the maximum price. |
| `crypto.wallet.balance` | A wallet's native coin balance on a chain and the tokens it recently moved. | Per successful call; quote exact input for the maximum price. |
| `crypto.wallet.defi-positions` | A wallet's positions in DeFi protocols, such as lending, staking and liquidity. | Per successful call; quote exact input for the maximum price. |
| `crypto.wallet.history` | A wallet's on-chain transactions, each classified as a send, receive, swap and so on. | Per successful call; quote exact input for the maximum price. |
| `crypto.wallet.labels` | Look up public entity labels attached to wallet addresses. Returns personal data: Public names, profiles, wallet activity or published records; see the result fields.. | Per successful call; quote exact input for the maximum price. |
| `crypto.wallet.net-worth` | A wallet's total value in US dollars over time. | Per successful call; quote exact input for the maximum price. |
| `crypto.wallet.portfolio` | A wallet's holdings across chains, with balances and token values. | Per successful call; quote exact input for the maximum price. |
| `crypto.wallet.token-transfers` | A wallet's token transfers with token, US dollar value and direction. | Per successful call; quote exact input for the maximum price. |
| `crypto.wallet.transactions` | A wallet's recent transactions on a chain, with sent and received counts. | Per successful call; quote exact input for the maximum price. |
| `crypto.wallets.search` | Find wallets by ENS name, label or address prefix. | Per successful call; quote exact input for the maximum price. |
| `crypto.yield.loops` | Looping strategies (borrowing against a deposit to deposit again), with their net yields. | Per successful call; quote exact input for the maximum price. |
| `crypto.yield.pools` | DeFi yield pools ranked by annual yield or by value locked. | Per successful call; quote exact input for the maximum price. |
| `crypto.yield.pools-list` | DeFi yield pools with their annual yield, value locked, chain and project. | Per successful call; quote exact input for the maximum price. |
| `economy.datasets.list` | List published European monetary and economic datasets. | Per successful call; quote exact input for the maximum price. |
| `economy.series.observations` | Read dated observations for a European economic data series. | Per successful call; quote exact input for the maximum price. |
| `edi.einvoice.status.get` | Check the exchange state of an invoice you submitted, using its original connected account. Pending includes states without a definitive receipt. Acceptance by the exchange is separate from delivery or the recipient's business acceptance. | Per successful call; quote exact input for the maximum price. |
| `edi.einvoice.submit` | Submit one Italian national XML invoice using your connected invoicing account. Select that account with Pramaan-Account and use an idempotency key. Queued means pending, not acceptance. An uncertain submission must be checked manually and never automatically resent. The invoice service bills your connected account directly; no platform key is used. | Per successful call; quote exact input for the maximum price. |
| `finance.account-availability.check` | Check whether a person’s mobile has financial accounts and return opaque consent choices; requires their permission. | Per successful call; quote exact input for the maximum price. |
| `finance.balances.list` | Read ledger and available balances, per currency, in your own account. | Per successful call; quote exact input for the maximum price. |
| `finance.bank-account-verification.create` | Start a person-approved bank verification flow by mobile or reverse transfer. Handles mobile and bank data; any token principal is included in the estimate. Maximum estimate USD 0.10. | Per successful call; quote exact input for the maximum price. |
| `finance.bank-account-verification.get` | Read bank verification progress. Account numbers are masked by default; full numbers, holder names, bank facts and payment addresses require explicit flags. | Per successful call; quote exact input for the maximum price. |
| `finance.beneficiaries.list` | List saved beneficiaries, including recipient identity, address and bank details. | Per successful call; quote exact input for the maximum price. |
| `finance.beneficiaries.search` | Find a saved beneficiary by their exact bank account and routing code; returns name and account details. | Per successful call; quote exact input for the maximum price. |
| `finance.beneficiary-requirements.get` | Discover conditional beneficiary fields; an optional draft forwards holder identity and bank details for validation only. | Per successful call; quote exact input for the maximum price. |
| `finance.beneficiary-transfers.list` | List transfer history for your saved beneficiary during a date range. | Per successful call; quote exact input for the maximum price. |
| `finance.beneficiary.create` | Save a recipient's bank details in your own account, in any currency or country the account serves; returns the saved record. | Per successful call; quote exact input for the maximum price. |
| `finance.beneficiary.delete` | Delete a saved beneficiary from your own account after explicit confirmation. | Per successful call; quote exact input for the maximum price. |
| `finance.beneficiary.get` | Read a saved beneficiary, including their name, bank details, scheme and supplied contact details. | Per successful call; quote exact input for the maximum price. |
| `finance.bic.lookup` | Check a BIC (SWIFT) code and name the bank, country and branch behind it. | Per successful call; quote exact input for the maximum price. |
| `finance.cash-redemption.cancel` | Cancel your own cash-redemption link after explicit confirmation. | Per successful call; quote exact input for the maximum price. |
| `finance.cash-redemption.create` | Create a payout redemption link and send it to the named recipient; uses their name, phone and optional email. | Per successful call; quote exact input for the maximum price. |
| `finance.cash-redemption.get` | Read the status of your own cash-redemption link. | Per successful call; quote exact input for the maximum price. |
| `finance.consent-collection.create` | Combine an existing mandatory financial consent with one newly created consent for the same person. Returns a protected approval link. Maximum estimate USD 0.20. | Per successful call; quote exact input for the maximum price. |
| `finance.consent-collection.get` | Read the two member consent states. Returns owned row handles usable for consent reads and financial data sessions; includes no financial record content. | Per successful call; quote exact input for the maximum price. |
| `finance.consent-status.get` | Read the last financial data fetch time and range without starting or restarting a fetch. | Per successful call; quote exact input for the maximum price. |
| `finance.consent.create` | Create a person-approved financial consent covering explicit record types, dates, use, frequency and retention. Returns a protected consent link. | Per successful call; quote exact input for the maximum price. |
| `finance.consent.get` | Read a financial consent’s state and authorized scope; no account locators or route identifiers are returned. | Per successful call; quote exact input for the maximum price. |
| `finance.consent.revoke` | Revoke a person’s financial consent. | Per successful call; quote exact input for the maximum price. |
| `finance.credit-report.create` | Start a consumer report about a consenting person's bank data; poll for completion. Produced reports have no published erasure endpoint. | Per successful call; quote exact input for the maximum price. |
| `finance.credit-report.get` | Poll a consented consumer report and read masked bank account balance summaries when ready. | Per successful call; quote exact input for the maximum price. |
| `finance.credit-score.band` | Place a credit score in its band for a scoring system and say how far it is from the next band. | Per successful call; quote exact input for the maximum price. |
| `finance.credit-score.get` | Read a credit risk score about a person from consented bank data; higher is safer on a 1 to 99 scale. | Per successful call; quote exact input for the maximum price. |
| `finance.credit-subject.create` | Create a consumer credit subject from the person's consented identity data; identity values are forwarded once and not stored locally. | Per successful call; quote exact input for the maximum price. |
| `finance.credit-subject.delete` | Delete the credit subject and end its local report connections; previously produced reports are not proven erased. | Per successful call; quote exact input for the maximum price. |
| `finance.credit-subject.get` | Read a consumer credit subject's state, report purpose and held identity field names; never the identity values. | Per successful call; quote exact input for the maximum price. |
| `finance.currencies.list` | List currency symbols and names, optionally including alternative and inactive currencies. The catalogue request is free. | Per successful call; quote exact input for the maximum price. |
| `finance.currency.convert` | Convert an amount from one currency to another at the latest central bank reference rate. | Per successful call; quote exact input for the maximum price. |
| `finance.data-session.create` | Start a financial data fetch under an owned active consent for an explicit date range. | Per successful call; quote exact input for the maximum price. |
| `finance.data-session.get` | Read requested financial balance and transaction facts from a consented session. Account numbers stay masked; returns up to 100 accounts and 100 transactions. | Per successful call; quote exact input for the maximum price. |
| `finance.data-sessions.list` | List data sessions under one owned consent. Each selected session is checked against that consent before its reference is returned. | Per successful call; quote exact input for the maximum price. |
| `finance.data.refresh` | Request a financial data refresh under an owned consent. Restart is an explicit option; this operation changes state. | Per successful call; quote exact input for the maximum price. |
| `finance.exchange-rate.get` | The latest central bank reference exchange rate between two currencies. | Per successful call; quote exact input for the maximum price. |
| `finance.exchange-rate.history` | Daily exchange rates between two currencies over a period, with the average, low, high and change. | Per successful call; quote exact input for the maximum price. |
| `finance.fx.conversion.create` | Convert currency in your own connected account; requires approval before moving money. | Per successful call; quote exact input for the maximum price. |
| `finance.fx.conversion.get` | Get a currency conversion, or reconcile an unclear outcome using the original call key. | Per successful call; quote exact input for the maximum price. |
| `finance.fx.quote.create` | Create an executable currency quote without moving money. | Per successful call; quote exact input for the maximum price. |
| `finance.fx.quote.get` | Get an executable quote and its validity in your connected account. | Per successful call; quote exact input for the maximum price. |
| `finance.iban.bank` | Name the bank and branch behind an IBAN, with its BIC. | Per successful call; quote exact input for the maximum price. |
| `finance.iban.validate` | Check an IBAN's format, length and checksum, and split it into country, bank and account parts. | Per successful call; quote exact input for the maximum price. |
| `finance.income-insights.get` | Read a person's income categories and modeled amounts from a consented consumer report; forecasts are explicitly separate. | Per successful call; quote exact input for the maximum price. |
| `finance.institution.get` | Read public institution details using its owned row reference. | Per successful call; quote exact input for the maximum price. |
| `finance.institutions.list` | List public financial institutions and their supported record types, up to 100 per page. | Per successful call; quote exact input for the maximum price. |
| `finance.invoice.validate` | Check an invoice's VAT number format, line item sums and tax arithmetic, and list the errors. | Per successful call; quote exact input for the maximum price. |
| `finance.market-rates.convert` | Convert an amount using market currency rates, with decimal arithmetic by default. Estimated call budget 0.0012 USD; premium direct pricing is provisional. | Per successful call; quote exact input for the maximum price. |
| `finance.market-rates.historical` | Read daily historical market currency rates, not central-bank reference rates. At most 100 requested symbols. Estimated call budget 0.0012 USD; premium pricing is provisional. | Per successful call; quote exact input for the maximum price. |
| `finance.market-rates.historical-bulk` | Read up to 31 daily market-rate snapshots as a background job. Each result echoes your row id; missing or failed rows are free. Native time series requires enabled access and consecutive dates in one calendar month. Worst-case provisional budget 0.0372 USD. | Per successful call; quote exact input for the maximum price. |
| `finance.market-rates.latest` | Read latest market currency rates, not central-bank reference rates. At most 100 requested symbols. Estimated call budget 0.0012 USD; premium pricing is provisional. | Per successful call; quote exact input for the maximum price. |
| `finance.market-rates.ohlc` | Read premium open, high, low, close and average market currency prices for a completed interval. Explicit premium:true required. Provisional maximum budget 0.0012 USD. | Per successful call; quote exact input for the maximum price. |
| `finance.partner-risk-insights.get` | Read credit risk scores about a consenting person from bank data, using the models chosen at report creation. Native scores range from 1 to 999; higher is safer. Read the base report first. The models are charged when the report is created; reading them is not charged again. | Per successful call; quote exact input for the maximum price. |
| `finance.payment-address.verify` | Check one payment address or bank account (a bank check may move a token amount to the account). Optionally returns the holder name as the bank records it, which is personal data. Maximum estimate USD 0.57. | Per successful call; quote exact input for the maximum price. |
| `finance.payment-address.verify-queued` | Queue a bank account check that may move a token amount; at most ten status reads. Optionally returns the holder name, which is personal data. Maximum estimate USD 0.22. | Per successful call; quote exact input for the maximum price. |
| `finance.payment-addresses.find` | Find payment addresses linked to an Indian mobile number. Returns up to 100 addresses and active states, without holder names or rankings. Maximum estimate USD 0.57. | Per successful call; quote exact input for the maximum price. |
| `finance.payment-return-risk.evaluate` | Check a person's consented US bank debit for return risk. | Per successful call; quote exact input for the maximum price. |
| `finance.payment-return-risk.prepare` | Prepare a consented US bank connection for debit return-risk checks; no payment is sent and no score is returned. | Per successful call; quote exact input for the maximum price. |
| `finance.payment-return-risk.report-decision` | Record the decision taken on an evaluated bank debit; no payment is sent. | Per successful call; quote exact input for the maximum price. |
| `finance.payment-return-risk.report-return` | Record the bank return code for an evaluated debit; no payment is sent. | Per successful call; quote exact input for the maximum price. |
| `finance.payment-return-risk.schedule` | Recommend a date for a person's consented US bank debit; no payment is sent. | Per successful call; quote exact input for the maximum price. |
| `finance.profiles.list` | List your connected account profiles; holder names, contact details and addresses are returned only when requested. | Per successful call; quote exact input for the maximum price. |
| `finance.receiving-account.create` | Create a receiving account with bank details and holder identity; requires approval for the account commitment. | Per successful call; quote exact input for the maximum price. |
| `finance.receiving-account.get` | Get bank details and holder identity for your own receiving account. | Per successful call; quote exact input for the maximum price. |
| `finance.receiving-accounts.list` | List your receiving accounts, including bank details and holder identity. | Per successful call; quote exact input for the maximum price. |
| `finance.routing-code.lookup` | Verify an Indian bank routing code. Returns the requested code and its verification verdict; no account data. Maximum estimate USD 0.57. | Per successful call; quote exact input for the maximum price. |
| `finance.statement-account.get` | Read personal bank statement account facts from a collected analysis. | Per successful call; quote exact input for the maximum price. |
| `finance.statement-accounts.list` | Read personal bank statement accounts facts from a collected analysis. | Per successful call; quote exact input for the maximum price. |
| `finance.statement-analysis.collect` | Start a hosted page where a person uploads or connects their own bank statements for analysis. Processes personal financial data (accounts, balances, transactions, holder details). The page does not return the person to your app; poll finance.statement-analysis.get with the ref. | Per successful call; quote exact input for the maximum price. |
| `finance.statement-analysis.delete` | Delete a statement session. Original PDFs are documented as retained for 30 days; derived-data deletion scope is undocumented. | Per successful call; quote exact input for the maximum price. |
| `finance.statement-analysis.get` | Check upload and processing states for personal bank statements. | Per successful call; quote exact input for the maximum price. |
| `finance.statement-analysis.process` | Trigger analysis of up to ten uploaded personal bank statements; provisional worst case $4.90. | Per successful call; quote exact input for the maximum price. |
| `finance.statement-balances.list` | Read personal bank statement balances facts from a collected analysis. | Per successful call; quote exact input for the maximum price. |
| `finance.statement-banks.list` | List banks and their supported statement collection modes. | Per successful call; quote exact input for the maximum price. |
| `finance.statement-credit-score.get` | Read a person's bank statement credit scores on their native 300 to 900 scale; score direction is not published. | Per successful call; quote exact input for the maximum price. |
| `finance.statement-expenses.list` | Read personal bank statement expenses facts from a collected analysis. | Per successful call; quote exact input for the maximum price. |
| `finance.statement-fraud.get` | Read personal bank statement fraud facts from a collected analysis. | Per successful call; quote exact input for the maximum price. |
| `finance.statement-income.get` | Read personal bank statement income facts from a collected analysis. | Per successful call; quote exact input for the maximum price. |
| `finance.statement-metrics.get` | Read selected factual statement measures; no person score, probability or rank is returned. | Per successful call; quote exact input for the maximum price. |
| `finance.statement-months.list` | Read monthly personal statement balances, credits, debits, salary and observed repayments; at most 60 rows per page. | Per successful call; quote exact input for the maximum price. |
| `finance.statement-obligations.get` | Read personal bank statement obligations facts from a collected analysis. | Per successful call; quote exact input for the maximum price. |
| `finance.statement-recurring.list` | Read personal bank statement recurring facts from a collected analysis. | Per successful call; quote exact input for the maximum price. |
| `finance.statement-report.export` | Copy a personal statement XLSX report into your files; maximum 10 MiB. | Per successful call; quote exact input for the maximum price. |
| `finance.statement-transactions.list` | Read personal bank statement transactions facts from a collected analysis. | Per successful call; quote exact input for the maximum price. |
| `finance.tax-rates.get` | A country's company tax, VAT, income tax, capital gains and social security rates. | Per successful call; quote exact input for the maximum price. |
| `finance.transfer-batch.get` | Read the status and transfers of your own payout batch, up to 1000 rows. | Per successful call; quote exact input for the maximum price. |
| `finance.transfer-quote.create` | Create a transfer quote with fees and payout options; this does not send money. | Per successful call; quote exact input for the maximum price. |
| `finance.transfer-quote.get` | Read a transfer quote, its expiry, fees and payment options. | Per successful call; quote exact input for the maximum price. |
| `finance.transfer-quote.update` | Change a transfer quote recipient, payout method or tax details; changing payout method requires approval. | Per successful call; quote exact input for the maximum price. |
| `finance.transfer-requirements.get` | Discover transfer reference, purpose and source-of-funds requirements for your quote and beneficiary. | Per successful call; quote exact input for the maximum price. |
| `finance.transfer.create` | Send money from your own account to a saved or inline beneficiary, in an explicit currency; approval required. With a quoteId the transfer is bound to that quote's rate and amounts. The result may be pending (some accounts wait for funding, see finance.transfer.fund); read it again with finance.transfer.get. | Per successful call; quote exact input for the maximum price. |
| `finance.transfer.create-bulk` | Transfer money to saved beneficiaries as a job; at most 100 uniquely identified transfers, with approval required. | Per successful call; quote exact input for the maximum price. |
| `finance.transfer.fund` | Fund a transfer from your connected account within approved debit and fee limits. Requires approval; ambiguous outcomes must be reconciled before trying again. | Per successful call; quote exact input for the maximum price. |
| `finance.transfer.get` | Read the confirmed status and principal of your own transfer. | Per successful call; quote exact input for the maximum price. |
| `finance.transfers.list` | List transfers from your connected account, with exact date, recipient and state filters. | Per successful call; quote exact input for the maximum price. |
| `finance.vat-number.validate` | Check a European VAT number against the EU register, with the registered company name and address. | Per successful call; quote exact input for the maximum price. |
| `finance.vat-rates.get` | A European country's VAT rates, standard, reduced and zero, with the goods each applies to. | Per successful call; quote exact input for the maximum price. |
| `india.gst.consent.create` | Connect a taxpayer using a portal OTP for returns or NIC API credentials for invoices and way bills. Credentials are kept in the encrypted vault. Returns OTP goes to the registered taxpayer. Estimated maximum call cost is $0.12. | Per successful call; quote exact input for the maximum price. |
| `india.gst.consent.delete` | Read, verify or disconnect taxpayer consent. Expired access requires reconnecting. Disconnect leaves filed returns and issued documents untouched. Estimated maximum call cost is $0.12. | Per successful call; quote exact input for the maximum price. |
| `india.gst.consent.get` | Read, verify or disconnect taxpayer consent. Expired access requires reconnecting. Disconnect leaves filed returns and issued documents untouched. Estimated maximum call cost is $0.12. | Per successful call; quote exact input for the maximum price. |
| `india.gst.consent.verify` | Read, verify or disconnect taxpayer consent. Expired access requires reconnecting. Disconnect leaves filed returns and issued documents untouched. Estimated maximum call cost is $0.12. | Per successful call; quote exact input for the maximum price. |
| `india.gst.einvoice.cancel` | Cancel an issued e-invoice irreversibly. Estimated maximum call cost is $0.12. | Per successful call; quote exact input for the maximum price. |
| `india.gst.einvoice.create` | Register one legal e-invoice. Returns government IRN, acknowledgement and unchanged signed invoice or QR strings; includes party identities and addresses inside signed data. Estimated maximum call cost is $0.12. | Per successful call; quote exact input for the maximum price. |
| `india.gst.einvoice.get` | Read an issued e-invoice and its legal signed data. Estimated maximum call cost is $0.12. | Per successful call; quote exact input for the maximum price. |
| `india.gst.einvoice.qr.get` | Read the unchanged NIC-signed QR string for an issued invoice. The B2C payment QR is a separate idea. Estimated maximum call cost is $0.12. | Per successful call; quote exact input for the maximum price. |
| `india.gst.ewaybill.cancel` | Cancel a government e-way bill irreversibly. Estimated maximum call cost is $0.12. | Per successful call; quote exact input for the maximum price. |
| `india.gst.ewaybill.consolidation.create` | Create a consolidated e-way bill from up to 500 government numbers already issued by this taxpayer. Only numbers recorded through this connection are accepted. Estimated maximum call cost is $0.12. | Per successful call; quote exact input for the maximum price. |
| `india.gst.ewaybill.create` | Issue one e-way bill. Returns the government number the taxpayer must print. Includes taxpayer and transport document information. Estimated maximum call cost is $0.12. | Per successful call; quote exact input for the maximum price. |
| `india.gst.ewaybill.extend` | Update the vehicle or extend an e-way bill with taxpayer transport details. Estimated maximum call cost is $0.12. | Per successful call; quote exact input for the maximum price. |
| `india.gst.ewaybill.get` | Read a government e-way bill, including taxpayer identities, document and vehicle details. Estimated maximum call cost is $0.12. | Per successful call; quote exact input for the maximum price. |
| `india.gst.ewaybill.vehicle.update` | Update the vehicle or extend an e-way bill with taxpayer transport details. Estimated maximum call cost is $0.12. | Per successful call; quote exact input for the maximum price. |
| `india.gst.filing-otp.send` | Send the EVC filing OTP to the authorised signatory. Estimated maximum call cost is $0.12. | Per successful call; quote exact input for the maximum price. |
| `india.gst.filings.list` | List public GST filing history, including taxpayer return periods and filing dates. No consent is needed. Estimated maximum call cost is $0.12. | Per successful call; quote exact input for the maximum price. |
| `india.gst.gstr1.save` | Save GSTR1 in one request. Returns taxpayer and counterparty tax information. At most 500 invoice records and 5 MB; split larger returns yourself. Estimated maximum call cost is $0.12. | Per successful call; quote exact input for the maximum price. |
| `india.gst.gstr2a.records.get` | Read GSTR2A invoice records. Large file parts are fetched server-side with a 10 MB cap and returned as rows. At most 500 rows per page. Estimated maximum call cost is $0.12. | Per successful call; quote exact input for the maximum price. |
| `india.gst.gstr2b.generate` | Request generation of 2B; check the returned operation reference for completion. Estimated maximum call cost is $0.12. | Per successful call; quote exact input for the maximum price. |
| `india.gst.gstr2b.records.get` | Read GSTR2B invoice records. Large file parts are fetched server-side with a 10 MB cap and returned as rows. At most 500 rows per page. Estimated maximum call cost is $0.12. | Per successful call; quote exact input for the maximum price. |
| `india.gst.gstr3b.save` | Save GSTR3B in one request. Returns taxpayer and counterparty tax information. At most 500 invoice records and 5 MB; split larger returns yourself. Estimated maximum call cost is $0.12. | Per successful call; quote exact input for the maximum price. |
| `india.gst.ims.actions.reset` | Update taxpayer IMS invoice actions in one bounded request. Check the operation reference for completion. Estimated maximum call cost is $0.12. | Per successful call; quote exact input for the maximum price. |
| `india.gst.ims.actions.save` | Update taxpayer IMS invoice actions in one bounded request. Check the operation reference for completion. Estimated maximum call cost is $0.12. | Per successful call; quote exact input for the maximum price. |
| `india.gst.ims.invoices.count` | Read taxpayer IMS invoice counts. Estimated maximum call cost is $0.12. | Per successful call; quote exact input for the maximum price. |
| `india.gst.ims.invoices.get` | Read taxpayer IMS invoices, including counterparty tax identifiers and values. Estimated maximum call cost is $0.12. | Per successful call; quote exact input for the maximum price. |
| `india.gst.return-operation.get` | Read the state of a saved, prepared or filed return, 2B generation, or IMS action. Estimated maximum call cost is $0.12. | Per successful call; quote exact input for the maximum price. |
| `india.gst.return.file` | File a taxpayer return using the current government summary. A signature is supplied by the builder; no private signing key reaches this call. Filing is irreversible. Estimated maximum call cost is $0.12. | Per successful call; quote exact input for the maximum price. |
| `india.gst.return.prepare` | Prepare a return for filing; processing does not mean filed. Estimated maximum call cost is $0.12. | Per successful call; quote exact input for the maximum price. |
| `india.gst.return.summary.get` | Read a taxpayer return summary and checksums by form. Returns tax totals, not a compliance score. Estimated maximum call cost is $0.12. | Per successful call; quote exact input for the maximum price. |
| `markets.interest-rates.list` | A central bank's policy interest rate over time. | Per successful call; quote exact input for the maximum price. |
| `payments.account.connect` | Start or resume onboarding of your own payment account; returns an embedded next step or a hosted onboarding link for older accounts. | Per successful call; quote exact input for the maximum price. |
| `payments.account.status` | Check whether your connected payment account can take charges and receive payouts, and what is still due. | Per successful call; quote exact input for the maximum price. |
| `payments.capture.get` | Read a captured payment in your own connected account, including its amount and settlement state. | Per successful call; quote exact input for the maximum price. |
| `payments.captures.list` | List capture amounts and status for a payment in your account. | Per successful call; quote exact input for the maximum price. |
| `payments.checkout.create` | Create a hosted checkout page that charges your customer on your own connected payment account. | Per successful call; quote exact input for the maximum price. |
| `payments.checkout.create-catalog` | Create a hosted checkout for a saved catalog variant, with optional customer contact and billing prefill. | Per successful call; quote exact input for the maximum price. |
| `payments.checkout.get` | Read a checkout: by ref, whether it was paid, with a refundable reference for each confirmed captured payment; by checkoutId and your client’s completion token, the completion snapshot with payment IDs, authorisation states and amounts. No contact or card data. | Per successful call; quote exact input for the maximum price. |
| `payments.compliance-request.get` | Get requested sender and recipient compliance details, including any existing personal values. | Per successful call; quote exact input for the maximum price. |
| `payments.compliance-request.respond` | Submit personal sender and recipient details for payment compliance; acceptance does not mean payment release. | Per successful call; quote exact input for the maximum price. |
| `payments.dispute.accept` | Accept a dispute in your connected account; this commits the disputed money. | Per successful call; quote exact input for the maximum price. |
| `payments.dispute.arbitration-report.get` | Get the file identifier of a submitted dispute evidence report; report bytes are not returned. | Per successful call; quote exact input for the maximum price. |
| `payments.dispute.arbitration.submit` | Submit saved arbitration evidence, which can include customer communications and delivery details. | Per successful call; quote exact input for the maximum price. |
| `payments.dispute.evidence-report.get` | Get the file identifier of a submitted dispute evidence report; report bytes are not returned. | Per successful call; quote exact input for the maximum price. |
| `payments.dispute.evidence.get` | Get saved dispute evidence, including requested customer communications and delivery facts, with the disputed amount, the evidence deadline, the evidence kinds the dispute asks for and the disputed payment. | Per successful call; quote exact input for the maximum price. |
| `payments.dispute.evidence.submit` | Submit saved dispute evidence, which can include customer communications and delivery details. | Per successful call; quote exact input for the maximum price. |
| `payments.dispute.evidence.update` | Update a dispute evidence draft, including customer communications or delivery facts; does not submit it. | Per successful call; quote exact input for the maximum price. |
| `payments.dispute.get` | Get a disputed payment amount, reason and reversal dates in your account. | Per successful call; quote exact input for the maximum price. |
| `payments.dispute.scheme-files.list` | List scheme evidence file identifiers for a dispute; file contents are not returned. | Per successful call; quote exact input for the maximum price. |
| `payments.disputes.list` | List disputed payment amounts and reasons in your account. | Per successful call; quote exact input for the maximum price. |
| `payments.evidence-file.get` | Get evidence file metadata, which may include a customer-related filename; no download URL or file contents. | Per successful call; quote exact input for the maximum price. |
| `payments.evidence-file.upload` | Upload a PDF, JPEG or PNG evidence file from your private storage, at most 4 MB; it may contain customer details. | Per successful call; quote exact input for the maximum price. |
| `payments.financial-actions.list` | List financial action facts for a payment or action; account identifiers and processor fees are omitted. | Per successful call; quote exact input for the maximum price. |
| `payments.mandate.create` | Register customer consent for future payments; financial credentials are sent once and omitted from the result. | Per successful call; quote exact input for the maximum price. |
| `payments.mandate.get` | Get a customer payment authorization state without financial credentials. | Per successful call; quote exact input for the maximum price. |
| `payments.mandate.revoke` | Revoke a customer payment authorization and cancel subscriptions that use it. | Per successful call; quote exact input for the maximum price. |
| `payments.mandates.list` | List a customer's payment authorizations without bank accounts or wallet credentials. | Per successful call; quote exact input for the maximum price. |
| `payments.methods.list` | List payment methods eligible for a purchase. Optional buyer email and phone are sent only to assess eligibility; results contain method categories and requested account presence, never contacts or tokens. | Per successful call; quote exact input for the maximum price. |
| `payments.order.authorize` | Reserve the money for an approved order in your connected account. Pending results do not confirm payment. | Per successful call; quote exact input for the maximum price. |
| `payments.order.capture` | Collect the money for an approved order in your connected account. Pending results do not confirm payment. | Per successful call; quote exact input for the maximum price. |
| `payments.order.confirm` | Confirm a buyer wallet payment source for an order. The optional buyer email is sent only for this payment; capture remains a separate step. | Per successful call; quote exact input for the maximum price. |
| `payments.order.create` | Create an order in your connected merchant account. | Per successful call; quote exact input for the maximum price. |
| `payments.order.get` | Read a order from your connected merchant account. | Per successful call; quote exact input for the maximum price. |
| `payments.order.payments.list` | List payments for an order in your connected merchant account. | Per successful call; quote exact input for the maximum price. |
| `payments.order.settlements.get` | Read settlement status and net amount for your own order. | Per successful call; quote exact input for the maximum price. |
| `payments.order.terminate` | Request termination of your unpaid order; requested termination is distinct from confirmed termination. | Per successful call; quote exact input for the maximum price. |
| `payments.order.update` | Update a order in your connected merchant account. | Per successful call; quote exact input for the maximum price. |
| `payments.orders.list` | List orders in your connected merchant account. | Per successful call; quote exact input for the maximum price. |
| `payments.payment-actions.list` | List actions on a payment in your connected account, without payer contact data. | Per successful call; quote exact input for the maximum price. |
| `payments.payment-link.cancel` | Cancel a payment link. It stays readable and earlier payments are not refunded. | Per successful call; quote exact input for the maximum price. |
| `payments.payment-link.create` | Create a payment link (payment request) for a customer. May contact the customer only when notification or reminder options are enabled. Accepts customer name, email and phone for delivery, and optional bank and fund account references for payment validation. | Per successful call; quote exact input for the maximum price. |
| `payments.payment-link.get` | Read a payment link from your connected merchant account. | Per successful call; quote exact input for the maximum price. |
| `payments.payment-link.notify` | Send a payment link to its saved customer by email or text message. | Per successful call; quote exact input for the maximum price. |
| `payments.payment-link.orders.list` | List your order IDs, amounts and states for a payment link; at most 1000 orders. | Per successful call; quote exact input for the maximum price. |
| `payments.payment-link.update` | Update a payment link in your connected account: reference, expiry, notes, description, methods, lines, addresses, minimum amount or archived state. A source declines any field its account cannot change. | Per successful call; quote exact input for the maximum price. |
| `payments.payment-links.list` | List payment links in your connected merchant account. | Per successful call; quote exact input for the maximum price. |
| `payments.payment.cancel` | Release an uncaptured payment authorization in your connected account. This does not refund a settled payment. | Per successful call; quote exact input for the maximum price. |
| `payments.payment.cancel-by-key` | Cancel a payment using the exact original creation key when its payment id is unavailable; does not refund a completed payment. | Per successful call; quote exact input for the maximum price. |
| `payments.payment.capture` | Capture an authorized payment. Moves money from the customer to your merchant account. | Per successful call; quote exact input for the maximum price. |
| `payments.payment.get` | Read a payment from your connected merchant account. | Per successful call; quote exact input for the maximum price. |
| `payments.payment.reauthorize` | Renew an uncaptured payment authorization in your account. The renewed record can have a different paymentId. | Per successful call; quote exact input for the maximum price. |
| `payments.payment.reverse` | Request cancellation or a full refund of a payment on your connected account; an accepted request is pending until confirmed separately. | Per successful call; quote exact input for the maximum price. |
| `payments.payment.update` | Update a payment in your connected merchant account. | Per successful call; quote exact input for the maximum price. |
| `payments.payment.update-amount` | Request a new total for an authorised, uncaptured payment on your connected account; an accepted request remains pending. | Per successful call; quote exact input for the maximum price. |
| `payments.payments.list` | List payments in your connected account for an exact order reference; up to 50 per page. | Per successful call; quote exact input for the maximum price. |
| `payments.payout.cancel` | Cancel an unclaimed payout and return its funds to your account. Completed transfers cannot be cancelled. | Per successful call; quote exact input for the maximum price. |
| `payments.payout.get` | Read a recipient payout in your own connected account. | Per successful call; quote exact input for the maximum price. |
| `payments.payout.send` | Send money from your connected account to one recipient. Wallet recipients use an email, phone or handle; UPI recipients a payment address; bank and card destinations depend on the connected source. Pending does not mean received. | Per successful call; quote exact input for the maximum price. |
| `payments.payout.send-bulk` | Send up to 100 recipient payouts as one background job. Every result echoes your row id. Money is sent from your connected account; pending or unclaimed results are not completed transfers. | Per successful call; quote exact input for the maximum price. |
| `payments.qr-code.close` | Close a payment QR code. It stays readable and earlier payments are not refunded. | Per successful call; quote exact input for the maximum price. |
| `payments.qr-code.create` | Create a payment QR code in your connected merchant account and copy its image to platform storage. Optional tax invoice data includes the customer name. | Per successful call; quote exact input for the maximum price. |
| `payments.qr-code.get` | Read a qr code from your connected merchant account. | Per successful call; quote exact input for the maximum price. |
| `payments.qr-code.payments.list` | List payments collected through a QR code in your connected merchant account. | Per successful call; quote exact input for the maximum price. |
| `payments.qr-code.update` | Update a qr code in your connected merchant account. | Per successful call; quote exact input for the maximum price. |
| `payments.qr-codes.list` | List payment QR codes in your connected merchant account. | Per successful call; quote exact input for the maximum price. |
| `payments.refund.cancel` | Cancel a queued refund before it is sent to the customer. | Per successful call; quote exact input for the maximum price. |
| `payments.refund.get` | Read a refund from your connected merchant account. | Per successful call; quote exact input for the maximum price. |
| `payments.refund.update` | Update a refund in your connected merchant account. | Per successful call; quote exact input for the maximum price. |
| `payments.refunds.list` | List refunds in your connected merchant account, optionally for a payment. | Per successful call; quote exact input for the maximum price. |
| `payments.saved-method.create` | Save encrypted card details for a consented customer on your connected account; return the method ID and masked card facts only. | Per successful call; quote exact input for the maximum price. |
| `payments.saved-method.delete` | Delete a customer’s saved payment method from your connected account after explicit confirmation. | Per successful call; quote exact input for the maximum price. |
| `payments.saved-method.get` | Get masked card or bank details from a saved payment method in your connected account. | Per successful call; quote exact input for the maximum price. |
| `payments.saved-methods.list` | List a customer’s saved payment methods on your connected account; return method IDs and masked card facts only, fetching at most 1000 records. | Per successful call; quote exact input for the maximum price. |
| `payments.settlement.lines.list` | List the payments, refunds, disputes and adjustments one settlement in your own merchant account paid out, each with your order ID, so a bank credit can be matched to its orders. | Per successful call; quote exact input for the maximum price. |
| `payments.settlements.list` | List settlement outcomes and net amounts during a date range in your own merchant account. Each row's ref lists the payments, refunds and disputes it settled (payments.settlement.lines.list). | Per successful call; quote exact input for the maximum price. |
| `payments.transactions.search` | Search financial records in your connected payment account within a dated window of at most 31 days. Results contain transaction amounts and actual fees, with no buyer contacts. Reporting can lag settlement. | Per successful call; quote exact input for the maximum price. |
| `payments.transfer-request.cancel` | Cancel a bank transfer request so the buyer can no longer pay it. The request stays readable; money already received is not moved by cancelling. | Per successful call; quote exact input for the maximum price. |
| `payments.transfer-request.create` | Ask your customer to pay by bank transfer into your own connected payment account. Returns the bank details and the reference the buyer must quote. The request becomes paid only on the provider's signed notification matched to it — track it with payments.transfer-request.get. | Per successful call; quote exact input for the maximum price. |
| `payments.transfer-request.get` | Read one bank transfer request: whether money has arrived, and how much. paid is reported only after the provider's signed notification was matched to the stored request — nothing the buyer or the caller says can make it paid, and neither can this read alone. | Per successful call; quote exact input for the maximum price. |
| `payments.transfer-request.list` | List your bank transfer requests, newest first, each with its state; a row's ref opens with payments.transfer-request.get or payments.transfer-request.cancel. | Per successful call; quote exact input for the maximum price. |
| `prediction.kalshi.events` | Events on the Kalshi prediction market with their markets. | Per successful call; quote exact input for the maximum price. |
| `prediction.kalshi.markets` | Markets on the Kalshi prediction market, with prices and volume. | Per successful call; quote exact input for the maximum price. |
| `prediction.kalshi.open-interest` | Daily open interest of a Kalshi market. | Per successful call; quote exact input for the maximum price. |
| `prediction.kalshi.order-books` | Historical order book snapshots of a Kalshi market. | Per successful call; quote exact input for the maximum price. |
| `prediction.kalshi.prices` | Price history of a Kalshi market, daily or hourly. | Per successful call; quote exact input for the maximum price. |
| `prediction.kalshi.trades` | Individual trades on a Kalshi market. | Per successful call; quote exact input for the maximum price. |
| `prediction.kalshi.volumes` | Daily trading volume of a Kalshi market. | Per successful call; quote exact input for the maximum price. |
| `prediction.markets.analytics` | Trends across prediction markets, the top markets and their momentum. | Per successful call; quote exact input for the maximum price. |
| `prediction.markets.correlations` | Pairs of prediction markets whose prices moved in step over 30 days, with the correlation. | Per successful call; quote exact input for the maximum price. |
| `prediction.markets.daily-comparison` | Daily volume and open interest of the same question on two prediction market platforms, side by side. | Per successful call; quote exact input for the maximum price. |
| `prediction.markets.matching` | Pairs of markets on two prediction platforms that ask the same question. | Per successful call; quote exact input for the maximum price. |
| `prediction.markets.search` | Browse and search prediction markets across platforms. | Per successful call; quote exact input for the maximum price. |
| `prediction.polymarket.candles` | Price candles of a Polymarket market. | Per successful call; quote exact input for the maximum price. |
| `prediction.polymarket.cohorts.stats` | Read anonymous Polymarket cohort counts for the source default window. | Per successful call; quote exact input for the maximum price. |
| `prediction.polymarket.events` | Events on the Polymarket prediction market with their markets. | Per successful call; quote exact input for the maximum price. |
| `prediction.polymarket.events-list` | List published Polymarket events from the first result page. | Per successful call; quote exact input for the maximum price. |
| `prediction.polymarket.markets` | Markets on the Polymarket prediction market, by market slug, with prices and volume. | Per successful call; quote exact input for the maximum price. |
| `prediction.polymarket.open-interest` | Daily open interest of a Polymarket market. | Per successful call; quote exact input for the maximum price. |
| `prediction.polymarket.order-books` | Historical order book snapshots of a Polymarket outcome token. | Per successful call; quote exact input for the maximum price. |
| `prediction.polymarket.positions` | A wallet's open and closed positions on Polymarket. | Per successful call; quote exact input for the maximum price. |
| `prediction.polymarket.prices` | Price history of a Polymarket market. | Per successful call; quote exact input for the maximum price. |
| `prediction.polymarket.smart-money` | Polymarket Smart Money. | Per successful call; quote exact input for the maximum price. |
| `prediction.polymarket.trades` | List recent public prediction-market trades. Returns personal data: Public names, profiles, wallet activity or published records; see the result fields.. | Per successful call; quote exact input for the maximum price. |
| `prediction.polymarket.volume-split` | Trading volume of a Polymarket market split by YES and NO outcome. | Per successful call; quote exact input for the maximum price. |
| `prediction.polymarket.volumes` | Trading volume and trade count of a Polymarket market over time. | Per successful call; quote exact input for the maximum price. |
| `stocks.balance-sheets.list` | A listed company's balance sheets by period, with its assets, liabilities and equity. | Per successful call; quote exact input for the maximum price. |
| `stocks.cash-flow-statements.list` | A listed company's cash-flow statements by period, with operating, investing and financing cash flows. | Per successful call; quote exact input for the maximum price. |
| `stocks.company.competitors` | Get competitors. | Per successful call; quote exact input for the maximum price. |
| `stocks.company.filings` | A company's regulatory filings, with form type, date and link. | Per successful call; quote exact input for the maximum price. |
| `stocks.company.news` | Recent news about a listed company, by its ticker, with each headline, source and date. | Per successful call; quote exact input for the maximum price. |
| `stocks.company.onchain-markets` | On-chain markets where tokens tracking a listed company's shares trade. | Per successful call; quote exact input for the maximum price. |
| `stocks.company.profile` | The company behind a ticker, with its exchange, country, market value and listing date. Free, but it runs on a pool of 50 calls a day shared by every caller: after the 50th call of a day the source refuses until the next day. | Per successful call; quote exact input for the maximum price. |
| `stocks.company.score` | Get MarketRank score. | Per successful call; quote exact input for the maximum price. |
| `stocks.company.statements` | A listed company's financial statements. | Per successful call; quote exact input for the maximum price. |
| `stocks.company.summary` | A live market summary of a listed company, with price, market value, valuation ratios and 52-week range. | Per successful call; quote exact input for the maximum price. |
| `stocks.congress.trades` | List publicly filed securities transactions by members of Congress. Returns personal data: Public names, profiles, wallet activity or published records; see the result fields.. | Per successful call; quote exact input for the maximum price. |
| `stocks.dividends.list` | List the dividends a stock has paid, with each ex-date and amount per share. | Per successful call; quote exact input for the maximum price. |
| `stocks.earnings.calendar` | Upcoming and recent company earnings dates. | Per successful call; quote exact input for the maximum price. |
| `stocks.earnings.list` | A listed company's reported earnings, quarter by quarter, with earnings per share, revenue and the surprise against estimates. | Per successful call; quote exact input for the maximum price. |
| `stocks.eod.history` | Daily open/high/low/close/volume bars for a stock ticker, oldest first. | Per successful call; quote exact input for the maximum price. |
| `stocks.eod.latest` | The latest end-of-day prices of a stock, with open, high, low, close and volume. | Per successful call; quote exact input for the maximum price. |
| `stocks.exchanges.list` | List stock exchanges, with their market identifier codes, countries, currencies and time zones. | Per successful call; quote exact input for the maximum price. |
| `stocks.fund.holdings` | The holdings of an exchange-traded or index fund, with each holding's weight, shares and market value. | Per successful call; quote exact input for the maximum price. |
| `stocks.income-statements.list` | A listed company's income statements by period, with revenue, costs, profit and earnings per share. | Per successful call; quote exact input for the maximum price. |
| `stocks.index.detail` | Get index detail. | Per successful call; quote exact input for the maximum price. |
| `stocks.indices.list` | Get market indices. | Per successful call; quote exact input for the maximum price. |
| `stocks.industries.list` | Industries with their companies and market value. | Per successful call; quote exact input for the maximum price. |
| `stocks.insider-buys.list` | Get insider buys. | Per successful call; quote exact input for the maximum price. |
| `stocks.insider-buys.significant` | Get significant insider buys. | Per successful call; quote exact input for the maximum price. |
| `stocks.insider-options.list` | Get insider stock options. | Per successful call; quote exact input for the maximum price. |
| `stocks.insider-sales.list` | Get insider sales. | Per successful call; quote exact input for the maximum price. |
| `stocks.insider-trades.list` | Trades in a listed company's shares by its own officers and directors, as filed with the regulator. Returns personal data: the names and titles of the company insiders who traded, as they appear in public filings. | Per successful call; quote exact input for the maximum price. |
| `stocks.insiders.search` | Search reported US insider transactions in plain words, with each hit's title, source and page. The hit text names the insiders as the public filings do. Returns personal data: the names of company insiders, as the public filings name them. | Per successful call; quote exact input for the maximum price. |
| `stocks.institutional-holdings.list` | The institutions that hold a listed company's shares, from their quarterly filings, with shares held and value. | Per successful call; quote exact input for the maximum price. |
| `stocks.intraday.prices` | A stock's prices through the trading day, bar by bar, with open, high, low, close and volume. | Per successful call; quote exact input for the maximum price. |
| `stocks.ipos.list` | Recent listing and registration filings of companies going public in the US, with the filing form and status. | Per successful call; quote exact input for the maximum price. |
| `stocks.kpi.guidance` | The guidance a listed company has given for its operating metrics, with the range, the period and the source sentence. | Per successful call; quote exact input for the maximum price. |
| `stocks.kpi.metrics` | A listed company's reported operating metrics (customers, units, subscribers and the like), by period. | Per successful call; quote exact input for the maximum price. |
| `stocks.kpi.non-gaap` | A listed company's non-GAAP measures as it reports them, by period. | Per successful call; quote exact input for the maximum price. |
| `stocks.market.status` | Whether the US stock market is open right now, with the state of each exchange and of pre-market and after-hours trading. | Per successful call; quote exact input for the maximum price. |
| `stocks.metrics.latest` | A listed company's latest valuation and financial ratios, such as price to earnings, margins, growth and debt to equity. | Per successful call; quote exact input for the maximum price. |
| `stocks.movers.list` | Get market movers. | Per successful call; quote exact input for the maximum price. |
| `stocks.news-sentiment.get` | Get news sentiment. | Per successful call; quote exact input for the maximum price. |
| `stocks.options.chain` | Get option chain. | Per successful call; quote exact input for the maximum price. |
| `stocks.ownership-filings.list` | Get 13D filings. | Per successful call; quote exact input for the maximum price. |
| `stocks.price-forecast.get` | Get price forecast. | Per successful call; quote exact input for the maximum price. |
| `stocks.quote.live` | Latest price for a stock ticker, with change since the previous close. | Per successful call; quote exact input for the maximum price. |
| `stocks.retail-activity.get` | Get retail trading activity. | Per successful call; quote exact input for the maximum price. |
| `stocks.screener.run` | Run screener. | Per successful call; quote exact input for the maximum price. |
| `stocks.sector.detail` | One stock market sector with its companies and performance. | Per successful call; quote exact input for the maximum price. |
| `stocks.sectors.list` | Stock market sectors. | Per successful call; quote exact input for the maximum price. |
| `stocks.sectors.overview` | Market-wide performance of stock market sectors, with the best and worst sectors and market coverage. | Per successful call; quote exact input for the maximum price. |
| `stocks.segments.list` | Read one annual or quarterly income-statement breakdown by business segment, product and geography. | Per successful call; quote exact input for the maximum price. |
| `stocks.short-interest.get` | Get short interest. | Per successful call; quote exact input for the maximum price. |
| `stocks.splits.list` | List a stock's splits, with each date and split factor. | Per successful call; quote exact input for the maximum price. |
| `stocks.tickers.search` | Find the tickers of listed securities by company name or part of a ticker, with the kind of security each is; it answers tickers only, where google.finance.tickers.search answers Google Finance's instrument pages with prices. Free, but it runs on a pool of 50 calls a day shared by every caller: after the 50th call of a day the source refuses until the next day. | Per successful call; quote exact input for the maximum price. |
| `stocks.tracked-companies.list` | Public companies tracked with market and financial data, with ticker and country. | Per successful call; quote exact input for the maximum price. |
| `trade.companies.search` | Find trading companies whose names match, optionally in given countries. | Per successful call; quote exact input for the maximum price. |
| `trade.company.profile` | A trading company's registration, industry, addresses and import and export totals. | Per successful call; quote exact input for the maximum price. |
| `trade.countries.list` | List countries with their public region and income group. | Per successful call; quote exact input for the maximum price. |
| `trade.country.stats` | A country's trade balance, top exports and imports and main trading partners. | Per successful call; quote exact input for the maximum price. |
| `trade.customs-duty.lookup` | The EU customs duty for goods by tariff (HS) code and origin, with any preferential or anti-dumping rate. | Per successful call; quote exact input for the maximum price. |
| `trade.destinations.rank` | Rank the destination countries of the shipments matching a trade search, by value and volume. | Per successful call; quote exact input for the maximum price. |
| `trade.exporters.rank` | Rank the exporters behind the shipments matching a trade search, by value, volume and deal count. | Per successful call; quote exact input for the maximum price. |
| `trade.hs-codes.rank` | Rank the tariff (HS) codes of the shipments matching a trade search, by value and volume. | Per successful call; quote exact input for the maximum price. |
| `trade.importers.rank` | Rank the importers behind the shipments matching a trade search, by value, volume and deal count. | Per successful call; quote exact input for the maximum price. |
| `trade.origins.rank` | Rank the origin countries of the shipments matching a trade search, by value and volume. | Per successful call; quote exact input for the maximum price. |
| `trade.partners.summary` | Read annual import and export values by trade partner. | Per successful call; quote exact input for the maximum price. |
| `trade.shipments.count` | Count trade records matching a company or product over a date range. | Per successful call; quote exact input for the maximum price. |
| `trade.shipments.search` | Search customs shipment records by product, tariff code, importer, exporter, country or port. | Per successful call; quote exact input for the maximum price. |
| `trade.volume.history` | Trade value and volume over time (by month, quarter or year) for the shipments matching a trade search. | Per successful call; quote exact input for the maximum price. |

## Missions

### General

| Id | What it does | Price basis |
|---|---|---|
| `airdrop.scout` | Keyword-matching airdrops, reported tasks and dated upcoming events from bounded pages. | Sum of step prices; quote exact input and options for the maximum price. |
| `bank.account.confirm` | Start an approved bank verification journey and return its explicit progress without claiming a risk clearance. | Sum of step prices; quote exact input and options for the maximum price. |
| `bank.accounts.summary` | Read account descriptions, balances and holder names for one consented bank link. | Sum of step prices; quote exact input and options for the maximum price. |
| `bank.connect` | Find an exact bank, start an approved connection, and return its latest authorization state. | Sum of step prices; quote exact input and options for the maximum price. |
| `bank.holder.match` | Compare the person's supplied name with bank-reported holder names, showing both comparison branches. | Sum of step prices; quote exact input and options for the maximum price. |
| `bank.link.erase` | Delete an owned banking user after approval and check the supplied bank consent for remaining accounts. | Sum of step prices; quote exact input and options for the maximum price. |
| `bank.transactions.categorize` | Categorize new bank transaction additions with separate booked and pending totals per currency. | Sum of step prices; quote exact input and options for the maximum price. |
| `beneficiary.add` | Save an approved IBAN recipient only after format, bank activity and both name checks pass. | Sum of step prices; quote exact input and options for the maximum price. |
| `beneficiary.cleanup` | List recipients with no transfers in a stated date window and optionally remove each after approval. | Sum of step prices; quote exact input and options for the maximum price. |
| `billing.catalog.audit` | Check catalog links, repeated pricing terms, repeated codes and expired codes on explicitly bounded catalog pages. | Sum of step prices; quote exact input and options for the maximum price. |
| `billing.contact.update` | Correct a billing customer's contact fields after approval and read the changes back. | Sum of step prices; quote exact input and options for the maximum price. |
| `billing.customer.close` | Delete a billing customer after approval only when complete snapshots show ended subscriptions and authorizations. | Sum of step prices; quote exact input and options for the maximum price. |
| `billing.plan.setup` | Create a plan after approval and read its limits and schedule back. | Sum of step prices; quote exact input and options for the maximum price. |
| `billing.portal.send` | Create a short-lived billing portal link and leave it as an approved email draft. | Sum of step prices; quote exact input and options for the maximum price. |
| `borrow.rates.compare` | Compare reported borrowing rates for an exact pool token name within the markets read. | Sum of step prices; quote exact input and options for the maximum price. |
| `bridge.compare` | Compare bridge volume rankings with separate chain-wide daily token figures. | Sum of step prices; quote exact input and options for the maximum price. |
| `card.on-file.manage` | List masked customer cards and add or remove one after approval. | Sum of step prices; quote exact input and options for the maximum price. |
| `cashflow.report` | Request or resume holder consent, fetch authorized bank data and report exact monthly inflows and outflows from the transactions read. | Sum of step prices; quote exact input and options for the maximum price. |
| `chain.market.report` | Chain-matched value locked, stablecoin supply and dated bridge flows, with coverage gaps stated. | Sum of step prices; quote exact input and options for the maximum price. |
| `chain.question.answer` | Answer a bounded public-chain sample question with a compiled read-only query, checked and costed before execution. | Sum of step prices; quote exact input and options for the maximum price. |
| `checkout.address.confirm` | A typed address confirmed live: suggestions, final form, missing apartment unit detected. | Sum of step prices; quote exact input and options for the maximum price. |
| `checkout.link.create` | Create a hosted checkout page on your connected payment account, only when the account can take charges, and say what is still due when it cannot. | Sum of step prices; quote exact input and options for the maximum price. |
| `checkout.paid.confirm` | Check one payment against its checkout snapshot and order, leaving missing proof unknown. | Sum of step prices; quote exact input and options for the maximum price. |
| `checkout.shipping.options` | Shipping choices for a basket before a shipment exists: can it be delivered, how soon, and what it costs. | Sum of step prices; quote exact input and options for the maximum price. |
| `churn.risk.report` | Subscriptions past due or set to cancel from your connected billing account, each with the rule and the fact that lists it, re-read before it is reported, with the customer behind it and the recurring amounts at risk per billing interval. | Sum of step prices; quote exact input and options for the maximum price. |
| `crypto.brief` | An exact token's reported quote and 24-hour move, dated name-matching news snippets, and a checked descriptive brief. | Sum of step prices; quote exact input and options for the maximum price. |
| `crypto.fund.diligence` | A uniquely matched fund's profile, portfolio and reported tier, with ranking-page context. | Sum of step prices; quote exact input and options for the maximum price. |
| `crypto.fundraising.digest` | Dated raises in a chosen month-sized window, with matched project and investor profiles. | Sum of step prices; quote exact input and options for the maximum price. |
| `crypto.market.brief` | A factual market snapshot with market totals, sentiment index, futures, selected-asset liquidations and fund flows. | Sum of step prices; quote exact input and options for the maximum price. |
| `crypto.signals.watchlist` | Sampled project and token attention rankings, with optional explicitly selected indicators and keyword news. | Sum of step prices; quote exact input and options for the maximum price. |
| `defi.protocol.report` | Read a protocol profile, selected chain TVL, fees, revenue and flows, keeping source figures separate. | Sum of step prices; quote exact input and options for the maximum price. |
| `dispute.evidence.pack` | Upload evidence, save a checked factual statement and attachments as an unsent dispute draft. | Sum of step prices; quote exact input and options for the maximum price. |
| `dispute.respond` | Read saved dispute evidence and related builder-named records, draft a checked statement, then submit or accept after approval. | Sum of step prices; quote exact input and options for the maximum price. |
| `disputes.triage` | Read capped unreversed disputes and reported evidence deadlines, sorting known deadlines and flagging urgency at read time. | Sum of step prices; quote exact input and options for the maximum price. |
| `dividend.profile` | A stock's dividend and split history alongside prices and per-payment yield observations. | Sum of step prices; quote exact input and options for the maximum price. |
| `dunning.draft` | A drafted payment reminder for each past-due customer, its facts written in code from your billing rows, left as drafts in an inbox you already have. It never sends. | Sum of step prices; quote exact input and options for the maximum price. |
| `earnings.brief` | Reported company results, guidance and key metrics beside the preceding quarter, with advice withheld. | Sum of step prices; quote exact input and options for the maximum price. |
| `etf.look-through` | Fund holdings with each available holding valuation kept separate. | Sum of step prices; quote exact input and options for the maximum price. |
| `ewaybill.cancel` | Read an owned e-way bill, approve cancellation and confirm its state. | Sum of step prices; quote exact input and options for the maximum price. |
| `ewaybill.consolidate` | Check each owned active way bill, then create one consolidated trip after approval. | Sum of step prices; quote exact input and options for the maximum price. |
| `ewaybill.issue` | Issue an approved shipment way bill and read its parties, document and state back. | Sum of step prices; quote exact input and options for the maximum price. |
| `ewaybill.update` | Change an owned bill's vehicle or extend its validity after approval, then read it back. | Sum of step prices; quote exact input and options for the maximum price. |
| `exchange.price.compare` | Compare the same spot pair across requested exchanges with separate quotes and depth. | Sum of step prices; quote exact input and options for the maximum price. |
| `expenses.categorize` | A list of card descriptors turned into merchants and spending categories. | Sum of step prices; quote exact input and options for the maximum price. |
| `financials.compare` | Income, balance sheet, cash flow and ratios for two or more tickers in one table. | Sum of step prices; quote exact input and options for the maximum price. |
| `fx.convert` | Show an executable quote, convert after approval bound to that quote, then read the conversion status. | Sum of step prices; quote exact input and options for the maximum price. |
| `fx.cost.compare` | Compare an executable quote's principal and separately quoted fees with central bank and market readings, without moving money. | Sum of step prices; quote exact input and options for the maximum price. |
| `fx.history.report` | Report daily central bank and market readings over at most 14 days, with computed sample ranges and optional premium intervals. | Sum of step prices; quote exact input and options for the maximum price. |
| `gst.einvoice.cancel` | Read the expected invoice, cancel it after approval, then confirm its state. | Sum of step prices; quote exact input and options for the maximum price. |
| `gst.einvoice.issue` | Register one approved legal invoice, then read its state and signed QR. | Sum of step prices; quote exact input and options for the maximum price. |
| `gst.gstr1.file` | Prepare GSTR1 for review, then file the unchanged reviewed summary with a fresh code and approval. | Sum of step prices; quote exact input and options for the maximum price. |
| `gst.gstr3b.file` | Prepare GSTR3B for review, then file the unchanged reviewed summary with a fresh code and approval. | Sum of step prices; quote exact input and options for the maximum price. |
| `gst.ims.review` | List waiting IMS invoices and save or reset exact reviewed decisions after approval. | Sum of step prices; quote exact input and options for the maximum price. |
| `gst.itc.reconcile` | Match purchase invoices against bounded 2A and 2B records without guessing missing amounts. | Sum of step prices; quote exact input and options for the maximum price. |
| `gst.supplier.check` | Compare public supplier filings to caller-supplied return deadlines. | Sum of step prices; quote exact input and options for the maximum price. |
| `gst.taxpayer.connect` | Start taxpayer access, verify a received code in a later run, or disconnect access after approval. | Sum of step prices; quote exact input and options for the maximum price. |
| `hyperliquid.trader.review` | A wallet's reported account on the Hyperliquid exchange: position measurements, orders, fills and closed-trade results. | Sum of step prices; quote exact input and options for the maximum price. |
| `index.health.check` | Read an index's configuration, sample its search, and inspect expected ids for absence, stale timestamps or wrong vector length. | Sum of step prices; quote exact input and options for the maximum price. |
| `india.identity.verify` | Decode supplied identity QR facts and check the supplied national number, decoded name, PAN holder name and PAN linkage with consent. | Sum of step prices; quote exact input and options for the maximum price. |
| `insider.activity.report` | Insider trades, institutional holders and filings with large reported moves listed. | Sum of step prices; quote exact input and options for the maximum price. |
| `invoice.process` | Check a USD invoice against its document text and owned active vendor, compare calculated US sales tax, and optionally book its approved bill. | Sum of step prices; quote exact input and options for the maximum price. |
| `invoice.vat.audit` | Check invoice arithmetic, the exact VAT registration and the stated percentage against standard country rates. | Sum of step prices; quote exact input and options for the maximum price. |
| `ipo.brief` | Dated public registration filings with caller-mapped company filings and exchange context. | Sum of step prices; quote exact input and options for the maximum price. |
| `mandate.revoke` | Find an owned recurring-debit authorization, revoke it after approval and read its state back. | Sum of step prices; quote exact input and options for the maximum price. |
| `mandate.setup` | Register existing recurring-debit consent after approval, then read its reported authorization state. | Sum of step prices; quote exact input and options for the maximum price. |
| `market.hiring.compare` | Compare employer-matched open role samples by function and place, with separate workforce histories and honest unknown seniority. | Sum of step prices; quote exact input and options for the maximum price. |
| `market.map` | Companies in a segment, each profiled and sorted into named groups by a model. | Sum of step prices; quote exact input and options for the maximum price. |
| `market.size` | Read separate company, people and known-mailbox dataset estimates without fetching contact records. | Sum of step prices; quote exact input and options for the maximum price. |
| `market.snapshot` | A stock, index or currency quote with the market overview and headlines, written up as description only. | Sum of step prices; quote exact input and options for the maximum price. |
| `order.fraud.review` | Gather an order's event, card, IP and location signals for a person to review in the builder's own system. | Sum of step prices; quote exact input and options for the maximum price. |
| `order.record.create` | An itemized order recorded with taxes and discounts added up in code and read back to match. | Sum of step prices; quote exact input and options for the maximum price. |
| `order.ship` | Buy one checked shipping rate after approval, then notify its customer only on confirmed label creation. | Sum of step prices; quote exact input and options for the maximum price. |
| `order.status.answer` | A checked order-status reply saved as a draft only after the inbound customer and exact app record were matched. | Sum of step prices; quote exact input and options for the maximum price. |
| `orders.recap` | A period summary of itemized orders: totals, taxes, top items and open states, computed in code. | Sum of step prices; quote exact input and options for the maximum price. |
| `payee.destination.check` | Check one bank identifier or a phone-linked payment address, preserving unknown bank details. | Sum of step prices; quote exact input and options for the maximum price. |
| `payment.account.onboard` | Check merchant charge readiness, offer approved onboarding and report details still due. | Sum of step prices; quote exact input and options for the maximum price. |
| `payment.amount.change` | Request a new owned payment total after approval and compare it with a fresh payment read. | Sum of step prices; quote exact input and options for the maximum price. |
| `payment.failure.explain` | Explain a payment state from its recorded action trail without inventing a failure reason. | Sum of step prices; quote exact input and options for the maximum price. |
| `payment.hold.capture` | Create an order, reserve its money after approval, then collect after a separate approval and read the capture back. | Sum of step prices; quote exact input and options for the maximum price. |
| `payment.hold.release` | Release or renew an owned uncaptured hold after approval and read its state back. | Sum of step prices; quote exact input and options for the maximum price. |
| `payment.link.cancel` | Cancel an unpaid payment link after approval and read its state back. | Sum of step prices; quote exact input and options for the maximum price. |
| `payment.link.reprice` | Change an unpaid link's lines or expiry after approval, showing the old and read-back terms. | Sum of step prices; quote exact input and options for the maximum price. |
| `payment.link.send` | Create a payment link, send it to its saved customer after approval, and read its current state. | Sum of step prices; quote exact input and options for the maximum price. |
| `payment.methods.advise` | Rank eligible payment categories by account presence and buyer preference, with checked reasons. | Sum of step prices; quote exact input and options for the maximum price. |
| `payment.qr.collect` | Create a fixed single-use payment QR, or check one made earlier, and close it after approval only once captured payment of the amount is read. | Sum of step prices; quote exact input and options for the maximum price. |
| `payment.return.risk` | Check a consented proposed debit and date, or report an actual return against a previous evaluation. | Sum of step prices; quote exact input and options for the maximum price. |
| `payment.reverse` | Cancel an owned authorization or request a full reversal, then read the payment and any new refund back. | Sum of step prices; quote exact input and options for the maximum price. |
| `payments.ask` | Answer a payment-history question from dated records with each sentence tied to numbered rows. | Sum of step prices; quote exact input and options for the maximum price. |
| `payments.reconcile` | Compare paid orders, captured payments, refunds and daily settlement totals for the records read, with explicit matching gaps. | Sum of step prices; quote exact input and options for the maximum price. |
| `payout.batch.send` | Check up to 20 instant-payment payees, approve one bulk payout and report every row. | Sum of step prices; quote exact input and options for the maximum price. |
| `payout.cash.link` | Create a payout link after approval, check its state and optionally cancel it while active, without contacting the recipient. | Sum of step prices; quote exact input and options for the maximum price. |
| `payout.unclaimed.cancel` | Cancel an unclaimed payout in the expected batch after approval and confirm returned funds. | Sum of step prices; quote exact input and options for the maximum price. |
| `perp.positioning.report` | Observed perpetual funding, long-to-short ratios, open interest and options for a token. | Sum of step prices; quote exact input and options for the maximum price. |
| `portfolio.digest` | Price moves and news for a list of tickers, each position paired with its own quote call, plus one written digest. | Sum of step prices; quote exact input and options for the maximum price. |
| `prediction.depth.report` | Observed order-book depth at caller prices, with separate venue volume and open interest histories. | Sum of step prices; quote exact input and options for the maximum price. |
| `prediction.trends.brief` | A numerical prediction-market brief with category histories, momentum and linked markets. | Sum of step prices; quote exact input and options for the maximum price. |
| `prediction.venue.spread` | Exact matching questions with each venue's prices, reported gap and volume in its own units. | Sum of step prices; quote exact input and options for the maximum price. |
| `prediction.wallet.review` | A wallet's position facts, reported results and separate latest prices without recommendations. | Sum of step prices; quote exact input and options for the maximum price. |
| `quote.source.find` | Where a quote or sentence appears: candidate pages found by searching the exact phrase, read, and matched to the wording in code. The earliest dated match is reported as the earliest found, not as the original. | Sum of step prices; quote exact input and options for the maximum price. |
| `rates.outlook.brief` | Central bank policy rates beside currency changes and country tax rates as facts. | Sum of step prices; quote exact input and options for the maximum price. |
| `refund.process` | Find one charge by its id in your billing account, refund it after approval, and leave a checked draft note to the customer. Nothing is sent. | Sum of step prices; quote exact input and options for the maximum price. |
| `refund.queue.cancel` | Check one queued refund belongs to the payment and cancel it after approval. | Sum of step prices; quote exact input and options for the maximum price. |
| `return.label.create` | A return set up with a carrier pickup from the customer, tracking registered and the customer told, each action only after approval. | Sum of step prices; quote exact input and options for the maximum price. |
| `revenue.summary` | Active subscriptions and recent gross charges from your connected billing account, with per-currency paid totals and an optional written summary. Refunds are not shown. | Sum of step prices; quote exact input and options for the maximum price. |
| `rwa.market.report` | Tokenised assets by class, issuer and chain beside fund flow snapshots. | Sum of step prices; quote exact input and options for the maximum price. |
| `sector.pulse` | Market open state beside sector, industry and index readings, without invented rankings. | Sum of step prices; quote exact input and options for the maximum price. |
| `settlement.shortfall.find` | Compare supplied paid order amounts with succeeded net settlement lines and confirmed refunds. | Sum of step prices; quote exact input and options for the maximum price. |
| `stablecoin.peg.watch` | Sample stablecoin USD peg readings and dated supply changes, with chain totals kept separate. | Sum of step prices; quote exact input and options for the maximum price. |
| `staking.compare` | Separate factual tables of liquid staking exchange rates and reported earning-pool yields. | Sum of step prices; quote exact input and options for the maximum price. |
| `statement.affordability.report` | Read statement income, observed repayments, recurring transactions and expenses without an affordability verdict. | Sum of step prices; quote exact input and options for the maximum price. |
| `statement.income.verify` | Read income and integrity facts from uploaded statements with the person's agreement. | Sum of step prices; quote exact input and options for the maximum price. |
| `stock.brief` | A ticker's latest price, recent daily closes and news, with a factual summary that is withheld when it reads as advice. | Sum of step prices; quote exact input and options for the maximum price. |
| `stocks.screen` | Tickers matching valuation and size criteria with the figures that qualified them. | Sum of step prices; quote exact input and options for the maximum price. |
| `subscription.charge.once` | Charge an active owned subscription after checking the caller-named authorisation and obtaining approval. | Sum of step prices; quote exact input and options for the maximum price. |
| `subscription.pause` | Pause or reactivate an owned subscription after approval and confirm its state. | Sum of step prices; quote exact input and options for the maximum price. |
| `subscription.plan.change` | Show existing and proposed recurring amounts, approve one plan or quantity change and read it back. | Sum of step prices; quote exact input and options for the maximum price. |
| `subscription.start` | Choose exact recurring catalogue terms, create an approved subscription and read it back. | Sum of step prices; quote exact input and options for the maximum price. |
| `tax.quote` | Tax due on one goods subtotal, checked against the order currency and destination, after approval. | Sum of step prices; quote exact input and options for the maximum price. |
| `token.flow.trace` | Sample token transfers, top recipients, exchange swaps and hash-checked transaction details without inferring ownership. | Sum of step prices; quote exact input and options for the maximum price. |
| `token.risk.report` | Token holder shares, ticker-based unlocks and sales, protocol usage and mechanically listed observations. | Sum of step prices; quote exact input and options for the maximum price. |
| `token.unlock.calendar` | Upcoming next token unlocks in an explicit window, ranked by their reported share of circulating supply. | Sum of step prices; quote exact input and options for the maximum price. |
| `tokenized.stock.compare` | A listed share quote beside its associated on-chain market prices, with unit and timing limits. | Sum of step prices; quote exact input and options for the maximum price. |
| `trade.buyers.find` | Ranked importers with separate trade facts and a company-matched, checked work contact. | Sum of step prices; quote exact input and options for the maximum price. |
| `trade.competitor.watch` | Monthly trade readings and newly observed counterparties in a dated shipment sample, with recurring checks of a fixed window. | Sum of step prices; quote exact input and options for the maximum price. |
| `trade.duty.quote` | Candidate tariff codes and EU duty readings for goods from an origin, preserving each rate and its conditions. | Sum of step prices; quote exact input and options for the maximum price. |
| `trade.market.entry` | An export market report with separate trade rankings, history and EU tariff readings. | Sum of step prices; quote exact input and options for the maximum price. |
| `trade.partner.verify` | Trading, register, legal-entity and shipment readings for a company, with separate address checks and explicit gaps. | Sum of step prices; quote exact input and options for the maximum price. |
| `trade.price.benchmark` | Shipment unit values by origin and period, preserving source figures and showing sample outliers. | Sum of step prices; quote exact input and options for the maximum price. |
| `trade.suppliers.find` | Ranked exporters with separate trade facts, registration, size and company news. | Sum of step prices; quote exact input and options for the maximum price. |
| `transaction.enrich` | A card or bank descriptor turned into a merchant with a profile. | Sum of step prices; quote exact input and options for the maximum price. |
| `transfer.quote.explain` | Return a transfer quote, quoted fees and delivery options, and destination fields without sending money. | Sum of step prices; quote exact input and options for the maximum price. |
| `treasury.balance.report` | Read explicitly named connected account balances, value them in one currency and list connected profiles without assuming a profile-to-account mapping. | Sum of step prices; quote exact input and options for the maximum price. |
| `treasury.companies.report` | Caller-named listed companies' crypto treasuries, transactions and share prices. | Sum of step prices; quote exact input and options for the maximum price. |
| `vasp.counterparty.check` | EU crypto-service authorisation evidence and approved screening of caller-named owners. | Sum of step prices; quote exact input and options for the maximum price. |
| `wallet.counterparty.screen` | Wallet age and sampled activity as facts, with unsupported ownership and sanctions links stated explicitly. | Sum of step prices; quote exact input and options for the maximum price. |
| `wallet.payment.complete` | List eligible methods, create an approved wallet order, confirm it and check collection once. | Sum of step prices; quote exact input and options for the maximum price. |
| `wallet.report` | Check one EVM wallet and report chain holdings, DeFi positions, value samples and a bounded activity feed without inferring its owner's identity. | Sum of step prices; quote exact input and options for the maximum price. |
| `watchlist.adjust` | Preview a monitor's search on its dataset with the dataset's coverage, then update the monitor or cancel it after approval. | Sum of step prices; quote exact input and options for the maximum price. |
| `watchlist.report` | What each saved-search and watched-list monitor delivered, run by run, with failures and empty runs flagged. | Sum of step prices; quote exact input and options for the maximum price. |
| `yield.opportunities.screen` | Rank reported pool yields and flag possible hack-name links without inferring safety. | Sum of step prices; quote exact input and options for the maximum price. |
