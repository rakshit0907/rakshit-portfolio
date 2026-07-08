import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useTilt from "../hooks/useTilt";
import { projects } from "../data/projects";
import ProjectModal from "../components/projects/ProjectModal";
import ChapterFrame from "../components/ui/ChapterFrame";

const featured = projects.slice(0, 2);

export default function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  return (
    <section className="min-h-screen px-8 py-32 bg-black/70">
      <div className="max-w-7xl mx-auto">
        <ChapterFrame index={2} label="WORK">

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.3em] text-[#5E81AC] mb-8"
          >
            Selected Work
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-7xl font-black mb-20"
          >
            Featured
            <br />
            Projects.
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-10">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
            ))}
          </div>

          <motion.button
            onClick={() => navigate("/projects")}
            whileHover={{ x: 6 }}
            className="mt-16 flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-zinc-300 hover:text-white transition-colors"
          >
            See All Projects <span>→</span>
          </motion.button>

          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

        </ChapterFrame>
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
      className="cursor-pointer rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:border-[#5E81AC]/50 transition-all duration-500"
    >
      <div className="aspect-video bg-gradient-to-br from-[#5E81AC]/30 to-[#6F93BF]/20 flex items-center justify-center">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-zinc-500">Screenshot Coming Soon</span>
        )}
      </div>

      <div className="p-10">
        <h3 className="text-3xl font-bold">{project.title}</h3>
        <p className="mt-4 text-zinc-400 leading-8">{project.description}</p>
      </div>
    </motion.div>
  );
}