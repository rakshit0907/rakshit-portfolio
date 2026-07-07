const nodes = [
  { top: "22%", left: "60%" },
  { top: "38%", left: "72%" },
  { top: "58%", left: "64%" },
  { top: "72%", left: "80%" },
];

// Connect each node to the next one — reads as a traced network, not random dots
const connections = [
  [nodes[0], nodes[1]],
  [nodes[1], nodes[2]],
  [nodes[2], nodes[3]],
];

const toPercent = (v) => parseFloat(v);

export default function BlueprintNodes() {
  return (
    <>
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {connections.map(([a, b], i) => (
          <line
            key={i}
            x1={`${toPercent(a.left)}%`}
            y1={`${toPercent(a.top)}%`}
            x2={`${toPercent(b.left)}%`}
            y2={`${toPercent(b.top)}%`}
            stroke="white"
            strokeOpacity={0.08}
            strokeWidth={1}
          />
        ))}
      </svg>

      {nodes.map((node, index) => (
        <div
          key={index}
          className="absolute w-2 h-2 rounded-full border border-white/25 bg-[#050505]"
          style={node}
        />
      ))}
    </>
  );
}