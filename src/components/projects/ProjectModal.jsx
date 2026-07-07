import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiX } from "react-icons/fi";
import { useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-xl overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="min-h-screen flex items-center justify-center p-6">
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 80, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 80, scale: 0.96 }}
              transition={{ duration: 0.45 }}
              className="w-full max-w-5xl rounded-[36px] border border-white/10 bg-zinc-950 overflow-hidden"
            >
              <div className="aspect-video bg-gradient-to-br from-[#5E81AC]/30 to-[#6F93BF]/20 flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-zinc-500 text-lg">Project Preview Coming Soon</span>
                )}
              </div>

              <div className="p-12">
                <div className="flex justify-between items-start">
                  <div>
                    <span
                      className={`inline-flex rounded-full px-4 py-2 text-xs font-semibold tracking-widest uppercase ${
                        project.status === "Completed"
                          ? "bg-zinc-200/10 text-zinc-200"
                          : "bg-[#6F93BF]/15 text-[#6F93BF]"
                      }`}
                    >
                      {project.status}
                    </span>

                    <h2 className="mt-6 text-5xl font-black tracking-tight">
                      {project.title}
                    </h2>

                    <p className="mt-2 text-[#5E81AC] uppercase tracking-[0.25em] text-sm">
                      {project.subtitle}
                    </p>

                    <p className="mt-6 text-zinc-400 leading-8 max-w-3xl">
                      {project.description}
                    </p>
                  </div>

                  <button
                    onClick={onClose}
                    aria-label="Close"
                    className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:border-[#5E81AC] transition shrink-0"
                  >
                    <FiX size={22} />
                  </button>
                </div>

                <div className="mt-10 flex gap-10 text-sm text-zinc-500 uppercase tracking-[0.25em]">
                  <span>{project.role}</span>
                  <span>{project.year}</span>
                </div>

                <div className="mt-16">
                  <h3 className="text-2xl font-bold mb-6">Challenge</h3>
                  <p className="text-zinc-400 leading-8">{project.challenge}</p>
                </div>

                <div className="mt-16">
                  <h3 className="text-2xl font-bold mb-6">Solution</h3>
                  <p className="text-zinc-400 leading-8">{project.solution}</p>
                </div>

                <div className="mt-16">
                  <h3 className="text-2xl font-bold mb-6">Technologies</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {(project.github || project.live) && (
                  <div className="flex flex-wrap gap-5 mt-20">
                    {project.github && (
                      <a
                      href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 rounded-full bg-white text-black font-semibold flex items-center gap-3 hover:bg-[#6F93BF] transition"
                      >
                        <FiGithub />
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 rounded-full border border-white/15 text-white flex items-center gap-3 hover:border-[#5E81AC] transition"
                      >
                        <FiArrowUpRight />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}