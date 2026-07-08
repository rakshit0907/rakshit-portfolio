import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const start = performance.now();
    const duration = reduceMotion ? 400 : 2200;

    let frame;
    const tick = (now) => {
      const pct = Math.min(100, ((now - start) / duration) * 100);
      setProgress(pct);
      if (pct < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), reduceMotion ? 0 : 400);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reduceMotion]);

  useEffect(() => {
    if (done) {
      const t = setTimeout(() => onFinish?.(), reduceMotion ? 0 : 700);
      return () => clearTimeout(t);
    }
  }, [done, onFinish, reduceMotion]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: "var(--bg)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.7, ease: "easeInOut" }}
        >
          {/* Corner coordinate readouts */}
          <div className="absolute top-8 left-8 font-mono text-[10px] tracking-[0.3em]" style={{ color: "var(--text-muted)" }}>
            X:{(progress * 3.6).toFixed(1)} Y:{(progress * 1.8).toFixed(1)}
          </div>
          <div className="absolute top-8 right-8 font-mono text-[10px] tracking-[0.3em]" style={{ color: "var(--text-muted)" }}>
            SEC.001 / LOADER
          </div>
          <div className="absolute bottom-8 left-8 font-mono text-[10px] tracking-[0.3em]" style={{ color: "var(--text-muted)" }}>
            SCALE 1:100
          </div>

          {/* Corner brackets */}
          {[
            "top-8 left-8 border-t border-l",
            "top-8 right-8 border-t border-r",
            "bottom-8 left-8 border-b border-l",
            "bottom-8 right-8 border-b border-r",
          ].map((pos, i) => (
            <div key={i} className={`absolute w-6 h-6 ${pos}`} style={{ borderColor: "var(--border-light)" }} />
          ))}

          {/* Center content */}
          <div className="relative flex flex-col items-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-[11px] uppercase tracking-[0.5em] mb-8"
              style={{ color: "var(--text-muted)" }}
            >
              Drafting Interface
            </motion.span>

            {/* Progress number */}
            <div className="font-mono text-7xl md:text-8xl font-light tracking-[-0.02em]" style={{ color: "var(--text)" }}>
              {String(Math.floor(progress)).padStart(3, "0")}
              <span className="text-2xl align-top ml-1" style={{ color: "var(--text-muted)" }}>%</span>
            </div>

            {/* Progress line */}
            <div className="relative w-72 md:w-96 h-px mt-10" style={{ background: "var(--border)" }}>
              <motion.div
                className="absolute top-0 left-0 h-px"
                style={{ background: "var(--accent)", width: `${progress}%` }}
              />
              {/* tick marks */}
              <div className="absolute inset-0 flex justify-between">
                {Array.from({ length: 11 }).map((_, i) => (
                  <div key={i} className="w-px h-2 -mt-[3.5px]" style={{ background: "var(--border-light)" }} />
                ))}
              </div>
            </div>

            <span className="mt-6 font-mono text-[10px] uppercase tracking-[0.4em]" style={{ color: "var(--text-muted)" }}>
              Assembling Structure
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}