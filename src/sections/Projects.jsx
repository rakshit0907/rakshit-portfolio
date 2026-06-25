import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="min-h-screen py-32">
      <div className="container mx-auto px-8">

        <h2 className="text-5xl font-bold mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setSelected}
            />
          ))}
        </div>

      </div>
    </section>
  );
}