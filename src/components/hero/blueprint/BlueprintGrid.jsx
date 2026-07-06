export default function BlueprintGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Horizontal Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              to bottom,
              transparent 0px,
              transparent 59px,
              rgba(255,255,255,0.15) 60px
            )
          `,
        }}
      />

      {/* Vertical Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              to right,
              transparent 0px,
              transparent 59px,
              rgba(255,255,255,0.15) 60px
            )
          `,
        }}
      />

    </div>
  );
}