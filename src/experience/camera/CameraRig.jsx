import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function CameraRig({ children }) {

  const group = useRef();

  useFrame((state)=>{
    if (!group.current) return;
    const t = state.clock.elapsedTime;

    group.current.rotation.y = t * 0.12;
    group.current.rotation.x = Math.sin(t * 0.4) * 0.08;

  });

  return (

    <group ref={group}>

      {children}

    </group>

  );

}