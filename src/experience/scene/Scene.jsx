import CameraRig from "../camera/CameraRig";
import Lights from "../lighting/Lights";
import EnergyLines from "../core/Architecture/EnergyLines";
import Background from "../atmosphere/Background";
import FloatingGlow from "../atmosphere/FloatingGlow";
import GradientFog from "../atmosphere/GradientFog";
import ArchitectureGrid from "../core/Architecture/ArchitectureGrid";
import LightColumns from "../core/Architecture/LightColumns";
import CentralCore from "../core/Architecture/CentralCore";
import OrbitRings from "../core/Architecture/OrbitRings";
import FloatingPanels from "../core/Architecture/FloatingPanels";
import HolographicFrames from "../core/Architecture/HolographicFrames";
import OrbitNodes from "../core/Architecture/OrbitNodes";
import useScrollProgress from "../../hooks/useScrollProgress";
import DataStreams from "../core/Architecture/DataStreams";
import ConstructionNodes from "../core/Architecture/ConstructionNodes";
import ScanRings from "../core/Architecture/ScanRings";
import HexField from "../core/Architecture/HexField";
import BlueprintAxes from "../core/Architecture/BlueprintAxes";
import EnergyPulse from "../core/Architecture/EnergyPulse";
import MouseField from "../core/Architecture/MouseField";
import ScrollField from "../core/Architecture/ScrollField";
import LightBeams from "../core/Architecture/LightBeams";
import FloatingScreens from "../core/Architecture/FloatingScreens";
import EnergyTrails from "../core/Architecture/EnergyTrails";
import FloatingTechIcons from "../core/Architecture/FloatingTechIcons";
import GPUParticles from "../core/Architecture/GPUParticles";
import ScanSweep from "../core/Architecture/ScanSweep";
import DataPillars from "../core/Architecture/DataPillars";
import useActiveSection from "../../hooks/useActiveSection";
import TechCloud from "../atmosphere/TechCloud";
import BackgroundParticles from "../atmosphere/BackgroundParticles";
import VignettePlane from "../atmosphere/VignettePlane";
import FloatingIcons from "../atmosphere/FloatingIcons";
import Artifact from "../core/Artifact/Artifact";
import Instrument from "../core/Instrument";
import Effects from "../postprocessing/Effects";
import Core from "../core/Core";
export default function Scene() {
  const scrollProgress = useScrollProgress();
  const activeSection = useActiveSection();

  return (
    <>
      <color attach="background" args={["#050505"]} />

      <Lights activeSection={activeSection} />
      <Background />
      <GradientFog />
      <VignettePlane />
      <FloatingGlow />
      <TechCloud />
      <BackgroundParticles />
      {/*  <FloatingIcons /> */} 
      <CameraRig 
          scrollProgress={scrollProgress}
          activeSection={activeSection}
      >
      <Artifact 
          activeSection={activeSection}
      />
      <Core />
      <Instrument />

      {/* TEMP SANITY CHECK — bright green, zero lighting dependency */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshBasicMaterial color="lime" />
      </mesh>

      </CameraRig>
    </>
  );
}