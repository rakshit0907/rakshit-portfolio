import { motion } from "framer-motion";

export default function RevealPanel({
  title,
  description,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl

      p-10
      "
    >
      <h2
        className="
        text-4xl
        font-bold
        mb-4
        "
      >
        {title}
      </h2>

      <p
        className="
        text-zinc-400
        leading-relaxed
        "
      >
        {description}
      </p>
    </motion.div>
  );
}