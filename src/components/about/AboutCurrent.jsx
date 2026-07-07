import { headingXL } from "../../theme";
import Reveal from "../ui/Reveal";

export default function AboutCurrent() {
  return (
    <section className="about-current relative -mt-24 py-56 bg-black overflow-hidden z-50">

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[20vw] font-black tracking-[-0.08em] text-white/[0.025]">
          NOW
        </h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-10">

        <Reveal y={30}>
          <p className="uppercase tracking-[0.45em] text-[#5E81AC] text-xs">
            Current Focus
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-8 font-black leading-[0.86] tracking-[-0.06em]" style={{ fontSize: headingXL }}>
            BUILDING
            <br />
            SOMETHING
            <br />
            BIGGER.
          </h2>
        </Reveal>

        <div className="mt-32 grid lg:grid-cols-12 gap-24">

          <div className="lg:col-span-4">
            <Reveal delay={0.2}>
              <span className="uppercase tracking-[0.4em] text-zinc-600 text-xs">
                Featured Project
              </span>
            </Reveal>

            <Reveal delay={0.3}>
              <h3 className="mt-8 text-5xl font-black leading-tight tracking-[-0.04em]">
                Multi-Tenant
                <br />
                SaaS Platform
              </h3>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={0.35}>
              <p className="text-3xl leading-[1.8] font-light text-zinc-100">
                I'm building a production-ready SaaS platform focused on
                scalability, security and maintainable architecture.
                More than shipping another project, the goal is to understand
                how real software is engineered from the ground up.
              </p>
            </Reveal>

            <div className="mt-20 space-y-12">
              <Reveal delay={0.45}>
                <div className="border-l-2 border-[#5E81AC] pl-8">
                  <h4 className="text-white text-xl font-semibold">
                    Architecture
                  </h4>
                  <p className="mt-4 text-zinc-500 leading-8">
                    Multi-tenant architecture built with React, Node.js,
                    Express and MongoDB.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.55}>
                <div className="border-l-2 border-[#5E81AC] pl-8">
                  <h4 className="text-white text-xl font-semibold">
                    Current Focus
                  </h4>
                  <p className="mt-4 text-zinc-500 leading-8">
                    Authentication, RBAC, scalable APIs and production-ready
                    engineering practices.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.65}>
                <div className="border-l-2 border-[#5E81AC] pl-8">
                  <h4 className="text-white text-xl font-semibold">
                    Long-Term Vision
                  </h4>
                  <p className="mt-4 text-zinc-500 leading-8">
                    Build software that solves meaningful problems while
                    continuously learning cloud computing, AI and system design.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}