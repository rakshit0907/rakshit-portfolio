import { motion } from "framer-motion";

export default function FeaturedWork() {
  return (
    <section
      className="
      min-h-screen
      flex
      items-center
      justify-center
      px-8
      "
    >
      <div className="max-w-6xl w-full">
        <motion.p
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
          text-zinc-500
          uppercase
          tracking-[0.3em]
          mb-8
          "
        >
          Selected Work
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          overflow-hidden
          "
        >
          <div
            className="
            aspect-video
            bg-gradient-to-br
            from-violet-600/30
            to-cyan-500/20
            "
          />

          <div className="p-10">
            <h2 className="text-5xl font-bold">
              Premium Portfolio Experience
            </h2>

            <p
              className="
              mt-4
              text-zinc-400
              max-w-2xl
              "
            >
              Placeholder featured project.
              This will later become
              a real case study preview.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}