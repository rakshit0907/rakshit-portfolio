import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import HeroObject from "../core/HeroObject";
import Lights from "../lighting/Lights";
import Effects from "../postprocessing/Effects";

// Gives the hero object a soft, frame-rate independent response to the
// pointer and to scrolling. Uses refs only (no React state), so there are
// zero re-renders while it moves.
function SceneRig({ children }) {
  const group = useRef();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((_, delta) => {
    const g = group.current;
    if (!g) return;

    const progress = Math.min(window.scrollY / window.innerHeight, 1.5);

    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, mouse.current.x * 0.18, 3, delta);
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, mouse.current.y * 0.1, 3, delta);
    g.position.y = THREE.MathUtils.damp(g.position.y, progress * 1.1, 4, delta);

    const s = 1 - Math.min(progress, 1) * 0.12;
    g.scale.setScalar(THREE.MathUtils.damp(g.scale.x, s, 4, delta));
  });

  return <group ref={group}>{children}</group>;
}

export default function Scene() {
  return (
    <>
      <color attach="background" args={["#050505"]} />

      <Lights />

      <group position={[3, 0.05, 0]} scale={1.08}>
        <SceneRig>
          <HeroObject />
        </SceneRig>
      </group>

      <Effects />
    </>
  );
}
