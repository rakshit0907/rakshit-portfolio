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
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />
    </>
  );
}