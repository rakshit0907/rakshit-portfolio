import { headingXL } from "../../utils/typography";
import Reveal from "../ui/Reveal";

export default function AboutCTA() {
  return (
    <section className="about-cta relative py-56 bg-black overflow-hidden">

      {/* Background Word */}
      <h1
        className="
          create-bg-title
          absolute
          inset-0
          flex
          items-center
          justify-center
          pointer-events-none
          select-none
          text-[18vw]
          font-black
          tracking-[-0.08em]
          text-white/[0.04]
          leading-none
        "
      >
        CREATE
      </h1>

      <div className="relative z-10 max-w-7xl mx-auto px-10">

        <Reveal y={40}>
          <p className="uppercase tracking-[0.35em] text-violet-400 text-xs mb-8">
            Let's Build Together
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            className="font-black leading-[0.88] tracking-[-0.05em]"
            style={{
              fontSize: headingXL,
            }}
          >
            LET'S CREATE
            <br />
            SOMETHING
            <br />
            THAT PEOPLE
            <br />
            REMEMBER.
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-16 mt-24">

          <div className="lg:col-span-7">

            <Reveal delay={0.25}>
              <p className="text-3xl leading-[1.8] text-zinc-100 font-light max-w-3xl">
                Whether it's a product, a startup, or an ambitious idea,
                I'm always excited to collaborate with people who want to
                build meaningful digital experiences.
              </p>
            </Reveal>

          </div>

          <div className="lg:col-span-5 flex lg:justify-end items-end">

            <div>

              <Reveal delay={0.4}>
                <p className="text-zinc-500 leading-8 mb-8">
                  Ready to start a conversation?
                </p>
              </Reveal>

              <Reveal delay={0.55}>
                <button
                  className="
                    group
                    px-10
                    py-5
                    rounded-full
                    bg-white
                    text-black
                    font-semibold
                    transition-all
                    duration-300
                    hover:bg-violet-400
                    hover:scale-105
                    hover:shadow-[0_0_35px_rgba(168,85,247,0.35)]
                  "
                >
                  <span className="inline-flex items-center gap-3">
                    Get In Touch
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </button>
              </Reveal>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}