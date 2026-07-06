import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function CameraRig({ children }) {

  const group = useRef();

  useFrame((state)=>{

    group.current.rotation.y =
      state.clock.elapsedTime * 0.08;

  });

  return (

    <group ref={group}>

      {children}

    </group>

  );

}