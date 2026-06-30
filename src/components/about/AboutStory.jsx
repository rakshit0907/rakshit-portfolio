import { headingLG } from "../../utils/typography";
import Reveal from "../ui/Reveal";

export default function AboutStory() {
  return (
    <section className="relative pt-52 pb-40 bg-gradient-to-b from-transparent via-black-to-black">

      <div className="max-w-7xl mx-auto px-10 relative">

        <div className="grid lg:grid-cols-12 gap-20">

          {/* Left */}

          <div className="lg:col-span-4">

            <Reveal y={20}>
              <p className="uppercase tracking-[0.45em] text-violet-400 text-xs mb-8">
                My Story
              </p>
            </Reveal>

            <Reveal>
              <h2
                className="font-black leading-[0.88] tracking-[-0.06em]"
                style={{
                  fontSize: headingLG,
                }}
              >
                THE
                <br />
                PERSON
                <br />
                BEHIND
                <br />
                THE CODE.
              </h2>
            </Reveal>

          </div>

          {/* Right */}

          <div className="lg:col-span-8">

            <Reveal delay={0.2}>
              <p
                className="
                  text-3xl
                  leading-[1.8]
                  text-zinc-100
                  font-light
                  max-w-4xl
                "
              >
                I'm <span className="font-semibold text-white">Rakshit Pandey</span>,
                a Computer Science student passionate about crafting digital
                products that combine engineering, creativity and purposeful
                user experiences.
              </p>
            </Reveal>

            <div className="mt-16 grid md:grid-cols-2 gap-10">

              <Reveal delay={0.35}>
                <p className="text-lg leading-9 text-zinc-500">
                  I enjoy building scalable full-stack applications using
                  React, Node.js and MongoDB while constantly exploring better
                  architecture and cleaner engineering practices.
                </p>
              </Reveal>

              <Reveal delay={0.5}>
                <p className="text-lg leading-9 text-zinc-500">
                  More recently, my focus has shifted towards immersive web
                  experiences with Three.js, GSAP and AI, where technology
                  meets storytelling and design.
                </p>
              </Reveal>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}