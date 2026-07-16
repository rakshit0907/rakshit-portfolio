import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import useMousePosition from "../../../hooks/useMousePosition";

export default function ArtifactGroup({ children }) {
  const ref = useRef();
  const mouse = useMousePosition();

  useFrame(({ clock }) => {
    if (!ref.current) return;

    const t = clock.elapsedTime;

    // -------------------
    // Floating
    // -------------------

    const targetY =
      Math.sin(t * 0.65) * 0.12 +
      Math.cos(t * 0.35) * 0.04;

    ref.current.position.y = THREE.MathUtils.lerp(
      ref.current.position.y,
      targetY,
      0.03
    );

    // -------------------
    // Mouse translation
    // -------------------

    ref.current.position.x = THREE.MathUtils.lerp(
      ref.current.position.x,
      4.1 + mouse.x * 0.45,
      0.025
    );

    ref.current.position.z = THREE.MathUtils.lerp(
      ref.current.position.z,
      mouse.y * 0.25,
      0.025
    );

    // -------------------
    // Mouse rotation
    // -------------------

    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      mouse.y * 0.22,
      0.03
    );

    ref.current.rotation.z = THREE.MathUtils.lerp(
      ref.current.rotation.z,
      -mouse.x * 0.22,
      0.03
    );

    // -------------------
    // Idle rotation
    // -------------------

    ref.current.rotation.y += 0.0015;

    // -------------------
    // Breathing
    // -------------------

    const s =
      1 +
      Math.sin(t * 1.1) * 0.018 +
      Math.sin(t * 2.3) * 0.004;

    ref.current.scale.lerp(
      new THREE.Vector3(s, s, s),
      0.05
    );
  });

  return (
    <group
      ref={ref}
      position={[4.1, 0, 0]}
    >
      {children}
    </group>
  );
}