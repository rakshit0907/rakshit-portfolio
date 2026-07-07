import { projects } from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";

export default function Projects() {
  return (
    <section className="relative bg-black text-white py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-10">

        <p className="uppercase tracking-[0.4em] text-[#5E81AC] text-xs mb-8">
          Selected Work
        </p>

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

        <div className="mt-32 flex flex-col gap-28">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}