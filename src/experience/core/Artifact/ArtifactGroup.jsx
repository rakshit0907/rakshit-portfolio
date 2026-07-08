import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import useMousePosition from "../../../hooks/useMousePosition";

export default function ArtifactGroup({ children, activeSection = "hero", }) {
  const ref = useRef();
  const mouse = useMousePosition();
  const scales = {
    hero: 1,
    about: 0.82,
    projects: 1.25,
    contact: 0.75,
};
  const transforms = {
  hero: {
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: 1,
  },

  about: {
    position: [-0.4, 0.25, 0],
    rotation: [0.3, 0.4, 0],
    scale: 0.82,
  },

  projects: {
    position: [0.55, -0.2, 0],
    rotation: [0.2, 1.1, 0],
    scale: 1.35,
  },

  contact: {
    position: [0, 0.45, 0],
    rotation: [0.5, 2.2, 0],
    scale: 0.72,
  },
};
 useFrame((state) => {
  if (!ref.current) return;

  const t = state.clock.elapsedTime;

  const target = transforms[activeSection];

  ref.current.position.x = THREE.MathUtils.lerp(
    ref.current.position.x,
    target.position[0] + mouse.x * 0.55,
    0.025
  );

  ref.current.position.y = THREE.MathUtils.lerp(
    ref.current.position.y,
    target.position[1] + Math.sin(t * 0.8) * 0.15 + mouse.y * 0.3,
    0.025
  );

  ref.current.position.z = THREE.MathUtils.lerp(
    ref.current.position.z,
    target.position[2],
    0.025
  );

  ref.current.rotation.x = THREE.MathUtils.lerp(
    ref.current.rotation.x,
    target.rotation[0] + mouse.y * 0.4,
    0.025
  );

  ref.current.rotation.y = THREE.MathUtils.lerp(
    ref.current.rotation.y,
    target.rotation[1] + t * 0.15,
    0.025
  );

  ref.current.rotation.z = THREE.MathUtils.lerp(
    ref.current.rotation.z,
    target.rotation[2] - mouse.x * 0.35,
    0.025
  );

  const scale = THREE.MathUtils.lerp(
    ref.current.scale.x,
    target.scale,
    0.025
  );

  ref.current.scale.set(scale, scale, scale);
});
  return <group ref={ref}>{children}</group>;
}