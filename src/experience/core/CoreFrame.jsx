import { Line } from "@react-three/drei";

export default function CoreFrame() {
  const s = 2.4;

  const vertices = [
    [-s, -s, -s],
    [ s, -s, -s],
    [ s,  s, -s],
    [-s,  s, -s],

    [-s, -s,  s],
    [ s, -s,  s],
    [ s,  s,  s],
    [-s,  s,  s],
  ];

  const edges = [
    [0,1],[1,2],[2,3],[3,0],
    [4,5],[5,6],[6,7],[7,4],
    [0,4],[1,5],[2,6],[3,7],
  ];

  return (
    <group>

      {edges.map(([a,b], i)=>(
        <Line
          key={i}
          points={[
            vertices[a],
            vertices[b]
          ]}
          color="#d6d6d6"
          lineWidth={1}
        />
      ))}

    </group>
  );
}