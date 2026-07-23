"use client";

import { useMemo, useState } from "react";
import { SignatureRecoveryTank } from "@/components/SignatureRecoveryTank";

type Collection = "classic" | "restaurant" | "hvac" | "plumbing" | "retail";

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const COLLECTIONS: Array<{ key: Collection; label: string; available: boolean }> = [
  { key: "classic", label: "Classic", available: true },
  { key: "restaurant", label: "Restaurants", available: true },
  { key: "hvac", label: "HVAC", available: false },
  { key: "plumbing", label: "Plumbing", available: false },
  { key: "retail", label: "Retail", available: false },
];

const FOOD_ITEMS = [
  "takeout-box", "meal-tray", "paper-bag", "pastry-box",
  "meal-tray", "takeout-box", "cup", "paper-bag",
  "pastry-box", "meal-tray", "takeout-box", "cup",
];

export function RecoveryCollectionsShowcase() {
  const [collection, setCollection] = useState<Collection>("restaurant");
  const recovered = 1247;
  const goal = 2000;
  const progress = Math.round((recovered / goal) * 100);
  const filledItems = useMemo(() => Math.ceil((progress / 100) * FOOD_ITEMS.length), [progress]);

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
          <h3>{collection === "restaurant" ? "Warming Display Case" : "Classic Recovery Tank"}</h3>
          <p>{collection === "restaurant"
            ? "Recovered revenue stocks the case shelf by shelf with familiar restaurant packaging—not one specific cuisine."
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
            <div className="restaurant-display-wrap" role="img" aria-label={`Restaurant warming display case stocked to ${progress} percent`}>
              <div className="restaurant-case-top">
                <span>RESTAURANT COLLECTION</span>
                <strong>Warming Display Case</strong>
              </div>
              <div className="restaurant-case-body">
                <div className="restaurant-led" />
                <div className="restaurant-glass-reflection" />
                <i className="restaurant-heat heat-one" /><i className="restaurant-heat heat-two" /><i className="restaurant-heat heat-three" />
                <div className="restaurant-shelves">
                  {[0, 1, 2].map((shelf) => (
                    <div className="restaurant-shelf" key={shelf}>
                      {FOOD_ITEMS.slice(shelf * 4, shelf * 4 + 4).map((kind, index) => {
                        const itemIndex = shelf * 4 + index;
                        return <span key={`${kind}-${index}`} className={`restaurant-item ${kind} ${itemIndex < filledItems ? "filled" : ""}`}><i /></span>;
                      })}
                    </div>
                  ))}
                </div>
                <div className="restaurant-break-even"><span>Break-even</span></div>
                <div className="restaurant-value"><small>Recovered this month</small><strong>{money.format(recovered)}</strong></div>
              </div>
              <div className="restaurant-case-base">
                <span className="case-status-light" />
                <div><b>Recovery Display™</b><small>Powered by Commit</small></div>
                <span className="case-status-light" />
              </div>
            </div>
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
