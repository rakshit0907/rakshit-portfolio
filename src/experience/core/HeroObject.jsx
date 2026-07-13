import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Line } from "@react-three/drei";

export default function HeroObject() {
  const cage = useRef();
  const ring = useRef();
  const core = useRef();
  const nucleus = useRef();

  const { nodePositions, edges } = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1.9, 3);
    const posAttr = geo.attributes.position;
    const seen = new Map();
    const nodes = [];
    const edgeSet = new Set();
    const edgeList = [];

    const vertexAt = (i) => new THREE.Vector3().fromBufferAttribute(posAttr, i);
    const keyOf = (v) => `${v.x.toFixed(3)}_${v.y.toFixed(3)}_${v.z.toFixed(3)}`;

    for (let i = 0; i < posAttr.count; i += 3) {
      const triNodeIdx = [i, i + 1, i + 2].map((vi) => {
        const v = vertexAt(vi);
        const key = keyOf(v);
        if (!seen.has(key)) {
          seen.set(key, nodes.length);
          nodes.push(v);
        }
        return seen.get(key);
      });

      for (let j = 0; j < 3; j++) {
        const a = triNodeIdx[j], b = triNodeIdx[(j + 1) % 3];
        const edgeKey = a < b ? `${a}-${b}` : `${b}-${a}`;
        if (!edgeSet.has(edgeKey)) {
          edgeSet.add(edgeKey);
          edgeList.push([nodes[a].toArray(), nodes[b].toArray()]);
        }
      }
    }

    return { nodePositions: nodes, edges: edgeList };
  }, []);

  useFrame((state, delta) => {
    if (cage.current) cage.current.rotation.y += delta * 0.05;
    if (ring.current) ring.current.rotation.z += delta * 0.09;
    if (nucleus.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.4) * 0.06;
      nucleus.current.scale.setScalar(pulse);
    }
  });

  return (
    <group>

      <group ref={cage}>
        {edges.map((points, i) => (
          <Line key={i} points={points} color="#c9ccd1" transparent opacity={0.18} lineWidth={0.5} />
        ))}
        {nodePositions.map((p, i) => (
          <mesh key={i} position={p}>
            <sphereGeometry args={[0.014, 8, 8]} />
            <meshBasicMaterial color="#e8c9a0" />
          </mesh>
        ))}
      </group>

      <group ref={ring} rotation={[0.5, 0.3, 0.9]}>
        <mesh>
          <torusGeometry args={[1.3, 0.01, 16, 120]} />
          <meshBasicMaterial color="#f4f2ee" />
        </mesh>
      </group>

      <mesh>
        <sphereGeometry args={[1.05, 64, 64]} />
        <meshPhysicalMaterial
          color="#0d0e10"
          roughness={0.15}
          metalness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transmission={0.15}
          transparent
          opacity={0.9}
        />
      </mesh>

      <mesh position={[0.55, 0.35, 0.75]}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshBasicMaterial color="#e8b978" />
      </mesh>
      <mesh position={[-0.3, -0.5, 0.85]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color="#d99b52" />
      </mesh>

      <mesh ref={nucleus}>
        <sphereGeometry args={[0.12, 32, 32]} />
        <meshBasicMaterial color="#fff4e0" />
      </mesh>

    </group>
  );
}