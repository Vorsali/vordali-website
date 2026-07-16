
(() => {
  const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

  function calcROI(prefix, daysId) {
    const orders = Number(document.getElementById(`${prefix}-orders`)?.value || 0);
    const ticket = Number(document.getElementById(`${prefix}-ticket`)?.value || 0);
    const rate = Number(document.getElementById(`${prefix}-rate`)?.value || 0) / 100;
    const days = daysId ? Number(document.getElementById(daysId)?.value || 365) : 365;
    return Math.max(0, orders * ticket * rate * days);
  }

  const homeInputs = ["home-orders", "home-ticket", "home-rate"];
  function updateHomeROI() {
    const output = document.getElementById("home-roi-value");
    if (output) output.textContent = money.format(calcROI("home"));
  }
  homeInputs.forEach(id => document.getElementById(id)?.addEventListener("input", updateHomeROI));
  updateHomeROI();

  const roiInputs = ["roi-orders", "roi-ticket", "roi-rate", "roi-days"];
  function updateROI() {
    const annual = calcROI("roi", "roi-days");
    const annualOut = document.getElementById("roi-annual");
    const ratioOut = document.getElementById("roi-ratio");
    if (annualOut) annualOut.textContent = money.format(annual);
    if (ratioOut) ratioOut.textContent = `${(annual / 479.88).toFixed(1)}×`;
  }
  roiInputs.forEach(id => document.getElementById(id)?.addEventListener("input", updateROI));
  updateROI();

  const modal = document.getElementById("waitlist-modal");
  const productInput = document.getElementById("waitlist-product");
  const productName = document.getElementById("waitlist-product-name");
  const productLabels = { approve: "Approve™", follow: "Follow™", verify: "Verify™" };

  function openModal(slug) {
    if (!modal) return;
    productInput.value = slug;
    productName.textContent = productLabels[slug] || "Vordali";
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = "";
  }
  document.querySelectorAll(".waitlist-open").forEach(btn =>
    btn.addEventListener("click", () => openModal(btn.dataset.product))
  );
  document.querySelectorAll("[data-close-modal]").forEach(el => el.addEventListener("click", closeModal));
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

  const queryProduct = new URLSearchParams(location.search).get("product");
  if (queryProduct && productLabels[queryProduct]) setTimeout(() => openModal(queryProduct), 250);

  async function submitJSON(form, endpoint, messageEl) {
    const button = form.querySelector('button[type="submit"]');
    const original = button.innerHTML;
    button.disabled = true;
    button.textContent = "Submitting...";
    messageEl.textContent = "";
    try {
      const data = Object.fromEntries(new FormData(form).entries());
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "Submission failed.");
      messageEl.textContent = result.message || "Thank you. Your submission has been recorded.";
      form.reset();
    } catch (error) {
      messageEl.textContent = error.message || "We could not submit this right now. Email hello@vordali.com.";
    } finally {
      button.disabled = false;
      button.innerHTML = original;
    }
  }

  const waitlistForm = document.getElementById("waitlist-form");
  const waitlistMessage = document.getElementById("waitlist-message");
  waitlistForm?.addEventListener("submit", e => {
    e.preventDefault();
    submitJSON(waitlistForm, "/api/waitlist", waitlistMessage);
  });

  const problemForm = document.getElementById("problem-form");
  const problemMessage = document.getElementById("problem-message");
  problemForm?.addEventListener("submit", e => {
    e.preventDefault();
    submitJSON(problemForm, "/api/problem", problemMessage);
  });
})();
