"use client";

import { useState } from "react";
import { SignatureRecoveryTank } from "@/components/SignatureRecoveryTank";
import { RestaurantRecoveryVessel } from "@/components/RestaurantRecoveryVessel";

type Collection = "classic" | "restaurant" | "hvac" | "plumbing" | "retail";

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const COLLECTIONS: Array<{ key: Collection; label: string; available: boolean }> = [
  { key: "classic", label: "Classic", available: true },
  { key: "restaurant", label: "Restaurants", available: true },
  { key: "hvac", label: "HVAC", available: false },
  { key: "plumbing", label: "Plumbing", available: false },
  { key: "retail", label: "Retail", available: false },
];


export function RecoveryCollectionsShowcase() {
  const [collection, setCollection] = useState<Collection>("restaurant");
  const recovered = 1247;
  const goal = 2000;
  const progress = Math.round((recovered / goal) * 100);

  return (
    <section className="section recovery-collections-section" id="recovery-collections">
      <div className="section-heading centered-heading">
        <p className="kicker">Recovery Collections™</p>
        <h2>Your recovery display can look like your business.</h2>
        <p>Start with the classic Recovery Tank, or choose an industry-specific Pro display designed around the way your team works.</p>
      </div>

      <div className="collection-selector" aria-label="Recovery Collection selector">
        {COLLECTIONS.map((item) => (
          <button
            type="button"
            key={item.key}
            className={collection === item.key ? "active" : ""}
            onClick={() => item.available && setCollection(item.key)}
            aria-disabled={!item.available}
            title={item.available ? `View ${item.label}` : `${item.label} collection coming soon`}
          >
            {item.label}
            {!item.available ? <span>Coming soon</span> : null}
          </button>
        ))}
      </div>

      <div className="collection-showcase-panel">
        <div className="collection-copy">
          <span className="collection-badge">{collection === "restaurant" ? "PRO · RESTAURANT COLLECTION" : "STARTER · CLASSIC COLLECTION"}</span>
          <h3>{collection === "restaurant" ? "Kitchen Series Recovery Vessel" : "Classic Recovery Tank"}</h3>
          <p>{collection === "restaurant"
            ? "The same liquid-recovery engine, re-engineered as a detailed commercial kitchen holding vessel with stainless hardware, a temperature gauge, control panel, drain valve, and live break-even marker."
            : "The same signature Vordali Recovery Tank shown in the homepage hero, with identical glass, lighting, motion, and break-even behavior."}</p>
          <ul>
            <li>Live recovered-revenue progress</li>
            <li>Visible break-even marker</li>
            <li>Responsive animations on desktop and mobile</li>
          </ul>
          <small>Starter includes the classic display in Vordali Blue, Recovery Green, and Electric Pink. Business-specific collections are available with Pro.</small>
        </div>

        <div className="collection-preview-stage">
          {collection === "restaurant" ? (
            <RestaurantRecoveryVessel recovered={recovered} annualCost={800} progress={progress} />
          ) : (
            <SignatureRecoveryTank
              protectedRevenue={recovered}
              annualCost={800}
              recoveryRate={progress}
              theme="vordali"
              particle="$"
              proof="Revenue recovered"
              className="collection-signature-tank"
              valueLabel="Recovered This Month"
              valueBadge={`${progress}% to goal`}
            />
          )}
        </div>

        <div className="collection-stats">
          <article><span>Recovered</span><strong>{money.format(recovered)}</strong></article>
          <article><span>Orders saved</span><strong>48</strong></article>
          <article><span>Break-even progress</span><strong>{progress}%</strong></article>
        </div>
      </div>
    </section>
  );
}
