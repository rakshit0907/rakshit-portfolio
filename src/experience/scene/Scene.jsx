import Lights from "../lighting/Lights";
import CentralCore from "../core/Architecture/CentralCore";
import OrbitRings from "../core/Architecture/OrbitRings";
import EnergyLines from "../core/Architecture/EnergyLines";
import FloatingPanels from "../core/Architecture/FloatingPanels";
import Background from "../atmosphere/Background";
import GradientFog from "../atmosphere/GradientFog";
import FloatingGlow from "../atmosphere/FloatingGlow";
import BackgroundParticles from "../atmosphere/BackgroundParticles";
import VignettePlane from "../atmosphere/VignettePlane";

import Artifact from "../core/Artifact/Artifact";

import BlueprintAxes from "../core/Architecture/BlueprintAxes";
import HolographicFrames from "../core/Architecture/HolographicFrames";
import LightBeams from "../core/Architecture/LightBeams";

import Effects from "../postprocessing/Effects";

export default function Scene() {
  return (
    <>
      <color attach="background" args={["#050505"]} />

      <Lights />
      <Background />
      <GradientFog />
      <FloatingGlow />
      <BackgroundParticles />
      <VignettePlane />

      {/* Hero Environment */}
      <BlueprintAxes />
      <HolographicFrames />
      <LightBeams />
     {/* <CentralCore />
      <OrbitRings />
      <EnergyLines />
      <FloatingPanels /> */}

      {/* Centerpiece */}
      <group position={[0, 0, 0]}>
        <Artifact activeSection="hero" />
      </group>

      <Effects />
    </>
  );
}