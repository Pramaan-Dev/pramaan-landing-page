# Superpowers: AI search and SEO

Rankings, keywords, backlinks, and how AI answer engines see your brand.

## AI answer engines

Ask ChatGPT, Claude, Perplexity and others a question and get answers with sources.

- `aeo.brands.top`: Brands most frequently mentioned in AI answers for a keyword or domain (chatgpt platform only).
- `aeo.brave.answer`: Ask the Brave answer engine a prompt; returns its answer text and cited sources.
- `aeo.chatgpt.answer`: Ask the ChatGPT answer engine a prompt; returns its answer text and cited sources.
- `aeo.chatgpt.web-answer`: Ask ChatGPT a question the way a person does in its web app, and get the answer it shows with the sources it cites.
- `aeo.citations.count`: How often AI assistants cite a site, and how many of its pages, in total and per assistant.
- `aeo.claude.answer`: Ask the Claude answer engine a prompt; returns its answer text and cited sources.
- `aeo.copilot.web-answer`: Ask Microsoft Copilot a question the way a person does in its web app, and get the answer it shows with the sources it cites.
- `aeo.domains.top`: Domains most frequently cited in AI answers for a keyword or domain.
- `aeo.google.answer`: Ask Google's AI chat assistant (not the AI answers in search) a prompt with web search; returns its answer text and cited sources.
- `aeo.google.web-answer`: Ask Google's AI assistant a question the way a person does in its web app, and get the answer it shows.
- `aeo.keywords.volume`: Estimated usage of a list of keywords inside AI answer tools.
- `aeo.mentions.history`: Monthly mention counts and AI search volume over time for a keyword or domain.
- `aeo.mentions.search`: Find AI answers that mention a keyword or domain; returns each answer with its cited sources.
- `aeo.mentions.summary`: Aggregated mention counts and AI search volume for a keyword or domain across AI answers.
- `aeo.pages.top`: Pages most frequently cited in AI answers for a keyword or domain.
- `aeo.perplexity.answer`: Ask the Perplexity answer engine a prompt; returns its answer text and cited sources.

## Backlinks

See who links to any site, new and lost links, and link gaps.

- `web.anchors.list`: Anchor texts of links pointing at a domain or URL, with backlink and domain counts.
- `web.backlinks.changes`: New and lost backlinks and referring domains of a website, period by period.
- `web.backlinks.competitors`: Find the domains whose backlinks overlap most with a website's.
- `web.backlinks.counts`: Count the backlinks of many domains or pages in one call.
- `web.backlinks.counts-bulk`: Look up backlinks for up to 1000 targets in one job; at most $0.06 per run.
- `web.backlinks.history`: A website's backlink profile over time: backlinks, referring domains and rank, period by period; choose calendar snapshots explicitly.
- `web.backlinks.index-stats`: Totals for the link index this capability reads, with historical snapshots.
- `web.backlinks.intersect`: Find pages that link to several other websites but not to yours, for link-gap prospecting.
- `web.backlinks.list`: Pages linking to a domain or URL: source URL, target URL, anchor text, nofollow, dates.
- `web.backlinks.new-lost`: For each of many sites, how many backlinks it gained and lost since a date.
- `web.backlinks.new-lost-bulk`: Look up new lost backlinks for up to 1000 targets in one job; at most $0.06 per run.
- `web.backlinks.pages-summary`: Backlink totals for each page of a site that has backlinks.
- `web.backlinks.status`: Check which of a list of sites link to a website.
- `web.backlinks.summary`: Backlink profile of a domain or URL: total backlinks and referring domains.
- `web.backlinks.top-pages`: A site's pages with the most backlinks, with their link and linking-domain counts.
- `web.linking-domains.counts`: Count the domains that link to each of many domains or pages, in one call.
- `web.linking-domains.counts-bulk`: Look up referring domains for up to 1000 targets in one job; at most $0.06 per run.
- `web.linking-domains.history`: How many domains link to a site over time.
- `web.linking-domains.intersect`: Find domains linking to all of up to 20 targets, with counts and rank for each target.
- `web.linking-domains.list`: List the domains that link to a website, with how many links each sends.
- `web.linking-domains.new-lost`: For each of many sites, how many linking domains it gained and lost since a date.
- `web.linking-domains.new-lost-bulk`: Look up new lost referring domains for up to 1000 targets in one job; at most $0.06 per run.
- `web.linking-networks.list`: The IP networks and subnets that a site's backlinks come from, with link counts for each.
- `web.outbound-anchors.list`: The anchor texts of a site's links to other sites, with how many links and domains use each.
- `web.outbound-domains.list`: The domains a site links out to, with link and page counts and each domain's authority rating.
- `web.outlinks.summary`: A site's outbound link totals, external and dofollow, and how many domains it links to.
- `web.pages.backlinks-summary`: Backlink totals (links, linking domains, rank, spam score) for each of many pages or sites.
- `web.pages.backlinks-summary-bulk`: Look up pages summary for up to 1000 targets in one job; at most $0.06 per run.

## Baidu Search

See what Baidu shows for a keyword, in web and news results.

- `baidu.serp.news`: Get news results for a keyword on Baidu.
- `baidu.serp.organic`: Get organic search results for a keyword on Baidu.

## Bing keywords

Get Bing keyword ideas with search volume and cost per click.

- `bing.keywords.for-site`: Keyword ideas for a website on Bing, with their search volume and cost per click.
- `bing.keywords.ideas`: Keyword ideas related to up to 20 seed keywords, with their Bing search volume and cost per click.
- `bing.keywords.volume`: Monthly search volume, cost per click and competition on Bing for up to 100 keywords.
- `bing.keywords.volume-history`: Search volume of keywords on Bing month by month, split by device (desktop, mobile, tablet).

## Bing Search

See Bing results for a query: web, news, images, videos and shopping.

- `bing.serp.images`: Bing image results for a query, with each image's page and title.
- `bing.serp.news`: Bing News results for a query, with each headline, source, snippet and date.
- `bing.serp.organic`: Bing organic search results for a query: position, title, URL and snippet.
- `bing.serp.shopping`: Bing Shopping results for a query, with each product's price and seller.
- `bing.serp.videos`: Bing video results for a query, with each video's title, page and length.

## Blog publishing

Connect a blog or store, then write, edit, publish and schedule posts.

- `blog.post.create`: Create a blog post as a draft, or schedule it by giving a future publishAt (the platform then publishes it itself). It never publishes immediately: publishing now is blog.post.publish. The body is passed through as given. Send an Idempotency-Key.
- `blog.post.delete`: Delete a blog post permanently. This cannot be undone (attached media and tag names may remain on a site). Send an Idempotency-Key.
- `blog.post.get`: Read one blog post: title, body as the platform stores it, tags, author, excerpt, featured image, and whether it is published (or waiting for its scheduled time).
- `blog.post.publish`: Publish a blog post now. It goes live on the connected store or site at once; take it back with blog.post.unpublish. Retrying with the same Idempotency-Key cannot publish it twice.
- `blog.post.unpublish`: Move a published or scheduled blog post back to draft. Its public address stops serving until it is published again. Send an Idempotency-Key.
- `blog.post.update`: Edit a blog post: title, body, URL slug, tags, author, excerpt, featured image, search-engine fields, or move its schedule by giving a new future publishAt. Publishing and unpublishing are blog.post.publish and blog.post.unpublish. Send an Idempotency-Key.
- `blog.posts.list`: List the posts in one blog of a connected store or site, newest first. Use postId with the other blog.post.* capabilities.
- `blog.site.connect.start`: Start connecting a blog source: a store (give its myshopify.com domain) or a site. Returns a sign-in link for the person who owns it, and a ref to check with social.account.connect.status. The connected account then shows up in social.accounts.list and works with the blog.* capabilities.
- `blog.site.connect.token`: Connect a blog source with credentials instead of the sign-in flow: a store through its myshopify.com domain and a custom app's access token, or a site through its address, a login name and an application password. The secret is forwarded once so the platform can verify it and keep it for the connection; it is not stored or logged by this API and never appears in a result or an error. The connected account shows up in social.accounts.list.
- `blog.site.create`: Create a blog on a connected store. Stores that only publish into their existing blogs refuse this; a connected site always refuses it (its site is the blog). Send an Idempotency-Key.
- `blog.site.delete`: Delete a blog on a connected store, and every post in it. This is permanent and cannot be undone. Connected sites refuse this; disconnect the site instead. Send an Idempotency-Key.
- `blog.site.get`: Read one blog on a connected store or site: its title and URL slug. A site's own blog is addressed by the numeric id blog.sites.list reports.
- `blog.site.update`: Rename a blog on a connected store, or change its URL slug. Sites cannot be renamed this way (the site is the blog); those refuse. Send an Idempotency-Key.
- `blog.sites.list`: List the blogs on a connected store or site. A store can have several blogs; a site has exactly one. Use accountId and blogId with the other blog.* capabilities.

## Domain authority

Score any site or page for authority and spam, and track it over time.

- `web.domain-rating.history`: A site's link authority rating (0 to 100) over time, one row per date.
- `web.global.top-domains`: List the most linked-to domains on the whole web, with authority and spam scores.
- `web.global.top-pages`: List the most linked-to pages on the whole web, with authority scores.
- `web.spam-scores.list`: Get the spam score of many domains or pages in one call.
- `web.spam-scores.list-bulk`: Look up spam score for up to 1000 targets in one job; at most $0.06 per run.
- `web.url-rating.history`: A page's link authority rating (0 to 100) over time, one row per date.
- `web.url.metrics`: Authority and link metrics for a domain or URL (0-100 scores, backlinks, domains).
- `web.url.metrics-bulk`: Run web.url.metrics for up to 1000 rows as one background job. Every row comes back keyed by your own row id: found true with the fields, found false where there is no record, or an error for a row that could not be answered. Rows that could not be answered are free.

## DuckDuckGo Search

Get DuckDuckGo web and news results for any query.

- `duckduckgo.serp.organic`: DuckDuckGo web results for a query, with each title, link and snippet.

## Google Business Profile

Look up Google business listings, profiles and the questions people ask.

- `google.business.categories-aggregate`: Summarize groups of Google business categories within a geographic circle, with business counts, countries, service attributes and public review topics. Up to 1000 groups and ten entries per summary list.
- `google.business.categories.list`: List supported Google business category selectors with derived English labels, optionally filtered by text. This is a source's selector catalogue, not a complete or localized Business Profile taxonomy.
- `google.business.listings.search`: Search Google business listings by category and a geographic circle. Returns business details and public contact phone numbers, including sole traders where listed; no email or personal profiles. Up to 1000 rows per page.
- `google.business.profile`: Look up a business's public Google profile by name and place.
- `google.business.questions`: Read the questions people asked on a business's Google profile, with the answers.
- `local.analytics.performance`: Daily performance of one of your business profiles: map and search impressions, website and call clicks, direction requests, conversations, bookings and food orders, in total and per day. Data may be delayed a few days.
- `local.analytics.search-keywords`: The search terms that triggered impressions for one of your business profiles, aggregated by month. Terms below a minimum impression threshold are excluded; history reaches 18 months back and needs the analytics add-on.
- `local.attribute-metadata.list`: Which attributes a business location or category can have, their value types and their possible values. Check here before local.attributes.update.
- `local.attributes.get`: The attributes set on one of your business locations: amenities, services, accessibility, payment types. Discover what can be set with local.attribute-metadata.list.
- `local.attributes.update`: Set attributes (amenities, services, accessibility, payment types) on one of your business locations. Attributes left out stay as they are. See what is available with local.attribute-metadata.list. Send an Idempotency-Key.
- `local.location.get`: Read one of your business locations: name, description, website, phone, categories, opening hours, map and review links.
- `local.location.update`: Update one of your business locations: description, website and/or regular opening hours. Send an Idempotency-Key.
- `local.locations.list`: List the business locations on your connected business profiles; use accountId and locationId with the other local.* capabilities.
- `local.media.create`: Add a photo (or video) to one of your business locations from a publicly reachable URL, and choose where it appears on the listing. Send an Idempotency-Key.
- `local.media.delete`: Remove a photo or video from one of your business locations. The copy on the listing is gone; your source URL is untouched. Send an Idempotency-Key.
- `local.media.list`: Photos on one of your business locations: link, thumbnail, caption and where each appears on the listing.
- `local.menu.get`: Read the food menus of one of your restaurant locations: sections, items, prices, dietary and allergen labels.
- `local.menu.update`: Replace the food menus of one of your restaurant locations (send every menu you want to keep). Send an Idempotency-Key.
- `local.place-action.create`: Add a booking, ordering or reservation link to one of your business locations; it appears as a button on the listing. Send an Idempotency-Key.
- `local.place-action.delete`: Remove a booking, ordering or reservation link from one of your business locations. The button disappears from the listing. Send an Idempotency-Key.
- `local.place-action.update`: Change where an action link points, or what it does, on one of your business locations. Send an Idempotency-Key.
- `local.place-actions.list`: The booking, ordering and reservation links on one of your business locations: where each points and what it does.
- `local.review.get`: One customer review of one of your business locations: rating, text and your reply, as of now. Read it before replying again: a reply replaces the previous one and no history is kept.
- `local.review.reply`: Publicly reply to a customer review on your business's selected location; replaces any earlier reply. Send an Idempotency-Key.
- `local.review.unreply`: Remove your public reply from a customer review; the review itself stays. The reply text is gone for good: keep a copy if you may want it back. Send an Idempotency-Key.
- `local.reviews.batch.list`: Reviews across several of your locations in one call, newest first, so a poll can stop once it crosses its date window. No averages here; use local.reviews.list for one location with its average.
- `local.reviews.list`: Customer reviews of one of your business locations, newest first, with rating, text and your reply.
- `local.services.get`: The services one of your business locations offers, with their descriptions and prices.
- `local.services.update`: Replace the services one of your business locations offers (send every service you want to keep, or none to clear the list). Send an Idempotency-Key.
- `local.verification.complete`: Complete a pending verification of one of your business locations by submitting the code the business received. Send an Idempotency-Key.
- `local.verification.get`: Whether one of your business locations is verified and published, whether a verification is already in progress, and its attempt history.
- `local.verification.options`: Which verification methods are currently offered for one of your business locations. Nothing is sent to the business by this call.
- `local.verification.start`: Start verifying one of your business locations: the business is sent a code by post, phone call, text or email, depending on the method. Submit the code with local.verification.complete. Check local.verification.options first for the methods on offer. Send an Idempotency-Key. (needs approval)

## Google keywords

Find keyword ideas with search volume, cost, difficulty and trends.

- `google.interest-by-region`: Interest By Region.
- `google.keywords.categories`: Give the Google product and service category codes each of many keywords belongs to.
- `google.keywords.competitors`: Find the domains that rank in Google for a set of keywords, with how well each ranks.
- `google.keywords.difficulty`: Say how hard each of many keywords is to rank for in Google.
- `google.keywords.for-category`: List the keywords that belong to Google product and service categories, by category code.
- `google.keywords.for-site`: Suggest the keywords that are relevant to a website, with volume, cost per click and difficulty.
- `google.keywords.history`: Search volume, cost per click and competition of keywords in Google, month by month.
- `google.keywords.ideas`: Google keyword lists for a seed keyword, with volume, CPC and competition. The `mode` picks the list: `ideas` (the default) gives keywords from the same topic area, `suggestions` gives keywords that contain the seed, and `related` gives searches semantically related to it.
- `google.keywords.intent`: Say what people want when they search each of many keywords: to learn, to find a site, to compare or to buy.
- `google.keywords.top`: List the most searched keywords in Google for a country, with volume, cost per click and difficulty.
- `google.keywords.trends`: Google Trends interest over time (0 to 100) for up to five keywords.
- `google.keywords.volume`: Monthly Google search volume, CPC and competition for a list of keywords.
- `google.related-queries`: Related Queries.
- `google.related-topics`: Related Topics.

## Google Search

Get Google results, AI answers, suggestions and past versions of results pages.

- `google.serp.ai-mode`: Ask Google's AI Mode a question; returns its answer and the sources it cites.
- `google.serp.ai-overview`: Get the AI Overview Google shows above its results for a search, with the sources it cites.
- `google.serp.autocomplete`: Get the searches Google suggests as someone types a query.
- `google.serp.features`: Read selected Google search panes, including public names, text, images, businesses, products and video accounts. At most 15 panes and 50 entries each; worst case $0.002 per page.
- `google.serp.history`: Show what Google's results page for a search looked like at earlier dates.
- `google.serp.images`: Google Images results for a search, with the image, its size and the page it is on.
- `google.serp.lens`: Search by image with Google Lens; returns pages that show the same or a similar image.
- `google.serp.locations.list`: List the countries, regions and cities Google can target for a country, optionally filtered by name: Google geo-target id, canonical name, type and parent. A page can hold fewer places than the limit, so it is not a complete list of the country. The list changes rarely, so it is safe to cache for a day.
- `google.serp.organic`: Google organic search results for a query: position, title, URL and snippet, with optional device, depth and result details. With depth, limit is ignored. Each page is a new charged request.
- `google.serp.organic-bulk`: Google organic search for up to 100 rows as a background job. Each row is keyed by your own id. Failed rows are free. Each page is a new charged request; depth ignores limit and returns all organic rows to that depth when supported by a source.
- `google.serp.shorts`: Search for short videos; returns public titles, account names, thumbnails and dates. Video URLs are optional. At most 50 cards; worst case $0.002 per call.
- `google.serp.videos`: Google Videos results for a search, with source, channel and length.

## Google site rankings

See how a website ranks in Google, its keywords, pages and traffic.

- `google.domain.categories`: Show which Google product and service categories a website's rankings fall into, with keywords and traffic for each.
- `google.domain.category-metrics`: Domains ranking in given Google categories, with their keyword counts and traffic now and before.
- `google.domain.competitors`: Find the domains that compete with a website in Google search, ranked by the keywords they share.
- `google.domain.history`: A domain's Google ranking summary month by month, with keyword counts and estimated traffic.
- `google.domain.keywords-history`: How many Google keywords a site ranks for over time, by position band (top 3, 4 to 10, 11 to 20 and lower).
- `google.domain.overview`: Summarise a website's presence in Google search: keywords, traffic and traffic value, for organic results and for ads.
- `google.domain.pages`: List a website's pages that rank in Google, with the keywords and traffic each one brings.
- `google.domain.ranked-keywords`: List the keywords a website ranks for in Google, with position, search volume and the ranking page.
- `google.domain.ranking-pages-history`: How many of a site's pages rank in Google over time.
- `google.domain.search-volume-history`: The total monthly Google search volume of the keywords a site ranks for, over time.
- `google.domain.subdomains`: List the subdomains of a website that rank in Google.
- `google.domain.traffic-by-country`: A site's estimated Google organic and paid traffic and keyword counts, split by country.
- `google.domain.traffic-distribution`: How a site's pages split into bands of estimated monthly Google traffic, with the traffic in each band.
- `google.domains.shared-keywords`: List the keywords two websites both rank for in Google, with each one's position.
- `google.domains.traffic`: Estimate the monthly Google traffic of many websites in one call.
- `google.domains.traffic-history`: Estimate the Google traffic of many websites month by month.
- `google.pages.shared-keywords`: List the keywords two web pages both rank for in Google, with each one's position.

## Image search

Search the web for images and the pages they appear on.

- `image.search`: Search the web for images matching keywords or a description; returns image URLs, the pages they appear on, titles and dimensions.

## Keyword research

Find search volume, trends and suggestions for keywords.

- `web.keywords.trends`: Compare how popular up to five keywords are over time, from a web-wide trends index.
- `web.keywords.volume`: Monthly search volume of keywords, measured from real browsing rather than from one search engine's own figures.
- `web.keywords.volume-by-country`: Worldwide monthly search volume of keywords, with the share of each country.
- `web.query-correct`: Check spelling in a search query and return corrected queries when available.
- `web.query-suggest`: Suggest completions for a partial search query; optional enrichment can return public entity names and descriptions.

## Naver search

Get Naver search results and its AI overview for a query.

- `naver.serp.ai-overview`: The AI overview Naver shows for a query, with the sources it cites.
- `naver.serp.organic`: Naver web results for a query, with each title, link and snippet.

## Regional search engines

See search results from regional engines such as Seznam.

- `seznam.serp.organic`: Organic search results from Seznam, the Czech search engine.

## Search trends

See related searches, topics and interest by region.

- `web.interest-by-region`: Interest By Region.
- `web.related-queries`: Related Queries.
- `web.related-topics`: Related Topics.

## Site link analysis

See a site's pages, internal links and its strongest pages.

- `web.internal-anchors.list`: The anchor texts of a site's links to its own pages, with how many links use each.
- `web.site.crawled-pages`: The pages of a site a web crawler knows, with their status code, title, language and rating.
- `web.site.internal-links`: A site's pages ordered by how many internal links point to them.
- `web.site.top-pages`: List a website's highest-authority pages, with link counts per page.

## Web mentions

Find where a brand or topic is mentioned online and the tone.

- `web.brand-mentions.search`: Find web pages that mention a brand, with each page's title, snippet, kind of source and tone.
- `web.mentions.category-history`: How many pages are published in a topic category across the web, month by month.
- `web.mentions.history`: How often a word or phrase is mentioned across the web, month by month.
- `web.mentions.ratings`: How the pages that mention a word or phrase rate it, as counts per rating band.
- `web.mentions.search`: Find public web mentions of a topic or brand, with page titles, snippets and publication dates. Author identities are omitted.
- `web.mentions.sentiment`: The tone of web mentions of a keyword or brand, split into positive, negative and neutral, with connotations.
- `web.mentions.summary`: Count how often a word or phrase is mentioned across the web.

## WeChat search

See search interest and suggestions for WeChat keywords.

- `wechat-search.index`: Search-interest readings over time for one WeChat keyword.
- `wechat-search.suggestions`: Get suggested WeChat searches for a keyword.

## Yahoo Search

Get Yahoo web, image and video search results for a query.

- `yahoo.serp.images`: Yahoo image results for a query, with each image's page and title.
- `yahoo.serp.organic`: Yahoo organic search results for a query: position, title, URL and snippet.
- `yahoo.serp.videos`: Yahoo video results for a query, with each video's title, page and length.

## Yandex Search

Get Yandex web, image and video search results for a query.

- `yandex.serp.images`: Yandex image results for a query, with each image's page and title.
- `yandex.serp.organic`: Yandex web results for a query, with each title, link and snippet.
- `yandex.serp.videos`: Yandex video results for a query, with each video's title, page and length.
