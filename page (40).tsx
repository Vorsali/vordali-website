import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/supabaseAuth";

export const dynamic = "force-dynamic";

export async function GET() {
  const user = await getCurrentUser();
  return NextResponse.json(
    user
      ? { authenticated: true, user: { id: user.id, email: user.email || null } }
      : { authenticated: false, user: null },
    { headers: { "Cache-Control": "no-store, max-age=0" } }
  );
}
