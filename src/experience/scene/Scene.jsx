import Lights from "../lighting/Lights";

import Background from "../atmosphere/Background";
import GradientFog from "../atmosphere/GradientFog";
import FloatingGlow from "../atmosphere/FloatingGlow";
import BackgroundParticles from "../atmosphere/BackgroundParticles";
import VignettePlane from "../atmosphere/VignettePlane";

import ProjectTechCloud from "../../components/projects/ProjectTechCloud";

import Artifact from "../core/Artifact/Artifact";
import BlueprintAxes from "../core/Architecture/BlueprintAxes";
import HolographicFrames from "../core/Architecture/HolographicFrames";
import LightBeams from "../core/Architecture/LightBeams";

import Effects from "../postprocessing/Effects";

export default function Scene() {
  // Temporary until section tracking is re-added
  const activeSection = "hero";

  return (
    <>
      <color attach="background" args={["#050505"]} />

      {/* Lighting */}
      <Lights />

      {/* Atmosphere */}
      <Background />
      <GradientFog />
      <FloatingGlow />
      <BackgroundParticles />
      <VignettePlane />

      {/* Hero Environment */}
      <BlueprintAxes />
      <HolographicFrames />
      <LightBeams />

      {/*
      <CentralCore />
      <OrbitRings />
      <EnergyLines />
      <FloatingPanels />
      */}

      {/* Centerpiece */}
      <group position={[0, 0, 0]}>
        <Artifact activeSection={activeSection} />

        {activeSection === "projects" && (
          <ProjectTechCloud />
        )}
      </group>

      {/* Post Processing */}
      <Effects />
    </>
  );
}