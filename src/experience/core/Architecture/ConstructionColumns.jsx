import { Line } from "@react-three/drei";

const p = 2.4;

// Four vertical columns, one per corner — joints (CoreJoints) sit at their tops/bottoms
const columns = [
  [[-p, -p, -p], [-p, p, -p]],
  [[ p, -p, -p], [ p, p, -p]],
  [[-p, -p,  p], [-p, p,  p]],
  [[ p, -p,  p], [ p, p,  p]],
];

export default function ConstructionColumns() {
  return (
    <group>
      {columns.map((points, i) => (
        <Line
          key={i}
          points={points}
          color="#9fb7cf"
          transparent
          opacity={0.3}
          lineWidth={1}
        />
      ))}
    </group>
  );
}