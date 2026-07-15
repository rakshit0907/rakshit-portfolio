import HeroObject from "../core/HeroObject";
import Lights from "../lighting/Lights";
import Effects from "../postprocessing/Effects";

import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function Scene() {
  return (
    <>
      <color attach="background" args={["#050505"]} />

      <Lights />

      {/* Background Atmosphere */}
      

      {/* Hero */}
      <group
        position={[3, 0.05, 0]}
        scale={1.08}
      >
        <HeroObject />
      </group>
      <Effects />

      {/* Post Processing */}
      <EffectComposer>
        <Bloom
          intensity={0.35}
          luminanceThreshold={0.6}
          mipmapBlur
        />
      </EffectComposer>
    </>
  );
}