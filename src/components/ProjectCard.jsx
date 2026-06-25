import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectCard({
  project,
  onClick,
}) {
  const [rotate, setRotate] = useState({
    x: 0,
    y: 0,
  });

  function handleMove(e) {
    const rect =
      e.currentTarget.getBoundingClientRect();

    const x =
      e.clientX - rect.left;

    const y =
      e.clientY - rect.top;

    const rotateY =
      ((x / rect.width) - 0.5) * 12;

    const rotateX =
      -((y / rect.height) - 0.5) * 12;

    setRotate({
      x: rotateX,
      y: rotateY,
    });
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={() =>
        setRotate({
          x: 0,
          y: 0,
        })
      }
      whileHover={{
        scale: 1.03,
      }}
      onClick={() => onClick(project)}
      style={{
        rotateX: rotate.x,
        rotateY: rotate.y,
        transformStyle:
          "preserve-3d",
      }}
      className="
      relative
      rounded-3xl
      bg-zinc-900
      p-8
      cursor-pointer
      border
      border-zinc-800
      overflow-hidden
      "
    >
      {/* Glow */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-br
        from-violet-500/10
        to-cyan-500/10
        "
      />

      <h3 className="text-2xl font-bold mb-4">
        {project.title}
      </h3>

      <p className="text-zinc-400">
        {project.description}
      </p>
    </motion.div>
  );
}