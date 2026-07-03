export default function HeroBackground() {
  return (
    <>
      {/* Base background */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Violet glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-[180px]
          opacity-20
          bg-violet-600
        "
      />

      {/* Cyan glow */}
      <div
        className="
          absolute
          right-[-10%]
          top-[20%]
          h-[500px]
          w-[500px]
          rounded-full
          blur-[180px]
          opacity-10
          bg-cyan-500
        "
      />

      {/* Vignette */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-[radial-gradient(circle_at_center,transparent_40%,#050505_100%)]
        "
      />
    </>
  );
}