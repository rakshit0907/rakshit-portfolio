import {
  EffectComposer,
  Bloom,
  Vignette,
  Noise,
  ChromaticAberration,
} from "@react-three/postprocessing";

import { BlendFunction } from "postprocessing";

export default function Effects() {
  return (
    <EffectComposer>

      <Bloom
        intensity={1.6}
        luminanceThreshold={0.2}
        luminanceSmoothing={0.8}
      />

      <Noise
        opacity={0.03}
        blendFunction={BlendFunction.SOFT_LIGHT}
      />

      <ChromaticAberration
        offset={[0.0005, 0.0005]}
      />

      <Vignette
        eskil={false}
        offset={0.22}
        darkness={0.75}
      />

    </EffectComposer>
  );
}