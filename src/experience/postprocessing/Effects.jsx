import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";

// Noise (0.015 opacity) and ChromaticAberration (0.00018 offset) were each
// adding a full-screen pass for an effect too faint to see. Bloom + Vignette
// carry the look; dropping the other two frees GPU time on every frame.
export default function Effects() {
  return (
    <EffectComposer multisampling={4}>
      <Bloom
        intensity={0.32}
        luminanceThreshold={0.72}
        luminanceSmoothing={0.85}
        mipmapBlur
      />

      <Vignette eskil={false} offset={0.25} darkness={0.62} />
    </EffectComposer>
  );
}
