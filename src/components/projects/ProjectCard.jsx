
import { motion } from "framer-motion";

export default function ProjectCard({ project, onOpen }) {
  const handleKeyDown = (e) => {
    // Don't open the modal when interacting with a link or button.
    if (e.target.closest("a, button")) return;

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen?.(project);
    }
  };

  return (
    <motion.section
      className="min-h-screen flex items-center py-24 cursor-pointer"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      onClick={() => {
  console.log("Project clicked:", project.title);
  onOpen(project);
}}
style={{ cursor: "pointer" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
      data-testid={`project-card-${project.id}`}
    >
      <div className="max-w-7xl mx-auto w-full px-8">
        <div className="relative h-[420px] lg:h-[460px] rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A0A] transition-colors duration-300 hover:border-white/30">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/40">
              Project preview coming soon
            </div>
          )}
        </div>

        <div className="mt-12">
          <h2 className="text-sm tracking-[0.4em] text-white/40">
            {project.id}
          </h2>

          <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/50">
            {project.subtitle}
          </p>

          <h3 className="mt-4 text-4xl lg:text-6xl font-semibold">
            {project.title}
          </h3>

          <p className="mt-6 max-w-3xl text-white/60 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {project.tech.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full border border-white/10 text-sm text-white/70"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-8 mt-10">
            <span className="text-sm uppercase tracking-widest text-white/80">
              Explore project details ↗
            </span>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-sm text-white/60 hover:text-white"
              >
                GitHub ↗
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-sm text-white/60 hover:text-white"
              >
                Live Demo ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
