"use client";

import type { CSSProperties } from "react";
import { Gauge, Radio, ShieldCheck, Thermometer } from "lucide-react";

export default function IndustrialRecoveryVessel({
  recovered,
  progress,
  paidCount,
  pending,
}: {
  recovered: number;
  progress: number;
  paidCount: number;
  pending: number;
}) {
  const fill = Math.max(10, Math.min(92, progress || 10));
  const pressure = Math.max(18, Math.round(fill * 0.86));

  return (
    <div className="industrial-vessel-stage living-engine-stage" aria-label="Vordali industrial recovery vessel">
      <div className="machine-room-backdrop" aria-hidden="true">
        <span className="wall-panel panel-one" />
        <span className="wall-panel panel-two" />
        <span className="wall-panel panel-three" />
        <span className="overhead-light light-one" />
        <span className="overhead-light light-two" />
        <span className="cable-tray" />
      </div>

      <div className="recovery-feed-pipe powered-feed" aria-hidden="true">
        <span className="pipe-label">INPUT FROM COMMAND CENTER</span>
        <span className="feed-status"><i /> VERIFIED FLOW</span>
        <div className="pipe-packet packet-a">$</div>
        <div className="pipe-packet packet-b">$</div>
        <div className="pipe-packet packet-c">$</div>
      </div>

      <div className="industrial-vessel living-vessel">
        <div className="vessel-top-assembly">
          <div className="pressure-cap"><i /><i /><i /><i /></div>
          <div className="status-beacon"><span /></div>
          <div className="relief-stack"><i /><span /></div>
        </div>

        <div className="vessel-side-gauge gauge-left instrument-pod">
          <Gauge size={17} />
          <div className="mini-dial" style={{ "--needle": `${-52 + fill * 1.04}deg` } as CSSProperties}><i /></div>
          <span>PRESSURE</span>
          <strong>{pressure} PSI</strong>
          <small><i /> STABLE</small>
        </div>

        <div className="vessel-side-gauge gauge-right instrument-pod">
          <Thermometer size={17} />
          <div className="temperature-column"><i /></div>
          <span>FLOW TEMP</span>
          <strong>68° F</strong>
          <small><i /> NOMINAL</small>
        </div>

        <div className="vessel-shell">
          <div className="metal-grain" aria-hidden="true" />
          <div className="shell-highlight" aria-hidden="true" />
          <div className="shell-rib rib-one" />
          <div className="shell-rib rib-two" />
          <div className="shell-rib rib-three" />
          <div className="weld-seam seam-one" />
          <div className="weld-seam seam-two" />

          <div className="inspection-window premium-window">
            <div className="window-bolts">
              {Array.from({ length: 12 }).map((_, index) => <i key={index} />)}
            </div>
            <div className="glass-depth" aria-hidden="true" />
            <div className="glass-reflection reflection-one" aria-hidden="true" />
            <div className="glass-reflection reflection-two" aria-hidden="true" />
            <div className="recovery-fluid living-fluid" style={{ height: `${fill}%` }}>
              <div className="fluid-surface" />
              <div className="fluid-surface wave-secondary" />
              <div className="fluid-shimmer" />
              <div className="fluid-caustics" />
              <div className="arrival-ripple" />
              <span className="bubble bubble-1" />
              <span className="bubble bubble-2" />
              <span className="bubble bubble-3" />
              <span className="bubble bubble-4" />
              <span className="bubble bubble-5" />
              <span className="bubble bubble-6" />
              <span className="bubble bubble-7" />
            </div>
            <div className="break-even-line" style={{ bottom: "34%" }}><span>VISUAL TARGET</span></div>
            <div className="vessel-value">
              <span>RECOVERED REVENUE</span>
              <strong>${recovered.toLocaleString(undefined, { maximumFractionDigits: 0 })}</strong>
              <small>{paidCount} verified payments</small>
            </div>
          </div>

          <div className="vessel-nameplate">
            <strong>VORDALI</strong>
            <span>RECOVERY VESSEL</span>
            <small>MODEL RV-01 · REVENUE RECOVERY SYSTEM</small>
          </div>

          <div className="maintenance-hatch">
            <ShieldCheck size={18} />
            <span>SECURE ACCESS</span>
          </div>
          <div className="service-port"><i /><span>RV-01</span></div>
        </div>

        <div className="vessel-base-ring heavy-base-ring">
          <span /><span /><span /><span /><span /><span />
        </div>

        <div className="inlet-flange powered-flange">
          <i /><i /><i /><i />
          <div className="valve-wheel"><span /><span /><span /><span /></div>
          <div className="flange-status"><i /> FLOW LOCKED</div>
        </div>
      </div>

      <div className="maintenance-deck" aria-hidden="true">
        <div className="deck-grating" />
        <span className="anchor anchor-a" /><span className="anchor anchor-b" />
        <span className="anchor anchor-c" /><span className="anchor anchor-d" />
      </div>

      <div className="vessel-telemetry-rail">
        <article><Radio size={16} /><span>ENGINE</span><strong><i /> ONLINE</strong></article>
        <article><span>RECOVERY LEVEL</span><strong>{progress}%</strong></article>
        <article><span>ACTIVE REQUESTS</span><strong>{pending}</strong></article>
        <article><span>VERIFIED FLOW</span><strong>{paidCount} PKTS</strong></article>
      </div>
    </div>
  );
}
