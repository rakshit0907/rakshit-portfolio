import { motion } from "framer-motion";

const skills = [
  "C++",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "REST APIs",
  "JWT Authentication",
  "Docker",
  "AWS",
  "AI Integration",
  "System Design",
];

export default function SkillsPreview() {
  return (
    <section className="min-h-screen overflow-hidden py-32">
      <h2
        className="
          text-center
          text-6xl
          font-bold
          mb-24
        "
      >
        Skills
      </h2>

      {/* Marquee */}

      <div className="overflow-hidden whitespace-nowrap">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
          className="inline-flex gap-16 text-4xl font-semibold"
        >
          {[...skills, ...skills].map((skill, index) => (
            <span
              key={index}
              className="bg-zinc-900 border border-zinc-800 px-6 py-3 rounded-full"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}