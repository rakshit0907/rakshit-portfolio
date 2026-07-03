import { useState } from "react";
import { motion } from "framer-motion";
import useTilt from "../hooks/useTilt";
import { projects } from "../data/projects";
import ProjectModal from "../components/projects/ProjectModal";

export default function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="min-h-screen px-8 py-32 bg-black">
      <div className="max-w-7xl mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.3em] text-violet-400 mb-8"
        >
          Selected Work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-7xl font-black mb-20"
        >
          Featured
          <br />
          Projects.
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}

function ProjectCard({ project, onClick }) {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt();

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="
        cursor-pointer
        rounded-3xl
        overflow-hidden
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        hover:border-violet-500/50
        transition-all
        duration-500
      "
    >
      <div className="aspect-video bg-gradient-to-br from-violet-600/30 to-cyan-500/20 flex items-center justify-center">
        <span className="text-zinc-500">
          Screenshot Coming Soon
        </span>
      </div>

      <div className="p-10">
        <h3 className="text-3xl font-bold">
          {project.title}
        </h3>

        <p className="mt-4 text-zinc-400 leading-8">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}