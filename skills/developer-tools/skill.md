---
name: pramaan-developer-tools
version: 1.0.0
description: Use Pramaan superpowers and missions when working with developer tools.
---

# Developer tools

Find one superpower for one job, or a mission for a sequence of jobs. This is a catalogue, not proof of live availability.

Setup and shared safety rules: https://www.pramaan.dev/skill.md

## Search → inspect → quote → run

1. Search with list_capabilities (superpowers) or list_outcomes (missions).
2. Inspect with describe_capability or describe_outcome. Build input from the schema; check availability.
3. Call quote with kind (superpower or mission), id and input; include mission options if needed. Read price_max_micro, can_run and message, and the mission plan. Prices are millionths of a dollar. If can_run is false, resolve the stated need before continuing. Nothing runs during a quote.
4. Show the maximum price. Get an explicit yes for actions that require approval, then use run_capability or run_outcome with the same input. Reuse the same idempotency key on retries. Mission runs validate their plan. Over MCP the person is asked when a plan needs a yes; over the SDK and HTTP nothing asks, and a plan that needs approval is refused (approval_required) unless you send the approved plan or a signed-in member approves it in the app. Quote again if inputs change.

## Superpowers

### General

| Id | What it does | Price basis |
|---|---|---|
| `api.public-catalog.search` | Search a public API catalog by keyword and category on zpi.web.id. | Per successful call; quote exact input for the maximum price. |
| `api.public-description.get` | Read a public API description and its endpoint documentation on zpi.web.id. | Per successful call; quote exact input for the maximum price. |
| `code.agent-trace.analyze` | Read an AI agent's execution trace and find where and why it failed, with a suggested fix. | Per successful call; quote exact input for the maximum price. |
| `code.all-lessons-for-course.get` | Read all lessons for course — web development curriculum. | Per successful call; quote exact input for the maximum price. |
| `code.api-docs.generate` | Write Markdown documentation for an API from its OpenAPI description or a plain description. | Per successful call; quote exact input for the maximum price. |
| `code.api-mock.generate` | Make up a realistic example response for an API endpoint. | Per successful call; quote exact input for the maximum price. |
| `code.articles.get` | Read a public developer article and its publication metadata on juejin.cn. | Per successful call; quote exact input for the maximum price. |
| `code.articles.list` | List public developer articles with publication dates and topic tags on juejin.cn. | Per successful call; quote exact input for the maximum price. |
| `code.articles.search` | Search public developer articles by query on juejin.cn. | Per successful call; quote exact input for the maximum price. |
| `code.assistant-skills.list` | List public assistant skill names and descriptions on mcpservers.org. | Per successful call; quote exact input for the maximum price. |
| `code.beam.calculate` | Calculate support reactions and force diagrams for a two-dimensional beam on polycalc.online. | Per successful call; quote exact input for the maximum price. |
| `code.browser-model-configs.search` | Find published browser model runtime configurations by model-name substring on cdn.jsdelivr.net. | Per successful call; quote exact input for the maximum price. |
| `code.changelog.generate` | Turn a list of commits into a readable changelog grouped by kind of change. Takes raw commit log text; for release notes from a list of commits with a version use code.release-notes.generate. | Per successful call; quote exact input for the maximum price. |
| `code.chat-service.status.get` | Read the current public chat service availability flags on duck.ai. | Per successful call; quote exact input for the maximum price. |
| `code.cheatsheets.list` | List technology cheatsheets with categories and tags on quickref.me. | Per successful call; quote exact input for the maximum price. |
| `code.cheatsheets.search` | Find technology cheatsheets by keyword on quickref.me. | Per successful call; quote exact input for the maximum price. |
| `code.chip-document-types.list` | List public embedded chip document types on espressif.com. | Per successful call; quote exact input for the maximum price. |
| `code.chip-documents.search` | Search public embedded chip technical documents on espressif.com. | Per successful call; quote exact input for the maximum price. |
| `code.chip-series.list` | List public embedded chip product series on espressif.com. | Per successful call; quote exact input for the maximum price. |
| `code.clean-roadmap-nodes.get` | Read clean roadmap nodes — developer learning roadmaps. | Per successful call; quote exact input for the maximum price. |
| `code.cloud-device-availability.list` | Read public cloud device plan availability by region on ldcloud.net. | Per successful call; quote exact input for the maximum price. |
| `code.cloud-device-plans.list` | List public cloud device hardware and video configuration plans on ldcloud.net. | Per successful call; quote exact input for the maximum price. |
| `code.cloud-device-recharge.list` | List publicly advertised cloud device wallet top-up options by country on ldcloud.net. | Per successful call; quote exact input for the maximum price. |
| `code.cloud-games.list` | List publicly available cloud-streamed games and local player support on nvidia.com. | Per successful call; quote exact input for the maximum price. |
| `code.coding-challenges.list` | List public coding challenges with difficulty and success statistics on hackerrank.com. | Per successful call; quote exact input for the maximum price. |
| `code.coding-contests.list` | List public coding contests with duration and start timestamps on leetcode.com. | Per successful call; quote exact input for the maximum price. |
| `code.coding-problems.search` | Search public coding problems with topic tags and difficulty on leetcode.com. | Per successful call; quote exact input for the maximum price. |
| `code.commit-message.generate` | Write a conventional commit message from a code diff or a description of the change. | Per successful call; quote exact input for the maximum price. |
| `code.community-topics.list` | List public developer community topics with activity counts on linux.do. | Per successful call; quote exact input for the maximum price. |
| `code.container-platform.status` | Read the overall public container platform service status on dockerstatus.com. | Per successful call; quote exact input for the maximum price. |
| `code.container-service.status` | Read one public container platform service status on dockerstatus.com. | Per successful call; quote exact input for the maximum price. |
| `code.container-services.status` | List public container platform service status and regional components on dockerstatus.com. | Per successful call; quote exact input for the maximum price. |
| `code.convert` | Translate source code from one programming language to another. | Per successful call; quote exact input for the maximum price. |
| `code.course.get` | Read course — web development curriculum. | Per successful call; quote exact input for the maximum price. |
| `code.cpu-instruction-summaries.search` | Search processor instructions by description on felixcloutier.com. | Per successful call; quote exact input for the maximum price. |
| `code.cpu-instructions.get` | Read processor instruction behavior, flags and opcode descriptions on felixcloutier.com. | Per successful call; quote exact input for the maximum price. |
| `code.cpu-instructions.list` | List processor instruction mnemonics with summaries on felixcloutier.com. | Per successful call; quote exact input for the maximum price. |
| `code.cpu-instructions.search` | Search processor instructions by mnemonic on felixcloutier.com. | Per successful call; quote exact input for the maximum price. |
| `code.cpu-opcodes.list` | List encodings and mode support for a processor instruction on felixcloutier.com. | Per successful call; quote exact input for the maximum price. |
| `code.crawler-integrations.list` | List public crawler integration names and descriptions. | Per successful call; quote exact input for the maximum price. |
| `code.cron.explain` | Explain a cron schedule in plain words and list its next run times. | Per successful call; quote exact input for the maximum price. |
| `code.cron.generate` | Turn a schedule described in plain words into a cron expression. | Per successful call; quote exact input for the maximum price. |
| `code.cross-section.calculate` | Calculate a composite cross-section centroid, area and moments of inertia on polycalc.online. | Per successful call; quote exact input for the maximum price. |
| `code.curl.convert` | Turn a curl command into code in another programming language. | Per successful call; quote exact input for the maximum price. |
| `code.curriculum.projects.list` | List projects — web development curriculum. | Per successful call; quote exact input for the maximum price. |
| `code.decompilation-statistics.get` | Read aggregate public decompilation project and assembly counts on decomp.me. | Per successful call; quote exact input for the maximum price. |
| `code.dependencies.audit` | Check a project's npm or Python dependencies for newer, deprecated or vulnerable versions. | Per successful call; quote exact input for the maximum price. |
| `code.design-flows.get` | Read public interface flow details and screen patterns on mobbin.com. | Per successful call; quote exact input for the maximum price. |
| `code.design-flows.list` | List public interface flow categories and preview counts on mobbin.com. | Per successful call; quote exact input for the maximum price. |
| `code.design-flows.search` | Search public interface flow categories on mobbin.com. | Per successful call; quote exact input for the maximum price. |
| `code.design-prompts.get` | Read publicly accessible website design prompt text on motionsites.ai. | Per successful call; quote exact input for the maximum price. |
| `code.design-prompts.list` | List public website design prompt metadata on motionsites.ai. | Per successful call; quote exact input for the maximum price. |
| `code.design-prompts.list-free` | Read free public website design prompts by template type on motionsites.ai. | Per successful call; quote exact input for the maximum price. |
| `code.dockerfile.generate` | Write a production Dockerfile for a language and framework. | Per successful call; quote exact input for the maximum price. |
| `code.docstrings.generate` | Add docstrings to Python functions and classes. | Per successful call; quote exact input for the maximum price. |
| `code.editor-rule.get` | Read a public editor coding rule and its tags on cursor.directory. | Per successful call; quote exact input for the maximum price. |
| `code.electronic-component.get` | Read an electronic component manufacturer and description on componentsearchengine.com. | Per successful call; quote exact input for the maximum price. |
| `code.electronic-components.rank` | List popular electronic components with design-model availability on componentsearchengine.com. | Per successful call; quote exact input for the maximum price. |
| `code.electronic-components.search` | Search electronic components by part number and keyword on componentsearchengine.com. | Per successful call; quote exact input for the maximum price. |
| `code.electronic-datasheet.get` | Read electronic component datasheet metadata from its public compound identifier on alldatasheet.com. | Per successful call; quote exact input for the maximum price. |
| `code.electronic-datasheets.search` | Search electronic component datasheets by part number or description on alldatasheet.com. | Per successful call; quote exact input for the maximum price. |
| `code.env-template.generate` | Find the environment variables a piece of code reads and write an example .env file for them. | Per successful call; quote exact input for the maximum price. |
| `code.error.explain` | Explain an error message or stack trace in plain words, with its likely cause and fixes. | Per successful call; quote exact input for the maximum price. |
| `code.example-products.search` | Browse synthetic example product records for application development on dummyjson.com. | Per successful call; quote exact input for the maximum price. |
| `code.fonts.get` | Read typeface catalogue metadata by family name, including variable axes and available variants on fonts.google.com. | Per successful call; quote exact input for the maximum price. |
| `code.fonts.search` | Search the public typeface catalogue by family name, script and category on fonts.google.com. | Per successful call; quote exact input for the maximum price. |
| `code.game-cartridges.get` | Read public fantasy-console game cartridge metadata on lexaloffle.com. | Per successful call; quote exact input for the maximum price. |
| `code.game-cartridges.list` | List public fantasy-console game cartridges by newest first on lexaloffle.com. | Per successful call; quote exact input for the maximum price. |
| `code.game-cartridges.list-new` | Read newly published fantasy-console game cartridges until known ids on lexaloffle.com. | Per successful call; quote exact input for the maximum price. |
| `code.game-server.bedrock.get` | Read a public Bedrock-edition game server status and player counts on mcsrvstat.us. | Per successful call; quote exact input for the maximum price. |
| `code.game-server.check` | Read whether a public Minecraft host is reachable and how many players it reports on mcsrvstat.us. | Per successful call; quote exact input for the maximum price. |
| `code.game-server.java.get` | Read a public Java-edition game server status and player counts on mcsrvstat.us. | Per successful call; quote exact input for the maximum price. |
| `code.git-command-version.get` | Read a version control command reference for a selected release on git-scm.com. | Per successful call; quote exact input for the maximum price. |
| `code.git-command.get` | Read a version control command reference page on git-scm.com. | Per successful call; quote exact input for the maximum price. |
| `code.git-commands.list` | List version control commands and their categories on git-scm.com. | Per successful call; quote exact input for the maximum price. |
| `code.git-docs.search` | Search version control documentation pages on git-scm.com. | Per successful call; quote exact input for the maximum price. |
| `code.git-overview.get` | Read the current version control software overview and latest release on git-scm.com. | Per successful call; quote exact input for the maximum price. |
| `code.git-reference.list` | List version control command reference categories on git-scm.com. | Per successful call; quote exact input for the maximum price. |
| `code.gitee-user.get` | Read a developer's public profile on gitee.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `code.graphics-driver-options.get` | Read public driver product, system and language filter options on nvidia.com. | Per successful call; quote exact input for the maximum price. |
| `code.graphics-drivers.search` | Read public graphics driver version and download information on nvidia.com. | Per successful call; quote exact input for the maximum price. |
| `code.graphics-function-categories.list` | List graphics API categories with their documented functions on docs.gl. | Per successful call; quote exact input for the maximum price. |
| `code.graphics-function-names.list` | List graphics API function names available in a version family on docs.gl. | Per successful call; quote exact input for the maximum price. |
| `code.graphics-function.get` | Read graphics API function signature, parameters, examples and error notes on docs.gl. | Per successful call; quote exact input for the maximum price. |
| `code.graphics-functions.list` | List public graphics API functions and supported versions on docs.gl. | Per successful call; quote exact input for the maximum price. |
| `code.graphics-functions.search` | Search graphics API functions by name on docs.gl. | Per successful call; quote exact input for the maximum price. |
| `code.graphics-games.list` | List games and applications with published graphics technology support on nvidia.com. | Per successful call; quote exact input for the maximum price. |
| `code.graphics-news.list` | List public graphics hardware news articles by topic on nvidia.com. | Per successful call; quote exact input for the maximum price. |
| `code.graphics-products.get` | Read public graphics hardware product specifications and offer labels on nvidia.com. | Per successful call; quote exact input for the maximum price. |
| `code.guides.list` | List guides — developer learning roadmaps. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `code.hackathons.search` | Search public hackathons by status, keyword and deadline order on devpost.com. | Per successful call; quote exact input for the maximum price. |
| `code.homepage.list` | List homepage — programming tutorial site. | Per successful call; quote exact input for the maximum price. |
| `code.hosted-websites.list` | List public website hosting facts by popularity on myip.ms. | Per successful call; quote exact input for the maximum price. |
| `code.hosting-bundles.list` | List publicly advertised hosting bundle products and subscription terms on namecheap.com. | Per successful call; quote exact input for the maximum price. |
| `code.hosting-companies.list` | List public hosting companies by country and website counts on myip.ms. | Per successful call; quote exact input for the maximum price. |
| `code.hosting-company-details.get` | Read hosting company details on myip.ms. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `code.http-status.inspect` | Read the observed HTTP status and response description for a requested code on httpbun.com. | Per successful call; quote exact input for the maximum price. |
| `code.icon-preview.search` | Find an icon preview and public style metadata by keyword on icons8.com. | Per successful call; quote exact input for the maximum price. |
| `code.icon-styles.list` | List public icon styles available for a keyword on icons8.com. | Per successful call; quote exact input for the maximum price. |
| `code.image-manifest.get` | Read a public image presentation manifest and canvas dimensions on iiif.io. | Per successful call; quote exact input for the maximum price. |
| `code.image-manifest.metadata.get` | Read normalized public image manifest metadata on iiif.io. | Per successful call; quote exact input for the maximum price. |
| `code.image-manifest.validate` | Read validation flags for a public image presentation manifest on iiif.io. | Per successful call; quote exact input for the maximum price. |
| `code.image-standard.events.list` | List public image interoperability community events on iiif.io. | Per successful call; quote exact input for the maximum price. |
| `code.image-standard.news.list` | List public image interoperability news articles on iiif.io. | Per successful call; quote exact input for the maximum price. |
| `code.image-standard.recipes.list` | List public image presentation cookbook recipes on iiif.io. | Per successful call; quote exact input for the maximum price. |
| `code.industrial-version-control-doc.get` | Read one public industrial version control documentation page on docs.copia.io. | Per successful call; quote exact input for the maximum price. |
| `code.industrial-version-control-docs.list` | List public industrial version control documentation pages on docs.copia.io. | Per successful call; quote exact input for the maximum price. |
| `code.industrial-version-control-docs.search` | Search public industrial version control documentation on docs.copia.io. | Per successful call; quote exact input for the maximum price. |
| `code.jwt.decode` | Decode a JSON Web Token without checking its signature, with its claims and whether it has expired. | Per successful call; quote exact input for the maximum price. |
| `code.languages.list` | List the languages code execution accepts, as lowercase names to pass as `language`. | Per successful call; quote exact input for the maximum price. |
| `code.lesson-changelog.get` | Read lesson changelog — web development curriculum. | Per successful call; quote exact input for the maximum price. |
| `code.lesson-resources.get` | Read lesson resources — web development curriculum. | Per successful call; quote exact input for the maximum price. |
| `code.lesson.get` | Read lesson — web development curriculum. | Per successful call; quote exact input for the maximum price. |
| `code.lessons.search` | Search lessons — web development curriculum. | Per successful call; quote exact input for the maximum price. |
| `code.logs.parse` | Parse log text in any common format and summarise its errors, warnings and time range. | Per successful call; quote exact input for the maximum price. |
| `code.machine-docs-directories.search` | Search companies publishing machine-readable website documentation on directory.llmstxt.cloud. | Per successful call; quote exact input for the maximum price. |
| `code.maven-artifacts.get` | Read a public Java artifact summary and latest release label on mvnrepository.com. | Per successful call; quote exact input for the maximum price. |
| `code.maven-artifacts.list-popular` | List popular public Java artifacts with usage labels on mvnrepository.com. | Per successful call; quote exact input for the maximum price. |
| `code.maven-artifacts.search` | Search public Java artifacts by keyword on mvnrepository.com. | Per successful call; quote exact input for the maximum price. |
| `code.mcp-servers.search` | Search a public directory of model context protocol servers on brofindai.com. | Per successful call; quote exact input for the maximum price. |
| `code.msys2-builds.list` | List packages queued for building in the MSYS2 repositories on packages.msys2.org. | Per successful call; quote exact input for the maximum price. |
| `code.msys2-mirrors.list` | List public MSYS2 mirrors and synchronization statistics on packages.msys2.org. | Per successful call; quote exact input for the maximum price. |
| `code.msys2-outdated.list` | List MSYS2 packages with newer upstream versions on packages.msys2.org. | Per successful call; quote exact input for the maximum price. |
| `code.msys2-package.get` | Read an MSYS2 binary package and its dependencies on packages.msys2.org. | Per successful call; quote exact input for the maximum price. |
| `code.msys2-packages.list` | List binary packages in an MSYS2 repository on packages.msys2.org. | Per successful call; quote exact input for the maximum price. |
| `code.msys2-packages.search` | Search binary and base packages in the MSYS2 repositories on packages.msys2.org. | Per successful call; quote exact input for the maximum price. |
| `code.msys2-removals.list` | List packages pending removal from the MSYS2 repositories on packages.msys2.org. | Per successful call; quote exact input for the maximum price. |
| `code.msys2-repositories.list` | List MSYS2 package repositories and their storage statistics on packages.msys2.org. | Per successful call; quote exact input for the maximum price. |
| `code.msys2-traffic.get` | Read transfer statistics for the MSYS2 repository server on packages.msys2.org. | Per successful call; quote exact input for the maximum price. |
| `code.nginx-config.generate` | Write an nginx server configuration for a domain, with TLS, proxying and security settings. | Per successful call; quote exact input for the maximum price. |
| `code.npm.package` | Details of a package on the npm registry, such as its latest version, licence, dependencies and dates. | Per successful call; quote exact input for the maximum price. |
| `code.outline-icon-names.list` | List available outline icon names on lucide.dev. | Per successful call; quote exact input for the maximum price. |
| `code.outline-icons.get-metadata` | Read outline icon category and tag metadata on lucide.dev. | Per successful call; quote exact input for the maximum price. |
| `code.outline-icons.search` | Search available outline icon names by keyword on lucide.dev. | Per successful call; quote exact input for the maximum price. |
| `code.path-curriculum-outline.get` | Read path curriculum outline — web development curriculum. | Per successful call; quote exact input for the maximum price. |
| `code.path.get` | Read path — web development curriculum. | Per successful call; quote exact input for the maximum price. |
| `code.paths.list` | List paths — web development curriculum. | Per successful call; quote exact input for the maximum price. |
| `code.plane-stress.calculate` | Calculate principal stresses and maximum shear for a plane stress state on polycalc.online. | Per successful call; quote exact input for the maximum price. |
| `code.practice-problem.get` | Read a public programming problem statement and difficulty on codechef.com. | Per successful call; quote exact input for the maximum price. |
| `code.practice-problems.search` | Search public programming practice problems by difficulty and keyword on codechef.com. | Per successful call; quote exact input for the maximum price. |
| `code.process.get` | Read an owned process state and bounded logs; successful package installs also return installed versions. Output may contain caller personal data. | Per successful call; quote exact input for the maximum price. |
| `code.process.start` | Start an owned background process with bounded output and a deadline inside its prepaid sandbox lease. Code, arguments and logs may contain personal data. | Per successful call; quote exact input for the maximum price. |
| `code.process.stop` | Stop an owned background process and confirm it ended. | Per successful call; quote exact input for the maximum price. |
| `code.program.run` | Run a program or a validated ZIP archive as a background job with compiler options, arguments, native output comparison and explicit resource limits. Code, input, files and logs may contain personal data. Up to 20 repeats; maximum declared execution cost $0.024 before platform pricing. | Per successful call; quote exact input for the maximum price. |
| `code.program.run-bulk` | Run up to 10 programs as background jobs with results keyed by your row ids. Each row uses the same validated source/archive and execution limits as program.run. Failed rows are free. Maximum declared cost is $0.24 before platform pricing. | Per successful call; quote exact input for the maximum price. |
| `code.programming-contest.get` | Read a public programming contest name and code on codechef.com. | Per successful call; quote exact input for the maximum price. |
| `code.programming-contests.list` | Read future and past public programming contest summaries on codechef.com. | Per successful call; quote exact input for the maximum price. |
| `code.projects.list` | List projects — developer learning roadmaps. | Per successful call; quote exact input for the maximum price. |
| `code.public-projects.list` | List publicly advertised software project descriptions on merc.guru. | Per successful call; quote exact input for the maximum price. |
| `code.pypi.package` | Details of a package on the Python package index, such as its latest version, licence, dependencies and releases. | Per successful call; quote exact input for the maximum price. |
| `code.python-archive.list` | Browse public Python archive directories and binary artifacts on python.org. | Per successful call; quote exact input for the maximum price. |
| `code.python-events.list` | List upcoming public Python events and locations on python.org. | Per successful call; quote exact input for the maximum price. |
| `code.python-files.list` | List Python binary artifacts and checksums across releases or for one release on python.org. | Per successful call; quote exact input for the maximum price. |
| `code.python-maintenance.list` | List active Python versions and their maintenance status on python.org. | Per successful call; quote exact input for the maximum price. |
| `code.python-news.list` | List public Python news articles and summaries on python.org. | Per successful call; quote exact input for the maximum price. |
| `code.python-platform-releases.get` | Read Python release downloads for an operating system on python.org. | Per successful call; quote exact input for the maximum price. |
| `code.python-platforms.list` | List operating systems supported by Python downloads on python.org. | Per successful call; quote exact input for the maximum price. |
| `code.python-release.get` | Read a Python release by its public record id or select the latest stable release on python.org. | Per successful call; quote exact input for the maximum price. |
| `code.python-releases.list` | List published Python releases and their release dates on python.org. | Per successful call; quote exact input for the maximum price. |
| `code.questions.list` | List questions — developer learning roadmaps. | Per successful call; quote exact input for the maximum price. |
| `code.recent-scratches.get` | Read recent scratches on decomp.me. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `code.release-notes.generate` | Write release notes from a commit log, grouped by kind of change. Takes a list of commits and a version and returns a dated summary; for a changelog from raw log text use code.changelog.generate. | Per successful call; quote exact input for the maximum price. |
| `code.repo-commits.list` | List repo commits on gitee.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `code.repo.analyze` | Assess a public code repository's languages, activity, documentation and risks. | Per successful call; quote exact input for the maximum price. |
| `code.repositories.lookup` | Look up public repository metadata by owner/name, without running code or reading private accounts. | Per successful call; quote exact input for the maximum price. |
| `code.repository-classification.get` | Read public repository recommendation and project classification flags on gitee.com. | Per successful call; quote exact input for the maximum price. |
| `code.repository-contents.list` | List public repository files and directories on gitee.com. | Per successful call; quote exact input for the maximum price. |
| `code.review` | Review source code and list problems with their severity, line and a suggested fix. | Per successful call; quote exact input for the maximum price. |
| `code.roadmap-detail.get` | Read roadmap detail — developer learning roadmaps. | Per successful call; quote exact input for the maximum price. |
| `code.roadmap-relations.get` | Read roadmap relations — developer learning roadmaps. | Per successful call; quote exact input for the maximum price. |
| `code.roadmap-topics.get` | Read roadmap topics — developer learning roadmaps. | Per successful call; quote exact input for the maximum price. |
| `code.roadmaps.list` | List roadmaps — developer learning roadmaps. | Per successful call; quote exact input for the maximum price. |
| `code.roadmaps.search` | Search roadmaps — developer learning roadmaps. | Per successful call; quote exact input for the maximum price. |
| `code.rules-by-category.list` | List rules by category on cursor.directory. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `code.rules.list` | List rules on cursor.directory. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `code.run` | Run a code snippet in a sandboxed interpreter for a chosen language with stdin, time and memory limits; returns stdout, stderr, exit code and timing. The code can reach the internet. | Per successful call; quote exact input for the maximum price. |
| `code.sandbox.create` | Start a persistent code sandbox for a language; later code.sandbox.run calls reuse its files and state. npm and pip installs work; the sandbox reaches nothing else on the internet, so packages that download extra files from other sites during install will fail. Billed for the whole time-to-live. Returns a ref for code.sandbox.run and code.sandbox.delete. | Per successful call; quote exact input for the maximum price. |
| `code.sandbox.create-configured` | Create a configured sandbox with a controlled runtime and non-secret environment. Only the three package registries are reachable. Billed for the full lifetime; optional graphics or Windows choices cost more. Maximum configured lease is $3.53408 before platform pricing. | Per successful call; quote exact input for the maximum price. |
| `code.sandbox.delete` | Permanently delete a code sandbox created with code.sandbox.create and stop its billing. Pass the ref that code.sandbox.create returned. | Per successful call; quote exact input for the maximum price. |
| `code.sandbox.env.get` | Read only caller-created non-secret sandbox variables; platform and system credentials are excluded. | Per successful call; quote exact input for the maximum price. |
| `code.sandbox.get` | Read owned sandbox state, runtime, prepaid deadline and reserved resources. | Per successful call; quote exact input for the maximum price. |
| `code.sandbox.packages.install` | Start a bounded background npm or pip install in an owned sandbox. Only registry package names are accepted. Follow the returned process reference for progress, logs and installed versions. | Per successful call; quote exact input for the maximum price. |
| `code.sandbox.pause` | Pause an owned sandbox; keeping memory preserves running state. Poll sandbox.get to confirm completion. | Per successful call; quote exact input for the maximum price. |
| `code.sandbox.resume` | Resume an owned paused sandbox with an explicit new prepaid lifetime. Maximum supported lease is $3.53408 before platform pricing. | Per successful call; quote exact input for the maximum price. |
| `code.sandbox.run` | Run a snippet inside a sandbox created with code.sandbox.create; its files and state persist between runs. Pass the ref that code.sandbox.create returned. | Per successful call; quote exact input for the maximum price. |
| `code.scratch-detail.get` | Read scratch detail on decomp.me. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `code.script-doc.get` | Read a public script-language reference entry and syntax on docs.livecode.com. | Per successful call; quote exact input for the maximum price. |
| `code.script-docs.list` | List public script-language documentation entries in a category on docs.livecode.com. | Per successful call; quote exact input for the maximum price. |
| `code.search-docs.breaking-changes.list` | List documented search engine breaking changes by version on docs.opensearch.org. | Per successful call; quote exact input for the maximum price. |
| `code.search-docs.navigation.get` | Read the navigation tree of a search engine documentation version on docs.opensearch.org. | Per successful call; quote exact input for the maximum price. |
| `code.search-docs.page.get` | Read search-engine reference text, headings and code blocks by a documentation path on docs.opensearch.org. | Per successful call; quote exact input for the maximum price. |
| `code.search-docs.page.summarize` | Read a search engine documentation overview and its key topics on docs.opensearch.org. | Per successful call; quote exact input for the maximum price. |
| `code.search-docs.releases.list` | List search engine releases with published dates and highlights on docs.opensearch.org. | Per successful call; quote exact input for the maximum price. |
| `code.search-docs.search` | Search a search engine documentation collection by version on docs.opensearch.org. | Per successful call; quote exact input for the maximum price. |
| `code.search-docs.versions.list` | List maintained and archived search engine documentation versions on docs.opensearch.org. | Per successful call; quote exact input for the maximum price. |
| `code.secrets.scan` | Scan code, config or log text for leaked keys and tokens, with a count by severity. | Per successful call; quote exact input for the maximum price. |
| `code.service-outages.get` | Read service outage reports and baseline time series in Brazil on downdetector.com.br. | Per successful call; quote exact input for the maximum price. |
| `code.service-outages.list` | List current service outages and report counts in the United States on downdetector.com. | Per successful call; quote exact input for the maximum price. |
| `code.service-statuses.list` | List ranked service status and report activity in Indonesia on downdetector.id. | Per successful call; quote exact input for the maximum price. |
| `code.software-category.list` | Browse public software listings in a category and operating system on download.com. | Per successful call; quote exact input for the maximum price. |
| `code.software-popular.list` | List popular public software for an operating system on download.com. | Per successful call; quote exact input for the maximum price. |
| `code.software-releases.list` | List newly released public software for an operating system on download.com. | Per successful call; quote exact input for the maximum price. |
| `code.software.get` | Read public software product details and technical specifications on download.com. | Per successful call; quote exact input for the maximum price. |
| `code.software.list` | Browse ranked public software listings for an operating system on download.com. | Per successful call; quote exact input for the maximum price. |
| `code.software.search` | Search public software listings by query and operating system on download.com. | Per successful call; quote exact input for the maximum price. |
| `code.solidity-article.get` | Read a public Solidity language article without author records on soliditylang.org. | Per successful call; quote exact input for the maximum price. |
| `code.solidity-articles.list` | List public Solidity language articles without author records on soliditylang.org. | Per successful call; quote exact input for the maximum price. |
| `code.solidity-bugs.list` | List known Solidity compiler bugs and affected versions on soliditylang.org. | Per successful call; quote exact input for the maximum price. |
| `code.solidity-chapter.get` | Read a Solidity reference chapter as plain text with section headings on soliditylang.org. | Per successful call; quote exact input for the maximum price. |
| `code.solidity-docs.get` | Read the Solidity documentation home and table of contents on soliditylang.org. | Per successful call; quote exact input for the maximum price. |
| `code.solidity-docs.search` | Search the Solidity documentation for a topic on soliditylang.org. | Per successful call; quote exact input for the maximum price. |
| `code.solidity-versions.list` | List available Solidity documentation versions on soliditylang.org. | Per successful call; quote exact input for the maximum price. |
| `code.sql.explain` | Explain a SQL query in plain words, with its steps, likely problems and ways to speed it up. | Per successful call; quote exact input for the maximum price. |
| `code.telephony-docs.list` | List public telephony developer documentation pages on developer.truecaller.com. | Per successful call; quote exact input for the maximum price. |
| `code.tool-clients.list` | List public tool protocol client applications on the chosen site. | Per successful call; quote exact input for the maximum price. |
| `code.tool-server-categories.list` | List public tool server directory categories on mcp.so. | Per successful call; quote exact input for the maximum price. |
| `code.tool-server-tags.list` | List public tool server directory topic tags on mcp.so. | Per successful call; quote exact input for the maximum price. |
| `code.tool-server-tools.list` | List the documented tools of a public tool server on mcp.so. | Per successful call; quote exact input for the maximum price. |
| `code.tool-servers.get` | Read public tool server metadata without executable configuration on the chosen site. | Per successful call; quote exact input for the maximum price. |
| `code.tool-servers.list` | Browse public tool server directory listings on the chosen site. | Per successful call; quote exact input for the maximum price. |
| `code.tool-servers.list-by-category` | Browse public tool server directory entries by category on the chosen site. | Per successful call; quote exact input for the maximum price. |
| `code.tool-servers.list-by-tag` | Browse public tool server directory entries by tag on mcp.so. | Per successful call; quote exact input for the maximum price. |
| `code.tool-servers.list-featured` | List featured public tool server directory entries on mcpservers.org. | Per successful call; quote exact input for the maximum price. |
| `code.tool-servers.list-official` | Browse officially maintained public tool server listings on mcpservers.org. | Per successful call; quote exact input for the maximum price. |
| `code.tool-servers.list-popular` | List popular public tool servers with descriptive metadata on mcp.so. | Per successful call; quote exact input for the maximum price. |
| `code.tool-servers.list-remote` | List public remotely hosted tool servers on mcpservers.org. | Per successful call; quote exact input for the maximum price. |
| `code.tool-servers.search` | Search public tool server directory listings on the chosen site. | Per successful call; quote exact input for the maximum price. |
| `code.top-navbar.list` | List top navbar — programming tutorial site. | Per successful call; quote exact input for the maximum price. |
| `code.topic-detail.get` | Read topic detail — developer learning roadmaps. | Per successful call; quote exact input for the maximum price. |
| `code.track-scores.get` | Read track scores on hackerrank.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `code.tutorial-directory.get` | Read tutorial directory — programming tutorial site. | Per successful call; quote exact input for the maximum price. |
| `code.tutorial-metadata.get` | Read tutorial metadata — programming tutorial site. | Per successful call; quote exact input for the maximum price. |
| `code.tutorial-page-content.get` | Read tutorial page content — programming tutorial site. | Per successful call; quote exact input for the maximum price. |
| `code.tutorials-by-category.list` | List tutorials by category — programming tutorial site. | Per successful call; quote exact input for the maximum price. |
| `code.tutorials.search` | Search tutorials — programming tutorial site. | Per successful call; quote exact input for the maximum price. |
| `code.user-contest-history.get` | Read user contest history on leetcode.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `code.user-contributions.get` | Read user contributions on decomp.me. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `code.user-info.get` | Read user info on codechef.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `code.user-profile.get` | Read user profile on leetcode.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `code.user-recent-submissions.get` | Read user recent submissions on codechef.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `code.user-repos.list` | List user repos on gitee.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `code.version-control.client-fields.list` | List documented version control client form fields on help.perforce.com. | Per successful call; quote exact input for the maximum price. |
| `code.version-control.client-options.list` | List documented version control client option meanings and defaults on help.perforce.com. | Per successful call; quote exact input for the maximum price. |
| `code.version-control.client-reference.get` | Read documented version control client syntax and options on help.perforce.com. | Per successful call; quote exact input for the maximum price. |
| `code.version-control.command.get` | Read a centralized version control command reference on help.perforce.com. | Per successful call; quote exact input for the maximum price. |
| `code.version-control.commands.list` | List public centralized version control command references on help.perforce.com. | Per successful call; quote exact input for the maximum price. |
| `code.version-control.configuration.list` | List documented version control configuration settings on help.perforce.com. | Per successful call; quote exact input for the maximum price. |
| `code.version-control.docs.search` | Search public centralized version control documentation on help.perforce.com. | Per successful call; quote exact input for the maximum price. |
| `code.version-control.line-endings.list` | List documented version control line-ending options on help.perforce.com. | Per successful call; quote exact input for the maximum price. |
| `code.virtual-server-plans.list` | List public virtual server plan specifications and euro price labels on ionos.es. | Per successful call; quote exact input for the maximum price. |
| `code.virtualization-docs.search` | Search public virtualization product documentation on docs.citrix.com. | Per successful call; quote exact input for the maximum price. |
| `code.wargame-archive.get` | Read instructions for an archived security practice game on overthewire.org. | Per successful call; quote exact input for the maximum price. |
| `code.wargame-catalog.get` | List public security practice games grouped by availability on overthewire.org. | Per successful call; quote exact input for the maximum price. |
| `code.wargame-connection.get` | Read the public connection instructions for a security practice game on overthewire.org. | Per successful call; quote exact input for the maximum price. |
| `code.wargame-level.get` | Read the goal and instructions for a security practice level on overthewire.org. | Per successful call; quote exact input for the maximum price. |
| `code.wargame-levels.list` | Read all levels and goals for one security practice game on overthewire.org. | Per successful call; quote exact input for the maximum price. |
| `code.wargame-order.get` | Read the recommended progression through security practice games on overthewire.org. | Per successful call; quote exact input for the maximum price. |
| `code.wargame-rules.get` | Read community rules for public security practice games on overthewire.org. | Per successful call; quote exact input for the maximum price. |
| `code.wargame.get` | Read a security practice game and its available levels on overthewire.org. | Per successful call; quote exact input for the maximum price. |
| `code.whois-lookup.get` | Read whois lookup on myip.ms. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `code.workflow-docs.get` | Read a public workflow automation documentation page on halt.afroawi.com. | Per successful call; quote exact input for the maximum price. |
| `code.workflow-docs.list` | List public workflow automation documentation pages on halt.afroawi.com. | Per successful call; quote exact input for the maximum price. |
| `code.workspace-doc.get` | Read one public workspace documentation page on developers.notion.com. | Per successful call; quote exact input for the maximum price. |
| `code.workspace-docs.list` | List public workspace documentation pages on developers.notion.com. | Per successful call; quote exact input for the maximum price. |
| `code.workspace-docs.search` | Search public workspace documentation on developers.notion.com. | Per successful call; quote exact input for the maximum price. |
| `compute.gpu-price-index.list` | List GPU compute index prices per GPU-hour. | Per successful call; quote exact input for the maximum price. |
| `db.backend.delete` | Delete this project's app backend with both deployments and all their data and files. Cannot be undone: export what you need first. | Per successful call; quote exact input for the maximum price. |
| `db.backend.env.set` | Set, replace or remove environment variables on one deployment of your app backend, in one step. Replaced values cannot be read back. | Per successful call; quote exact input for the maximum price. |
| `db.backend.get` | Read this project's app backend: whether it is ready, who owns it and the URLs of its deployments. | Per successful call; quote exact input for the maximum price. |
| `db.backend.key.create` | Create the deploy key of one deployment of your app backend, for pushing code to it. Replaces the earlier key, which stops working. | Per successful call; quote exact input for the maximum price. |
| `db.backend.provision` | Create this project's app backend with a production and a development deployment. One per project: calling again returns the same backend and finishes anything left incomplete. | Per successful call; quote exact input for the maximum price. |
| `db.backend.team.connect.start` | Start connecting your own backend team, so this project's backend is created there instead of being hosted for you. Returns a link to authorise it. | Per successful call; quote exact input for the maximum price. |
| `db.backend.team.connect.status` | Check whether your own backend team is connected to this project. | Per successful call; quote exact input for the maximum price. |
| `db.function.mutation` | Call a named mutation function deployed to your own backend (runs your code). | Per successful call; quote exact input for the maximum price. |
| `db.function.query` | Call a named read-only query function deployed to your own backend. | Per successful call; quote exact input for the maximum price. |
| `db.postgres.branch.delete` | Delete a branch of your project's Postgres database now, with its login and every change made on it. main is never touched. Safe to repeat: a branch that is already gone answers deleted too. | Per successful call; quote exact input for the maximum price. |
| `db.postgres.branch.list` | List the branches of your project's Postgres database that have not expired: name, purpose, status and expiry. Never returns a connection address or password. | Per successful call; quote exact input for the maximum price. |
| `db.postgres.delete` | With approval, disable the issued credential and keep data for seven days before erasure. Sign-in keeps working and additional logins you created are not disabled beside it; without sign-in the project compute is stopped. Provision during the hold restores with a new credential shown once. | Per successful call; quote exact input for the maximum price. |
| `db.postgres.get` | Get the state and limits of your project’s managed Postgres database; never returns a connection address or password. | Per successful call; quote exact input for the maximum price. |
| `db.postgres.pause` | Pause your project’s managed Postgres database and its sign-in backend; data is kept. | Per successful call; quote exact input for the maximum price. |
| `db.postgres.resume` | Resume your project’s managed Postgres database and its sign-in backend within its configured limits; a credit stop requires enough credit. | Per successful call; quote exact input for the maximum price. |
| `db.postgres.usage.get` | Read up to 60 whole UTC days of shared project usage and your recorded charges. Usage includes sign-in; reporting is not available during the free preview. | Per successful call; quote exact input for the maximum price. |
| `db.rows.delete` | Permanently delete rows matching filters from a table in your own database; at most 1,000 rows per call. | Per successful call; quote exact input for the maximum price. |
| `db.rows.insert` | Insert up to 1,000 rows into a table in your own database (no SQL). | Per successful call; quote exact input for the maximum price. |
| `db.rows.select` | Read rows from a table in your own database with column, filter, order and page options (no SQL). | Per successful call; quote exact input for the maximum price. |
| `db.rows.update` | Update rows matching filters in a table of your own database; at most 1,000 rows per call (no SQL). | Per successful call; quote exact input for the maximum price. |
| `db.tables.list` | List the tables and views in your own database with their column names and types. | Per successful call; quote exact input for the maximum price. |
| `deploy.deployment.cancel` | Cancel a deployment request. | Per successful call; quote exact input for the maximum price. |
| `deploy.deployment.create` | Build and deploy a git branch or commit of a project on your own hosting account (preview or production). | Per successful call; quote exact input for the maximum price. |
| `deploy.deployment.get` | Get one deployment's state, address, branch and commit on your own hosting account. | Per successful call; quote exact input for the maximum price. |
| `deploy.deployment.promote` | Serve an existing deployment on your production domains without rebuilding it. | Per successful call; quote exact input for the maximum price. |
| `deploy.deployment.restore` | Start a new deployment from an earlier one; completion is checked separately and build charges are billed directly. | Per successful call; quote exact input for the maximum price. |
| `deploy.deployment.rollback` | Roll production back to an earlier production deployment instantly, without a rebuild. | Per successful call; quote exact input for the maximum price. |
| `deploy.deployments.list` | List recent deployments on your own hosting account, newest first. | Per successful call; quote exact input for the maximum price. |
| `deploy.projects.list` | List the projects on your own hosting account. | Per successful call; quote exact input for the maximum price. |
| `deploy.service.autoscaling.delete` | Permanently delete the selected hosting configuration. | Per successful call; quote exact input for the maximum price. |
| `deploy.service.autoscaling.update` | Set automatic instance scaling. Ongoing direct-account compute charges have no finite lifetime maximum. | Per successful call; quote exact input for the maximum price. |
| `deploy.service.create` | Create a hosting service on your own account. Compute, builds and storage incur ongoing direct-account charges with no finite lifetime maximum. | Per successful call; quote exact input for the maximum price. |
| `deploy.service.delete` | Permanently delete the selected hosting configuration. | Per successful call; quote exact input for the maximum price. |
| `deploy.service.get` | Read service configuration and suspension state on your own hosting account. | Per successful call; quote exact input for the maximum price. |
| `deploy.service.preview.create` | Create an image-backed preview service. Ongoing direct-account charges have no finite lifetime maximum. | Per successful call; quote exact input for the maximum price. |
| `deploy.service.restart` | Request a restart of your hosting service. | Per successful call; quote exact input for the maximum price. |
| `deploy.service.scale` | Set manual instance count. Ongoing direct-account compute charges have no finite lifetime maximum. | Per successful call; quote exact input for the maximum price. |
| `deploy.service.state.update` | Request service suspension or resumption; ongoing hosting charges are billed directly. | Per successful call; quote exact input for the maximum price. |
| `deploy.service.update` | Update service configuration; new settings are not necessarily deployed. Ongoing hosting charges have no finite lifetime maximum. | Per successful call; quote exact input for the maximum price. |
| `devices.condition-monitoring.describe` | Read published industrial fault-detection features and workflows on tractian.com. | Per successful call; quote exact input for the maximum price. |
| `devices.environment.create` | Create an environment for your own site or app. | Per successful call; quote exact input for the maximum price. |
| `devices.environment.delete` | Delete the referenced environment from your account; explicit confirmation is required. | Per successful call; quote exact input for the maximum price. |
| `devices.environment.update` | Update an environment name, description or identification limit. | Per successful call; quote exact input for the maximum price. |
| `devices.environments.list` | List environments belonging to your connected account. | Per successful call; quote exact input for the maximum price. |
| `devices.event.feedback` | Request a confidence reset for a device observation within its feedback window; this does not score a person. | Per successful call; quote exact input for the maximum price. |
| `devices.event.get` | Read a device/request observation, including IP, approximate location and security signals; scores describe a device observation, never a person. | Per successful call; quote exact input for the maximum price. |
| `devices.event.update` | Update caller labels or the suspect flag on an observed device event. | Per successful call; quote exact input for the maximum price. |
| `devices.events.search` | Search device or request observations, including pseudonymous device references, IP addresses, approximate locations and security signals; scores describe a device observation, never a person. | Per successful call; quote exact input for the maximum price. |
| `devices.filter.create` | Create a request filter in the referenced environment of your account. | Per successful call; quote exact input for the maximum price. |
| `devices.filter.delete` | Delete the referenced filter from your account; explicit confirmation is required. | Per successful call; quote exact input for the maximum price. |
| `devices.filter.get` | Read a request filter and its exact expression. | Per successful call; quote exact input for the maximum price. |
| `devices.filter.test` | Test inline or stored request filters against request metadata without changing them. | Per successful call; quote exact input for the maximum price. |
| `devices.filter.update` | Update a request filter expression, action, status or numeric position. | Per successful call; quote exact input for the maximum price. |
| `devices.filters.list` | List request filters in your account, optionally scoped to one environment. | Per successful call; quote exact input for the maximum price. |
| `devices.request.analyze` | Analyze and store an observed server request using its IP, URL and headers; secret headers are redacted. Scores describe a device observation, never a person. | Per successful call; quote exact input for the maximum price. |
| `devices.sensor-specifications.get` | Read published condition-monitoring sensor specifications on tractian.com. | Per successful call; quote exact input for the maximum price. |
| `devices.subdomain.create` | Register a tracking hostname on a domain you control; DNS setup and activation are separate. | Per successful call; quote exact input for the maximum price. |
| `devices.subdomain.delete` | Delete the referenced subdomain from your account; explicit confirmation is required. | Per successful call; quote exact input for the maximum price. |
| `devices.subdomain.get` | Read the registration state of a tracking hostname. | Per successful call; quote exact input for the maximum price. |
| `devices.subdomain.verify` | Request DNS verification for a tracking hostname; pending remains pending. | Per successful call; quote exact input for the maximum price. |
| `devices.subdomains.list` | List tracking hostnames and their registration states. | Per successful call; quote exact input for the maximum price. |
| `devices.visitor.delete` | Delete the referenced visitor from your account; explicit confirmation is required. | Per successful call; quote exact input for the maximum price. |
| `devices.visitor.get` | Read selected-window device visit history and security signals, including IP and approximate location; scores describe a device observation, never a person. | Per successful call; quote exact input for the maximum price. |
| `devices.visitors.list` | List distinct pseudonymous devices from one event page with visit timestamps; devices may repeat on later pages. | Per successful call; quote exact input for the maximum price. |
| `devices.visitors.related` | Find related pseudonymous browser/device references originating from the same mobile device; no person identity or person score is returned. | Per successful call; quote exact input for the maximum price. |
| `domain.observed-subdomains.search` | List observed subdomains and first-seen dates for an apex domain on crt.name. | Per successful call; quote exact input for the maximum price. |
| `domain.subdomain-index.get` | Read public subdomain-index size and recently observed names on crt.name. | Per successful call; quote exact input for the maximum price. |
| `domains.add` | Attach a domain you own to a project on your own hosting account and get the DNS records to verify it. | Per successful call; quote exact input for the maximum price. |
| `domains.auctions.search` | Search website-name auctions with bid counts, closing times and listing status on namecheap.com. | Per successful call; quote exact input for the maximum price. |
| `domains.dns-records.apply` | Apply up to 20 DNS records without touching unmentioned records. Partial progress is reported; propagation takes time. | Per successful call; quote exact input for the maximum price. |
| `domains.dns-records.list` | List DNS records of an owned domain. Values can contain personal data. | Per successful call; quote exact input for the maximum price. |
| `domains.extension-prices.list` | Read public domain extension pricing and term information on namecheap.com. | Per successful call; quote exact input for the maximum price. |
| `domains.extensions.list` | Enumerate supported top-level suffixes for new website registrations on domains.cloudflare.com. | Per successful call; quote exact input for the maximum price. |
| `domains.keyword-trends.get` | Read leading and emerging registration keywords across website names on dotdb.com. | Per successful call; quote exact input for the maximum price. |
| `domains.list` | List the domains attached to a project on your own hosting account. | Per successful call; quote exact input for the maximum price. |
| `domains.marketplace.get` | Read resale collections and sale counts for website names on namecheap.com. | Per successful call; quote exact input for the maximum price. |
| `domains.metadata.get` | Read a website homepage title, description and favicon link on dotdb.com. | Per successful call; quote exact input for the maximum price. |
| `domains.pattern-count.get` | Count domain name combinations matching a public search pattern on namegrep.com. | Per successful call; quote exact input for the maximum price. |
| `domains.registered-extensions.search` | Find a registered keyword match and its registered domain extensions on dotdb.com. | Per successful call; quote exact input for the maximum price. |
| `domains.registration.contacts-set` | Replace all contact roles. Sends personal contact details once; registrant changes may restart verification and lock transfers for 60 days. | Per successful call; quote exact input for the maximum price. |
| `domains.registration.create` | Register a domain with the builder as registrant. Sends name, email, phone and address once; never stores contact details. | Per successful call; quote exact input for the maximum price. |
| `domains.registration.get` | Read an owned domain, including suspension, expiry and registrant verification. | Per successful call; quote exact input for the maximum price. |
| `domains.registration.list` | List domains registered in this project; unrelated account domains are excluded. | Per successful call; quote exact input for the maximum price. |
| `domains.registration.quote` | Read the current retail price for an exact registration or renewal term. | Per successful call; quote exact input for the maximum price. |
| `domains.registration.renew` | Renew an owned domain for an explicitly confirmed price; the term fee is not refundable. | Per successful call; quote exact input for the maximum price. |
| `domains.registration.search` | Search available registrations and show their retail price when billing is connected. | Per successful call; quote exact input for the maximum price. |
| `domains.registration.update` | Change exactly one owned-domain setting and read it back. | Per successful call; quote exact input for the maximum price. |
| `domains.registration.verification-resend` | Resend the registrant verification email, at most once per domain every 15 minutes. | Per successful call; quote exact input for the maximum price. |
| `domains.verify` | Check the DNS records of a project domain and mark it verified when they match. | Per successful call; quote exact input for the maximum price. |
| `domains.zone-counts.list` | List published domain zones with registration counts and update labels on domains-monitor.com. | Per successful call; quote exact input for the maximum price. |
| `domains.zone-sample.get` | Read a free public domain sample for one zone on domains-monitor.com. | Per successful call; quote exact input for the maximum price. |
| `domains.zone-samples.aggregate` | Read a shuffled public sample of registered domains across zones on domains-monitor.com. | Per successful call; quote exact input for the maximum price. |
| `domains.zone-samples.get` | Read free public samples of registered domains grouped by zone on domains-monitor.com. | Per successful call; quote exact input for the maximum price. |
| `env.build-variable.delete` | Permanently delete a stored environment variable. | Per successful call; quote exact input for the maximum price. |
| `env.build-variable.set` | Write a readable environment variable; its value is never returned. | Per successful call; quote exact input for the maximum price. |
| `env.build-variables.list` | List build environment variable names, never values. | Per successful call; quote exact input for the maximum price. |
| `env.delete` | Permanently delete a project environment variable by name. | Per successful call; quote exact input for the maximum price. |
| `env.group-variable.delete` | Permanently delete a stored environment variable. | Per successful call; quote exact input for the maximum price. |
| `env.group-variable.set` | Write a readable environment variable; its value is never returned. | Per successful call; quote exact input for the maximum price. |
| `env.list` | List a project's environment variable names, types and environments (never their values). | Per successful call; quote exact input for the maximum price. |
| `env.set` | Create or replace a project environment variable; the value is write-only and never returned. | Per successful call; quote exact input for the maximum price. |
| `env.variable.generate` | Generate a fresh environment value; the stored value is readable in your hosting dashboard. | Per successful call; quote exact input for the maximum price. |
| `env.variables.replace` | Replace the complete variable set in one request; omitted keys are permanently removed. | Per successful call; quote exact input for the maximum price. |
| `functions.invoke` | Invoke a named server function you deployed, with a JSON body, and get its result. | Per successful call; quote exact input for the maximum price. |
| `hardware.awards.get` | Read awards on en.wikipedia.org. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `hardware.business-info.get` | Read business info on booksy.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `hardware.generations.search` | Search generations on higgsfield.ai. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `hardware.guide.get` | Read guide on ifixit.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `hardware.job-detail.get` | Read job detail on portal.sagecontinuum.org. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `hardware.jobs.list` | List jobs on portal.sagecontinuum.org. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `hardware.key-blanks.search` | Find physical key-blank compatibility references by manufacturer name on lockcodes.com. | Per successful call; quote exact input for the maximum price. |
| `hardware.key-combinations.count` | Count possible key combinations using spacing and adjacent-cut constraints on lockcodes.com. | Per successful call; quote exact input for the maximum price. |
| `hardware.key-cylinders.list` | List mechanical key-cylinder types and pinning chart templates on lockcodes.com. | Per successful call; quote exact input for the maximum price. |
| `hardware.mobile-brands.list` | List mobile-device manufacturers on devicespecifications.com. | Per successful call; quote exact input for the maximum price. |
| `hardware.mobile-model.get` | Read a mobile-device model and its technical specifications on devicespecifications.com. | Per successful call; quote exact input for the maximum price. |
| `hardware.mobile-models.list` | List mobile-device models for a manufacturer on devicespecifications.com. | Per successful call; quote exact input for the maximum price. |
| `hardware.mobile-models.search` | Find mobile-device models by hardware filters on devicespecifications.com. | Per successful call; quote exact input for the maximum price. |
| `hardware.myspeedpost-track-shipment.get` | Read track shipment on myspeedpost.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `hardware.natal-chart.get` | Read natal chart on horoscopes.astro-seek.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `hardware.quotes.get` | Read quotes on quotes.toscrape.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `hardware.quotes.list` | List quotes on quotes.toscrape.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `hardware.reciter-audio.get` | Read reciter audio on juzzquran.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `hardware.reciters.list` | List reciters on juzzquran.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `hardware.repair-category.get` | Read a device-repair category and its public guide summaries on ifixit.com. | Per successful call; quote exact input for the maximum price. |
| `hardware.repair-guides.search` | Find public device-repair guides and difficulty summaries on ifixit.com. | Per successful call; quote exact input for the maximum price. |
| `hardware.sensor-model.get` | Read a public sensor model, capabilities and datasheet reference on portal.sagecontinuum.org. | Per successful call; quote exact input for the maximum price. |
| `hardware.sensor-models.list` | List public sensor hardware models and capabilities on portal.sagecontinuum.org. | Per successful call; quote exact input for the maximum price. |
| `hardware.sensor-node-computes.list` | List public compute hardware on a scientific sensor node on portal.sagecontinuum.org. | Per successful call; quote exact input for the maximum price. |
| `hardware.sensor-node-history.list` | Read public application execution events on a scientific node on portal.sagecontinuum.org. | Per successful call; quote exact input for the maximum price. |
| `hardware.sensor-node-manifest.get` | Read public sensor and compute hardware attached to a scientific node on portal.sagecontinuum.org. | Per successful call; quote exact input for the maximum price. |
| `hardware.sensor-node-records.list` | Read recent public sensor and system measurements on portal.sagecontinuum.org. | Per successful call; quote exact input for the maximum price. |
| `hardware.sensor-node.get` | Read the public location and reporting status of a scientific sensor node on portal.sagecontinuum.org. | Per successful call; quote exact input for the maximum price. |
| `hardware.sensor-nodes.list` | List public scientific sensor nodes on portal.sagecontinuum.org. | Per successful call; quote exact input for the maximum price. |
| `hardware.shipment-tracking.get` | Read shipment tracking on cnc-line.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `hardware.time-slots.get` | Read time slots on booksy.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `hardware.timepiece-movement.get` | Retrieve wristwatch caliber specifications and mechanism details on calibercorner.com. | Per successful call; quote exact input for the maximum price. |
| `hardware.timepiece-movements.search` | Search wristwatch mechanisms by manufacturer and caliber on calibercorner.com. | Per successful call; quote exact input for the maximum price. |
| `hardware.track-shipment.get` | Read track shipment on dsv.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `hardware.transits.get` | Read transits on horoscopes.astro-seek.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `host.dedicated-offerings.list` | List public dedicated server hardware offerings on rdp-onedash.com. | Per successful call; quote exact input for the maximum price. |
| `host.hardware-catalog.get` | Read the public virtual and dedicated server hardware catalog on rdp-onedash.com. | Per successful call; quote exact input for the maximum price. |
| `host.vps-configuration.get` | Read availability and hardware details for a public virtual server configuration on rdp-onedash.com. | Per successful call; quote exact input for the maximum price. |
| `host.vps-tariffs.list` | List public virtual server hardware configurations on rdp-onedash.com. | Per successful call; quote exact input for the maximum price. |
| `kv.counter.add` | Add to a numeric counter atomically; integer values retain signed 64-bit precision. | Per successful call; quote exact input for the maximum price. |
| `kv.entry.delete` | Delete one key and its contents after explicit confirmation. | Per successful call; quote exact input for the maximum price. |
| `kv.entry.expiry.get` | Read whether a key expires, and when it expires. | Per successful call; quote exact input for the maximum price. |
| `kv.entry.expiry.set` | Change a key expiry or make it persistent. Immediate expiry deletes data and requires confirmation. | Per successful call; quote exact input for the maximum price. |
| `kv.entry.get` | Read one stored value. Values may contain caller-owned personal data. | Per successful call; quote exact input for the maximum price. |
| `kv.entry.set` | Store one value, optionally with expiry or an existence condition. Caller content is stored. | Per successful call; quote exact input for the maximum price. |
| `kv.hash.delete` | Delete one field from a hash after explicit confirmation. | Per successful call; quote exact input for the maximum price. |
| `kv.hash.get` | Read one text field from a hash. Values may contain caller-owned personal data. | Per successful call; quote exact input for the maximum price. |
| `kv.hash.set` | Store up to 100 text fields atomically in one hash. Caller content is stored. | Per successful call; quote exact input for the maximum price. |
| `kv.list.pop` | Remove and return one caller-owned text value from one end of a list. | Per successful call; quote exact input for the maximum price. |
| `kv.list.push` | Push up to 100 caller-owned text values to one end of a list. | Per successful call; quote exact input for the maximum price. |
| `kv.list.range` | Read up to 100 text values and their positions from a list. Values may contain personal data. | Per successful call; quote exact input for the maximum price. |
| `queue.message.cancel` | Cancel a pending message after explicit confirmation; delivery may already have occurred. | Per successful call; quote exact input for the maximum price. |
| `queue.message.publish` | Publish caller-owned message content to your public HTTPS endpoint through your connected delivery account. | Per successful call; quote exact input for the maximum price. |
| `queue.schedule.create` | Create a recurring UTC delivery schedule in your connected account. Caller-owned message content is stored. | Per successful call; quote exact input for the maximum price. |
| `queue.schedule.delete` | Delete a recurring delivery schedule after explicit confirmation. | Per successful call; quote exact input for the maximum price. |
| `queue.schedule.get` | Read a recurring delivery schedule without returning its body, credentials or destination. | Per successful call; quote exact input for the maximum price. |
| `queue.schedules.list` | List schedules in your connected delivery account, omitting message content and destinations. | Per successful call; quote exact input for the maximum price. |
| `ratelimit.check` | Check and consume a rate-limit allowance atomically for one caller-owned subject. | Per successful call; quote exact input for the maximum price. |
| `ratelimit.remaining` | Read a rate-limit allowance without consuming tokens. | Per successful call; quote exact input for the maximum price. |
| `ratelimit.reset` | Reset one subject allowance after explicit confirmation. | Per successful call; quote exact input for the maximum price. |
| `security.audit-articles.list` | List public security audit article summaries on halborn.com. | Per successful call; quote exact input for the maximum price. |
| `security.audit-reports.list` | List public security audit report references on halborn.com. | Per successful call; quote exact input for the maximum price. |
| `security.audited-companies.list` | List public companies with published security audit references on halborn.com. | Per successful call; quote exact input for the maximum price. |
| `security.breach.check` | Check breach exposure for an email, username, password hash or identifier and hash combination. Returns exposure facts and breached-site names, never leaked credentials. The submitted identifier is personal data; passwords are accepted only as hashes. For several addresses with practical next steps use breach.exposure.check. | Per successful call; quote exact input for the maximum price. |
| `security.breaches.search` | List public breach incidents affecting a website domain; this reports breached websites, not whether a person or email address appeared in a breach. | Per successful call; quote exact input for the maximum price. |
| `security.certificate.hosts` | Hosts observed presenting a certificate, up to 50 rows; optional history returns observation intervals rather than live TLS checks. | Per successful call; quote exact input for the maximum price. |
| `security.certificate.lookup` | Look up an observed certificate by its SHA-256 fingerprint. Subjects may contain personal names. | Per successful call; quote exact input for the maximum price. |
| `security.certificate.lookup-bulk` | Look up up to 200 certificate records as a job using individual lookups; every row carries your own id. Certificate subjects may contain personal names. | Per successful call; quote exact input for the maximum price. |
| `security.certificate.search` | Search observed certificates, at most 50 rows per call. Subjects may contain personal names; regex matching requires an explicit choice. | Per successful call; quote exact input for the maximum price. |
| `security.dns.history` | Historical DNS observations, bounds or ranges, up to 50 rows per call. These records are observed datasets, not live resolution; contact fields are excluded. | Per successful call; quote exact input for the maximum price. |
| `security.dns.lookup` | Current live DNS records of a domain: A, AAAA, CNAME, MX, NS, TXT, SOA, SRV and CAA, each with its value and time to live. | Per successful call; quote exact input for the maximum price. |
| `security.dns.resolve` | Resolve one hostname to IP addresses; this operation returns addresses only, without TTLs or other DNS records. | Per successful call; quote exact input for the maximum price. |
| `security.dns.reverse` | Resolve one public IP address to hostnames; no historical interval or freshness guarantee is implied. | Per successful call; quote exact input for the maximum price. |
| `security.domain.age` | How long ago a domain was registered, when it expires and whether it is new enough to be a risk. | Per successful call; quote exact input for the maximum price. |
| `security.domain.email-auth` | Check a domain's mail set-up (SPF, DKIM, DMARC, MX) and blocklist status, with a grade. | Per successful call; quote exact input for the maximum price. |
| `security.domain.history` | Read historical domain registrations as a background job. Default returns a count; includeRecords:true purchases records, estimated worst case $0.065. At most 1,000 snapshots and 2 MiB; larger answers fail explicitly. Personal names, contacts and raw registration text are excluded. | Per successful call; quote exact input for the maximum price. |
| `security.domain.reputation` | Grade a domain's trustworthiness from its DNS, mail and HTTPS set-up, with the issues found. | Per successful call; quote exact input for the maximum price. |
| `security.domain.whois` | Registration record of a domain: registrar, creation, update and expiry dates, registry statuses, name servers and the registrant's organization and country where published. | Per successful call; quote exact input for the maximum price. |
| `security.exploit.count` | Count exploit and vulnerability documents, including zero; author facet values may contain personal names. | Per successful call; quote exact input for the maximum price. |
| `security.exploit.search` | Search exploit and vulnerability documents, up to 50 rows; published authors may be personal names. Code is inert text and only returned when requested. | Per successful call; quote exact input for the maximum price. |
| `security.exploited-vulnerabilities.search` | Search known exploited vulnerabilities by CVE, vendor or product; absence means no catalogue entry, not that a vulnerability is safe. | Per successful call; quote exact input for the maximum price. |
| `security.file.behaviour` | Read a bounded file behaviour summary: up to 100 entries per action or contacted network list, with public technique identifiers. Paths, commands, registry values and personal text are excluded. Estimated worst case $0.0013 per request. | Per successful call; quote exact input for the maximum price. |
| `security.file.check` | Look up an existing file analysis by content hash. No file is uploaded. Returns file facts and aggregate detection counts; an unknown or unanalysed file is not_found. Estimated worst case $0.0013 per request. | Per successful call; quote exact input for the maximum price. |
| `security.gb-iasme.certificates.search` | Search by company name or certificate reference number to find organisations holding a Cyber Essentials or Cyber Essentials Plus certificate issued in the last | Per successful call; quote exact input for the maximum price. |
| `security.headers.check` | Check a page's HTTP response headers against security good practice and grade them. | Per successful call; quote exact input for the maximum price. |
| `security.host.count` | Count matching observed host or service documents, including zero, with up to five facet fields. | Per successful call; quote exact input for the maximum price. |
| `security.host.lookup` | Observed host services, network and location; up to 1000 services. Optional banners and certificate subjects may contain personal names. This is observed data, not a live scan. | Per successful call; quote exact input for the maximum price. |
| `security.host.lookup-bulk` | Look up up to 100 host records as a job using individual lookups; every row carries your own id. Optional certificate subjects and banners may contain personal names. | Per successful call; quote exact input for the maximum price. |
| `security.host.reputation` | Evaluate a domain or public IPv4 host with a safety score and bounded checks as a job. Basic is the default; full is an explicit purchase, estimated worst case $0.0039. No personal contact data is returned. | Per successful call; quote exact input for the maximum price. |
| `security.host.search` | Search observed hosts and services using literal text or structured filters; up to 50 rows per call. Banners may contain personal names when requested. | Per successful call; quote exact input for the maximum price. |
| `security.ip.abuse-feed.export` | Export IP abuse and proxy observations for a stateless date range as a background job. Up to seven calendar days and 10,000 returned entries; downloads are capped at 20 MB and decompression at 64 MB. Excess entries are marked truncated; narrow the range for more. Large results are clean JSON Lines files on platform storage, which must be configured before the job starts. Returns IP activity, never a person rating. | Per successful call; quote exact input for the maximum price. |
| `security.ip.blacklist.list` | Read a bounded public IP abuse list as a job, up to 1,000 rows and 2 MiB. Threshold and country filters require enabled subscriber access; no continuation is fabricated. Estimated worst case $0.008334 per request. | Per successful call; quote exact input for the maximum price. |
| `security.ip.block.check` | Check IP abuse across a public network as a job. Up to 1,000 reported addresses and 2 MiB; larger answers fail. Standard IPv4 /24 or narrower; expanded /20 or narrower requires an explicit option and enabled tier, estimated worst case $0.0013. IPv6 requires documented tier limits. | Per successful call; quote exact input for the maximum price. |
| `security.ip.lookup` | Where an IP address is and who owns its network: city, region, country, coordinates, timezone, autonomous system, network owner and network type. | Per successful call; quote exact input for the maximum price. |
| `security.ip.privacy` | Classify public network addresses as VPN, proxy, Tor, relay, hosting or residential proxy. Unknown flags stay absent. Extended and residential details require an enabled data entitlement. No service names or personal scores are returned. Estimated worst case $0.0013 per request. | Per successful call; quote exact input for the maximum price. |
| `security.ip.proxy-check` | Check an IP address for network risk on a 0–4 scale. Returns the IP and a proxy, open proxy or VPN risk observation; it does not score a person. | Per successful call; quote exact input for the maximum price. |
| `security.ip.reports.list` | List dated public IP abuse report categories and reporter country, up to 50 per page. Reporter identities, comments and contacts are excluded. Estimated worst case $0.000167 per request. | Per successful call; quote exact input for the maximum price. |
| `security.ip.reputation` | Abuse reputation of an IP address: a 0-100 abuse confidence score, report counts, when it was last reported and whether it is a Tor exit node. | Per successful call; quote exact input for the maximum price. |
| `security.netblocks.search` | Find public network allocations by IP, CIDR, autonomous system or organisation terms. Up to 50 ranges; organisation searches have no next page. Excludes addresses, email, phone and contact records. Estimated worst case $0.0013 per request. | Per successful call; quote exact input for the maximum price. |
| `security.network.exclusions.list` | Retrieve global network privacy exclusions as a job, optionally since a timestamp. Returns network ranges, exclusion rules and update times. Maximum 10,000 rows; larger feeds fail without charge. | Per successful call; quote exact input for the maximum price. |
| `security.password.strength` | Rate a password's strength from its length, character classes and common patterns, with an estimated time to crack. | Per successful call; quote exact input for the maximum price. |
| `security.signal-reasons.list` | List the descriptions of device or transaction detection signals. These are dictionary entries, not findings or scores about a person. | Per successful call; quote exact input for the maximum price. |
| `security.ssl.check` | Check a domain's TLS certificate, with its issuer, validity dates, days to expiry and protocol. | Per successful call; quote exact input for the maximum price. |
| `security.url.check` | Look up a URL's malware and phishing verdict from sources that already scanned it. Nothing is fetched by this call; some sources add the looked-up URL to their public datasets. The verdict is malicious when 3 or more scanning engines flag the URL as malicious (or it is on a threat list), suspicious when 1 or 2 do or any engine calls it suspicious, clean when none do; flaggedBy and sources carry the engine counts so you can apply your own threshold. Clean means no source flagged the URL (for list-only sources: it is not on the list), not that it is safe; a URL no source has seen is not_found. For many links at once use urls.check. | Per successful call; quote exact input for the maximum price. |
| `security.url.check-bulk` | Run security.url.check for up to 50 rows as a background job. Each result echoes the caller's row id once; failed rows cost nothing. Uses bounded single lookups when native batch progress cannot be retained. | Per successful call; quote exact input for the maximum price. |
| `security.url.inspect` | Scan a public URL for malware, phishing, spam and other unsafe content, with bounded network and page facts. URLs may contain personal data; do not send secrets or access tokens. No browser or private scan is promised. | Per successful call; quote exact input for the maximum price. |
| `security.url.inspect-bulk` | Scan up to 100 public URLs as one background job, with flat results keyed by your row ids. Each row uses the single URL scan and its explicit options. Failed rows are free. URLs may contain personal data; do not send secrets or access tokens. | Per successful call; quote exact input for the maximum price. |
| `security.url.scan` | Scan a URL for malware and phishing as a background job: the scanner visits the page in a real browser and analyses what it loads. Never submit a URL that contains a secret or token. Scans run unlisted, but may stay visible to the scanner's vetted researchers. | Per successful call; quote exact input for the maximum price. |
| `security.url.scans.search` | Search existing public URL scans using typed filters, up to 50 per page. Nothing is submitted. Returned URL queries, fragments, contacts and page bodies are excluded; a scan without a verdict stays unknown. Estimated worst case $0.001096 per request. | Per successful call; quote exact input for the maximum price. |
| `security.vuln.lookup` | Known vulnerabilities for a package version, or the record for one CVE id: summary, CVSS score and vector, dates, alias ids and references. | Per successful call; quote exact input for the maximum price. |
| `security.vuln.lookup-bulk` | Run security.vuln.lookup for up to 100 rows as a background job. Each result echoes the caller's row id once; failed rows cost nothing. Uses bounded single lookups when native batch progress cannot be retained. | Per successful call; quote exact input for the maximum price. |
| `security.vuln.search` | Search public vulnerability advisories by keyword, severity, score vector, weakness, product criteria, date range or known exploitation. Up to 50 advisories and 100 product conditions per advisory; contacts and source identifiers are excluded. | Per successful call; quote exact input for the maximum price. |
| `software.adversaries.list` | Browse adversaries on alienvault.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.adversary-details.get` | Read adversary details on alienvault.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.agent-arena-leaderboard.get` | Read agent arena leaderboard on designarena.ai. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.agents.list` | List agents on theresanaiforthat.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.ai-discounts.list` | List publicly advertised AI tool discount descriptions on theresanaiforthat.com. | Per successful call; quote exact input for the maximum price. |
| `software.ai-news.list` | List public AI research and product announcements. | Per successful call; quote exact input for the maximum price. |
| `software.ai-tasks.list` | List tasks supported by public AI tools on theresanaiforthat.com. | Per successful call; quote exact input for the maximum price. |
| `software.ai-tool-categories.list` | List the AI tool categories on toolify.ai. | Per successful call; quote exact input for the maximum price. |
| `software.ai-tool.get` | Read the public description and tags of an AI tool on the chosen site. | Per successful call; quote exact input for the maximum price. |
| `software.ai-tools.search` | Search a public directory of AI tools by category and keyword on brofindai.com. | Per successful call; quote exact input for the maximum price. |
| `software.all-chains.get` | Read all chains on web3.okx.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.alternatives.list` | List alternatives to a public software app with platform filters on alternativeto.net on the chosen site. | Per successful call; quote exact input for the maximum price. |
| `software.app.get` | Read a public software app description, platforms and alternative counts on alternativeto.net. | Per successful call; quote exact input for the maximum price. |
| `software.apps.browse` | Browse public software app listings by category and platform on alternativeto.net. | Per successful call; quote exact input for the maximum price. |
| `software.assistant-examples.list` | List public example tasks and prompts for a desktop assistant on qwenwork.ai. | Per successful call; quote exact input for the maximum price. |
| `software.audit.get` | Read audit on inf-tracer-rh3o.onrender.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.blog-categories.list` | List categories in a public software blog on anything.com. | Per successful call; quote exact input for the maximum price. |
| `software.blog-post.get` | Read a public software blog article as structured text blocks on anything.com. | Per successful call; quote exact input for the maximum price. |
| `software.blog-posts.list` | List public software blog article summaries by category on anything.com. | Per successful call; quote exact input for the maximum price. |
| `software.blog-research` | Get research articles. | Per successful call; quote exact input for the maximum price. |
| `software.by-certificate-hash.search` | Search by certificate hash on crt.sh. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.by-serial.search` | Search by serial on crt.sh. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.by-spki.search` | Search by spki on crt.sh. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.ca-details.get` | Read ca details on crt.sh. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.cape-users.get` | Read cape users on namemc.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.categories.list` | List software categories, with their names and links. | Per successful call; quote exact input for the maximum price. |
| `software.category-ai-tools.list` | List public AI tools in a category on toolify.ai. | Per successful call; quote exact input for the maximum price. |
| `software.category-leaders.list` | List leading software products within a category. | Per successful call; quote exact input for the maximum price. |
| `software.category-products.list` | List software products in a selected data source category. | Per successful call; quote exact input for the maximum price. |
| `software.certificate-detail.get` | Read certificate detail on crt.sh. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.certificates.search` | Search certificates on crt.sh. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.chain.get` | Read chain on inf-tracer-rh3o.onrender.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.changelog.list` | Read dated entries in a public software changelog. | Per successful call; quote exact input for the maximum price. |
| `software.channel-logs.get` | Read channel logs on neodrop.ai. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.community-discussions.list` | List recent technology discussion titles and links on superuser.com. | Per successful call; quote exact input for the maximum price. |
| `software.community-topics.list` | List public customer-software community topics and their activity counts on trailhead.salesforce.com. | Per successful call; quote exact input for the maximum price. |
| `software.component-categories.list` | List categories of animated interface components on reactbits.dev. | Per successful call; quote exact input for the maximum price. |
| `software.component-install.get` | Read the installation command for a reusable interface component on reactbits.dev. | Per successful call; quote exact input for the maximum price. |
| `software.component-manifest.get` | Read and inspect a public interface component registry manifest on shadcnregistry.com. | Per successful call; quote exact input for the maximum price. |
| `software.component-props.list` | List configurable properties for a reusable interface component on reactbits.dev. | Per successful call; quote exact input for the maximum price. |
| `software.component-registries.list` | List public interface component registries on shadcnregistry.com. | Per successful call; quote exact input for the maximum price. |
| `software.component-registry.get` | Read a public interface component registry and its entries on shadcnregistry.com. | Per successful call; quote exact input for the maximum price. |
| `software.component-types.get` | Read the supported types of reusable interface components on shadcnregistry.com. | Per successful call; quote exact input for the maximum price. |
| `software.component.get` | Read metadata and configuration options for a reusable interface component on the chosen site. | Per successful call; quote exact input for the maximum price. |
| `software.components.list` | List reusable interface components in a public collection on the chosen site. | Per successful call; quote exact input for the maximum price. |
| `software.components.search` | Find reusable interface components by keyword on the chosen site. | Per successful call; quote exact input for the maximum price. |
| `software.compute-apps.search` | Find public scientific computing applications on yeesuan.com. | Per successful call; quote exact input for the maximum price. |
| `software.compute-products.list` | List public computing hardware products and specifications on yeesuan.com. | Per successful call; quote exact input for the maximum price. |
| `software.compute-solutions.list` | List public scientific computing service solutions on yeesuan.com. | Per successful call; quote exact input for the maximum price. |
| `software.craft-document-text.get` | Read the text of one published Craft document on baths-matter-31q.craft.me. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.crawlers.list` | List public web crawler identities and their user-agent signatures on tollbit.com. | Per successful call; quote exact input for the maximum price. |
| `software.creators.get` | Read creators on shadcnregistry.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.deadlines.get` | Read deadlines on baths-matter-31q.craft.me. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.desktop-assistant-releases.list` | List public desktop assistant release notes on qwenwork.ai. | Per successful call; quote exact input for the maximum price. |
| `software.desktop-builds.get` | Read desktop installer builds and operating system requirements for a desktop assistant on qwenwork.ai. | Per successful call; quote exact input for the maximum price. |
| `software.discover-gpts.get` | Read discover gpts on chatgpt.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.distribution-app.get` | Read public app distribution metadata by its share shortcut on pgyer.com. | Per successful call; quote exact input for the maximum price. |
| `software.featured-ai-tools.list` | List featured public AI tools on theresanaiforthat.com. | Per successful call; quote exact input for the maximum price. |
| `software.features.list` | List a software product’s advertised features and their ratings. | Per successful call; quote exact input for the maximum price. |
| `software.framework-document.get` | Read one public framework documentation page and its sections on nuxt.com. | Per successful call; quote exact input for the maximum price. |
| `software.framework-reference.list` | List public framework API reference titles and paths on nuxt.com. | Per successful call; quote exact input for the maximum price. |
| `software.game-client-version.get` | Read a published game client version for a binary and release channel on clientsettings.roblox.com. | Per successful call; quote exact input for the maximum price. |
| `software.game-mod-categories.list` | List public game mod categories for a game and project class on curseforge.com. | Per successful call; quote exact input for the maximum price. |
| `software.game-mod-files.get` | Read metadata for specified public game mod files on curseforge.com. | Per successful call; quote exact input for the maximum price. |
| `software.game-mod-files.list` | List public game mod file metadata and supported versions on curseforge.com. | Per successful call; quote exact input for the maximum price. |
| `software.game-mod-relations.list` | List public game mod dependencies and dependents on curseforge.com. | Per successful call; quote exact input for the maximum price. |
| `software.game-mod.get` | Read public game mod metadata, supported versions and download counts on curseforge.com. | Per successful call; quote exact input for the maximum price. |
| `software.gpt.get` | Read gpt on chatgpt.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.help-article.get` | Read a desktop assistant help-center article in Markdown on qwenwork.ai. | Per successful call; quote exact input for the maximum price. |
| `software.help-articles.list` | Enumerate desktop assistant help-center articles by section on qwenwork.ai. | Per successful call; quote exact input for the maximum price. |
| `software.hosting-changelog.list` | List a cloud hosting platform's public product announcements. | Per successful call; quote exact input for the maximum price. |
| `software.images.search` | Search images on commons.wikimedia.org. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.indicator-details.get` | Read indicator details on alienvault.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.integrations.list` | List integrations advertised for a software product. | Per successful call; quote exact input for the maximum price. |
| `software.integrity.get` | Read integrity on inf-tracer-rh3o.onrender.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.key-resources.get` | Read key resources on baths-matter-31q.craft.me. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.lab-announcements.list` | Browse technical laboratory announcements, engineering notes and company updates. | Per successful call; quote exact input for the maximum price. |
| `software.lab-article.get` | Retrieve a laboratory technical article, its body and structured blocks. | Per successful call; quote exact input for the maximum price. |
| `software.latest-articles.list` | List latest articles on dev.to. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.launch-leaderboard.list` | List software launches ranked by community votes for one day on producthunt.com. | Per successful call; quote exact input for the maximum price. |
| `software.launch-leaderboard.search` | List leading software launches within a date range on producthunt.com. | Per successful call; quote exact input for the maximum price. |
| `software.leaderboard.get` | Read leaderboard on web3.okx.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.microsoft-updates.list` | List recent Microsoft knowledge base updates and known issues on support.microsoft.com. | Per successful call; quote exact input for the maximum price. |
| `software.minecraft-profile-links.get` | Read the social links on a Minecraft player's profile on namemc.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.mod-communities.list` | List public game modification communities on thunderstore.io. | Per successful call; quote exact input for the maximum price. |
| `software.mod.get` | Read a game modification package and its latest version on thunderstore.io. | Per successful call; quote exact input for the maximum price. |
| `software.moddable-games.list` | List public game mod catalogues and published download counts on curseforge.com. | Per successful call; quote exact input for the maximum price. |
| `software.mods.list` | List game modification packages in a community on thunderstore.io. | Per successful call; quote exact input for the maximum price. |
| `software.mods.search` | Find game modification packages by keyword on thunderstore.io. | Per successful call; quote exact input for the maximum price. |
| `software.name-history.get` | Read name history on namemc.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.name.search` | Search name on namemc.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.names.get` | Read names on namemc.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.newsletter-issue.get` | Read one issue from a public software newsletter archive on agentskills.co.il. | Per successful call; quote exact input for the maximum price. |
| `software.newsletter-issues.list` | List dated issues in a public software newsletter archive on agentskills.co.il. | Per successful call; quote exact input for the maximum price. |
| `software.outreach-blog-article.get` | Read one article from the warmysender.com blog. | Per successful call; quote exact input for the maximum price. |
| `software.outreach-blog-articles.list` | List articles from the warmysender.com blog by category. | Per successful call; quote exact input for the maximum price. |
| `software.outreach-blog-categories.list` | List the article categories of the warmysender.com blog. | Per successful call; quote exact input for the maximum price. |
| `software.outreach-guide.get` | Read one guide or glossary entry on warmysender.com. | Per successful call; quote exact input for the maximum price. |
| `software.outreach-guides.list` | List the guides and glossary entries on warmysender.com. | Per successful call; quote exact input for the maximum price. |
| `software.outreach-help-article.get` | Read one help-centre article on warmysender.com. | Per successful call; quote exact input for the maximum price. |
| `software.outreach-help-articles.list` | List the help-centre articles on warmysender.com. | Per successful call; quote exact input for the maximum price. |
| `software.plan-comparison.get` | Read public software plan descriptions and comparison tables on the chosen site. | Per successful call; quote exact input for the maximum price. |
| `software.platforms.list` | List software platform names and app counts on alternativeto.net. | Per successful call; quote exact input for the maximum price. |
| `software.postman-release.get` | Read release notes for one Postman application version on postman.com. | Per successful call; quote exact input for the maximum price. |
| `software.postman-releases.list` | List public Postman application releases and release notes on postman.com. | Per successful call; quote exact input for the maximum price. |
| `software.pricing-plans.list` | List advertised pricing plans for a software product on the chosen site. | Per successful call; quote exact input for the maximum price. |
| `software.pricing.get` | Read a software vendor's published pricing plans. | Per successful call; quote exact input for the maximum price. |
| `software.product-details.get` | Read product details on producthunt.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.product-features.get` | Read the publicly described features of a software product on the chosen site. | Per successful call; quote exact input for the maximum price. |
| `software.product-info.get` | Read product info on jumpingbrowser.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.product-overview.get` | Read a public software product overview and its features on the chosen site. | Per successful call; quote exact input for the maximum price. |
| `software.product-reviews.get` | Read product reviews on the chosen site. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.product.get` | Read software product facts and aggregate ratings on the chosen site. | Per successful call; quote exact input for the maximum price. |
| `software.products.compare` | Compare the aggregate ratings of two software products. | Per successful call; quote exact input for the maximum price. |
| `software.profile.get` | Read profile on namemc.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.project-links.get` | Read project links on baths-matter-31q.craft.me. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.projects.search` | Search projects on curseforge.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.public-credit-policy.get` | Read a public software credit policy and expiration rules on media.io. | Per successful call; quote exact input for the maximum price. |
| `software.public-platforms.list` | List publicly documented platforms covered by a software catalog on scrapely.me. | Per successful call; quote exact input for the maximum price. |
| `software.pulse-details.get` | Read pulse details on alienvault.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.pulse-indicators.get` | Read pulse indicators on alienvault.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.pulses.search` | Search pulses on alienvault.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.question-answers.get` | Read question answers on superuser.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.question-comments.get` | Read question comments on superuser.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.question-details.get` | Read question details on superuser.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.questions.get` | Read questions on superuser.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.questions.search` | Search questions on the chosen site. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.recent-ai-tools.list` | List recently published AI tools on the chosen site. | Per successful call; quote exact input for the maximum price. |
| `software.recent-alerts.get` | Read recent alerts on alienvault.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.release-announcements.list` | List public software release announcements with dated feature and fix notes on agentskills.co.il. | Per successful call; quote exact input for the maximum price. |
| `software.research-publications.list` | List public machine-learning research publications. | Per successful call; quote exact input for the maximum price. |
| `software.research-roles.list` | List open research-lab roles and their published requirements. | Per successful call; quote exact input for the maximum price. |
| `software.search-software` | Search software. | Per successful call; quote exact input for the maximum price. |
| `software.sensor-app.get` | Read a public scientific edge-computing application version on portal.sagecontinuum.org. | Per successful call; quote exact input for the maximum price. |
| `software.sensor-apps.list` | List public scientific edge-computing application versions on portal.sagecontinuum.org. | Per successful call; quote exact input for the maximum price. |
| `software.skin-history.get` | Read skin history on namemc.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.sms-contact.get` | Read sms contact on getboba.ai. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.software-reviews.get` | Read software reviews. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.task-tools.get` | Read task tools on theresanaiforthat.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.task-tools.list` | List leading AI tools grouped by task on theresanaiforthat.com. | Per successful call; quote exact input for the maximum price. |
| `software.telephony-articles.list` | List public telephony development article summaries on developer.truecaller.com. | Per successful call; quote exact input for the maximum price. |
| `software.theme-categories.list` | List website theme categories on themewagon.com. | Per successful call; quote exact input for the maximum price. |
| `software.theme-frameworks.list` | List frameworks used by website themes on themewagon.com. | Per successful call; quote exact input for the maximum price. |
| `software.theme-reviews.get` | Read theme reviews on themewagon.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.theme-tags.list` | List tags used by website themes on themewagon.com. | Per successful call; quote exact input for the maximum price. |
| `software.theme.get` | Read a website theme and its supported frameworks on themewagon.com. | Per successful call; quote exact input for the maximum price. |
| `software.themes.list` | Browse website themes by category, framework, tag or published collection on themewagon.com. | Per successful call; quote exact input for the maximum price. |
| `software.themes.search` | Find public website themes by keyword on themewagon.com. | Per successful call; quote exact input for the maximum price. |
| `software.timeline.get` | Read timeline on inf-tracer-rh3o.onrender.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.transliterate.get` | Read transliterate on manglish.app. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.trending-ai-tools.list` | List trending public AI tools on toolify.ai. | Per successful call; quote exact input for the maximum price. |
| `software.use-cases.get` | Read public use cases for a software product. | Per successful call; quote exact input for the maximum price. |
| `software.user-channel.get` | Read user channel on clientsettings.roblox.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `software.utilities.list` | List public browser utilities and their supported tasks on parsepad.com. | Per successful call; quote exact input for the maximum price. |
| `software.utilities.search` | Search public browser utilities by format or task on parsepad.com. | Per successful call; quote exact input for the maximum price. |
| `software.utility-manifest.get` | Read the runtime manifest and features of a browser utility on parsepad.com. | Per successful call; quote exact input for the maximum price. |
| `tech.details.get` | Read details on nanoreview.net. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `tech.popular-comparisons.list` | List popular pairs of computer parts or devices to compare on nanoreview.net. | Per successful call; quote exact input for the maximum price. |
| `tech.products.compare` | Compare published processor and general specifications for two devices on nanoreview.net. | Per successful call; quote exact input for the maximum price. |
| `tech.products.search` | Find computer parts and devices by name on nanoreview.net. | Per successful call; quote exact input for the maximum price. |
| `tech.user-benchmarks-list.get` | Read user benchmarks list on nanoreview.net. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `uptime.public-incident.get` | Read a public service incident and its timeline on status.blackbaud.com. | Per successful call; quote exact input for the maximum price. |
| `uptime.public-incidents.list` | List public service incidents and status updates on the chosen site. | Per successful call; quote exact input for the maximum price. |
| `uptime.public-status.get` | Read a cloud hosting platform's public service status and its component states. | Per successful call; quote exact input for the maximum price. |
| `vector.index.create` | Create a vector index with a fixed vector length and distance metric, for upserting vectors and searching nearest neighbours. Returns a ref for the follow-up vector.* capabilities. | Per successful call; quote exact input for the maximum price. |
| `vector.index.delete` | Delete one of your vector indexes and every vector stored in it. This cannot be undone; the vectors are gone. | Per successful call; quote exact input for the maximum price. |
| `vector.index.get` | Get one of your vector indexes: its vector length, distance metric, vector space and an approximate count of stored vectors. | Per successful call; quote exact input for the maximum price. |
| `vector.indexes.list` | List your vector indexes with their vector length, distance metric and an approximate count of stored vectors. | Per successful call; quote exact input for the maximum price. |
| `vector.vectors.delete` | Remove stored vectors by id from one of your indexes. This cannot be undone; re-upserting an id stores a new vector. | Per successful call; quote exact input for the maximum price. |
| `vector.vectors.get` | Look up stored vectors by id in one of your indexes: their vector values and metadata. Ids that are not stored are left out of the result. | Per successful call; quote exact input for the maximum price. |
| `vector.vectors.query` | Search one of your vector indexes for the nearest neighbours of a query vector, optionally narrowed by a metadata filter. Scores follow the index's distance metric. | Per successful call; quote exact input for the maximum price. |
| `vector.vectors.query-by-id` | Find nearby vectors using a stored vector from your own index as the seed. A missing seed is refused; results stay in that index. | Per successful call; quote exact input for the maximum price. |
| `vector.vectors.upsert` | Store or replace vectors in one of your indexes, each with an id of your choice and optional metadata for filtered search. Every vector's length must equal the index's dimension. | Per successful call; quote exact input for the maximum price. |

### GitHub

| Id | What it does | Price basis |
|---|---|---|
| `github.documented-repos.list` | List featured public repositories with generated documentation on deepwiki.com. | Per successful call; quote exact input for the maximum price. |
| `github.documented-repos.search` | Search public repositories that have generated documentation on deepwiki.com. | Per successful call; quote exact input for the maximum price. |
| `github.issue.comments` | List public comments on an issue or pull request. Returns personal data: Public GitHub accounts and published repository content; no contact details or personal rankings.. | Per successful call; quote exact input for the maximum price. |
| `github.issues.search` | Search public GitHub issues and pull requests. Returns personal data: Public GitHub accounts and published repository content; no contact details or personal rankings.. | Per successful call; quote exact input for the maximum price. |
| `github.package-manifest.get` | Read public repository package metadata and declared build commands on api.github.com. | Per successful call; quote exact input for the maximum price. |
| `github.repo-wiki-page.get` | Read one public repository documentation page and relevant source paths on deepwiki.com. | Per successful call; quote exact input for the maximum price. |
| `github.repo-wiki-pages.list` | Read public repository documentation pages and relevant source paths on deepwiki.com. | Per successful call; quote exact input for the maximum price. |
| `github.repo-wiki.exists` | Check whether generated public repository documentation is available on deepwiki.com. | Per successful call; quote exact input for the maximum price. |
| `github.repo-wiki.get` | Read a public repository documentation overview and table of contents on deepwiki.com. | Per successful call; quote exact input for the maximum price. |
| `github.repo.contributors` | List public repository contributor handles and contribution counts. Returns personal data: Public GitHub accounts and published repository content; no contact details or personal rankings.. | Per successful call; quote exact input for the maximum price. |
| `github.repo.forks` | List public forks of a repository. Returns personal data: Public GitHub accounts and published repository content; no contact details or personal rankings.. | Per successful call; quote exact input for the maximum price. |
| `github.repo.issues` | List public repository issues and pull requests. Returns personal data: Public GitHub accounts and published repository content; no contact details or personal rankings.. | Per successful call; quote exact input for the maximum price. |
| `github.repo.profile` | Read public repository details, description, language and reported activity counts. Takes a repository URL and adds topics, archived state and last update; for several repositories by owner and name use code.repositories.lookup. | Per successful call; quote exact input for the maximum price. |
| `github.trending.repositories` | List trending public repositories for a programming language and time period, without contributor profiles. | Per successful call; quote exact input for the maximum price. |
| `github.user-or-org-profile.get` | Read user or org profile on deepwiki.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `github.user.profile` | Read a public GitHub account profile without contact details. Returns personal data: Public GitHub handles, display names and biographies; no contact details or person scores.. | Per successful call; quote exact input for the maximum price. |
| `github.user.repos` | List repositories published by a public GitHub account. Returns personal data: Public account repository names and published descriptions.. | Per successful call; quote exact input for the maximum price. |

### Google

| Id | What it does | Price basis |
|---|---|---|
| `tagmanager.account.get` | Get a account in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.accounts.list` | List the accessible accounts in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.container.get` | Get a container in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.containers.list` | List containers in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.tag.create` | Create a tag in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.tag.delete` | Delete a tag in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.tag.get` | Get a tag in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.tag.update` | Update a tag in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.tags.list` | List tags in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.trigger.create` | Create a trigger in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.trigger.delete` | Delete a trigger in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.trigger.get` | Get a trigger in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.trigger.update` | Update a trigger in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.triggers.list` | List triggers in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.variable.create` | Create a variable in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.variable.delete` | Delete a variable in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.variable.get` | Get a variable in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.variable.update` | Update a variable in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.variables.list` | List variables in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.version.create` | Create a container version from a workspace, consuming that workspace; requires approval. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.version.get` | Get a version in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.version.publish` | Publish a version in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.versions.list` | List versions in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.workspace.get` | Get a workspace in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.workspaces.list` | List workspaces in your connected tag management account. | Per successful call; quote exact input for the maximum price. |

### Hacker News

| Id | What it does | Price basis |
|---|---|---|
| `hackernews.stories.search` | Hackernews. | Per successful call; quote exact input for the maximum price. |
| `hackernews.story.comments` | List the public comments on one discussion story. Returns personal data: public commenter handles and comment text. | Per successful call; quote exact input for the maximum price. |

### Stack Overflow

| Id | What it does | Price basis |
|---|---|---|
| `stackoverflow.questions.search` | Stackoverflow. | Per successful call; quote exact input for the maximum price. |

## Missions

### General

| Id | What it does | Price basis |
|---|---|---|
| `api.contract.check` | API endpoints called with GET and checked against the status you expect, with what changed since your last run. | Sum of step prices; quote exact input and options for the maximum price. |
| `attack.surface.report` | Observed records and technologies for one public domain, plus threat observations and caller-confirmed exact-version advisory checks. | Sum of step prices; quote exact input and options for the maximum price. |
| `code.check` | Run a snippet in a supported language after approval and compare its measured output with one expected sample. | Sum of step prices; quote exact input and options for the maximum price. |
| `code.release.notes` | Write a changelog and release notes from the supplied commit-range log, withholding unsupported text. | Sum of step prices; quote exact input and options for the maximum price. |
| `code.write.checked` | Write source for a bounded task, check its web addresses, then run one exact-output sample after approval. | Sum of step prices; quote exact input and options for the maximum price. |
| `cve.brief` | One vulnerability explained: the advisory record (severity, score, summary, reference links), pages that name it, and a written brief — what it is, who is affected, what to do — every sentence checked against the sources it names. No exploit steps. | Sum of step prices; quote exact input and options for the maximum price. |
| `dependency.audit` | Known vulnerabilities for a typed list of exact package versions (not lockfile text): each package's advisories with severity and score, the versions with none, and the ones that were not checked, with counts. | Sum of step prices; quote exact input and options for the maximum price. |
| `deploy.rollback.checked` | Read the current production deployment, select the newest caller-proven good earlier one, optionally roll back after approval, then read the target's state. | Sum of step prices; quote exact input and options for the maximum price. |
| `deploy.status.report` | The latest deployment of each project on your own hosting account, recent deployments newest first, with failed ones called out and older failures marked superseded. | Sum of step prices; quote exact input and options for the maximum price. |
| `deploy.verified` | Deploy a branch as a preview (or resume on an earlier preview), read its readiness and page, and optionally promote the checked build after approval. | Sum of step prices; quote exact input and options for the maximum price. |
| `domain.attach` | Attach an exact domain to a project, optionally read DNS, and make bounded verification attempts. | Sum of step prices; quote exact input and options for the maximum price. |
| `domain.lookalikes.find` | Domain names that are close variants of a brand's domain: fixed typo patterns and neighbouring endings looked up live, the ones with DNS records read further (registration record, threat lookup) beside the brand's own record. Facts only: a similar name says nothing about who registered it or why. | Sum of step prices; quote exact input and options for the maximum price. |
| `domain.network.map` | Domains tied to a given domain by shared identifiers, redirects and page code, as a list with the evidence for each tie. | Sum of step prices; quote exact input and options for the maximum price. |
| `domain.register` | Check and quote an exact domain, approve its purchase and optionally upsert and read back DNS records while retaining their old values. | Sum of step prices; quote exact input and options for the maximum price. |
| `domain.renew.watch` | List a page of owned domains, quote those close to expiry and approve each bounded-price renewal. | Sum of step prices; quote exact input and options for the maximum price. |
| `domain.report` | A risk and ownership report for a domain or URL: whether it resolves and takes mail, its registration and name servers, a threat verdict for the address, and the hosting network and its abuse reputation. Findings with sources, never one risk score. | Sum of step prices; quote exact input and options for the maximum price. |
| `domain.transfer-out` | Read an owned domain, check it can be transferred, unlock it after approval, read it back and say how to get the one-time transfer code. | Sum of step prices; quote exact input and options for the maximum price. |
| `domains.expiry.check` | When a list of domains expires: the expiry date, days left counted at read time, registrar and registry statuses, one row per domain. | Sum of step prices; quote exact input and options for the maximum price. |
| `env.audit` | A project's environment variable names and types, compared with a required list: which required names are missing and which present ones the list does not name. | Sum of step prices; quote exact input and options for the maximum price. |
| `experiment.readout` | Checked experiment identity with the app's own conclusion, significance, probabilities and intervals as given. | Sum of step prices; quote exact input and options for the maximum price. |
| `flag.rollout.check` | Checked flag configuration blockers and the evidence still needed before widening a rollout. | Sum of step prices; quote exact input and options for the maximum price. |
| `host.exposure.report` | List observed host services, enrich known vulnerability identifiers and read matching exploit documents. | Sum of step prices; quote exact input and options for the maximum price. |
| `incident.brief` | Exact incident or issue facts, optional on-call rows and deployment context without guessing the cause. | Sum of step prices; quote exact input and options for the maximum price. |
| `ip.block.decide` | Suggest block, challenge or allow from separate network observations; never change a firewall. | Sum of step prices; quote exact input and options for the maximum price. |
| `ip.report` | Roughly where a public IP address is, who owns its network and whether it is reported for abuse: approximate location, owner, route and abuse reputation with sources. | Sum of step prices; quote exact input and options for the maximum price. |
| `kv.state.share` | Change one shared value, counter or list with expiry and a rate limit, returning previous values without approval. | Sum of step prices; quote exact input and options for the maximum price. |
| `monitor.changes.digest` | Everything your monitors caught in a period, grouped by monitor and ranked by size of change, with failed checks listed apart. | Sum of step prices; quote exact input and options for the maximum price. |
| `monitor.spend.tidy` | Review paid monitor checks with no observed change and propose pausing, slowing or approved deletion. | Sum of step prices; quote exact input and options for the maximum price. |
| `release.health` | Received events or error occurrences in checked equal windows around one deployment; missing buckets stay unknown. | Sum of step prices; quote exact input and options for the maximum price. |
| `release.ship` | Stage one exact commit whose selected build passed, then approve production promotion and a checked feature flag change with a confirming read. | Sum of step prices; quote exact input and options for the maximum price. |
| `repo.secrets.audit` | Scan supplied repository snapshot text for secret counts and return fixed rotation steps, without exposing the text or secrets. | Sum of step prices; quote exact input and options for the maximum price. |
| `repo.signals.brief` | Read package and repository activity figures, with a checked factual brief. | Sum of step prices; quote exact input and options for the maximum price. |
| `secret.rotate` | Replace one secret in its checked configuration and every explicitly listed deployment use, with approvals and per-use confirmation. | Sum of step prices; quote exact input and options for the maximum price. |
| `sessions.digest` | Measured activity and error signals from exact recorded sessions, with a checked per-session digest and limits on what they establish. | Sum of step prices; quote exact input and options for the maximum price. |
| `speed.compare` | Your pages against competitors' on the same device and throttling, side by side. | Sum of step prices; quote exact input and options for the maximum price. |
| `tag.container.audit` | Read one container workspace's tags, triggers and variables, and name paused tags, tags that never fire, and unused triggers and variables. | Sum of step prices; quote exact input and options for the maximum price. |
| `tech.market.report` | How many sites use a technology, by rank band, language, country and category, and what it is used with. | Sum of step prices; quote exact input and options for the maximum price. |
| `test.dataset.build` | Realistic made-up records in a chosen locale, checked against your schema. | Sum of step prices; quote exact input and options for the maximum price. |
| `threat.lookup` | Known threat observations for one address, domain, page or file fingerprint, with unchecked sources kept explicit. | Sum of step prices; quote exact input and options for the maximum price. |
| `uptime.report` | Checked availability and sampled slow responses for one monitor and time window. | Sum of step prices; quote exact input and options for the maximum price. |
| `usage.bill` | Record billable usage events for one billing customer and read their prepaid balance back, with a status per event. | Sum of step prices; quote exact input and options for the maximum price. |
