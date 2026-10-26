# Superpowers: Phone & messaging

Calls, AI phone agents, SMS, WhatsApp, chat and one-time codes.

## AI voice agents

Build voice agents that talk on phone calls, with documents and tools.

- `voice.assistant.check-background-sound`: Check an owned audio file for use as background sound. File contents may include personal speech; up to 100 MB.
- `voice.assistant.create`: Create your uniquely named speaking agent configuration, including instructions that may contain personal data.
- `voice.assistant.create-configured`: Create a named speaking configuration without fixed pause or interruption word counts. Returns saved prompts, which may contain personal data. Send an Idempotency-Key. (needs approval)
- `voice.assistant.delete`: Permanently delete your assistant configuration. Explicit confirmation is required.
- `voice.assistant.get`: Read your speaking agent configuration, including instructions that may contain personal data.
- `voice.assistant.get-configured`: Read your named speaking configuration, including prompts that may contain personal data.
- `voice.assistant.update`: Update your speaking agent configuration, including instructions that may contain personal data.
- `voice.assistant.update-configured`: Update your named speaking configuration. Saving leaves a draft unless activation is requested. Send an Idempotency-Key. (needs approval)
- `voice.assistants.list`: List up to 100 of your own speaking agent configuration, including instructions that may contain personal datas per page.
- `voice.assistants.list-configured`: List your speaking configurations by name; names may contain personal data.
- `voice.knowledge-base.create`: Index your text, uploaded document or public pages as a job. Documents may contain personal data. Ingestion and monthly storage are charged separately. Unpaid storage is kept, and new use is refused. Send an Idempotency-Key. (needs approval)
- `voice.knowledge-base.delete`: Delete a document base: its search tool is taken off every assistant that uses it and its monthly storage billing ends. The current month is not refunded and documents, with any personal data in them, cannot be recovered. A repeat returns the same answer; send an Idempotency-Key. (needs approval)
- `voice.knowledge-base.get`: Read the indexing state of your document base. Document contents are not returned.
- `voice.knowledge-bases.list`: List your document bases with handles for attaching a ready, paid base to an assistant.
- `voice.squad.create`: Create your uniquely named group of named speaking agents; the first member starts.
- `voice.squad.delete`: Permanently delete your squad configuration. Explicit confirmation is required.
- `voice.squad.get`: Read your group of named speaking agents; the first member starts.
- `voice.squad.update`: Update your group of named speaking agents; the first member starts.
- `voice.squads.list`: List up to 100 of your own group of named speaking agents; the first member startss per page.
- `voice.tool.create`: Create your uniquely named call tool: a built-in action, hosted code, or a function tool that sends a signed request to one of your own webhook endpoints and reads its text answer back to the agent. Code and text may contain personal data.
- `voice.tool.delete`: Permanently delete your tool configuration. Explicit confirmation is required.
- `voice.tool.get`: Read your hosted call tool configuration; code and text may contain personal data.
- `voice.tool.update`: Update your call tool configuration, including a function tool's endpoint and time limit; code and text may contain personal data.
- `voice.tools.list`: List up to 100 of your own hosted call tool configuration; code and text may contain personal datas per page.

## Browser calling

Make and take calls from a web page.

- `voice.browser-call.accept`: Answer a ringing call in a browser phone session. Other agents it rang stop ringing. Accepting twice answers the same.
- `voice.browser-call.reject`: Decline a ringing call in a browser phone session. When no agent is left ringing, the caller is hung up. Rejecting twice answers the same.
- `voice.browser-call.start`: Dial a phone number from a browser phone session; the agent talks through the page. A repeated Idempotency-Key returns the same call and never dials again. (needs approval)
- `voice.browser-session.close`: Revoke a browser phone session now: the page is disconnected and its calls end. Closing again answers the same.
- `voice.browser-session.create`: Open a browser phone session for one agent on one of your numbers. The page gets a short-lived Pramaan credential; audio goes through Pramaan. Send an Idempotency-Key.
- `voice.browser-session.events`: Read a browser phone session's call events after a cursor: ringing, connected, rejected, failed, ended. Ids are stable, so replays never duplicate ticket activity.
- `voice.browser-session.refresh`: Renew a browser phone session: a new credential and a later expiry (12 hours at most from creation). The old credential stops opening connections.

## Call campaigns

Run phone call campaigns to many people and track results.

- `voice.campaign.calls.list`: List up to 100 calls in an owned voice campaign, with activity and handles; excludes recipient contact details.
- `voice.campaign.create`: Start a voice campaign for up to 100 people. Recipient numbers and spoken text are personal data. Up to three retries and 600 seconds per call; the source must bound its message or flow before dialing. (needs approval)
- `voice.campaign.delete`: Delete an owned voice campaign after it has been archived. Previously incurred call usage remains separate.
- `voice.campaign.finish`: Complete or archive an owned voice campaign; unfinished calls can be marked failed.
- `voice.campaign.get`: Read the state, schedule and counts of an owned voice campaign. No recipient contact details are returned.
- `voice.campaign.pause`: Pause future calls of an owned voice campaign. Calls already in progress may continue.
- `voice.campaign.resume`: Resume your paused voice campaign after checking the remaining worst-case spend. This starts new calls to the campaign's recipients. (needs approval)
- `voice.campaign.update`: Change your voice campaign before it starts. Changes can affect up to 100 recipient numbers and spoken text; the source checks the new worst-case spend before updating. (needs approval)
- `voice.campaigns.list`: List up to 100 owned voice campaigns with state, counts, schedule and handles. Returns no recipient contact details.

## iMessage

Send, receive and manage iMessage conversations and groups from your own sender.

- `imessage.contact.check`: Check iMessage support for a phone number or email address. An inconclusive check returns an error.
- `imessage.conversation.mark-read`: Request a read receipt for an owned direct conversation. Does not confirm receipt delivery.
- `imessage.conversation.typing`: Show or stop a typing indicator in an owned direct conversation; delivery is best effort.
- `imessage.group.create`: Create a group and send its first message. Contains participant addresses and personal conversation text; channel downgrade requires explicit permission. (needs approval)
- `imessage.group.get`: Read an owned group, including participant addresses, display name and photo.
- `imessage.group.message.send`: Send text or media to an owned group using its original sender. Contains personal conversation content. (needs approval)
- `imessage.message.get`: Read one owned message, including contact address, personal conversation text and attachments.
- `imessage.message.react`: Add or remove a reaction on an owned message. Reaches its original conversation. (needs approval)
- `imessage.message.receive`: Wait for an incoming message by authenticated polling. Returns personal conversation content; never sends a message to obtain a reply.
- `imessage.message.reply`: Reply to an owned iMessage using its original sender and conversation. Contains personal message content. (needs approval)
- `imessage.message.send`: Send an iMessage from your connected sender. First messages to new contacts must be plain text. Send an Idempotency-Key. (needs approval)
- `imessage.message.send-rich`: Send text or media to a person from your rented sender. Includes recipient address and message content; use an Idempotency-Key. (needs approval)
- `imessage.message.status`: Read delivery state for an owned message; acceptance does not mean delivery.
- `imessage.messages.list`: List messages for one owned sender and contact. Returns personal conversation text, addresses and privately stored attachments.
- `imessage.sender.cancel`: Release an owned sender irreversibly and end its monthly rental. Requires confirm: true; no promise of a refund.
- `imessage.sender.get`: Read one rented sender address and its availability. Returns a phone number or email address.
- `imessage.sender.purchase`: Rent one sender on an explicitly chosen monthly plan. The first month and setup fee are charged separately from call cost; returns the sender address when assigned. (needs approval)
- `imessage.senders.list`: List your rented iMessage sender addresses and availability. Returns phone numbers or email addresses.

## In-app chat

Add chat to your app: channels, messages, members and moderators.

- `chat.channel.create`: Create a channel using your own channel ID. Adding users may notify them and needs approval. Send an Idempotency-Key. (needs approval; needs a connected account)
- `chat.channel.delete`: Permanently delete a channel and its history as a job. Requires confirm: true and an Idempotency-Key. (needs approval; needs a connected account)
- `chat.channel.freeze`: Lock or unlock sending in a channel. Requires approval and an Idempotency-Key. (needs approval; needs a connected account)
- `chat.channel.get`: Read one channel, including its name and membership count. (needs a connected account)
- `chat.channel.hide`: Hide this channel from one user’s channel list without erasing history. Send an Idempotency-Key. (needs a connected account)
- `chat.channel.join`: Let one user join a public group channel. Send an Idempotency-Key. (needs a connected account)
- `chat.channel.leave`: Make one user leave a group channel. Send an Idempotency-Key. (needs a connected account)
- `chat.channel.members.list`: List channel members with display names and presence; personal data. Up to 50 per page. (needs a connected account)
- `chat.channel.moderators.add`: Grant one user the channel moderator role. Send an Idempotency-Key. (needs a connected account)
- `chat.channel.moderators.list`: List channel moderators with display names and presence; personal data. Up to 50 per page. (needs a connected account)
- `chat.channel.moderators.remove`: Remove one user’s channel moderator role. Send an Idempotency-Key. (needs a connected account)
- `chat.channel.read-mark`: Mark all current channel messages read for one user; may notify other participants. Send an Idempotency-Key. (needs approval; needs a connected account)
- `chat.channel.typing.start`: Show that one user is typing in a group channel. Send an Idempotency-Key. (needs a connected account)
- `chat.channel.typing.stop`: Stop showing that one user is typing in a group channel. Send an Idempotency-Key. (needs a connected account)
- `chat.channel.unhide`: Show this channel again in one user’s channel list. Send an Idempotency-Key. (needs a connected account)
- `chat.channel.unread-counts.get`: Read unread message counts for up to 50 explicitly named channel members; personal activity data. (needs a connected account)
- `chat.channel.update`: Change a channel name or its join visibility. Send an Idempotency-Key. (needs a connected account)
- `chat.channels.list`: List channels, up to 50 per page. Names can include personal data. (needs a connected account)
- `chat.message.delete`: Permanently delete one message. Requires confirm: true and an Idempotency-Key. (needs approval; needs a connected account)
- `chat.message.get`: Read one stored message, including text and sender name; personal data. File contents are omitted. (needs a connected account)
- `chat.message.post`: Post a message to a community or team chat channel you connected. Send an Idempotency-Key. (needs approval)
- `chat.message.send`: Send in-app text as a named app user and return its stored message ID. Contains personal data; requires approval and an Idempotency-Key. (needs approval; needs a connected account)
- `chat.message.update`: Edit the text of an existing text message. Contains personal data. Send an Idempotency-Key. (needs a connected account)
- `chat.messages.list`: Read message history with text and sender names; personal data. Up to 50 messages per page; file contents are omitted. (needs a connected account)
- `chat.user.create`: Create a chat profile with your own user key and display name. Send an Idempotency-Key. (needs a connected account)
- `chat.user.delete`: Delete one chat user profile as a job; historical messages remain. Requires confirm: true and an Idempotency-Key. (needs approval; needs a connected account)
- `chat.user.get`: Read a chat profile, including display name and connection presence; personal data. (needs a connected account)
- `chat.user.update`: Update a chat profile or deactivate its user. Changes to display names are personal data. Send an Idempotency-Key. (needs approval; needs a connected account)
- `chat.users.list`: List chat profiles with display names and presence; personal data. Up to 50 profiles per page. (needs a connected account)

## Notifications

Send push, in-app and other notifications to subscribers and manage their devices and preferences.

- `notify.device.create`: Register one subscriber device with a personal push token. Returns a handle, never the token. (needs a connected account)
- `notify.device.delete`: Delete one registered device and its personal token. Sent messages cannot be recalled. (needs a connected account)
- `notify.device.get`: Read one registered device’s platform and settings without returning its personal token. (needs a connected account)
- `notify.device.update`: Change whether one registered device receives notifications. (needs a connected account)
- `notify.devices.list`: List devices registered to one subscriber. Returns device information without tokens. (needs a connected account)
- `notify.inbox-item.delete`: Permanently delete one personal inbox item. Delivered notifications cannot be recalled. (needs a connected account)
- `notify.inbox-item.update`: Change one inbox item’s read, seen, archive, snooze or action state. Engagement is personal data. (needs a connected account)
- `notify.inbox.list`: List one subscriber’s personal inbox messages and engagement state, up to 100. (needs a connected account)
- `notify.message.cancel`: Cancel a pending notification. Messages already sent cannot be recalled. (needs a connected account)
- `notify.message.get`: Read one message status. Includes personal message content only when requested. (needs a connected account)
- `notify.message.send`: Send one message to one subscriber through one channel on your connected account. Subscriber identity and message content are personal data. (needs approval; needs a connected account)
- `notify.messages.list`: List message summaries from one connected account, up to 100. Optional content is personal data. (needs a connected account)
- `notify.preferences.get`: Read a subscriber’s notification preferences. Returns only explicit delivery choices, which are personal data. (needs a connected account)
- `notify.preferences.update`: Merge one personal notification preference without replacing unrelated choices. (needs a connected account)
- `notify.push-audience.send`: Send a push notification to a topic on your connected account. Acceptance does not report recipient count or delivery. (needs approval; needs a connected account)
- `notify.push.send`: Send one push notification from your connected account. The device token and message are personal data; acceptance does not prove delivery. (needs approval; needs a connected account)
- `notify.push.validate`: Validate one push notification without sending it. A device token is personal data. (needs a connected account)
- `notify.subscriber.delete`: Delete one subscriber and stored contacts. Does not promise deletion of historical analytics or delivered messages. (needs a connected account)
- `notify.subscriber.get`: Read one subscriber profile. Email and phone are personal data and are returned only when requested. (needs a connected account)
- `notify.subscriber.upsert`: Create or update a subscriber in your connected account. Sends supplied personal contacts and profile fields. (needs a connected account)
- `notify.workflow.get`: Read workflow configuration and typed step summaries. Credentials, destinations and message templates are excluded. (needs a connected account)
- `notify.workflows.list`: List workflow definitions on your connected account, up to 100. Does not execute them. (needs a connected account)

## One-time codes

Send and verify one-time codes by text or email.

- `otp.challenge.get`: Read your verification challenge state and delivery attempts; optionally include the recipient phone number.
- `otp.challenges.list`: List your verification challenge activity from the last 90 days without returning codes or recipient numbers.
- `otp.resend`: Resend a one-time code using an explicitly selected channel. Follows the original challenge; never switches channels automatically. Send an Idempotency-Key. (needs approval)
- `otp.send`: Send a one-time code to a phone number or email address. Choose the channel explicitly. Send an Idempotency-Key. Supported channels depend on the selected source. (needs approval)
- `otp.verify`: Check a code against the challenge created by otp.send. Returns only a verification verdict; the recipient and code are not returned.

## Opt-outs

Keep a do-not-contact list so messages never reach people who opted out.

- `messaging.opt-out.add`: Add a person to your project's opt-out list: no text, WhatsApp message, call or email you send through Pramaan reaches them on that channel (or any, with all) until you remove it. Free. An existing entry is returned as it is.
- `messaging.opt-out.check`: Whether a send to this address on this channel would be refused because the person opted out. Free. Says only blocked or not, never why.
- `messaging.opt-out.remove`: Remove a person from your project's own opt-out list, for one channel or all. Only entries you added can be removed: one the person made (a STOP reply or an unsubscribe link) counts as not removed. Free. Sends to them may still be refused for other reasons, which are never named.
- `messaging.opt-outs.list`: List your project's own opt-out entries, oldest first, with a masked address, channel, source and reason. Free.
- `messaging.record.redact`: Permanently redact the stored record of an outbound text message you sent; this does not recall delivery.

## Outreach campaigns

Manage contacts, broadcasts, drip sequences and automated replies in one inbox.

- `outreach.broadcast.create`: Create a draft broadcast message and add contacts; nothing is sent until you send it.
- `outreach.broadcast.send`: Send a draft broadcast to its recipients now. Send an Idempotency-Key. (needs approval)
- `outreach.comment-automations.list`: List your comment-to-DM automations with their trigger and send counts.
- `outreach.contact.create`: Add a contact (with consent) to your messaging inbox, optionally linked to a channel.
- `outreach.contact.delete`: Permanently delete a contact record and its channels; inbox message history is not covered.
- `outreach.contact.update`: Update a contact's details or record an opt-out (subscribed: false).
- `outreach.contacts.list`: List or search the contacts in your connected messaging inbox.
- `outreach.sequence.enroll`: Enrol contacts in a drip sequence, which starts messaging them. Send an Idempotency-Key.
- `outreach.sequence.unenroll`: Remove a contact from a drip sequence so it sends them nothing more.
- `outreach.sequences.list`: List your drip sequences with enrolment counts.
- `outreach.workflow.activate`: Set a conversation workflow live so it starts replying to inbound messages.
- `outreach.workflows.list`: List your conversation workflows with run counts.

## Phone calls

Place, control, record and review phone calls.

- `voice.call.audio.start`: Start playing an uploaded audio file to a person on your live call, up to ten times. (needs approval)
- `voice.call.audio.stop`: Stop audio playback on your live call.
- `voice.call.control`: Control the microphone or incoming conference audio of your live call.
- `voice.call.delete`: Permanently delete your ended call and its stored speech artifacts. Explicit confirmation is required.
- `voice.call.dtmf-listener.stop`: Stop keypad event collection on your live call.
- `voice.call.dtmf.send`: Send up to 32 keypad tones to a person on your live call. (needs approval)
- `voice.call.end`: End your live call. A call already ended returns ended.
- `voice.call.get`: Read an owned call state and untrusted speech transcript, capped at 100,000 characters. Does not bill the call again.
- `voice.call.get-details`: Read call activity, including failed calls, connected time when known and start/end times. Returns no telephone numbers.
- `voice.call.legs.list`: Read participant activity for an owned call, without exposing participant contact details.
- `voice.call.recording.get`: Copy an owned call recording containing personal speech to your file storage, up to 10 MB. Unsupported format or tracks are refused.
- `voice.call.speech.start`: Speak text to a person on your live call, up to ten times; premium speech must be selected explicitly. (needs approval)
- `voice.call.speech.stop`: Stop speech playback on your live call.
- `voice.call.start`: Place an outbound phone call from your number and connect it to your configured destination. Send an Idempotency-Key. (needs approval)
- `voice.call.start-agent`: Place one agent telephone call as a job, up to 600 seconds. Holds at most $3; defaults to 120 seconds standard. Returns untrusted speech capped at 100,000 characters. Send an Idempotency-Key. (needs approval)
- `voice.call.start-agent-bulk`: Run up to 100 named-assistant calls with five calls active at a time. Scheduled calls and squads return row errors. Campaign transcripts are capped at 10,000 characters per row. Failed or never-connected rows cost nothing. Send an Idempotency-Key. (needs approval)
- `voice.call.start-configured`: Place a call with explicit routing and options. Returns a job; holds the selected budget, charges settled use, and ends at the duration cap. Your caller and recipient numbers are personal data. (needs approval)
- `voice.calls.list`: List up to 100 of your owned calls per page, with handles and untrusted transcripts capped at 100,000 characters.

## Phone number checks

Check a phone number, its line type and its carrier.

- `people.phone.carrier`: Find the mobile network that serves a phone number now, the network it was first issued on, and whether it was ported between them. Nothing about who holds the number is returned.
- `people.phone.verify`: Check that a phone number is valid and say what kind of line it is, with its country and standard formats. Nothing about who holds the number is returned.
- `phone.number.parse`: Parse a phone number written in any style into international (E.164) form, with its country and line type.
- `phone.number.type`: Classify a phone number as mobile, landline, VoIP or toll-free from its numbering pattern.

## Phone numbers

Rent, buy, port and set up phone numbers and short codes.

- `phone.business-verification.get`: Read your organisation's business identity document review and permission to rent a phone number. No application returns not_found.
- `phone.business-verification.submit`: Submit a business identity document for permission to rent phone numbers. The numbering authority reviews it in your business's name; submission cannot be withdrawn. (needs approval)
- `phone.countries.list`: List purchasable countries and number types with identity requirements and advisory stock; no number is reserved.
- `phone.emergency-address.validate`: Validate a structured personal US postal address for emergency services, or return a normalized address suggestion. Does not activate service. Unpublished price uses a $0.05 estimate per result.
- `phone.number.availability.check`: Check inventory and address constraints before identity verification. Stock is advisory.
- `phone.number.disconnection.check`: Check whether a phone number was disconnected after your last contact date. This does not identify the holder or prove reassignment. Default maximum estimated lookup cost $0.032; a higher account tariff increases it.
- `phone.number.get`: Read the state of your own phone number; verification links open once on the platform.
- `phone.number.health.get`: Read the latest incoming and outgoing connectivity checks for one of your telephone numbers.
- `phone.number.identity-address.validate`: Validate a supplied postal address before identity submission. A missing region skips this early check; address data is forwarded without retention.
- `phone.number.identity-document.get`: Copy your referenced identity document to platform storage, at most 4 MB. Only documents attached to an identity record can be read.
- `phone.number.identity-document.upload`: Upload one identity document, at most 4 MB. Returns a private reference; the document contents are not retained here.
- `phone.number.identity-link.create`: Create a caller-bound identity form link. The hosted form orders a regulated number after completion; monthly rent begins only on activation.
- `phone.number.identity.requirements.get`: Read identity form fields for a country and type. Other builders' stored identities are excluded.
- `phone.number.identity.submit`: Submit identity values and uploaded documents for one number. The submission job accepts personal data and up to four files of 3 MB each; poll the returned reference for activation. (needs approval)
- `phone.number.port-claim.get`: Resolve your private portability claim handle. This does not transfer or reserve the number.
- `phone.number.port-document.upload`: Upload a porting document of at most 10 MB. It must be attached to an order within 30 minutes; contents are forwarded without local retention.
- `phone.number.port-requirements.get`: Read country-specific porting fields without starting a transfer.
- `phone.number.portability.check`: Check portability for up to 50 numbers; returns line and messaging facts without carrier names. This lookup creates no port order.
- `phone.number.ports.list`: List your recorded port orders and telephone numbers; team-wide orders without an ownership record are excluded.
- `phone.number.provision`: Get a phone number for texting in a country. Rented monthly (first month charged now) until you release it. (needs approval)
- `phone.number.purchase`: Buy a phone number after explicit confirmation. Charges monthly only after activation; verification can be required. Returns your own number when active. (needs approval)
- `phone.number.purchase-status`: Read a purchase intent and reconcile activation and monthly charges. Only an active purchase returns its phone number.
- `phone.number.release`: Give back one of your phone numbers. Its monthly charge stops. Cannot be undone.
- `phone.number.routing.update`: Change the label or configured incoming voice/text route of one of your telephone numbers.
- `phone.number.sip-trunk.attach`: Attach your number to your external call trunk. Calls and WhatsApp calling must already be off; usage is metered. (needs approval)
- `phone.number.sip-trunk.detach`: Detach external call routing from your number; stored voice settings are preserved.
- `phone.number.update`: Update the alias, routing or caller-name settings of your rented phone number. Caller-name lookup may incur usage charges.
- `phone.number.voice.configure`: Configure inbound calls on your own number. Future calls, recordings and transcripts incur metered usage; blocked caller numbers are personal data. (needs approval)
- `phone.numbers.list`: List all your phone numbers and what each can do.
- `phone.numbers.search`: Find up to 100 available phone numbers. Approximate inventory matches are excluded; results do not reserve numbers.
- `phone.short-code.update`: Change the label of your assigned short code; inbound configuration is managed separately.
- `phone.short-codes.list`: List short codes already assigned to you; this read never buys or rents a code.
- `voice.number.create`: Create an included US inbound-only telephone number as a metered rental. Free numbers are capped per account; calls still incur usage charges.
- `voice.number.delete`: Delete your included telephone number and end its metered rental. Explicit confirmation is required.
- `voice.number.disconnect`: Disconnect a telephone number from agent calls. The number stays rented and billed as before. Requires explicit confirmation.
- `voice.number.get`: Read your telephone number and its agent binding.
- `voice.number.import`: Connect a telephone number you rent to agent calls. Incoming calls are answered by your attached agent from now on. The number stays rented and billed as before; it holds a telephone number, which is personal data.
- `voice.number.update`: Update your number name or inbound agent binding. Inbound billing must be enabled before attaching an agent.
- `voice.numbers.list`: List up to 100 of your own voice numbers and their agent bindings per page.

## RCS

Send rich text messages from your business sender, with text fallback.

- `rcs.message.send`: Send an RCS text from your verified business sender, with optional SMS fallback. Send an Idempotency-Key. (needs approval)

## SIP trunks

Connect your own phone lines to voice calling.

- `voice.sip-trunk.create`: Create an external call trunk. Credentials are stored privately; only attached-number usage is metered. (needs approval)
- `voice.sip-trunk.credentials.rotate`: Rotate external call credentials; the old password stops working immediately. Credentials stay private. (needs approval)
- `voice.sip-trunk.delete`: Delete an empty external call trunk. Detach its numbers first. (needs approval)
- `voice.sip-trunk.get`: Read your external call trunk and its attached numbers, without credentials.
- `voice.sip-trunks.list`: List your external call trunks without credentials or other builders' data.

## SMS

Send and receive text messages, manage lists, templates and registration.

- `sms.batch.cancel`: Cancel unsent messages in your text-message batch. Messages already sent cannot be recalled.
- `sms.batch.get`: Read a text-message batch: one scheduled or multi-recipient send, including phone numbers and text.
- `sms.batches.list`: List your text-message batches, including destination phone numbers and text content.
- `sms.brand-use-cases.list`: List the messaging purposes permitted for your brand without returning scores.
- `sms.brand.create`: Register a messaging brand using your business profile. Additional paid vetting requires an explicit choice.
- `sms.brand.delete`: Delete your messaging brand after its campaigns have been removed.
- `sms.brand.get`: Read your messaging brand review and vetting states without returning contact details or scores.
- `sms.business-profile.create`: Create a messaging business profile containing a business address, tax details and an authorized person's contact details.
- `sms.business-profile.delete`: Delete your messaging business profile after confirming that it should be removed.
- `sms.business-profile.get`: Read your messaging business profile, including business identity, tax details and personal contact details.
- `sms.business-profile.update`: Update your messaging business profile and its business or personal contact details.
- `sms.business-profiles.list`: List your messaging business profiles without replaying contact or tax details.
- `sms.campaign.delete`: Delete your messaging campaign after explicit confirmation and end its rental.
- `sms.campaign.get`: Read your messaging campaign review state; optionally include message samples and opt-in text.
- `sms.campaigns.list`: List your messaging campaigns and review states without replaying message samples.
- `sms.conversion.report`: Report whether the recipient of your text message completed its intended action.
- `sms.delivery-campaign.create`: Create a static SMS delivery campaign for up to 100 recipients from an owned audience. Recipient phone numbers and message content are personal data; maximum hold USD 240. Send an Idempotency-Key. (needs approval)
- `sms.delivery-campaign.finish`: Read or control your SMS delivery campaign. Message text and recipient phone numbers are omitted from results. (needs approval)
- `sms.delivery-campaign.get`: Read or control your SMS delivery campaign. Message text and recipient phone numbers are omitted from results.
- `sms.delivery-campaign.messages.list`: Read or control your SMS delivery campaign. Message text and recipient phone numbers are omitted from results.
- `sms.delivery-campaign.pause`: Read or control your SMS delivery campaign. Message text and recipient phone numbers are omitted from results.
- `sms.delivery-campaign.resume`: Read or control your SMS delivery campaign. Message text and recipient phone numbers are omitted from results. (needs approval)
- `sms.delivery-campaigns.list`: Read or control your SMS delivery campaign. Message text and recipient phone numbers are omitted from results.
- `sms.delivery-feedback.submit`: Submit recipient receipt feedback for your text-message batch. This does not send another text.
- `sms.delivery-reports.list`: List delivery reports for your texts, including recipient phone numbers and delivery facts. Pass a batch's ref to list that batch's reports only.
- `sms.group-members.list`: Read all people’s phone numbers in your saved text-message group, up to 10000. Larger groups cannot be returned in one call.
- `sms.group.create`: Create a saved group of people’s phone numbers for text messaging. Members are stored until removed or the group is deleted.
- `sms.group.delete`: Permanently delete your saved text-message group; this does not send a message.
- `sms.group.get`: Read the name and member count of your saved text-message group.
- `sms.group.update`: Change your saved group name or add and remove people’s phone numbers.
- `sms.groups.list`: List your saved text-message groups and their member counts.
- `sms.inbound-message.get`: Read one text received by a number you own, including sender and recipient phone numbers and message content.
- `sms.inbound-messages.list`: List texts received by your numbers, including sender and recipient phone numbers and message content.
- `sms.message.validate`: Validate the format of a structured SMS payload without sending it. The supplied recipient and message are personal data.
- `sms.registration-sole.challenge`: Send a sole proprietor ownership confirmation text; a provisional filing fee of up to $0.0133 applies. (needs approval)
- `sms.registration-sole.status`: Read your sole proprietor filing and mobile ownership confirmation state; no contact details are returned.
- `sms.registration-toll-free.delete`: Withdraw toll-free verification after explicit confirmation, keeping the phone number and its rental.
- `sms.registration-toll-free.list`: List your toll-free verification states without returning business contact details.
- `sms.registration-toll-free.status`: Read your toll-free verification state without returning business contacts.
- `sms.registration-toll-free.submit`: Submit toll-free verification with business address, contact details and opt-in evidence; the number must already be rented.
- `sms.registration-toll-free.update`: Correct an editable toll-free filing with business address, contact details and opt-in evidence.
- `sms.registration.status`: Check your US texting registration: not submitted, under review, approved or rejected, and what to do next.
- `sms.registration.submit`: Register your business and campaign for texting US numbers. Call once, then again (with a new Idempotency-Key) when the status is brand_approved.
- `sms.registrations.list`: List your filed messaging registrations without returning business contact details.
- `sms.send`: Send a text message to an E.164 number from one of your numbers (one is provisioned if needed). Returns a ref for sms.status. US numbers need sms.registration.submit first. (needs approval)
- `sms.send-bulk`: Send texts to up to 100 telephone numbers as a background job. Message bodies contain personal text. Every flat result row carries your row id; failed rows are free. Each text is sent on its own, so a row's batchRef (where the source sends in batches) names that row's batch for sms.batch.get and sms.delivery-reports.list. The hold covers all selected send sources and message segments. (needs approval)
- `sms.send-configured`: Send an SMS with explicit sender label, route, encoding, flash and optional delivery registration or schedule. Unsupported options are declined. Cost covers every segment. Send an Idempotency-Key. (needs approval)
- `sms.send-configured-bulk`: Send up to 100 configured SMS rows as a job. Each caller id is returned once. The cost hold covers every segment of every row; send an Idempotency-Key. (needs approval)
- `sms.send-options`: Send an SMS with owned delivery bindings, encoding, priority and optional custom-domain shortening. Maximum hold USD 6.50; message text and recipient are personal data. Send an Idempotency-Key. (needs approval)
- `sms.send-options-bulk`: Send up to 100 rows as a job. Each caller id is returned once; the hold covers every message. Send an Idempotency-Key. (needs approval)
- `sms.send-preview`: Preview the text, encoding, up to 24 parts and the estimated price of sending it to one phone number. This sends no text and rents no number.
- `sms.send-preview-bulk`: Preview text messages for up to 200 rows as a background job, each with its parts and estimated price. Each row keeps your own ID. This sends no texts and rents no numbers.
- `sms.status`: Delivery status of a text message sent with sms.send. Pass the ref that sms.send returned.
- `sms.template-version.activate`: Activate a version of your text-message template and confirm its active state.
- `sms.template-version.create`: Create a new version of your text-message template. The template content can contain personal data.
- `sms.template-versions.list`: List up to 100 versions of your text-message template, including its text and active state.
- `sms.template.create`: Create a stored text-message template with your sender label and optional delivery registration. Template content can contain personal data.
- `sms.template.send`: Send your stored template to one phone number. Expanded text is capped at 1600 code units; the cost hold covers all segments. Send an Idempotency-Key. (needs approval)

## Viber

Send business messages on Viber.

- `viber.message.send`: Send one opted-in business text to a phone number. Send an Idempotency-Key. Sender monthly charges may apply separately. (needs approval)

## WhatsApp

Send WhatsApp messages and templates and manage your business profile.

- `whatsapp.account.health.get`: Check your WhatsApp business account health and messaging limits.
- `whatsapp.blocked-users.list`: List blocked phone numbers belonging to your WhatsApp sender, with handles for unblocking.
- `whatsapp.business-profile.get`: Read your WhatsApp business address, contact email, websites, description and about text.
- `whatsapp.business-profile.photo.get`: Copy your WhatsApp business profile photo to your private files, up to 10 MB.
- `whatsapp.business-profile.photo.update`: Replace your WhatsApp business profile photo with an uploaded JPEG or PNG, up to 5 MB.
- `whatsapp.business-profile.update`: Update your WhatsApp business contact details, description or about text.
- `whatsapp.conversation-settings.get`: Read WhatsApp welcome-message, conversation-starter and command settings.
- `whatsapp.conversation-settings.update`: Configure WhatsApp welcome messages, conversation starters and commands.
- `whatsapp.media.delete`: Permanently delete an owned WhatsApp media file. (needs approval)
- `whatsapp.media.upload`: Upload an owned file or public media link to WhatsApp, up to 5 MB. Media persists for 30 days unless deleted earlier.
- `whatsapp.message.send`: Reply with free text on WhatsApp to someone who messaged you in the last 24 hours. Send an Idempotency-Key. (needs approval)
- `whatsapp.message.send-rich`: Send media, location, a contact card or choices through WhatsApp. Sends personal message content to the recipient. Maximum hold USD 0.10; Send an Idempotency-Key. (needs approval)
- `whatsapp.message.send-rich-bulk`: Send up to 100 rows as a job. Each caller id is returned once; the hold covers every message. Send an Idempotency-Key. (needs approval)
- `whatsapp.sender.health.get`: Check whether your WhatsApp sender is operational.
- `whatsapp.sender.quality.get`: Read your WhatsApp sender quality and messaging tier. No event is a missing record.
- `whatsapp.template.create`: Create a WhatsApp message template for review. Sample media and content are sent for review; sending is separate.
- `whatsapp.template.delete`: Permanently delete an owned WhatsApp template. (needs approval)
- `whatsapp.template.get`: Read an owned WhatsApp template, including its message text and buttons.
- `whatsapp.template.send`: Send an approved WhatsApp template to an opted-in number, e.g. to start a conversation. Send an Idempotency-Key. (needs approval)
- `whatsapp.template.send-bulk`: Send up to 100 approved WhatsApp templates as a job. Flat rows retain your ids; each send is accepted separately and never automatically repeated after an unclear outcome. Send an Idempotency-Key. (needs approval)
- `whatsapp.template.send-configured`: Send an approved template with a media header, dynamic buttons, carousel cards or authentication code. Recipient and substitutions are personal data. Maximum hold USD 0.10. Send an Idempotency-Key. (needs approval)
- `whatsapp.template.update`: Edit an owned WhatsApp template. Changes may need another review.
- `whatsapp.templates.list`: List your WhatsApp message templates and their approval status.
- `whatsapp.templates.list-details`: List detailed WhatsApp templates and handles for reading, editing and deleting them.
- `whatsapp.user.block`: Block a person from messaging your WhatsApp sender. Returns a handle for unblocking. (needs approval)
- `whatsapp.user.unblock`: Unblock a person using the handle from blocking or listing blocked users.
