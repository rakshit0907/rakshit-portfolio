import { headingXL } from "../../theme";
import Reveal from "../ui/Reveal";
import ChapterFrame from "../ui/ChapterFrame";

export default function AboutCTA() {
  return (
    <section className="about-cta relative -mt-24 py-64 bg-black overflow-hidden z-[60]">

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[20vw] font-black tracking-[-0.08em] text-white/[0.025]">NEXT</h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-10">
        <ChapterFrame index={7} label="NEXT">

          <Reveal y={30}>
            <p className="uppercase tracking-[0.45em] text-[#5E81AC] text-xs">Final Chapter</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-8 font-black leading-[0.86] tracking-[-0.06em]" style={{ fontSize: headingXL }}>
              WHAT
              <br />
              SHALL WE
              <br />
              BUILD
              <br />
              NEXT?
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-24 mt-28">
            <div className="lg:col-span-7">
              <Reveal delay={0.25}>
                <p className="text-3xl leading-[1.8] font-light text-zinc-100 max-w-4xl">
                  Every meaningful product starts with a conversation.
                  If you have an ambitious idea, let's transform it into
                  something people genuinely enjoy using.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5 flex lg:justify-end items-end">
              <Reveal delay={0.4}>
                <button className="group px-12 py-5 rounded-full border border-white text-white font-semibold transition-all duration-500 hover:bg-white hover:text-black hover:scale-105">
                  <span className="flex items-center gap-4">
                    Start a Conversation
                    <span className="transition-transform duration-500 group-hover:translate-x-2">→</span>
                  </span>
                </button>
              </Reveal>
            </div>
          </div>

        </ChapterFrame>
      </div>
    </section>
  );
}