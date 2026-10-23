# Superpowers: E-commerce

Products, prices, reviews and marketplaces, through to shipping and tracking.

## Amazon

Look up Amazon products, sellers, best sellers and the keywords they rank for.

- `amazon.bestsellers.list`: The best-selling products in an Amazon category, in order, with their prices and star ratings.
- `amazon.category.products`: List public products in an Amazon category with their displayed prices and rating counts.
- `amazon.keywords.related`: Amazon search keywords related to a seed keyword, with their volume.
- `amazon.keywords.volume`: How often up to 50 keywords are searched on Amazon each month.
- `amazon.product.competitors`: The Amazon products that compete with a product for the same search keywords.
- `amazon.product.detail`: One Amazon product by ASIN: title, price, rating, review count, image and brand.
- `amazon.product.keywords`: The Amazon search keywords a product ranks for, with its position and each keyword's volume.
- `amazon.product.rank-overview`: How many Amazon search keywords each of several products ranks for, by position band.
- `amazon.product.sellers`: The sellers offering an Amazon product, with their price, rating and delivery terms.
- `amazon.search.products`: Search Amazon products by keyword; returns ASIN, title, price, rating and image.
- `amazon.storefront.detail`: A creator's Amazon storefront by its address, with its description and the lists and collections it shows. Returns personal data: the storefront owner's name and description.

## App Store

Look up App Store apps, charts, reviews and the search terms they rank for.

- `app-store.app.competitors`: Find the App Store apps that rank for the same search terms as an app.
- `app-store.app.detail`: An App Store app's listing, with its description, developer, price and rating.
- `app-store.app.keywords`: The App Store search keywords an app ranks for, with its position and each keyword's volume.
- `app-store.app.reviews`: Reviews of an App Store app, with each reviewer's name, star rating, title, text and date. Returns personal data: the reviewers' display names.
- `app-store.apps.metrics`: How many App Store search keywords each of many apps ranks for, by position band.
- `app-store.apps.search`: Search the App Store by keyword, with each app's description, version and age rating.
- `app-store.apps.top-charts`: An App Store top chart (free, paid or grossing) for a category and country.
- `app-store.keywords.intersect`: Find search keywords shared by two public App Store apps, with their search ranks.
- `app-store.listings.search`: Search the App Store's app listings by title or description text.

## Business reviews

Read and reply to reviews on your business pages.

- `social.reviews.list`: List reviews of your connected business pages, newest first.
- `social.reviews.reply`: Publicly reply to a review of your connected business page. Send an Idempotency-Key.

## Customs duty

Look up the customs duty on goods by tariff code.

- `trade.customs-duty.lookup`: The EU customs duty for goods by tariff (HS) code and origin, with any preferential or anti-dumping rate.

## Douyin Shop

Search Douyin Shop products and read their details and customer comments.

- `douyin-shop.item.comments`: List a product's customer comments on Douyin-Shop. Returns personal data: the reviewers' public nicknames.
- `douyin-shop.item.detail`: Get one Douyin Shop product by its id, with its title, units sold, the share of good reviews and its shop.
- `douyin-shop.search.items`: Search Douyin Shop products by keyword.
- `douyin-shop.shop.items`: List a shop's products on Douyin-Shop.

## eBay

Search eBay listings and read price, condition and seller details.

- `ebay.product.detail`: An eBay listing by its id, with its price, condition, seller and shipping.
- `ebay.search.products`: Search eBay listings by keyword, with each listing's price, condition and shipping.

## Facebook Marketplace

Search Facebook Marketplace listings near a place and read their details.

- `facebook.marketplace.listing.detail`: Get one Facebook Marketplace listing by its address, with its price, description, place and whether it is sold.
- `facebook.marketplace.listings.search`: Search Facebook Marketplace listings near a point by keyword, with their prices and places.
- `facebook.marketplace.locations.search`: Find Facebook Marketplace places by city name, with their coordinates for a listings search.

## Google Play

Search Google Play apps, books, games and movies, with reviews and rankings.

- `google-play.app.competitors`: Find the Google Play apps that rank for the same search terms as an app.
- `google-play.app.detail`: A Google Play app's listing, with its description, developer, release and update dates, content rating and data-safety notes.
- `google-play.app.keywords`: List the search terms a Google Play app ranks for, with volume and position.
- `google-play.app.reviews`: Reviews of a Google Play app, with each star rating, text, likes and date.
- `google-play.apps.metrics`: Get the Google Play search rankings of many apps in one call.
- `google-play.apps.search`: Search Google Play apps by keyword, with each app's developer, category, price and rating.
- `google-play.apps.shared-keywords`: List the search terms two Google Play apps both rank for, with each one's position.
- `google-play.apps.top-charts`: A Google Play top chart (free, paid or grossing) for a category and country.
- `google-play.books.search`: Search Google Play books by keyword, with each book's author, category, format and price. Returns personal data: the names of the books' authors.
- `google-play.games.search`: Search Google Play games by keyword, with each game's developer, category, price and rating.
- `google-play.listings.search`: Search Google Play's app listings by title or description text.
- `google-play.movies.search`: Search Google Play movies by keyword, with each film's category, content rating and price.

## Google Shopping

Search Google Shopping products and compare seller offers.

- `google.serp.shopping`: Google Shopping results for a search, with price, seller and rating.
- `google.shopping.ad-url`: Resolve a Google Shopping ad link into the seller's own product page address.
- `google.shopping.product`: Get one Google Shopping product in detail: its description, specifications and the offers of each shop.

## Home Depot

Search Home Depot products with brand, price and rating.

- `home-depot.products.search`: Search Home Depot products by keyword, with each product's brand, price and rating.

## JD.com

Search JD.com products and check their current prices.

- `jd.item.price`: JD.com current product price by item id.
- `jd.search.items`: Search JD.com products by keyword.

## Product catalogs and orders

Manage your shop's products and create or search orders.

- `commerce.catalogs.list`: List the shopping product catalogs your connected business account can manage, with product counts.
- `commerce.order.create`: Create an itemized commerce order with explicit taxes, discounts, service charges and optional pickup or shipping contact details. Does not charge a payment. (needs approval; needs a connected account)
- `commerce.order.get`: Read an itemized commerce order and its totals; optionally returns fulfillment recipient contact details and address. (needs a connected account)
- `commerce.orders.search`: Search itemized commerce orders by locations, state, customer, source and creation time; optionally returns recipient contact details and addresses. (needs a connected account)
- `commerce.product.upsert`: Create or update a product (by your SKU) in one of your shopping catalogs. Send an Idempotency-Key.
- `commerce.products.list`: Products in one of your shopping catalogs: SKU, name, price, sale price, availability, stock and review status.

## Product lookup and prices

Look up products by barcode, compare prices and pull reviews from shop pages.

- `commerce.barcode.lookup`: Look up a product by its UPC or EAN barcode, with brand, categories and nutrition facts where known.
- `commerce.prices.compare`: Compare a product's prices across shops, with the lowest, highest and average.
- `commerce.products.extract`: Extract Products.
- `commerce.reviews.extract`: Read a product or review page and return the average rating, rating spread and recurring praise and complaints.

## Shipping

Get shipping quotes, buy labels, book pickups and track parcels.

- `shipping.booking.cancel`: Request cancellation of an eligible shipment; acceptance does not assert physical cancellation. (needs approval; needs a connected account)
- `shipping.booking.create`: Book forward, return or replacement transport with your carrier account. Sends names, contacts, addresses, and requested invoice or inspection facts; shipment charges are billed by the carrier. (needs approval; needs a connected account)
- `shipping.booking.create-bulk`: Book up to 100 independent shipments in one background job, keyed by your row ids. Sends recipient contacts, addresses and requested invoice facts. Failed rows cost nothing. (needs approval; needs a connected account)
- `shipping.booking.ewaybill-update`: Update electronic transport document and invoice facts on a shipment. (needs a connected account)
- `shipping.booking.update`: Update a booked shipment with recipient contact or address, contents, weight or payment changes. (needs approval; needs a connected account)
- `shipping.container.track`: Check a shipping container number, name its carrier and give the carrier's tracking links.
- `shipping.delivery-exception.get`: Read attempted delivery exceptions for a tracking number, without recipient contacts. (needs a connected account)
- `shipping.delivery-exceptions.list`: List delivery exceptions with tracking numbers and attempt details, without recipient contacts. (needs a connected account)
- `shipping.delivery.estimate`: Predict arrival from postal locations and a planned pickup time; supports optional parcel and target-date constraints only when the source can honour them. (needs a connected account)
- `shipping.delivery.instructions.update`: Submit a delivery instruction and check its status once. Sends contact or address changes only when explicitly requested. (needs approval; needs a connected account)
- `shipping.exchange.create`: Create replacement and return orders with personal buyer addresses; a carrier may be sent to the customer. (needs approval; needs a connected account)
- `shipping.invoice.generate`: Render an existing shipping invoice document with order and address information. (needs a connected account)
- `shipping.label.get`: Retrieve a label for an already assigned tracking number, including recipient address and barcode; does not buy postage. (needs a connected account)
- `shipping.label.purchase`: Recheck the selected carrier quote, assign postage once, and store the label. The provider has no price lock: wallet debit is the carrier charge at assignment, which may differ from the quote. (needs approval; needs a connected account)
- `shipping.manifest.create`: Generate one manifest for assigned shipments. (needs a connected account)
- `shipping.manifest.get`: Render an existing shipping manifest document with order and address information. (needs a connected account)
- `shipping.order.address.update`: Update recipient name, phone and delivery address for an order. (needs a connected account)
- `shipping.order.cancel`: Cancel an order after explicit confirmation. A submitted cancellation does not promise a refund. (needs a connected account)
- `shipping.order.cancel-bulk`: Run up to 10 cancellations, each with confirm true, keyed by your row IDs. (needs a connected account)
- `shipping.order.create`: Create a shipping order with contacts, addresses and items. The account may notify the recipient; this does not buy postage. (needs approval; needs a connected account)
- `shipping.order.fulfill`: Add stock for an ordered product. (needs a connected account)
- `shipping.order.get`: Read a shipping order and its items. Contact names and addresses are returned only when requested. (needs a connected account)
- `shipping.order.pickup-location.update`: Change a shipping order to a saved pickup location. (needs a connected account)
- `shipping.order.products.map`: Map an ordered product to a master inventory stock code. (needs a connected account)
- `shipping.order.update`: Update order items before postage assignment; reports fields that were not updated. (needs a connected account)
- `shipping.orders.list`: List shipping orders, without recipient contacts or addresses. (needs a connected account)
- `shipping.parcel.track`: Work out which carriers a parcel tracking number belongs to and give their tracking links.
- `shipping.pickup-location.create`: Register a pickup location in your carrier account; sends its contact and return addresses. (needs a connected account)
- `shipping.pickup-locations.list`: List saved pickup location names and postal addresses; personal contacts are opt-in. (needs a connected account)
- `shipping.pickup.book`: Request a carrier pickup at a saved location; holidays may shift the requested date. (needs approval; needs a connected account)
- `shipping.postal-coverage.export`: Export postal service coverage as a hosted CSV file in a background job; at most 100,000 rows and 20 MB. Overflow fails the job. (needs a connected account)
- `shipping.rates.quote`: Quote shipping for one parcel without buying postage; sender and recipient names, postal addresses and contacts may be stored as immutable records.
- `shipping.return.create`: Create a return order with customer pickup and seller return addresses; a carrier may be sent to the customer. (needs approval; needs a connected account)
- `shipping.return.update`: Update return parcel dimensions, weight or a saved warehouse return address. (needs a connected account)
- `shipping.returns.list`: List shipping return orders, without recipient contacts or addresses. (needs a connected account)
- `shipping.serviceability.check`: Check domestic delivery availability and current INR carrier quotes; no price is locked. (needs a connected account)
- `shipping.services.lookup`: Look up postal service availability and supported payment choices. Temporary restrictions make the postal code unavailable. (needs a connected account)
- `shipping.shipment.create`: Create one shipment and quote rates without buying postage; stores postal names, addresses, contacts and customs facts that may be immutable.
- `shipping.shipment.get`: Read your saved shipment and current quotes; postal names, addresses and contacts are returned only when requested. (needs a connected account)
- `shipping.shipments.list`: List saved shipments with plain shipment IDs and handles for reading each shipment. (needs a connected account)
- `shipping.tracking.create`: Register tracking without email or SMS notifications; supplied postal hints and delivery locations may be personal.
- `shipping.tracking.get`: Read your registered delivery status and last 100 checkpoints, including city-level personal delivery locations.
- `shipping.tracking.lookup`: Look up one delivery by tracking number, shipment ID, or order number and channel. Returns personal location history. (needs a connected account)
- `shipping.tracking.lookup-bulk`: Run up to 50 tracking lookups; the native source accepts trackingNumber rows only, keyed by your row IDs. (needs a connected account)
- `shipping.tracking.proof.get`: Retrieve delivery signatures or delivery photos as hosted files; at most ten files, 10 MB per file. Contains personal delivery evidence. (needs a connected account)
- `shipping.waybills.reserve`: Reserve one to 1,000 shipment tracking numbers without booking transport. (needs a connected account)

## Taobao

Search Taobao and Tmall products and read their reviews.

- `taobao.item.detail`: Get one Taobao or Tmall product by its item id, with its title, price, how many have sold and where it ships from.
- `taobao.item.reviews`: List buyers' reviews of a Taobao or Tmall product by its item id, with each review's text and what was bought. Returns personal data: the review text buyers posted, without their names.
- `taobao.search.items`: Search Taobao and Tmall products by keyword.

## TikTok Shop

Search TikTok Shop products, stores, creators and reviews.

- `tiktok-shop.categories`: The top-level product categories of TikTok Shop in a country, with their ids.
- `tiktok-shop.category.products`: TikTok Shop products by category id. Returns personal data: public names, profile details and published content.
- `tiktok-shop.creator.products`: The products a TikTok creator shows in their shop showcase, with prices, ratings and units sold.
- `tiktok-shop.creator.profile`: A TikTok Shop creator's public profile, with their bio, followers and the product categories they sell. Engagement and sales rates are left out. Returns personal data: the creator's public handle, nickname, bio and follower count.
- `tiktok-shop.product.detail`: A TikTok Shop product's rating, review count and units sold, by the product's address.
- `tiktok-shop.product.reviews`: Reviews of a TikTok Shop product, with each reviewer's name, stars, text, country and whether the purchase was verified. Returns personal data: the reviewers' display names.
- `tiktok-shop.products.search`: Search TikTok Shop products by keyword, with each product's price, rating, units sold and shop.
- `tiktok-shop.search.suggestions`: The searches TikTok Shop suggests for a partly typed keyword.
- `tiktok-shop.shop.products`: The products a TikTok Shop store sells, by the store's address, with prices, ratings and units sold.
- `tiktok-shop.shop.resolve`: Turn a TikTok Shop share link to a store into the store's id and its full address.

## Trustpilot

Search Trustpilot businesses and read their ratings and customer reviews.

- `seo.trustpilot-reviews`: Trustpilot Reviews. Returns personal data: public names, profile details and published content.
- `trustpilot.businesses.search`: Search Trustpilot for businesses by name or keyword, with their rating and review count.
- `trustpilot.categories`: List categories.
- `trustpilot.company-overview`: Get company overview.
- `trustpilot.company-review-summary`: Get review summary.
- `trustpilot.company-reviews`: List published reviews of a company. Returns personal data: Public names, profiles, wallet activity or published records; see the result fields..
- `trustpilot.search-companies`: Search companies.

## Walmart

Search Walmart products with prices, ratings and sellers.

- `walmart.search.products`: Search Walmart products by keyword, with each product's price, rating and seller.

## Xianyu

Search second-hand listings on Xianyu.

- `xianyu.item.detail`: Get a second-hand listing's detail on Xianyu.
- `xianyu.search.items`: Search public Xianyu product listings and return their titles and displayed prices.

## Xiaohongshu shop

Search Xiaohongshu products and read their reviews.

- `xiaohongshu.product.detail`: Xiaohongshu product details by SKU id. Returns personal data: public names, profile details and published content.
- `xiaohongshu.product.related`: Read public related-product sections with product titles.
- `xiaohongshu.product.reviews`: Read public product reviews without reviewer identities.
- `xiaohongshu.search.products`: Search public product titles and shop names.

## Yelp reviews

Read customer reviews of a business on Yelp.

- `yelp.business.reviews`: Reviews of a business on Yelp, by its Yelp id, with each reviewer's name, stars, text and date. Returns personal data: the reviewers' display names.
