import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.section
      className="min-h-screen flex items-center py-24"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto w-full px-8">

        {/* Image */}

        <div className="relative h-[420px] lg:h-[460px] rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A0A]">

          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-[#101820] via-[#0A0A0A] to-[#050505]" />

              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
                  `,
                  backgroundSize: "50px 50px",
                }}
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center">

                <span className="text-xs tracking-[0.45em] uppercase text-[#6F93BF]">
                  Project Preview
                </span>

                <div className="w-24 h-px bg-[#6F93BF]/40 my-6" />

                <h3 className="text-4xl font-bold text-white/20 tracking-tight">
                  {project.title}
                </h3>

              </div>
            </>
          )}

        </div>

        {/* Content */}

        <div className="mt-12">

          {/* Huge Number */}

          <h1 className="text-[60px] lg:text-[80px] leading-none font-black text-white/5">
            {project.id}
          </h1>

          {/* Subtitle */}

          <p className="uppercase tracking-[0.28em] text-[#6F93BF] text-sm mt-4">
            {project.subtitle}
          </p>

          {/* Title */}

          <h2 className="text-4xl lg:text-5xl font-black tracking-tight mt-4">
            {project.title}
          </h2>

          {/* Description */}

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/65">
            {project.description}
          </p>

          {/* Tech */}

          <div className="flex flex-wrap gap-3 mt-12">

            {project.tech.map((item) => (
              <span
                key={item}
                className="
                  border
                  border-white/10
                  px-4
                  py-2
                  text-xs
                  uppercase
                  tracking-[0.18em]
                  text-white/70
                "
              >
                {item}
              </span>
            ))}

          </div>

          {/* Buttons */}

          <div className="flex gap-12 mt-10">

            <button className="group text-white text-sm uppercase tracking-[0.2em]">

              GitHub

              <span className="ml-2 transition-transform duration-300 inline-block group-hover:translate-x-2">
                →
              </span>

            </button>

            <button className="group text-[#6F93BF] text-sm uppercase tracking-[0.2em]">

              Live Demo

              <span className="ml-2 transition-transform duration-300 inline-block group-hover:translate-x-2">
                →
              </span>

            </button>

          </div>

        </div>

      </div>
    </motion.section>
  );
}