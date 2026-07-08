export default function ChapterFrame({ children, index, label, className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="flex justify-between items-center mb-12 font-mono text-[10px] uppercase tracking-[0.4em]"
        style={{ color: "var(--text-muted)" }}
      >
        <span>SEC.{String(index).padStart(3, "0")} / {label}</span>
        <span>SCALE 1:100</span>
      </div>

      {["top-0 left-0 border-t border-l", "top-0 right-0 border-t border-r", "bottom-0 left-0 border-b border-l", "bottom-0 right-0 border-b border-r"].map((pos, i) => (
        <div key={i} className={`absolute w-6 h-6 ${pos} pointer-events-none`} style={{ borderColor: "var(--border-light)" }} />
      ))}

      {children}
    </div>
  );
}