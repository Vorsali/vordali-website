import type { ReactNode } from "react";
import { CleanMitzrUrl } from "@/components/CleanMitzrUrl";

export default function MitzrLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <CleanMitzrUrl />
      {children}
    </>
  );
}
