import { motion } from "framer-motion";

const labels = [
  { text: "React", top: "34%", left: "40%" },
  { text: "GSAP", top: "40%", left: "38%" },
  { text: "JS", top: "48%", left: "38%" },
  { text: "13", top: "56%", left: "38%" },
  { text: "GPU", top: "37%", right: "27%" },
  { text: "Express", top: "43%", right: "24%" },
  { text: "HTML", top: "61%", right: "27%" },
  { text: "Linux", top: "70%", right: "28%" },
  { text: "AI", top: "78%", right: "36%" },
];

export default function HeroLabels() {
  return (
    <div className="absolute inset-0 z-[14] pointer-events-none overflow-hidden hidden lg:block">

      {labels.map((l, i) => (
        <motion.span
          key={l.text}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 + i * 0.05 }}
          className="absolute font-mono text-[11px] tracking-[0.1em]"
          style={{ top: l.top, left: l.left, right: l.right, color: "var(--text-soft)" }}
        >
          {l.text}
        </motion.span>
      ))}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute font-mono text-[11px] leading-tight text-right"
        style={{ top: "22%", right: "31%", color: "var(--text-soft)" }}
      >
        <div>01</div>
        <div>Node</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-12 right-8 md:right-12 flex items-center gap-4"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.3em]" style={{ color: "var(--text-muted)" }}>
          Scroll
        </span>
        <div className="flex items-center gap-[3px]">
          {[10, 14, 8, 16, 6].map((h, i) => (
            <span key={i} className="w-px" style={{ height: h, background: "var(--border-light)" }} />
          ))}
        </div>
      </motion.div>

    </div>
  );
}