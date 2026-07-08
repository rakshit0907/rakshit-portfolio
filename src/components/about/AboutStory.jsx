import { headingLG } from "../../theme";
import Reveal from "../ui/Reveal";
import ChapterFrame from "../ui/ChapterFrame";

export default function AboutStory() {
  return (
    <section className="about-story relative -mt-32 pt-72 pb-44 bg-black z-10">

      <div className="absolute top-20 right-10 pointer-events-none select-none">
        <span className="text-[28vw] font-black leading-none tracking-[-0.08em] text-white/[0.025]">
          01
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-10">
        <ChapterFrame index={2} label="STORY">
          <div className="grid lg:grid-cols-12 gap-24">

            <div className="lg:col-span-4">
              <Reveal y={20}>
                <p className="uppercase tracking-[0.5em] text-[#5E81AC] text-xs mb-8">
                  Chapter One
                </p>
              </Reveal>

              <Reveal>
                <h2 className="font-black leading-[0.86] tracking-[-0.06em]" style={{ fontSize: headingLG }}>
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

            <div className="lg:col-span-8">
              <Reveal delay={0.2}>
                <h3 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-[-0.05em] max-w-4xl">
                  I DON'T BUILD
                  <br />
                  SOFTWARE.
                  <br />
                  <span className="text-[#5E81AC]">
                    I BUILD EXPERIENCES.
                  </span>
                </h3>
              </Reveal>

              <Reveal delay={0.35}>
                <p className="mt-14 text-xl leading-10 text-zinc-400 max-w-3xl">
                  Technology has always been more than code for me.
                  Every project is an opportunity to create something
                  people genuinely enjoy using, remember interacting with,
                  and trust because of how thoughtfully it was built.
                </p>
              </Reveal>

              <div className="grid md:grid-cols-2 gap-12 mt-24">
                <Reveal delay={0.45}>
                  <div className="border-t border-zinc-800 pt-6">
                    <span className="text-[#5E81AC] text-sm tracking-[0.3em] uppercase">
                      Engineer
                    </span>
                    <p className="mt-5 text-zinc-500 leading-8">
                      I enjoy solving complex technical problems through
                      scalable architecture, clean code and modern engineering
                      practices.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={0.55}>
                  <div className="border-t border-zinc-800 pt-6">
                    <span className="text-[#5E81AC] text-sm tracking-[0.3em] uppercase">
                      Creator
                    </span>
                    <p className="mt-5 text-zinc-500 leading-8">
                      Beyond functionality, I focus on creating digital
                      experiences where motion, design and storytelling work
                      together seamlessly.
                    </p>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.65}>
                <div className="mt-28 border-t border-zinc-900 pt-12">
                  <p className="text-zinc-300 text-2xl leading-[1.9] max-w-4xl">
                    I'm <span className="font-semibold text-white">Rakshit Pandey</span>,
                    a Computer Science student constantly exploring the intersection
                    of full-stack engineering, immersive web experiences and AI.
                    My ambition isn't simply to become a software developer—
                    it's to build products that leave a lasting impression.
                  </p>
                </div>
              </Reveal>
            </div>

          </div>
        </ChapterFrame>
      </div>
    </section>
  );
}