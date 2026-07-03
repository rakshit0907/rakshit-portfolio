import useAboutExperience from "../../hooks/useAboutExperience";
import { headingXL } from "../../theme";
import Reveal from "../ui/Reveal";

export default function AboutHero() {

  return (
    <section className="about-hero relative min-h-screen bg-black overflow-hidden">

      {/* Background Word */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1
          className="
            about-bg-title
            text-[20vw]
            font-black
            tracking-[-0.08em]
            text-white/[0.03]
            leading-none
          "
        >
          ABOUT
        </h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-10">

        {/* Top Label */}

        <Reveal y={30}>
          <div className="pt-28 flex justify-between items-start">

            <p className="uppercase tracking-[0.55em] text-violet-400 text-xs">
              WHO I AM
            </p>

            <p className="text-zinc-600 uppercase tracking-[0.35em] text-xs">
              Chapter 01
            </p>

          </div>
        </Reveal>

        {/* Main Editorial Layout */}

        <div className="mt-28">

          <Reveal>

            <h1
              className="
                font-black
                leading-[0.88]
                tracking-[-0.06em]
                max-w-4xl
              "
              style={{
                fontSize: headingXL,
              }}
            >
              NOT JUST
              <br />
              A DEVELOPER
            </h1>

          </Reveal>

          {/* Huge breathing space */}

          <div className="h-44" />

          <Reveal delay={0.2}>

            <div className="flex justify-end">

              <h1
                className="
                  font-black
                  leading-[0.88]
                  tracking-[-0.06em]
                  text-right
                  bg-gradient-to-r
                  from-violet-400
                  via-cyan-300
                  to-white
                  bg-clip-text
                  text-transparent
                "
                style={{
                  fontSize: headingXL,
                }}
              >
                I CREATE
                <br />
                DIGITAL
                <br />
                EXPERIENCES
              </h1>

            </div>

          </Reveal>

        </div>

        {/* Bottom Editorial Row */}

        <Reveal delay={0.35}>

          <div className="mt-36 border-t border-zinc-800 pt-8">

            <div className="grid md:grid-cols-12 gap-8">

              <div className="md:col-span-3">

                <p className="uppercase tracking-[0.35em] text-zinc-600 text-xs">
                  Based In India
                </p>

              </div>

              <div className="md:col-span-6">

                <p className="text-zinc-400 text-xl leading-9 max-w-xl">
                  Building thoughtful digital products where engineering,
                  interaction and visual storytelling come together to create
                  memorable experiences.
                </p>

              </div>

              <div className="md:col-span-3 flex md:justify-end items-end">

                <span className="text-zinc-600 text-sm tracking-[0.3em] uppercase">
                  Scroll ↓
                </span>

              </div>

            </div>

          </div>

        </Reveal>

      </div>

    </section>
  );
}