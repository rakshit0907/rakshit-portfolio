// sections/AboutPreview.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ChapterFrame from "../components/ui/ChapterFrame";

export default function AboutPreview() {
  const navigate = useNavigate();

  return (
    <section id="about"
     className="min-h-screen flex items-center px-8 py-32 bg-black/70">
      <div className="max-w-7xl mx-auto w-full">
        <ChapterFrame index={1} label="ABOUT">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.4em] text-[#5E81AC] text-xs mb-8"
          >
            Who I Am
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-7xl font-black tracking-[-0.06em] leading-[0.9] max-w-4xl"
          >
            NOT JUST
            <br />
            A DEVELOPER.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 text-xl leading-9 text-zinc-400 max-w-2xl"
          >
            I build immersive digital products where engineering, motion
            and design come together — combining full-stack development
            with a designer's eye for detail.
          </motion.p>

          <motion.button
            onClick={() => navigate("/about")}
            whileHover={{ x: 6 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-14 flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-zinc-300 hover:text-white transition-colors"
          >
            More About Me <span>→</span>
          </motion.button>

        </ChapterFrame>
      </div>
    </section>
  );
}