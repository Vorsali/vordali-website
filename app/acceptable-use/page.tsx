import { PolicyPage } from "@/components/PolicyPage";
import { policies } from "@/lib/policies";
export const metadata = { title: policies["acceptable-use"].title };
export default function Page() { return <PolicyPage policy={policies["acceptable-use"]} />; }
