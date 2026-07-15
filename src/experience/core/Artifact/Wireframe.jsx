import { useMemo } from "react";
import * as THREE from "three";
import { Line } from "@react-three/drei";

export default function Wireframe({ cageRef }) {
  const { nodes, edges } = useMemo(() => {
    // Slightly smaller cage
    const geo = new THREE.IcosahedronGeometry(1.75, 2);

    const pos = geo.attributes.position;

    const map = new Map();
    const nodes = [];
    const edges = [];
    const edgeSet = new Set();

    const getVertex = (i) =>
      new THREE.Vector3().fromBufferAttribute(pos, i);

    const key = (v) =>
      `${v.x.toFixed(3)}_${v.y.toFixed(3)}_${v.z.toFixed(3)}`;

    for (let i = 0; i < pos.count; i += 3) {
      const tri = [];

      for (let j = 0; j < 3; j++) {
        const v = getVertex(i + j);
        const k = key(v);

        if (!map.has(k)) {
          map.set(k, nodes.length);
          nodes.push(v);
        }

        tri.push(map.get(k));
      }

      for (let j = 0; j < 3; j++) {
        const a = tri[j];
        const b = tri[(j + 1) % 3];

        const edge = a < b ? `${a}-${b}` : `${b}-${a}`;

        if (!edgeSet.has(edge)) {
          edgeSet.add(edge);

          edges.push([
            nodes[a].toArray(),
            nodes[b].toArray(),
          ]);
        }
      }
    }

    return { nodes, edges };
  }, []);

  return (
    <group ref={cageRef}>
      {edges.map((points, i) => (
        <Line
          key={i}
          points={points}
          color="#88847d"
          transparent
          opacity={0.12}
          lineWidth={1}
        />
      ))}

      {nodes
        .filter((_, i) => i % 2 === 0)
        .map((p, i) => (
          <mesh key={i} position={p}>
            <sphereGeometry args={[0.011, 8, 8]} />
            <meshBasicMaterial
              color="#efe0b0"
              transparent
              opacity={0.8}
            />
          </mesh>
        ))}
    </group>
  );
}