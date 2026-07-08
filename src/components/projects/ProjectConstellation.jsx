import { motion } from "framer-motion";

const tech = [
  "React",
  "Three.js",
  "GSAP",
  "Node",
  "MongoDB",
  "Tailwind",
  "TypeScript",
  "Git",
  "Docker",
  "Figma",
  "AI",
  "Vite",
];

export default function ProjectConstellation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {tech.map((item, i) => (
        <motion.div
          key={item}
          className="absolute text-[#6F93BF]/20 font-bold tracking-wider"
          style={{
            left: `${10 + (i * 7) % 80}%`,
            top: `${8 + (i * 13) % 80}%`,
          }}
          animate={{
            y: [-25, 25, -25],
            rotate: [-6, 6, -6],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
}