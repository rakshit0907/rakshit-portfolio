import { headingLG } from "../../utils/typography";

export default function AboutCurrent() {
  return (
    <section className="relative py-44 bg-black overflow-hidden">

      <div className="max-w-7xl mx-auto px-10">

        {/* Label */}
        <p className="uppercase tracking-[0.35em] text-violet-400 text-xs mb-6">
          Current Focus
        </p>

        {/* Heading */}
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

        {/* Featured Card */}
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

            <span className="uppercase tracking-[0.3em] text-violet-400 text-xs">
              Featured Project
            </span>

            <h3 className="mt-6 text-5xl font-black leading-tight">
              Multi-Tenant
              <br />
              SaaS Platform
            </h3>

            <p className="mt-10 text-zinc-300 text-xl leading-10 max-w-4xl">
              I'm designing a scalable SaaS platform with secure authentication,
              role-based access control and a modern full-stack architecture.
              The goal isn't simply to build another web application—it's to
              understand how production-grade software is designed, scaled and
              maintained.
            </p>

            {/* Highlights */}

            <div className="grid md:grid-cols-3 gap-8 mt-16">

              <div className="border-t border-zinc-800 pt-6">
                <h4 className="text-white font-semibold">
                  Architecture
                </h4>

                <p className="mt-3 text-zinc-500 leading-8">
                  Multi-tenant design with scalable backend architecture.
                </p>
              </div>

              <div className="border-t border-zinc-800 pt-6">
                <h4 className="text-white font-semibold">
                  Security
                </h4>

                <p className="mt-3 text-zinc-500 leading-8">
                  Authentication, authorization and role-based access control.
                </p>
              </div>

              <div className="border-t border-zinc-800 pt-6">
                <h4 className="text-white font-semibold">
                  Vision
                </h4>

                <p className="mt-3 text-zinc-500 leading-8">
                  Learning how real products evolve from ideas into scalable platforms.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}