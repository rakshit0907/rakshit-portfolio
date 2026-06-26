import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Satellites() {
    const group = useRef();
    useFrame((state) => {
        if (!group.current) return;
        const t = state.clock.elapsedTime;
        group.current.rotation.y = t * 0.4;
        group.current.children.forEach((satellite, i) => {
            satellite.position.y = 
              Math.sin(t * 2 + i) * 0.15;
        });
    });
    return (
        <group ref={group}>
            {[0, 1, 2, 3].map((i) =>{
                const angle = (i / 4) * Math.PI * 2;

                return (
                    <mesh
                      key={i}
                      position={[
                        Math.cos(angle) * 2.8, 0,
                        Math.sin(angle) * 2.8,
                      ]}
                    >
                        <sphereGeometry args={[0.08, 32, 32]} />
                        <meshStandardMaterial
                          color="#22D3EE"
                          emissive="#22D3EE"
                          emissiveIntensity={2}
                          />
                    </mesh>
                );
            })}
        </group>
    );
    
}