import { techStack } from "../../data/techStack";
import { headingXL } from "../../theme";
import Reveal from "../ui/Reveal";

export default function AboutTech() {
  return (
    <section className="about-tech relative -mt-32 py-60 bg-black overflow-hidden z-40">
      {/* Background Word */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span
          className="
            text-[18vw]
            font-black
            tracking-[-0.08em]
            text-white/[0.025]
          "
        >
          BUILD
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-10">
        {/* Label */}
        <Reveal y={30}>
          <p className="uppercase tracking-[0.45em] text-violet-400 text-xs mb-8">
            Tech Ecosystem
          </p>
        </Reveal>

        {/* Heading */}
        <Reveal delay={0.1}>
          <h2
            className="font-black leading-[0.86] tracking-[-0.06em]"
            style={{ fontSize: headingXL }}
          >
            THE TOOLS
            <br />
            BEHIND
            <br />
            THE WORK.
          </h2>
        </Reveal>

        {/* Intro */}
        <Reveal delay={0.2}>
          <div className="grid lg:grid-cols-12 gap-20 mt-28">
            <div className="lg:col-span-3">
              <p className="uppercase tracking-[0.45em] text-zinc-600 text-xs">
                MY STACK
              </p>
            </div>

            <div className="lg:col-span-9">
              <p className="text-3xl leading-[1.8] font-light text-zinc-100 max-w-5xl">
                Technology is never the goal. It's simply the medium I use to
                transform ideas into scalable, performant and memorable digital
                experiences.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Technologies */}
        <div className="mt-36">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <Reveal
                key={tech.name}
                delay={index * 0.05}
              >
                <div
                  className="
                    group
                    border-t
                    border-zinc-800
                    py-10
                    transition-all
                    duration-500
                    hover:border-violet-500/40
                  "
                >
                  <div className="grid lg:grid-cols-12 gap-10 items-center">
                    {/* Icon */}
                    <div className="lg:col-span-2">
                      <div
                        className="
                          transition-transform
                          duration-500
                          group-hover:scale-110
                          group-hover:rotate-6
                        "
                      >
                        <Icon
                          size={tech.size ?? 52}
                          color={tech.color}
                        />
                      </div>
                    </div>

                    {/* Name */}
                    <div className="lg:col-span-4">
                      <h3
                        className="
                          text-4xl
                          font-black
                          tracking-[-0.04em]
                          transition-colors
                          duration-300
                          group-hover:text-violet-300
                        "
                      >
                        {tech.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="lg:col-span-6">
                      <p className="text-zinc-500 leading-8">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}