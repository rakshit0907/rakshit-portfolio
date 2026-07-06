import { headingLG } from "../../theme";
import Reveal from "../ui/Reveal";

const journey = [
  {
    number: "01",
    chapter: "BEGINNING",
    title: "Learning How Software Works",
    desc: "Built a strong foundation in C++, Data Structures & Algorithms and core computer science concepts while developing analytical thinking and problem-solving skills.",
  },
  {
    number: "02",
    chapter: "DISCOVERY",
    title: "Building Digital Products",
    desc: "Started creating modern full-stack applications using React, Node.js, Express and MongoDB, transforming ideas into responsive and scalable web experiences.",
  },
  {
    number: "03",
    chapter: "AMBITION",
    title: "Engineering For Scale",
    desc: "Currently building a multi-tenant SaaS platform while learning authentication, role-based access control, scalable architecture and production-ready development.",
  },
  {
    number: "04",
    chapter: "VISION",
    title: "Creating What's Next",
    desc: "Exploring Artificial Intelligence, cloud technologies, Three.js and immersive web experiences to build products that combine engineering with storytelling.",
  },
];

export default function AboutJourney() {
  return (
    <section className="about-journey relative -mt-28 py-52 bg-black z-20">

      {/* Background Number */}

      <div className="absolute top-10 right-10 pointer-events-none select-none">

        <span className="text-[28vw] font-black tracking-[-0.08em] text-white/[0.025]">
          02
        </span>

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-10">

        <Reveal y={30}>
          <p className="uppercase tracking-[0.5em] text-violet-400 text-xs mb-8">
            Chapter Two
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            className="font-black leading-[0.86] tracking-[-0.06em] mb-32"
            style={{
              fontSize: headingLG,
            }}
          >
            MY
            <br />
            EVOLUTION.
          </h2>
        </Reveal>

        <div>

          {journey.map((item, index) => {

            const reverse = index % 2 !== 0;

            return (

              <Reveal
                key={item.number}
                delay={index * 0.08}
              >

                <div className="border-t border-zinc-800 py-20">

                  <div
                    className={`grid lg:grid-cols-12 gap-12 items-start ${
                      reverse ? "lg:text-right" : ""
                    }`}
                  >

                    {!reverse && (

                      <>
                        <div className="lg:col-span-3">

                          <span className="text-7xl font-black text-zinc-800 tracking-[-0.06em]">
                            {item.number}
                          </span>

                        </div>

                        <div className="lg:col-span-9">

                          <p className="uppercase tracking-[0.45em] text-violet-400 text-xs mb-5">
                            {item.chapter}
                          </p>

                          <h3 className="text-5xl font-black leading-tight tracking-[-0.04em]">
                            {item.title}
                          </h3>

                          <p className="mt-8 text-zinc-400 text-lg leading-9 max-w-3xl">
                            {item.desc}
                          </p>

                        </div>
                      </>

                    )}

                    {reverse && (

                      <>
                        <div className="lg:col-span-9 flex flex-col items-end">

                          <p className="uppercase tracking-[0.45em] text-violet-400 text-xs mb-5">
                            {item.chapter}
                          </p>

                          <h3 className="text-5xl font-black leading-tight tracking-[-0.04em] max-w-3xl">
                            {item.title}
                          </h3>

                          <p className="mt-8 text-zinc-400 text-lg leading-9 max-w-3xl">
                            {item.desc}
                          </p>

                        </div>

                        <div className="lg:col-span-3 flex justify-end">

                          <span className="text-7xl font-black text-zinc-800 tracking-[-0.06em]">
                            {item.number}
                          </span>

                        </div>
                      </>

                    )}

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