import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function CameraRig({ children }) {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    const t = state.clock.elapsedTime;

    // Slow architectural drift
    group.current.rotation.y = Math.sin(t * 0.12) * 0.06;

    group.current.rotation.x = Math.sin(t * 0.08) * 0.02;

    group.current.position.y = Math.sin(t * 0.18) * 0.08;
  });

  return (
    <group ref={group}>
      {children}
    </group>
  );
}