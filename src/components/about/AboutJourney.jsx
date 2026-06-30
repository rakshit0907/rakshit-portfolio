import { headingLG } from "../../utils/typography";
import Reveal from "../ui/Reveal";

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
  return (
    <section className="py-40 bg-black">
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

        <div className="space-y-14">
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
                <div className="lg:col-span-2">

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