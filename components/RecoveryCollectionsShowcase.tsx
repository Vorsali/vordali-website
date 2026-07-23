"use client";

import { useMemo, useState } from "react";

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
  const progress = (recovered / goal) * 100;
  const foodCount = useMemo(() => Math.ceil(progress / 7), [progress]);

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
            ? "Recovered revenue stocks the case shelf by shelf, turning an abstract metric into something restaurant teams recognize instantly."
            : "The signature Vordali display fills with recovered revenue and marks the moment Commit pays for itself."}</p>
          <ul>
            <li>Live recovered-revenue progress</li>
            <li>Visible break-even marker</li>
            <li>Responsive animations on desktop and mobile</li>
          </ul>
          <small>Starter includes the classic display in Vordali Blue, Recovery Green, and Electric Pink. Business-specific collections are available with Pro.</small>
        </div>

        <div className="collection-preview-stage">
          {collection === "restaurant" ? (
            <div className="home-warming-case" role="img" aria-label="Restaurant warming display case filled to 62 percent">
              <div className="home-warming-sign"><span>RESTAURANT COLLECTION</span><b>Warming Display Case</b></div>
              <div className="home-warming-glass">
                <i className="home-heat h1" /><i className="home-heat h2" /><i className="home-heat h3" />
                {[0, 1, 2].map((shelf) => (
                  <div className="home-warming-shelf" key={shelf}>
                    {Array.from({ length: 5 }, (_, index) => {
                      const item = shelf * 5 + index;
                      return <span key={index} className={item < foodCount ? "filled" : ""}><i /></span>;
                    })}
                  </div>
                ))}
                <div className="home-case-break-even"><span>Break-even</span></div>
                <div className="home-case-value"><strong>{money.format(recovered)}</strong><span>recovered this month</span></div>
              </div>
              <div className="home-warming-base"><i /><div><b>Recovery Display™</b><small>Powered by Commit</small></div><i /></div>
            </div>
          ) : (
            <div className="home-classic-tank" role="img" aria-label="Classic Recovery Tank filled to 62 percent">
              <div className="home-tank-glass">
                <div className="home-tank-liquid" style={{ height: `${progress}%` }}><i /><i /><i /><i /></div>
                <div className="home-tank-break-even"><span>Break-even</span></div>
                <div className="home-case-value"><strong>{money.format(recovered)}</strong><span>recovered this month</span></div>
              </div>
              <div className="home-tank-base"><b>Recovery Tank™</b><small>Powered by Commit</small></div>
            </div>
          )}
        </div>

        <div className="collection-stats">
          <article><span>Recovered</span><strong>{money.format(recovered)}</strong></article>
          <article><span>Orders saved</span><strong>48</strong></article>
          <article><span>Break-even progress</span><strong>62%</strong></article>
        </div>
      </div>
    </section>
  );
}
