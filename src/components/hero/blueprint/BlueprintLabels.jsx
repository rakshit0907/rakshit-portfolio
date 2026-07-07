const labels = ["MODULE A", "ENGINE", "NETWORK", "FRAME", "NODE", "SYSTEM"];

export default function BlueprintLabels() {
  return (
    <>
      {labels.map((label, index) => (
        <div
          key={label}
          className="absolute text-[10px] uppercase tracking-[0.45em] text-white/15"
          style={{
            top: `${18 + index * 12}%`,
            right: "10%",
          }}
        >
          {label}
        </div>
      ))}
    </>
  );
}