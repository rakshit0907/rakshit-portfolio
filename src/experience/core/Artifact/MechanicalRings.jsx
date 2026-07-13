import { Torus } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function MechanicalRings() {
    const ring1 = useRef();
    const ring2 = useRef();
    const ring3 = useRef();
    useFrame(() => {
        if (ring1.current) ring1.current.rotation.y += 0.002;
        if (ring2.current) ring2.current.rotation.x -= 0.0016;
        if (ring3.current) ring3.current.rotation.z += 0.0012;
    });

    return (
        <>
          <Torus
            ref={ring1}
            args={[1.45, 0.008, 24, 180]}
            rotation={[0, 0, 0]}
          >
            <meshBasicMaterial
              color="#8fbfff"
              transparent
              opacity={0.22}
            />    
            </Torus>

            <Torus
              ref={ring2}
              args={[1.72, 0.006, 24, 180]}
              rotation={[1.15, 0.5, 0]}
            >
              <meshBasicMaterial
                color="#5f84b8"
                transparent
                opacity={0.16}  
              />  
            </Torus>

            <Torus
              ref={ring3}
              args={[2.02, 0.005, 24, 100]}
              rotation={[0.4, 0, 1.2]}
            >
              <meshBasicMaterial
                color="#dceeff"
                transparent
                opacity={0.08}
              />  
            </Torus>    
        </>
    );
}