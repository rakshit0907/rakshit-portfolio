import RevealPanel from "../components/RevealPanel";

export default function AboutPreview() {
  return (
    <section
      className="
      min-h-screen
      flex
      items-center
      px-8
      "
    >
      <div className="max-w-6xl mx-auto w-full">
        <RevealPanel
          title="About Me"
          description="
          I build immersive web experiences
          using React, Three.js, motion design,
          and modern frontend technologies.
          "
        />
      </div>
    </section>
  );
}