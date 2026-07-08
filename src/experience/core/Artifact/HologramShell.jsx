import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function HologramShell() {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.y -= 0.004;
    ref.current.rotation.x += 0.002;

    ref.current.material.opacity =
      0.12 +
      Math.sin(state.clock.elapsedTime * 2) *
        0.04;
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.8, 2]} />
      <meshBasicMaterial
        wireframe
        color="#8EC8FF"
        transparent
        opacity={0.12}
      />
    </mesh>
  );
}