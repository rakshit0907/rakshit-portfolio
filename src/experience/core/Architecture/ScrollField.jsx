import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function ScrollField({ progress = 0, children }) {
  const group = useRef();

  useFrame(() => {
    if (!group.current) return;

    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      -progress * 2.5,
      0.05
    );

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      progress * Math.PI * 0.8,
      0.05
    );

    const scale = 1 + progress * 0.35;

    group.current.scale.lerp(
      new THREE.Vector3(scale, scale, scale),
      0.05
    );
  });

  return <group ref={group}>{children}</group>;
}