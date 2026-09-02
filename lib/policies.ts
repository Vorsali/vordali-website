export type PolicySection = { title: string; body: string };
export type Policy = { title: string; eyebrow: string; summary: string; effective: string; sections: PolicySection[] };

export const policies: Record<string, Policy> = {
  privacy: {
    title: "Privacy Policy", eyebrow: "Privacy", summary: "How Vordali collects, uses, protects, and shares information across our websites, services, and Vordali Commit mobile application.", effective: "August 29, 2026",
    sections: [
      { title: "Overview", body: "VORDALI Inc. (\"Vordali,\" \"we,\" \"us,\" or \"our\") provides merchant tools for creating, sending, and monitoring secure payment requests. This Privacy Policy explains how we collect, use, disclose, and protect information when merchants use Vordali websites, services, and the Vordali Commit mobile application." },
      { title: "Merchant account information", body: "We may collect a merchant user's name, email address, internal account identifier, organization membership, authentication information, business settings, and support communications. Authentication credentials are processed through our authentication provider; Vordali does not display passwords to other users." },
      { title: "Customer payment-request information", body: "Authorized merchants may enter a customer's name, mobile telephone number, payment-request amount, order or request reference, and SMS-consent status. We also process the status and timing of payment requests. Merchants are responsible for having a lawful basis to provide this information and for obtaining any consent required to send a transactional text message." },
      { title: "Payment information", body: "Customer card details are entered into a secure hosted payment experience operated by our payment processor. Vordali Commit does not collect or store full payment-card numbers. Vordali may receive transaction identifiers, amounts, status, timing, and related payment metadata needed to provide the service, prevent fraud, reconcile transactions, and support merchants." },
      { title: "Device and application information", body: "We may process an application push token, device platform, notification preferences, session information, IP address, browser or application metadata, and service logs. The Android application does not request access to the microphone, camera, precise location, or contacts." },
      { title: "How we use information", body: "We use information to authenticate users and maintain secure sessions; connect authorized users to their organization; create, send, display, and manage payment requests; deliver transactional SMS messages and private payment-status notifications; process and reconcile payments; operate, secure, troubleshoot, and improve the service; detect misuse; comply with law; and respond to support, privacy, and account-deletion requests." },
      { title: "How we disclose information", body: "We may disclose information to service providers that help us operate Vordali, including providers for cloud hosting and databases, authentication, payment processing, transactional messaging, push notifications, monitoring, and customer support. We may also disclose information when required by law, to protect rights or safety, in connection with a business transaction, or when directed by an authorized user. Vordali does not sell personal information and does not use Vordali Commit for advertising or behavioral tracking." },
      { title: "Data retention", body: "We retain information for as long as reasonably necessary to provide the service, maintain business and transaction records, resolve disputes, prevent fraud, and comply with legal, tax, accounting, and payment-industry requirements. Transaction and accounting records may be retained for up to seven years when legally or operationally required. Other account information is deleted or de-identified after a verified deletion request when reasonably possible, except for required security, audit, backup, fraud-prevention, and legal records. Information may remain in protected backups for a limited period after deletion from active systems." },
      { title: "Security", body: "We use administrative, technical, and organizational safeguards designed to protect information, including authenticated access, organization-based authorization, encrypted network connections, restricted service credentials, and private Android lock-screen notification content. No system can guarantee absolute security." },
      { title: "Your choices and rights", body: "Depending on where you live, you may have rights to request access, correction, deletion, restriction, or a copy of personal information. Authorized merchant users can request account assistance or deletion at support@vordali.com. Customers whose information was entered by a merchant should ordinarily contact that merchant first and may also contact Vordali for help. We may need to verify a request and may retain information when required or permitted by law." },
      { title: "Notifications and communications", body: "Android notifications are optional and can be disabled in device settings. Transactional payment text messages are sent only after the merchant confirms customer consent. Message and data rates may apply. SMS recipients may reply STOP to opt out or HELP for assistance." },
      { title: "Children's privacy", body: "Vordali Commit is a business application for authorized merchant users and is not directed to children. We do not knowingly offer merchant accounts to children." },
      { title: "Changes to this policy", body: "We may update this Privacy Policy as our services or legal obligations change. We will post the updated policy at this URL and revise the effective date. Material changes may also be communicated through the service or other appropriate means." },
      { title: "Contact us", body: "For privacy questions or requests, contact VORDALI Inc. at support@vordali.com." }
    ]
  },
  terms: {
    title: "Terms of Service", eyebrow: "Terms", summary: "The rules and responsibilities governing use of Vordali services.", effective: "July 22, 2026",
    sections: [
      { title: "Acceptance", body: "By accessing or using Vordali services, you agree to these Terms of Service. If you use Vordali on behalf of an organization, you represent that you have authority to bind that organization." },
      { title: "Service description", body: "Vordali Commit enables participating businesses to create secure payment requests, send transactional communications, and view payment status. Payment processing is provided by Stripe and messaging delivery may be provided by Twilio or another communications provider." },
      { title: "Business responsibilities", body: "Businesses must provide accurate information, obtain the customer’s affirmative request before sending a transactional SMS, record that request using the required unchecked acknowledgment in Commit, use only customer-supplied phone numbers, avoid purchased or shared contact lists, honor opt-outs, use Vordali only for lawful transactions, protect account credentials, fulfill purchased goods or services, and comply with payment, messaging, consumer-protection, and privacy laws." },
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
    title: "SMS Terms & Conditions", eyebrow: "Messaging", summary: "Terms governing transactional text messages sent through Vordali Commit.", effective: "July 22, 2026",
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
  cookies: { title: "Cookie Policy", eyebrow: "Cookies", summary: "How Vordali uses cookies and similar technologies.", effective: "July 22, 2026", sections: [
    { title: "What cookies are", body: "Cookies are small files stored by a browser. Similar technologies may include local storage, pixels, and device identifiers." },
    { title: "How we use them", body: "Vordali uses strictly necessary browser storage to preserve preferences and support core site functions. Optional Vercel Analytics and Speed Insights tools load only after you choose Accept." },
    { title: "Your choices", body: "You may accept or reject optional analytics from the cookie banner. Rejecting optional analytics does not prevent use of the public website. You can also clear the vordali-cookie-consent local-storage entry in your browser to choose again." },
    { title: "Contact", body: "Questions may be sent to support@vordali.com." }
  ]},
  "acceptable-use": { title: "Acceptable Use Policy", eyebrow: "Acceptable use", summary: "Activities that are prohibited when using Vordali.", effective: "July 22, 2026", sections: [
    { title: "Purpose", body: "This policy protects customers, businesses, carriers, payment networks, and Vordali from abuse." },
    { title: "Prohibited messaging", body: "Users may not send unsolicited messages, purchased-list messages, deceptive content, unlawful marketing, phishing, harassment, or messages sent without required consent." },
    { title: "Prohibited transactions", body: "Users may not request payment for illegal goods or services, fraudulent transactions, deceptive offers, or activity prohibited by Stripe or applicable law." },
    { title: "Platform abuse", body: "Users may not attempt unauthorized access, interfere with service operation, introduce malicious code, scrape protected data, evade rate limits, or test vulnerabilities without written permission." },
    { title: "Enforcement", body: "Vordali may investigate suspected violations and may suspend, restrict, or terminate access." },
    { title: "Reporting", body: "Report suspected abuse to abuse@vordali.com or support@vordali.com." }
  ]},
  security: { title: "Security", eyebrow: "Security", summary: "How Vordali approaches payment, account, and data security.", effective: "July 22, 2026", sections: [
    { title: "Security by design", body: "Vordali is designed to reduce the amount of sensitive information handled directly by the platform and to rely on established providers for specialized services." },
    { title: "Payment security", body: "Payments are processed through Stripe. Vordali does not store full payment-card numbers or bank credentials." },
    { title: "Encryption", body: "Vordali uses HTTPS/TLS for data transmitted between browsers, APIs, and service providers." },
    { title: "Access controls", body: "Merchant access requires authentication. Administrative access is limited and should follow least-privilege practices." },
    { title: "Monitoring and logging", body: "Vordali records operational and security events needed to investigate issues, prevent abuse, and support reliable service." },
    { title: "Responsible disclosure", body: "To report a potential vulnerability, email security@vordali.com." }
  ]}
};
