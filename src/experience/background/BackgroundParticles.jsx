import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function BackgroundParticles() {
  const ref = useRef();

  const positions = useMemo(() => {
    const arr = new Float32Array(600 * 3);

    for (let i = 0; i < 600; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 40;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 25;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }

    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.y = state.clock.elapsedTime * 0.01;
    ref.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.1) * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#ffffff"
        size={0.035}
        sizeAttenuation
        transparent
        opacity={0.4}
        depthWrite={false}
      />
    </points>
  );
}