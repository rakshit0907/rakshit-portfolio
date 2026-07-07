import { Line } from "@react-three/drei";

const p = 2.4;

// Braces connecting adjacent columns at top and bottom — perimeter, not diagonal
const braces = [
  [[-p,-p,-p],[p,-p,-p]], [[p,-p,-p],[p,-p,p]],
  [[p,-p,p],[-p,-p,p]], [[-p,-p,p],[-p,-p,-p]],
  [[-p,p,-p],[p,p,-p]], [[p,p,-p],[p,p,p]],
  [[p,p,p],[-p,p,p]], [[-p,p,p],[-p,p,-p]],
];

export default function CoreConnections() {
  return (
    <group>
      {braces.map((points, i) => (
        <Line key={i} points={points} color="#7f7f7f" lineWidth={0.6} dashed dashSize={0.15} gapSize={0.1} />
      ))}
    </group>
  );
}