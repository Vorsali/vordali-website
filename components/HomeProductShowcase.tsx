"use client";

import { useEffect, useState } from "react";

const slides = [
  { tab: "Dashboard", title: "Revenue protected at a glance", metric: "$684", label: "Protected today", rows: ["Payment Request #4827", "Payment Request #4826", "Payment Request #4825"] },
  { tab: "Payment Requests", title: "Track every request in real time", metric: "18", label: "Paid requests", rows: ["Paid · $126.00", "Pending · $84.50", "Paid · $312.00"] },
  { tab: "Analytics", title: "See what Commit is recovering", metric: "96%", label: "Collection rate", rows: ["Revenue trend", "Response time", "Recovered value"] },
  { tab: "SMS Templates", title: "Consistent messages, ready to send", metric: "4", label: "Active templates", rows: ["Payment request", "Payment reminder", "Payment received"] },
  { tab: "Business Settings", title: "Configure Commit around your workflow", metric: "Live", label: "Account status", rows: ["Branding", "Team access", "Stripe connection"] },
];

export function HomeProductShowcase() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % slides.length), 5200);
    return () => window.clearInterval(timer);
  }, []);
  const slide = slides[index];

  return (
    <div className="product-showcase" aria-live="polite">
      <div className="product-showcase-tabs">
        {slides.map((item, itemIndex) => (
          <button key={item.tab} type="button" className={itemIndex === index ? "active" : ""} onClick={() => setIndex(itemIndex)}>{item.tab}</button>
        ))}
      </div>
      <div className="showcase-screen" key={slide.tab}>
        <div className="showcase-sidebar"><div className="mini-logo">V</div><span className="active"></span><span></span><span></span><span></span></div>
        <div className="showcase-main">
          <div className="showcase-head"><div><small>Vordali Commit</small><strong>{slide.title}</strong></div><span className="showcase-live">Live</span></div>
          <div className="showcase-metric"><small>{slide.label}</small><strong>{slide.metric}</strong><span>Updated moments ago</span></div>
          <div className="showcase-list">{slide.rows.map((row, rowIndex) => <div key={row}><span>{row}</span><i style={{ width: `${78 - rowIndex * 13}%` }}></i></div>)}</div>
        </div>
      </div>
      <p className="showcase-caption">A guided look at the Commit workspace. Screens rotate automatically or can be selected above.</p>
    </div>
  );
}
