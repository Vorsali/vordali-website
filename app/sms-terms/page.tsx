import { PolicyPage } from "@/components/PolicyPage";
import { policies } from "@/lib/policies";
export const metadata = { title: policies["sms-terms"].title };
export default function Page() { return <PolicyPage policy={policies["sms-terms"]} />; }
