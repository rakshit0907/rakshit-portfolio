import { motion } from "framer-motion";
import useParallax from "../hooks/useParallax";
export default function About() {
    useParallax();
  return (
    <section className="about-section min-h-screen bg-zinc-950 flex items-center">
      <div className="container mx-auto px-8">
      <div className="about-image relative"></div>
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >

          {/* Image */}

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-violet-600 to-cyan-500" />
          </div>

          {/* Content */}

          <div>

          <p className="uppercase text-sm text-violet-400 mb-4">
            About Me
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Turning ideas into scalable digital products.
          </h2>

          <p className="text-zinc-400 leading-relaxed">
            I'm a B.Tech Computer Science student with a strong interest in software
            development, cloud computing, and artificial intelligence. I specialize in
            building full-stack applications with modern technologies and enjoy creating
            solutions that combine performance, usability, and real-world impact.
          </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}