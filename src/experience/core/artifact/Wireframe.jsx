import { useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";

// Previously this rendered every edge as its own drei <Line> (~270 separate
// objects/materials) plus ~45 individual sphere meshes = ~300 draw calls
// for a faint backdrop. It's now ONE LineSegments + ONE InstancedMesh.
export default function Wireframe({ cageRef }) {
  const nodesRef = useRef();

  const { edgeGeometry, nodes } = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1.75, 2);

    // WireframeGeometry de-duplicates shared edges for us.
    const edgeGeometry = new THREE.WireframeGeometry(geo);

    const pos = geo.attributes.position;
    const seen = new Set();
    const all = [];
    for (let i = 0; i < pos.count; i++) {
      const v = new THREE.Vector3().fromBufferAttribute(pos, i);
      const k = `${v.x.toFixed(3)}_${v.y.toFixed(3)}_${v.z.toFixed(3)}`;
      if (!seen.has(k)) {
        seen.add(k);
        all.push(v);
      }
    }

    geo.dispose();
    return { edgeGeometry, nodes: all.filter((_, i) => i % 2 === 0) };
  }, []);

  useLayoutEffect(() => {
    const mesh = nodesRef.current;
    if (!mesh) return;
    const m = new THREE.Matrix4();
    nodes.forEach((p, i) => {
      m.makeTranslation(p.x, p.y, p.z);
      mesh.setMatrixAt(i, m);
    });
    mesh.instanceMatrix.needsUpdate = true;
  }, [nodes]);

  return (
    <group ref={cageRef}>
      <lineSegments geometry={edgeGeometry}>
        <lineBasicMaterial color="#88847d" transparent opacity={0.16} />
      </lineSegments>

      <instancedMesh ref={nodesRef} args={[undefined, undefined, nodes.length]}>
        <sphereGeometry args={[0.011, 8, 8]} />
        <meshBasicMaterial color="#efe0b0" transparent opacity={0.8} />
      </instancedMesh>
    </group>
  );
}
