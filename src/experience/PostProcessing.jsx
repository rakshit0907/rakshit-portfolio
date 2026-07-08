import {
  EffectComposer,
  Bloom,
  Vignette,
  Noise,
  ChromaticAberration,
} from "@react-three/postprocessing";

import { BlendFunction } from "postprocessing";

export default function PostProcessing() {
  return (
    <EffectComposer>

      <Bloom
        intensity={1.4}
        luminanceThreshold={0.15}
        luminanceSmoothing={0.9}
      />

      <ChromaticAberration
        blendFunction={BlendFunction.NORMAL}
        offset={[0.0006, 0.0006]}
      />

      <Noise
        opacity={0.02}
      />

      <Vignette
        eskil={false}
        offset={0.28}
        darkness={0.75}
      />

    </EffectComposer>
  );
}