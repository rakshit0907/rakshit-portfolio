import { headingLG } from "../../utils/typography";
import Reveal from "../ui/Reveal";
import useJourneyAnimation from "../../hooks/useJourneyAnimation";
const journey = [
  {
    stage: "01",
    title: "Programming Foundations",
    desc: "Built a strong foundation in C++, Data Structures & Algorithms, and core computer science concepts while developing analytical and problem-solving skills.",
  },
  {
    stage: "02",
    title: "Full-Stack Development",
    desc: "Learned modern web technologies including React, Node.js, Express.js, MongoDB, and Tailwind CSS by building responsive and scalable web applications.",
  },
  {
    stage: "03",
    title: "SaaS Development",
    desc: "Currently developing a multi-tenant SaaS platform featuring secure authentication, role-based access control, and scalable architecture using modern development practices.",
  },
  {
    stage: "04",
    title: "Cloud & AI",
    desc: "Expanding my expertise in cloud computing, artificial intelligence, and system design while building production-ready software and continuously exploring emerging technologies.",
  },
];

export default function AboutJourney() {
    useJourneyAnimation();
  return (
    <section className="journey-section py-44 bg-black">
      <div className="max-w-7xl mx-auto px-10">

        <Reveal y={40}>
          <p className="uppercase tracking-[0.35em] text-violet-400 text-xs mb-6">
            Journey
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            className="font-black leading-[0.9] tracking-[-0.05em] mb-24"
            style={{ fontSize: headingLG }}
          >
            MY
            <br />
            JOURNEY.
          </h2>
        </Reveal>

        <div className="relative ml-6">
            <div
              className="
              absolute
              left-[11px]
              top-0
              bottom-0
              w-px
              bg-zinc-800
              "
            >
             <div
             className="
             journey-line
             absolute
             top-0
             left-0
             w-full
             h-0
             bg-violet-500
             origin-top
             "  
             />
            </div>  
          {journey.map((item, index) => (
            <Reveal
              key={item.stage}
              delay={index * 0.12}
            >
              <div
                className="
                  grid
                  lg:grid-cols-12
                  gap-8
                  border-b
                  border-zinc-800
                  pb-12
                "
              >
                <div className="lg:col-span-2 relative">
                    <div
                      className="
                      absolute-left-8
                      top-3
                      w-6
                      h-6
                      rounded-full
                      border-violet-500
                      bg-black
                      shadow-[0_0_20px_rgba(139,92,246,0.4)]
                      "
                     /> 

                  <span
                    className="
                      text-5xl
                      font-black
                      text-zinc-700
                      tracking-[-0.04em]
                    "
                  >
                    {item.stage}
                  </span>

                </div>

                <div className="lg:col-span-10">

                  <h3 className="text-2xl md:text-3xl font-bold mb-5">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 leading-8 max-w-3xl">
                    {item.desc}
                  </p>

                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}