import { motion } from "framer-motion";

export default function HeroScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 1.8,
        duration: 1,
      }}
      className="
        absolute
        bottom-10
        left-1/2
        -translate-x-1/2
        z-20
      "
    >
      <div
        className="
          flex
          flex-col
          items-center
          gap-4
        "
      >
        <span
          className="
            uppercase
            text-[10px]
            tracking-[0.45em]
            font-medium
          "
          style={{
            color: "var(--text-muted)",
          }}
        >
          SCROLL
        </span>

        {/* Line */}

        <div
          className="
            relative
            w-px
            h-20
            overflow-hidden
          "
          style={{
            background: "rgba(255,255,255,.08)",
          }}
        >
          <motion.div
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              top-0
              left-0
              w-full
              h-8
            "
            style={{
              background: "var(--accent)",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}