import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Particles() {
  const points = useRef();

  useFrame((state) => {
    if (!points.current) return;

    points.current.rotation.y =
      state.clock.elapsedTime * 0.03;
  });

  const particles = [];

  for (let i = 0; i < 800; i++) {
    particles.push(
      (Math.random() - 0.5) * 30,
      (Math.random() - 0.5) * 30,
      (Math.random() - 0.5) * 30
    );
  }

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={new Float32Array(particles)}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.03}
        sizeAttenuation
      />
    </points>
  );
}