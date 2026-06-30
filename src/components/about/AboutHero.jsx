import useAboutHeroAnimation from "../../hooks/useAboutHeroAnimation";
import { headingXL } from "../../utils/typography";

export default function AboutHero() {
  useAboutHeroAnimation();

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center">

      {/* Background Title */}
      <h1
        className="
          about-bg-title
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
          text-white/[0.05]
          leading-none
        "
      >
        ABOUT
      </h1>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-10">

        <p
          className="
            about-kicker
            uppercase
            tracking-[0.45em]
            text-violet-400
            text-sm
            mb-10
          "
        >
          WHO I AM
        </p>

        <div className="max-w-6xl">

          <h1
            className="
              about-title
              font-black
              leading-[0.88]
              tracking-[-0.05em]
            "
            style={{
              fontSize: headingXL,
            }}
          >
            NOT JUST
            <br />
            A DEVELOPER
          </h1>

          <h1
            className="
              about-subtitle
              mt-12
              ml-20
              font-black
              leading-[0.88]
              tracking-[-0.05em]
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
            DIGITAL EXPERIENCES
          </h1>

        </div>

      </div>

      {/* Bottom description */}
      <div
        className="
          absolute
          bottom-14
          right-10
          max-w-md
          text-right
        "
      >
        <p className="text-zinc-500 leading-8 text-lg">
          Full Stack Developer focused on building immersive,
          performant and thoughtfully crafted digital products.
        </p>
      </div>

    </section>
  );
}