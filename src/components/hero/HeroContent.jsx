import { motion } from "framer-motion";
import { headingXL } from "../../theme";

export default function HeroContent() {
  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      <div className="h-full max-w-7xl mx-auto px-8 md:px-12 lg:px-16 flex items-center">

        <div className="max-w-3xl">

          {/* Small Label */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="
              uppercase
              tracking-[0.45em]
              text-[11px]
              font-medium
              mb-8
            "
            style={{
              color: "var(--accent)",
            }}
          >
            SOFTWARE ENGINEER
          </motion.p>

          {/* Name */}

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.45,
            }}
            className="
              font-black
              uppercase
              leading-[0.82]
              tracking-[-0.08em]
            "
            style={{
              fontSize: headingXL,
              color: "var(--text)",
            }}
          >
            RAKSHIT
            <br />
            PANDEY
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.9,
              duration: 1,
            }}
            className="
              mt-10
              max-w-xl
              leading-8
            "
            style={{
              color: "var(--text-soft)",
              fontSize: bodyLG,
            }}
          >
            I design and engineer modern digital products that combine
            performance, thoughtful interaction, and scalable architecture
            to create experiences people enjoy using.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.2,
              duration: 0.8,
            }}
            className="flex gap-5 mt-12 pointer-events-auto"
          >
            <button
              className="
                px-7
                py-3
                rounded-full
                font-medium
                transition-all
                duration-300
                hover:scale-105
              "
              style={{
                background: "var(--text)",
                color: "var(--bg)",
              }}
            >
              Explore Projects
            </button>

            <button
              className="
                px-7
                py-3
                rounded-full
                transition-all
                duration-300
                hover:scale-105
              "
              style={{
                border: "1px solid var(--border)",
                color: "var(--text)",
                background: "transparent",
              }}
            >
              Get in Touch
            </button>
          </motion.div>

        </div>

      </div>
    </div>
  );
}