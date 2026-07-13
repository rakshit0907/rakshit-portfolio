import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function HologramShell() {
  const shell1 = useRef();
  const shell2 = useRef();
  const shell3 = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (shell1.current) {
      shell1.current.rotation.y += 0.0015;
      shell1.current.rotation.x += 0.0008;

      shell1.current.material.opacity =
        0.08 + Math.sin(t * 1.8) * 0.015;
    }

    if (shell2.current) {
      shell2.current.rotation.y -= 0.0024;
      shell2.current.rotation.z += 0.0012;

      shell2.current.material.opacity =
        0.06 + Math.cos(t * 2.2) * 0.015;
    }

    if (shell3.current) {
      shell3.current.rotation.x -= 0.0018;
      shell3.current.rotation.y += 0.001;

      shell3.current.material.opacity =
        0.04 + Math.sin(t * 3.1) * 0.01;
    }
  });

  return (
    <group>

      {/* Outer Shell */}
      <mesh ref={shell1}>
        <icosahedronGeometry args={[1.78, 2]} />
        <meshBasicMaterial
          wireframe
          color="#86A9D4"
          transparent
          opacity={0.05}
        />
      </mesh>

      {/* Middle Shell */}
      <mesh ref={shell2} scale={1.12}>
        <icosahedronGeometry args={[1.62, 1]} />
        <meshBasicMaterial
          wireframe
          color="#5F87B8"
          transparent
          opacity={0.04}
        />
      </mesh>

      {/* Inner Shell */}
      <mesh ref={shell3} scale={0.88}>
        <icosahedronGeometry args={[1.95, 1]} />
        <meshBasicMaterial
          wireframe
          color="#C8E8FF"
          transparent
          opacity={0.03}
        />
      </mesh>

    </group>
  );
}