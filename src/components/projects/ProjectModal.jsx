import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiX } from "react-icons/fi";
import { useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  // Close on ESC
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
              initial={{
                opacity: 0,
                y: 80,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 80,
                scale: 0.96,
              }}
              transition={{
                duration: 0.45,
              }}
              className="
                w-full
                max-w-5xl
                rounded-[36px]
                border
                border-white/10
                bg-zinc-950
                overflow-hidden
              "
            >
              {/* Banner */}

              <div className="aspect-video bg-gradient-to-br from-violet-600/30 to-cyan-500/20 flex items-center justify-center">
                <span className="text-zinc-500 text-lg">
                  Project Preview Coming Soon
                </span>
              </div>

              <div className="p-12">

                {/* Header */}

                <div className="flex justify-between items-start">

                  <div>

                    <span
                      className={`
                        inline-flex
                        rounded-full
                        px-4
                        py-2
                        text-xs
                        font-semibold
                        tracking-widest
                        uppercase
                        ${
                          project.status === "Completed"
                            ? "bg-emerald-500/15 text-emerald-400"
                            : "bg-violet-500/15 text-violet-300"
                        }
                      `}
                    >
                      {project.status}
                    </span>

                    <h2 className="mt-6 text-5xl font-black tracking-tight">
                      {project.title}
                    </h2>

                    <p className="mt-6 text-zinc-400 leading-8 max-w-3xl">
                      {project.description}
                    </p>

                  </div>

                  <button
                    onClick={onClose}
                    className="
                      w-12
                      h-12
                      rounded-full
                      border
                      border-zinc-700
                      flex
                      items-center
                      justify-center
                      hover:border-violet-500
                      transition
                    "
                  >
                    <FiX size={22} />
                  </button>

                </div>

                {/* Overview */}

                <div className="mt-16">

                  <h3 className="text-2xl font-bold mb-6">
                    Overview
                  </h3>

                  <p className="text-zinc-400 leading-8">
                    {project.overview}
                  </p>

                </div>

                {/* Challenges */}

                <div className="mt-16">

                  <h3 className="text-2xl font-bold mb-6">
                    Challenges
                  </h3>

                  <div className="space-y-4">

                    {project.challenges.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-4"
                      >
                        <div className="w-2 h-2 rounded-full bg-violet-400" />

                        <span className="text-zinc-400">
                          {item}
                        </span>
                      </div>
                    ))}

                  </div>

                </div>

                {/* Tech */}

                <div className="mt-16">

                  <h3 className="text-2xl font-bold mb-6">
                    Technologies
                  </h3>

                  <div className="flex flex-wrap gap-3">

                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="
                          rounded-full
                          border
                          border-zinc-700
                          px-4
                          py-2
                          text-sm
                          text-zinc-300
                        "
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                </div>

                {/* Buttons */}

                <div className="flex flex-wrap gap-5 mt-20">

                  <button
                    className="
                      px-8
                      py-4
                      rounded-full
                      bg-white
                      text-black
                      font-semibold
                      flex
                      items-center
                      gap-3
                      hover:bg-violet-400
                      transition
                    "
                  >
                    <FiGithub />
                    GitHub
                  </button>

                  <button
                    className="
                      px-8
                      py-4
                      rounded-full
                      border
                      border-white/15
                      text-white
                      flex
                      items-center
                      gap-3
                      hover:border-violet-500
                      transition
                    "
                  >
                    <FiArrowUpRight />
                    Live Demo
                  </button>

                </div>

              </div>

            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}