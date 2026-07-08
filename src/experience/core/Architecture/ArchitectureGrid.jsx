import { Grid } from "@react-three/drei";

export default function ArchitectureGrid() {
  return (
    <Grid
      position={[0, -2.2, 0]}
      args={[120, 120]}
      cellSize={0.6}
      cellThickness={0.25}
      cellColor="#1f2937"
      sectionSize={6}
      sectionThickness={1}
      sectionColor="#6F93BF"
      fadeDistance={70}
      fadeStrength={1}
      infiniteGrid
    />
  );
}