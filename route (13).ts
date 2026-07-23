import { PolicyPage } from "@/components/PolicyPage";
import { policies } from "@/lib/policies";
export const metadata = { title: policies["privacy"].title };
export default function Page() { return <PolicyPage policy={policies["privacy"]} />; }
