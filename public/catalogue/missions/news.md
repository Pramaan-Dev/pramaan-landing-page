# Missions: News

Headlines, articles and news feeds on any topic, company or market.

- `news.timeline`: Build a news timeline for a topic. The dated events on a topic in order, each tied to the article that reports it. The date is the article's publish time; each event is checked against its own article. (steps: web.news.search, web.read, llm.complete)
- `news.digest`: Digest recent news on a topic. Recent news on a topic: the news search's articles that name the topic and were published inside the window, de-duplicated, each read, with a written digest and one line per article, each checked against the articles it is about. (steps: google.serp.news, web.read, llm.complete)
- `brand.mentions.report`: Report on brand mentions in the news. Brand mention counts grouped by month, source-wide tone and individually checked page snippets. (steps: web.brand-mentions.search, web.mentions.summary, web.mentions.history, web.mentions.sentiment, web.mentions.ratings, web.mentions.category-history, text.sentiment.analyze)
- `company.news.digest`: Summarise recent news on a company. What happened at a company lately: articles from two news sources, de-duplicated, grouped into stories and digested. (steps: companies.news, google.serp.news, web.read, llm.complete)
