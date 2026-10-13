# MITZR terms: research, decisions, and follow-through

Prepared October 13, 2026 for VORDALI Inc. This is a drafted contract and implementation handoff, not an attorney opinion, a legal-compliance certification, or a guarantee against claims. Website publication does not establish that existing app users accepted the terms.

## Delivered website change

- Dedicated `/mitzr/terms` page with 24 numbered sections, stable anchors, a readable mobile layout, effective date/version, printable content, and a text download generated from the same source.
- New Terms of Use card on MITZR's player-resources area, explicit MITZR Terms footer link, and sitemap entry. Business terms remain separate.
- Source of truth: `lib/mitzr-terms.ts`. Keep earlier versions in Git; retain exact public versions and acceptance evidence when integrating the app.
- No Unity, Supabase, billing, analytics configuration, age verification, moderation backend, or account-consent system changes are made by this website work.

## Benchmark review

Reviewed the complete current [Scopely Explore Terms of Service](https://explore.scopely.com/terms) (July 15, 2026), linked by the [Pokémon GO help center](https://niantic.helpshift.com/hc/en/6-pokemon-go/faq/1015-terms-of-service/). All 18 top-level areas were examined, including their subsections.

| Benchmark area | MITZR treatment |
| --- | --- |
| Agreement, privacy, accounts, eligibility, safety | Original sections 1–4 and 15; explicit notice and assent; no claimed child-consent infrastructure |
| Licensing, content, trading, currency, feedback, IP | Sections 10–13 and 24; purpose-limited submissions permission and authorized digital gifts |
| Prohibited conduct and enforcement | Sections 8–9 and 16; community-specific prohibitions, reporting and review |
| Events, promotions and beta programs | Section 18 requires separate event-specific conditions rather than importing ticketing, publicity or confidentiality waivers |
| Third parties, warranties and liability | Sections 14–15 and 19–21; statutory-rights exceptions and responsibility for our own conduct |
| Arbitration and general provisions | Sections 22–23 use courts, preserve consumer forums, and do not adopt the competitor's arbitration/batching scheme |
| Korea, EEA, Germany and Indonesia supplements | Mandatory local rights preserved; no copied country-specific waivers or claim of localized legal review |

This was a topic comparison, not a reproduction or renamed copy. MITZR-specific additions address donated food, allergens, resource availability, private Need/Resource Pins, no guaranteed fulfillment, property complaints, no emergency dispatch, and limitations of automated matching/shortage estimates.

## Material policy choices in this version

1. **Age 13+**, or the higher local minimum; parental agreement for minors. Under-13 enrollment is not offered by these terms. This is a conservative proposed operating policy, not a finding that the current app enforces it. Confirm the intended audience and reconcile the app and Play Console before relying on this restriction. If MITZR is meant for younger children, design a compliant child experience and consent/data controls; merely changing the text or adding a parent checkbox is insufficient.
2. **No mandatory arbitration, class-action waiver, or jury waiver.** Kentucky law/courts are selected subject to mandatory consumer protections. Arbitration would require a separately considered provider, fees, process, opt-out/notice terms, and counsel review.
3. **Limit on legally limitable liability:** greater of $100 or the preceding 12 months' MITZR payments, with express carve-outs. Counsel must assess enforceability and fit with insurance and actual exposure. There is no blanket release of negligence-related injury, gross negligence, intentional wrongdoing, or mandatory consumer claims.
4. **Refund rights preserved.** No unconditional "all sales final" promise; store and statutory remedies govern protected situations. No recurring-charge authorization is created.
5. **Content license limited to operation and provision of MITZR.** No blanket right to advertise private requests or claim ownership of user content. No claim of a registered DMCA agent.
6. **No retroactive assent or quiet material changes.** Posting a page is not a substitute for presenting and obtaining agreement to it.

## Next app release: acceptance and moderation

Google Play's [UGC policy](https://support.google.com/googleplay/android-developer/answer/9876937?hl=en) requires terms/user-policy acceptance before users create or upload UGC, definitions of prohibited content, and ongoing moderation with appropriate in-app reporting/blocking. It specifically addresses problematic AR anchoring locations. A website link alone does not fulfill these requirements.

Prepare a separate reviewed Unity/backend change:

- Clearly present the MITZR terms and privacy links at enrollment and before an existing or guest user first submits content. Use a deliberate, unselected acceptance control with clear consequences; do not combine it with optional marketing/analytics consent.
- Record the agreed version, authenticated account (or appropriate guest identifier), server timestamp, locale and disclosure/flow version. Keep a durable exact copy/hash of the text shown. Collect no unnecessary identity, location, or child information for this purpose.
- Gate relevant server-side writes against the required accepted version. A client checkbox alone can be bypassed. Preserve read-only access where feasible; do not fabricate past acceptance records.
- Present material revisions and obtain renewed agreement where needed. Support decline, account deletion and applicable purchase remedies. Provide an always-available Settings/About terms link.
- Verify reporting for listings, private requests, notes and users; blocking for relevant social interactions; moderation triage/appeals; unsafe-location removal; and urgent child-safety escalation. An email address and profanity filter alone are not the whole moderation system.

No acceptance gate or claim of acceptance was added to the live game in this task.

## Additional work that contract language cannot replace

- **Children and audience:** review actual marketing, visual design, users, SDK behavior, location processing and age controls against the amended [COPPA Rule](https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa) and [FTC guidance](https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions). A 13+ sentence does not by itself decide whether an app is child-directed or resolve actual knowledge of child use. Verify current parental notice, consent, retention and third-party disclosures with counsel if applicable.
- **Privacy accuracy:** the current MITZR privacy source is dated September 23 and states there is no advertising/rewarded-ad implementation; it does not fully describe the subsequently discussed Need/Resource and social flows. Verify the actual shipped build and SDK configuration before updating that policy and Play Data Safety. Do not treat old source text or future branch features as proof of deployed behavior.
- **Refund operations:** ensure support can investigate and act on purchase issues consistent with [Google Play refund guidance](https://support.google.com/googleplay/answer/2479637), including non-delivery and unauthorized purchases. Do not promise restoration or cancellation behavior that the app cannot provide.
- **Copyright:** assess and, if appropriate, register and publish a valid DMCA agent; the [Copyright Office directory and guidance](https://www.copyright.gov/dmca-directory/) describe designation. Maintain an actual notice/counter-notice and repeat-infringer process before claiming safe-harbor compliance.
- **Business details and geography:** confirm the contracting entity, monitored support contact, suitable business/service address for legally required notices, actual countries served and local consumer requirements. No home address was invented or published. Review Kentucky [KRS 367.170](https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=34914); terms cannot authorize deceptive practices.
- **Operational protection:** insurance appropriate to app/media/privacy and location-based risks; incident response; food/resource complaint handling; SDK and asset licenses; access controls; data retention; staff training and actual moderation. Terms do not provide insurance or prevent a lawsuit.
- **Future launches:** separate review for physical events, promotions, donations/payments, child accounts, real-time alerts, transportation, provider contracts, or consequential use of intelligence. These terms do not activate or approve those features.

Obtain review by a Kentucky-licensed attorney with consumer technology/privacy experience before treating this package as complete legal protection. Keep the concrete choices above visible during review rather than assuming the strictest-sounding clause is enforceable.
