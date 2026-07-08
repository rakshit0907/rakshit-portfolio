export default function NoiseOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none opacity-[0.025] mix-blend-soft-light z-[2]"
      style={{
        backgroundImage:
          "url('https://grainy-gradients.vercel.app/noise.svg')",
      }}
    />
  );
}