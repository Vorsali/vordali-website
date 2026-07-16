"use client";

import { FormEvent, useState } from "react";

export function ProblemForm() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    if (button) button.disabled = true;
    setMessage("Submitting...");
    setError(false);
    try {
      const payload = Object.fromEntries(new FormData(form).entries());
      const response = await fetch("/api/problem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Submission failed.");
      setMessage(result.message);
      form.reset();
    } catch (err) {
      setError(true);
      setMessage(err instanceof Error ? err.message : "Submission failed.");
    } finally {
      if (button) button.disabled = false;
    }
  }

  return (
    <form className="research-form" onSubmit={submit}>
      <label>Name<input name="name" required /></label>
      <label>Work email<input type="email" name="email" required /></label>
      <label>Business name<input name="business_name" /></label>
      <label>Business type<input name="business_type" placeholder="Restaurant, HVAC, retail..." /></label>
      <label className="full-field">Describe the problem<textarea name="problem" rows={5} required placeholder="What happens, who is affected, and why is it painful?"></textarea></label>
      <label>Hours wasted per week<input type="number" name="hours_lost_weekly" min="0" step=".5" /></label>
      <label>Estimated cost per month<input type="number" name="monthly_cost" min="0" step=".01" /></label>
      <label className="full-field">How do you handle it today?<textarea name="current_workaround" rows={3}></textarea></label>
      <button className="button button-primary full-field" type="submit">Submit Problem <span>→</span></button>
      <p className={`form-message full-field ${error ? "form-error" : "form-success"}`}>{message}</p>
    </form>
  );
}
