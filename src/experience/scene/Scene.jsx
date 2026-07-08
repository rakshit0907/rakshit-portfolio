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

import useScrollProgress from "../../hooks/useScrollProgress";

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
        <ArchitectureGrid />
        <LightColumns />
        <group position={[2.8, 0.4, 0]}>
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