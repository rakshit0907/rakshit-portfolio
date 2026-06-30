import { headingXL } from "../../utils/typography";

export default function AboutPhilosophy() {
  return (
    <section className="relative py-44 bg-black overflow-hidden">

      <div className="max-w-7xl mx-auto px-10">

        {/* Section Label */}
        <p className="uppercase tracking-[0.35em] text-violet-400 text-xs mb-8">
          Philosophy
        </p>

        {/* Editorial Heading */}
        <div className="max-w-6xl">

          <h2
            className="font-black leading-[0.88] tracking-[-0.05em]"
            style={{
              fontSize: headingXL,
            }}
          >
            EVERY
            <br />
            DETAIL
            <br />
            MATTERS.
          </h2>

        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-12 gap-16 mt-24">

          {/* Left */}
          <div className="lg:col-span-4">

            <span className="uppercase tracking-[0.3em] text-zinc-600 text-sm">
              My Approach
            </span>

          </div>

          {/* Right */}
          <div className="lg:col-span-8">

            <p className="text-3xl leading-[1.8] text-zinc-100 font-light max-w-4xl">
              I don't believe great software is defined by the amount of code
              written. It's defined by the problems it solves, the experiences
              it creates, and the people it helps.
            </p>

            <p className="mt-12 text-lg leading-9 text-zinc-500 max-w-3xl">
              Every project I build starts with understanding the problem
              before thinking about the solution. I focus on clean architecture,
              scalable systems and thoughtful user experiences, believing that
              great engineering and great design should always work together.
            </p>

            <div className="mt-16 grid md:grid-cols-3 gap-8">

              <div className="border-t border-zinc-800 pt-6">
                <h3 className="text-xl font-semibold text-white">
                  Build
                </h3>

                <p className="mt-3 text-zinc-500 leading-8">
                  Create products with strong foundations and maintainable code.
                </p>
              </div>

              <div className="border-t border-zinc-800 pt-6">
                <h3 className="text-xl font-semibold text-white">
                  Scale
                </h3>

                <p className="mt-3 text-zinc-500 leading-8">
                  Design systems that grow without sacrificing performance.
                </p>
              </div>

              <div className="border-t border-zinc-800 pt-6">
                <h3 className="text-xl font-semibold text-white">
                  Refine
                </h3>

                <p className="mt-3 text-zinc-500 leading-8">
                  Polish every interaction because details create memorable experiences.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}