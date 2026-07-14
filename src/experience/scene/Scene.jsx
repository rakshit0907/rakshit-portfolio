import HeroObject from "../core/HeroObject";
import Lights from "../lighting/Lights";

export default function Scene() {
  return (
    <>
      <color attach="background" args={["#050505"]} />

      <Lights />
    <group position={[1.35, 0.05, 0]}
      scale={0.88}
    >
      <HeroObject position={[1.5, 0.05, 0]} />
    </group>  
    </>
  );
}