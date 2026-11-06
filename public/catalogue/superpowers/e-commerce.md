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
- `amazon.product.reviews`: List published product reviews without reviewer identities. Returns personal data: Published product review text; reviewer identifiers and contact details are omitted..
- `amazon.product.sellers`: The sellers offering an Amazon product, with their price, rating and delivery terms.
- `amazon.search.products`: Search Amazon products by keyword; returns ASIN, title, price, rating and image.
- `amazon.search.suggestions`: Suggest Amazon search phrases for the start of a query.
- `amazon.storefront.detail`: A creator's Amazon storefront by its address, with its description and the lists and collections it shows. Returns personal data: the storefront owner's name and description.
- `sellercentral-amazon.discussions.get`: Read one discussion thread on sellercentral.amazon.com.
- `sellercentral-amazon.discussions.search`: Search discussions on a community site on sellercentral.amazon.com.

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

## Auctions

Browse auction houses, upcoming lots, bids and past auction results.

- `commerce.antiquesreporter-past-auctions.list`: List antiquesreporter past auctions on antiquesreporter.com.au.
- `commerce.auctioneers.get`: Read auctioneers on auctiontime.com. Returns personal data: personal details as published.
- `commerce.auctioneers.search`: Search auctioneers on auctionzip.com. Returns personal data: personal details as published.
- `commerce.auctiontime-auction-by-date.get`: Read auctiontime auction by date on auctiontime.com.
- `commerce.auctiontime-auction-results.get`: Read auctiontime auction results on auctiontime.com.
- `commerce.auctiontime-auctioneer-listings.get`: Read auctiontime auctioneer listings on auctiontime.com.
- `commerce.auctiontime-listings.get`: Read auctiontime listings on auctiontime.com.
- `commerce.auctionzip-calendar.search`: Search the AuctionZip monthly auction calendar by month, year, postal code and keywords on auctionzip.com.
- `commerce.auctionzip-prices-realized.get`: Read auctionzip prices realized on auctionzip.com.
- `commerce.bonhams-auction-details.get`: Read bonhams auction details on bonhams.com.
- `commerce.bonhams-auction-lots.get`: Read bonhams auction lots on bonhams.com.
- `commerce.bonhams-auction-results.get`: Read bonhams auction results on bonhams.com.
- `commerce.bonhams-departments.get`: Read bonhams departments on bonhams.com.
- `commerce.bonhams-lot-details.get`: Read bonhams lot details on bonhams.com.
- `commerce.bonhams-upcoming-auctions.get`: Read bonhams upcoming auctions on bonhams.com.
- `commerce.buyee-yahoo-auction-item.get`: Read buyee yahoo auction item on buyee.jp.
- `commerce.christies-auction-detail.get`: Read christies auction detail on christies.com.
- `commerce.christies-auction-lots.get`: Read christies auction lots on christies.com.
- `commerce.christies-auction-results-overview.get`: Read christies auction results overview on christies.com.
- `commerce.christies-departments.get`: Read christies departments on christies.com.
- `commerce.christies-lot-detail.get`: Read christies lot detail on christies.com.
- `commerce.christies-private-sales.get`: Read christies private sales on christies.com.
- `commerce.domain-auctions-auctions.search`: Search domain auctions auctions on auctions.godaddy.com.
- `commerce.domain-auctions-closeout-auctions.get`: Read domain auctions closeout auctions on auctions.godaddy.com.
- `commerce.domain-auctions-expired-domain-auctions.get`: Read domain auctions expired domain auctions on auctions.godaddy.com.
- `commerce.memorylane-active-auctions.search`: Search memorylane active auctions on bid.memorylaneinc.com.
- `commerce.memorylane-marketplace-item.get`: Read memorylane marketplace item on bid.memorylaneinc.com.
- `commerce.memorylane-marketplace.search`: Search memorylane marketplace on bid.memorylaneinc.com.
- `commerce.memorylane-sales.search`: Search memorylane sales on bid.memorylaneinc.com.
- `commerce.scpauctions-active.search`: Search scpauctions active on catalogs.scpauctions.com.
- `commerce.scpauctions-sales.search`: Search scpauctions sales on catalogs.scpauctions.com.
- `commerce.top-auctioneers.get`: Read top auctioneers on auctionzip.com. Returns personal data: personal details as published.
- `commerce.yahoo-auctions-completed-listing-evidence.get`: Read yahoo auctions completed listing evidence on auctions.yahoo.co.jp.
- `commerce.yahoo-auctions-listings.search`: Search yahoo auctions listings from the public catalogue.
- `commerce.yahoo-auctions-market-price.compare`: Compare yahoo auctions market price on auctions.yahoo.co.jp.
- `marketplace.auction-bids.list`: List auction bids on pwccmarketplace.com.
- `marketplace.auction-house.get`: Read public auction house on invaluable.com.
- `marketplace.auction-houses.list`: List public auction houses on invaluable.com.
- `marketplace.auction-lots.get`: Read public auction lots from the selected marketplace.
- `marketplace.auction-lots.list`: List public auction lots on johnpye.co.uk.
- `marketplace.auction-lots.search`: Search public auction lots from the selected marketplace.
- `marketplace.auction-results.get`: List public auction results on everywatch.com.
- `marketplace.auction-sales.get`: Read a completed auction sale record, including the stated price basis and sale date precision on the chosen site.
- `marketplace.auction-sales.search`: Search completed auction sale records; each amount retains its price basis and date precision on the chosen site.
- `marketplace.auction.get`: List public auction on invaluable.com.
- `marketplace.auctions.get`: Read public auctions on encheres-publiques.com.
- `marketplace.auctions.list`: List public auctions from the selected marketplace.
- `marketplace.domain-auctions.list`: List domain auctions on sedo.com.
- `marketplace.ending-auction-lots.list`: List ending auction lots on policeauctionscanada.com.
- `marketplace.lots-by-category.get`: List public lots by category on funpay.com.
- `marketplace.policeauctionscanada-listing-details.get`: Read listing details on policeauctionscanada.com. Returns personal data: personal details as published.
- `marketplace.sothebys.auction.get`: Read auction metadata, dates and lots on sothebys.com.
- `marketplace.sothebys.lot.get`: Read lot on sothebys.com.
- `marketplace.sports-ha.sales.search`: Search sales on sports.ha.com ha.
- `marketplace.troostwijkauctions.lots.lookup`: Look up auction lots by their public display identifiers on troostwijkauctions.com.
- `marketplace.wheatlandauctionservices.store-item.get`: Read store item on wheatlandauctionservices.com.
- `marketplace.wheatlandauctionservices.store-items.search`: Search store items on wheatlandauctionservices.com.
- `marketplace.whiskyauctioneer.auctions.list`: List auctions on whiskyauctioneer.com.
- `marketplace.yachtauctions.auctions.active`: Read auctions on yachtauctions.com.
- `marketplace.yachtauctions.vessel-makes.list`: List vessel makes on yachtauctions.com.
- `marketplace.yachtauctions.vessel-types.list`: List vessel types on yachtauctions.com.
- `marketplace.yachtauctions.vessels.featured`: List featured vessels on yachtauctions.com.
- `marketplace.yachtauctions.vessels.recent`: List recent vessels on yachtauctions.com.
- `marketplace.yachtauctions.vessels.search`: Search or browse public product listings on yachtauctions.com.

## Boats and yachts

Search boats and yachts for sale and at auction.

- `commerce.boats-boat-details.get`: Read boats boat details on boats.com.
- `commerce.boats-boat-photos.get`: Read boats boat photos on boats.com.
- `commerce.boats-boats.search`: Search boats boats on boats.com.
- `commerce.count-boats.get`: Read count boats on boats.com. Returns personal data: personal details as published.
- `marketplace.yachtbuyer.boats.search`: Search boats on yachtbuyer.com.
- `marketplace.yachtbuyer.new-yachts.search`: Search new yachts on yachtbuyer.com.
- `marketplace.yachtbuyer.news.list`: List news on yachtbuyer.com.
- `marketplace.yachtbuyer.used-yachts.search`: Search used yachts on yachtbuyer.com.
- `marketplace.yachtbuyer.yachts.ranking`: Read yachts on yachtbuyer.com.
- `marketplace.yachtworld.boat-types.list`: List boat types on yachtworld.com.
- `marketplace.yachtworld.boat.get`: Read boat on yachtworld.com.
- `marketplace.yachtworld.boats.search`: Search boats on yachtworld.com.
- `marketplace.yachtworld.broker.boats`: List a broker public boat inventory on yachtworld.com.
- `marketplace.yachtworld.class.boats`: List boats in a specific class on yachtworld.com.
- `marketplace.yachtworld.make.boats`: List boats from a specific make on yachtworld.com.

## Book shops and prices

Compare book prices and offers across new, used and ebook shops.

- `books.buyback-quote.get`: Read buyback quote — used-textbook marketplace.
- `books.store.list`: List the study-material inventory of a bookshop.
- `books.used.books.search`: Search books — used-textbook marketplace.
- `commerce.abebooks-book-offers.search`: Search abebooks books on abebooks.com, with supported search and category filters.
- `commerce.alibris-book-offers.search`: Search alibris books on alibris.com, with supported search and category filters.
- `commerce.alibris-item-details.get`: Read alibris item details on alibris.com.
- `commerce.biblio-books.search`: Search biblio books on biblio.com.
- `commerce.booksrun-best-sellers.get`: Read booksrun best sellers on booksrun.com.
- `commerce.booksrun-book-offers.search`: Search booksrun books on booksrun.com, with supported search and category filters.
- `commerce.booksrun-buyback-guide.get`: Read booksrun buyback condition guide on booksrun.com.
- `commerce.bookwalker-autocomplete.get`: Read bookwalker autocomplete on bookwalker.jp.
- `commerce.bookwalker-books.search`: Search bookwalker books on bookwalker.jp.
- `commerce.bookwalker-category-books.get`: Read bookwalker category books on bookwalker.jp.
- `commerce.bookwalker-rankings.get`: Read bookwalker rankings on bookwalker.jp.
- `marketplace.bestselling-ebooks.get`: List public bestselling ebooks on kobo.com.
- `marketplace.book-categories.list`: List public book categories on kobo.com.
- `marketplace.book-category-facets.list`: List book category facets on search.kongfz.com.
- `marketplace.books-by-category.get`: List public books by category on kobo.com.
- `marketplace.books.search`: Search books on search.kongfz.com. Returns personal data: personal details as published.
- `marketplace.free-ebooks.get`: List public free ebooks on kobo.com.
- `marketplace.offers-by-isbn.get`: Read offers by isbn on momoxbooks.com. Returns personal data: personal details as published.
- `marketplace.zvab.book-listing.get`: Read book listing on zvab.com.
- `marketplace.zvab.book-listings.search`: Search book listings on zvab.com.
- `marketplace.zvab.seller-book-listings.list`: List seller book listings on zvab.com.
- `piter.books.list`: Browse piter.com's books by category or page.
- `piter.books.search`: Search piter.com's catalog by keyword.
- `rokomari.books.list`: Browse rokomari.com's books by category or page.
- `rokomari.books.search`: Search rokomari.com's catalog by keyword.

## Business reviews

Read and reply to reviews on your business pages.

- `social.reviews.list`: List reviews of your connected business pages, newest first.
- `social.reviews.reply`: Publicly reply to a review of your connected business page. Send an Idempotency-Key. (needs approval)

## Classifieds and resale

Search classified ads and resale listings with seller details.

- `commerce.buyee-mercari-item.get`: Read buyee mercari item on buyee.jp.
- `commerce.buyee-mercari-japan.search`: Search buyee mercari japan on buyee.jp.
- `commerce.creator-profile.get`: Read creator profile on blendermarket.com. Returns personal data: personal details as published.
- `commerce.reviewer-profile.get`: Read reviewer profile on resellerratings.com. Returns personal data: personal details as published.
- `commerce.seller-info.get`: Read seller info on detail.1688.com. Returns personal data: personal details as published.
- `commerce.seller-likes.get`: Read seller likes on depop.com. Returns personal data: personal details as published.
- `commerce.seller-listings.get`: Read seller listings on the chosen site. Returns personal data: personal details as published.
- `commerce.seller-profile.get`: Read seller profile on the chosen site. Returns personal data: personal details as published.
- `commerce.seller-profiles.search`: Search seller profiles on buyee.jp. Returns personal data: personal details as published.
- `commerce.seller-reviews.get`: Read seller reviews on the chosen site. Returns personal data: personal details as published.
- `commerce.sellers.search`: Search sellers on abebooks.com. Returns personal data: personal details as published.
- `marketplace.ad-detail.get`: Read ad detail on tayara.tn. Returns personal data: personal details as published.
- `marketplace.ad-details.get`: Read ad details on olx.ro. Returns personal data: personal details as published.
- `marketplace.ads.search`: Search ads on olx.ro. Returns personal data: personal details as published.
- `marketplace.classifieds.search`: Search public classifieds on finn.no.
- `marketplace.ebay-seller-feedback.get`: Read seller feedback on ebay.de. Returns personal data: personal details as published.
- `marketplace.ebay-seller-profile.get`: Read seller profile on ebay.com. Returns personal data: personal details as published.
- `marketplace.jp-seller-profile.get`: Read seller profile on jp.mercari.com. Returns personal data: personal details as published.
- `marketplace.lashinbang.search-filters.list`: List available product categories and condition filters on shop.lashinbang.com.
- `marketplace.marktplaats-listings.search`: Search listings on marktplaats.nl. Returns personal data: personal details as published.
- `marketplace.mercadolibre-listings.search`: Search listings on mercadolibre.com.ar. Returns personal data: personal details as published.
- `marketplace.mymarket-products.search`: Search products on mymarket.ge. Returns personal data: personal details as published.
- `marketplace.n11-product-reviews.get`: Read product reviews on n11.com. Returns personal data: personal details as published.
- `marketplace.n11-products.search`: Search products on n11.com. Returns personal data: personal details as published.
- `marketplace.nearby-listings.search`: Search nearby listings on losangeles.craigslist.org.
- `marketplace.olx-listing-details.get`: Read listing details on olx.uz. Returns personal data: personal details as published.
- `marketplace.olx-listings.search`: Search listings on olx.in. Returns personal data: personal details as published.
- `marketplace.poshmark-listings.search`: Search listings on poshmark.com. Returns personal data: personal details as published.
- `marketplace.prom-category-products.get`: Read category products on prom.ua. Returns personal data: personal details as published.
- `marketplace.prom-products.search`: Search products on prom.ua. Returns personal data: personal details as published.
- `marketplace.prom-seller-reviews.get`: Read seller reviews on prom.ua. Returns personal data: personal details as published.
- `marketplace.ricardo-listings.search`: Search listings on ricardo.ch. Returns personal data: personal details as published.
- `marketplace.seller-active-listings.get`: Read seller active listings on ebay.com. Returns personal data: personal details as published.
- `marketplace.seller-ads.get`: Read seller ads on kupujemprodajem.com. Returns personal data: personal details as published.
- `marketplace.seller-contacts.get`: Read seller contacts on prom.ua. Returns personal data: personal details as published.
- `marketplace.seller-feedback.get`: Read seller feedback on the chosen site. Returns personal data: personal details as published.
- `marketplace.seller-listings.get`: Read seller listings on grailed.com. Returns personal data: personal details as published.
- `marketplace.seller-phone.get`: Read seller phone on the chosen site. Returns personal data: personal details as published.
- `marketplace.seller-profile.get`: Read seller profile on the chosen site. Returns personal data: personal details as published.
- `marketplace.seller-reviews.get`: Read seller reviews on the chosen site. Returns personal data: personal details as published.
- `marketplace.seller-reviews.list`: List seller reviews on starvell.com. Returns personal data: personal details as published.
- `marketplace.sellers.list`: List sellers on indiahandmade.com. Returns personal data: personal details as published.
- `marketplace.shafa.categories.children`: List direct child categories on shafa.ua.
- `marketplace.shafa.categories.tree`: Read the public category tree on shafa.ua.
- `marketplace.shpock.seller-listings.list`: List seller listings on shpock.com.
- `marketplace.sold-listings.search`: Search public sold listings on ebay.co.uk.
- `marketplace.sold.search`: Search public sold on goldinauctions.com.
- `marketplace.subito.categories.list`: List categories on subito.it.
- `marketplace.subito.locations.search`: Search locations on subito.it.
- `marketplace.suruga-ya.branch.lookup`: Read branch on suruga-ya.jp ya.
- `marketplace.user-collections.get`: Read user collections on pinshape.com. Returns personal data: personal details as published.
- `marketplace.user-likes.get`: Read user likes on pinshape.com. Returns personal data: personal details as published.
- `marketplace.user-listings.get`: Read user listings on hardverapro.hu. Returns personal data: personal details as published.
- `marketplace.user-products.get`: Read user products on suzuri.jp. Returns personal data: personal details as published.
- `marketplace.user-profile.get`: Read user profile on the chosen site. Returns personal data: personal details as published.
- `marketplace.user.get`: Read user on the chosen site. Returns personal data: personal details as published.
- `marketplace.vinted-uk.listings.get-batch`: Read listings on vinted.co.uk uk.
- `marketplace.vinted-user-profile.get`: Read user profile on vinted.com. Returns personal data: personal details as published.
- `marketplace.wildberries.product.specifications`: Read published product specifications on wildberries.ru.
- `marketplace.willhaben.cars.search`: Search cars on willhaben.at.
- `marketplace.willhaben.jobs.search`: Search jobs on willhaben.at.

## CS2 and Steam skins

Read CS2 and Steam skin prices, price history, cases and market trends.

- `commerce.case-battles-list.get`: Read case battles list on csgoroll.com. Returns personal data: personal details as published.
- `commerce.csfloat-newest-items.get`: Read csfloat newest items on csfloat.com.
- `commerce.csgoroll-cases.list`: Read csgoroll cases list on csgoroll.com.
- `commerce.csgoroll-cases.search`: Read csgoroll case detail on csgoroll.com.
- `commerce.csgoroll-exchange-rates.get`: Read csgoroll exchange rates on csgoroll.com.
- `commerce.csgoroll-games-list.get`: Read csgoroll games list on csgoroll.com.
- `commerce.csgoroll-leaderboard.get`: Read csgoroll leaderboard on csgoroll.com.
- `commerce.csgoroll-marketplace-stats.get`: Read csgoroll marketplace stats on csgoroll.com.
- `commerce.csgoskins-skin.get`: Read csgoskins skin detail on csgoskins.gg.
- `commerce.csgoskins-skins.search`: Search csgoskins skins on csgoskins.gg, with supported search and category filters.
- `commerce.skinport-listings.list`: List skinport listings on api.skinport.com.
- `commerce.skinport-skin-families.list`: List skinport skin families on api.skinport.com.
- `commerce.steamanalyst-case-detail.get`: Read steamanalyst case detail on csgo.steamanalyst.com.
- `commerce.steamanalyst-collections.list`: List steamanalyst collections on csgo.steamanalyst.com.
- `commerce.steamanalyst-market-trends-overview.get`: Read steamanalyst market trends overview on csgo.steamanalyst.com.
- `commerce.steamanalyst-skin-detail.get`: Read steamanalyst skin detail on csgo.steamanalyst.com.
- `commerce.steamanalyst-skin-market-prices.get`: Read steamanalyst skin market prices on csgo.steamanalyst.com.
- `commerce.steamanalyst-skin-price-history.get`: Read steamanalyst skin price history on csgo.steamanalyst.com.
- `commerce.steamanalyst-skins.list`: List steamanalyst skins on csgo.steamanalyst.com.
- `commerce.steamanalyst-skins.search`: Search steamanalyst skins on csgo.steamanalyst.com.
- `commerce.steamanalyst-top-gainers.get`: Read steamanalyst top gainers on csgo.steamanalyst.com.
- `commerce.steamanalyst-variant-prices.list`: List steamanalyst variant prices on csgo.steamanalyst.com.
- `commerce.steamanalyst-weapon-skins.get`: Read steamanalyst weapon skins on csgo.steamanalyst.com.
- `marketplace.battles.list`: List battles on packdraw.com. Returns personal data: personal details as published.
- `marketplace.skin-markets.get`: Read skin markets on pricempire.com.
- `marketplace.skin-markets.list`: List skin markets on pricempire.com.
- `marketplace.skin-offers.list`: List skin offers on pricempire.com.
- `marketplace.skin-price-statistics.get`: Read skin price statistics on pricempire.com.
- `marketplace.skinport.item.get`: Read item on skinport.com.
- `marketplace.skinport.item.sales-summary`: Read aggregate item price and sales-volume statistics on skinport.com.
- `marketplace.skinport.items.browse`: Browse items on skinport.com.
- `marketplace.skinport.items.prices`: Read prices for items on skinport.com.
- `marketplace.skinstrack.item.price-history`: Read dated item price observations on skinstrack.com.
- `marketplace.skinstrack.item.prices`: Read prices for item on skinstrack.com.
- `marketplace.skinstrack.items.search`: Search items on skinstrack.com.
- `marketplace.weapon-categories.list`: List weapon categories on pricempire.com. Returns personal data: personal details as published.

## Customs duty

Look up the customs duty on goods by tariff code.

- `trade.customs-duty.lookup`: The EU customs duty for goods by tariff (HS) code and origin, with any preferential or anti-dumping rate.

## Deals and coupons

Find deals, coupons, weekly ads and cashback offers.

- `commerce.best-drops.get`: Read best drops on csgoroll.com. Returns personal data: personal details as published.
- `commerce.coupon.get`: Read a public store coupon.
- `commerce.coupons.list`: List coupon or voucher codes from a coupon site or retailer: codes, terms and expiry.
- `commerce.coupons.search`: Find public store coupons with optional location and category filters.
- `commerce.deals.list`: List a retail site's current deals, offers or promotions: discounted products and coupon-style offers.
- `commerce.deals.search`: Search public store deals by keyword.
- `commerce.dhgate-flash-deals.get`: Read dhgate flash deals on dhgate.com.
- `commerce.pgbrandsaver-coupons.list`: List manufacturer coupon offers with brands and expiry dates.
- `commerce.promotions.list`: List public store promotions.
- `commerce.retailmenot-store-coupons.list`: List current coupons and discount codes for a shop.
- `commerce.slickdeals-deals.search`: Search community-posted shopping deals by keyword.
- `grocery.deals.search`: Search current grocery deals and sale items near a place.
- `grocery.flyer-pages.list`: Read the pages and image tiles of a grocery flyer.
- `grocery.offers.list`: List a grocery retailer's current promotions and discounted products.
- `grocery.weekly-ad.items`: Read the advertised items of a weekly ad flyer.
- `grocery.weekly-ads.list`: List the weekly ad flyers and leaflets published near a place or for a store.
- `marketplace.coupons.list`: List coupons on pepper.pl.
- `marketplace.daily-deals.get`: Read daily deals on mercadolivre.com.br. Returns personal data: personal details as published.
- `marketplace.deal-comments.get`: Read deal comments on pepper.pl. Returns personal data: personal details as published.
- `marketplace.deal-detail.get`: Read deal detail on pepper.pl. Returns personal data: personal details as published.
- `marketplace.deals-by-category.get`: Read deals by category on pepper.pl. Returns personal data: personal details as published.
- `marketplace.deals.get`: Read deals on pepper.pl. Returns personal data: personal details as published.
- `marketplace.deals.list`: List public deals from the selected marketplace.
- `marketplace.deals.search`: Search deals on mydealz.de.
- `marketplace.pepper-deals.search`: Search deals on pepper.pl. Returns personal data: personal details as published.
- `marketplace.promoted-products.get`: Read promoted products on outbid.lol.
- `marketplace.promoted-products.list`: List promoted products on outbid.lol.
- `marketplace.subito.dealer-listings.list`: List dealer listings on subito.it.
- `marketplace.taobao-deals.products.featured`: List featured products on uland.taobao.com deals.
- `marketplace.typo-bargains.search`: Search public typo bargains on fatfingers.com.
- `retailmenot.stores.list`: Find retailmenot.com's store locations near a place.
- `rewards.cashout-methods.list`: List available reward cashout methods.
- `rewards.offer-categories.list`: List rewards offer categories.
- `slickdeals.deals.get`: Read one deal's details from slickdeals.net.

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

## Electronics and devices

Look up phones, laptops and devices, refurbished prices, specs and repair guides.

- `appliances.accessories.list`: List one appliance's accessories.
- `appliances.manual-content.list`: List one manual's sections.
- `appliances.manuals.search`: Search appliance manuals by model number.
- `appliances.product-documents.list`: List one appliance's published documents.
- `appliances.spare-parts.list`: List one appliance's spare parts.
- `commerce.backmarket-product-by-url.get`: Read backmarket product details by url on backmarket.com.
- `commerce.backmarket-product-pricing.get`: Read backmarket product pricing on backmarket.com.
- `commerce.backmarket-product.get`: Read backmarket product details on backmarket.com.
- `commerce.backmarket-sweden-smartphone-prices.get`: Read backmarket sweden smartphone prices on backmarket.com.
- `commerce.backmarket-sweden-smartphones-with-pricing.search`: Search backmarket sweden smartphones with pricing on backmarket.com.
- `commerce.redmagic-collection-products.list`: List the phones in a shop collection with variants and prices.
- `commerce.redmagic-collections.list`: List the shop collections with product counts.
- `commerce.redmagic-price-discounts.list`: Read the variant prices and discount amounts of one phone model.
- `commerce.redmagic-stock-availability.get`: Check whether a phone model and its variants are in stock.
- `commerce.reebelo-brand-collection.list`: List refurbished offers of one brand with product names.
- `commerce.reebelo-category-brands.list`: List the refurbished-phone brands offered in a category.
- `commerce.reebelo-product.get`: Read one refurbished product with brand and feature list.
- `commerce.reebelo-sku-prices.list`: List refurbished stock items with their comparison prices.
- `commerce.refurbed-product-pricing.get`: Read the price options of a refurbished product: condition, storage and colour.
- `commerce.saturn-store-availability.get`: Check which shops near a postal code can hand over an article for pickup.
- `hardware.guide.get`: Read guide on ifixit.com. Returns personal data: personal details as published.
- `hardware.mobile-brands.list`: List mobile-device manufacturers on devicespecifications.com.
- `hardware.mobile-model.get`: Read a mobile-device model and its technical specifications on devicespecifications.com.
- `hardware.mobile-models.list`: List mobile-device models for a manufacturer on devicespecifications.com.
- `hardware.mobile-models.search`: Find mobile-device models by hardware filters on devicespecifications.com.
- `hardware.repair-category.get`: Read a device-repair category and its public guide summaries on ifixit.com.
- `hardware.repair-guides.search`: Find public device-repair guides and difficulty summaries on ifixit.com.
- `marketplace.gpu-listings.list`: List public gpu listings on hardverapro.hu.
- `marketplace.laptop-listings.search`: Search public laptop listings on kupujemprodajem.com.
- `marketplace.swappa.prices.overview`: Read prices on swappa.com.
- `marketplace.swappa.product.listings`: Read product on swappa.com.
- `shop-inrego.laptops.get`: Read one laptop's details from shop.inrego.se.
- `shop-inrego.laptops.list`: Browse shop.inrego.se's laptops.
- `shop-inrego.phones.get`: Read one phone's details from shop.inrego.se.
- `shop-inrego.phones.list`: Browse shop.inrego.se's phones.
- `shop-inrego.tablets.get`: Read one tablet's details from shop.inrego.se.
- `shop-inrego.tablets.list`: Browse shop.inrego.se's tablets.
- `tech.details.get`: Read details on nanoreview.net. Returns personal data: personal details as published.
- `tech.popular-comparisons.list`: List popular pairs of computer parts or devices to compare on nanoreview.net.
- `tech.products.compare`: Compare published processor and general specifications for two devices on nanoreview.net.
- `tech.products.search`: Find computer parts and devices by name on nanoreview.net.
- `tech.user-benchmarks-list.get`: Read user benchmarks list on nanoreview.net. Returns personal data: personal details as published.

## Facebook Marketplace

Search Facebook Marketplace listings near a place and read their details.

- `facebook.marketplace.listing.detail`: Get one Facebook Marketplace listing by its address, with its price, description, place and whether it is sold.
- `facebook.marketplace.listings.search`: Search Facebook Marketplace listings near a point by keyword, with their prices and places.
- `facebook.marketplace.locations.search`: Find Facebook Marketplace places by city name, with their coordinates for a listings search.

## Fashion and sneakers

Browse sneakers, streetwear, fashion listings and fashion week schedules.

- `commerce.depop-category-tree.get`: Read depop category tree on depop.com.
- `commerce.depop-product-detail.get`: Read depop product detail on depop.com.
- `commerce.fashion-album.get`: Read one seasonal clothing photo collection published by a retailer.
- `commerce.fashion-albums.list`: List seasonal clothing photo collections published by a retailer.
- `commerce.footwear.get`: Read a public footwear product and its available variants without price quotes on allbirds.com.
- `commerce.footwear.list`: List public footwear product summaries without price quotes on allbirds.com.
- `fashion.article.get`: Read one published fashion article by its page key on the chosen site.
- `fashion.articles.list`: List recent published fashion and beauty articles on vogue.com.
- `fashion.articles.search`: Search published fashion articles on the chosen site.
- `fashion.author-articles.get`: Read author articles on putthison.com. Returns personal data: personal details as published.
- `fashion.design-itineraries.list`: List design itineraries on fuorisalone.it.
- `fashion.design-itinerary-events.list`: List design itinerary events on fuorisalone.it.
- `fashion.week-schedule.list`: List the Paris fashion week calendar of shows on fhcm.paris.
- `marketplace.grailed-listings.search`: Search listings on grailed.com. Returns personal data: personal details as published.
- `marketplace.grailed-seller-profile.get`: Read seller profile on grailed.com. Returns personal data: personal details as published.
- `marketplace.sneaker-model.get`: Read public sneaker model on kixify.com.
- `marketplace.snkrdunk.card.prices`: Read prices for card on snkrdunk.com.
- `marketplace.snkrdunk.card.sales-history`: Read completed card sales and historical prices on snkrdunk.com.
- `marketplace.snkrdunk.card.variations`: Read card on snkrdunk.com.
- `marketplace.snkrdunk.cards.search`: Search cards on snkrdunk.com.
- `marketplace.stadiumgoods.collection.products`: Read collection on stadiumgoods.com.
- `marketplace.stadiumgoods.collections.list`: List collections on stadiumgoods.com.
- `marketplace.suzuri.product-types.list`: List product types on suzuri.jp.
- `marketplace.teepublic.designer-products.list`: List designer products on teepublic.com.
- `marketplace.teepublic.product-types.list`: List product types on teepublic.com.
- `marketplace.zazzle.categories.browse`: Browse categories on zazzle.com.

## Fragrance and beauty

Look up perfumes, cosmetics, ingredients and beauty products.

- `commerce.cosmetic-categories.list`: List public cosmetic product categories and product counts on world.openbeautyfacts.org.
- `commerce.cosmetics.search`: Search cosmetic products by name, brand or ingredient on world.openbeautyfacts.org.
- `commerce.fragrance-brands.list`: List fragrance brands available in a data source on fragrantica.com.
- `commerce.fragrance-notes.list`: List fragrance notes grouped by scent category on fragrantica.com.
- `commerce.fragrance.find`: Find the fragrance notes for a named product and brand on fragrantica.com.
- `commerce.fragrance.get`: Read a fragrance’s notes, accords and aggregate rating on the chosen site.
- `commerce.fragrances.search`: Find fragrances by name in a selected language catalogue.
- `commerce.new-fragrances.list`: List recently added fragrances on fragrantica.com.
- `commerce.perfume-reviews.get`: Read perfume reviews on fragrantica.com. Returns personal data: personal details as published.
- `commerce.popular-fragrances.list`: List the most popular fragrances in a data source on fragrantica.com.
- `commerce.trending-fragrances.list`: List fragrances trending over a selected period on fragrantica.com.
- `cosmetics.catalogue.search`: Find cosmetics and ingredient articles, beauty brands and skincare catalogue entries on incibeauty.com.
- `cosmetics.ingredient-products.list`: List public ingredient products on incibeauty.com.
- `cosmetics.ingredients.get`: Read a cosmetic ingredient description and published safety information; labels use each catalogue’s own scale.
- `cosmetics.ingredients.list`: List public ingredients on the chosen site.
- `cosmetics.ingredients.search`: Search cosmetic ingredient names and published safety labels; labels use each catalogue’s own scale.
- `cosmetics.latest-reviews.get`: Read latest reviews on cosdna.com. Returns personal data: personal details as published.
- `cosmetics.popular-ingredients.list`: List public popular ingredients on incibeauty.com.
- `cosmetics.product-alternatives.list`: Recommend alternative skincare formulations for a cosmetic product slug on incidecoder.com.
- `cosmetics.product-images.get`: Read published product images on dischem.co.za.
- `cosmetics.product-images.search`: Search public product images on dischem.co.za.
- `cosmetics.products.get`: Read a cosmetic product description and its published ingredient information on the chosen site.
- `cosmetics.products.list`: List public products on incidecoder.com.
- `cosmetics.products.search`: Search cosmetic product names and public catalogue identifiers on cosdna.com.
- `cosmetics.recent-ingredients.list`: List public recent ingredients on incibeauty.com.
- `cosmetics.skincare-dossiers.get`: Read a skincare ingredient dossier and its related cosmetic articles on incibeauty.com.
- `cosmetics.skincare-dossiers.list`: Browse skincare ingredient dossiers and their public article links on incibeauty.com.
- `cosmetics.suppliers.search`: Search public suppliers on cosdna.com.
- `marketplace.beauty-service-categories.list`: List beauty and wellness service categories available for appointment discovery on fresha.com.
- `marketplace.formulations.search`: Search public formulations on knowde.com.
- `selfridges.fragrances.list`: Browse a fragrance shop's fragrances by category or brand on selfridges.com.
- `selfridges.fragrances.search`: Search a fragrance shop's catalog by keyword on selfridges.com.
- `sephora.fragrances.list`: Browse a fragrance shop's fragrances by category or brand on sephora.com.

## Freelancers and local services

Find freelancers, local service providers, sitters, venues and wedding vendors.

- `commerce.tasks.search`: Search tasks on airtasker.com. Returns personal data: personal details as published.
- `commerce.user-profile.get`: Read user profile on airtasker.com. Returns personal data: personal details as published.
- `hardware.business-info.get`: Read business info on booksy.com. Returns personal data: personal details as published.
- `hardware.time-slots.get`: Read time slots on booksy.com. Returns personal data: personal details as published.
- `marketplace.activities.list`: List public activities on giggster.com.
- `marketplace.availability.get`: Read public availability on fresha.com.
- `marketplace.couple-registry.get`: Read couple registry on theknot.com. Returns personal data: personal details as published.
- `marketplace.couples.search`: Search couples on theknot.com. Returns personal data: personal details as published.
- `marketplace.freelancer-profile.get`: Read freelancer profile on the chosen site. Returns personal data: personal details as published.
- `marketplace.freelancers.list`: List freelancers on mostaql.com. Returns personal data: personal details as published.
- `marketplace.freelancers.search`: Search freelancers on freelancer.de. Returns personal data: personal details as published.
- `marketplace.gig.get`: Read a freelance service offer, including its category, description and package options on fiverr.com.
- `marketplace.gigs.search`: Find freelance service offers by keyword and supported service filters on fiverr.com.
- `marketplace.knowledge-base-article.get`: Read a beauty-booking help article by its category and article slug on fresha.com.
- `marketplace.knowledge-base-categories.get`: List beauty-booking help categories and their article addresses on fresha.com.
- `marketplace.knowledge-base-category.get`: List beauty-booking help articles within a selected help category on fresha.com.
- `marketplace.knowledge-base.search`: Search beauty-booking help articles by keyword on fresha.com.
- `marketplace.peerspace-listings.search`: Search listings on peerspace.com. Returns personal data: personal details as published.
- `marketplace.project-details.get`: Read project details on mostaql.com. Returns personal data: personal details as published.
- `marketplace.project-listings.search`: Search project listings on a selected public marketplace.
- `marketplace.project.get`: Read public project on kampuskago.ng.
- `marketplace.projects.list`: List public projects on kampuskago.ng.
- `marketplace.provider-profile.get`: Read provider profile on thumbtack.com. Returns personal data: personal details as published.
- `marketplace.sharegrid-listings.search`: Search listings on sharegrid.com. Returns personal data: personal details as published.
- `marketplace.sitter-profile.get`: Read sitter profile on rover.com. Returns personal data: personal details as published.
- `marketplace.sitter-reviews.get`: Read sitter reviews on rover.com. Returns personal data: personal details as published.
- `marketplace.sitters.search`: Search sitters on rover.com. Returns personal data: personal details as published.
- `marketplace.skills.get`: List public skills on freelancer.de.
- `marketplace.skills.search`: Search public skills on freelancer.de.
- `marketplace.spaces.search`: Search public spaces on giggster.com.
- `marketplace.theknot.vendor.get`: Read a wedding supplier listing, with its location, service categories, review counts and public storefront on theknot.com.
- `marketplace.theknot.vendor.similar`: Find wedding suppliers similar to a specified public listing, with their locations and advertised services on theknot.com.
- `marketplace.theknot.vendors.search`: Find wedding suppliers by service category and location, with advertised starting prices and public storefronts on theknot.com.
- `marketplace.thumbtack.service.cost-guide`: Read the public pricing guide for a service on thumbtack.com.
- `marketplace.thumbtack.services.search`: Search services on thumbtack.com.
- `marketplace.tribes.list`: List tribes on myminifactory.com. Returns personal data: personal details as published.
- `marketplace.venue-activities.list`: List venue activities on peerspace.com.
- `marketplace.venue-filters.get`: Read venue filters on peerspace.com.
- `marketplace.venue-listings.get`: Read venue listings on native-spaces.com.
- `marketplace.venue-listings.search`: Search venue listings on native-spaces.com.
- `wedding.photographer-reviews.get`: Read photographer reviews on weddingwire.com. Returns personal data: personal details as published.
- `wedding.photographer.get`: Read a wedding photography business description and rating on weddingwire.com.
- `wedding.photographers.search`: Search wedding photography businesses by place and name on weddingwire.com.
- `wedding.vendor-categories.list`: List wedding service categories and their search identifiers on weddingwire.com.

## Game keys, skins and items

Compare game key, gift card and in-game item prices across stores.

- `commerce.alefgamingstore-game.get`: Read alefgamingstore game on alefgamingstore.ir.
- `commerce.alefgamingstore-games.list`: List alefgamingstore games on alefgamingstore.ir.
- `commerce.alefgamingstore-gift-card-options.get`: Read alefgamingstore gift card options on alefgamingstore.ir.
- `commerce.alefgamingstore-gift-card-platforms.list`: List alefgamingstore gift card platforms on alefgamingstore.ir.
- `commerce.alefgamingstore-marketplace-listings.list`: List alefgamingstore marketplace listings on alefgamingstore.ir.
- `commerce.alefgamingstore-subscriptions.list`: List alefgamingstore subscriptions on alefgamingstore.ir.
- `commerce.allkeyshop-game-info.get`: Read allkeyshop game info on allkeyshop.com.
- `commerce.allkeyshop-game-price-history.get`: Read allkeyshop game price history on allkeyshop.com.
- `commerce.allkeyshop-games.search`: Search allkeyshop games on allkeyshop.com.
- `commerce.allkeyshop-store-info.get`: Read allkeyshop store info on allkeyshop.com.
- `commerce.bloxfruitsvalues-all-fruits.get`: Read bloxfruitsvalues all fruits on bloxfruitsvalues.com.
- `commerce.codashop-product.get`: Read codashop product details on codashop.com.
- `commerce.codashop-products.list`: List codashop products on codashop.com.
- `commerce.gift-cards.search`: Search a gift-card marketplace's catalogue: brands, categories and discount offers.
- `marketplace.featured-games.get`: List public featured games on itch.io.
- `marketplace.game-categories.get`: List public game categories on funpay.com.
- `marketplace.game-comments.get`: Read game comments on itch.io. Returns personal data: personal details as published.
- `marketplace.game-jams.list`: List public game jams on itch.io.
- `marketplace.game-list-by-letter.get`: Read game list by letter on funpay.com. Returns personal data: personal details as published.
- `marketplace.game-offer-categories.list`: List item-trading categories offered for one game, including category identifiers and offer counts on funpay.com.
- `marketplace.game-skins.get`: Read game skins on pricempire.com.
- `marketplace.game-skins.search`: Search game skins on pricempire.com.
- `marketplace.game-store.get`: Read game store on rusthelp.com.
- `marketplace.games.get`: Read public games on itch.io.
- `marketplace.games.list`: List public games on itch.io.
- `marketplace.games.search`: Search public games from the selected marketplace.
- `marketplace.player-details.get`: Read player details on rolimons.com. Returns personal data: personal details as published.
- `marketplace.players.search`: Search players on rolimons.com. Returns personal data: personal details as published.
- `marketplace.recent-trades.get`: Read recent trades on rolimons.com. Returns personal data: personal details as published.
- `marketplace.starvell.category.get`: Read category on starvell.com.
- `marketplace.starvell.games.list`: List games on starvell.com.
- `marketplace.starvell.games.search`: Search games on starvell.com.
- `marketplace.starvell.offers.list`: List offers on starvell.com.
- `marketplace.video-game-prices.search`: Search video game prices on pricecharting.com.
- `marketplace.virtual-games.list`: List virtual games on rolimons.com.
- `marketplace.virtual-item-news.list`: List virtual item news on rolimons.com.
- `marketplace.virtual-items.list`: List virtual items on rolimons.com.

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

## Grocery and supermarkets

Browse grocery products, stores and supermarket prices.

- `commerce.shoprite-price-comparison.search`: Compare a grocery product price between two shop chains.
- `grocery.categories.list`: List a grocery retailer's product categories.
- `grocery.category-products.list`: List the products of a grocery category.
- `grocery.product.get`: Read a grocery product's detail page: name, brand, price and the published product facts.
- `grocery.products.search`: Search a grocery retailer's catalogue by keyword.
- `grocery.search-suggestions.list`: Read a grocery retailer's search-as-you-type suggestions.
- `grocery.store.get`: Read a grocery store's or retailer's public profile.
- `grocery.stores.search`: Find a grocery retailer's store locations near a place.
- `marketplace.grocery-products.list`: List grocery products on mercadolivre.com.br.
- `samsclub.clubs.get`: Read one club's details on samsclub.com.
- `shoprite.stores.list`: Find shoprite.co.za's store locations near a place.

## Home Depot

Search Home Depot products with brand, price and rating.

- `home-depot.product.detail`: Read one Home Depot product listing by its public product id.
- `home-depot.product.reviews`: List public customer reviews of one Home Depot product. Returns personal data: public author names, affiliations or review text.
- `home-depot.products.search`: Search Home Depot products by keyword, with each product's brand, price and rating.

## JD.com

Search JD.com products and check their current prices.

- `jd.item.price`: JD.com current product price by item id.
- `jd.search.items`: Search JD.com products by keyword.

## Mystery packs, coins and banknotes

Read mystery pack odds and openings, collectible coins and banknotes.

- `collectibles.banknote-census.countries`: List the countries in the banknote census with graded counts.
- `marketplace.coin-sets.list`: List coin sets on pricecharting.com.
- `marketplace.coins.get`: Read coins on pricecharting.com.
- `marketplace.coins.search`: Search coins on pricecharting.com.
- `marketplace.collectible-movers.list`: List collectible movers on pricecharting.com.
- `marketplace.live-opens.get`: Read live opens on packdraw.com. Returns personal data: personal details as published.
- `marketplace.pack-activity.get`: Read pack activity on rip.fun. Returns personal data: personal details as published.
- `marketplace.pack-price-history.list`: List pack price history on rip.fun.
- `marketplace.packs.list`: List public packs on japan-toreca.com.
- `marketplace.prize-deal-products.search`: Search prize deal products on packdraw.com.
- `marketplace.prize-pack-odds.get`: Read prize pack odds on luxdrop.com.
- `marketplace.prize-pack-ranking.list`: List prize pack ranking on packdraw.com.
- `marketplace.prize-pack-rules.get`: Read prize pack rules on packdraw.com.
- `marketplace.prize-packs.get`: Read a prize pack and its published outcomes, prices and probabilities on luxdrop.com.
- `marketplace.prize-packs.search`: Search public prize pack catalogues and their published prices.
- `marketplace.prize-products.search`: Search prize products on packdraw.com.
- `marketplace.rip-records.search`: Search records on rip.fun. Returns personal data: personal details as published.
- `marketplace.top-opens.get`: Read top opens on packdraw.com. Returns personal data: personal details as published.

## Online marketplaces

Search marketplace listings, categories, offers and sellers.

- `marketplace.all-tags.get`: List public all tags on itch.io.
- `marketplace.antique-category-listings.list`: List antique category listings on ruby-lane.com.
- `marketplace.best-sellers.list`: List best sellers on mercadolivre.com.br.
- `marketplace.buyback.search`: Search public buyback on lashinbang.com.
- `marketplace.by-image.search`: Search by image on s.1688.com. Returns personal data: personal details as published.
- `marketplace.catalog.list`: List public catalog on estafetabo.com.
- `marketplace.categories-groups.get`: Read public categories groups on grailed.com.
- `marketplace.categories.list`: List shopping departments and product categories, including available nested category groups on the chosen site.
- `marketplace.category-listings.get`: Read category listings on search.kongfz.com. Returns personal data: personal details as published.
- `marketplace.category-listings.list`: List public category listings from the selected marketplace.
- `marketplace.category-products.get`: Read category products on n11.com. Returns personal data: personal details as published.
- `marketplace.category.list`: List public category on etsy.com.
- `marketplace.collection-items.get`: Read collection items on pinshape.com. Returns personal data: personal details as published.
- `marketplace.collections.get`: Read collections on sketchfab.com. Returns personal data: personal details as published.
- `marketplace.crawl-all-listings.get`: Read crawl all listings on peerspace.com. Returns personal data: personal details as published.
- `marketplace.creator-profile.get`: Read creator profile on indiegogo.com. Returns personal data: personal details as published.
- `marketplace.discover-categories.get`: List public discover categories on gumroad.com.
- `marketplace.filters.list`: List public filters from the selected marketplace.
- `marketplace.generic.search`: Search public generic on finn.no.
- `marketplace.homepage-collections.get`: Read public homepage collections on grailed.com.
- `marketplace.homepage-featured.get`: Read public homepage featured on kixify.com.
- `marketplace.homepage-stats.get`: Read public homepage stats on ehorses.com.
- `marketplace.homepage.get`: Read homepage on packdraw.com. Returns personal data: personal details as published.
- `marketplace.itch-creator-profile.get`: Read creator profile on itch.io. Returns personal data: personal details as published.
- `marketplace.item-details.get`: Read item details on ruby-lane.com. Returns personal data: personal details as published.
- `marketplace.items-by-author.get`: Read items by author on elements.envato.com. Returns personal data: personal details as published.
- `marketplace.items.list`: List named virtual-game items or auction goods, with supported category and rarity filters, from a selected public marketplace.
- `marketplace.listing-detail.get`: Read listing detail on the chosen site. Returns personal data: personal details as published.
- `marketplace.listing-details.get`: Read listing details on olx.pt. Returns personal data: personal details as published.
- `marketplace.listing.get`: Read listing on the chosen site. Returns personal data: personal details as published.
- `marketplace.listings.get`: Read a public classified or resale product advertisement by its identifier or address on the chosen site.
- `marketplace.listings.list`: List public listings on gpulist.ai.
- `marketplace.listings.search`: Search public classified advertisements by keywords and supported category, condition and location filters on the chosen site.
- `marketplace.location-suggestions.list`: List location suggestions on a selected public marketplace.
- `marketplace.locations.get`: List public locations on kijiji.ca.
- `marketplace.locations.list`: List locations on mymarket.ge.
- `marketplace.market-metrics.summarize`: Summarize active and sold auction listing counts and sell-through ratios for a product query on ebay.com.au.
- `marketplace.new-releases.get`: List public new releases on dlsite.com.
- `marketplace.offer.get`: Read offer on the chosen site. Returns personal data: personal details as published.
- `marketplace.offers-by-category.count`: Count public offers by category on kufar.by.
- `marketplace.offers-by-category.search`: Search offers by category on mercadolivre.com.br. Returns personal data: personal details as published.
- `marketplace.offers.get`: List public offers on ggchest.com.
- `marketplace.organizer-profiles.list`: List organizer profiles on encheres-publiques.com. Returns personal data: personal details as published.
- `marketplace.popular-designers.list`: List public popular designers on grailed.com.
- `marketplace.popular-locations.list`: List popular locations on olx.in.
- `marketplace.product-details.get`: Read product details on prom.ua. Returns personal data: personal details as published.
- `marketplace.product-stock.get`: Read product stock on n11.com.
- `marketplace.product.get`: Read product on mymarket.ge. Returns personal data: personal details as published.
- `marketplace.products.get`: Read public product specifications and catalogue attributes for a product record.
- `marketplace.products.list`: List products on searchthewatchmarket.com. Returns personal data: personal details as published.
- `marketplace.products.search`: Search public product catalogues by keywords and supported product filters.
- `marketplace.property-sale-filters.list`: List public property sale filters on jo.opensooq.com.
- `marketplace.query-suggestions.list`: List query suggestions on a selected public marketplace.
- `marketplace.ranking.get`: List public ranking on dlsite.com.
- `marketplace.records.search`: Search records on mercari.com. Returns personal data: personal details as published.
- `marketplace.regional-partner-detail.get`: Read regional partner detail on nexxt-change.org. Returns personal data: personal details as published.
- `marketplace.related-products.list`: List resale clothing advertisements related to an existing clothing listing on grailed.com.
- `marketplace.resolve-overlay.get`: Read resolve overlay on yachtbuyer.com. Returns personal data: personal details as published.
- `marketplace.s-products.search`: Search products on s.1688.com. Returns personal data: personal details as published.
- `marketplace.search-summary.get`: Read public search summary on jp.mercari.com.
- `marketplace.subcategory-listings.get`: List public subcategory listings on folksy.com.
- `marketplace.suggestions.search`: Suggest product search terms for partial text in a selected shopping catalogue.

## Online store catalogs

Read products, categories and stores from online store platforms.

- `commerce.public-brands.list`: List public product brands on a store website.
- `commerce.public-brands.products`: List public products for a brand on a store website.
- `commerce.public-catalog.offers`: List offers in a public retail catalog.
- `commerce.public-catalogs.list`: List publicly published retail offer catalogs.
- `commerce.public-categories.list`: List public product categories on a store website.
- `commerce.public-categories.products`: List public products within a store category.
- `commerce.public-collections.products`: List public products within a store collection.
- `commerce.public-product.availability`: Read public product stock and availability from a store website.
- `commerce.public-product.get`: Read a public product page from a chosen store website.
- `commerce.public-product.related`: List related products from a public product page.
- `commerce.public-product.size-guide`: Read a public product size guide.
- `commerce.public-product.specifications`: Read public product specifications, materials or ingredients.
- `commerce.public-product.store-availability`: List public store availability for a product.
- `commerce.public-product.variants`: Read public product variants and their stock from a store website.
- `commerce.public-products.browse`: Browse public products from a chosen store website.
- `commerce.public-products.featured`: List featured public products for a chosen store collection.
- `commerce.public-products.restock`: List public product restock information from a store website.
- `commerce.public-products.search`: Search public product listings on a chosen store website.
- `commerce.public-retailers.list`: List public retailers and their website links.
- `commerce.public-seller.products`: List public products offered by a seller.
- `commerce.public-store.get`: Read public store details, without contact details.
- `commerce.public-stores.list`: List public retail stores or showrooms, without contact details.
- `commerce.public-subcategories.list`: List public product subcategories within a store category.
- `commerce.salla-categories.list`: List the product categories of a shop with their links.
- `commerce.salla-product.get`: Read one product in a shop with prices, stock and picture.
- `commerce.salla-products.search`: Search products in a shop by name, with prices and availability.
- `commerce.salla-store-id.get`: Look up the platform store identifier behind a shop address.
- `commerce.salla-store-info.get`: Read a shop settings summary: open status, sign-in requirements and supported languages.
- `commerce.showcase.get`: Read showcase on cardladder.com. Returns personal data: personal details as published.
- `commerce.showcases.list`: List showcases on cardladder.com. Returns personal data: personal details as published.
- `commerce.store-categories.list`: List top-level categories in a consumer store directory on resellerratings.com.
- `commerce.store-countries.list`: List countries served by a public store website.
- `commerce.store-description.get`: Read a public store description.
- `commerce.store-details.get`: Read store details on resellerratings.com. Returns personal data: personal details as published.
- `commerce.store-directory.search`: Find stores in a consumer ratings directory on resellerratings.com.
- `commerce.store-highlights.get`: Read a store’s shipping and category highlights on resellerratings.com.
- `commerce.store-news.get`: Read one public news article from a store website.
- `commerce.store-news.list`: List public news published by a store website.
- `commerce.store-reviews.get`: Read store reviews on resellerratings.com. Returns personal data: personal details as published.
- `commerce.store-status.get`: Read a public store opening status and current announcement.
- `commerce.store-subcategories.list`: List child store categories and their seller counts on resellerratings.com.
- `commerce.stores.list`: Find a retail chain's physical stores or pickup points near a place: names, addresses and distances.
- `marketplace.shop-listings.list`: List public shop listings from the selected marketplace.
- `marketplace.shop.get`: Read shop on ruby-lane.com. Returns personal data: personal details as published.
- `marketplace.shops.get`: Read public shops on etsy.com.
- `marketplace.shops.list`: List shops on tayara.tn. Returns personal data: personal details as published.
- `marketplace.shops.search`: Search public shops on etsy.com.
- `marketplace.store-sale-listings.list`: List store sale listings on salla.sa.
- `marketplace.woocommerce.articles.list`: List articles on woocommerce.com.
- `marketplace.woocommerce.business-services.list`: List business services on woocommerce.com.
- `marketplace.woocommerce.documentation.get`: Read a public documentation page as plain text on woocommerce.com.
- `marketplace.woocommerce.extensions.list`: List extensions on woocommerce.com.
- `marketplace.woocommerce.themes.list`: List themes on woocommerce.com.
- `marketplace.zid-store.categories.list`: List categories on zid store on zid.store.
- `marketplace.zid-store.store.get`: Read store on zid store on zid.store.
- `marketplace.zid-store.store.products`: Read store on zid store on zid.store.
- `marketplace.zid-store.stores.featured`: List featured stores on zid store on zid.store.
- `marketplace.zid-store.stores.search`: Search stores on zid store on zid.store.
- `shop-app.merchants.get`: Read one merchant's details from a marketplace on shop.app.

## Pets and horses

Find pets and horses for sale, breeds, shelters and adoption.

- `animals.adoption.search`: Find animals available for adoption near a postal code on adoptapet.com.
- `animals.breeds.list`: List animal breed names and public search keys on rescuegroups.org.
- `animals.dog-breed-standard.get`: Read the official appearance and temperament standard for a dog breed on thekennelclub.org.uk.
- `animals.dog-breed.get`: Read the size, exercise, grooming and lifespan of a dog breed on thekennelclub.org.uk.
- `animals.dog-breeds.search`: Find pedigree dog breeds by name or breed group on thekennelclub.org.uk.
- `animals.pet-profile.get`: Read pet profile on adoptapet.com. Returns personal data: personal details as published.
- `animals.registration-forms.list`: List dog registration forms and their displayed prices on thekennelclub.org.uk.
- `animals.rescue.get`: Read an animal adoption description and rescue organization on rescuegroups.org.
- `animals.rescue.search`: Find available rescue animals and public adoption summaries on rescuegroups.org.
- `animals.shelter-pets.search`: Find adoptable animals in a local shelter collection on ahconnects.org.
- `animals.shelters.search`: Find animal shelters by city or region on adoptapet.com.
- `marketplace.dog-details.get`: Read dog details on dogs4homes.co.uk. Returns personal data: personal details as published.
- `marketplace.dogs.search`: Search public dogs on dogs4homes.co.uk.
- `marketplace.equine-news.get`: Read equine news on mercadodecavalos.com.br.
- `marketplace.equine-news.list`: List equine news on mercadodecavalos.com.br.
- `marketplace.featured-horses.list`: List featured horses on mercadodecavalos.com.br.
- `marketplace.horse-details.get`: Read horse details on mercadodecavalos.com.br. Returns personal data: personal details as published.
- `marketplace.horse-listings.search`: Search horse listings on mercadodecavalos.com.br.
- `marketplace.horses.search`: Search public horses on ehorses.com.
- `marketplace.pet-listings.search`: Search public pet listings on kijiji.ca.
- `marketplace.pets4homes-dogs.search`: Search dogs on pets4homes.co.uk. Returns personal data: personal details as published.
- `marketplace.seller-horses.get`: Read seller horses on ehorses.com. Returns personal data: personal details as published.
- `marketplace.stallion-listings.list`: List stallion listings on mercadodecavalos.com.br.
- `pets.breeds.list`: List the pet breed catalogue with species, size and care flags.
- `petsmart.stores.list`: Find petsmart.com's store locations near a place.

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

## Product reviews

Read product and service reviews and complaints.

- `commerce.product-reviews.get`: Read product reviews on the chosen site. Returns personal data: personal details as published.
- `marketplace.listing-reviews.get`: Read listing reviews on etsy.com. Returns personal data: personal details as published.
- `marketplace.product-reviews.get`: Read product reviews on the chosen site. Returns personal data: personal details as published.
- `marketplace.reviews.list`: List reviews on wheresweed.com. Returns personal data: personal details as published.
- `reviews.attorney-reviews.get`: Read attorney reviews on lawyers.findlaw.com. Returns personal data: personal details as published.
- `reviews.brand-page.get`: Read brand page on sikayetvar.com. Returns personal data: personal details as published.
- `reviews.complaint.get`: Read complaint on sikayetvar.com. Returns personal data: personal details as published.
- `reviews.gamespot-reviews.get`: Read reviews on gamespot.com. Returns personal data: personal details as published.
- `reviews.product-profile.get`: Read product profile on trustradius.com. Returns personal data: personal details as published.
- `reviews.product-reviews.get`: Read product reviews on trustradius.com. Returns personal data: personal details as published.
- `reviews.review-detail.get`: Read review detail on gamespot.com. Returns personal data: personal details as published.
- `reviews.reviews.get`: Read reviews on ambitionbox.com. Returns personal data: personal details as published.
- `reviews.reviews.search`: Search reviews on trustradius.com. Returns personal data: personal details as published.
- `reviews.vocalremover-reviews.get`: Read reviews on vocalremover.org. Returns personal data: personal details as published.

## Shipping

Get shipping quotes, buy labels, book pickups and track parcels.

- `hardware.myspeedpost-track-shipment.get`: Read track shipment on myspeedpost.com. Returns personal data: personal details as published.
- `hardware.shipment-tracking.get`: Read shipment tracking on cnc-line.com. Returns personal data: personal details as published.
- `hardware.track-shipment.get`: Read track shipment on dsv.com. Returns personal data: personal details as published.
- `shipping.booking.cancel`: Request cancellation of an eligible shipment; acceptance does not assert physical cancellation. (needs approval; needs a connected account)
- `shipping.booking.create`: Book forward, return or replacement transport with your carrier account. Sends names, contacts, addresses, and requested invoice or inspection facts; shipment charges are billed by the carrier. (needs approval; needs a connected account)
- `shipping.booking.create-bulk`: Book up to 100 independent shipments in one background job, keyed by your row ids. Sends recipient contacts, addresses and requested invoice facts. Failed rows cost nothing. (needs approval; needs a connected account)
- `shipping.booking.ewaybill-update`: Update electronic transport document and invoice facts on a shipment. (needs approval; needs a connected account)
- `shipping.booking.update`: Update a booked shipment with recipient contact or address, contents, weight or payment changes. (needs approval; needs a connected account)
- `shipping.city-profile.get`: Read city profile on moving.com. Returns personal data: personal details as published.
- `shipping.collection-points.list`: List public parcel collection locations in a Chilean commune on centrodeayuda.chilexpress.cl.
- `shipping.container.track`: Check a shipping container number, name its carrier and give the carrier's tracking links.
- `shipping.countries.list`: List the countries and territories a parcel carrier serves, with postcode rules where the carrier publishes them.
- `shipping.country-partners.list`: List public parcel-network partner organisations by region on dpdgroup.com.
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
- `shipping.market-articles.list`: List public freight-market articles and updates on dat.com.
- `shipping.mover.get`: Read a household-moving firm’s published services and transport registration numbers on moving.com.
- `shipping.movers.list`: List household-moving firms in a public transport directory on moving.com.
- `shipping.order.address.update`: Update recipient name, phone and delivery address for an order. (needs a connected account)
- `shipping.order.cancel`: Cancel an order after explicit confirmation. A submitted cancellation does not promise a refund. (needs approval; needs a connected account)
- `shipping.order.cancel-bulk`: Run up to 10 cancellations, each with confirm true, keyed by your row IDs. (needs approval; needs a connected account)
- `shipping.order.create`: Create a shipping order with contacts, addresses and items. The account may notify the recipient; this does not buy postage. (needs approval; needs a connected account)
- `shipping.order.fulfill`: Add stock for an ordered product. (needs a connected account)
- `shipping.order.get`: Read a shipping order and its items. Contact names and addresses are returned only when requested. (needs a connected account)
- `shipping.order.pickup-location.update`: Change a shipping order to a saved pickup location. (needs a connected account)
- `shipping.order.products.map`: Map an ordered product to a master inventory stock code. (needs a connected account)
- `shipping.order.update`: Update order items before postage assignment; reports fields that were not updated. (needs a connected account)
- `shipping.orders.list`: List shipping orders, without recipient contacts or addresses. (needs a connected account)
- `shipping.parcel-network-stats.get`: Read published parcel-network collection-point totals on dpdgroup.com.
- `shipping.parcel-shop.get`: Read public parcel-shop opening hours and offered services on dpdgroup.com.
- `shipping.parcel-shops.search`: Search public parcel collection shops by location on dpdgroup.com.
- `shipping.parcel.track`: Work out which carriers a parcel tracking number belongs to and give their tracking links.
- `shipping.pickup-location.create`: Register a pickup location in your carrier account; sends its contact and return addresses. (needs approval; needs a connected account)
- `shipping.pickup-locations.list`: List saved pickup location names and postal addresses; personal contacts are opt-in. (needs a connected account)
- `shipping.pickup.book`: Request a carrier pickup at a saved location; holidays may shift the requested date. (needs approval; needs a connected account)
- `shipping.postal-coverage.export`: Export postal service coverage as a hosted CSV file in a background job; at most 100,000 rows and 20 MB. Overflow fails the job. (needs a connected account)
- `shipping.rates.quote`: Quote shipping for one parcel without buying postage; sender and recipient names, postal addresses and contacts may be stored as immutable records. (needs approval)
- `shipping.resources.search`: Find public freight guides and reference resources on dat.com.
- `shipping.return.create`: Create a return order with customer pickup and seller return addresses; a carrier may be sent to the customer. (needs approval; needs a connected account)
- `shipping.return.update`: Update return parcel dimensions, weight or a saved warehouse return address. (needs a connected account)
- `shipping.returns.list`: List shipping return orders, without recipient contacts or addresses. (needs a connected account)
- `shipping.service-alerts.list`: Read a parcel carrier's current service alerts: disruption notices and operational changes.
- `shipping.service-communes.list`: List public Chilean communes served by parcel collection locations on centrodeayuda.chilexpress.cl.
- `shipping.serviceability.check`: Check domestic delivery availability and current INR carrier quotes; no price is locked. (needs a connected account)
- `shipping.services.lookup`: Look up postal service availability and supported payment choices. Temporary restrictions make the postal code unavailable. (needs a connected account)
- `shipping.shipment.create`: Create one shipment and quote rates without buying postage; stores postal names, addresses, contacts and customs facts that may be immutable. (needs approval)
- `shipping.shipment.get`: Read your saved shipment and current quotes; postal names, addresses and contacts are returned only when requested. (needs a connected account)
- `shipping.shipment.track`: Read a parcel's current public delivery status by its tracking number.
- `shipping.shipments.list`: List saved shipments with plain shipment IDs and handles for reading each shipment. (needs a connected account)
- `shipping.tracking.create`: Register tracking without email or SMS notifications; supplied postal hints and delivery locations may be personal.
- `shipping.tracking.get`: Read your registered delivery status and last 100 checkpoints, including city-level personal delivery locations.
- `shipping.tracking.lookup`: Look up one delivery by tracking number, shipment ID, or order number and channel. Returns personal location history. (needs a connected account)
- `shipping.tracking.lookup-bulk`: Run up to 50 tracking lookups; the native source accepts trackingNumber rows only, keyed by your row IDs. (needs a connected account)
- `shipping.tracking.proof.get`: Retrieve delivery signatures or delivery photos as hosted files; at most ten files, 10 MB per file. Contains personal delivery evidence. (needs a connected account)
- `shipping.waybills.reserve`: Reserve one to 1,000 shipment tracking numbers without booking transport. (needs approval; needs a connected account)

## Ships and freight

Track vessels and read ports, sailings, freight rates and carrier services.

- `commerce.chrobinson-carrier-services.get`: Read chrobinson carrier services on chrobinson.com.
- `commerce.chrobinson-freight-services.get`: Read chrobinson freight services on chrobinson.com.
- `commerce.chrobinson-industries.get`: Read chrobinson industries on chrobinson.com.
- `commerce.chrobinson-load-board-stats.get`: Read chrobinson load board stats on chrobinson.com.
- `marketplace.vessel-detail.get`: Read vessel detail on yachtauctions.com. Returns personal data: personal details as published.
- `shipping.carrier-information.search`: Find freight carrier services, company announcements and support information on jbhunt.com.
- `shipping.freight-classes.list`: List standard less-than-truckload freight classification codes on jbhunt.com.
- `shipping.freight-market.get`: Read changes in freight supply, demand and spot rates on dat.com.
- `shipping.freight-rates.list`: Read monthly national freight rate trends on dat.com.
- `shipping.public-locations.search`: Find public port and city location records on maersk.com.
- `shipping.public-ports.list`: List publicly served ports and standard location codes on maersk.com.
- `shipping.public-route.get`: Read a public shipping service and its port rotation on cma-cgm.com.
- `shipping.public-routes.list`: List public ocean shipping services between regions on cma-cgm.com.
- `shipping.public-sailings.search`: Read public sailing availability between two port location keys on maersk.com.
- `shipping.public-vessels.list`: List public fleet vessel names and registry details on maersk.com.
- `shipping.vessel-current-position.get`: Read vessel current position on marinetraffic.com. Returns personal data: personal details as published.
- `shipping.vessel-details.get`: Read vessel details on marinetraffic.com. Returns personal data: personal details as published.
- `shipping.vessel-photos.get`: Read vessel photos on marinetraffic.com. Returns personal data: personal details as published.
- `shipping.vessels.list-by-type`: List public vessel directory entries of a selected type on marinetraffic.com.
- `shipping.vessels.search`: Search public vessel directory names and vessel types on marinetraffic.com.

## Sports cards and grading

Look up sports card prices, sales, graded cards and certificates.

- `collectibles.card-grading.get`: Read a trading-card grading certificate on cgccards.com.
- `collectibles.card-gradings.list`: Read grading records for a bounded set of trading-card certificates on cgccards.com.
- `collectibles.card-population.get`: Read graded-card population counts for a certificate on cgccards.com.
- `collectibles.card.detail`: Full detail for a trading card, with grade-level pricing statistics.
- `collectibles.cards.search`: Search trading-card catalogues by player, card or keyword, with set and pricing context.
- `collectibles.cards.trending`: Trading cards moving most in price over a timeframe.
- `collectibles.indices.list`: Trading-card market indices with their current level and recent performance.
- `collectibles.news.list`: List banknote-collecting news articles.
- `collectibles.sports-card.categories.list`: List the sports categories used for trading card collections on beckett.com.
- `commerce.card-asset.get`: Read card asset for graded collectible cards.
- `commerce.card-assets.search`: Search card assets for graded collectible cards.
- `commerce.card-certificate.get`: Read card certificate for graded collectible cards.
- `commerce.card-certificates.lookup`: Look up card certificates for graded collectible cards.
- `commerce.card-certificates.summary`: Summarize card certificates for graded collectible cards.
- `commerce.card-sales.list`: List card sales for graded collectible cards.
- `commerce.cardhedger-card-prices.get`: Read cardhedger card prices on ai.cardhedger.com.
- `commerce.cardhedger-cards.search`: Search cardhedger cards on ai.cardhedger.com.
- `commerce.cardhedger-price-history.get`: Read cardhedger price history on ai.cardhedger.com.
- `commerce.cardladder-by-cert.search`: Search cardladder by cert on cardladder.com.
- `commerce.cardladder-card-price-chart.get`: Read cardladder card price chart on cardladder.com.
- `commerce.cardladder-card-sales-detail.get`: Read cardladder card sales detail on cardladder.com.
- `commerce.cardladder-card-sales.get`: Read cardladder card sales on cardladder.com.
- `commerce.cardladder-card-sales.search`: Search cardladder card sales on cardladder.com.
- `commerce.cardladder-card-transactions.search`: Search cardladder card transactions on cardladder.com.
- `commerce.cardladder-card-value.get`: Read cardladder card value on cardladder.com.
- `commerce.cardladder-cards.search`: Search cardladder cards on cardladder.com.
- `commerce.cardladder-index-history.get`: Read cardladder index history on cardladder.com.
- `commerce.cardladder-indices.list`: List cardladder indices on cardladder.com.
- `commerce.cardladder-sets.list`: List cardladder sets on cardladder.com.
- `commerce.cardova-auction-series.list`: List cardova auction series on cardova.co.jp.
- `commerce.cardova-latest-auction.get`: Read cardova latest auction on cardova.co.jp.
- `commerce.cardova-series-lots.list`: List cardova series lots on cardova.co.jp.
- `commerce.cert-full-profile.get`: Read cert full profile on cardladder.com. Returns personal data: personal details as published.
- `commerce.collectr-graded-prices.compare`: Compare collectr graded prices on app.getcollectr.com.
- `commerce.collectr-products-bulk.get`: Read collectr products bulk on app.getcollectr.com.
- `commerce.collectrea-sales.search`: Search collectrea sales on collectrea.com.
- `commerce.comc-card-offers.list`: Read comc card listings on comc.com.
- `marketplace.card-activity.get`: Read card activity on rip.fun. Returns personal data: personal details as published.
- `marketplace.card-certificates.get`: Read the public URL for a collectible grading certificate number on psacard.com.
- `marketplace.card-offers.get`: Read card offers on footcards.eu. Returns personal data: personal details as published.
- `marketplace.card-price-changes.get`: Read card price changes on rip.fun.
- `marketplace.card-price-history.list`: List card price history on rip.fun.
- `marketplace.card-sales.list`: List card sales on pricecharting.com.
- `marketplace.graded-card-sales.search`: Search public graded card sales on ebay.co.uk.
- `marketplace.sportscardspro.card.get`: Read card on sportscardspro.com.
- `marketplace.sportscardspro.card.sales-compare`: Compare completed card sales against the supplied printing identity on sportscardspro.com.
- `marketplace.sportscardspro.card.sales-history`: Read completed card sales and historical prices on sportscardspro.com.
- `marketplace.sportscardspro.cards.search`: Search cards on sportscardspro.com.
- `sports.card-details.get`: Read card details on tcdb.com. Returns personal data: personal details as published.
- `sports.card-prices.get`: Read card prices on fut.gg. Returns personal data: personal details as published.
- `sports.card.get`: Read card on easysbc.io. Returns personal data: personal details as published.
- `sports.cards.list`: List cards on easysbc.io. Returns personal data: personal details as published.
- `sports.cards.search`: Search cards on tcdb.com. Returns personal data: personal details as published.
- `sports.collecting.checklist.get`: Read the card checklist for a trading-card set on tcdb.com.
- `sports.collecting.sets.list`: List trading-card sets by year, sport or set name on tcdb.com.

## Store opening hours

Check store opening hours and Sunday openings.

- `radne-nedjelje.stores.list`: Find radne-nedjelje.com's store locations near a place.
- `shopping.store-areas.list`: List the areas a retailer's store network covers.
- `shopping.store-availability.get`: Check whether a store's product is available at its shops or for delivery to a place.
- `shopping.stores.search`: Find a store's physical shops or partner merchants, near a place or across its network.
- `shopping.sunday-opening.get`: Read sunday opening in Germany.
- `shopping.sunday-openings.list`: List sunday openings in Germany.

## Store products and prices

Read a store's products, prices, variants, deals and search suggestions.

- `commerce.allegro-search-suggestions.get`: Read allegro search suggestions on allegro.pl.
- `commerce.ankandet-products.list`: List ankandet products on ankandet.com.
- `commerce.asset-detail.get`: Read asset detail on blenderkit.com. Returns personal data: personal details as published.
- `commerce.bidorbuy-homepage-promotions.get`: Read bidorbuy homepage promotions on bidorbuy.co.za.
- `commerce.bidorbuy-seller-profile.get`: Read seller profile on bidorbuy.co.za. Returns personal data: personal details as published.
- `commerce.brands.list`: List the brands or manufacturers a retail site carries, with product counts where given.
- `commerce.categories.list`: List a retail site's category navigation: names, slugs or paths that its product search accepts.
- `commerce.chairish-shops.search`: Search chairish shops on chairish.com.
- `commerce.dealer-detail.get`: Read dealer detail on blocket.se. Returns personal data: personal details as published.
- `commerce.furniture.search`: Search public furniture and homeware listings without price quotes on crateandbarrel.com.
- `commerce.lab-product.get`: Read a public laboratory product description and variants without price quotes on rct-online.de.
- `commerce.lab-products.search`: Find public laboratory supply product names and page references on rct-online.de.
- `commerce.listing-detail.get`: Read listing detail on bazos.cz. Returns personal data: personal details as published.
- `commerce.marketplace-listings.get`: Read marketplace listings on whiskybase.com. Returns personal data: personal details as published.
- `commerce.phia-brand-products.list`: List resale products of a brand with prices and sale flags.
- `commerce.price.history`: Read a product's price history from a price-tracking site: dated price points.
- `commerce.pricecheck-product-offers.get`: Read shop offers for one product with prices and stock.
- `commerce.product-barcodes.search`: Search public product barcodes on dischem.co.za.
- `commerce.product.detail`: Read a product's record from a retail site by the identifier that site publishes: an id, slug, handle, SKU or product page URL.
- `commerce.product.related`: List products a retail site recommends beside a product: accessories, bundles and similar items.
- `commerce.products.search`: Search or browse a retail site's product catalogue: keyword, category or brand lists with prices and links.
- `commerce.resale-domain.get`: Read a resale domain listing, including its asking price, availability and purchase options on afternic.com.
- `commerce.rh-product-images.list`: List the picture links published for a product.
- `commerce.ritual-products.list`: List public cultural and ritual product descriptions without price quotes on fengsuitang.com.
- `commerce.sanrio-characters.list`: List the character catalogue of the shop with pictures.
- `commerce.scan-category-products.list`: List computer-hardware listings in a category and subcategory, with prices.
- `commerce.screwfix-category-products.list`: List trade hardware products in a category page, with prices and ratings.
- `commerce.screwfix-product.get`: Read one trade hardware product with price, rating and specification bullets.
- `commerce.search-suggestions.list`: Read a retail site's search autocomplete: suggested terms for a partial query.
- `commerce.search-trends.list`: List trending searches published by a store website.
- `commerce.sendto-product.get`: Read one gift product with price, stock and pictures.
- `commerce.shipping-policy.get`: Read a public store shipping policy.
- `commerce.skroutz-category-products.list`: List products in a marketplace category with their links.
- `commerce.skroutz-product.get`: Read a marketplace product with its barcodes and specification summary.
- `commerce.trade-in.value`: Read the trade-in values a retailer offers for a used product: tiers with store-credit and cash amounts.
- `commerce.trending-searches.list`: List public trending searches on fahorro.com.
- `hardware.key-blanks.search`: Find physical key-blank compatibility references by manufacturer name on lockcodes.com.
- `hardware.key-combinations.count`: Count possible key combinations using spacing and adjacent-cut constraints on lockcodes.com.
- `hardware.key-cylinders.list`: List mechanical key-cylinder types and pinning chart templates on lockcodes.com.
- `shopping.article.get`: Read an editorial article from a store by its link.
- `shopping.articles.list`: List a store's editorial articles and blog posts.
- `shopping.bestsellers.list`: List a store's best-selling or top-ranked products.
- `shopping.brand-products.list`: List a store's products of a brand or manufacturer.
- `shopping.brands.list`: List the brands or manufacturers a store carries.
- `shopping.bundle.detail`: Read a product bundle: its contents, price tiers and charity details where published.
- `shopping.bundles.list`: List a store's product bundles currently on offer.
- `shopping.catalog-products.list`: List a store's products without a search term, page by page, with each product's price, brand and availability.
- `shopping.categories.list`: List a store's product categories, with each category's name, link and children where published on the chosen site.
- `shopping.category-filters.list`: List the filter facets a store offers for a category or search.
- `shopping.category-products.list`: List a store's products in a category or collection, with each product's price, brand and availability.
- `shopping.deals.list`: List a store's discounted, clearance or flash-sale products.
- `shopping.new-arrivals.list`: List the products a store has added most recently.
- `shopping.popular-searches.list`: List popular searches at a retailer.
- `shopping.preorder-products.list`: List the products a store takes advance orders for.
- `shopping.product-images.list`: List a product's image links from a store.
- `shopping.product-offers.list`: List the merchant offers and prices for a product on a comparison marketplace.
- `shopping.product-specifications.get`: Read a product's published specifications from a store.
- `shopping.product-variants.list`: List a product's variants, sizes or colours with their prices and availability.
- `shopping.product.detail`: Read a product from a store: name, description, price, images, availability and published specifications on the chosen site.
- `shopping.product.get`: Read one product's name, brand, price and description by product page link.
- `shopping.products.search`: Search a store's product catalog by keyword, with each product's price, brand and availability on the chosen site.
- `shopping.related-products.list`: List the products a store recommends beside a product, or as substitutes for it.
- `shopping.resale-editorials.list`: List resale shopping editorials with their authors. Returns personal data: personal details as published.
- `shopping.retailer-ratings.list`: List the site's partner retailers with their ratings.
- `shopping.search-suggestions.list`: List the search suggestions a shop proposes for a prefix.
- `shopping.similar-products.list`: List products similar to one product. Returns personal data: personal details as published.
- `shopping.trending-products.list`: List a retailer's trending products. Returns personal data: personal details as published.
- `shopping.workshop-services.list`: List a workshop's services with their prices.

## Taobao

Search Taobao and Tmall products and read their reviews.

- `taobao.item.detail`: Get one Taobao or Tmall product by its item id, with its title, price, how many have sold and where it ships from.
- `taobao.item.reviews`: List buyers' reviews of a Taobao or Tmall product by its item id, with each review's text and what was bought. Returns personal data: the review text buyers posted, without their names.
- `taobao.search.items`: Search Taobao and Tmall products by keyword.

## TikTok Shop

Search TikTok Shop products, stores, creators and reviews.

- `tiktok-shop.categories`: The top-level product categories of TikTok Shop in a country, with their ids.
- `tiktok-shop.category.products`: TikTok Shop products by category id. Returns personal data: public names, profile details and published content.
- `tiktok-shop.creator.products`: The products a TikTok creator shows in their shop showcase, with prices, ratings and units sold. For the profile and categories sold as well use tiktok.shop.creator.products.
- `tiktok-shop.creator.profile`: A TikTok Shop creator's public profile, with their bio, followers and the product categories they sell. Engagement and sales rates are left out. Returns personal data: the creator's public handle, nickname, bio and follower count.
- `tiktok-shop.product.detail`: A TikTok Shop product's rating, review count and units sold, by the product's address.
- `tiktok-shop.product.reviews`: Reviews of a TikTok Shop product, with each reviewer's name, stars, text, country and whether the purchase was verified. Returns personal data: the reviewers' display names.
- `tiktok-shop.products.search`: Search TikTok Shop products by keyword, with each product's price, rating, units sold and shop.
- `tiktok-shop.search.suggestions`: The searches TikTok Shop suggests for a partly typed keyword.
- `tiktok-shop.shop.products`: The products a TikTok Shop store sells, by the store's address, with prices, ratings and units sold.
- `tiktok-shop.shop.resolve`: Turn a TikTok Shop share link to a store into the store's id and its full address.

## Trading card game prices

Compare trading card game prices, offers and sets across card marketplaces.

- `commerce.cardmarket-best-bargains.get`: Read cardmarket best bargains on cardmarket.com.
- `commerce.cardmarket-card-offers.list`: Read cardmarket card listings on cardmarket.com.
- `commerce.cardmarket-card-versions.get`: Read cardmarket card versions on cardmarket.com.
- `commerce.cardmarket-card.get`: Read cardmarket card details on cardmarket.com.
- `commerce.cardmarket-expansion-singles.get`: Read cardmarket expansion singles on cardmarket.com.
- `commerce.cardmarket-expansions.get`: Read cardmarket expansions on cardmarket.com.
- `commerce.cardmarket-games.get`: Read cardmarket games on cardmarket.com.
- `commerce.cardmarket-sealed-product-languages.get`: Read cardmarket sealed product languages on cardmarket.com.
- `commerce.cardmarket-singles.search`: Search cardmarket singles on cardmarket.com.
- `commerce.hobbiesville-buylist-table.search`: Search hobbiesville buylist table on buylist.hobbiesville.com.
- `commerce.hobbiesville-buylist.search`: Search hobbiesville buylist on buylist.hobbiesville.com.
- `commerce.hobbiesville-finishes.list`: List hobbiesville finishes on buylist.hobbiesville.com.
- `commerce.hobbiesville-rarities.list`: List hobbiesville rarities on buylist.hobbiesville.com.
- `commerce.hobbiesville-sets.list`: List hobbiesville sets on buylist.hobbiesville.com.
- `marketplace.cards.search`: Search public cards from the selected marketplace.
- `marketplace.tcgplayer.card.condition-prices`: Read card on tcgplayer.com.
- `marketplace.tcgplayer.card.description`: Read card on tcgplayer.com.
- `marketplace.tcgplayer.card.get`: Read card on tcgplayer.com.
- `marketplace.tcgplayer.card.listings`: Read card on tcgplayer.com.
- `marketplace.tcgplayer.card.sales`: Read card on tcgplayer.com.
- `marketplace.tcgplayer.cards.search`: Search cards on tcgplayer.com.
- `marketplace.trading-card-sets.list`: List trading card sets on pricecharting.com.
- `marketplace.trading-cards.get`: Read trading card price guide values by set and card slug on pricecharting.com.
- `marketplace.trading-cards.search`: Search trading cards and their published price guide values on pricecharting.com.
- `marketplace.trending-cards.list`: List trending cards on pricecharting.com.
- `marketplace.yuyu-tei.cards.search`: Search cards on yuyu-tei.jp tei.

## Trustpilot

Search Trustpilot businesses and read their ratings and customer reviews.

- `seo.trustpilot-reviews`: Trustpilot Reviews. Returns personal data: public names, profile details and published content.
- `trustpilot.businesses.search`: Search Trustpilot for businesses by name or keyword, with their rating and review count. Runs as a job and returns ranking positions; for a quicker search with location, categories, trust score and verified flag use trustpilot.search-companies.
- `trustpilot.categories`: List categories.
- `trustpilot.company-overview`: Get company overview.
- `trustpilot.company-review-summary`: Get review summary.
- `trustpilot.company-reviews`: List published reviews of a company. Returns personal data: Public names, profiles, wallet activity or published records; see the result fields..
- `trustpilot.search-companies`: Search Trustpilot companies by name or keyword, with location, categories, trust score, stars and verified flag, answered in one call. For ranking positions as a job use trustpilot.businesses.search.

## Vehicle and machine parts

Find car, tyre and aircraft parts, diagrams and fitment.

- `parts.brands.list`: List brands — car parts catalogue.
- `parts.categories.list`: Browse a parts catalogue's category tree.
- `parts.diagram.get`: Read one factory parts diagram with the positions and part numbers it calls out
- `parts.diagrams.list`: List the factory parts diagrams for one vehicle modification
- `parts.fitment-options.list`: Read the vehicle years, makes, or models a parts catalogue accepts.
- `parts.for-vehicle.search`: Search parts that fit a vehicle.
- `parts.frame-catalog.get`: Read frame catalog — car parts catalogue.
- `parts.frame-variations.list`: List frame variations — car parts catalogue.
- `parts.frames.list`: List frames — car parts catalogue.
- `parts.model-generations.list`: List the generations of one model in a parts catalogue
- `parts.models.list`: List models — car parts catalogue.
- `parts.number.lookup`: Find replacement vehicle parts by manufacturer part number.
- `parts.part-detail.get`: Read part detail — car parts catalogue.
- `parts.part-diagrams.list`: List part diagrams — car parts catalogue.
- `parts.part.list`: List part — car parts catalogue.
- `parts.parts.list`: List parts — car parts catalogue.
- `parts.parts.search`: Search parts — car parts catalogue.
- `parts.product-equivalents.list`: List alternative products offered for a vehicle part.
- `parts.product.get`: Read a vehicle part's product record.
- `parts.products.for-category.list`: List the parts a catalogue offers in a category.
- `parts.related-products.list`: List products related to a catalogue product.
- `parts.schema-parts.list`: List schema parts — car parts catalogue.
- `parts.search`: Search vehicle parts by keyword or part number.
- `parts.search-bulk`: Resolve a list of manufacturer part numbers to catalogue products.
- `parts.tyre.get`: Read one tyre's fitted and mail-order prices and label grades from its product page
- `parts.tyres.search`: Search tyres for a tyre size.
- `parts.variant-filters.list`: List the questions that pin down one exact vehicle build in a parts catalogue
- `parts.vehicle-variants.search`: Find exact vehicle builds in a parts catalogue, optionally narrowed by filter values
- `parts.vehicle.get`: Read vehicle — car parts catalogue.
- `shop-boeing.categories.get`: Get categories at shop.boeing.com.
- `shop-boeing.merchants.list`: List merchants at shop.boeing.com.
- `shop-boeing.parts.get`: Read one part's details from a parts shop on shop.boeing.com.
- `shop-boeing.parts.list`: List parts at shop.boeing.com.
- `shop-boeing.parts.search`: Search a parts shop's catalog by keyword on shop.boeing.com.

## Walmart

Search Walmart products with prices, ratings and sellers.

- `walmart.search.products`: Search Walmart products by keyword, with each product's price, rating and seller.

## Watches

Look up watch listings, prices, models and watch sightings in films.

- `commerce.chrono24-wristwatch.get`: Read the specifications and sale listing for a luxury wristwatch on chrono24.com.
- `commerce.chrono24-wristwatches.search`: Find luxury wristwatches listed for sale on chrono24.com, with published price quotes.
- `hardware.timepiece-movement.get`: Retrieve wristwatch caliber specifications and mechanism details on calibercorner.com.
- `hardware.timepiece-movements.search`: Search wristwatch mechanisms by manufacturer and caliber on calibercorner.com.
- `marketplace.portfolio-tracker.get`: Read portfolio tracker on everywatch.com. Returns personal data: personal details as published.
- `marketplace.searchthewatchmarket-products.search`: Search products on searchthewatchmarket.com. Returns personal data: personal details as published.
- `marketplace.watch-price-statistics.get`: Read watch price statistics on searchthewatchmarket.com.
- `rolex.stores.list`: Find rolex.com's store locations near a place.
- `rolex.watches.list`: List a watch shop's watch models on rolex.com.
- `rolex.watches.search`: Search a watch shop's catalog by keyword on rolex.com.
- `watches.manual-index.get`: Read watch user-guide titles and model family codes.
- `watches.sighting.get`: Read one wristwatch sighting's details.
- `watches.sightings.search`: Search films and shows for wristwatch sightings.

## Wholesale suppliers and B2B

Find wholesale products, suppliers, trade shows and buying leads.

- `commerce.1688-by-keyword.search`: Search 1688 by keyword on 1688.com.
- `commerce.1688-distribution.get`: Read 1688 drop shipping info on detail.1688.com.
- `commerce.1688-product-attributes.get`: Read 1688 product attributes on detail.1688.com.
- `commerce.1688-product-color-codes.get`: Read 1688 product color codes on detail.1688.com.
- `commerce.1688-product-detail-images.get`: Read 1688 product detail images on detail.1688.com.
- `commerce.1688-product-pricing.get`: Read 1688 product pricing on detail.1688.com.
- `commerce.1688-product-sections.get`: Read 1688 all product info on detail.1688.com.
- `commerce.1688-product-variants.get`: Read 1688 product variants on detail.1688.com.
- `commerce.1688-product.get`: Read a 1688 wholesale product title and offer identifier.
- `commerce.b2b-certificates.get`: Read the published supplier certificates attached to a wholesale product.
- `commerce.supplier-categories.list`: List one supplier's product category groups.
- `commerce.supplier-trade-shows.list`: List the trade fairs one supplier attends.
- `commerce.trade-products.get`: Read one trade-marketplace product's public details from a chosen marketplace website.
- `commerce.trade-products.search`: Search trade-marketplace product listings on a chosen marketplace website.
- `commerce.wholesale-products.search`: Search public wholesale products and minimum order quantities.
- `marketplace.brands.search`: Search public brands on knowde.com.
- `marketplace.documents.search`: Search public documents on knowde.com.
- `marketplace.industries.list`: List public industries on knowde.com.
- `marketplace.product-categories.list`: List public product categories on knowde.com.
- `marketplace.suppliers.search`: Search public suppliers on knowde.com.
- `trade.agricultural-offers.list`: List public agricultural supplier offers with origin, minimum quantity and delivery terms on tridge.com.
- `trade.agricultural-price-overview.get`: Read agricultural wholesale price observations with explicit currencies and units on tridge.com.
- `trade.agricultural-products.search`: Find agricultural trade products and their tariff codes on tridge.com.
- `trade.agricultural-suppliers.list`: List publicly displayed agricultural supplier summaries; anonymous directory names may be masked on tridge.com.
- `trade.availability.get`: Read availability.
- `trade.beverage-buying-leads.list`: List beverage buying requests by product and buyer country.
- `trade.categories.list`: List public trade directory categories and listing counts on turkishexporter.com.tr.
- `trade.exhibitors.list`: List the initial public pharmaceutical event exhibitors with their booth and website on visitor.cphieventplanner.com.
- `trade.featured-products.list`: List featured public industrial products and origin countries on wlw.de.
- `trade.industrial-categories.search`: Find public industrial supplier categories with counts on wlw.at.
- `trade.industrial-products.search`: Search public industrial product listings and their suppliers on the chosen site.
- `trade.material-industries.list`: Read supported industrial material categories on ulprospector.com.
- `trade.material.get`: Read an industrial ingredient description and supplier on ulprospector.com.
- `trade.materials.search`: Search industrial ingredients by keyword and industry on ulprospector.com.
- `trade.notices.list`: List a trade promotion body's notices and news.
- `trade.request.get`: Read a public import or export trade request with its description and categories on turkishexporter.com.tr.
- `trade.requests.list`: List recently public import and export requests and their visibility expiry on turkishexporter.com.tr.
- `trade.show-cities.list`: List cities hosting trade shows with their fair counts on tradeindia.com.
- `trade.show.get`: Read a trade show description, venue and start and end dates on tradeindia.com.
- `trade.shows.search`: Search trade shows and expos, returning at most twenty entries with venue, country and date labels on tradeindia.com.
- `trade.supplier-directory.list`: List popular suppliers alphabetically by initial letter.
- `trade.supplier-intake.get`: Read public retailer supplier intake guidance and submission requirements on webapp.walgreens.com.
- `trade.supplier-registration.get`: Read public supplier tax and export registration facts from a directory page.
- `trade.tariff-chapters.list`: List tariff chapters.
- `trade.tariff-codes.search`: Find tariff product codes and their shipment counts on volza.com.
- `trade.tariff-headings.list`: List tariff headings.
- `trade.tariff-sections.list`: List tariff sections.

## Wine, spirits and cigars

Look up wines, whiskies, wineries, cigars and food pairings.

- `commerce.cigar.get`: Read a cigar’s origin, construction and tasting notes on cigaraficionado.com.
- `commerce.cigars.search`: Find cigars by name, origin, size and published score filters on cigaraficionado.com.
- `commerce.ranked-cigars.list`: List the highest ranked cigars for a year on cigaraficionado.com.
- `commerce.whisky.distilleries.list`: List whisky distilleries with countries and catalogue sizes on whiskybase.com.
- `commerce.whisky.distillery-bottles.list`: List the whisky bottles associated with a distillery on whiskybase.com.
- `commerce.whisky.rankings.list`: List the highest rated whisky bottles with their ranking on whiskybase.com.
- `commerce.whisky.releases.list`: List recently released whisky bottles, optionally by bottling year on whiskybase.com.
- `commerce.whisky.search`: Search whisky bottles by name and brand on whiskybase.com.
- `commerce.whisky.search-many`: Search whisky bottles for several comma-separated queries on whiskybase.com.
- `wine.fair.detail`: Read one wine fair's detail.
- `wine.fairs.list`: List the wine fairs the site publishes.
- `wine.pairings.search`: Search wines that pair with a food.
- `wine.regions.list`: List wine regions.
- `wine.wine.detail`: Read one wine's detail.
- `wine.wineries.search`: Search wineries by keyword or region.
- `wine.winery.detail`: Read one winery's detail.
- `wine.wines.search`: Search wines by keyword, with the published ratings and prices.

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

- `yelp.business-reviews.get`: Read business reviews on yelp.com.au. Returns personal data: personal details as published.
- `yelp.business.get`: Read an Australian directory listing's rating, review total, categories and city on yelp.com.au.
- `yelp.business.reviews`: Reviews of a business on Yelp, by its Yelp id, with each reviewer's name, stars, text and date. Returns personal data: the reviewers' display names.
