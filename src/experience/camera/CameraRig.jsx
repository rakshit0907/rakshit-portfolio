import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function CameraRig({
  children,
  scrollProgress,
}) {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    const t = state.clock.elapsedTime;

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      t * 0.08 + scrollProgress * 0.8,
      0.04
    );

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.sin(t * 0.4) * 0.08,
      0.04
    );

    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      Math.sin(t * 0.7) * 0.18,
      0.04
    );

    group.current.position.z = THREE.MathUtils.lerp(
      group.current.position.z,
      Math.sin(t * 0.5) * 0.25,
      0.04
    );
  });

  return (
    <group ref={group}>
      {children}
    </group>
  );
}