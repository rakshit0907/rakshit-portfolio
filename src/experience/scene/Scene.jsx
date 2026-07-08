import CameraRig from "../camera/CameraRig";
import Lights from "../lighting/Lights";
import EnergyLines from "../core/Architecture/EnergyLines";
import Particles from "../core/Architecture/Particles";
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
export default function Scene() {
  const scrollProgress = useScrollProgress();

  return (
    <>
      <color attach="background" args={["#050505"]} />

      <Lights />
      <Background />
      <GradientFog />
      <FloatingGlow />

      <CameraRig scrollProgress={scrollProgress}>
       <> 
       <HexField />
       <BlueprintAxes />
       <HolographicFrames />
       <OrbitNodes />
        <ArchitectureGrid />
        <LightColumns />
        <ConstructionNodes />
        <DataStreams />
        <group position={[2.8, 0.4, 0]}>
          <EnergyPulse />
          <ScanRings />
          <Particles/>
          <EnergyLines />
          <CentralCore />
          <OrbitRings />
          <FloatingPanels />
        </group>
       </>
      </CameraRig>
    </>
  );
}