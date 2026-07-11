import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectModal from "../components/projects/ProjectModal";
import ChapterFrame from "../components/ui/ChapterFrame";
import ProjectGlow from "./ProjectGlow";
export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="relative bg-black/70 text-white py-40 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-10">
        <ChapterFrame index={1} label="PROJECTS">

          <p className="uppercase tracking-[0.4em] text-[#5E81AC] text-xs mb-8">Selected Work</p>

          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.06em] leading-[0.9]">
            PROJECTS
            <br />
            THAT DEFINE
            <br />
            MY JOURNEY.
          </h2>

          <div className="mt-16 max-w-3xl">
            <p className="text-zinc-400 text-xl leading-9">
              A collection of products focused on scalability,
              engineering quality and immersive user experiences.
              Every project reflects a different stage of my growth
              as a full-stack developer.
            </p>
          </div>
          <div className="mt-40 flex flex-col gap-44">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />
            ))}
          </div>

        </ChapterFrame>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      <div className="absolute inset-0 -z-0 overflow-hidden pointer-events-none">
        <ProjectGlow />
      </div> 
    </section>
  );
}