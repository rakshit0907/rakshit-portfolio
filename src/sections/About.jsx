import useAboutAnimation from "../hooks/useAboutAnimation";
import AboutBackground from "../components/about/AboutBackground";
export default function About() {
  useAboutAnimation();
  return (
    <section
     id="about"
     className="relative min-h-screen bg-black text-white overflow-hidden">
      <AboutBackground />
      <div className="max-w-7xl mx-auto px-10 py-56">
        <p className="about-label uppercase tracking-[0.4em] text-violet-400 mb-8"></p>

        <h2 className="about-heading text-[72px] md:text-[110px] lg:text-[130px] font-black tracking-[-0.06em] leading-[0.88] max-w-6xl">
          BUILDING
          <br />
          SCALABLE DIGITAL
          <br />
          SOLUTIONS.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 items-center mt-32 gap-10">
          <div className="lg:col-span-5">
            <p className="about-text text-zinc-400 text-xl leading-10 max-w-md">
              I'm <span className="text-white font-medium">Rakshit Pandey</span>,
              a Computer Science student and Full-Stack Developer passionate
              about building scalable web applications and solving real-world
              problems. I specialize in React, Node.js, MongoDB, and modern web
              technologies, with a growing interest in cloud computing,
              artificial intelligence, and system design.
              <br />
              <br />
              I'm currently developing a multi-tenant SaaS platform, exploring
              AI-powered applications, and continuously improving my skills
              through hackathons, open-source contributions, and hands-on
              projects.
            </p>
          </div>

          <div className="lg:col-span-7 flex justify-end">
            <div
              className="about-card w-full max-w-[440px] h-[540px] rounded-[36px]
                         border
                         border-zinc-800
                         bg-gradient-to-b
                         from-zinc-900
                         to-black
                         backdrop-blur-xl
                         p-10
                         relative
                         overflow-hidden
                         "
            >
            
  <div className="absolute top-0 left-0 w-full h-px bg-violet-500/60" />

  <div className="mt-10">

    <p className="text-zinc-500 uppercase tracking-[0.35em] text-xs">
      Currently
    </p>

    <h3 className="text-3xl font-bold mt-5">
      Building immersive
      web experiences.
    </h3>

    <p className="mt-8 text-zinc-400 leading-8">
      Passionate about React,
      Three.js, GSAP,
      AI and modern frontend
      engineering.
    </p>

  </div>  
              {/* Add your profile image, 3D model, or animated illustration here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}