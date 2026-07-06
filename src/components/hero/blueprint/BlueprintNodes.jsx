const nodes = [
  { top: "22%", left: "60%" },
  { top: "38%", left: "72%" },
  { top: "58%", left: "64%" },
  { top: "72%", left: "80%" },
];

export default function BlueprintNodes() {
  return (
    <>
      {nodes.map((node, index) => (
        <div
          key={index}
          className="
            absolute
            w-2
            h-2
            rounded-full
            border
            border-white/25
            bg-[#050505]
          "
          style={node}
        />
      ))}
    </>
  );
}