import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

// Small utility panel — matches the SEC.00X / monospace language used across the site
function DataPanel({ title, rows, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay }}
      className="border px-5 py-4 backdrop-blur-[2px]"
      style={{ borderColor: "var(--border-light)", background: "rgba(5,5,5,0.35)" }}
    >
      <p className="font-mono text-[9px] uppercase tracking-[0.3em] mb-3" style={{ color: "var(--text-soft)" }}>
        {title}
      </p>
      <div className="space-y-1">
        {rows.map((row) => (
          <p key={row} className="font-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: "var(--text-muted)" }}>
            {row}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

// Tiny animated sparkline — reads as a live readout, not decoration
function Pulse() {
  const reduceMotion = useReducedMotion();
  return (
    <svg viewBox="0 0 100 24" className="w-full h-6 mt-2">
      <motion.polyline
        points="0,18 12,10 22,16 34,4 46,14 58,8 70,17 82,6 100,12"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.8 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 2, delay: 1, ease: "easeOut" }}
      />
    </svg>
  );
}

// Coordinate readout — ticks slowly, bottom-left, echoes Loader's coordinate language
function CoordinateReadout() {
  const [coords, setCoords] = useState({ x: 984.21, y: 720.45, z: 652.11 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      setCoords((c) => ({
        x: +(c.x + (Math.random() - 0.5) * 0.8).toFixed(2),
        y: +(c.y + (Math.random() - 0.5) * 0.8).toFixed(2),
        z: +(c.z + (Math.random() - 0.5) * 0.8).toFixed(2),
      }));
    }, 1800);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <div className="font-mono text-[10px] tracking-[0.2em]" style={{ color: "var(--text-muted)" }}>
      <p>X: {coords.x}</p>
      <p>Y: {coords.y}</p>
      <p>Z: {coords.z}</p>
    </div>
  );
}

export default function HeroHUD() {
  return (
    <div className="absolute inset-0 z-[15] pointer-events-none overflow-hidden">

      {/* Top-left project readout */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="absolute top-12 left-8 md:left-12 flex items-center gap-10 font-mono text-[9px] uppercase tracking-[0.3em]"
        style={{ color: "var(--text-muted)" }}
      >
        <span>Project — Portfolio System</span>
        <span>2026</span>
      </motion.div>

      {/* Right-side data panels — stacked, sit over the blueprint workspace */}
      <div className="hidden lg:flex flex-col gap-6 absolute top-28 right-12 w-64">
        <DataPanel title="Structural Overview" rows={["Grid System", "X:212 / Y:88", "Z:150"]} delay={0.4} />
        <DataPanel title="Material Analysis" rows={["Composition", "Density", "Conductivity"]} delay={0.55} />
        <div>
          <DataPanel title="Energy Core" rows={["Pulse Rate", "86.4%"]} delay={0.7} />
          <div className="border-x border-b px-5 py-3" style={{ borderColor: "var(--border-light)" }}>
            <Pulse />
          </div>
        </div>
      </div>

      {/* Bottom-left coordinate ticker */}
      <div className="absolute bottom-28 left-8 md:left-12">
        <CoordinateReadout />
      </div>

    </div>
  );
}