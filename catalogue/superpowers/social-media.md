# Superpowers: Social media

Posts, profiles, comments and trends on every network, and posting from your accounts.

## Apple Music

Read public Apple Music songs, albums and artist pages.

- `apple-music.album.detail`: Read a public Apple Music album title, release information and up to fifty tracks. Returns personal data: Public release credits may identify artists or rights holders; no contact details or account identifiers..
- `apple-music.artist.detail`: Read a public Apple Music artist or band page, with up to fifty songs and albums. Returns personal data: The public artist or band name and editorial biography; no contact details or account identifiers..
- `apple-music.songs.search`: Search the public song catalogue and return grouped song titles and their public links.
- `apple-music.track.detail`: Read the public title, album, page and explicit-content flag of an Apple Music song.

## Bilibili

Search Bilibili videos, comments, live rooms and trending topics.

- `bilibili.feed.anime`: Read public anime feed sections and programme titles.
- `bilibili.feed.cinema`: Read public cinema feed sections and programme titles.
- `bilibili.feed.popular`: Bilibili popular videos feed. Returns personal data: public names, profile details and published content.
- `bilibili.feed.recommended`: Bilibili home feed recommendations. Returns personal data: public names, profile details and published content.
- `bilibili.live.areas`: List live streaming categories on Bilibili.
- `bilibili.live.room.detail`: Get a live room's details on Bilibili. Returns personal data: the streamer's room title.
- `bilibili.search.general`: Bilibili search across all content by keyword. Returns personal data: public names and published profile content.
- `bilibili.search.trending`: Get trending search keywords on Bilibili.
- `bilibili.search.videos`: Search Bilibili videos by keyword; returns titles, uploaders, plays and durations.
- `bilibili.user.dynamics`: List public activity posts from a Bilibili account. Returns personal data: Published profile names, descriptions, posts and public engagement totals..
- `bilibili.user.favorites`: List a user's favorite folders on Bilibili. Returns personal data: the titles of the user's public favorite folders.
- `bilibili.user.profile`: Read a Bilibili account’s public name, description and profile link. Returns personal data: Published profile names, descriptions, posts and public engagement totals..
- `bilibili.user.relation-stats`: Read public follower and following totals for a Bilibili account. Returns personal data: Published profile names, descriptions, posts and public engagement totals..
- `bilibili.user.resolve`: Turn a Bilibili share link to an account into the account's numeric user id. Returns personal data: the account's public Bilibili id.
- `bilibili.user.videos`: List public video records from a Bilibili account. Returns personal data: Published profile names, descriptions, posts and public engagement totals..
- `bilibili.video.comments`: List comments on a Bilibili video by its numeric aid (videoId), optionally with its bvid.
- `bilibili.video.danmaku`: Get a video's danmaku bullet comments on Bilibili. Returns personal data: the text of viewers' on-screen comments.
- `bilibili.video.detail`: Get a video's metadata & stats on Bilibili.
- `bilibili.video.parts`: List a Bilibili video's parts (pages), with each part's title and length.
- `bilibili.video.resolve`: Turn a Bilibili video's BV id (as in its address) into its older numeric AV id.
- `bilibili.video.subtitles`: Get a video's subtitles on Bilibili.

## Bluesky

Read public Bluesky profiles and posts.

- `bluesky.user.posts`: Read the first page of public posts for a Bluesky handle, omitting author profiles.
- `bluesky.user.profile`: Read a Bluesky account's public profile, with its display name, description, avatar and follower counts. Returns personal data: the account's public handle, display name, description and photo.

## Comments, messages and mentions

Read and reply to comments, direct messages and mentions on your accounts.

- `social.comments.hide`: Hide a comment on your post from everyone but its author; undo with social.comments.unhide.
- `social.comments.list`: List the comments on one of your posts, or the replies to one comment.
- `social.comments.posts.list`: List your posts that have comments, newest first; use a post id with social.comments.list.
- `social.comments.reply`: Reply publicly to a comment (or comment on a post) from your connected account. Send an Idempotency-Key.
- `social.comments.unhide`: Make a comment you hid with social.comments.hide visible again.
- `social.inbox.conversation.delete`: Permanently erase a stored inbox conversation and its messages. The original platform thread and contact record remain. Preview by default; send an Idempotency-Key when deleting.
- `social.inbox.conversations.list`: List direct-message conversations on your connected social accounts, newest first.
- `social.inbox.message.reply`: Send a direct-message reply in a conversation on your connected account. Send an Idempotency-Key.
- `social.inbox.message.share`: Share an owned Instagram post or a heart sticker in an existing conversation. Send an Idempotency-Key. (needs approval)
- `social.inbox.messages.list`: List the messages in one direct-message conversation, newest first.
- `social.mentions.list`: List posts that mention your connected accounts, newest first.

## Connect social accounts

Link your own social accounts and pages so you can post from them.

- `social.account.connect.start`: Start connecting a social account: returns a sign-in link for the person who owns it, and a ref to check the outcome.
- `social.account.connect.status`: Check a connect flow started with social.account.connect.start: pending, or connected with the new account.
- `social.account.disconnect`: Disconnect one of your connected social accounts.
- `social.account.health.get`: Read health, permissions and connection status of your connected account; returns its handle and display name.
- `social.account.health.list`: List health of your connected accounts, including inactive accounts; returns your account handles and display names.
- `social.accounts.list`: List the social accounts you connected; use their accountId with social.post.publish.
- `social.connect.bluesky.credentials`: Connect a Bluesky account with its handle (or email) and an app password, instead of a sign-in redirect. The app password is forwarded once so the platform can verify it and keep it for the connection; it is not stored or logged by this API and never appears in a result or an error. The connected account shows up in social.accounts.list.
- `social.connect.facebook.page.select`: Finish connecting Facebook by saving the page the person picked. Pass the connect redirect's flow value and the page id (or up to 25 page ids, each connected as its own account). The flow's short-lived credentials stay server-side. Acts only on the caller's own pending connection; the connected account then shows up in social.accounts.list.
- `social.connect.facebook.pages.list`: The pages a connecting Facebook account can publish to, listed for the choice a connect flow is waiting for. Pass the connect redirect's flow value; the flow's short-lived credentials stay server-side. Works only on the caller's own pending connection.
- `social.connect.googlebusiness.location.select`: Finish connecting a Google Business Profile location by saving the one the person picked. Pass the connect redirect's flow value and the location id (or up to 25 locations, each connected as its own account), plus the owning account's id from the list call when the account owns many locations. The flow's short-lived credentials stay server-side. Acts only on the caller's own pending connection; the connected account then shows up in social.accounts.list.
- `social.connect.googlebusiness.locations.list`: The business locations a connecting Google Business Profile sign-in can connect, listed for the choice a connect flow is waiting for. Pass the connect redirect's flow value; the flow's short-lived credentials stay server-side. Works only on the caller's own pending connection.
- `social.connect.instagram.account.select`: Finish connecting Instagram through its Facebook sign-in by saving the page whose professional account the person picked. Pass the connect redirect's flow value and the page id (or up to 25 page ids, each connected as its own account). The flow's short-lived credentials stay server-side. Acts only on the caller's own pending connection; the connected account then shows up in social.accounts.list.
- `social.connect.instagram.pages.list`: The pages with a linked professional account that a connecting Instagram (through its Facebook sign-in) connection can use, listed for the choice a connect flow is waiting for. Pass the connect redirect's flow value; the flow's short-lived credentials stay server-side. Works only on the caller's own pending connection.
- `social.connect.linkedin.organization.select`: Finish connecting LinkedIn by saving what the person picked: themselves, an organization (company page), or several of these in one call. Pass the connect redirect's flow value and the selection, with the organization's id, resource name and name from social.connect.pending.get or social.connect.linkedin.organizations.list. The flow's short-lived credentials stay server-side. Acts only on the caller's own pending connection; the connected account then shows up in social.accounts.list.
- `social.connect.linkedin.organizations.list`: Full details of the organizations a connecting LinkedIn sign-in can connect, listed for the choice a connect flow is waiting for: logos, slugs, websites, industries. Pass the connect redirect's flow value and the organization ids from social.connect.pending.get. The flow's short-lived credentials stay server-side. Works only on the caller's own pending connection.
- `social.connect.pending.get`: What a connecting account is waiting for, and the choices to make, when the connect redirect said a choice is needed. Pass the redirect's flow value; the answer names the platform, the kind of choice, and — when the platform supplied them — the organizations, pages, boards, locations or public profiles to pick from. The flow's short-lived credentials stay server-side and are never in the answer; this call works for the caller's own connection only.
- `social.connect.pinterest.board.select`: Finish connecting Pinterest by saving the board the person picked: pins go to it by default. Pass the connect redirect's flow value and the board id from social.connect.pinterest.boards.list. The flow's short-lived credentials stay server-side. Acts only on the caller's own pending connection; the connected account then shows up in social.accounts.list.
- `social.connect.pinterest.boards.list`: The boards a connecting Pinterest account can post to, listed for the choice a connect flow is waiting for. Pass the connect redirect's flow value; the flow's short-lived credentials stay server-side. Works only on the caller's own pending connection.
- `social.connect.snapchat.profile.select`: Finish connecting Snapchat by saving the public profile the person picked (the platform publishes through a public profile). Pass the connect redirect's flow value and the profile from social.connect.snapchat.profiles.list. The flow's short-lived credentials stay server-side. Acts only on the caller's own pending connection; the connected account then shows up in social.accounts.list.
- `social.connect.snapchat.profiles.list`: The public profiles a connecting Snapchat account can publish through, listed for the choice a connect flow is waiting for (the platform needs a public profile to publish). Pass the connect redirect's flow value; the flow's short-lived credentials stay server-side. Works only on the caller's own pending connection.
- `social.connect.telegram.chat.connect`: Connect a Telegram channel or group directly by its chat id or @username — the alternative to the pairing-code flow. The bot must already be an admin in the chat. The connected account shows up in social.accounts.list.
- `social.connect.telegram.code.check`: Check a Telegram pairing code from social.connect.telegram.code.create: pending, connected (with the channel or group), or expired (mint a new one). Reads the caller's own connection attempt; nothing is changed.
- `social.connect.telegram.code.create`: Start connecting a Telegram channel or group: mints a short-lived pairing code for the caller's connection. Show the person the bot and the code — they add the bot as an admin and send it the code — then poll social.connect.telegram.code.check until it connects.
- `social.connect.welcome.get`: Read the caller tenant welcome screen. Settings never affect another builder. Omitted fields are cleared when saving.
- `social.connect.welcome.set`: Save the caller tenant welcome screen. Settings never affect another builder. Omitted fields are cleared when saving.
- `social.connect.whatsapp.credentials`: Connect a WhatsApp business number with its platform credentials — a system-user access token, the business account id and the phone number id, plus the number's two-step PIN when one is set — instead of the sign-in flow. Both secrets are forwarded once so the platform can verify them and keep the connection; they are not stored or logged by this API and never appear in a result or an error. Connecting moves the number's message events to this connection's subscription. The connected account shows up in social.accounts.list.
- `social.connect.whatsapp.embedded.code.redeem`: Finish a WhatsApp embedded signup: exchange the code the signup popup reported for the connected number. Pass the popup's code, and the business account and phone number ids it reported so exactly the chosen number is connected. The code is forwarded once; it is not stored or logged by this API. Acts only on the caller's own pending signup; the connected account shows up in social.accounts.list.
- `social.connect.whatsapp.embedded.config.get`: The app id and configuration id a builder needs to open the WhatsApp embedded signup popup on their own page, plus its branding when set. Pair it with social.connect.whatsapp.embedded.code.redeem, which completes the code the popup reports.
- `social.connect.whatsapp.phone-number.select`: Finish connecting WhatsApp by binding the phone number the person picked: exchanges the sign-in's short-lived grant for the connection and subscribes the business account. Pass the connect redirect's flow value and the number's id with its business account id, from social.connect.whatsapp.phone-numbers.list. The flow's credentials stay server-side. Acts only on the caller's own pending connection; the connected account then shows up in social.accounts.list.
- `social.connect.whatsapp.phone-numbers.list`: The phone numbers a connecting WhatsApp sign-in can bind, listed for the choice a connect flow is waiting for (a business account with several numbers). Pass the connect redirect's flow value; the flow's short-lived credentials stay server-side. Works only on the caller's own pending connection.
- `social.facebook.page.select`: Select an available Page for your connected Facebook or business Meta ads account; returns selected Page identity.
- `social.facebook.pages.list`: List Pages available on your connected Facebook or Meta ads account; returns Page and linked professional account identity.
- `social.googlebusiness.location.select`: Select an accessible business location on your connected Google Business account. Checks the location and its native owner before changing it.
- `social.linkedin.account.type.set`: Switch your connected LinkedIn account between a personal profile and an administered company Page; returns the selected display name.
- `social.linkedin.organizations.list`: List company Pages administered by your connected LinkedIn account.

## Creator discovery

Find creators on Instagram, TikTok and YouTube and compare their audiences and results.

- `creators.analytics`: Read an Instagram creator's public engagement picture - typical likes and comments, posting pace, hashtags and brand mentions. No income estimate, audience-credibility score or follower list is returned. Returns personal data: the creator's public handle and the public figures of their posts.
- `creators.audience.get`: Get a public creator’s aggregate audience shares, never individual followers. Sample date may be unknown. Estimated report maximum: 20 USD.
- `creators.audience.overlap`: Compare the audiences of 2 to 10 creators on one platform: how many followers they have in all, how many are unique, and for each creator the share of followers also following another of them. No engagement figure or rate of a creator is returned. Returns personal data: the public handles and follower counts of the creators compared. Returns personal data: the public handles and follower counts of the creators compared.
- `creators.brand-mentions.list`: List public creator and brand mentions, without guessed sponsorship or person scores. Estimated maximum: 1 USD.
- `creators.collaborations.summary`: Get descriptive collaboration and post totals for a public creator or brand. Estimated maximum: 0.20 USD.
- `creators.lookalike`: Find creators similar to one creator on the same platform, by that creator's handle, with their handles, names and follower counts. No similarity score or engagement rate is returned. Returns personal data: the public handles, names and follower counts of the creators found. Returns personal data: the public handles, names and follower counts of the creators found.
- `creators.lookalike-cross-platform`: Find unscored creator matches on another platform from one to five seed creators. Estimated maximum: 1.25 USD.
- `creators.performance.get`: Get public creator follower, content and total-view counts. No person scores. Estimated report maximum: 20 USD.
- `creators.performance.history`: Get observed descriptive count history, up to 1000 points. No engagement-rate or quality scores. Estimated maximum: 20 USD.
- `creators.search`: Find creators' public profiles on Instagram, TikTok and YouTube by describing them in plain words. Returns personal data: the public social profile names and links of the creators found.
- `creators.search-filtered`: Search public creators with structured filters and descriptive counts. No scores. Estimated maximum: 1.25 USD.
- `creators.search-filters.list`: List creator-search filter names and standard codes or owned handles. Estimated maximum: 0.05 USD.
- `creators.search-image`: Find public creators by an uploaded PNG or JPEG image, up to 5 MB; returns unscored matches. Estimated maximum: 1.25 USD.
- `creators.socials.find`: Find a creator's accounts on other social platforms from one handle, with the evidence for each match. Returns personal data: links to the creator's accounts on other platforms.
- `creators.suggest`: Autocomplete public creator handles and descriptive profile details. Estimated maximum: 0.05 USD.

## Douban

Read ratings, comments, reviews and trending lists for films and shows on Douban.

- `douban.title.comments`: List a title's short comments on Douban. Returns personal data: the commenters' public usernames.
- `douban.title.detail`: Get a title's rating & details on Douban. Returns personal data: the names of the cast and directors.
- `douban.title.reviews`: List a title's long-form reviews on Douban. Returns personal data: the reviewers' public usernames.
- `douban.trending.movies`: List currently trending movies on Douban.
- `douban.trending.tv`: List currently trending TV shows on Douban.

## Douyin

Search Douyin videos, accounts, comments and live rooms, and read feeds.

- `douyin.creator.courses`: List creator training courses on Douyin.
- `douyin.feed.channel`: Douyin anime channel videos. Returns personal data: public names, profile details and published content.
- `douyin.feed.food`: List public Douyin videos in the food channel. Returns personal data: Public names and published content on the platform..
- `douyin.feed.game`: List public Douyin videos in the game channel. Returns personal data: Public names and published content on the platform..
- `douyin.feed.home`: Douyin home feed recommendations. Returns personal data: public names, profile details and published content.
- `douyin.feed.knowledge`: List public Douyin videos in the knowledge channel. Returns personal data: Public names and published content on the platform..
- `douyin.feed.music`: List public Douyin videos in the music channel. Returns personal data: Public names and published content on the platform..
- `douyin.hashtag.detail`: Get a hashtag's stats on Douyin.
- `douyin.live.resolve`: Turn the address of a Douyin live stream into its webcast id.
- `douyin.live.room`: Get a Douyin live room by its room id, with its title and how many people are watching.
- `douyin.live.room-id`: Turn a Douyin live stream's webcast id (douyin.live.resolve gives it) into its room id.
- `douyin.mix.detail`: Get a video collection's details on Douyin.
- `douyin.schools.search`: Search public school names in Douyin.
- `douyin.search.app-link`: Get a Douyin link that opens a keyword search in the Douyin app.
- `douyin.search.hashtags`: Search public Douyin hashtags and their reported popularity.
- `douyin.search.music`: Search public music titles available in Douyin. Returns personal data: Public music credits..
- `douyin.search.posts`: Search public Douyin posts and return post identifiers and published captions. Returns personal data: Publicly published post captions..
- `douyin.search.suggest`: Suggest completions for a Douyin search query.
- `douyin.search.users`: Search Douyin accounts by keyword; returns profiles with their userId (sec_uid).
- `douyin.search.videos`: Search Douyin videos by keyword; returns captions, authors and stats.
- `douyin.share.short-link`: Get Douyin's own short link for a Douyin address.
- `douyin.user-search.search`: Search public profiles and return their names and biographies. Returns personal data: public profile name, handle, biography and follower count.
- `douyin.user.app-link`: Get a Douyin link that opens an account's profile in the Douyin app, by the account's numeric user id and secure id. Returns personal data: the account's public Douyin ids.
- `douyin.user.profile`: Get a user's public profile on Douyin. Returns personal data: the account's public nickname, signature and verification.
- `douyin.user.resolve`: Turn the address of a Douyin profile into the account's secure id, the id Douyin's own links and the profile capabilities use. Returns personal data: the account's public Douyin id.
- `douyin.user.videos`: List a Douyin account's recent videos by its sec_uid (userId).
- `douyin.video.app-link`: Get a Douyin link that opens a video in the Douyin app, by the video's numeric id (douyin.video.resolve gives it).
- `douyin.video.comment-words`: The words that come up most in a Douyin video's comments, with how often each appears, by the video's id.
- `douyin.video.comments`: List top-level comments on a Douyin video by its videoId.
- `douyin.video.danmaku`: List a video's danmaku comments on Douyin. Returns personal data: the text of viewers' on-screen comments.
- `douyin.video.detail`: Get one Douyin video's caption, author, stats and duration by videoId or url.
- `douyin.video.related`: Other Douyin videos like the one given, with each video's creator, counts and hashtags. Returns personal data: the creators' public names and profile details of published videos.
- `douyin.video.resolve`: Turn the address of a Douyin video into the video's numeric id.
- `douyin.video.stats`: Read like, play and share counts for up to two Douyin videos.

## Douyin trends and index

See what is trending on Douyin and how topics and videos perform over time.

- `douyin.account.trends`: Read how an account's public engagement moved over time as the platform's billboard reports it, one row per data point, with which metric and window to chart. Returns personal data: the account's public engagement trend figures.
- `douyin.accounts.hot`: List or search public Douyin accounts on the recent activity board. Returns personal data: Public account display names and published follower, like and post totals..
- `douyin.billboard-city.list`: Douyin billboard city list. Returns personal data: public names, profile details and published content.
- `douyin.billboard-content.tag`: Douyin billboard content tags. Returns personal data: public names, profile details and published content.
- `douyin.billboard-hot-city.list`: Douyin's city hot board: what each city is searching and watching right now, with each entry's heat and its recent movement.
- `douyin.billboard.brand-hot`: Douyin brand trending ranking. Returns personal data: public names, profile details and published content.
- `douyin.billboard.challenges`: Douyin trending challenges ranking. Returns personal data: public names, profile details and published content.
- `douyin.billboard.hot-search`: Douyin trending searches by board type. Returns personal data: public names, profile details and published content.
- `douyin.billboard.hot-words`: The hot search words on Douyin's trending board, with their scores and rise over a recent window.
- `douyin.billboard.hotspot`: Get the trending hot-spot board on Douyin.
- `douyin.billboard.music`: Douyin music trending chart. Returns personal data: public names and published profile content.
- `douyin.billboard.rising`: Douyin rising trending topics. Returns personal data: public names, profile details and published content.
- `douyin.billboard.search-trends`: What Douyin users search for right now, from the trending searches board, with each term's heat.
- `douyin.billboard.topic`: Get the trending topic board on Douyin.
- `douyin.calendar.event`: Read one event on the platform's hot calendar by its id, with its title, category and dates.
- `douyin.calendar.events`: List events in the Douyin trending calendar. Returns personal data: public names, profile details and published content.
- `douyin.index-item-user.profile`: Who watched a Douyin video in a date range, as aggregate audience segments with each segment's size and affinity. Aggregates only; no individual viewer is identified.
- `douyin.index-item.analysis`: How a Douyin video performed on the marketing index in a date range: per-day trends for the video's index, likes, comments and shares, with per-work averages.
- `douyin.index-item.index`: A Douyin video's marketing index over a date range, with its average over the range.
- `douyin.index-item.query`: Search Douyin Index videos by keyword. Returns personal data: public names, profile details and published content.
- `douyin.index-item.sug`: Douyin Index video suggestions by keyword. Returns personal data: public names, profile details and published content.
- `douyin.index-multi-keyword-hot.trend`: Compare up to several keywords' heat on Douyin's marketing index over a date range, with each keyword's averages.
- `douyin.index-multi-keyword.interpretation`: What a keyword's heat on Douyin's marketing index is made of, for up to several keywords: content, search and consumption parts now and in the previous period.
- `douyin.index-report.detail`: Read one report from Douyin's marketing index by its id: its title, introduction, keywords and publish details. Returns personal data: the report author's name as published.
- `douyin.index-topic.query`: A Douyin topic's heat on the marketing index over a date range, with its post and engagement counts.
- `douyin.index-topic.suggest`: Match a keyword to the topics Douyin's marketing index tracks.
- `douyin.index.content-dates`: Read the published calendar codes for available Douyin Index content.
- `douyin.index.dates`: The latest days and weeks Douyin Index has data for, for brands and for keywords.
- `douyin.index.filters`: List the video categories Douyin Index filters by, with their names in Chinese and English.
- `douyin.index.insights`: List the market insight reports Douyin Index recommends, with their authors, introductions and dates.
- `douyin.index.regions`: List provinces and their cities supported by Douyin Index region filters.
- `douyin.index.relation-dates`: Read the published calendar codes for available related-word data in Douyin Index.
- `douyin.short-drama.actor-rankings`: Read the default public ranking of Douyin short-drama actors. Returns personal data: Public creator display names and published follower counts..
- `douyin.trends.hot-words`: List trending search keywords on Douyin.
- `douyin.trends.keyword-index`: Search Douyin Index reports by keyword and type. Returns personal data: public names, profile details and published content.

## Facebook

Read public Facebook pages, groups, posts, comments and events.

- `facebook.city.events`: List public Facebook events in a city, from the address of the city's events page.
- `facebook.event.detail`: Get a public Facebook event by its address, with when and where it happens and how many people are going.
- `facebook.events.search`: Search public Facebook events by name, with when and where each happens and how many are going.
- `facebook.group.posts`: List recent posts in a public Facebook group, with their text, authors, reactions and comment counts. Returns personal data: the public Facebook names of the people who posted.
- `facebook.group.profile`: Get a public Facebook group by its address, with its description, privacy and member count.
- `facebook.page.contact`: Get the contact details a Facebook page publishes (email, phone, address, website) with its category and followers. Returns personal data: the email address and phone number a page publishes, which can be a person's own.
- `facebook.page.events`: List the public events a Facebook page has created, with when and where each happens.
- `facebook.page.followers`: List the people and pages that follow a public Facebook page, with their names and profile addresses. Returns personal data: the names and profile addresses of a page's followers.
- `facebook.page.photos`: List the photos a public Facebook page or profile has posted, with their captions and pixel sizes. Returns personal data: the photos and captions a person posted, when the address is a person's profile.
- `facebook.page.reels`: List the reels a public Facebook page has posted, with their descriptions and views.
- `facebook.page.reviews`: List public reviews of a Facebook business page, without reviewer profiles or contact details.
- `facebook.pages.search`: Search Facebook pages of businesses and organisations by keyword, with their categories and audience.
- `facebook.post.comments`: List comments on a public Facebook post, reel or video.
- `facebook.post.detail`: Get one public Facebook post by its address, with its text and its likes, comments, shares and views.
- `facebook.post.transcript`: Get the spoken words of a Facebook video post as text, by the post's address. Returns personal data: what the people in the video say.
- `facebook.posts.search`: Search public Facebook posts by keyword, with their text, authors and reactions. Returns personal data: the public Facebook names of the people who posted.
- `facebook.user.posts`: List recent public posts from a Facebook profile or page.
- `facebook.user.profile`: Get a public Facebook profile or page: name, link and public details.

## Hacker News

Search Hacker News stories.

- `hackernews.stories.search`: Hackernews.

## IMDb

Look up films and series: cast, plot, ratings, awards, box office and trivia.

- `imdb.charts.top-titles`: IMDb Top 250 movie or TV chart by ranking type.
- `imdb.news.list`: Entertainment news from IMDb by category (top, movie, TV or celebrity), with each headline, source and date. Returns personal data: the bylines of the news writers.
- `imdb.streaming.picks`: Read groups of public IMDb title identifiers currently selected for streaming discovery.
- `imdb.title.awards`: An IMDb title's awards - total wins and nominations, and its best-known award.
- `imdb.title.box-office`: An IMDb title's budget and box-office takings.
- `imdb.title.cast`: The top cast of an IMDb title, with the characters each plays. Returns personal data: the names of the cast, as IMDb publishes them.
- `imdb.title.countries`: The countries an IMDb title was made in.
- `imdb.title.critic-reviews`: The critics' score of an IMDb title and how many critic reviews it is based on.
- `imdb.title.detail`: Read the title, type and release year of a film or series.
- `imdb.title.plot`: The plot summary of an IMDb title.
- `imdb.title.release`: Where an IMDb title stands before release - its production stage and its release date.
- `imdb.title.similar`: List the public IMDb title identifiers of similar films and series.
- `imdb.title.trivia`: The trivia, goofs and quotes IMDb lists for a title, with how many of each there are. Returns personal data: names of the people the trivia mentions.
- `imdb.title.user-reviews`: The featured user reviews of an IMDb title, with each reviewer's nickname, summary and date. Returns personal data: the nicknames of the reviewers.

## Instagram

Read profiles, posts, reels, stories, comments, hashtags and places on Instagram.

- `instagram.audio.reels`: List Instagram reels that use an audio track, with their authors, likes, comments and plays. Returns personal data: the public Instagram handles and names of the people involved.
- `instagram.cities.list`: List the cities Instagram has place pages for in a country.
- `instagram.comment.replies`: List the replies to a comment on an Instagram post, with their text and authors. Returns personal data: the public Instagram handles and names of the people involved.
- `instagram.explore.sections`: List the topic sections of Instagram's Explore page, with their subsections.
- `instagram.hashtag.posts`: List recent Instagram posts under a hashtag.
- `instagram.highlight.detail`: Get one Instagram story highlight by its id, with its title, owner and how many stories it holds.
- `instagram.location.detail`: Get an Instagram place page by its location id, with its category, coordinates and how many posts are tagged there.
- `instagram.location.posts`: Read public posts at an Instagram place, without author identities or hosted media links.
- `instagram.locations.nearby`: Find public Instagram places near geographic coordinates.
- `instagram.post.comments`: List comments on an Instagram post or reel.
- `instagram.post.detail`: Get one Instagram post or reel: caption, author, media and like/comment counts.
- `instagram.post.likers`: List the accounts that liked an Instagram post, with their names and whether they are verified. Returns personal data: the public Instagram handles and names of the people involved.
- `instagram.post.resolve`: Turn the address of an Instagram post into the post's shortcode, the short name Instagram gives it in its links.
- `instagram.post.transcript`: Get the spoken words of an Instagram video or reel as text, by the post's address. Returns personal data: what the people in the video say.
- `instagram.reels.trending`: List the reels trending on Instagram now, with their captions, addresses and when they were posted.
- `instagram.search.audio`: Search Instagram music by keyword. Returns personal data: public names, profile details and published content.
- `instagram.search.hashtags`: Search Instagram hashtags by keyword, with how many posts use each.
- `instagram.search.locations`: Find Instagram places by name, with their addresses, coordinates and location ids.
- `instagram.search.reels`: Search Instagram reels by keyword.
- `instagram.search.users`: Search Instagram accounts by name or keyword.
- `instagram.user.about`: An Instagram account's published transparency details, today the usernames the account used before its current one. Returns personal data: the public history of names an account chose for itself.
- `instagram.user.contact`: Get the contact details an Instagram account publishes (email, phone, website) with its bio. Returns personal data: the email addresses and phone numbers an account publishes, which can be a person's own.
- `instagram.user.embed`: The HTML snippet Instagram gives for showing a public profile on another web page, by the account's handle. The snippet loads Instagram's own scripts when the page shows it. Returns personal data: the public profile the snippet shows (handle, name, picture and recent posts, loaded by Instagram's scripts).
- `instagram.user.followers`: Instagram user's followers by username or user id. Returns personal data: public names, profile details and published content.
- `instagram.user.following`: Instagram accounts a user follows by username or id. Returns personal data: public names, profile details and published content.
- `instagram.user.highlights`: List an Instagram account's story highlights, with their titles and ids.
- `instagram.user.id`: Get an Instagram account's numeric user id from its username.
- `instagram.user.posts`: List an Instagram user's recent posts.
- `instagram.user.profile`: Get an Instagram user's public profile: name, bio, follower counts, verification.
- `instagram.user.reels`: List an Instagram user's recent reels.
- `instagram.user.similar`: List Instagram accounts the platform shows as similar to an account. Returns personal data: the public Instagram handles and names of the people involved.
- `instagram.user.stories`: List an Instagram account's current stories, with a link to each and when it was posted. Returns personal data: the public Instagram handles and names of the people involved.
- `instagram.user.tagged`: List Instagram posts an account is tagged in, with their captions, authors and engagement. Returns personal data: the public Instagram handles and names of the people involved.
- `instagram.user.username`: Get an Instagram account's username from its numeric user id.
- `social.instagram.live.list`: List live broadcasts in progress for a connected Instagram account.
- `social.instagram.tags.list`: List posts tagging a connected Instagram account.

## Kick

Read public Kick stream clips.

- `kick.clip.detail`: Read a public Kick clip title, publication date and engagement counts.

## Kuaishou

Search Kuaishou and Kwai videos, users, lives and music, and read trending lists.

- `kuaishou.feed.featured`: Kuaishou selection feed. Returns personal data: public names, profile details and published content.
- `kuaishou.hot.boards`: List the trending board categories on Kuaishou.
- `kuaishou.hot.brands`: Kuaishou brand ranking list. Returns personal data: public names, profile details and published content.
- `kuaishou.hot.list`: Get the hot-search trending list on Kuaishou.
- `kuaishou.hot.lives`: Kuaishou live streams ranking list. Returns personal data: public names, profile details and published content.
- `kuaishou.hot.music`: Kuaishou music ranking by chart tab. Returns personal data: public names, profile details and published content.
- `kuaishou.hot.products`: Kuaishou shopping ranking list. Returns personal data: public names, profile details and published content.
- `kuaishou.search.general`: Search Kuaishou across all content by keyword. Returns personal data: public names, profile details and published content.
- `kuaishou.search.images`: Search Kuaishou images by keyword. Returns personal data: public names, profile details and published content.
- `kuaishou.search.lives`: Search Kuaishou live streams by keyword. Returns personal data: public names, profile details and published content.
- `kuaishou.search.music`: Search Kuaishou music by keyword. Returns personal data: public names, profile details and published content.
- `kuaishou.search.users`: Search users by keyword on Kuaishou. Returns personal data: the accounts' public names, bios and follower counts.
- `kuaishou.search.videos`: Search Kuaishou videos by keyword. Returns personal data: public names, profile details and published content.
- `kuaishou.user.resolve`: Turn a Kuaishou share link to an account into the account's user id. Returns personal data: the account's public Kuaishou id.
- `kuaishou.video.detail`: Read a public Kwai or Kuaishou video caption, publication date and available engagement counts.
- `kwai.user.albums`: List the albums of a Kwai account (Kuaishou's international app), with each album's first caption, size and views. Returns personal data: the public Kwai names of the account's author.

## Lemon8

Search Lemon8 posts, topics and trending searches.

- `lemon8.discover.banners`: List the featured discovery banners on Lemon8. Returns personal data: public names, profile details and published content.
- `lemon8.discover.tabs`: List the discovery sections on Lemon8. Returns personal data: public names, profile details and published content.
- `lemon8.feed.discover`: List the topics on Lemon8's discover feed, with how many views each has.
- `lemon8.hashtag.detail`: Get a Lemon8 topic by its id, with its description, followers, posts and views.
- `lemon8.search.posts`: Search public Lemon8 posts. Returns personal data: public names, profile details and published content.
- `lemon8.search.trending`: List trending search terms on Lemon8. Returns personal data: public names, profile details and published content.

## Link-in-bio pages

Read creator pages on Linktree, Komi, Pillar and similar link pages.

- `linkinbio.komi.detail`: Read a creator's public Komi page, with their display name, biography, the page's links and the social accounts it points at. Returns personal data: the creator's public name, handle, biography and photo on that page.
- `linkinbio.linkbio.detail`: Read a creator's public lnk.bio page, with their handle and the page's links. Returns personal data: the creator's public handle on that page.
- `linkinbio.linkme.detail`: Read a creator's public Linkme page, with their handle, biography and how many links the page holds. Returns personal data: the creator's public handle and biography on that page.
- `linkinbio.linktree.detail`: Read a creator's public Linktree page, with their handle, biography, the page's links and the social accounts it points at. Returns personal data: the creator's public handle, biography and photo on that page.
- `linkinbio.pillar.detail`: Read a creator's public Pillar page, with their name, location, the page's links and products, and the social accounts it points at. Returns personal data: the creator's public name, location and social accounts on that page.

## LinkedIn

Read LinkedIn profiles, companies, posts and comments, and message or post from connected accounts.

- `linkedin.account.connect`: Start connecting one of your end users' LinkedIn accounts; returns a hosted sign-in link.
- `linkedin.account.disconnect`: Disconnect one end user's LinkedIn account at the source and end its monthly rental. (needs approval)
- `linkedin.account.get`: Check one end user's LinkedIn connection: whether it is live and usable, and since when.
- `linkedin.chat.messages.list`: List the messages of one LinkedIn chat, newest first.
- `linkedin.chat.start`: Start a new LinkedIn chat with one of an end user's connections and send the first message. (needs approval)
- `linkedin.chats.list`: List the conversations in an end user's LinkedIn inbox, newest first, with unread counts.
- `linkedin.comment.reactions`: List who reacted to a comment on a LinkedIn post, and with which reaction. Returns personal data: public LinkedIn profile details of the people involved: names, headlines and profile links.
- `linkedin.comment.replies`: List the replies to a comment on a LinkedIn post, with their text, authors and reactions. Returns personal data: public LinkedIn profile details of the people involved: names, headlines and profile links.
- `linkedin.company.employees`: List people whose LinkedIn profiles name a company as their current employer, with their job titles and locations. No contact details. Returns personal data: public LinkedIn profile details of the people involved: names, headlines and profile links.
- `linkedin.company.followers.export`: Order a company follower export as a background job, up to 10,000 rows. Default 2,500; worst-case supplier cost is $35 at 10,000. Returns names, work emails and mobile numbers when present, in a file. Personal data: follower identity and contact details. A failed job costs you nothing.
- `linkedin.company.followers.get`: Read your company's follower-export status, or a bounded page of the completed follower records. Personal data: names, work emails and mobile numbers only when includeRows is true.
- `linkedin.company.followers.list`: List only your own company follower-export orders, with a handle for reading each order. A page can be empty while more pages remain.
- `linkedin.company.handle`: Turn a LinkedIn company page's numeric id into the page's public name, the part after /company/ in its address.
- `linkedin.company.posts`: List a LinkedIn company page's recent posts with text, date, media and engagement.
- `linkedin.company.profile`: Get a LinkedIn company page: name, description, website, size, location, followers.
- `linkedin.connections.list`: List an end user's LinkedIn connections, with names, headlines and public profile links. Returns personal data: public profile details of the people involved.
- `linkedin.followers.list`: List the followers of an end user's own LinkedIn account. Returns personal data: public profile details of the people involved.
- `linkedin.group.detail`: Get a LinkedIn group by its address, with its description, rules and member count.
- `linkedin.groups.search`: Search LinkedIn groups by keyword, with their descriptions and member counts.
- `linkedin.inmail.send`: Send an InMail to a member the end user is not connected to (a premium account with InMail credits is required). (needs approval)
- `linkedin.invitation.accept`: Accept one pending LinkedIn invitation an end user has received. (needs approval)
- `linkedin.invitation.cancel`: Cancel one pending LinkedIn invitation an end user has sent. (needs approval)
- `linkedin.invitation.decline`: Decline one pending LinkedIn invitation an end user has received. (needs approval)
- `linkedin.invitation.send`: Invite a member to join an end user's LinkedIn network, with an optional note of at most 300 characters. (needs approval)
- `linkedin.invitations.list`: List an end user's pending LinkedIn invitations, sent or received, with a handle to act on each.
- `linkedin.mentions.resolve`: Turn a LinkedIn profile or company URL into @mention text you can paste into a LinkedIn post.
- `linkedin.message.send`: Send a message into one existing LinkedIn chat of an end user's account. (needs approval)
- `linkedin.post.comments`: List comments on a LinkedIn post by its URN or id; returns text, author and likes.
- `linkedin.post.detail`: Get one LinkedIn post or article by URL: text, author, date, media and engagement.
- `linkedin.post.react`: React to a LinkedIn post as an end user: like, celebrate, support, love, insightful or funny. (needs approval)
- `linkedin.post.reactions`: List who reacted to a LinkedIn post (by URN or id) and with which reaction.
- `linkedin.post.repost`: Repost a LinkedIn post as an end user, with optional commentary; empty text reposts it as-is. (needs approval)
- `linkedin.post.transcript`: Get the spoken words of a LinkedIn video post as text, by the post's address. Returns personal data: what the people in the video say.
- `linkedin.posts.monitor.create`: Watch a saved social-post search on a schedule; each run delivers the posts that newly match, with their authors' public profile fields. Standing spend: rented monthly at the worst case of the request: runs a month (744 divided by everyHours, rounded up) times maxResultsPerRun times 2 credits per post, so the defaults (every 24 hours, 25 posts) are 1,550 credits a month. The dearest option is isRealtime, 150 credits per delivered post (116,250 a month at the defaults); it is never the default. No notifications are sent; read deliveries with data.monitor.runs and data.monitor.run.read. Returns a ref for data.monitor.update and data.monitor.delete.
- `linkedin.relation.get`: Check where an end user stands with one LinkedIn member: connected, an invitation waiting either way, or none.
- `linkedin.school.profile`: Get a school's public LinkedIn page, with its description, size, website and main location.
- `linkedin.search.locations`: Find public professional-network location names and the geographic ids used to filter searches.
- `linkedin.search.posts`: Search professional-network posts by keyword, author, employer or hashtag, newest first. Priced per post returned, so a smaller limit costs less.
- `linkedin.services.search`: Search the people and firms that offer services on LinkedIn by keyword, with what they offer and where they are. Returns personal data: public LinkedIn profile details of the people involved: names, headlines and profile links.
- `linkedin.user.comments`: List the comments a LinkedIn member has made on posts, with the text and the post each was made on. Returns personal data: public LinkedIn profile details of the people involved: names, headlines and profile links.
- `linkedin.user.posts`: List a LinkedIn member's recent posts with text, date, media and engagement.
- `linkedin.user.profile`: Get a LinkedIn member's public profile: name, headline, location, about and audience.
- `linkedin.user.reactions`: List the posts a LinkedIn member has reacted to, with the reaction and the post. Returns personal data: public LinkedIn profile details of the people involved: names, headlines and profile links.

## Pinterest

Browse Pinterest boards and pins, and see how often a page is saved.

- `pinterest.board.pins`: Read titles, descriptions and public page links from the first page of a Pinterest board.
- `pinterest.pin.detail`: Read a Pinterest pin description and engagement counts.
- `pinterest.pins.count`: Count how many times each of up to 20 web pages has been saved as a pin on Pinterest.
- `pinterest.search.pins`: List published Pinterest pin titles from the first result page.
- `pinterest.user.boards`: List a Pinterest account's public boards, with each board's name, description, link and counts. Returns personal data: the board owner's public name and username, as the boards show them.

## Pipixia

Read Pipixia feeds, short dramas, hashtags and trending posts.

- `pipixia.feed.home`: List pipixia feed home by the supplied filters. Returns personal data: public names, profile details and published content.
- `pipixia.feed.short-drama`: Read public short-drama feed sections and titles.
- `pipixia.hashtag.detail`: Read the introduction for a Pipixia hashtag.
- `pipixia.search.posts`: Pipixia search by keyword and type. Returns personal data: public names, profile details and published content.
- `pipixia.share.short-link`: Get Pipixia's own short link for a Pipixia address.
- `pipixia.trending.boards`: Pipixia trending board list. Returns personal data: public names, profile details and published content.
- `pipixia.trending.words`: List trending search words on Pipixia.

## Reddit

Read and search Reddit posts, comments, communities and user profiles.

- `reddit.feed.games`: Read public games feed groups with post titles and reported counts.
- `reddit.feed.news`: Read public news feed groups with post titles and reported counts.
- `reddit.feed.popular`: List the posts trending on Reddit's popular feed now, with their subreddits, votes and comment counts. Returns personal data: Reddit usernames of the people who posted.
- `reddit.home.feed`: Read reddit home feed by the supplied filters. Returns personal data: public names, profile details and published content.
- `reddit.post.comments`: List the comments on a Reddit post, with their text, authors, votes and dates. Returns personal data: Reddit usernames of the people who posted.
- `reddit.post.detail`: One Reddit post by id: title, text, author, date, score and comment count.
- `reddit.post.transcript`: Read the available transcript of a public Reddit video post.
- `reddit.posts.search-public`: Search public Reddit posts across all subreddits by keyword, with each post's title, text, subreddit, author, votes and comment count. Runs on the platform's own key: no Reddit account is connected. Reddit's own operators work inside the query (subreddit:, author:, title:). Returns personal data: Reddit usernames of the people who posted.
- `reddit.search.posts`: Search Reddit posts through your connected Reddit account, optionally within one subreddit.
- `reddit.search.subreddits`: Find public community suggestions grouped by section, without account profiles.
- `reddit.search.trending`: The searches trending on Reddit now.
- `reddit.subreddit.flairs`: List the post flairs a subreddit offers (the labels posters pick for a post), by the subreddit's name.
- `reddit.subreddit.posts`: Recent posts in a subreddit: title, text, author, date, score and comment count.
- `reddit.subreddit.profile`: Get a subreddit's name, description and when it was created.
- `reddit.subreddit.search`: Search the posts of one subreddit by keyword, with their titles, authors, votes and comment counts. Returns personal data: Reddit usernames of the people who posted.
- `reddit.subreddit.settings`: A subreddit's public settings, by Reddit's id for it (t5_ followed by letters and digits): its language, and whether old posts are archived and the top listing is allowed.
- `reddit.subreddit.style`: Read the colour settings of a public community.
- `reddit.user-active.subreddits`: Reddit user's active subreddits by username. Returns personal data: public names and published profile content.
- `reddit.user.comments`: List a Reddit user's recent comments, with the post and subreddit each was made in. Returns personal data: Reddit usernames of the people who posted.
- `reddit.user.posts`: List a Reddit user's recent posts, with their text, votes and comment counts. Returns personal data: Reddit usernames of the people who posted.
- `reddit.user.profile`: Get a Reddit user's public profile, with their bio, followers, how much they have posted and when they joined. Returns personal data: the user's public Reddit profile: username, display name, bio and activity counts.
- `reddit.user.trophies`: List the trophies on a Reddit account's public trophy case, grouped as Reddit groups them, with how many of each the account has. Returns personal data: the account's public trophies.

## Rumble

Read Rumble channels, videos, comments and transcripts.

- `rumble.channel.videos`: Read public videos from the first page of a Rumble channel.
- `rumble.search.videos`: List published Rumble video titles from the first result page.
- `rumble.video.comments`: Read the first page of public Rumble video comments, omitting author profiles.
- `rumble.video.detail`: Read a public Rumble video description, publication date and engagement counts.
- `rumble.video.transcript`: Read the available transcript of a public Rumble video.

## Snapchat

Read Snapchat creator profiles and Spotlight videos and comments.

- `snapchat.profile.detail`: Read a public Snapchat creator profile: its name, bio and subscriber count, with its highlight reels. Returns personal data: the creator's public name, bio and profile links.
- `snapchat.spotlight.comments`: Read the first page of public Snapchat Spotlight comments, omitting commenter profiles.
- `snapchat.spotlight.detail`: Read a public Snapchat Spotlight description and engagement counts.

## Social posting

Publish, schedule, edit and measure posts on your connected social accounts.

- `media.upload.create`: Place a media file on your posting profile's storage, so posts can attach media you have no public link for. Pass a file you uploaded (fileId) or its public URL; at most 100 MB, images, videos, PDF, audio or subtitle files. The placed copy is kept for 7 days; a post that references the media within that window makes it permanent. For a url source the result carries the media again as a platform-hosted file whose URL serves the raw file over HTTPS, ready to pass as a media URL. The storage location of the placed copy is internal and never returned. Needs platform file storage.
- `social.pinterest.board.create`: Create a board on your connected Pinterest account; private by default. Returns your board text. An unclear outcome is not resent; list boards before retrying.
- `social.pinterest.board.default.set`: Set the default board for your connected Pinterest account; returns your own board choice.
- `social.pinterest.boards.list`: List boards on your connected Pinterest account, including private board names and descriptions.
- `social.post.analytics`: Use when you read engagement and performance for one social post; for its content and status use social.post.get. Likes, comments, shares and views per platform for a post you published. Pass the ref that social.post.publish returned.
- `social.post.approval.review`: Use when you approve or reject a social post awaiting review; for publishing a new post use social.post.publish. Approve or reject a post awaiting review. Approving after its schedule may publish it shortly. Send an Idempotency-Key. (needs approval)
- `social.post.delete`: Use when you delete a saved social post; for taking a published post offline use social.post.unpublish. Delete a post that is not live: a draft, scheduled, publishing, partial, failed or cancelled post, with its schedule and any queued slot. A published post cannot be deleted — take it down with social.post.unpublish first. This cannot be undone. Send an Idempotency-Key.
- `social.post.edit`: Use when you edit text already published on a social account; for changing a draft use social.post.update. Edit the text of a post that is already live. Works on x, discord, facebook, reddit, linkedin, telegram, pinterest, googlebusiness, youtube and slack; each applies its own rules (for example x allows edits only shortly after publishing and only with a premium subscription, and gives the post a new address). Media cannot be changed on a live post. Send an Idempotency-Key.
- `social.post.get`: Use when you read one saved social post and its status; for a list of posts use social.posts.list. Status of a post you published, per platform, with live post URLs. Pass the ref that social.post.publish returned.
- `social.post.metadata.update`: Use when you change a published video title, description, tags or thumbnail; for live post text use social.post.edit. Change a published video's facts on the video platform without re-uploading it: title, description, tags, category, privacy, custom thumbnail, made-for-kids and AI-content flags, or the playlist it sits in. Works on youtube videos — pass the ref of a video this API published, or videoId with accountId for one published elsewhere. Send an Idempotency-Key.
- `social.post.publish`: Use when you post or schedule content on LinkedIn or other connected social accounts; for posts already published use social.posts.list. Publish or schedule a post to your connected social accounts (LinkedIn, Instagram, Facebook and more). Send an Idempotency-Key. Returns a ref for social.post.get and social.post.analytics.
- `social.post.retry`: Use when you retry a failed social post; for a new post use social.post.publish. Try a failed post again: every platform that failed is retried at once, the ones that succeeded are left alone. Works on failed and partial posts. The content goes out again, so an unclear outcome is reported as such and is not retried. Send an Idempotency-Key.
- `social.post.unpublish`: Use when you take a published social post offline; for deleting its saved record use social.post.delete. Take a published post down from one platform (x, threads, facebook, linkedin, youtube, pinterest, reddit, bluesky, googlebusiness or telegram). This deletes the post on that platform and cannot be undone — on youtube the deletion is permanent. Once every platform copy is gone the post's state becomes cancelled. Send an Idempotency-Key.
- `social.post.update`: Use when you change a draft or scheduled social post; for live text use social.post.edit. Change a post that is not live yet: text, title, media, targets, per-target text or media, schedule, timezone, tags or visibility — or publish a draft now with publishNow. A live post can no longer be edited this way; use social.post.edit for its text. Send an Idempotency-Key.
- `social.post.validate.length`: Use when you check social post text length before publishing; for publishing use social.post.publish. Count a post text the way each platform counts it, and say whether it fits: x weights links as 23 characters and emojis as 2, the others count plain characters. The x-premium row always shows the premium limit and cannot know your account — check an x target against the account with social.post.validate.post.
- `social.post.validate.media`: Use when you check social post media before publishing; for publishing use social.post.publish. Check a media URL before attaching it to a post: is the file reachable over HTTPS, what type and size does it report, and does it fit each platform's size cap. A page that returns HTML instead of the file reports as not valid.
- `social.post.validate.post`: Use when you check whether a social post is valid before publishing; for publishing use social.post.publish. Dry-run the checks a post goes through at publish time, without publishing: media a platform requires, hashtag limits, thread shape, character limits per target (on x, against the account's own limit). Returns per-platform errors, plus warnings for content near a limit. Nothing is published and no account is changed.
- `social.post.validate.subreddit`: Use when you check a subreddit before posting there; for publishing use social.post.publish. Check that a subreddit exists and what it allows before posting to it: whether it is public, how many members it has, and whether image and video posts are allowed. Use it with the subreddit rules before your first post in a community.
- `social.posts.import`: Create many posts at once from a CSV file you uploaded: one data row per post, with the columns post_content, title, media_urls, platforms (comma-separated), a schedule (schedule_time with tz, or publish_now=true, use_queue=true, or is_draft=true), per-platform overrides (schedule_time_<platform>, custom_content_<platform>, custom_media_<platform>), and document or audio attachment columns. At most 5,000 data rows and 10 MB. Runs as a job; the result says what every row did, in file order. dryRun defaults to true: a first call checks the file and creates nothing. Posts that were created are read back with social.posts.list. An unclear outcome is not retried.
- `social.posts.list`: Use when you show posts already on a social account; for publishing a new post use social.post.publish. List the posts on your profile: drafts, scheduled, published, partial, failed and cancelled, oldest handles included. Use each row's ref with social.post.update, social.post.edit, social.post.delete, social.post.retry, social.post.unpublish and social.post.metadata.update.
- `social.queue.slots.create`: Create a recurring posting schedule (queue) on your profile: named slots in one timezone, such as weekday mornings. The first queue on a profile becomes its default; later ones need setAsDefault or a queueId to be used. Posts scheduled through a queue land on the next free slot in order. Send an Idempotency-Key.
- `social.queue.slots.delete`: Delete a recurring posting schedule (queue) by its queueId. Posts already waiting in it are not deleted; they keep their assigned times. With all: true, every queue on your profile is deleted — the default slot schedule included. Deleting cannot be undone. Send an Idempotency-Key.
- `social.queue.slots.list`: List the recurring posting schedules (queues) on your profile: their slots, timezone and the next times each would assign. Posts scheduled through a queue land on the next free slot in order. Queue ids from here work with the other social.queue.slots.* capabilities.
- `social.queue.slots.next`: Show the next time a queue would assign, without scheduling anything. Schedule through the post capabilities' queue fields rather than copying this time into a schedule: copying skips the queue's lock, and two posts can land on the same slot.
- `social.queue.slots.preview`: Show the next posting times a queue would assign, in order, without scheduling anything. Useful for showing a user when their queued posts would go out.
- `social.queue.slots.update`: Change a recurring posting schedule (queue): its name, timezone, slots, on/off switch, or make it the default. Without a queueId the profile's default queue is changed. Posts already waiting keep their times unless reshuffleExisting is set. Send an Idempotency-Key.
- `social.reddit.subreddit.default.set`: Save a default community for your connected Reddit account; returns your community choice without requiring a subscription.
- `social.reddit.subreddits.list`: List communities your connected Reddit account can post to; returns your community membership and choices.
- `social.youtube.playlist.create`: Create an empty playlist on your connected YouTube channel; private by default, without changing its default. Returns your playlist text. Uses 50 quota units and requires channel permission. List playlists before retrying an unclear outcome.
- `social.youtube.playlist.default.set`: Save your connected YouTube channel’s default playlist preference; it is not automatically applied to published videos. Returns your playlist choice.
- `social.youtube.playlists.list`: List playlists on your connected YouTube channel, including private titles and descriptions.

## SoundCloud

Read SoundCloud artist profiles and tracks.

- `soundcloud.artist.detail`: Read a SoundCloud artist's public profile by its handle, with its follower and track counts. Returns personal data: the artist's public name, picture, description and location.
- `soundcloud.artist.tracks`: List the tracks a SoundCloud artist has published, with their genres, plays and likes. Returns personal data: the artist's public name and published track titles.
- `soundcloud.track.detail`: Read a public SoundCloud track title, genre and engagement counts.

## Spotify

Look up Spotify albums, artists, tracks and podcasts.

- `spotify.album.detail`: Read a Spotify album title, release date, label and public page.
- `spotify.artist.detail`: Read a Spotify artist's public profile, with their name, biography, follower count and monthly listeners. Returns personal data: the artist's public name and biography.
- `spotify.podcast.detail`: Read a Spotify podcast title, description, publisher and public page.
- `spotify.podcast.episodes`: Read the first page of Spotify podcast episodes and their public catalogue links.
- `spotify.search`: Search public album and track titles. Results omit user and artist profiles.
- `spotify.track.detail`: Read a Spotify track title, duration, play count and public page.

## Telegram channels

Read and search posts from public Telegram channels.

- `telegram.channel.posts`: List a public Telegram channel's most recent posts, with each post's text, author, date, views and address. Returns personal data: the posts' authors' public names when the channel shows them.
- `telegram.channel.profile`: Get a public Telegram channel's profile, with its title, description and subscriber count.
- `telegram.channel.search`: Search a public Telegram channel's posts by keyword, with each hit's text, author, date and views. Returns personal data: the posts' authors' public names when the channel shows them.
- `telegram.post.detail`: Get one post from a public Telegram channel, with its text, date, views and reactions. Returns personal data: the post author's name when the channel shows it.

## Threads

Search Threads posts and read public profiles.

- `threads.post.detail`: Read a public Threads post and its like count, omitting author profiles.
- `threads.search.posts`: Search Threads posts by keyword.
- `threads.search.profiles`: Search Threads profiles by keyword, with their names and whether they are verified. Returns personal data: the public Threads usernames and names of the people involved.
- `threads.user.posts`: Threads user posts by username — likes, reshares. Returns personal data: public names, profile details and published content.
- `threads.user.profile`: Get a Threads account's public profile, with its name, followers and whether it is verified or private. Returns personal data: the account's public profile: username, name and follower count.

## TikTok

Search TikTok videos, creators, hashtags, sounds and live streams.

- `tiktok.comment.replies`: List the replies to a comment on a TikTok video.
- `tiktok.creators.popular`: List creator accounts the platform currently features as popular, with their public follower and like counts. Returns personal data: the public names, handles and links of featured creator accounts.
- `tiktok.feed.home`: TikTok explore feed by category. Returns personal data: public names, profile details and published content.
- `tiktok.feed.trending`: List the videos trending on TikTok now in a country, with their captions, authors and engagement. Returns personal data: the public TikTok handles and names of the people involved.
- `tiktok.gifts.names`: Look up the names of up to 50 public TikTok gift ids; unknown gifts are omitted.
- `tiktok.hashtag.detail`: Get a TikTok hashtag's page, with its description and how many videos and views it has.
- `tiktok.hashtag.videos`: List TikTok videos tagged with a hashtag, with their captions, authors and engagement. Returns personal data: the public TikTok handles and names of the people involved.
- `tiktok.live.detail`: Get the live stream a TikTok account is running now, with its title, viewers and when it started. Returns personal data: the public TikTok handles and names of the people involved.
- `tiktok.live.gifts`: TikTok live room gift list by room id. Returns personal data: public names, profile details and published content.
- `tiktok.live.rankings`: List public daily livestream placements on TikTok. Returns personal data: Published streamer handles, display names, follower totals and daily placement..
- `tiktok.live.resolve`: Turn the address of a TikTok live stream into its room id, with the host's username and display name. Returns personal data: the public TikTok handles and names of the people involved.
- `tiktok.live.status`: Say whether a TikTok live room is broadcasting now.
- `tiktok.live.tabs`: List the tabs TikTok shows on its live page to browse live streams by kind.
- `tiktok.music.charts`: TikTok music charts — Top 50, Viral 50. Returns personal data: public names, profile details and published content.
- `tiktok.music.detail`: Get a TikTok sound by its id, with its title, artist, album and how many videos use it.
- `tiktok.music.videos`: List TikTok videos that use a sound, with their descriptions, authors and engagement. Returns personal data: the public TikTok handles and names of the people involved.
- `tiktok.search.app-link`: Get a TikTok link that opens a keyword search in the TikTok app.
- `tiktok.search.general`: Search TikTok's top results by keyword, with each video's caption, author and engagement. Returns personal data: the public TikTok handles and names of the people involved.
- `tiktok.search.hashtags`: Search TikTok hashtags by keyword. Returns personal data: public names, profile details and published content.
- `tiktok.search.insight-videos`: Search public TikTok videos in creator search insights. Returns personal data: Public names and published content on the platform..
- `tiktok.search.insights`: TikTok creator search insights by tab and filters. Returns personal data: public names, profile details and published content.
- `tiktok.search.lives`: List tiktok search lives by the supplied filters. Returns personal data: public names, profile details and published content.
- `tiktok.search.music`: Search TikTok music by keyword. Returns personal data: public names, profile details and published content.
- `tiktok.search.photos`: Search public TikTok photo posts by keyword. Returns personal data: Public names and published content on the platform..
- `tiktok.search.places`: Read tiktok search places by the supplied filters. Returns personal data: public names, profile details and published content.
- `tiktok.search.suggestions`: TikTok search suggestions by partial keyword. Returns personal data: public names, profile details and published content.
- `tiktok.search.users`: Search TikTok accounts by keyword; returns handles, names, bios and follower counts.
- `tiktok.search.videos`: Search TikTok videos by keyword; returns captions, authors, counts and thumbnails.
- `tiktok.share.short-link`: Get TikTok's own short share link for a TikTok address.
- `tiktok.text.translate`: Translate text for TikTok content. Returns personal data: public names, profile details and published content.
- `tiktok.trends.hashtags`: List the hashtags trending on TikTok, with how many posts and views each has.
- `tiktok.trends.searches`: The searches trending on TikTok today.
- `tiktok.user.app-link`: Get a TikTok link that opens an account's profile in the TikTok app, by the account's numeric user id (tiktok.user.resolve gives it).
- `tiktok.user.audience-countries`: Where a TikTok account's audience is, by country, with the share of the audience in each.
- `tiktok.user.contact`: Get the contact details a TikTok account publishes (email addresses, website, other social profiles) with its bio. Returns personal data: the email addresses an account publishes, which can be a person's own.
- `tiktok.user.country`: Get the country a TikTok account is registered in. Returns personal data: the country of the account.
- `tiktok.user.followers`: List the accounts that follow a TikTok account, with their names, regions and follower counts. Returns personal data: the public TikTok handles and names of the people involved.
- `tiktok.user.following`: List the accounts a TikTok account follows, with their names, bios and follower counts. Returns personal data: the public TikTok handles and names of the people involved.
- `tiktok.user.profile`: Get a TikTok user's public profile: name, bio, follower and video counts.
- `tiktok.user.resolve`: Turn a TikTok username into the account's numeric user id and its secure id, the two ids TikTok's own links use for an account. Returns personal data: the account's public TikTok ids.
- `tiktok.user.videos`: List a TikTok user's recent videos with captions, dates, counts and thumbnails.
- `tiktok.video.app-link`: Get a TikTok link that opens a video in the TikTok app, by the video's numeric id (tiktok.video.resolve gives it).
- `tiktok.video.comment-keywords`: The keywords that come up most in the comments on a TikTok video.
- `tiktok.video.comments`: List the top comments on a TikTok video, by video id or URL.
- `tiktok.video.detail`: Get one TikTok video's caption, author, date, counts, duration and thumbnail.
- `tiktok.video.fake-views`: Score how a TikTok video's views and engagement compare with its normal patterns, to say whether its numbers look inflated. The answer says nothing about the person who posted it.
- `tiktok.video.resolve`: Turn the address of a TikTok video into the video's numeric id, which TikTok's own links and the video capabilities use.
- `tiktok.video.transcript`: Get the spoken words of a TikTok video as text, by the video's address. Returns personal data: what the people in the video say.

## Toutiao

Read Toutiao articles and comments.

- `toutiao.article.detail`: Read a public Toutiao article title, body and publication date without author identities.
- `toutiao.post.comments`: Read a Toutiao post's comments, with each comment's text and counts. Returns personal data: the comment text commenters publish.
- `toutiao.user.resolve`: Turn the address of a Toutiao profile into the account's numeric user id and secure id. Returns personal data: the account's public Toutiao ids.

## Truth Social

Read public Truth Social posts and profiles.

- `truthsocial.post.detail`: Read a public Truth Social post and engagement counts, omitting author profiles.
- `truthsocial.profile.detail`: Read a public Truth Social account's profile: its display name, note and follower counts. Returns personal data: the account's public name, note, location and profile links.

## Twitch

Look up Twitch channels, their schedules, videos and clips.

- `twitch.clip.detail`: Get one Twitch clip by its address, with its title, when it was made, its language and how many times it was viewed.
- `twitch.user.profile`: Read a Twitch channel's public profile by its login name, with its follower count, live status and description. Returns personal data: the channel's public name, picture and description.
- `twitch.user.schedule`: Read a Twitch channel's public streaming schedule, with each segment's title and times. Returns personal data: the channel's public name.
- `twitch.user.videos`: List the videos a Twitch channel has published, with their titles, lengths and views. Returns personal data: the channel's public name and its published video titles.

## Username lookup

Check which public sites have a profile under a username.

- `web.username.check`: Check which of several public sites have a profile with a given username. Returns personal data: the username the caller sends, and whether profiles with it exist.

## Video search

Search public videos and see links, excerpts and creators.

- `video.search`: Search public videos; returns links, excerpts, duration and published creator names.

## WeChat

Read WeChat official-account articles, comments, and Channels videos.

- `wechat-channels.collection.videos`: Read public collection videos on WeChat. Returns personal data: public account names and public content.
- `wechat-channels.comment.replies`: List replies under a comment on WeChat-Channels. Returns personal data: the public WeChat Channels nicknames of the people involved.
- `wechat-channels.live.detail`: Read public live detail on WeChat. Returns personal data: public account names and public content.
- `wechat-channels.live.history`: Read public live history on WeChat. Returns personal data: public account names and public content.
- `wechat-channels.search.videos`: Read public search videos on WeChat. Returns personal data: public account names and public content.
- `wechat-channels.user.collections`: Read public user collections on WeChat. Returns personal data: public account names and public content.
- `wechat-channels.user.info`: Read public user info on WeChat. Returns personal data: public account names and public content.
- `wechat-channels.user.profile`: Read public user profile on WeChat. Returns personal data: public account names and public content.
- `wechat-channels.user.resolve`: Turn a WeChat Channels channel id into the channel's public handle, name and description. Returns personal data: the channel's public name and description.
- `wechat-channels.user.videos`: Read public user videos on WeChat. Returns personal data: public account names and public content.
- `wechat-channels.video.comments`: List a video's comments on WeChat-Channels. Returns personal data: the public WeChat Channels nicknames of the people involved.
- `wechat-channels.video.detail`: Read public video detail on WeChat. Returns personal data: public account names and public content.
- `wechat-channels.video.download`: Copy a public WeChat Channels video into a managed file, with its title and publication date.
- `wechat-channels.video.share-link`: The share address of a public WeChat Channels video, from its numeric object id.
- `wechat-mp.account.articles`: List an account's published articles on WeChat-Official-Accounts.
- `wechat-mp.account.profile`: Get an official account's profile on WeChat-Official-Accounts.
- `wechat-mp.account.services`: Read the public menu labels and submenu labels of a WeChat official account.
- `wechat-mp.article.ads`: Count embedded advertisements on a public WeChat article. Returns the count only; individual entries are not included.
- `wechat-mp.article.comments`: List an article's comments on WeChat-Official-Accounts. Returns personal data: the commenters' public nicknames.
- `wechat-mp.article.detail`: Get an article's full content on WeChat-Official-Accounts. Returns personal data: the public names of the official accounts and authors involved.
- `wechat-mp.article.related`: Count related articles on a public WeChat article. Returns the count only; individual entries are not included.
- `wechat-mp.article.stats`: Read the public engagement counts for a WeChat official-account article.
- `wechat-mp.comment.replies`: Read public comment replies on WeChat. Returns personal data: public account names and public content.
- `wechat-mp.search.accounts`: Search official accounts by keyword on WeChat-Official-Accounts. Returns personal data: the public names of the official accounts and authors involved.

## Weibo

Search Weibo posts, topics, users and trending searches.

- `weibo.cities`: List the provinces Weibo's regional filters take, with their codes and the cities in each.
- `weibo.feed.channel`: Weibo featured videos feed. Returns personal data: public names, profile details and published content.
- `weibo.feed.recommend`: List posts in the public Weibo recommendation feed. Returns personal data: Public names and published content on the platform..
- `weibo.post.comments`: List a post's comments on Weibo. Returns personal data: the text of the commenters' public comments.
- `weibo.post.detail`: Get one Weibo post's text, author, images and stats by its postId.
- `weibo.post.picture-comments`: Whether a Weibo post accepts comments with pictures, by the post's id.
- `weibo.search.ai`: Weibo AI smart search by keyword. Returns personal data: public names, profile details and published content.
- `weibo.search.images`: Search Weibo images by keyword. Returns personal data: public names, profile details and published content.
- `weibo.search.posts`: Search Weibo posts by keyword within a range of days, with each post's text, author, place and its likes, comments and reposts. Returns personal data: the public Weibo names of the people who posted.
- `weibo.search.related`: Weibo AI related search terms by keyword. Returns personal data: public names, profile details and published content.
- `weibo.search.suggestions`: Find public Weibo search suggestions related to a keyword.
- `weibo.search.topics`: Search Weibo topics by keyword, with how many people discuss and read each.
- `weibo.search.users`: Search public profiles and return their names and biographies. Returns personal data: public profile name, handle, biography and follower count.
- `weibo.search.videos`: Search Weibo videos by keyword. Returns personal data: public names, profile details and published content.
- `weibo.trending.hot-search`: Read public trending search terms grouped by section.
- `weibo.trending.rankings`: Get category trending leaderboards on Weibo.
- `weibo.user.articles`: List public article-post links and excerpts from a Weibo account. Returns personal data: Published account names, public posts and public engagement totals..
- `weibo.user.audios`: List public audio-post titles and descriptions from a Weibo account. Returns personal data: Published account names, public posts and public engagement totals..
- `weibo.user.followers`: List publicly visible followers of a Weibo account. Returns personal data: Published account names, public posts and public engagement totals..
- `weibo.user.following`: List publicly visible accounts followed by a Weibo account. Returns personal data: Published account names, public posts and public engagement totals..
- `weibo.user.posts`: List the first public page of a Weibo account’s posts, with an optional originals filter. Returns personal data: Published account names, public posts and public engagement totals..
- `weibo.user.profile`: Get a user's public profile on Weibo. Returns personal data: the account's public screen name, description and follower counts.
- `weibo.user.super-topics`: List public topic-card titles and descriptions on a Weibo profile. Returns personal data: Published account names, public posts and public engagement totals..
- `weibo.user.video-collections`: Browse a user's video collections on Weibo.
- `weibo.user.videos`: List public video-post identifiers, text and engagement from a Weibo account. Returns personal data: Published account names, public posts and public engagement totals..

## X (Twitter)

Search X posts, read profiles, threads, followers and trending topics.

- `x.article.detail`: Get one long-form article on X by its address, with its title, preview text, author and engagement. Returns personal data: the public X handles and names of the people involved.
- `x.communities.search`: Search X communities by keyword, with their member counts.
- `x.community.detail`: Get an X community by its address, with its description, member count and how people join. Returns personal data: the public X handles and names of the people involved.
- `x.community.posts`: List recent posts in an X community, with their text, authors and engagement. Returns personal data: the public X handles and names of the people involved.
- `x.post.comments`: List replies to an X (Twitter) post by its id; returns text, author and likes.
- `x.post.detail`: Get one post on X by its address, with its text, when it was posted and its likes, replies, reposts and views.
- `x.post.reposters`: List the accounts that reposted a post on X, with their names, bios and follower counts. Returns personal data: the public X handles and names of the people involved.
- `x.post.thread`: Get the whole thread a post on X belongs to, in order, with the text of each post. Returns personal data: the public X handles and names of the people involved.
- `x.post.transcript`: Get the spoken words of a video post on X as text, by the post's address. Returns personal data: what the people in the video say.
- `x.search.posts`: Search recent X (Twitter) posts by keyword; returns text, author, date and engagement.
- `x.trending.topics`: List the topics trending on X now, for a country.
- `x.user.followers`: List the accounts that follow an account on X, with their names, locations and follower counts. Returns personal data: the public X handles and names of the people involved.
- `x.user.following`: List the accounts an account on X follows, with their names, bios and follower counts. Returns personal data: the public X handles and names of the people involved.
- `x.user.media`: X (Twitter) user's media posts by handle. Returns personal data: public names, profile details and published content.
- `x.user.posts`: List an X (Twitter) user's recent posts with text, date, media and engagement.
- `x.user.profile`: Get an X (Twitter) user's public profile: name, bio, follower and post counts.
- `x.user.replies`: X (Twitter) user's replies by handle. Returns personal data: public names, profile details and published content.
- `x.users.search`: Search accounts on X by keyword, with their names, bios and follower counts. Returns personal data: the public X handles and names of the people involved.

## Xiaohongshu

Search Xiaohongshu notes, creators, comments and trending topics.

- `xiaohongshu.creators.live`: List public commercial livestream creators on Xiaohongshu. Returns personal data: Public names and published content on the platform..
- `xiaohongshu.feed.categories`: List the categories of Xiaohongshu's home feed, with the id each takes.
- `xiaohongshu.feed.home`: Read public home-feed note titles without author profiles.
- `xiaohongshu.note.comments`: List top-level comments on a Xiaohongshu (RED) note by its noteId.
- `xiaohongshu.note.detail`: Get one Xiaohongshu note by its id, with its title, text, tags and its likes, saves, comments and shares. Returns personal data: the public Xiaohongshu nicknames and ids of the people involved.
- `xiaohongshu.search.groups`: Search Xiaohongshu groups by keyword. Returns personal data: public names, profile details and published content.
- `xiaohongshu.search.notes`: Search notes by keyword on Xiaohongshu. Returns personal data: the public Xiaohongshu nicknames and ids of the people involved.
- `xiaohongshu.search.suggest`: Get search keyword suggestions on Xiaohongshu.
- `xiaohongshu.search.users`: Search Xiaohongshu (RED) accounts by keyword; returns profiles with their userId.
- `xiaohongshu.trending.hot-list`: List current trending topics on Xiaohongshu.
- `xiaohongshu.trending.notes`: Find trending notes by keyword on Xiaohongshu. Returns personal data: the public Xiaohongshu nicknames and ids of the people involved.
- `xiaohongshu.user.notes`: List a Xiaohongshu (RED) account's recent notes by its userId.
- `xiaohongshu.user.profile`: Get a Xiaohongshu (RED) account's public profile and follower counts by userId.

## Xigua

Search Xigua videos and read their details and comments.

- `xigua.search.videos`: Search Xigua videos by keyword. Returns personal data: public names, profile details and published content.
- `xigua.video.comments`: Read public video comments without commenter profiles.
- `xigua.video.detail`: Get one Xigua video by its id, with its text, its likes and its share link. Returns personal data: the public Xigua names of the people involved.
- `xigua.video.play-url`: List xigua video play url by the supplied filters. Returns personal data: public names, profile details and published content.

## Youku

Read Youku user profiles and video details.

- `youku.user.profile`: Get a user's public profile on Youku. Returns personal data: the public Youku names of the people involved.
- `youku.video.detail`: Get a video's metadata & stats on Youku.

## YouTube

Search YouTube videos, channels, comments, transcripts and trends.

- `youtube.activities.list`: List public activity from a YouTube channel without reading a connected account.
- `youtube.channel.lives`: List a YouTube channel's live streams, past and current, with their titles and views.
- `youtube.channel.playlists`: List a YouTube channel's public playlists, with how many videos each holds.
- `youtube.channel.posts`: List a YouTube channel's community posts, newest first, with their text and likes.
- `youtube.channel.profile`: Get a YouTube channel's public profile: name, description, subscriber and video counts.
- `youtube.channel.resolve`: Turn a YouTube channel's address into its channel id (the id that starts with UC).
- `youtube.channel.sections`: List the named sections of a channel's page, such as its featured playlists, in the order the channel arranged them.
- `youtube.channel.shorts`: List a YouTube channel's Shorts, with their titles, views and likes.
- `youtube.channel.videos`: List a YouTube channel's recent videos with titles, dates, views and durations.
- `youtube.comment.detail`: Read a public YouTube comment by its public comment id, omitting the author profile.
- `youtube.comment.replies`: List the replies to a comment on a YouTube video, using the replies token that a comment listing returns. Returns personal data: the public channel names and handles of the people who posted.
- `youtube.playlist.images`: List a playlist's cover images with their pixel sizes.
- `youtube.playlist.videos`: List the videos in a public YouTube playlist, in order, with their titles, channels and lengths.
- `youtube.post.detail`: Get one YouTube community post by its address, with its text and the channel that posted it.
- `youtube.search.hashtag`: List YouTube videos tagged with a hashtag, with their titles, channels and views.
- `youtube.search.shorts`: Search YouTube Shorts by keyword, with their titles and views.
- `youtube.search.suggestions`: The searches YouTube suggests for a partly typed keyword.
- `youtube.search.videos`: Search YouTube videos by keyword; returns titles, channels, views, durations and thumbnails.
- `youtube.trending.videos`: Read the first page of trending public YouTube Shorts.
- `youtube.video.comments`: List the top comments on a YouTube video, by video id or URL.
- `youtube.video.detail`: Get one YouTube video's title, description, channel, date, views and duration.
- `youtube.video.related`: List videos recommended alongside a public YouTube video.
- `youtube.video.sponsors`: Say whether a YouTube video is marked as a paid promotion and which brands it seems to promote.
- `youtube.video.transcript`: Get the spoken words of a YouTube video as one text, with its language, by the video's address. Returns personal data: what the people in the video say.

## Zhihu

Search Zhihu questions, answers, articles and read user profiles.

- `zhihu.article.detail`: Get an article's content & stats on Zhihu. Returns personal data: the public Zhihu names and ids of the people involved.
- `zhihu.article.search`: Search Zhihu's articles by keyword, with each result's author and engagement. Returns personal data: the authors' public names.
- `zhihu.column.search`: Search Zhihu columns by keyword. Returns personal data: public names, profile details and published content.
- `zhihu.ebook.search`: Search Zhihu's e-books and paid columns by keyword. Returns personal data: the authors' public names.
- `zhihu.feed.recommend`: List public answers in Zhihu’s recommendation feed. Returns personal data: Public names and published content on the platform..
- `zhihu.question.answers`: Read a Zhihu question's answers, with each answer's author, votes and excerpt. Returns personal data: the authors' public names.
- `zhihu.question.detail`: Read one Zhihu question: its title, body and how much attention it has.
- `zhihu.salt.search`: Search public story titles, descriptions and links.
- `zhihu.search.content`: Search Zhihu by keyword. Returns personal data: public names, profile details and published content.
- `zhihu.search.suggestions`: Zhihu preset search suggestions. Returns personal data: public names, profile details and published content.
- `zhihu.suggest.search`: Zhihu search suggestions by partial keyword. Returns personal data: public names, profile details and published content.
- `zhihu.topic.search`: Search Zhihu topics by keyword. Returns personal data: public names, profile details and published content.
- `zhihu.trending.list`: Read public trending questions without author profiles.
- `zhihu.user.articles`: List a user's published articles on Zhihu. Returns personal data: the public Zhihu names and ids of the people involved.
- `zhihu.user.followed-columns`: List columns a user follows on Zhihu. Returns personal data: the public Zhihu names and ids of the people involved.
- `zhihu.user.followed-questions`: List the questions a Zhihu user follows, by the user's profile token, with each question's answers and followers.
- `zhihu.user.followers`: List a user's followers on Zhihu. Returns personal data: the public Zhihu names and ids of the people involved.
- `zhihu.user.following`: List accounts a user follows on Zhihu. Returns personal data: the public Zhihu names and ids of the people involved.
- `zhihu.user.included-articles`: List a Zhihu user's articles that Zhihu included in its curated collections, by the user's profile token. Returns personal data: the public Zhihu names of the authors.
- `zhihu.user.profile`: Get a user's public profile on Zhihu. Returns personal data: the member's public name, headline and profile link.
- `zhihu.user.search`: Search Zhihu users by keyword. Returns personal data: public names, profile details and published content.
- `zhihu.video.search`: Search Zhihu videos by keyword. Returns personal data: public names, profile details and published content.
