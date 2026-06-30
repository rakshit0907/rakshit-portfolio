import { headingLG } from "../../utils/typography";
import Reveal from "../ui/Reveal";

export default function AboutCurrent() {
  return (
    <section className="relative py-44 bg-black overflow-hidden">

      <div className="max-w-7xl mx-auto px-10">

        {/* Label */}
        <Reveal y={40}>
          <p className="uppercase tracking-[0.35em] text-violet-400 text-xs mb-6">
            Current Focus
          </p>
        </Reveal>

        {/* Heading */}
        <Reveal delay={0.1}>
          <h2
            className="font-black leading-[0.9] tracking-[-0.05em] mb-20"
            style={{
              fontSize: headingLG,
            }}
          >
            BUILDING
            <br />
            THE NEXT
            <br />
            CHAPTER.
          </h2>
        </Reveal>

        {/* Featured Card */}
        <Reveal delay={0.2}>
          <div
            className="
              relative
              rounded-[36px]
              border
              border-zinc-800
              bg-gradient-to-br
              from-zinc-900/90
              via-zinc-900
              to-black
              p-12
              overflow-hidden
              transition-all
              duration-500
              hover:border-violet-500/40
              hover:shadow-[0_0_60px_rgba(139,92,246,0.12)]
            "
          >

            {/* Glow */}
            <div className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-violet-500/10 blur-[120px]" />

            <div className="relative z-10">

              <Reveal delay={0.3}>
                <span className="uppercase tracking-[0.3em] text-violet-400 text-xs">
                  Featured Project
                </span>
              </Reveal>

              <Reveal delay={0.4}>
                <h3 className="mt-6 text-5xl font-black leading-tight">
                  Multi-Tenant
                  <br />
                  SaaS Platform
                </h3>
              </Reveal>

              <Reveal delay={0.5}>
                <p className="mt-10 text-zinc-300 text-xl leading-10 max-w-4xl">
                  I'm designing a scalable SaaS platform with secure authentication,
                  role-based access control and a modern full-stack architecture.
                  The goal isn't simply to build another web application—it's to
                  understand how production-grade software is designed, scaled and
                  maintained.
                </p>
              </Reveal>

              {/* Highlights */}

              <div className="grid md:grid-cols-3 gap-8 mt-16">

                <Reveal delay={0.65}>
                  <div className="border-t border-zinc-800 pt-6">
                    <h4 className="text-white font-semibold">
                      Architecture
                    </h4>

                    <p className="mt-3 text-zinc-500 leading-8">
                      Multi-tenant design with scalable backend architecture.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={0.8}>
                  <div className="border-t border-zinc-800 pt-6">
                    <h4 className="text-white font-semibold">
                      Security
                    </h4>

                    <p className="mt-3 text-zinc-500 leading-8">
                      Authentication, authorization and role-based access control.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={0.95}>
                  <div className="border-t border-zinc-800 pt-6">
                    <h4 className="text-white font-semibold">
                      Vision
                    </h4>

                    <p className="mt-3 text-zinc-500 leading-8">
                      Learning how real products evolve from ideas into scalable platforms.
                    </p>
                  </div>
                </Reveal>

              </div>

            </div>

          </div>
        </Reveal>

      </div>

    </section>
  );
}