import {
  EffectComposer,
  Bloom,
  Noise,
  Vignette,
  ChromaticAberration,
} from "@react-three/postprocessing";

import { BlendFunction } from "postprocessing";

export default function Effects() {
  return (
    <EffectComposer>

      <Bloom
        intensity={0.7}
        luminanceThreshold={0.45}
        luminanceSmoothing={0.95}
      />

      <Noise
        opacity={0.015}
        blendFunction={BlendFunction.SOFT_LIGHT}
      />

      <ChromaticAberration
        offset={[0.00018, 0.00018]}
      />

      <Vignette
        eskil={false}
        offset={0.25}
        darkness={0.62}
      />

    </EffectComposer>
  );
}