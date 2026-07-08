export default function GridOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
        maskImage:
          "radial-gradient(circle at center, black 45%, transparent 100%)",
      }}
    />
  );
}