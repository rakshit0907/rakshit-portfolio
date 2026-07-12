import { motion } from "framer-motion";
import { headingXL, bodyLG } from "../../theme";
import { useNavigate } from "react-router-dom";
export default function HeroContent() {
  const navigate = useNavigate();
  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      <div className="h-full max-w-none mx-auto px-8 md:px-12 lg:px-20 flex items-center">

        <div className="w-full px-6 md:w-[34vw] ml-24 md:px-0">

          {/* Label */}


          {/* Name */}

          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.45,
            }}
            className="
              font-black
              leading-[0.88]
              tracking-[-0.06em]
              text-zinc-100
            "
            style={{
              fontSize: headingXL,
            }}
          >
            RAKSHIT
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.58,
            }}
            className="
              font-black
              leading-[0.88]
              tracking-[-0.06em]
              text-zinc-300
            "
            style={{
              fontSize: headingXL,
            }}
          >
            PANDEY
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.9,
            }}
            className="
              mt-12
              max-w-xl
              leading-9
              text-zinc-400
            "
            style={{
              fontSize: bodyLG,
            }}
          >
            I build thoughtful digital products where engineering,
            motion and design work together to create memorable
            experiences that feel effortless.
          </motion.p>

          {/* Bottom Row */}

          <motion.div
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1,
    delay: 1.2,
  }}
  className="
    mt-14
    flex
    items-center
    gap-10
    pointer-events-auto
  "
>
  <button
    onClick={() => navigate("/projects")}
    className="group text-sm uppercase tracking-[0.35em] text-zinc-200 transition-all duration-500"
  >
    Explore Work
    <div className="mt-3 h-px w-0 bg-zinc-200 transition-all duration-500 group-hover:w-full" />
  </button>

  <button
    onClick={() => navigate("/contact")}
    className="text-sm uppercase tracking-[0.35em] text-zinc-500 hover:text-zinc-200 transition-colors duration-500"
  >
    Contact
  </button>
</motion.div>
        </div>
      </div>
    </div>
  );
}