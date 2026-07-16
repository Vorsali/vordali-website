export type PolicySection = { title: string; body: string };
export type Policy = { title: string; eyebrow: string; summary: string; effective: string; sections: PolicySection[] };

export const policies: Record<string, Policy> = {
  privacy: {
    title: "Privacy Policy", eyebrow: "Privacy", summary: "How Vordali collects, uses, protects, and shares information.", effective: "July 16, 2026",
    sections: [
      { title: "Overview", body: "Vordali provides software that helps participating businesses send secure payment requests and related transactional communications. This Privacy Policy explains how Vordali collects, uses, protects, and shares information when people use vordali.com, Vordali Commit, and related services." },
      { title: "Information we collect", body: "We may collect names, mobile phone numbers, email addresses, business information, order references, payment-request details, device and browser information, IP addresses, timestamps, account activity, and support communications. Vordali does not store full payment-card numbers. Payment details are handled by Stripe." },
      { title: "How we use information", body: "We use information to provide secure payment requests, deliver transactional messages, confirm payment status, support participating businesses and customers, prevent fraud and abuse, maintain security, comply with legal obligations, and improve reliability and usability." },
      { title: "SMS communications", body: "Transactional messages may include secure payment links, reminders, payment confirmations, and order updates. Message frequency varies by transaction. Message and data rates may apply. Reply STOP to opt out or HELP for assistance. Mobile information will not be shared with third parties or affiliates for marketing or promotional purposes." },
      { title: "How information is shared", body: "We do not sell personal information. We may share information with the participating business involved in the transaction; service providers such as Stripe, Twilio, Supabase, and Vercel; professional advisers; and government authorities when required by law or necessary to protect rights, safety, and platform integrity." },
      { title: "Data security", body: "We use reasonable administrative, technical, and organizational safeguards, including HTTPS/TLS, access controls, authentication, logging, and limited access to production systems. No online service can guarantee absolute security." },
      { title: "Data retention", body: "We retain information for as long as reasonably necessary to provide services, maintain business and transaction records, prevent fraud, resolve disputes, enforce agreements, and meet legal requirements." },
      { title: "Your choices", body: "Depending on applicable law, you may request access, correction, or deletion of certain personal information. SMS recipients may reply STOP to opt out. Requests may be sent to support@vordali.com." },
      { title: "Children", body: "Vordali services are intended for businesses and customers completing legitimate transactions and are not directed to children under 13." },
      { title: "Changes", body: "We may update this policy as Vordali evolves. The effective date shown on this page reflects the latest revision." },
      { title: "Contact", body: "Questions or privacy requests may be sent to support@vordali.com." }
    ]
  },
  terms: {
    title: "Terms of Service", eyebrow: "Terms", summary: "The rules and responsibilities governing use of Vordali services.", effective: "July 16, 2026",
    sections: [
      { title: "Acceptance", body: "By accessing or using Vordali services, you agree to these Terms of Service. If you use Vordali on behalf of an organization, you represent that you have authority to bind that organization." },
      { title: "Service description", body: "Vordali Commit enables participating businesses to create secure payment requests, send transactional communications, and view payment status. Payment processing is provided by Stripe and messaging delivery may be provided by Twilio or another communications provider." },
      { title: "Business responsibilities", body: "Businesses must provide accurate information, obtain legally sufficient consent before sending messages, use Vordali only for lawful transactions, protect account credentials, fulfill purchased goods or services, and comply with payment, messaging, consumer-protection, and privacy laws." },
      { title: "Payments and fees", body: "Payments are processed by Stripe. Vordali does not store full card numbers. Participating businesses are responsible for refunds, disputes, taxes, fulfillment, and compliance with their Stripe agreement." },
      { title: "Prohibited conduct", body: "Users may not send unsolicited messages, create deceptive payment requests, impersonate another business, facilitate illegal goods or services, probe or disrupt platform security, or misuse customer data." },
      { title: "Suspension and termination", body: "We may restrict or terminate access for suspected fraud, abuse, legal violations, security risk, nonpayment, or conduct that could harm customers, businesses, Vordali, or service providers." },
      { title: "Third-party services", body: "Vordali relies on third-party services, including payment, communications, hosting, and database providers. Their terms and availability may affect Vordali services." },
      { title: "Disclaimers", body: "Services are provided on an as-available basis. To the maximum extent permitted by law, Vordali disclaims implied warranties and does not guarantee uninterrupted or error-free operation." },
      { title: "Changes", body: "We may revise these terms. Continued use after an update constitutes acceptance of the revised terms." },
      { title: "Contact", body: "Questions may be sent to support@vordali.com." }
    ]
  },
  "sms-terms": {
    title: "SMS Terms & Conditions", eyebrow: "Messaging", summary: "Terms governing transactional text messages sent through Vordali Commit.", effective: "July 16, 2026",
    sections: [
      { title: "Program description", body: "Vordali Commit sends transactional SMS messages on behalf of participating businesses after a customer provides a mobile number and consents to receive messages related to a transaction." },
      { title: "Message types", body: "Messages may include secure payment requests, payment confirmations, reminders, expiration notices, and order status updates. Messages are not intended for unrelated promotional marketing." },
      { title: "Consent", body: "By providing a mobile number and agreeing to receive messages, you authorize Vordali and the participating business to send transactional texts related to that transaction. Consent is not a condition of purchasing goods or services." },
      { title: "Frequency and charges", body: "Message frequency varies by transaction. Message and data rates may apply according to your wireless plan." },
      { title: "Opt out", body: "Reply STOP to opt out. After opting out, you may receive one final confirmation message." },
      { title: "Help", body: "Reply HELP for assistance or contact the participating business. You may also email support@vordali.com." },
      { title: "Delivery", body: "Wireless carriers and Vordali are not responsible for delayed or undelivered messages." },
      { title: "Privacy", body: "Information associated with messaging is handled as described in the Vordali Privacy Policy." }
    ]
  },
  cookies: { title: "Cookie Policy", eyebrow: "Cookies", summary: "How Vordali uses cookies and similar technologies.", effective: "July 16, 2026", sections: [
    { title: "What cookies are", body: "Cookies are small files stored by a browser. Similar technologies may include local storage, pixels, and device identifiers." },
    { title: "How we use them", body: "Vordali may use strictly necessary cookies to keep users signed in, maintain security, prevent fraud, preserve preferences, and support core site functions." },
    { title: "Your choices", body: "Most browsers allow you to block or delete cookies. Some Vordali features may not work correctly if necessary cookies are disabled." },
    { title: "Contact", body: "Questions may be sent to support@vordali.com." }
  ]},
  "acceptable-use": { title: "Acceptable Use Policy", eyebrow: "Acceptable use", summary: "Activities that are prohibited when using Vordali.", effective: "July 16, 2026", sections: [
    { title: "Purpose", body: "This policy protects customers, businesses, carriers, payment networks, and Vordali from abuse." },
    { title: "Prohibited messaging", body: "Users may not send unsolicited messages, purchased-list messages, deceptive content, unlawful marketing, phishing, harassment, or messages sent without required consent." },
    { title: "Prohibited transactions", body: "Users may not request payment for illegal goods or services, fraudulent transactions, deceptive offers, or activity prohibited by Stripe or applicable law." },
    { title: "Platform abuse", body: "Users may not attempt unauthorized access, interfere with service operation, introduce malicious code, scrape protected data, evade rate limits, or test vulnerabilities without written permission." },
    { title: "Enforcement", body: "Vordali may investigate suspected violations and may suspend, restrict, or terminate access." },
    { title: "Reporting", body: "Report suspected abuse to abuse@vordali.com or support@vordali.com." }
  ]},
  security: { title: "Security", eyebrow: "Security", summary: "How Vordali approaches payment, account, and data security.", effective: "July 16, 2026", sections: [
    { title: "Security by design", body: "Vordali is designed to reduce the amount of sensitive information handled directly by the platform and to rely on established providers for specialized services." },
    { title: "Payment security", body: "Payments are processed through Stripe. Vordali does not store full payment-card numbers or bank credentials." },
    { title: "Encryption", body: "Vordali uses HTTPS/TLS for data transmitted between browsers, APIs, and service providers." },
    { title: "Access controls", body: "Merchant access requires authentication. Administrative access is limited and should follow least-privilege practices." },
    { title: "Monitoring and logging", body: "Vordali records operational and security events needed to investigate issues, prevent abuse, and support reliable service." },
    { title: "Responsible disclosure", body: "To report a potential vulnerability, email security@vordali.com." }
  ]}
};
