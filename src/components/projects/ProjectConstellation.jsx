import { motion, useReducedMotion } from "framer-motion";

const tech = [
  "React", "Three.js", "GSAP", "Node.js", "MongoDB", "Tailwind",
  "TypeScript", "Git", "Docker", "Figma", "AI", "Vite",
  "Express", "REST API", "JavaScript", "Next.js", "SQL", "Framer",
  "WebGL", "Vercel", "HTML", "CSS", "Python", "Linux",
];

export default function ProjectConstellation() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {tech.map((item, i) => (
        <motion.div
          key={item}
          className="absolute font-bold tracking-wider text-[#6F93BF]/30 text-xl md:text-3xl"
          style={{
            left: `${6 + ((i * 29) % 84)}%`,
            top: `${2 + (i * 4.1) % 96}%`,
          }}
          animate={
            reduceMotion
              ? undefined
              : { y: [-30, 30, -30], rotate: [-5, 5, -5] }
          }
          transition={{
            duration: 7 + (i % 6) * 1.5,
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
