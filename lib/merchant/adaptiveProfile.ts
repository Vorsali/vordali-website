export const BUSINESS_TYPES = [
  { value: "restaurant", label: "Restaurant / prepared food" },
  { value: "bakery_catering", label: "Bakery or catering" },
  { value: "automotive", label: "Automotive service" },
  { value: "home_services", label: "Home services / contractor" },
  { value: "professional_services", label: "Professional services" },
  { value: "appointments", label: "Appointment-based business" },
  { value: "retail", label: "Retail" },
  { value: "other", label: "Other" }
] as const;

export const RISK_MODELS = [
  { value: "prepared_order_loss", label: "Prepared orders abandoned or unpaid" },
  { value: "phone_order_abandonment", label: "Phone orders not completed" },
  { value: "unpaid_invoice", label: "Invoices paid late or not paid" },
  { value: "deposit_required", label: "Work started without a deposit" },
  { value: "appointment_no_show", label: "Appointment no-shows" },
  { value: "custom", label: "Another revenue-risk pattern" }
] as const;

export type RevenueRiskModel = (typeof RISK_MODELS)[number]["value"];

export function dashboardLanguage(model: string | null | undefined) {
  switch (model) {
    case "prepared_order_loss":
      return {
        eventLabel: "Unpaid prepared orders",
        valueLabel: "Average order value",
        protectedLabel: "Prepared-order revenue protected",
        activityLabel: "Orders secured",
        intro: "Track money protected before food or custom orders are prepared."
      };
    case "phone_order_abandonment":
      return {
        eventLabel: "Unpaid phone orders",
        valueLabel: "Average phone order",
        protectedLabel: "Phone-order revenue protected",
        activityLabel: "Phone orders secured",
        intro: "Measure how often phone orders become verified payments."
      };
    case "unpaid_invoice":
      return {
        eventLabel: "Unpaid invoices",
        valueLabel: "Average invoice value",
        protectedLabel: "Invoice revenue recovered",
        activityLabel: "Invoices secured",
        intro: "Track deposits and invoice payments collected before exposure grows."
      };
    case "deposit_required":
      return {
        eventLabel: "Jobs started without deposits",
        valueLabel: "Average deposit",
        protectedLabel: "Deposit revenue secured",
        activityLabel: "Jobs secured",
        intro: "Measure work protected by collecting a commitment before scheduling or starting."
      };
    case "appointment_no_show":
      return {
        eventLabel: "No-show appointments",
        valueLabel: "Average appointment value",
        protectedLabel: "No-show revenue protected",
        activityLabel: "Appointments secured",
        intro: "Track appointment value protected by advance payment or deposits."
      };
    default:
      return {
        eventLabel: "Non-payment events",
        valueLabel: "Average value at risk",
        protectedLabel: "Revenue protected",
        activityLabel: "Payments secured",
        intro: "Measure revenue exposure and the value protected by Vordali Commit."
      };
  }
}
