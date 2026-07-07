import { motion } from "framer-motion";

export default function ProjectCard({ project, onOpen }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      onClick={() => onOpen?.(project)}
      className="group relative border-t border-zinc-800 pt-14 cursor-pointer"
    >
      <div className="grid lg:grid-cols-12 gap-12 items-center">

        {/* Left */}
        <div className="lg:col-span-5">
          <span className="text-zinc-600 text-lg font-semibold">
            {project.id}
          </span>

          <h3 className="mt-5 text-5xl lg:text-6xl font-black tracking-[-0.05em] leading-none transition-colors duration-500 group-hover:text-[#6F93BF]">
            {project.title}
          </h3>

          <p className="mt-4 text-[#5E81AC] uppercase tracking-[0.25em] text-sm">
            {project.subtitle}
          </p>

          <p className="mt-10 text-zinc-400 leading-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3 mt-10">
            {project.tech.map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full border border-zinc-700 text-sm text-zinc-300">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between mt-12">
            <span
              className={`text-sm uppercase tracking-[0.25em] ${
                project.status === "Completed" ? "text-zinc-200" : "text-[#6F93BF]"
              }`}
            >
              {project.status}
            </span>

            <button
              onClick={(e) => { e.stopPropagation(); onOpen?.(project); }}
              aria-label={`View ${project.title}`}
              className="text-white text-lg p-2 group-hover:translate-x-2 transition-transform duration-300"
            >
              →
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="lg:col-span-7">
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-zinc-600 text-2xl font-bold">
                Coming Soon
              </div>
            )}
          </div>
        </div>

      </div>
    </motion.article>
  );
}