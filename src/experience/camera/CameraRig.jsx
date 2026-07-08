import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const positions = {
  hero: new THREE.Vector3(0, 0, 0),
  about: new THREE.Vector3(-0.8, 0.2, -0.2),
  projects: new THREE.Vector3(0.8, -0.2, 0.3),
  contact: new THREE.Vector3(0, 0.35, 0.2),
};

export default function CameraRig({
  children,
  scrollProgress = 0,
  activeSection = "hero",
}) {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    const t = state.clock.elapsedTime;

    const target =
      positions[activeSection] ??
      positions.hero;

    group.current.position.lerp(target, 0.04);

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      t * 0.08 + scrollProgress * 0.6,
      0.04
    );

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.sin(t * 0.35) * 0.05,
      0.04
    );

    group.current.position.x +=
      Math.sin(t * 0.2) * 0.003;

    group.current.position.y +=
      Math.cos(t * 0.25) * 0.002;

    group.current.position.z +=
      Math.sin(t * 0.15) * 0.0015;
  });

  return <group ref={group}>{children}</group>;
}