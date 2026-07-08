import { AdditiveBlending } from "three";
import { useMemo } from "react";

export default function LightBeams() {
  const beams = useMemo(() => {
    return [...Array(10)].map((_, i) => ({
      x: (i - 5) * 1.8,
      z: Math.sin(i * 0.8) * 3,
      h: 7 + Math.random() * 5,
    }));
  }, []);

  return (
    <>
      {beams.map((beam, i) => (
        <mesh
          key={i}
          position={[beam.x, beam.h / 2 - 2, beam.z]}
        >
          <cylinderGeometry args={[0.08, 0.35, beam.h, 24, 1, true]} />

          <meshBasicMaterial
            color="#6F93BF"
            transparent
            opacity={0.08}
            depthWrite={false}
            blending={AdditiveBlending}
          />
        </mesh>
      ))}
    </>
  );
}