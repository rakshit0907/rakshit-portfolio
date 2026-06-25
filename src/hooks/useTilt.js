import { useRef } from "react";

export default function useTilt() {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect =
      ref.current.getBoundingClientRect();

    const x =
      (e.clientX - rect.left) / rect.width;

    const y =
      (e.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * 12;
    const rotateX = -(y - 0.5) * 12;

    ref.current.style.transform =
      `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.02,1.02,1.02)
      `;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;

    ref.current.style.transform =
      `
      perspective(1200px)
      rotateX(0deg)
      rotateY(0deg)
      scale3d(1,1,1)
      `;
  };

  return {
    ref,
    handleMouseMove,
    handleMouseLeave,
  };
}