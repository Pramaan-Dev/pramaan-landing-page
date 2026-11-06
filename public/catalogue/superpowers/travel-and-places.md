# Superpowers: Travel & places

Maps, places, addresses, property, routes, weather and travel.

## Addresses and geocoding

Check, complete and split addresses and turn them into map points and back.

- `address.verify`: Check a postal address and get its cleaned parts and coordinates.
- `geo.address.census.lookup`: Return census block, tract, county division, metropolitan area and place facts for a US address, preserving the reported vintage and precision.
- `geo.address.census.lookup-bulk`: Run geo.address.census.lookup for up to 100 fresh rows as one background job. Each result is keyed by your row id; no references in rows.
- `geo.address.cross-street`: Find street intersections near a coordinate. Returns street names, addresses and precise locations.
- `geo.address.cross-street-bulk`: Run geo.address.cross-street for up to 100 rows as a background job. Each row is keyed by your own id; missing or failed rows are free.
- `geo.address.geocode`: Turn a postal address or place name into map coordinates, with the matched place's name and type.
- `geo.address.geocode-detailed`: Find address candidates and components from text or a structured address. Returns personal address and location data.
- `geo.address.geocode-detailed-bulk`: Run geo.address.geocode-detailed for up to 100 rows as one background job. Every row comes back keyed by your own row id: found true with the fields, found false where there is no record, or an error for a row that could not be answered. Rows that could not be answered are free.
- `geo.address.parse`: Split a free-text postal address into street, number, city, postal code, region and country.
- `geo.address.reverse-geocode`: Find addresses at coordinates. Returns precise location and personal address data.
- `geo.address.reverse-geocode-bulk`: Run geo.address.reverse-geocode for up to 100 rows as one background job. Every row comes back keyed by your own row id: found true with the fields, found false where there is no record, or an error for a row that could not be answered. Rows that could not be answered are free.
- `geo.address.secondaries.count`: Count apartment or other secondary addresses for a US address. A zero count is a valid answer.
- `geo.address.secondaries.count-bulk`: Run geo.address.secondaries.count for up to 100 fresh rows as one background job. Each result is keyed by your row id; no references in rows.
- `geo.address.secondaries.list`: List all units and aliases for a US building after a count preflight. At most 1000 units; the starting price estimate caps the builder charge if units appear between counting and listing.
- `geo.address.suggest`: Suggest postal addresses from typed text in an explicit country. Returns address text and group handles; points of interest are outside this operation. Location preference is off by default.
- `geo.address.suggestion.expand`: Expand an address group or retrieve a final international address using its short-lived handle. Final international detail can cost up to 0.184 USD.
- `geo.address.validate`: Check a postal address and return its standard form and parts, with whether it is valid.
- `geo.address.validate-detailed`: Validate and correct a postal address, with detailed component verdicts. Returns personal postal address data.
- `geo.address.validation-feedback.send`: Record which address version was used after validation. Changes an external record. (needs approval)
- `geo.addresses.extract`: Extract and verify US addresses from at most 65536 UTF-8 bytes and 100 input lines as a background job. Returns spans with original offsets and the best normalized address. Limit 1 to 10 addresses per line; worst case is 46 USD, or 125 USD with explicit enhanced matching.
- `geo.addresses.extract-bulk`: Run geo.addresses.extract for up to 1 fresh rows as one background job. Each result is keyed by your row id; no references in rows. One bounded text per run keeps the full span output below the 4 MB job step limit.
- `geo.destinations.search`: Find destinations and navigation points from an address or coordinate. Returns personal location data.
- `geo.locate`: Estimate device location from radio observations. Returns personal precise location; server IP fallback is disabled.
- `geo.location.clean`: Normalize place text into geographic location facts and coordinates when known.
- `geo.place.geocode`: Expand a place handle into postal address components and coordinates. Returns personal address data.

## Air quality

Check current, past and forecast air quality worldwide.

- `weather.air-quality.current`: Air quality current at geographic coordinates, with explicit index scales and pollutant units. At most 50 series records.
- `weather.air-quality.forecast`: Air quality forecast at geographic coordinates, with explicit index scales and pollutant units. At most 50 series records.
- `weather.air-quality.history`: Air quality history at geographic coordinates, with explicit index scales and pollutant units. At most 50 series records.
- `weather.air-quality.live-city-ranking`: Get live city rankings.
- `weather.air-quality.map-data`: Get air quality map data.
- `weather.air-quality.readings.search`: Find latest measured air quality near a point, including Delhi: individual pollutant concentrations with units and observation times from up to five nearby monitoring stations; no calculated air quality index.
- `weather.air-quality.world-quality`: Get world air quality.

## Airlines, airports and aircraft

Read airline fleets, aircraft, airport status, flights and disruptions.

- `aviation.aircraft-changes.list`: List aircraft records updated most recently.
- `aviation.aircraft-deliveries.list`: List recent aircraft deliveries across airlines.
- `aviation.aircraft-layout.get`: Read an aircraft type's published cabin layout.
- `aviation.aircraft.get`: Read an aircraft's specification and operator history.
- `aviation.aircraft.search`: Search aircraft by registration or manufacturer serial number.
- `aviation.airline-fleet.get`: Read an airline's published fleet by aircraft type.
- `aviation.airlines.for-country.list`: Browse airlines registered in a country.
- `aviation.airlines.list`: List the airlines a flight-data source tracks, with their codes.
- `aviation.airlines.search`: Search airlines by name.
- `aviation.airport-events.list`: List active US airport traffic-management events.
- `aviation.airport-status.get`: Read traffic-management conditions for a US airport.
- `aviation.airport-weather.get`: Latest METAR, TAF and hourly aerodrome forecast context for an airport by its ICAO code.
- `aviation.airports.list`: Airports covered by the national aviation weather service, with ICAO codes and positions.
- `aviation.announcements.list`: List US air-traffic coordination announcements.
- `aviation.disruptions.summary`: Read counts of current US aviation disruptions.
- `aviation.fleet-ages.get`: Read an airline's fleet age statistics by aircraft type.
- `aviation.fleet-aircraft.list`: List an aircraft type's airframes operated by an airline.
- `aviation.fuel-prices.get`: Read published fuel prices at an airport's fixed-base operators.
- `aviation.search`: Search live flight data by keyword across flights, airports and airlines.

## Apple Maps

Look up a place on Apple Maps with its details and rating.

- `apple-maps.place.detail`: A place on Apple Maps by its id, with its name, category, address, contact website and rating.
- `apple-maps.place.ratings`: The rating of a place on Apple Maps, by the place's id - its average, the highest possible and how many ratings it has.

## Bing Maps

Search businesses on Bing Maps with addresses, websites and ratings.

- `bing.maps.search`: Search businesses on Bing Maps by keyword, with their addresses, websites and ratings.

## Camping and retreats

Find campsites, availability and retreats.

- `travel.campsite-availability.list`: List day-by-day availability slots for a campsite or cabin.
- `travel.campsite-sites.list`: List the individual pitches or sites inside a campground.
- `travel.campsite.detail`: Read a campground's public profile: description, location and amenities.
- `travel.campsites.search`: Search campgrounds and campsites at a place, with prices and ratings.
- `travel.retreat.detail`: Read a retreat's public detail: programme, meals and booking terms.
- `travel.retreats.search`: Search retreat stays by place or keyword, with prices and ratings.

## Car auctions

Search car and salvage auctions, lots and auction locations.

- `autos.auction-centre.get`: Read an auction centre's details and upcoming sales.
- `autos.auction-centres.list`: List vehicle auction centre locations.
- `autos.auction-locations.list`: List vehicle auction locations.
- `autos.auctions.lot.get`: Read an auction lot's full record.
- `autos.auctions.results.list`: List completed auction results with sale prices.
- `autos.auctions.sales-history.get`: Read the sale records published for an auction lot.
- `autos.auctions.schedule.list`: List upcoming auction sale events.
- `autos.auctions.similar-lots.list`: List recently sold lots similar to an auction lot.
- `autos.body-styles.list`: List the body styles available at a vehicle auction.
- `autos.damage-types.list`: List the damage categories used by a vehicle auction.
- `autos.featured.list`: List featured — salvage car auction listings.
- `autos.homepage-inventory.get`: Read homepage inventory — salvage car auction listings.
- `autos.popular.list`: List popular — salvage car auction listings.
- `autos.vehicle-details.get`: Read vehicle details — salvage car auction listings.
- `autos.vehicle-types.list`: List the vehicle types available at a vehicle auction.
- `autos.vehicles.search`: Search vehicles — salvage car auction listings.

## Car listings and prices

Search new and used car listings, dealers, lease offers and price stats.

- `autos.africa.popular.list`: List popular — African car marketplace.
- `autos.brand-new.list`: List brand new — African car marketplace.
- `autos.car-listing-detail.get`: Read car listing detail — African car marketplace.
- `autos.car-listings.search`: Search car listings — African car marketplace.
- `autos.car-loan-eligibility.get`: Read car loan eligibility — African car marketplace.
- `autos.car-models-by-make.get`: Read car models by make — African car marketplace.
- `autos.car.list`: List car — African car marketplace.
- `autos.dealer-store.get`: Read a vehicle dealer store address, telephone, opening hours and open status. Returns personal data: personal details as published.
- `autos.dealer.get`: Read a vehicle dealer's public marketplace profile. Returns personal data: personal details as published.
- `autos.dealers.get`: Read dealers — African car marketplace.
- `autos.dealers.list`: List registered vehicle dealers on a marketplace Returns personal data: published business contact details.
- `autos.featured-listings.list`: List a classifieds site's featured car promotions
- `autos.lease-listings.list`: List current lease offers for one vehicle category, with monthly prices
- `autos.lease-offer.get`: Read one vehicle's lease special: monthly price, term and mileage allowance
- `autos.listing-details`: Read a vehicle sale listing's full record.
- `autos.listing-features.get`: Read a listed vehicle's factory options and feature highlights
- `autos.listing-market-stats.get`: Read one listing's market analytics: price history, days on market and depreciation
- `autos.listing-photos.list`: List the photo links published for a vehicle listing or lot.
- `autos.listing-seller.get`: Read the selling dealer's public details for one listed vehicle Returns personal data: public dealer contact details.
- `autos.marketplace-listings.search`: Search a national used-car marketplace's vehicle listings by price, year and make.
- `autos.offers.get`: Read offers — premium car maker.
- `autos.owner-prices.list`: List owners' reported purchase prices for one vehicle trim Returns personal data: public vehicle-owner names.
- `autos.payment-estimate.get`: Estimate a listed vehicle's monthly loan payment from price, rate and term
- `autos.payment-quote.get`: Read an official monthly payment quote for one configured vehicle
- `autos.payment.calculate`: Estimate payment — premium car maker.
- `autos.price-stats.get`: Read listing price statistics for one make, model and year, with sample ads
- `autos.price-trends.get`: Read sale-price statistics for a vehicle model.
- `autos.recent-sales.list`: List vehicles a car-buying service recently bought, with prices and provinces
- `autos.search-filters.get`: List a marketplace's search filter options: makes, body styles, conditions and year ranges
- `autos.services.list`: List the services a car-care business advertises
- `autos.stores.list`: List a vehicle retailer's store locations with addresses
- `commerce.blocket-cars.search`: Search blocket cars on blocket.se.
- `moto.listings.search`: Search motorcycle classifieds by price and page
- `vehicles.car-detail.get`: Read car detail on comparis.ch. Returns personal data: personal details as published.
- `vehicles.classified.get`: Read specifications and advertised price of a used vehicle listing on yad2.co.il.
- `vehicles.marketplace-filters.get`: Read marketplace filters from a public vehicle catalogue on comparis.ch.
- `vehicles.reveal-contact-phone.get`: Read reveal contact phone on yad2.co.il. Returns personal data: personal details as published.

## Car rental and rides

Compare car and truck rentals, ride prices and rental terms.

- `rentals.cars.search`: Search rental cars available at a location for given dates, with prices.
- `rentals.fleet.list`: List a renter's published vehicle fleet and its specifications.
- `rentals.location.detail`: Read a rental station's address, hours and contact details.
- `rentals.locations.search`: Look up car-rental and mobility locations by name or city.
- `rentals.truck-types.list`: List moving-truck types with their dimensions and capacities.
- `rentals.trucks.search`: Search moving trucks and their rates between two places on a date.
- `rides.availability.get`: Read nearby ride types and their estimated pickup times.
- `rides.cities.list`: List the cities a rideshare network serves.
- `rides.estimates.get`: Read price and duration estimates for rides between two points.
- `travel.car-rental-hours.get`: Read a car-rental service's opening hours and contact details. Returns personal data: personal details as published.
- `travel.car-rental-requirements.get`: Read a car-rental service's age and document requirements.
- `travel.car-rental-terms.get`: Read a car-rental service's published rates and rental conditions.
- `travel.ground-trips.search`: Search one-way bus and train trips between two cities on a date.
- `travel.rental-availability.list`: Read a vacation rental's day-by-day availability and nightly prices
- `travel.rental-faq.list`: List a car-rental location's frequently asked questions.
- `travel.rental-locations.list`: List a car-rental operator's pickup and return locations.
- `travel.rental-quote.get`: Price a car-rental pickup and return period, a row per vehicle.
- `travel.rental-reviews.list`: Read published guest reviews of a vacation rental. Returns personal data: personal details as published.
- `travel.venue-units.list`: List the accommodation units a property publishes.

## Car specs and models

Look up car makes, models, specs, features, manuals and owner-reported problems.

- `autos.brand-detail.get`: Read brand detail — car marque encyclopedia.
- `autos.brands-by-country.get`: Read brands by country — car marque encyclopedia.
- `autos.brands.list`: List brands — car marque encyclopedia.
- `autos.categories.list`: available categories from its source.
- `autos.configurator-images.get`: Build the configurator image links for one configured vehicle, angle by angle
- `autos.configurator-options.get`: List the trims, powertrains and colours a maker's configurator offers for one model
- `autos.fusebox.detail.get`: Read one model version's fuse and relay assignments panel by panel
- `autos.fusebox.versions.list`: List the fuse-box diagram versions documented for one car model
- `autos.generations.get`: Read generations — car specification database.
- `autos.guide.get`: Read one maintenance guide's full structured content
- `autos.guides.list`: List the maintenance and troubleshooting guides documented for one car model
- `autos.lineup-categories.list`: List the body-style categories in a maker's lineup and the models under each
- `autos.lineup.list`: List a vehicle maker's current model lineup with prices and key specifications
- `autos.lineup.model.get`: Read one model in a maker's lineup: specifications, pricing and current offers
- `autos.manuals.list`: List owner or service manuals for a selected car model.
- `autos.marque.search`: Search marque — car marque encyclopedia.
- `autos.model-comparisons.list`: List the rival models a knowledge base suggests comparing one model against
- `autos.model-directory.search`: Search a make and model directory by keyword.
- `autos.model-features.get`: Read a car model's interior, exterior and safety features per variant
- `autos.model-overview.get`: Read what documentation a knowledge base holds for one car model
- `autos.model-problems.list`: List owner-reported problems for one car model Returns personal data: author names as published.
- `autos.model-specs.get`: Read a car model's full technical specification sheet
- `autos.models`: List the vehicle models a maker's catalogue offers.
- `autos.news.list`: List motor-trade and motoring news articles.
- `autos.premium.models.list`: List models — premium car maker.
- `autos.problems.search`: Search owner-reported car problems by keyword across all makes Returns personal data: author names as published.
- `autos.product-menu.list`: List a maker's site-menu catalogue across vehicles, energy and charging products
- `autos.regions.list`: List regions — car marque encyclopedia.
- `autos.spec.brands.list`: List brands — car specification database.
- `autos.spec.models.list`: List models — car specification database.
- `autos.spec.search`: Search spec — car specification database.
- `autos.specifications.get`: Read specifications — car specification database.
- `autos.variant-comparison.get`: Compare one model's variants side by side across engine, measurement and safety specs
- `autos.variant-specs.get`: Read one trim's full specification sheet with its price
- `autos.variants.get`: Read variants — car specification database.
- `autos.variants.list`: List the engine and fuel variants offered for a vehicle model.
- `ev.rankings.list`: List electric vehicles ranked by one metric, such as efficiency or range
- `ev.vehicle.detail`: Read one electric vehicle's full specification: battery, charging, range and prices
- `ev.vehicles.list`: List every electric vehicle in a comparison database with key specifications
- `ev.vehicles.search`: Find electric vehicles by name in a comparison database
- `vehicles.makes.list`: List vehicle makes for a model year.
- `vehicles.models.list`: List vehicle models for a make and model year.

## Commercial property

Find offices, commercial property, event spaces and multifamily buildings.

- `housing.commercial-listings.search`: Find available office, apartment or parking space listings in Hamburg on saga.hamburg.
- `housing.public-housing-companies.list`: List the public housing companies that advertise apartments in Berlin on inberlinwohnen.de.
- `real-estate.business.get`: Read the licensed services, coverage areas and specialties of a real estate service firm on biggerpocket.com.
- `real-estate.businesses.search`: Find real estate service firms by region and professional service type on biggerpocket.com.
- `real-estate.cbre-properties.search`: Search properties on cbre.com. Returns personal data: personal details as published.
- `real-estate.companies.search`: Search companies on propertyfinder.ae. Returns personal data: personal details as published.
- `real-estate.company-details.get`: Read company details on propertyfinder.ae. Returns personal data: personal details as published.
- `real-estate.crexi-properties.search`: Search properties on crexi.com. Returns personal data: personal details as published.
- `real-estate.event-space.get`: Read event space on gopopup.com.
- `real-estate.event-spaces.search`: Search event spaces on gopopup.com.
- `real-estate.fundainbusiness-listing.get`: Read listing on fundainbusiness.nl. Returns personal data: personal details as published.
- `real-estate.multifamily.search`: Search multifamily on centris.ca.

## Cost of living and relocation

Compare cost of living, salaries and relocation guides by city and country.

- `geo.city-cost-rankings.list`: List city living-cost rankings by region on expatistan.com.
- `geo.city-living-cost.compare`: Compare published living costs between two cities on expatistan.com.
- `geo.city-living-cost.get`: Read published city living-cost estimates and item prices on expatistan.com.
- `geo.country-cost-rankings.list`: List country living-cost rankings on expatistan.com.
- `geo.country-living-cost.get`: Read published country living-cost estimates and item prices on expatistan.com.
- `geo.living-cost-updates.get`: Read recent published living-cost prices and comparisons on expatistan.com.
- `relocation.countries.list`: List the countries a relocation guide covers.
- `relocation.country.get`: Read a country's relocation overview: key facts and description.
- `relocation.jobs.list`: List tech jobs posted in a country by the relocation guide.
- `relocation.salaries.list`: List tech salary figures for a country by role.

## Cruises and ferries

Search cruises, ships, ports, excursions and ferry sailings.

- `cruise.destinations.list`: List shore-excursion destination regions.
- `cruise.excursion.detail`: Read a shore excursion's highlights, restrictions and duration.
- `cruise.excursions.list`: List shore excursions sold at a port, with prices.
- `cruise.ports.list`: List the ports of a cruise or excursion region.
- `cruises.departures.list`: List the bookable departure dates of a cruise itinerary, with prices.
- `cruises.destinations.list`: List a cruise line's destination areas with their codes.
- `cruises.detail.get`: Read a cruise itinerary's ports, ship and prices.
- `cruises.filters.list`: List a cruise site's search vocabulary: destinations, ports, ships and lines.
- `cruises.search`: Search cruise itineraries by destination, date and ship, with from-prices.
- `cruises.ships.list`: List the ships in a cruise line's fleet.
- `ferry.ports.search`: Look up ferry ports by name and return ferry port codes.
- `ferry.routes.search`: Search ferry routes between ports.
- `ferry.sailings.search`: Search ferry sailings between two ports on a date, with prices.

## Custom maps

Build private map data and styles, and render map images and tiles.

- `geo.census.acs.query`: Read US American Community Survey statistics (population, income, housing, commuting and more) for the country, states, counties, places, census tracts or ZIP code areas: pick detailed-table variables and an area level. Not an address lookup; for the census block of one address use geo.address.census.lookup.
- `geo.city-demographics.compare`: Compare public city demographics and housing statistics by postal area on moving.com.
- `geo.directions.search`: Find travel directions between two addresses, with published distance and duration text.
- `geo.feature-detail.get`: Read feature detail on mahsaalert.app. Returns personal data: personal details as published.
- `geo.geocoder-service.get`: Read public geocoder service capabilities and address-field definitions on mapshare.vic.gov.au.
- `geo.geocoder-services.list`: List public Victorian geocoder service names and types on mapshare.vic.gov.au.
- `geo.indian-districts.list`: List public district names, codes and areas for Madhya Pradesh on geoportal.mp.gov.in.
- `geo.layer-features.get`: Read layer features on mahsaalert.app. Returns personal data: personal details as published.
- `geo.location-elements.get`: Read location elements on komoot.com. Returns personal data: personal details as published.
- `geo.map-data.get`: Read map data on mahsaalert.app. Returns personal data: personal details as published.
- `geo.route-details.get`: Read route details on komoot.com. Returns personal data: personal details as published.
- `geo.route-gallery.get`: Read route gallery on komoot.com. Returns personal data: personal details as published.
- `geo.routes.search`: Search routes on komoot.com. Returns personal data: personal details as published.
- `geo.stores.get`: Read stores on dns-shop.ru. Returns personal data: personal details as published.
- `geo.us-san-rafael.layer.get`: Read the metadata of San Rafael's parcels and zoning data layer.
- `geo.us-san-rafael.parcels.search`: List San Rafael parcel and zoning records, a row per parcel.
- `geo.user-profile.get`: Read user profile on komoot.com. Returns personal data: personal details as published.
- `maps.dataset.create`: Create a private geographic dataset. Its name and description may contain personal text.
- `maps.dataset.delete`: Delete your geographic dataset. Stored content may include private coordinates or text. (needs approval)
- `maps.dataset.feature.delete`: Delete a geographic feature in your own dataset. It may contain private coordinates and text. (needs approval)
- `maps.dataset.feature.get`: Get a geographic feature in your own dataset. It may contain private coordinates and text.
- `maps.dataset.feature.put`: Insert or replace one geographic feature using your own stable name. Coordinates and properties may contain personal data.
- `maps.dataset.features.list`: List geographic features in your own dataset, including private coordinates and properties.
- `maps.dataset.get`: Get your geographic dataset. Stored content may include private coordinates or text.
- `maps.dataset.update`: Update your geographic dataset. Stored content may include private coordinates or text.
- `maps.datasets.list`: List your geographic datasets, including names and descriptions.
- `maps.feature-detail.get`: Read feature detail on api.mahsaalert.app. Returns personal data: personal details as published.
- `maps.features.query`: Query public geographic features at a coordinate. Coordinates may be private; up to 50 results.
- `maps.feedback.create`: Report a map error to the map maker. Sends coordinates and your text; reaches no person. (needs approval)
- `maps.feedback.get`: Read your map error report, including its coordinates and personal text.
- `maps.feedback.list`: List your map error reports, including private coordinates and text.
- `maps.image.render`: Render a static map from a public theme with optional private coordinates and overlays. Up to 1280 logical pixels per side at scale two; image capped at 20 MB.
- `maps.imagery-catalog.get`: Read the public satellite imagery catalogue description on sentinel-hub.com.
- `maps.imagery-collections.list`: List public satellite imagery collection metadata on sentinel-hub.com.
- `maps.imagery-conformance.get`: Read published satellite imagery catalogue conformance identifiers on sentinel-hub.com.
- `maps.layer-features-bbox.get`: Read layer features bbox on api.mahsaalert.app. Returns personal data: personal details as published.
- `maps.layer-features.get`: Read layer features on api.mahsaalert.app. Returns personal data: personal details as published.
- `maps.portal-groups.get`: Read portal groups on spatial.nsw.gov.au. Returns personal data: personal details as published.
- `maps.public-item.get`: Read public geographic catalogue item metadata.
- `maps.public-items.search`: Search public geographic catalogue items by text and collection.
- `maps.public-layers.list`: List public geographic layers and their published field definitions.
- `maps.regional-data-packs.list`: List public regional geographic data packs on spatial.nsw.gov.au.
- `maps.regional-items.list`: List a page of public regional geographic data items on spatial.nsw.gov.au.
- `maps.regional-publications.list`: List published regional spatial-data publications on spatial.nsw.gov.au.
- `maps.style.create`: Create a map style from public geographic data. Layer and style names may contain private text.
- `maps.style.delete`: Permanently delete your map style. (needs approval)
- `maps.style.get`: Read your map style as a neutral drawing definition.
- `maps.style.protection.set`: Set or remove protection against changes to your map style.
- `maps.style.update`: Update your map style name or drawing definition.
- `maps.styles.list`: List your map styles and their names.
- `maps.tile.get`: Get a public image tile. Returns a stored image, up to 20 MB. Elevation pixels encode meters as -10000 + (R*65536 + G*256 + B)*0.1.

## DuckDuckGo Maps

Search places on DuckDuckGo Maps with addresses, categories and ratings.

- `duckduckgo.maps.search`: Search places on DuckDuckGo Maps by keyword, with their addresses, categories and ratings.

## Elevation

Get the height above sea level at any point or along a route.

- `geo.elevation.get`: Look up elevation at a coordinate. Location may be personal data.
- `geo.elevation.get-bulk`: Run geo.elevation.get for up to 512 rows as one background job. Every row comes back keyed by your own row id: found true with the fields, found false where there is no record, or an error for a row that could not be answered. Rows that could not be answered are free.
- `geo.elevation.profile.get`: Sample elevation along a path, up to 512 samples identified by your own ids. Travel paths may be personal data.

## EV charging

Find electric-car chargers and see whether they are free right now.

- `ev.charger.availability`: Read current point availability for a charger returned by charger search. Only reported point states are returned; unknown states stay unknown.
- `ev.chargers.search`: Find electric-vehicle chargers in a circle, rectangle or route corridor, with connector, power and availability filters. Returns station names, addresses, precise locations and charging point states.
- `ev.operators.list`: List electric-vehicle charging operators or payment-service companies by country, with region codes and relative coverage rank where reported. Returns organisation names.

## Flights and hotels

Search and price flights, seats and hotel rooms.

- `aviation.flight-status.get`: Read the status of a flight by number and date.
- `aviation.flight.get`: Read a tracked flight's schedule and live data by its tracker id.
- `aviation.flights.nearby`: List live aircraft positions inside a geographic bounding box.
- `aviation.tracked-flights.list`: List popular tracked flights and their routes.
- `google.flights.search`: Search Google Flights for one day's flights between two airports; returns the best options with price and duration.
- `google.hotel.detail`: Get one hotel from Google Hotels by its id, with address, star class and description.
- `google.hotels.search`: Search Google Hotels for a stay; returns hotels with price, stars and rating.
- `travel.airline-network.list`: List the airports an airline network serves.
- `travel.airline-promotions.list`: List an airline's current promotional fare campaigns
- `travel.airline-routes.list`: List the origin-destination pairs an airline network flies.
- `travel.airport-flights.list`: List today's arriving or departing flights at an airport.
- `travel.airport-waits.list`: List current security checkpoint wait times at an airport.
- `travel.airports-near.list`: List the alternative airports around an airport code.
- `travel.airports.list`: List an airline's airports, or those reachable from an origin airport.
- `travel.airports.search`: Search airports by name, city, or code.
- `travel.award-flights.search`: Search award flight availability between two airports for a date.
- `travel.fare-calendar.list`: List the lowest fare found for a route on each date of the bookable window.
- `travel.flight-deals.list`: List current flight deals from an origin, with prices and travel dates.
- `travel.flight-destinations.explore`: Explore flight destinations and indicative fares from one airport.
- `travel.flight-offer.get`: Retrieve current flight details, fare, expiry and optional ancillary prices from a private offer reference. (needs a connected account)
- `travel.flight-offer.price`: Refresh a flight fare for account-balance payment; service and card references require a future scoped resolver. (needs a connected account)
- `travel.flight-offers.search`: Search bookable flight offers for at most six journey legs and nine passengers; returns no traveler names. Unsupported split tickets and auxiliary credit references are refused. (needs a connected account)
- `travel.flight-seatmaps.get`: Retrieve cabin layouts and passenger-specific seat prices from a private flight offer; no traveler names. (needs a connected account)
- `travel.flight-status.get`: Read the live status of a flight by flight number and date: times, gates and delays.
- `travel.flights.search`: Search flight itineraries between two airports for a departure date, with fares where published.
- `travel.hotel-offer.price`: Create a ready-to-book room quote from a private rate reference; returns price, tax, fees and deposit without traveler identity data. (needs a connected account)
- `travel.hotel-offers.search`: Search rates near coordinates, then fetch complete room details one property per job step; at most twenty properties and 100 rates. Only guest ages and categories are sent. (needs a connected account)
- `travel.hotel-prices.calendar`: List the cheapest stay price for each date at a hotel.
- `travel.hotel-rooms.list`: List room rates a hotel offers for a stay.
- `travel.hotel.detail`: Read a hotel's public profile: description, rating, photos and policies.
- `travel.hotels.search`: Find hotel suggestions by name or nearby properties by coordinates; returns private hotel references, no booking availability. (needs a connected account)
- `travel.locations.search`: Find airports and cities by name or coordinates; public airport codes are returned, private source identifiers are hidden. (needs a connected account)
- `travel.packages.search`: Search flight-plus-hotel package deals for a destination and dates.
- `travel.similar-hotels.list`: List alternative hotels and prices for a dated hotel stay.
- `travel.stay.get`: Read a vacation-rental listing's public details.
- `travel.stays.search`: Search hotel and apartment stays in a destination for given dates, with prices.

## Foreclosures and property auctions

Find foreclosures, bank-owned homes and property auctions.

- `housing.auction-courts.list`: List German states and courts that publish property auctions on zvg-portal.de.
- `housing.foreclosure-auction.get`: Read the published facts and documents for a court property auction on zvg-portal.de.
- `housing.foreclosure-auctions.search`: Find court-ordered property auctions by German state and court on zvg-portal.de.
- `real-estate.auction-events.list`: List auction events on auction.com.
- `real-estate.auction-filters.get`: Read auction filters on eauctionsindia.com.
- `real-estate.auction-listings.list`: List auction listings on auction.com.
- `real-estate.auctions.search`: Search auctions on eauctionsindia.com.
- `real-estate.bank-owned.search`: Search bank owned on auction.com.
- `real-estate.foreclosures.search`: Search foreclosures on auction.com.
- `real-estate.private-sales.search`: Search private sales on auction.com.
- `real-estate.upcoming-auctions.list`: List upcoming auctions on bayleys.co.nz.

## Fuel prices

See fuel and charging prices by US state and city.

- `energy.fuel-prices.get`: Read today's fuel prices for a city or station.
- `energy.fuel-prices.regional.list`: List fuel prices by region or location.
- `energy.fuel-products.list`: List a fuel supplier's product definitions.
- `fuel.australian-prices.list-cheapest`: List the cheapest published Australian fuel prices inside a bounding box on petrolspy.com.au.
- `fuel.australian-station.get`: Read public Australian fuel-station details and reported trading hours on petrolspy.com.au.
- `fuel.australian-stations.search`: Find public Australian fuel stations inside a bounding box on petrolspy.com.au.
- `fuel.pl.stations.search`: Search stations — Polish fuel stations.
- `fuel.prices.change-by-metro`: Get price change by metro.
- `fuel.prices.change-by-state`: Get price change by state.
- `fuel.prices.ev-charging`: Get EV charging prices.
- `fuel.prices.highest-recorded`: Get record high prices.
- `fuel.prices.lowest-metro`: Get lowest metro prices.
- `fuel.prices.lowest-state`: Get lowest state prices.
- `fuel.prices.metro-by-state`: Get metro prices by state.
- `fuel.prices.national-average`: Get national average.
- `fuel.prices.news-article.get`: Read a fuel-price news article by its public slug.
- `fuel.prices.state`: Get state gas prices.
- `fuel.prices.state-details`: Get state price detail.
- `fuel.quotes.get`: Read a fuel delivery quote for a postcode and quantity.
- `fuel.station-prices.search`: Search published fuel-station prices within an area and region on gasbuddy.com.
- `fuel.station.get`: Read station on gasbuddy.com. Returns personal data: personal details as published.
- `fuel.stations.list`: List public fuel-station locations and their published prices on gasbuddy.com.
- `fuel.stations.prices.get`: Read a fuel station's current per-litre prices.
- `fuel.stations.search`: Search fuel stations near a Spanish address with current per-litre prices.
- `fuel.stations.search-nearby`: Find public fuel stations near coordinates or a named location on gasbuddy.com.
- `government.au-western-australia-fuel.fuel-types.list`: List fuel types for Western Australian retail fuel information.
- `government.au-western-australia-fuel.monthly-average-prices.get`: Read monthly average prices for Western Australian retail fuel information.
- `government.au-western-australia-fuel.price-trends.get`: Read price trends for Western Australian retail fuel information.
- `government.au-western-australia-fuel.regions.list`: List regions for Western Australian retail fuel information.
- `government.au-western-australia-fuel.station.get`: Read station for Western Australian retail fuel information.
- `government.au-western-australia-fuel.stations.search`: Search stations for Western Australian retail fuel information.
- `government.au-western-australia-fuel.suburbs.list`: List suburbs for Western Australian retail fuel information.
- `government.mx-fuel.municipalities.list`: List municipalities for Mexican retail fuel information.
- `government.mx-fuel.prices.search`: Search prices for Mexican retail fuel information.
- `government.mx-fuel.states.list`: List states for Mexican retail fuel information.

## Geofences

Draw zones, check if a point is inside, and map areas reachable in set time.

- `geo.geofence-layer.create`: Upload up to 1000 same-type geofence geometries with caller-owned attributes, as rows or a ZIP file up to 5 MiB. 2D WGS84 Shapefiles with a numeric ID column and single-ring polygons are supported. Coordinates and attributes may be personal data. Returns an acceptance job; compilation may lag. Worst case $0.00583.
- `geo.geofence-layer.delete`: Permanently delete your geofence layer with explicit confirmation. Worst case $0.00176 including the ownership read. (needs approval)
- `geo.geofence-layer.features`: Read one bounded page of your geofence geometries and chosen attributes. Coordinates may be personal data. Worst case $0.00088.
- `geo.geofence-layer.get`: Read metadata for your private geofence layer. Worst case $0.00088.
- `geo.geofence-layers.list`: List your own private geofence layers on one bounded page. Worst case $0.00088.
- `geo.geofence.check`: Check a precise position against your own geofences. Negative distances mean inside. Positions may be personal data. Worst case $0.00292.
- `geo.isochrone.generate`: Generate reachable-area polygons for one to ten time or distance contours. Location may be personal data; availability depends on account access.

## Google events

Find events happening near you, with time and place.

- `google.events.search`: Search Google for events; returns what is on, when and where.

## Google Maps

Find places on Google Maps and read their reviews, photos and posts.

- `google.maps.contributor-reviews`: List the public Google Maps reviews one contributor has written, with the places reviewed. Returns personal data: one reviewer's public review history, namely the review text, ratings, dates and places reviewed.
- `google.maps.photo-metadata`: Say where and when a Google Maps photo was taken and who posted it. Returns personal data: the display name and profile link of the person who posted the photo.
- `google.maps.posts`: The posts a business has published on its Google Maps listing, with their text, date and links.
- `google.maps.reviews`: List the Google Maps reviews of a place, by its Google place id. Returns personal data: the reviewer's display name, with the review text.
- `google.serp.local`: Google local-pack businesses for a query: name, address, rating, reviews, website.
- `google.serp.maps`: Google Maps places for a query: name, address, rating, reviews, website, location.

## Homes for sale

Search homes and property for sale by location, type and price.

- `housing.amenities.list`: List amenities advertised for a property on rent.com.
- `housing.amenity-counts.get`: Read listing counts grouped by advertised amenity on zapimoveis.com.br.
- `housing.amenity-filters.list`: List amenity names accepted by a housing data source on terracaribbean.com.
- `housing.articles.list`: List housing news and tenant guides from a selected publication.
- `housing.buy-listings.search`: Search buy listings on housing.com. Returns personal data: personal details as published.
- `housing.category-key.get`: Resolve a public property catalogue category name to its search key on m.olx.ro.
- `housing.cities.list`: List cities available in a selected housing data source.
- `housing.housing-listings.search`: Search listings on housing.com. Returns personal data: personal details as published.
- `housing.listing-locations.list`: List cities and their district search keys in a selected property catalogue.
- `housing.listing-locations.search`: Find location names and public search keys in a selected property catalogue.
- `housing.listings-near-location.search`: Search listings near location on housing.com. Returns personal data: personal details as published.
- `housing.listings.search`: Search listings on home.ss.ge. Returns personal data: personal details as published.
- `housing.location-all.search`: Search location all on rightmove.co.uk. Returns personal data: personal details as published.
- `housing.locations.list`: List property-search locations on terracaribbean.com.
- `housing.locations.search`: Find place names and location keys for property searches on the chosen site.
- `housing.nearby-places.get`: Read nearby grocery and restaurant listings for a property on rent.com.
- `housing.nearby-schools.list`: List schools near coordinates, with their type, address and distance on the chosen site.
- `housing.open-houses.list`: List scheduled open-house viewing times for a property on zillow.com.
- `housing.parishes.list`: List parishes available for a country’s property searches on terracaribbean.com.
- `housing.photos.list`: List publicly advertised photos for a property listing on the chosen site.
- `housing.property-listings.search`: Search a selected property catalogue, including residential, land and commercial listings.
- `housing.property-types.list`: List the property type names and public filter keys supported by a catalogue.
- `housing.regions.list`: List regions used to filter property data sources on remax.pt.
- `housing.reviews.get`: Read reviews on ratethelandlord.org. Returns personal data: personal details as published.
- `housing.search-filters.get`: Read the property types, places and time windows supported by a housing catalogue on imot.bg.
- `housing.similar-listings.list`: Find comparable residential advertisements for a property on zoocasa.com.
- `housing.similar-properties.list`: Read comparable real-estate listings for a specified property record on the chosen site.
- `housing.specials.list`: List current rental offers for a property on rent.com.
- `housing.transaction-types.list`: List the sale and rental transaction filters supported by a property catalogue on properati.com.ar.
- `real-estate.alfi-contact-info.get`: Read alfi contact info on text.ai. Returns personal data: personal details as published.
- `real-estate.all-classifieds.search`: Search all classifieds on dubizzle.com.eg. Returns personal data: personal details as published.
- `real-estate.blog-post.get`: Read blog post on ejari.sa.
- `real-estate.blog-posts.list`: List blog posts on ejari.sa.
- `real-estate.cities.list`: List cities on dq.58.com.
- `real-estate.condominiums.list`: List condominiums on 99.co.
- `real-estate.faqs.list`: List faqs on ejari.sa.
- `real-estate.homes-filtered.search`: Search homes filtered on properstar.co.uk. Returns personal data: personal details as published.
- `real-estate.kwmexico-listings.search`: Search listings on kwmexico.mx. Returns personal data: personal details as published.
- `real-estate.listings.search`: Search listings on the chosen site. Returns personal data: personal details as published.
- `real-estate.locations.search`: Search locations from a public property catalogue.
- `real-estate.magazines.list`: List magazines on bayleys.co.nz.
- `real-estate.mortgage.calculate`: Calculate mortgage from a public property catalogue.
- `real-estate.news.list`: List news from a public property catalogue.
- `real-estate.open-viewings.get`: Read open viewings on propertypal.com. Returns personal data: personal details as published.
- `real-estate.photos-with-tags.search`: Search photos with tags on unsplash.com. Returns personal data: personal details as published.
- `real-estate.photos.search`: Search photos on unsplash.com. Returns personal data: personal details as published.
- `real-estate.properties-for-sale.search`: Search properties for sale on the chosen site. Returns personal data: personal details as published.
- `real-estate.properties.search`: Search properties on the chosen site. Returns personal data: personal details as published.
- `real-estate.property-types.list`: List property types from a public property catalogue.
- `real-estate.propertyfinder-properties.search`: Search properties on propertyfinder.ae. Returns personal data: personal details as published.
- `real-estate.propertyguru-properties-for-sale.search`: Search properties for sale on propertyguru.com.sg. Returns personal data: personal details as published.
- `real-estate.regions.list`: List regions on ejar.sa.
- `real-estate.residential-listings.search`: Search residential listings on domain.com.au. Returns personal data: personal details as published.
- `real-estate.search-filters.get`: Read search filters on dubizzle.com.eg.
- `real-estate.search-results.read`: Read search results on centris.ca.
- `real-estate.similar-listings.search`: Search similar listings on auction.com.
- `real-estate.text-olly-link.get`: Read text olly link on server.olly.bot. Returns personal data: personal details as published.

## Local businesses

Find local businesses by keyword and city with their contact details.

- `local.businesses.search`: Find local businesses matching keywords in cities (US unless you set a country) or US ZIP codes: name, website, phone, business email, category, address, review ratings and observed website features. A run of up to 6 searches (keyword times location) is charged per search up front and returns as a job; narrow searches to stay cheap. Runs as a job and returns the businesses when finished.
- `yelp.business.search`: Search businesses on Yelp by what they do and where, with each one's rating, price level and address.

## New homes and developments

Find new homes, developments, floor plans and builder communities.

- `housing.available-new-homes.list`: List move-in ready homes on taylormorrison.com.
- `housing.builder-floor-plan.get`: Read the price and specifications of a home design on terracesatwalnut.com.
- `housing.builder-floor-plans.list`: List home designs on terracesatwalnut.com.
- `housing.communities.list`: List residential developments on the chosen site.
- `housing.communities.search`: Find residential communities by name or district on sh.centanet.com.
- `housing.community-homes.get`: Read floor plans and available homes in a selected development.
- `housing.community.get`: Read a residential community’s location and price statistics on sh.centanet.com.
- `housing.development-catalogue.list`: List developments by segment and location on smdc.com.
- `housing.development-names.search`: Find new property developments by name on smdc.com.
- `housing.development-units.list`: List individual units in new residential developments on sakani.sa.
- `housing.development.get`: Read the location and advertised facts of a new property development on the chosen site.
- `housing.developments.list`: List new property developments with prices and availability on the chosen site.
- `housing.floor-plans.list`: List floor plans, sizes and advertised rental prices for a property on rent.com.
- `housing.home-plans.get`: Read the rooms, floor area and specifications of a selected home plan.
- `housing.home-plans.list`: List floor plans and available homesites in a selected housing community or catalogue.
- `housing.manufactured-home-cities.list`: List cities with manufactured-home parks in a selected state on mhvillage.com.
- `housing.manufactured-home-parks.get`: Read a manufactured-home community name, age rules and pet policy on mhvillage.com.
- `housing.manufactured-home-parks.search`: Find manufactured-home communities by place and amenities on mhvillage.com.
- `housing.manufactured-home-states.list`: List the states with advertised manufactured-home communities on mhvillage.com.
- `housing.new-home-communities.list`: List new housing communities and their availability on the chosen site.
- `housing.new-home-projects.search`: Find new housing developments and their advertised prices on the chosen site.
- `real-estate.communities.list`: List communities from a public property catalogue.
- `real-estate.communities.search`: Search communities on beijing.anjuke.com.
- `real-estate.community-detail.get`: Read community detail on activeadultliving.com. Returns personal data: personal details as published.
- `real-estate.community-inventory.get`: Read community inventory on brookfieldresidential.com.
- `real-estate.community-lifestyles.list`: List community lifestyles on activeadultliving.com.
- `real-estate.community-plans.list`: List community plans from a public property catalogue.
- `real-estate.community-regions.list`: List community regions on activeadultliving.com.
- `real-estate.development-detail.get`: Read development detail on dils.pt. Returns personal data: personal details as published.
- `real-estate.development-units.list`: List development units on dils.pt.
- `real-estate.development.get`: Read development on 99acres.com.
- `real-estate.developments.list`: List developments on dils.pt. Returns personal data: personal details as published.
- `real-estate.developments.recommend`: Find recommended developments on dq.58.com.
- `real-estate.developments.search`: Search developments from a public property catalogue.
- `real-estate.move-in-homes.list`: List move in homes on californiapacifichomes.com.
- `real-estate.multigeneration.search`: Search multigeneration on centris.ca.
- `real-estate.new-listings.search`: Search new listings on casasapo.pt.

## Parking

Find parking near a spot, with live free spaces and prices.

- `places.parking-prices.get`: Read parking tariffs and optional stay fees for a facility returned by parking search. Conditions are retained so a tariff is not mistaken for an unconditional quote.
- `places.parking.availability`: Read live availability for a parking facility returned by parking search. Returns reported spot counts, availability, update times and trends.
- `places.parking.search`: Find parking facilities or on-street parking probability near a point. Facility handles can be used for availability and prices when that data exists. Returns precise locations and addresses.

## Places

Search places, get their details and photos, and count places in an area.

- `geo.cities.search`: Search public cities by name, returning the first page.
- `geo.countries.list`: List up to 300 country codes and names. No personal data is returned.
- `geo.country.get`: Read the name and geographic centre of a country.
- `geo.postal-code.lookup`: Look up the places a postal or ZIP code covers, with their region and coordinates.
- `geo.postal-codes.search`: Search postal codes by city, region or exact code; international searches also accept a postal prefix. Returns location data, with at most 1000 records and no paging.
- `geo.postal-codes.search-bulk`: Run geo.postal-codes.search for one fresh row as one background job. Each result is keyed by your row id; no references in rows. The one-row cap keeps large postal and county lists below the background step output limit.
- `geo.regions.list`: List public geographic regions and their country codes.
- `geo.states.search`: Search public states by name, returning the first page.
- `local.home-service.get`: Read a public home-maintenance service description and advertised offer on promo.atlascare.ca.
- `local.home-services.list`: Read public home-maintenance service categories and page keys on promo.atlascare.ca.
- `local.wellness-branch.get`: Read public wellness-branch addresses, opening hours and visitor information on masmund.cl.
- `local.wellness-faqs.list`: Read public wellness-service questions and answers on masmund.cl.
- `local.wellness-service.get`: Read a public wellness service description and visitor rules on masmund.cl.
- `local.wellness-services.list`: List public wellness services and their page keys on masmund.cl.
- `places.area.insights`: Count places in an area with category, rating, price and status filters. Optional place handles are available for small counts.
- `places.autocomplete`: Suggest places or search queries for partial input. Billed per request; text may contain personal data.
- `places.categories.list`: List public place categories and their localized names.
- `places.category-info.get`: Read a public business category description and search frequency on app.gmbeverywhere.com.
- `places.category-services.get`: Read the services associated with a public business category on app.gmbeverywhere.com.
- `places.details.get`: Get a place name, location and optional contact, hours, photos or reviews. These may contain personal data; oversized photo names have no handles.
- `places.directory-regions.list`: List region names in a public local business directory.
- `places.featured.list`: List featured UAE local business directory places.
- `places.home-stores.list`: List public home-goods retail locations by state on homegoods.com.
- `places.internet-coverage.get`: Read published broadband coverage at an address on altroconsumo.it.
- `places.internet-offers.search`: Compare published broadband offers available at an address on altroconsumo.it.
- `places.parking-cities.list`: List cities covered by the public parking directory on bestparking.com.
- `places.photo.get`: Copy a place photo to platform storage, up to 20 MB. Images may depict people.
- `places.query.parse`: Interpret category, brand and plain-text spans in a place search query. This returns query meaning rather than place suggestions.
- `places.query.parse-bulk`: Run places.query.parse for up to 100 rows as a background job. Each row is keyed by your own id; missing or failed rows are free.
- `places.saved-list.get`: Read the public places in a shared map list on google.com.
- `places.search`: Find places with optional area and category filters. Contact and review groups can contain personal data. Oversized source names have no handles.
- `places.search-nearby`: Find places with optional area and category filters. Contact and review groups can contain personal data. Oversized source names have no handles.
- `places.skate-spots.search`: Search public skate locations by name and spot type on app.getloke.com.
- `places.spot-details.get`: Read spot details on app.getloke.com. Returns personal data: personal details as published.

## Property listing details

Read a property listing in full: price, photos, features and contact.

- `housing.home-listing.get`: Read listing on home.ss.ge. Returns personal data: personal details as published.
- `housing.listing-contact.get`: Read listing contact on padmapper.com. Returns personal data: personal details as published.
- `housing.listing-detail-residence.get`: Read listing detail residence on studapart.com. Returns personal data: personal details as published.
- `housing.listing-detail.get`: Read listing detail on huislijn.nl. Returns personal data: personal details as published.
- `housing.listing-details.get`: Read listing details on imot.bg. Returns personal data: personal details as published.
- `housing.listing-images.get`: Read image links published for a selected property listing.
- `housing.listing.get`: Read the price, location and property facts of one listing on the chosen site.
- `housing.padmapper-listing-detail.get`: Read listing detail on padmapper.com. Returns personal data: personal details as published.
- `housing.properati-listing-detail.get`: Read listing detail on properati.com.ar. Returns personal data: personal details as published.
- `housing.property-type-counts.get`: Read listing counts grouped by property type on zapimoveis.com.br.
- `real-estate.all-listings.get`: Read all listings on crexi.com. Returns personal data: personal details as published.
- `real-estate.city-details.get`: Read city details on airroi.com. Returns personal data: personal details as published.
- `real-estate.daft-listing.get`: Read listing on daft.ie. Returns personal data: personal details as published.
- `real-estate.details.get`: Read details on the chosen site. Returns personal data: personal details as published.
- `real-estate.immoweb-listing.get`: Read listing on immoweb.be. Returns personal data: personal details as published.
- `real-estate.kwmexico-listing.get`: Read listing on kwmexico.mx. Returns personal data: personal details as published.
- `real-estate.listing-contact.get`: Read listing contact on krisha.kz. Returns personal data: personal details as published.
- `real-estate.listing-detail.get`: Read listing detail on the chosen site. Returns personal data: personal details as published.
- `real-estate.listing.get`: Read listing from a public property catalogue.
- `real-estate.listings-batch.get`: Read listings batch on immoweb.be. Returns personal data: personal details as published.
- `real-estate.myhome-listing.get`: Read listing on myhome.ge. Returns personal data: personal details as published.
- `real-estate.photo-details.get`: Read photo details on unsplash.com. Returns personal data: personal details as published.
- `real-estate.property-detail.get`: Read property detail on the chosen site. Returns personal data: personal details as published.
- `real-estate.property-details.get`: Read property details on the chosen site. Returns personal data: personal details as published.
- `real-estate.property-pricing.get`: Read property pricing on cbre.com.
- `real-estate.property-reviews.get`: Read property reviews on amberstudent.com. Returns personal data: personal details as published.
- `real-estate.realtor-details.get`: Read realtor details on immobilienscout24.de. Returns personal data: personal details as published.

## Property prices and trends

Read house prices, rents, sales trends and neighbourhood statistics.

- `housing.area-price-trends.get`: Read published property price trends for a neighbourhood or region on the chosen site.
- `housing.building-history.list`: List dated public building-register versions and statuses on bagviewer.kadaster.nl.
- `housing.building-object.get`: Read a Dutch public building object use, floor area and status on bagviewer.kadaster.nl.
- `housing.building.get`: Read a Dutch public building construction year and status on bagviewer.kadaster.nl.
- `housing.buildings.search`: Find Dutch public building records at map coordinates on bagviewer.kadaster.nl.
- `housing.city-price-insights.get`: Read city property prices grouped by market segment and period on squareyards.com.
- `housing.city-rental-summary.get`: Read a city rental summary and its neighbourhood search keys on padmapper.com.
- `housing.city-sales-trends.list`: List quarterly property-price and transaction series for a city on squareyards.com.
- `housing.district-average-prices.get`: Read district property prices by housing category and weekly date on imot.bg.
- `housing.district-price-history-batch.get`: Read historical property market figures for a page of district and property-type pairs on imot.bg.
- `housing.district-price-history.get`: Read historical property prices, rents and demand for one district on imot.bg.
- `housing.districts.list`: List districts and their property-search location keys on sh.centanet.com.
- `housing.historical-property-photos.list`: List San Francisco assessor parcel photographs and archived document references in stable object-number order, including street address, parcel identifier, record title and public asset link. Filter by parcel prefix and use the page marker.
- `housing.listing-prices.list`: Read current advertised prices for a set of public property keys on idealista.pt.
- `housing.market-coverage.get`: Read the cities and states covered by a property catalogue on lennar-marketplace.locatealpha.com.
- `housing.market-summary.get`: Read a local property market price summary from a selected catalogue.
- `housing.neighbourhood-survey.list`: Read aggregate answers to local neighbourhood questions on trulia.com.
- `housing.neighbourhoods.list`: List named neighbourhoods available in a housing data source on rew.ca.
- `housing.occupancy-object.get`: Read public occupancy-object uses and floor area in the Dutch building register on bagviewer.kadaster.nl.
- `housing.price-bounds.get`: Read the advertised upper price bounds for a housing market on sakani.sa.
- `housing.price-history.list`: List recorded price changes for a property listing on trulia.com.
- `housing.property-comps.get`: Read property comps on lennar-marketplace.locatealpha.com. Returns personal data: personal details as published.
- `housing.property-demographics.get`: Read property demographics on lennar-marketplace.locatealpha.com. Returns personal data: personal details as published.
- `housing.regulated-rents.get`: Read regulated rents in Berkeley, California.
- `housing.rent-registration-statistics.get`: Read rent registration statistics in Berkeley, California.
- `housing.search-counts.get`: Count property listings matching location and price filters on rightmove.co.uk.
- `housing.sold-prices.search`: Find recorded house sale prices by location on zoopla.co.uk.
- `housing.statistic-tables.search`: Find published census tables about housing.
- `housing.statistic-variables.list`: List variables in a published census table.
- `housing.statistics.search`: Read US housing and household statistics by census geography.
- `housing.street-price-reports.list`: List streets with published property price reports in an area on property24.com.
- `housing.top-localities.list`: List city localities ranked by transactions for each market period on squareyards.com.
- `real-estate.area-description.get`: Read area description on booli.se.
- `real-estate.area-prices.get`: Read area prices on dq.58.com.
- `real-estate.house-price-index.get`: Read house price index on beijing.anjuke.com.
- `real-estate.listings-monthly-metrics.get`: Read listings monthly metrics on airroi.com. Returns personal data: personal details as published.
- `real-estate.neighbourhood-statistics.get`: Read neighbourhood statistics on condos.ca.
- `real-estate.records.search`: Search records on daft.ie. Returns personal data: personal details as published.
- `real-estate.reduced-price-listings.search`: Search reduced price listings on casasapo.pt.
- `real-estate.rental-market.get`: Read rental market on airdna.co.
- `real-estate.rental-markets.search`: Search rental markets on airdna.co.
- `real-estate.rental-performance.get`: Read rental performance on airroi.com.
- `real-estate.rental-performance.search`: Search rental performance on airroi.com.
- `real-estate.rental-price-trends.get`: Read rental price trends on amberstudent.com.
- `real-estate.sale-price-trends.get`: Read sale price trends on booli.se.
- `real-estate.sold-listings.search`: Search sold listings on realtor.ca. Returns personal data: personal details as published.
- `real-estate.suburb-profile.get`: Read suburb profile on domain.com.au. Returns personal data: personal details as published.
- `real-estate.valuation.get`: Read an estimated property market price and its low-to-high range on auction.com.

## Public transit

Find transit stations and their next departures.

- `transit.departures.list`: List transit departures using exactly one station handle or point. Precise input locations may be personal data. Worst case $0.00292.
- `transit.station.get`: Read one transit station using its earlier handle. Worst case $0.00292.
- `transit.stations.search`: Find transit stations by name and a bounded circle. Precise search locations may be personal data. Worst case $0.00292.

## Real estate

Search homes for sale or rent, recent sales, and property agents.

- `geo.property.lookup`: Look up US property location and building facts. Explicit financial selection returns owner names, mailing addresses, lenders, tax and deed facts. Financial history is off by default, returns at most five transactions and can cost up to 1.40 USD; nothing scores a person.
- `geo.property.lookup-bulk`: Run geo.property.lookup for up to 2 fresh rows as one background job. Each result is keyed by your row id; no references in rows. Two full records fit below the 4 MB job output limit; financial history allows at most five transactions per record.
- `real-estate.agents.search`: Find residential property agents serving a location. Returns personal data: public professional names, roles and business profile links; no contact details or person scores.
- `real-estate.commercial.brokers.search`: Find commercial property brokers serving a location. Returns personal data: public professional names, roles and business profile links; no contact details or person scores.
- `real-estate.search-homes-for-rent`: Search homes for rent.
- `real-estate.search-homes-for-sale`: Search homes for sale in a location, with filters for a pool, a yard and pet-friendly homes. For a one-step shortlist use home.shortlist.
- `real-estate.search-recently-sold`: Search recently sold homes.

## Real estate agents

Find real estate agents, agencies, brokers and landlords.

- `housing.advertiser-listings.get`: Read advertiser listings on vivareal.com.br. Returns personal data: personal details as published.
- `housing.agent-detail.get`: Read agent detail on rew.ca. Returns personal data: personal details as published.
- `housing.agent-profile.get`: Read agent profile on zillow.com. Returns personal data: personal details as published.
- `housing.agents.search`: Search agents on rew.ca. Returns personal data: personal details as published.
- `housing.dealer-detail.get`: Read dealer detail on mhvillage.com. Returns personal data: personal details as published.
- `housing.dealers.search`: Search dealers on mhvillage.com. Returns personal data: personal details as published.
- `housing.estate-agents.search`: Search estate agents on zoopla.co.uk. Returns personal data: personal details as published.
- `housing.landlord-details.get`: Read landlord details on spotahome.com. Returns personal data: personal details as published.
- `housing.landlord.get`: Read landlord on ratethelandlord.org. Returns personal data: personal details as published.
- `housing.landlords.get`: Read landlords on ratethelandlord.org. Returns personal data: personal details as published.
- `housing.zillow-agents.search`: Search agents on zillow.com. Returns personal data: personal details as published.
- `real-estate.agencies.list`: List agencies on fincaraiz.com.co.
- `real-estate.agencies.search`: Search agencies on athome.lu.
- `real-estate.agency-agents.get`: Read agency agents on athome.lu. Returns personal data: personal details as published.
- `real-estate.agency-details.get`: Read agency details on the chosen site. Returns personal data: personal details as published.
- `real-estate.agency-listings.get`: Read agency listings on dubizzle.com.eg. Returns personal data: personal details as published.
- `real-estate.agency-listings.list`: List agency listings on athome.lu.
- `real-estate.agent-details.get`: Read agent details on the chosen site. Returns personal data: personal details as published.
- `real-estate.agent-directory.list`: List the property agents on athome.lu. Returns personal data: personal details as published.
- `real-estate.agent-listings.get`: Read agent listings on the chosen site. Returns personal data: personal details as published.
- `real-estate.agent-profile.get`: Read agent profile on bayleys.co.nz. Returns personal data: personal details as published.
- `real-estate.beijing-agents.search`: Search agents on beijing.anjuke.com. Returns personal data: personal details as published.
- `real-estate.broker-directory.search`: Search a commercial real-estate broker directory. Returns personal data: personal details as published.
- `real-estate.broker-profile.get`: Read broker profile. Returns personal data: personal details as published.
- `real-estate.broker-registration.check`: Check broker registration on ejar.sa.
- `real-estate.brokers.get`: Read brokers on properstar.co.uk. Returns personal data: personal details as published.
- `real-estate.brokers.search`: Search brokers on ejar.sa. Returns personal data: personal details as published.
- `real-estate.discover-seekers.get`: Read discover seekers on flatmates.com.au. Returns personal data: personal details as published.
- `real-estate.domain-agents.search`: Search agents on domain.com.au. Returns personal data: personal details as published.
- `real-estate.featured-agencies.list`: List featured agencies on dubizzle.com.eg.
- `real-estate.immobiliare-agencies.search`: Search agencies on immobiliare.it. Returns personal data: personal details as published.
- `real-estate.judge-profile.get`: Read judge profile on royalkennelclub.com. Returns personal data: personal details as published.
- `real-estate.moving-leads.get`: Read moving leads on flatmates.com.au. Returns personal data: personal details as published.
- `real-estate.office-listings.list`: List office listings on bayleys.co.nz.
- `real-estate.office-profile.get`: Read office profile on bayleys.co.nz. Returns personal data: personal details as published.
- `real-estate.offices.search`: Search offices on bayleys.co.nz. Returns personal data: personal details as published.
- `real-estate.pararius-agent-listings.get`: Read agent listings on pararius.com. Returns personal data: personal details as published.
- `real-estate.people.search`: Search people on bayleys.co.nz. Returns personal data: personal details as published.
- `real-estate.propertyfinder-agents.search`: Search agents on propertyfinder.ae. Returns personal data: personal details as published.
- `real-estate.propertypal-agent-details.get`: Read agent details on propertypal.com. Returns personal data: personal details as published.
- `real-estate.realtor-agents.search`: Search agents on realtor.com. Returns personal data: personal details as published.
- `real-estate.sales-agents.get`: Read sales agents on zedrealestate.au. Returns personal data: personal details as published.
- `real-estate.seeker-details.get`: Read seeker details on flatmates.com.au. Returns personal data: personal details as published.
- `real-estate.zedrealestate-agent-listings.get`: Read agent listings on zedrealestate.au. Returns personal data: personal details as published.

## Rentals and shared homes

Search rentals, shared flats, student housing and coworking spaces.

- `housing.coworking-location.get`: Read the location, facilities and opening hours of a coworking space on wework.com.
- `housing.coworking-locations.search`: Find coworking buildings by city or area on wework.com.
- `housing.flats-listings.get`: Read flats listings on housing.com. Returns personal data: personal details as published.
- `housing.recent-rentals.list`: List recently advertised rental properties in Greece on xe.gr.
- `housing.rent-listings.search`: Search rent listings on housing.com. Returns personal data: personal details as published.
- `housing.rental-availability.get`: Read a rental listing’s availability dates and stay rules on spotahome.com.
- `housing.rental-units.list`: List available rental units and their advertised terms on rent.com.
- `housing.residence-rooms.list`: List room types offered at a student residence on studapart.com.
- `housing.residences.search`: Find student residences by location and rental price on studapart.com.
- `housing.shared-home-destinations.list`: List destinations with shared-ownership vacation homes and their advertised share prices on pacaso.com.
- `housing.student-accommodation.get`: Read availability, size and facilities of a student accommodation offer on trouverunlogement.lescrous.fr.
- `housing.student-accommodations.search`: Find public student accommodation offers by room type and availability on trouverunlogement.lescrous.fr.
- `housing.student-regions.list`: List regional student housing organisations on trouverunlogement.lescrous.fr.
- `housing.tenant-filter-options.get`: Read location filters used by a tenant information directory on ratethelandlord.org.
- `housing.tenant-resources.list`: List tenant support organisations and their public websites on ratethelandlord.org.
- `real-estate.properties-for-rent.search`: Search properties for rent on ddproperty.com. Returns personal data: personal details as published.
- `real-estate.propertyguru-properties-for-rent.search`: Search properties for rent on propertyguru.com.sg. Returns personal data: personal details as published.
- `real-estate.rental-listing-detail.get`: Read rental listing detail on realestateview.com.au. Returns personal data: personal details as published.
- `real-estate.rental-listings.search`: Search rental listings on the chosen site. Returns personal data: personal details as published.
- `real-estate.rentals.search`: Search rentals on the chosen site. Returns personal data: personal details as published.
- `real-estate.room-types.list`: List room types on amberstudent.com.
- `real-estate.shared-homes.discover`: Discover shared homes on flatmates.com.au.
- `real-estate.student-housing.search`: Search student housing on amberstudent.com.
- `real-estate.wg-gesucht-listings.search`: Search listings on wg-gesucht.de. Returns personal data: personal details as published.

## Restaurants and food delivery

Find restaurants, menus, reviews, reservations and food delivery.

- `dining.areas.list`: List the cities, states or districts a dining or delivery service covers.
- `dining.chains.list`: List restaurant chains, with the site's rating or label.
- `dining.city-coordinates.search`: Find the coordinates of a city for restaurant searches.
- `dining.cuisines.list`: List the cuisine types a dining service labels its restaurants with.
- `dining.delivery-countries.list`: List the countries supported by a food-ordering service.
- `dining.gf-airlines.list`: List the airlines a gluten-free dining directory covers.
- `dining.gf-airports.list`: List the airports a gluten-free dining directory covers.
- `dining.gf-countries.list`: List the countries a gluten-free dining directory covers.
- `dining.gf-features.list`: List the gluten-free features a dining directory tracks.
- `dining.gf-places.list`: List the states a gluten-free dining directory organises places by.
- `dining.hygiene-rankings.list`: List a food-safety inspector's neighbourhood hygiene rankings, a row per area.
- `dining.locations.list`: List a restaurant chain's or food service's locations.
- `dining.menu-categories.list`: List the menu sections a restaurant publishes.
- `dining.menu-item.get`: Read a menu item's record: description, price and options wording.
- `dining.menu.get`: Read a restaurant's or food shop's published menu items.
- `dining.nutrition.list`: Read a menu product's published nutrition table, a row per serving size.
- `dining.order-link.get`: Build the per-item ordering links a store's online menu exposes.
- `dining.reservations.availability`: Check a restaurant's bookable reservation slots for a date and party size.
- `dining.restaurant-reviews.list`: List written restaurant reviews on the selected website. Returns personal data: personal details as published.
- `dining.restaurant.get`: Read a restaurant's public profile: address, hours wording, rating and links.
- `dining.restaurants.search`: Search restaurants available for ordering or dining near a place.
- `dining.review-observation.get`: Read one public restaurant review with its business match and observation details. Returns personal data: personal details as published.
- `dining.safety-features.list`: List the safety features diners report for a restaurant.
- `dining.search-suggestions.list`: List a food platform's search suggestions for a prefix.
- `dining.site-pages.list`: List the content pages a restaurant's website publishes.
- `food.canteens.list`: List the operator's canteens.
- `food.cities.list`: List the cities the delivery service covers.
- `food.delivery-areas.list`: List the delivery areas or cuisine facets the site publishes.
- `food.delivery-eta.get`: Read the current delivery estimate at the site.
- `food.hygiene.search`: Search UK food business hygiene ratings by business name or address; ratings are inspection results, not guarantees of current safety.
- `food.mealboxes.list`: List the meal boxes a grocer publishes for a week.
- `food.menu-links.list`: List a venue's published menu documents.
- `food.venue.detail`: Read one food venue's detail.
- `opentable.restaurant.reviews`: List public diner reviews of one OpenTable restaurant. Returns personal data: public author names, affiliations or review text.
- `restaurants.search`: Search restaurants in one Spanish location with cuisine and price filters.
- `travel.restaurant-guide.get`: Read the public description of a restaurant in a city guide.
- `travel.restaurant-guides.list`: List restaurant recommendations in a city guide.
- `travel.restaurant-openings.list`: List new restaurant openings in a city.

## Roads

Check road traffic, incidents and speed limits, and snap points to roads.

- `roads.attributes.query`: Query map features near a point. Precise input positions may be personal data. Only documented family mappings are served. Worst case placeholder $0.00292.
- `roads.city-congestion.get`: Read published city congestion measures and monthly trends.
- `roads.conditions.list`: List public Taiwan road condition reports on rtr.pbs.gov.tw.
- `roads.congestion-rankings.list`: List city congestion rankings and reported traffic measures.
- `roads.country-congestion.list`: List published city congestion rankings within a country.
- `roads.highway-conditions.list`: List public Taiwan road condition reports for a highway on rtr.pbs.gov.tw.
- `roads.incident.get`: Read a road incident using its earlier handle. Expired incidents are a clean miss. Worst case $0.00292.
- `roads.incidents.list`: List road incidents in a bounded area, including descriptions, closures and impact. Worst case $0.00292.
- `roads.path.snap`: Snap up to 100 path points to roads in one request. Returns personal travel locations.
- `roads.peak-traffic-forecast.list`: List published Dutch peak-period road traffic forecasts on rwsverkeersinfo.nl.
- `roads.point.nearest`: Look up nearest road points at a coordinate. Location may be personal data.
- `roads.point.nearest-bulk`: Run roads.point.nearest for up to 100 rows as one background job. Every row comes back keyed by your own row id: found true with the fields, found false where there is no record, or an error for a row that could not be answered. Rows that could not be answered are free.
- `roads.regional-conditions.list`: List public Taiwan road condition reports for a region on rtr.pbs.gov.tw.
- `roads.speed-limits.get`: Get road speed limits for up to 100 path points where account access is enabled. Path locations may be personal data.
- `roads.traffic-tile.get`: Fetch one raster traffic tile as a private image file, up to 2 MiB. Cost $0.00012. File storage must be configured.
- `roads.traffic.flow`: Read current road speeds and congestion for one bounded area; advanced coverage and lanes are opt-in, costing at most $0.00875.

## Routes

Plan routes, travel times, electric-car trips and multi-stop tours.

- `routes.compute`: Compute routes, travel times and optional geometry, steps, transit or tolls. Inputs contain personal travel and location data.
- `routes.compute-bulk`: Run routes.compute for up to 100 rows as one background job. Every row comes back keyed by your own row id: found true with the fields, found false where there is no record, or an error for a row that could not be answered. Rows that could not be answered are free.
- `routes.compute-electric`: Compute an electric-vehicle route with charging stops from a battery, consumption and charging model. Returns precise route and charging locations. One computation must finish within 25 seconds; an uncertain timeout is final.
- `routes.compute-electric-bulk`: Run routes.compute-electric for up to 20 rows as a background job. Each row is keyed by your own id; missing or failed rows are free.
- `routes.compute-intermodal`: Compute park-and-ride journeys from precise locations. Hold $0.00583 per possible route, at most $0.03498; empty results cost zero.
- `routes.stops.sequence`: Order 2 to 12 stops into a duration-optimized trip. Returns private stop coordinates, distances and optional turn instructions.
- `routes.tours.optimize`: Optimize up to 100 shipments across vehicles as a background job. Personal travel locations are sent for solving; the maximum upstream cost is 3 USD.

## Shared bikes and scooters

Find shared bike and scooter systems, stations, vehicles and prices.

- `transit.shared-cities.list`: List shared-mobility service cities within a country on voi.com.
- `transit.shared-city-prices.get`: Read published shared-mobility vehicle pricing in a city on voi.com.
- `transit.shared-city.get`: Read public shared-mobility city details and supported vehicle types on voi.com.
- `transit.shared-countries.list`: List countries served by the public shared-mobility directory on voi.com.
- `transit.shared-help-articles.list`: List public shared-mobility help questions in a category on voi.com.
- `transit.shared-help-categories.list`: List public shared-mobility help categories on voi.com.
- `transit.shared-help.search`: Search public shared-mobility help questions on voi.com.
- `transit.shared-locations.list`: List public shared-mobility locations and their countries on voi.com.
- `transit.shared-mobility-feeds.list`: List the public shared-mobility data feed names for a region on data.lime.bike.
- `transit.shared-plans.get`: Read public shared-mobility pricing plan descriptions on voi.com.
- `transit.shared-station-status.list`: List public dock and vehicle availability at shared-mobility stations on data.lime.bike.
- `transit.shared-stations.list`: List public shared-mobility station names and coordinates on data.lime.bike.
- `transit.shared-system.get`: Read public shared-mobility system name and timezone on data.lime.bike.
- `transit.shared-vehicle-types.get`: Read public shared-mobility vehicle type descriptions on voi.com.
- `transit.shared-vehicles.list`: List publicly available shared vehicles and reported reservation states on data.lime.bike.

## Time and holidays

Look up time zones, public holidays and business days.

- `time.business-day.check`: Check whether a date is a business day in a country, with the previous and next business days.
- `time.date.parse`: Read a date written in any common style and return it as an ISO 8601 date, flagging ambiguous ones.
- `time.holidays.list`: Public holidays of a country for a year, with each holiday's date, local name and scope.
- `time.nepali-date.get`: Read one Nepali calendar date, its Gregorian equivalent and festivals on hamropatro.com.
- `time.nepali-month.get`: Read a Nepali calendar month with Gregorian dates and public festivals on hamropatro.com.
- `time.timezone.lookup`: The time zone of a place, country or coordinates, with its current local time and UTC offset.
- `time.timezone.lookup-at`: Look up the time zone and UTC offsets at a specified instant and location.

## Tours and activities

Find tours, activities and experiences by city.

- `experiences.dates.list`: List the dates one experience can be booked.
- `experiences.experience.get`: Read one bookable experience's description, address and images.
- `experiences.list`: List bookable experiences with categories and prices.
- `travel.activities.search`: Find things to do in a named city.
- `travel.activity-categories.list`: List the activity categories of an experiences marketplace.
- `travel.activity-dates.list`: List the days an activity can be booked, with that day's lowest price.
- `travel.activity.detail`: Read a tour or activity's public detail: description, price and rating.
- `travel.category-experiences.list`: List category experiences on feverup.com.
- `travel.city-experiences.list`: List city experiences on feverup.com.
- `travel.experience-cities.list`: List experience cities on feverup.com.
- `travel.experience.get`: Read a bookable tour or experience's public details.
- `travel.experiences.search`: Search event experiences on feverup.com.
- `travel.tour-departures.list`: List a day's scheduled tour departures with times and prices.
- `travel.tour-destinations.list`: List destination countries a tour operator covers, with tour and package counts
- `travel.tour-packages.list`: List bookable tour packages for one destination country, with prices and durations

## Tractors and machinery

Look up tractors, trucks and machinery listings and specs.

- `marketplace.machinery-filters.get`: Read machinery filters on machineseeker.com.
- `marketplace.related-machinery.list`: List related machinery on machineseeker.com.
- `marketplace.trucks.list`: List public trucks on firetruckmall.com.
- `vehicles.lawn-tractor-brands.list`: List lawn tractor brands and their published model ranges.
- `vehicles.tractor-brands.list`: List agricultural tractor brands and their published model ranges.
- `vehicles.tractor-models.list`: List tractor models for a brand.
- `vehicles.tractor-news.list`: List public tractor news article titles and paths.
- `vehicles.tractor-series.list`: List related tractor models in a product series.
- `vehicles.tractor-shows.list`: List tractor shows with their stated dates and locations.
- `vehicles.tractor-transmission.get`: Read a tractor transmission type and gear description.

## Trains, buses and transit

Plan train, bus and transit journeys with stops, routes, fares and alerts.

- `bus.cities.search`: Look up the cities a bus marketplace sells between, with their ids.
- `bus.journeys.search`: Search bus and coach trips between two cities on a date.
- `bus.routes.list`: List the routes of a bus network.
- `bus.service.detail.get`: Read a bus service's boarding and dropping points and summary.
- `bus.service.seats.get`: Read a bus service's seat layout with per-seat availability and fares.
- `bus.stops.list`: List the bus stops of a network, with their codes.
- `bus.trip.availability.get`: Read available seats and total fare for a specific coach departure.
- `bus.trip.stops.get`: Read a scheduled bus trip's stop-by-stop timetable.
- `rail.cheapest-fare.get`: Find the cheapest available train fare for a route and date
- `rail.discounts.list`: List a passenger railroad's standing discount programmes
- `rail.fares.get`: Read the fare breakdown for a train, class and date.
- `rail.journeys.search`: Search train journeys between two stations on a date, with times and fares.
- `rail.seats.availability`: Check seat availability for a train, class and date.
- `rail.stations.list`: List a passenger railroad's stations with codes and access details
- `rail.stations.search`: Look up railway stations by name and return railway station codes.
- `rail.support-contacts.get`: Read a passenger railroad support phone numbers, contact hours and common questions. Returns personal data: personal details as published.
- `rail.train.schedule.get`: Read a train's stop-by-stop timetable.
- `rail.train.status.get`: Read a train's live running position, delay and next stops.
- `rail.trains.search`: Look up trains by number or name.
- `transit.board.list`: List the live departures or arrivals board at a station or stop.
- `transit.bus-routes.list`: List public Boston bus route names and codes on mbta.com.
- `transit.commuter-lines.list`: List public Boston commuter rail line names and codes on mbta.com.
- `transit.disruptions.list`: List current service disruptions on a transit network.
- `transit.journey.detail.get`: Read the legs, stops and fares of one planned public-transport journey
- `transit.journeys.search`: Search scheduled connections between two stops or ports on a date, across local transit.
- `transit.line-patterns.list`: List public transit route patterns, stops and paths for a line on gtt.to.it.
- `transit.line.get`: Read public transit line names, service status and route patterns on citymapper.com.
- `transit.lines.list`: List public Turin transit lines within a service area on gtt.to.it.
- `transit.lines.search`: Search public transit lines by name in a city network on citymapper.com.
- `transit.network-cities.list`: List public transit network cities and their region selectors on citymapper.com.
- `transit.network-status.get`: Read service status across the public lines of a city transit network on citymapper.com.
- `transit.networks.list`: List the regional transit fare associations of a country.
- `transit.rail-alerts.get`: Read current Bay Area rail service and accessibility advisories on bart.gov.
- `transit.rail-stations.list`: List public Bay Area rail station names and codes on bart.gov.
- `transit.route-alerts.list`: List published transit route alerts and their causes on mbta.com.
- `transit.route-pattern.get`: Read one public transit route pattern, its stops and path on gtt.to.it.
- `transit.route-schedule.get`: Read the public departure schedule of a transit route pattern on gtt.to.it.
- `transit.route-schedules.list`: List public line schedules within a transit service area on gtt.to.it.
- `transit.service-areas.list`: List public Turin transit service areas and their codes on gtt.to.it.
- `transit.stop-accessibility.get`: Read public transit stop accessibility and nearby accessible facilities on gtt.to.it.
- `transit.stops.search`: Look up local transit stops by name and return transit stop codes.
- `transit.subway-lines.list`: List public Boston subway line names and codes on mbta.com.

## Travel guides

Read travel guides, sights, destinations and opening hours.

- `travel.city-guides.list`: List cities with public visitor guides.
- `travel.destinations.popular.list`: List a booking site's most popular destination cities with hotel counts
- `travel.destinations.suggest`: Resolve free-text destination names to the ids a travel site's own search accepts.
- `travel.directory.search`: Search a travel directory's venues, events and guides by keyword.
- `travel.guide.get`: Read one travel guide's full text, including visa steps and fees Returns personal data: personal details as published.
- `travel.guides.list`: List published travel guides, optionally by topic tag Returns personal data: personal details as published.
- `travel.opening-hours.list`: List dated opening hours and closures for a venue's attractions.
- `travel.parking.search`: Search parking facilities near a point for a time window, with prices where published.
- `travel.places.search`: Look up airports, cities and stations by name, city or code.
- `travel.route-map.list`: List the destinations served nonstop from an airport or station.
- `travel.routes.search`: Compare route options between two places across flying, rail, road and sea.
- `travel.sight.get`: Read a sight's public detail.
- `travel.sights.list`: List visitor sights and landmarks in a city guide.
- `travel.venue-filters.get`: Read venue filters on eventup.com.
- `travel.venue-suggestions.search`: Search venue suggestions on eventup.com.
- `travel.visa-appointments.list`: List destination countries with open visa-appointment slots for applicants resident in one country

## Tripadvisor

Search Tripadvisor places, hotels and restaurants and read their reviews.

- `tripadvisor.place.detail`: A Tripadvisor place by its id, with its description, type, rating, review count and location.
- `tripadvisor.place.reviews`: Reviews of a Tripadvisor place, with each star rating, title, text and date.
- `tripadvisor.search`: Search Tripadvisor places, hotels and restaurants by keyword.

## Vehicle history and registrations

Check a vehicle by plate or VIN: history, registration, value and tax.

- `autos.deregistration-value.get`: Read a used car's deregistration value and certificate entitlements
- `autos.swedish-ownership-history.get`: Read the published ownership history for a Swedish vehicle registration. Returns personal data: personal details as published.
- `autos.swedish-registration.get`: Read the published vehicle record and dated history for a Swedish registration number. Returns personal data: personal details as published.
- `autos.swedish-registrations.search`: Find Swedish vehicle registrations matching a partial plate. Returns personal data: personal details as published.
- `autos.swedish-vehicle-history.get`: Read the dated events published for a Swedish vehicle registration. Returns personal data: personal details as published.
- `autos.tax-provinces.list`: List the provinces of residence one region's vehicle-tax calculation accepts
- `autos.valuation.get`: Read a vehicle's market value range from its registration number
- `autos.vehicle-tax.estimate`: Estimate Italian vehicle tax from a plate lookup or declared vehicle data. Returns personal data: personal details as published.
- `autos.vin-history-summary.get`: Read accident, ownership and service-history flags for a vehicle identification number. Returns personal data: personal details as published.
- `autos.vin.lookup`: vin preview from its source.
- `vehicles.recall.get`: Read a vehicle safety recall by its public campaign number.
- `vehicles.vehicle-by-plate.get`: Read vehicle by plate — Italian vehicle registry. Returns personal data: personal details as published.
- `vehicles.vin.decode`: Resolve a VIN to the vehicle it identifies.

## Vehicles

Search new and used cars, auctions, lease deals and fault codes.

- `autos.auctions.search-listings`: Search auction listings.
- `autos.lease-deals`: Get lease deals.
- `autos.makes`: List makes.
- `autos.obd-codes`: Look up OBD-II code.
- `autos.search-inventory`: Search inventory.
- `autos.search-listings`: Search vehicle listings.
- `autos.search-new-listings`: Search new car listings.
- `autos.search-used-listings`: Search used car listings.
- `autos.years`: List model years.
- `vehicles.registration.verify`: Read vehicle registration facts. Keeper name and address are returned only when requested; no driver assessment. Maximum estimate USD 0.57.

## Visas and travel documents

Check visa requirements, passport rankings, immigration rules and eSIM plans.

- `esim.destinations.list`: List the destinations an eSIM shop covers, with plan counts and prices.
- `esim.plans.list`: List eSIM data plans for a destination, with data allowances and prices.
- `government.fi-immigration.guidance.get`: Finnish residence-permit guidance for a public application topic, including section text and useful links.
- `government.fi-immigration.help-topics.get`: Read help topics for Finnish immigration public guidance.
- `government.fi-immigration.permit-categories.list`: List permit categories for Finnish immigration public guidance.
- `government.gb-visas.nationalities.list`: List nationalities for UK public visa guidance.
- `government.gb-visas.visa.check`: Read visa for UK public visa guidance.
- `government.nz-migration.filters.list`: Read available filter options for occupation insight queries.
- `government.nz-migration.occupation.get`: Read comprehensive migration data for a single occupation identified by its ANZSCO code.
- `government.nz-migration.occupations.search`: Full-text search over Australian skilled migration occupations by name or ANZSCO code. Returns matching occupations with their codes and titles. Results are aut
- `government.residency.programs.list`: Browse residence permits available through capital contributions, with processing times, minimum funds and stay requirements.
- `government.us-work-eligibility.enrolments.search`: Check US organisation enrolments in the work-eligibility screening programme, with registration status and dates.
- `government.visa-options.list`: List visa options in Germany.
- `government.visa-validation-rules.get`: Read visa validation rules in Germany.
- `visa.countries.list`: List the countries a visa service or guide covers, with fees where published.
- `visa.requirements.get`: Read a destination country's visa requirements, validity and fees.
- `visa.types.list`: List the visa types a relocation guide documents for a country.
- `visas.centers.list`: List visa application centres, optionally for an origin and destination.
- `visas.destinations.list`: List the destination countries a visa service or guide covers.
- `visas.news.list`: List a visa agency's published news.
- `visas.passport-ranking.list`: List countries ranked by passport travel freedom.
- `visas.passport.get`: Read a country's passport details: rank and destination counts.
- `visas.requirement.check`: Check whether a destination requires a visa for an origin country's passport.
- `visas.types.list`: List the visa categories published for a visa route.

## Weather alerts

Get official warnings, fire risk and weather events for a place.

- `weather.alert.get`: Read a weather warning through the handle returned by weather.alerts.list.
- `weather.alerts.list`: Official government weather warnings at geographic coordinates, with optional handles for reading their details. Up to 10 warnings; estimated maximum $0.0198.
- `weather.events.search`: Search active-fire detections or modeled weather event feeds at geographic coordinates or an explicit area, with supported filters. Government-only warning lists use weather.alerts.list.
- `weather.fire-index.get`: Fire weather index at geographic coordinates on an explicitly selected scientific model; at most 50 records.

## Weather forecast

Get current weather and forecasts for any place or route.

- `ski.snow-report.get`: A ski resort's daily snow report in centimetres, with recent snowfall, base depth and conditions.
- `ski.webcams.list`: Live mountain cameras at a ski resort, with camera names and image links.
- `surf.spot-forecast.get`: Hourly surf forecast for a spot, with swell, wave, wind and tide readings as the site reports them.
- `surf.spots.search`: Find surf breaks by name, with coordinates, bottom type and the break's forecast identifier.
- `weather.city-conditions.get`: Current weather conditions for a city by name, with temperature, wind, humidity and pressure.
- `weather.city-forecast.daily`: Daily high and low temperatures for a city by name, with the day summary when the site publishes one.
- `weather.conditions.evaluate`: Evaluate weather thresholds at geographic coordinates over the available forecast, with at most 20 tests and 50 records. Estimated maximum $0.018.
- `weather.current.get`: Current weather at geographic coordinates, with temperatures, wind and precipitation rates when measured.
- `weather.forecast.daily`: Daily weather forecast for geographic coordinates, with explicit day periods, extrema and precipitation amounts, up to 50 records.
- `weather.forecast.get`: Current weather and a seven-day forecast for a city or coordinates.
- `weather.forecast.hourly`: Hourly weather forecast for geographic coordinates, up to 50 records per page. Advanced and extended access are explicit.
- `weather.forecast.quarter-hourly`: Weather forecast in 15-minute intervals for geographic coordinates, up to 50 records per page. Advanced and extended access are explicit.
- `weather.forecast.three-hourly`: Weather forecast in actual three-hour intervals for geographic coordinates, up to 50 records per page. Advanced and extended access are explicit.
- `weather.lightning.list`: Recently detected lightning strikes with position, time and peak current when the network reports it.
- `weather.list-cities`: List cities.
- `weather.observations.latest`: Latest observations for weather stations by identifier, with temperature and position per station.
- `weather.periods.list`: Read official forecast periods for US geographic coordinates.
- `weather.precipitation.forecast`: Minute precipitation rates at geographic coordinates, for up to 60 minutes; missing rates are omitted.
- `weather.route-conditions.get`: Evaluate weather conditions along up to 20 geographic route segments, returning your own segment keys. Estimated maximum $0.36 per route.
- `weather.route-conditions.get-bulk`: Evaluate weather conditions for up to 10 routes as one background job, up to 20 segments per route. Each row is echoed by your own id. Estimated maximum $3.60; failed rows are free.
- `weather.route-point.get`: Weather and optional road-surface conditions at one geographic route point and time. Estimated maximum $0.018.
- `weather.search`: Search locations.
- `weather.stations.get`: Metadata for a weather station by its identifier, with position, elevation and time zone.
- `weather.summary.get`: Generated weather summary for a geographic location and period. No conversation is retained by this operation; links are excluded. Estimated maximum $0.018.
- `weather.timeline.get`: Typed weather measurements at geographic coordinates or an explicit bounded area, up to 50 records. Advanced layers and archives are explicit. Estimated maximum $0.018.

## Weather history and climate

Look up past weather, climate averages and solar data.

- `climate.gas.history`: Atmospheric greenhouse-gas concentration series for a gas, with the seasonal cycle or trend values the network publishes.
- `climate.temperature-anomaly.history`: Global monthly surface temperature anomalies since 1880, with the land and station series beside each other.
- `weather.accumulation.precipitation`: Accumulated precipitation at geographic coordinates over a bounded date window, up to 50 rows. All precipitation is included; no threshold is applied.
- `weather.accumulation.temperature`: Accumulated temperature at geographic coordinates over a bounded date window, up to 50 rows. Returns a Kelvin indicator; no degree-day calculation is claimed.
- `weather.climate.normals`: Daily climate normals at geographic coordinates, within one non-leap year, up to 50 days per page. Baseline years are omitted unless confirmed. Estimated maximum $0.018.
- `weather.climate.statistics`: Historical calendar statistics for geographic coordinates, with temperature distributions converted to Celsius and up to 50 day groups per page.
- `weather.history.daily`: Historical daily weather for geographic coordinates, within a 31-day window and 50 records per page. Archive retrieval is explicit.
- `weather.history.get`: Historical hourly weather for geographic coordinates, within a 31-day window and 50 records per page. Archive retrieval is explicit.
- `weather.solar.irradiance`: Solar irradiance at geographic coordinates for one date. Instantaneous and mean irradiance are distinct; paid mean access requires allowPaid, estimated maximum $0.15.
