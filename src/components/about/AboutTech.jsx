import { techStack } from "../../data/techStack";
import { headingLG } from "../../utils/typography";

export default function AboutTech() {
  return (
    <section className="relative py-40 bg-black overflow-hidden">

      <div className="max-w-7xl mx-auto px-10">

        {/* Label */}
        <p className="uppercase tracking-[0.35em] text-violet-400 text-xs mb-6">
          Tech Stack
        </p>

        {/* Heading */}
        <h2
          className="font-black leading-[0.9] tracking-[-0.05em] mb-20"
          style={{
            fontSize: headingLG,
          }}
        >
          MY
          <br />
          TECH
          <br />
          ECOSYSTEM.
        </h2>

        {/* Intro */}
        <div className="max-w-3xl mb-20">
          <p className="text-2xl text-zinc-300 leading-[1.8]">
            Every technology I use has a purpose. I choose tools that help me
            build scalable, performant and user-focused digital products.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {techStack.map((tech) => (

            <div
              key={tech.name}
              className="
                group
                rounded-[28px]
                border
                border-zinc-800
                bg-gradient-to-b
                from-zinc-900/70
                to-black
                p-8
                transition-all
                duration-500
                hover:border-violet-500/50
                hover:-translate-y-2
                hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]
              "
            >

              <div
                className="text-5xl transition-transform duration-500 group-hover:scale-110"
                style={{ color: tech.color }}
              >
                {tech.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">
                {tech.name}
              </h3>

              <p className="mt-4 text-zinc-500 leading-8">
                {tech.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}