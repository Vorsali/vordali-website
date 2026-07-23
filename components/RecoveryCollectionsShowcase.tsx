"use client";

import { useState } from "react";
import { RestaurantRecoveryVessel } from "@/components/RestaurantRecoveryVessel";
import { HvacRecoveryVessel } from "@/components/HvacRecoveryVessel";
import { PlumbingRecoveryVessel } from "@/components/PlumbingRecoveryVessel";
import { RetailRecoveryVessel } from "@/components/RetailRecoveryVessel";

type Collection = "restaurant" | "hvac" | "plumbing" | "retail";

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const COLLECTIONS: Array<{
  key: Collection;
  label: string;
  detail: string;
  available: boolean;
}> = [
  { key: "restaurant", label: "Restaurants", detail: "Kitchen Series", available: true },
  { key: "hvac", label: "HVAC", detail: "Climate Series", available: true },
  { key: "plumbing", label: "Plumbing", detail: "Flow Series", available: true },
  { key: "retail", label: "Retail", detail: "Commerce Series", available: true },
];

export function RecoveryCollectionsShowcase() {
  const [collection, setCollection] = useState<Collection>("restaurant");
  const recovered = 1247;
  const goal = 2000;
  const progress = Math.round((recovered / goal) * 100);

  return (
    <section className="section recovery-collections-section" id="recovery-collections">
      <div className="section-heading centered-heading">
        <p className="kicker">Recovery Vessels™</p>
        <h2>One recovery engine. A vessel shaped for your business.</h2>
        <p>
          Explore the industry-specific Recovery Vessels available with Pro. Each design uses the same polished liquid,
          bubbles, reflections, and break-even system that powers Vordali&apos;s signature Recovery Tank.
        </p>
      </div>

      <div className="collection-selector" aria-label="Recovery Vessel selector">
        {COLLECTIONS.map((item) => (
          <button
            type="button"
            key={item.key}
            className={collection === item.key ? "active" : ""}
            onClick={() => item.available && setCollection(item.key)}
            aria-disabled={!item.available}
            title={item.available ? `View ${item.label}` : `${item.label} vessel coming soon`}
          >
            {item.label}
            <span>{item.available ? item.detail : `${item.detail} · Coming soon`}</span>
          </button>
        ))}
      </div>

      <div className="collection-showcase-panel">
        <div className="collection-copy">
          <span className="collection-badge">
            {collection === "hvac" ? "PRO · HVAC COLLECTION" : collection === "plumbing" ? "PRO · PLUMBING COLLECTION" : collection === "retail" ? "PRO · RETAIL COLLECTION" : "PRO · RESTAURANT COLLECTION"}
          </span>
          <h3>{collection === "hvac" ? "Climate Series Recovery Cylinder" : collection === "plumbing" ? "Flow Series Revenue Pressure Vessel" : collection === "retail" ? "Commerce Series Digital Revenue Engine" : "Kitchen Series Recovery Vessel"}</h3>
          <p>
            {collection === "hvac"
              ? "Vordali's recovery engine housed inside a field-service recovery cylinder with dual pressure gauges, copper manifold lines, service hoses, cooling fins, and a live break-even rail."
              : collection === "plumbing"
                ? "Vordali's recovery engine engineered as a commercial pressure vessel with brass valves, copper pipework, a live flow meter, pressure regulator, drain assembly, and visible break-even rail."
                : collection === "retail"
                  ? "Vordali's recovery engine transformed into a premium digital commerce instrument with a suspended recovery chamber, live transaction packets, OLED telemetry, and a laser-style break-even marker."
                  : "Vordali's recovery engine re-engineered as a detailed commercial kitchen holding vessel with stainless hardware, a temperature gauge, control panel, drain valve, and live break-even marker."}
          </p>
          <ul>
            <li>Live recovered-revenue progress</li>
            <li>Visible break-even marker</li>
            <li>{collection === "hvac" ? "Dual-pressure Climate Series instrumentation" : collection === "plumbing" ? "Live Flow Series pressure and water instrumentation" : collection === "retail" ? "Live Commerce Series transaction telemetry" : "Responsive liquid animations on desktop and mobile"}</li>
          </ul>
          <small>
            Industry-specific vessel collections are available with Pro. Additional business series will appear here as
            they are released.
          </small>
        </div>

        <div className="collection-preview-stage">
          {collection === "restaurant" ? (
            <RestaurantRecoveryVessel recovered={recovered} annualCost={800} progress={progress} />
          ) : null}
          {collection === "hvac" ? (
            <HvacRecoveryVessel recovered={recovered} annualCost={800} progress={progress} />
          ) : null}
          {collection === "plumbing" ? (
            <PlumbingRecoveryVessel recovered={recovered} annualCost={800} progress={progress} />
          ) : null}
          {collection === "retail" ? (
            <RetailRecoveryVessel recovered={recovered} annualCost={800} progress={progress} />
          ) : null}
        </div>

        <div className="collection-stats">
          <article>
            <span>Recovered</span>
            <strong>{money.format(recovered)}</strong>
          </article>
          <article>
            <span>{collection === "hvac" ? "Jobs recovered" : collection === "plumbing" ? "Service calls recovered" : collection === "retail" ? "Transactions recovered" : "Orders saved"}</span>
            <strong>48</strong>
          </article>
          <article>
            <span>Break-even progress</span>
            <strong>{progress}%</strong>
          </article>
        </div>
      </div>
    </section>
  );
}
