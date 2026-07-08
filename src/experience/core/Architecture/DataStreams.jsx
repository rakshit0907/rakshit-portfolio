import { Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";

export default function DataStreams() {
  const group = useRef();

  useFrame((state) => {
    group.current.rotation.y = state.clock.elapsedTime * 0.08;
  });

  const streams = useMemo(() => {
    return [...Array(18)].map((_, i) => {
      const angle = (i / 18) * Math.PI * 2;
      const r = 4 + Math.random();

      return [
        [Math.cos(angle) * r, -2, Math.sin(angle) * r],
        [Math.cos(angle) * r * 0.7, 0, Math.sin(angle) * r * 0.7],
        [Math.cos(angle) * r * 0.45, 2, Math.sin(angle) * r * 0.45],
      ];
    });
  }, []);

  return (
    <group ref={group}>
      {streams.map((points, i) => (
        <Line
          key={i}
          points={points}
          color={i % 2 ? "#6F93BF" : "#8b5cf6"}
          transparent
          opacity={0.08}
          lineWidth={1}
        />
      ))}
    </group>
  );
}