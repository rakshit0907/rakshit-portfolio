export default function AboutBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      <div
        className="
          absolute
          left-1/2
          top-40
          -translate-x-1/2
          w-[900px]
          h-[900px]
          rounded-full
          bg-violet-500/10
          blur-[180px]
        "
      />

      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          bg-[linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

    </div>
  );
}