import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function BackgroundParticles() {
  const ref = useRef();

  const { positions, colors } = useMemo(() => {
    const count = 1800;

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 36;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;

      const r = Math.random();

      // Warm Gold
      if (r > 0.975) {
        colors[i * 3] = 1.0;
        colors[i * 3 + 1] = 0.88;
        colors[i * 3 + 2] = 0.60;
      }
      // Soft Blue
      else if (r > 0.94) {
        colors[i * 3] = 0.70;
        colors[i * 3 + 1] = 0.84;
        colors[i * 3 + 2] = 1.0;
      }
      // White
      else {
        colors[i * 3] = 1;
        colors[i * 3 + 1] = 1;
        colors[i * 3 + 2] = 1;
      }
    }

    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (!ref.current) return;

    const t = state.clock.elapsedTime;

    ref.current.rotation.y = t * 0.006;
    ref.current.rotation.x =
      Math.sin(t * 0.08) * 0.01;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />

        <bufferAttribute
          attach="attributes-color"
          array={colors}
          count={colors.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        vertexColors
        size={0.03}
        sizeAttenuation
        transparent
        opacity={0.35}
        depthWrite={false}
      />
    </points>
  );
}