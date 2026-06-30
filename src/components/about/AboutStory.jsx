import { motion } from "framer-motion";
import { headingLG } from "../../utils/typography";

export default function AboutStory() {
  return (
    <section className="relative py-40 bg-black">

      <div className="max-w-7xl mx-auto px-10">

        <div className="grid lg:grid-cols-12 gap-20">

          {/* Left */}

          <div className="lg:col-span-4">

            <p className="uppercase tracking-[0.35em] text-violet-400 text-xs mb-6">
              My Story
            </p>

            <h2
              className="font-black leading-[0.9] tracking-[-0.05em]"
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

          </div>

          {/* Right */}

          <div className="lg:col-span-8">

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
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
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-16 grid md:grid-cols-2 gap-10"
            >
              <p className="text-lg leading-9 text-zinc-500">
                I enjoy building scalable full-stack applications using
                React, Node.js and MongoDB while constantly exploring better
                architecture and cleaner engineering practices.
              </p>

              <p className="text-lg leading-9 text-zinc-500">
                More recently, my focus has shifted towards immersive web
                experiences with Three.js, GSAP and AI, where technology
                meets storytelling and design.
              </p>
            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}