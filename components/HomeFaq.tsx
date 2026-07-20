const FAQS = [
  ["How do customers pay?", "Commit sends a secure payment link by text message. The customer opens the link, reviews the amount, and completes payment from their phone."],
  ["Do customers need to download an app?", "No. Customers pay through a secure mobile web page, so there is nothing to install and no customer account to create."],
  ["What types of businesses can use Commit?", "Commit is designed for businesses that collect remote payments for products, services, deposits, invoices, estimates, appointments, orders, or customer balances."],
  ["Is payment information secure?", "Card details are entered through Stripe's hosted payment flow. Vordali does not ask employees to collect or store a customer's card number."],
  ["Can I resend a payment request?", "Yes. Pending requests can be resent when a customer needs another copy of the secure link."],
  ["Can I cancel a request?", "Yes. A pending request can be canceled so the original payment link is no longer treated as an active request."],
  ["What happens if a customer does not pay?", "The request remains visible as pending until it is paid, canceled, or expires, giving your team a clear record of what still needs attention."],
  ["How long do payment links remain active?", "Expiration settings can be applied to payment requests so customers know when action is required and old requests do not remain open indefinitely."],
  ["Can multiple employees use Commit?", "Commit is being designed for practical team workflows so authorized employees can create requests and see payment status without sharing customer card details."],
  ["Does Commit work on iPhone and Android?", "Yes. Customers only need a modern mobile browser and text messaging. The business dashboard is also designed for desktop and mobile use."],
  ["Can I change plans later?", "Yes. Businesses can begin with Starter and move to Pro as their volume or operational needs grow."],
  ["Is there a long-term contract?", "Commit is offered as a monthly subscription. The pricing experience is designed to stay simple, with no long-term contract required."],
];

export function HomeFaq() {
  return (
    <div className="faq-list">
      {FAQS.map(([question, answer], index) => (
        <details key={question} open={index === 0}>
          <summary>{question}<span>+</span></summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  );
}
