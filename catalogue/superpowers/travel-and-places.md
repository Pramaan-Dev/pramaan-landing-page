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
- `geo.address.validation-feedback.send`: Record which address version was used after validation. Changes an external record.
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
- `weather.air-quality.world-quality`: Get world air quality.

## Apple Maps

Look up a place on Apple Maps with its details and rating.

- `apple-maps.place.detail`: A place on Apple Maps by its id, with its name, category, address, contact website and rating.
- `apple-maps.place.ratings`: The rating of a place on Apple Maps, by the place's id - its average, the highest possible and how many ratings it has.

## Bing Maps

Search businesses on Bing Maps with addresses, websites and ratings.

- `bing.maps.search`: Search businesses on Bing Maps by keyword, with their addresses, websites and ratings.

## Custom maps

Build private map data and styles, and render map images and tiles.

- `maps.dataset.create`: Create a private geographic dataset. Its name and description may contain personal text.
- `maps.dataset.delete`: Delete your geographic dataset. Stored content may include private coordinates or text.
- `maps.dataset.feature.delete`: Delete a geographic feature in your own dataset. It may contain private coordinates and text.
- `maps.dataset.feature.get`: Get a geographic feature in your own dataset. It may contain private coordinates and text.
- `maps.dataset.feature.put`: Insert or replace one geographic feature using your own stable name. Coordinates and properties may contain personal data.
- `maps.dataset.features.list`: List geographic features in your own dataset, including private coordinates and properties.
- `maps.dataset.get`: Get your geographic dataset. Stored content may include private coordinates or text.
- `maps.dataset.update`: Update your geographic dataset. Stored content may include private coordinates or text.
- `maps.datasets.list`: List your geographic datasets, including names and descriptions.
- `maps.features.query`: Query public geographic features at a coordinate. Coordinates may be private; up to 50 results.
- `maps.feedback.create`: Report a map error to the map maker. Sends coordinates and your text; reaches no person.
- `maps.feedback.get`: Read your map error report, including its coordinates and personal text.
- `maps.feedback.list`: List your map error reports, including private coordinates and text.
- `maps.image.render`: Render a static map from a public theme with optional private coordinates and overlays. Up to 1280 logical pixels per side at scale two; image capped at 20 MB.
- `maps.style.create`: Create a map style from public geographic data. Layer and style names may contain private text.
- `maps.style.delete`: Permanently delete your map style.
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

- `google.flights.search`: Search Google Flights for one day's flights between two airports; returns the best options with price and duration.
- `google.hotel.detail`: Get one hotel from Google Hotels by its id, with address, star class and description.
- `google.hotels.search`: Search Google Hotels for a stay; returns hotels with price, stars and rating.
- `travel.flight-offer.get`: Retrieve current flight details, fare, expiry and optional ancillary prices from a private offer reference. (needs a connected account)
- `travel.flight-offer.price`: Refresh a flight fare for account-balance payment; service and card references require a future scoped resolver. (needs a connected account)
- `travel.flight-offers.search`: Search bookable flight offers for at most six journey legs and nine passengers; returns no traveler names. Unsupported split tickets and auxiliary credit references are refused. (needs a connected account)
- `travel.flight-seatmaps.get`: Retrieve cabin layouts and passenger-specific seat prices from a private flight offer; no traveler names. (needs a connected account)
- `travel.hotel-offer.price`: Create a ready-to-book room quote from a private rate reference; returns price, tax, fees and deposit without traveler identity data. (needs a connected account)
- `travel.hotel-offers.search`: Search rates near coordinates, then fetch complete room details one property per job step; at most twenty properties and 100 rates. Only guest ages and categories are sent. (needs a connected account)
- `travel.hotels.search`: Find hotel suggestions by name or nearby properties by coordinates; returns private hotel references, no booking availability. (needs a connected account)
- `travel.locations.search`: Find airports and cities by name or coordinates; public airport codes are returned, private source identifiers are hidden. (needs a connected account)

## Fuel prices

See fuel and charging prices by US state and city.

- `fuel.prices.change-by-metro`: Get price change by metro.
- `fuel.prices.change-by-state`: Get price change by state.
- `fuel.prices.ev-charging`: Get EV charging prices.
- `fuel.prices.highest-recorded`: Get record high prices.
- `fuel.prices.lowest-metro`: Get lowest metro prices.
- `fuel.prices.lowest-state`: Get lowest state prices.
- `fuel.prices.metro-by-state`: Get metro prices by state.
- `fuel.prices.national-average`: Get national average.
- `fuel.prices.state`: Get state gas prices.
- `fuel.prices.state-details`: Get state price detail.

## Geofences

Draw zones, check if a point is inside, and map areas reachable in set time.

- `geo.geofence-layer.create`: Upload up to 1000 same-type geofence geometries with caller-owned attributes, as rows or a ZIP file up to 5 MiB. 2D WGS84 Shapefiles with a numeric ID column and single-ring polygons are supported. Coordinates and attributes may be personal data. Returns an acceptance job; compilation may lag. Worst case $0.00583.
- `geo.geofence-layer.delete`: Permanently delete your geofence layer with explicit confirmation. Worst case $0.00176 including the ownership read.
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

## Local businesses

Find local businesses by keyword and city with their contact details.

- `local.businesses.search`: Find local businesses matching keywords in cities (US unless you set a country) or US ZIP codes: name, website, phone, business email, category, address, review ratings and observed website features. A run of up to 6 searches (keyword times location) is charged per search up front and returns as a job; narrow searches to stay cheap. Runs as a job and returns the businesses when finished.
- `yelp.business.search`: Search businesses on Yelp by what they do and where, with each one's rating, price level and address.

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
- `places.area.insights`: Count places in an area with category, rating, price and status filters. Optional place handles are available for small counts.
- `places.autocomplete`: Suggest places or search queries for partial input. Billed per request; text may contain personal data.
- `places.categories.list`: List public place categories and their localized names.
- `places.details.get`: Get a place name, location and optional contact, hours, photos or reviews. These may contain personal data; oversized photo names have no handles.
- `places.photo.get`: Copy a place photo to platform storage, up to 20 MB. Images may depict people.
- `places.query.parse`: Interpret category, brand and plain-text spans in a place search query. This returns query meaning rather than place suggestions.
- `places.query.parse-bulk`: Run places.query.parse for up to 100 rows as a background job. Each row is keyed by your own id; missing or failed rows are free.
- `places.search`: Find places with optional area and category filters. Contact and review groups can contain personal data. Oversized source names have no handles.
- `places.search-nearby`: Find places with optional area and category filters. Contact and review groups can contain personal data. Oversized source names have no handles.

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
- `real-estate.search-homes-for-sale`: Search homes for sale.
- `real-estate.search-recently-sold`: Search recently sold homes.

## Roads

Check road traffic, incidents and speed limits, and snap points to roads.

- `roads.attributes.query`: Query map features near a point. Precise input positions may be personal data. Only documented family mappings are served. Worst case placeholder $0.00292.
- `roads.incident.get`: Read a road incident using its earlier handle. Expired incidents are a clean miss. Worst case $0.00292.
- `roads.incidents.list`: List road incidents in a bounded area, including descriptions, closures and impact. Worst case $0.00292.
- `roads.path.snap`: Snap up to 100 path points to roads in one request. Returns personal travel locations.
- `roads.point.nearest`: Look up nearest road points at a coordinate. Location may be personal data.
- `roads.point.nearest-bulk`: Run roads.point.nearest for up to 100 rows as one background job. Every row comes back keyed by your own row id: found true with the fields, found false where there is no record, or an error for a row that could not be answered. Rows that could not be answered are free.
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

## Time and holidays

Look up time zones, public holidays and business days.

- `time.business-day.check`: Check whether a date is a business day in a country, with the previous and next business days.
- `time.date.parse`: Read a date written in any common style and return it as an ISO 8601 date, flagging ambiguous ones.
- `time.holidays.list`: Public holidays of a country for a year, with each holiday's date, local name and scope.
- `time.timezone.lookup`: The time zone of a place, country or coordinates, with its current local time and UTC offset.
- `time.timezone.lookup-at`: Look up the time zone and UTC offsets at a specified instant and location.

## Tripadvisor

Search Tripadvisor places, hotels and restaurants and read their reviews.

- `tripadvisor.place.detail`: A Tripadvisor place by its id, with its description, type, rating, review count and location.
- `tripadvisor.place.reviews`: Reviews of a Tripadvisor place, with each star rating, title, text and date.
- `tripadvisor.search`: Search Tripadvisor places, hotels and restaurants by keyword.

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

## Weather alerts

Get official warnings, fire risk and weather events for a place.

- `weather.alert.get`: Read a weather warning through the handle returned by weather.alerts.list.
- `weather.alerts.list`: Official government weather warnings at geographic coordinates, with optional handles for reading their details. Up to 10 warnings; estimated maximum $0.0198.
- `weather.events.search`: Search active-fire detections or modeled weather event feeds at geographic coordinates or an explicit area, with supported filters. Government-only warning lists use weather.alerts.list.
- `weather.fire-index.get`: Fire weather index at geographic coordinates on an explicitly selected scientific model; at most 50 records.

## Weather forecast

Get current weather and forecasts for any place or route.

- `weather.conditions.evaluate`: Evaluate weather thresholds at geographic coordinates over the available forecast, with at most 20 tests and 50 records. Estimated maximum $0.018.
- `weather.current.get`: Current weather at geographic coordinates, with temperatures, wind and precipitation rates when measured.
- `weather.forecast.daily`: Daily weather forecast for geographic coordinates, with explicit day periods, extrema and precipitation amounts, up to 50 records.
- `weather.forecast.get`: Current weather and a seven-day forecast for a city or coordinates.
- `weather.forecast.hourly`: Hourly weather forecast for geographic coordinates, up to 50 records per page. Advanced and extended access are explicit.
- `weather.forecast.quarter-hourly`: Weather forecast in 15-minute intervals for geographic coordinates, up to 50 records per page. Advanced and extended access are explicit.
- `weather.forecast.three-hourly`: Weather forecast in actual three-hour intervals for geographic coordinates, up to 50 records per page. Advanced and extended access are explicit.
- `weather.list-cities`: List cities.
- `weather.precipitation.forecast`: Minute precipitation rates at geographic coordinates, for up to 60 minutes; missing rates are omitted.
- `weather.route-conditions.get`: Evaluate weather conditions along up to 20 geographic route segments, returning your own segment keys. Estimated maximum $0.36 per route.
- `weather.route-conditions.get-bulk`: Evaluate weather conditions for up to 10 routes as one background job, up to 20 segments per route. Each row is echoed by your own id. Estimated maximum $3.60; failed rows are free.
- `weather.route-point.get`: Weather and optional road-surface conditions at one geographic route point and time. Estimated maximum $0.018.
- `weather.search`: Search locations.
- `weather.summary.get`: Generated weather summary for a geographic location and period. No conversation is retained by this operation; links are excluded. Estimated maximum $0.018.
- `weather.timeline.get`: Typed weather measurements at geographic coordinates or an explicit bounded area, up to 50 records. Advanced layers and archives are explicit. Estimated maximum $0.018.

## Weather history and climate

Look up past weather, climate averages and solar data.

- `weather.accumulation.precipitation`: Accumulated precipitation at geographic coordinates over a bounded date window, up to 50 rows. All precipitation is included; no threshold is applied.
- `weather.accumulation.temperature`: Accumulated temperature at geographic coordinates over a bounded date window, up to 50 rows. Returns a Kelvin indicator; no degree-day calculation is claimed.
- `weather.climate.normals`: Daily climate normals at geographic coordinates, within one non-leap year, up to 50 days per page. Baseline years are omitted unless confirmed. Estimated maximum $0.018.
- `weather.climate.statistics`: Historical calendar statistics for geographic coordinates, with temperature distributions converted to Celsius and up to 50 day groups per page.
- `weather.history.daily`: Historical daily weather for geographic coordinates, within a 31-day window and 50 records per page. Archive retrieval is explicit.
- `weather.history.get`: Historical hourly weather for geographic coordinates, within a 31-day window and 50 records per page. Archive retrieval is explicit.
- `weather.solar.irradiance`: Solar irradiance at geographic coordinates for one date. Instantaneous and mean irradiance are distinct; paid mean access requires allowPaid, estimated maximum $0.15.
