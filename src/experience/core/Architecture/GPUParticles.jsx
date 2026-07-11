import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function GPUParticles() {
  const ref = useRef();
  const positions = useRef(null);

  if (!positions.current) {
    const arr = new Float32Array(2500 * 3);

    for (let i = 0; i < 2500; i++) {
      const r = 3 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = (Math.random() - 0.5) * 7;
      arr[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }

    positions.current = arr;
  }

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.y += 0.0007;
    ref.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
  });

  return (
    <Points
      ref={ref}
      positions={positions.current}
      stride={3}
    >
      <PointMaterial
        transparent
        color="#7DA2FF"
        size={0.025}
        sizeAttenuation
        depthWrite={false}
        opacity={0.9}
      />
    </Points>
  );
}