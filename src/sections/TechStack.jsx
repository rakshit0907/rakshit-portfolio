import { techStack } from "../data/techStack";

export default function TechStack() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden py-40">

      <div className="max-w-7xl mx-auto px-10">

        <p className="uppercase tracking-[0.4em] text-violet-400 mb-8">
          Tech Stack
        </p>

        <h2 className="text-7xl font-black mb-24">
          Technologies
          <br />
          I Work With.
        </h2>

        <div className="flex flex-wrap justify-center gap-8">

          {techStack.map((item) => (
  <div
    key={item.name}
    className="
      px-8
      py-5
      rounded-3xl
      border
      border-zinc-800
      bg-white/5
      backdrop-blur-xl
      text-xl
      hover:border-violet-500
      transition-all
      duration-500
      cursor-default
      flex
      items-center
      gap-3
    "
  >
    <span
      className="text-2xl"
      style={{ color: item.color }}
    >
      {item.icon}
    </span>

    <span>{item.name}</span>
  </div>
))}
        </div>

      </div>

    </section>
  );
}