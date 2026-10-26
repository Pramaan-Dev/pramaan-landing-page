# Superpowers: Advertising

Your ad accounts, competitors' ads, audiences and creator deals.

## Ad accounts

Connect your ad accounts and read campaigns, ads, audiences, spend and results.

- `ads.account.connect.credentials`: Connect an ads platform account with its dashboard API key instead of a sign-in redirect. The key is forwarded once so the platform can verify it and keep it for the connection; it is not stored or logged by this API and never appears in a result or an error. The connected account shows up in social.accounts.list and works with the ads.* capabilities.
- `ads.account.connect.start`: Start connecting a platform's ads account: returns a sign-in link for the person who owns it, or reports that the ads account already exists. The person signs in, lands back on returnUrl, and the connection can then be checked with social.account.connect.status. The ads account shows up in social.accounts.list with the ads.* capabilities.
- `ads.accounts.list`: List the ad accounts behind a connected ads account (read-only): name, currency, balance.
- `ads.ad-sets.list`: List ad sets (ad groups) with status and budget, optionally for one campaign.
- `ads.ad.review.get`: Read an ad's review verdict: approved or rejected, why, and where it may not run (read-only).
- `ads.ads.list`: List ads with delivery and review status and impressions, clicks, conversions (read-only).
- `ads.audiences.list`: List the custom and lookalike audiences in an ad account, with size (read-only).
- `ads.campaigns.list`: List ad campaigns with status, budget and spend, impressions, clicks, conversions (read-only).
- `ads.catalog-ad.create`: Create a catalog-template ad, paused, in an existing ad set, choosing its image or carousel format. Preview by default (checks the ad set and inputs, sends nothing); send an Idempotency-Key when creating.
- `ads.insights.get`: Spend, impressions, reach, clicks and conversions for a campaign or ad, in total and per day.
- `ads.leads.list`: List leads submitted through your ad lead forms, newest first (contains personal data).
- `ads.targeting.search`: Find advertising targeting options, including TikTok additional interests and hashtags and their availability.

## Ad libraries

See the ads any company is running, from public ad libraries.

- `ads.ad.detail`: One ad from the professional-network ad library by its id: creative text and media, landing page, advertiser, and delivery facts (impressions, total and by country) when disclosed.
- `ads.ad.detail-bulk`: Run ads.ad.detail for up to 100 rows as a background job. Each row returns the same fields as one lookup, keyed by your own row id; failed rows are free. Searches keep each row's requested result limit. For native batch processing, the 100-row maximum is USD 3.96 before the platform fee; the platform quotes the billed maximum before submission.
- `ads.library.search`: Search a public ad library (Meta, LinkedIn or Google) for ads by keyword, advertiser name or website domain: creative text, media, format, landing page, run dates and delivery facts when disclosed.
- `ads.library.search-bulk`: Run ads.library.search for up to 100 rows as a background job. Each row returns the same fields as one lookup, keyed by your own row id; failed rows are free. Searches keep each row's requested result limit. For native batch processing, the 100-row maximum is USD 51.48 before the platform fee; the platform quotes the billed maximum before submission.

## Bing Ads

Size Bing ad audiences and see how keywords perform in Bing ads.

- `bing.audience.estimate`: Size an ad campaign's audience on Bing for a targeting of ages, genders, bid and daily budget in one location.
- `bing.keywords.performance`: How keywords perform in Bing ads by month, device and match type, with impressions, clicks and cost.

## Douyin brand and creator index

Match brands and compare Douyin creators for marketing.

- `douyin.index-brand-valid.info`: Check which brands on Douyin's marketing index a list of brand keywords matches, with each match's category.
- `douyin.index-brand.suggest`: Match a brand keyword to the brands Douyin's marketing index knows, with each one's category.
- `douyin.index-daren-compare-users.stable`: Compare up to five Douyin creators' recent output, one row with each creator's counts over the window and its averages. Returns personal data: the creators' public names.
- `douyin.index-daren-great-item-mile.info`: A Douyin creator's recent per-work engagement averages against comparable creators, by fans, likes, comments and shares. Returns personal data: the creator's public engagement counts.
- `douyin.index-daren-sug-great-user.list`: Douyin influencer suggestions by keyword. Returns personal data: public names, profile details and published content.

## Douyin Xingtu creator marketplace

Find Douyin creators for paid deals and see their prices, audience and results.

- `douyin-xingtu.activities`: List the available activity industries. Returns personal data: public names, profile details and published content.
- `douyin-xingtu.creator.audience`: Read a creator's audience make-up as the marketplace reports it, named distribution groups, each with the share of every band. The link stage picks which audience relation is counted; the fan stage picks which fan group. Returns personal data: the make-up of the creator's audience, as marketplace distributions.
- `douyin-xingtu.creator.channel-stats`: Read a creator's per-channel introduction as the creator marketplace shows it, for one content format. No price, rate or ranking of the creator is returned. Returns personal data: the creator's self-written introduction.
- `douyin-xingtu.creator.comment-keywords`: List a creator's most-quoted comment keywords as the creator marketplace shows them, with how hot each is. Rates comments, not the creator. Returns personal data: the public comment words on the creator's content.
- `douyin-xingtu.creator.commerce-spread`: Read a creator's commerce spread, the media prices the marketplace expects for the creator by video length, the creator's price percentile among creators, and the view count it expects. Returns personal data: the creator's expected media prices, price percentile and view count.
- `douyin-xingtu.creator.content-keywords`: Read the keywords a creator's content is found under, as the creator marketplace groups them. About the content, not the creator. Returns personal data: the keywords of the creator's public content.
- `douyin-xingtu.creator.contract-stats`: Read a creator's marketplace contract record, its credit scores and how many orders it processed. Returns personal data: the creator's marketplace credit scores and order count.
- `douyin-xingtu.creator.conversion`: Read how a creator's content converts for advertisers, as reported ranges - typical order value, component clicks and product price. No media price of the creator is returned. Returns personal data: the creator's commerce figures, as ranges.
- `douyin-xingtu.creator.cost-performance`: Read what the marketplace expects a creator's advertising to cost by video length, cost per engagement and per mille, and the view count it expects. Returns personal data: the creator's expected media prices and view count.
- `douyin-xingtu.creator.display-check`: Check whether a creator can be shown to advertisers in the creator marketplace, with the follower and link counts the check reports. Returns personal data: the creator's marketplace display status.
- `douyin-xingtu.creator.follower-trend`: Read how a creator's follower count moved day by day over a date range, with the total change. A follower count is a public page figure. Returns personal data: the creator's public follower counts.
- `douyin-xingtu.creator.keywords`: Read the keywords a creator's content is found under, as the marketplace groups them. About the content, not the creator. Returns personal data: the keywords of the creator's public content.
- `douyin-xingtu.creator.live-audience`: Read the make-up of a creator's live audience as the marketplace reports it, named distribution groups with the share of every band, by live-room type and audience stage. Returns personal data: the make-up of the creator's live audience, as marketplace distributions.
- `douyin-xingtu.creator.live-stats`: Read a creator's live-commerce outcomes as the marketplace reports them - sales value ranges and product counts. No media price or rank of the creator is returned. Returns personal data: the creator's live-commerce figures, as ranges and counts.
- `douyin-xingtu.creator.pricing`: Read a creator's published advertising price card as the marketplace lists it, one row per video length and task category, with the industries it tags the creator under. Returns personal data: the creator's published advertising prices.
- `douyin-xingtu.creator.profile`: Read a creator's marketplace profile as the marketplace shows it, the public name, avatar, follower count, agency and residence, with the marketplace's levels and credit score of the creator. Returns personal data: the creator's public marketplace profile, as names, counts and residence.
- `douyin-xingtu.creator.spread`: Read how the marketplace grades a creator's content spread - interaction, play-over and play-consistency grades. No media price or rank of the creator is returned. Returns personal data: the marketplace's grades of the creator's content.
- `douyin-xingtu.creator.touchpoints`: Read where a creator's audience meets the marketplace's content, named touchpoints with counts, three levels deep. Returns personal data: the creator's audience touchpoints, as marketplace aggregates.
- `douyin-xingtu.creator.videos`: List a Douyin creator's recent videos as the creator marketplace shows them, with each video's title, address, length and when it was posted. No price, rate or ranking of the creator is returned. Returns personal data: the public names and handles of the creators involved.
- `douyin-xingtu.search.creators`: Search public profiles and return their names and biographies. Returns personal data: public profile name, handle, biography and follower count.
- `douyin-xingtu.search.filters`: List the available creator search filter options. Returns personal data: public names, profile details and published content.
- `douyin-xingtu.video.report`: Xingtu video report details by item id. Returns personal data: public names, profile details and published content.
- `douyin.creators.live`: Search public commercial livestream creators by display-name keywords. Returns personal data: Public creator display names and published follower counts..
- `douyin.creators.rankings`: Read the default public ranking of Douyin commercial creators. Returns personal data: Public creator display names and published follower counts..
- `douyin.user.xingtu-id`: Turn a Douyin username into the account's id in Douyin's creator marketplace (Xingtu), which the marketplace reads take. No rate of the creator is returned. Returns personal data: the account's public Douyin and marketplace ids.
- `douyin.xingtu-demander-mcn.list`: Douyin Xingtu MCN agencies by name. Returns personal data: public names, profile details and published content.
- `douyin.xingtu-search-toutiao.creator`: Search Toutiao's creators on the Xingtu influencer marketplace by keyword, with each creator's reach and article expectations. Returns personal data: the creators' public names, gender, city and province.
- `douyin.xingtu-search.anchor`: Search the live-streaming creators on the Xingtu influencer marketplace by keyword, with each creator's reach and live figures. Returns personal data: the creators' public names, gender, city and province.
- `douyin.xingtu-search.kol`: Search public profiles and return their names and biographies. Returns personal data: public profile name, handle, biography and follower count.

## Facebook ads

Find advertisers in the Facebook ad library.

- `meta-ads.facebook-adlibrary-search.companies`: Search Facebook ad library companies by name — page ids.

## Google Ads

See who advertises on Google, which keywords they bid on and their ads.

- `google.ads.advertisers.search`: Find advertisers in Google's ads transparency centre by name, with their verified status and location.
- `google.domain.ad-history`: List the Google search ads a domain has run over time, with the ad copy and the keywords they ran on.
- `google.domain.paid-keywords`: List the keywords a domain bids on in Google search ads, with volume, cost per click and monthly cost.
- `google.domain.paid-pages`: A site's landing pages for Google search ads, with estimated paid traffic, keywords and ad counts.
- `google.keywords.ad-traffic`: Estimate the clicks and cost of Google search ads on a set of keywords at a given bid.
- `google.serp.ads`: List the sponsored ads Google shows on its results page for a search, from a named place.

## LinkedIn ads

Read ads from LinkedIn's public ad library.

- `linkedin.ad.detail`: Get one ad from LinkedIn's public ad library by its address, with the advertiser, its headline and text, and its format.

## Tag Manager

Manage your website tags, triggers and variables in Google Tag Manager.

- `tagmanager.account.get`: Get a account in your connected tag management account. (needs a connected account)
- `tagmanager.accounts.list`: List the accessible accounts in your connected tag management account. (needs a connected account)
- `tagmanager.container.get`: Get a container in your connected tag management account. (needs a connected account)
- `tagmanager.containers.list`: List containers in your connected tag management account. (needs a connected account)
- `tagmanager.tag.create`: Create a tag in your connected tag management account. (needs approval; needs a connected account)
- `tagmanager.tag.delete`: Delete a tag in your connected tag management account. (needs approval; needs a connected account)
- `tagmanager.tag.get`: Get a tag in your connected tag management account. (needs a connected account)
- `tagmanager.tag.update`: Update a tag in your connected tag management account. (needs approval; needs a connected account)
- `tagmanager.tags.list`: List tags in your connected tag management account. (needs a connected account)
- `tagmanager.trigger.create`: Create a trigger in your connected tag management account. (needs approval; needs a connected account)
- `tagmanager.trigger.delete`: Delete a trigger in your connected tag management account. (needs approval; needs a connected account)
- `tagmanager.trigger.get`: Get a trigger in your connected tag management account. (needs a connected account)
- `tagmanager.trigger.update`: Update a trigger in your connected tag management account. (needs approval; needs a connected account)
- `tagmanager.triggers.list`: List triggers in your connected tag management account. (needs a connected account)
- `tagmanager.variable.create`: Create a variable in your connected tag management account. (needs approval; needs a connected account)
- `tagmanager.variable.delete`: Delete a variable in your connected tag management account. (needs approval; needs a connected account)
- `tagmanager.variable.get`: Get a variable in your connected tag management account. (needs a connected account)
- `tagmanager.variable.update`: Update a variable in your connected tag management account. (needs approval; needs a connected account)
- `tagmanager.variables.list`: List variables in your connected tag management account. (needs a connected account)
- `tagmanager.version.create`: Create a container version from a workspace, consuming that workspace; requires approval. (needs approval; needs a connected account)
- `tagmanager.version.get`: Get a version in your connected tag management account. (needs a connected account)
- `tagmanager.version.publish`: Publish a version in your connected tag management account. (needs approval; needs a connected account)
- `tagmanager.versions.list`: List versions in your connected tag management account. (needs a connected account)
- `tagmanager.workspace.get`: Get a workspace in your connected tag management account. (needs a connected account)
- `tagmanager.workspaces.list`: List workspaces in your connected tag management account. (needs a connected account)

## TikTok ads

Browse the TikTok ad library and top ads by country.

- `tiktok-ads.ad.detail`: Read a public TikTok ad library creative and engagement counts.
- `tiktok-ads.locations`: List the countries TikTok's ad library and trend pages can be filtered by, with the code each takes.
- `tiktok-ads.top-ads`: List featured public TikTok advertisements. Returns personal data: public names, profile details and published content.
- `tiktok.ad.detail`: Get one ad from TikTok's ad library by its id, with its title, industry, objective, landing page and engagement.

## WeChat Channels creators

See a WeChat Channels creator's marketplace profile, prices and videos.

- `qq-huxuan.channels-creator.profile`: Read a Video Channels creator's marketplace profile as the marketplace shows it, public figures, follower trend and expected media prices, with the marketplace's percentile ranks of the creator. Returns personal data: the creator's public marketplace profile, as names, counts and figures.
- `qq-huxuan.channels-creator.videos`: List a WeChat Channels creator's videos as Tencent's creator marketplace shows them, with each video's text, when it was posted and its reads, likes, comments and saves. No price, rate or ranking of the creator is returned. Returns personal data: the public names of the people involved.

## Xiaohongshu creator marketplace

Find Xiaohongshu creators for paid deals, with their notes and reach.

- `xiaohongshu-pugongying.creator-filters.list`: List the available creator search filter choices.
- `xiaohongshu-pugongying.creator.notes`: List a Xiaohongshu creator's notes as the creator marketplace shows them, with each note's reads, likes and saves. No price, rate or ranking of the creator is returned. Returns personal data: the public names and handles of the creators involved.
- `xiaohongshu-pugongying.creator.profile`: Read a creator's marketplace profile as the marketplace shows it, follower counts, levels, tags and expected media prices. Returns personal data: the creator's public marketplace profile, as names, counts and prices.
- `xiaohongshu-pugongying.posts.search`: Search public creator content. Returns personal data: public names, profile details and published content.
- `xiaohongshu-pugongying.search.notes`: Search the notes in Xiaohongshu's creator marketplace by keyword, with each note's author and its reads, likes, comments and saves. No price, rate or ranking of a creator is returned. Returns personal data: the public names and handles of the creators involved.
