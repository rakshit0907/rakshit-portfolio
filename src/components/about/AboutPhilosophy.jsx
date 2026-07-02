import { headingXL } from "../../utils/typography";
import Reveal from "../ui/Reveal";

const principles = [
  {
    number: "01",
    title: "UNDERSTAND",
    desc: "Every great product begins by deeply understanding the problem before writing a single line of code.",
  },
  {
    number: "02",
    title: "ENGINEER",
    desc: "Strong architecture and scalable systems create products that continue performing as they grow.",
  },
  {
    number: "03",
    title: "REFINE",
    desc: "The smallest interactions often create the strongest impressions. Details are never accidental.",
  },
];

export default function AboutPhilosophy() {
  return (
    <section className="relative py-56 bg-black overflow-hidden">

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
          THINK
        </span>

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-10">

        {/* Label */}

        <Reveal y={30}>
          <p className="uppercase tracking-[0.5em] text-violet-400 text-xs mb-8">
            Principles
          </p>
        </Reveal>

        {/* Heading */}

        <Reveal delay={0.1}>
          <h2
            className="font-black leading-[0.86] tracking-[-0.06em]"
            style={{
              fontSize: headingXL,
            }}
          >
            CODE
            <br />
            IS ONLY
            <br />
            THE
            <br />
            BEGINNING.
          </h2>
        </Reveal>

        {/* Intro */}

        <div className="grid lg:grid-cols-12 gap-20 mt-28">

          <div className="lg:col-span-3">

            <Reveal delay={0.2}>
              <p className="uppercase tracking-[0.45em] text-zinc-600 text-xs">
                WHY I BUILD
              </p>
            </Reveal>

          </div>

          <div className="lg:col-span-9">

            <Reveal delay={0.25}>
              <p className="text-3xl md:text-4xl leading-[1.7] font-light text-zinc-100 max-w-5xl">
                I don't believe great software is measured by the amount of
                code written. It's measured by the problems it solves, the
                experiences it creates, and the people it empowers.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="mt-12 text-lg leading-9 text-zinc-500 max-w-3xl">
                Every project starts with understanding the problem before
                thinking about the solution. My focus is building software that
                is scalable, intuitive and crafted with the same attention to
                engineering as design.
              </p>
            </Reveal>

          </div>

        </div>

        {/* Principles */}

        <div className="mt-36">

          {principles.map((item, index) => (

            <Reveal
              key={item.number}
              delay={index * 0.08}
            >

              <div className="border-t border-zinc-800 py-16">

                <div className="grid lg:grid-cols-12 gap-12">

                  <div className="lg:col-span-2">

                    <span
                      className="
                        text-6xl
                        font-black
                        text-zinc-800
                        tracking-[-0.05em]
                      "
                    >
                      {item.number}
                    </span>

                  </div>

                  <div className="lg:col-span-10">

                    <h3
                      className="
                        text-4xl
                        md:text-5xl
                        font-black
                        tracking-[-0.04em]
                      "
                    >
                      {item.title}
                    </h3>

                    <p className="mt-8 text-zinc-400 text-lg leading-9 max-w-3xl">
                      {item.desc}
                    </p>

                  </div>

                </div>

              </div>

            </Reveal>

          ))}

        </div>

        {/* Closing Quote */}

        <Reveal delay={0.4}>

          <div className="mt-32 border-t border-zinc-800 pt-16">

            <p
              className="
                text-4xl
                md:text-5xl
                font-light
                italic
                leading-[1.6]
                text-zinc-200
                max-w-5xl
              "
            >
              "Technology should disappear.
              <br />
              The experience should remain."
            </p>

            <p className="mt-10 uppercase tracking-[0.45em] text-zinc-600 text-xs">
              — Rakshit Pandey
            </p>

          </div>

        </Reveal>

      </div>

    </section>
  );
}