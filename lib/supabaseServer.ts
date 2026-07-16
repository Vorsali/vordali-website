export async function insertRow(table: string, payload: Record<string, unknown>) {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Submission storage is not configured.");

  const response = await fetch(`${url}/rest/v1/${table}`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal"
    },
    body: JSON.stringify(payload),
    cache: "no-store"
  });

  if (!response.ok) throw new Error(`Storage request failed: ${await response.text()}`);
}
