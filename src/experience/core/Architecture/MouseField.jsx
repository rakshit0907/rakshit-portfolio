import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function MouseField({ children }) {
  const group = useRef();
  const { mouse } = useThree();

  useFrame(() => {
    if (!group.current) return;

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      mouse.x * 0.35,
      0.05
    );

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -mouse.y * 0.18,
      0.05
    );

    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      mouse.x * 0.4,
      0.04
    );

    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      mouse.y * 0.2,
      0.04
    );
  });

  return <group ref={group}>{children}</group>;
}