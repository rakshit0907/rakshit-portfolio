import { motion } from "framer-motion";
import { techStack } from "../data/techStack";
import ChapterFrame from "../components/ui/ChapterFrame";

export default function SkillsPreview() {
  return (
    <section id="skills" 
    className="relative bg-black/70 text-white py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-10">
        <ChapterFrame index={3} label="STACK">

          <h2 className="text-6xl md:text-7xl font-black tracking-[-0.06em] leading-[0.9] mb-24">
            BUILT WITH
            <br />
            PRECISION.
          </h2>

          <div className="relative border-y" style={{ borderColor: "var(--border)" }}>
            <motion.div
              className="flex gap-16 py-10 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {[...techStack, ...techStack].map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <div key={i} className="flex items-center gap-4 shrink-0">
                    <Icon size={tech.size ?? 40} color={tech.color} />
                    <span className="font-mono text-sm uppercase tracking-[0.2em]" style={{ color: "var(--text-soft)" }}>
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>

        </ChapterFrame>
      </div>
    </section>
  );
}