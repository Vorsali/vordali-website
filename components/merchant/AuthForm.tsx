"use client";
import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function RegisterForm() {
  const router = useRouter(); const params = useSearchParams();
  const [error, setError] = useState(""); const [busy, setBusy] = useState(false);
  const plan = ["starter", "pro"].includes(params.get("plan") || "") ? params.get("plan") : "starter";
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setError("");
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/auth/register", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(form)) });
    const result = await response.json(); setBusy(false);
    if (!response.ok) return setError(result.error || "Unable to register.");
    router.push(result.next);
  }
  return <form className="merchant-form" onSubmit={submit}>
    <input type="hidden" name="plan" value={plan || "starter"}/>
    <div className="selected-plan"><span>Selected plan</span><strong>{plan === "pro" ? "Pro — $69.99/mo" : "Starter — $39.99/mo"}</strong><a href="/choose-plan">Change</a></div>
    <label>Business name<input name="businessName" required minLength={2}/></label>
    <label>Your name<input name="ownerName" required minLength={2}/></label>
    <label>Email<input name="email" type="email" required autoComplete="email"/></label>
    <label>Business phone<input name="phone" type="tel" autoComplete="tel"/></label>
    <label>Password<input name="password" type="password" required minLength={8} autoComplete="new-password"/></label>
    {error && <p className="form-error">{error}</p>}
    <button className="button button-primary" disabled={busy}>{busy ? "Creating account…" : "Create account"}</button>
    <p className="form-footnote">Already registered? <a href="/login">Sign in</a></p>
  </form>;
}

export function LoginForm() {
  const router = useRouter(); const [error,setError]=useState(""); const [busy,setBusy]=useState(false);
  async function submit(event:FormEvent<HTMLFormElement>){event.preventDefault();setBusy(true);setError("");const form=new FormData(event.currentTarget);const response=await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object.fromEntries(form))});const result=await response.json();setBusy(false);if(!response.ok)return setError(result.error||"Unable to sign in.");router.push(result.next);router.refresh();}
  return <form className="merchant-form" onSubmit={submit}><label>Email<input name="email" type="email" required autoComplete="email"/></label><label>Password<input name="password" type="password" required autoComplete="current-password"/></label>{error&&<p className="form-error">{error}</p>}<button className="button button-primary" disabled={busy}>{busy?"Signing in…":"Sign in"}</button><div className="form-links"><a href="/forgot-password">Forgot password?</a><a href="/register">Create account</a></div></form>;
}
