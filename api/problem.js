
function json(res, status, body) {
  res.status(status).setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(body));
}

async function insert(table, payload) {
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
    body: JSON.stringify(payload)
  });
  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Storage request failed: ${detail}`);
  }
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") return json(res, 405, { error: "Method not allowed." });
  try {
    const b = req.body || {};
    if (!b.name || !b.email || !b.problem) {
      return json(res, 400, { error: "Name, email, and problem are required." });
    }
    await insert("problem_submissions", {
      name: String(b.name).slice(0, 150),
      email: String(b.email).slice(0, 320).toLowerCase(),
      business_name: b.business_name ? String(b.business_name).slice(0, 200) : null,
      business_type: b.business_type ? String(b.business_type).slice(0, 150) : null,
      problem: String(b.problem).slice(0, 8000),
      current_workaround: b.current_workaround ? String(b.current_workaround).slice(0, 5000) : null,
      hours_lost_weekly: b.hours_lost_weekly ? Number(b.hours_lost_weekly) : null,
      monthly_cost_cents: b.monthly_cost ? Math.round(Number(b.monthly_cost) * 100) : null,
      source: "vordali.com"
    });
    return json(res, 200, { message: "Problem submitted. Repeated pain points become Vordali research." });
  } catch (error) {
    return json(res, 500, { error: error.message || "Submission failed." });
  }
};
