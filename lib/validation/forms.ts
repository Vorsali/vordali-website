const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function text(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export function optionalText(value: unknown, max: number): string | null {
  const result = text(value, max);
  return result || null;
}

export function email(value: unknown): string {
  const result = text(value, 320).toLowerCase();
  if (!EMAIL_PATTERN.test(result)) throw new Error("Please enter a valid email address.");
  return result;
}

export function optionalNonNegativeNumber(value: unknown, max: number): number | null {
  if (value === "" || value === null || value === undefined) return null;
  const number = Number(value);
  if (!Number.isFinite(number) || number < 0 || number > max) throw new Error("Please enter a valid non-negative number.");
  return number;
}

export function ensureHuman(body: Record<string, unknown>) {
  if (text(body.website, 200)) throw new Error("Submission rejected.");
}
