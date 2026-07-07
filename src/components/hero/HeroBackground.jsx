export default function HeroBackground() {
  return (
    <>
      {/* Base */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Subtle radial light */}
      <div
        className="
          absolute
          inset-0
          opacity-40
        "
        style={{
          background:
            "radial-gradient(circle at 70% 40%, rgba(255,255,255,0.06), transparent 55%)",
        }}
      />

      {/* Noise Overlay */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
          mix-blend-screen
        "
        style={{
          backgroundImage:
            `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </>
  );
}