# Phase 8.1 — Recovery Tank Visual & Performance Refinement

- Removed the heavy black inner ring above the tank.
- Rebuilt the tank lip as open illuminated glass.
- Rebuilt the pedestal with a compact brushed-metal base and engraved plaque.
- Reduced overall hero and tank height so the primary experience fits common laptop screens.
- Added a compact desktop layout for screens 850px tall or shorter.
- Removed pointer-driven React re-rendering from the tank tilt effect.
- Reduced ambient stars, business particles, and bubbles while retaining visual motion.
- Removed expensive backdrop blur from the control panel.
- Reduced animation intensity and compositor pressure.
- Preserved business-specific particles, theme previewing, liquid motion, bubbles, reflections, and background atmosphere.

No new SQL migration is required beyond `013_recovery_tank_foundation.sql` from Phase 8.
