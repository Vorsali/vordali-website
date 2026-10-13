import { mitzrTerms, mitzrTermsText } from "@/lib/mitzr-terms";

export const dynamic = "force-static";

export function GET() {
  return new Response(mitzrTermsText(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": `attachment; filename="MITZR-Terms-of-Use-${mitzrTerms.version}.txt"`
    }
  });
}
