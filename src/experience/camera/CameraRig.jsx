import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function CameraRig({ children, scrollProgress = 0 }) {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;

    // Ambient idle drift — always present, subtle
    const idleY = Math.sin(t * 0.12) * 0.06;
    const idleX = Math.sin(t * 0.08) * 0.02;
    const idleFloat = Math.sin(t * 0.18) * 0.08;

    // Scroll-driven — the structure turns and pulls back as you move through the page
    const scrollRotY = scrollProgress * Math.PI * 0.5;   // quarter turn across the whole site
    const scrollZ = scrollProgress * 4;                  // dolly back
    const scrollX = Math.sin(scrollProgress * Math.PI) * 0.3;

    group.current.rotation.y = idleY + scrollRotY;
    group.current.rotation.x = idleX;
    group.current.position.y = idleFloat;
    group.current.position.z = scrollZ;
    group.current.position.x = scrollX;
  });

  return <group ref={group}>{children}</group>;
}