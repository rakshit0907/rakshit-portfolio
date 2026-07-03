import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTwitter,
} from "react-icons/fi";

export default function Contact() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* Background Word */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1
          className="
            text-[18vw]
            font-black
            tracking-[-0.08em]
            text-white/[0.03]
            leading-none
          "
        >
          CONNECT
        </h1>
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-8 lg:px-10 py-32">

        {/* Label */}
        <p className="uppercase tracking-[0.4em] text-violet-400 text-xs mb-8">
          Contact
        </p>

        {/* Heading */}
        <h1
          className="
            text-6xl
            md:text-7xl
            lg:text-8xl
            font-black
            tracking-[-0.06em]
            leading-[0.9]
          "
        >
          READY TO
          <br />
          BUILD
          <br />
          SOMETHING
          <br />
          EXTRAORDINARY?
        </h1>

        {/* Intro */}
        <div className="mt-16 max-w-3xl">
          <p className="text-zinc-400 text-xl leading-9">
            Whether you're building a startup, crafting an ambitious digital
            product, or simply want to connect with a fellow engineer, I'm
            always open to meaningful conversations and exciting opportunities.
          </p>
        </div>

        {/* Contact Links */}
        <div className="mt-28 border-t border-zinc-800">

          {/* Email */}
          <a
            href="mailto:rakshitpandey0321@gmail.com"
            className="group flex items-center justify-between py-8 border-b border-zinc-800 transition-colors duration-300 hover:border-violet-500/40"
          >
            <div className="flex items-center gap-5">
              <FiMail
                size={24}
                className="text-violet-400"
              />

              <div>
                <p className="text-zinc-500 text-sm uppercase tracking-widest">
                  Email
                </p>

                <span className="text-2xl font-semibold">
                  rakshitpandey0321@gmail.com
                </span>
              </div>
            </div>

            <FiArrowUpRight
              size={28}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/rakshit0907"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between py-8 border-b border-zinc-800 transition-colors duration-300 hover:border-violet-500/40"
          >
            <div className="flex items-center gap-5">
              <FiGithub
                size={24}
                className="text-violet-400"
              />

              <div>
                <p className="text-zinc-500 text-sm uppercase tracking-widest">
                  GitHub
                </p>

                <span className="text-2xl font-semibold">
                  github.com/rakshit0907
                </span>
              </div>
            </div>

            <FiArrowUpRight
              size={28}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rakshit-pandey-96b854309/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between py-8 border-b border-zinc-800 transition-colors duration-300 hover:border-violet-500/40"
          >
            <div className="flex items-center gap-5">
              <FiLinkedin
                size={24}
                className="text-violet-400"
              />

              <div>
                <p className="text-zinc-500 text-sm uppercase tracking-widest">
                  LinkedIn
                </p>

                <span className="text-2xl font-semibold">
                  linkedin.com/in/rakshit-pandey
                </span>
              </div>
            </div>

            <FiArrowUpRight
              size={28}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          {/* X */}
          <a
            href="https://x.com/Rakshit70790763"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between py-8 border-b border-zinc-800 transition-colors duration-300 hover:border-violet-500/40"
          >
            <div className="flex items-center gap-5">
              <FiTwitter
                size={24}
                className="text-violet-400"
              />

              <div>
                <p className="text-zinc-500 text-sm uppercase tracking-widest">
                  X / Twitter
                </p>

                <span className="text-2xl font-semibold">
                  @Rakshit70790763
                </span>
              </div>
            </div>

            <FiArrowUpRight
              size={28}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between py-8 border-b border-zinc-800 transition-colors duration-300 hover:border-violet-500/40"
          >
            <div>
              <p className="text-zinc-500 text-sm uppercase tracking-widest">
                Resume
              </p>

              <span className="text-2xl font-semibold">
                Download Resume
              </span>
            </div>

            <FiArrowUpRight
              size={28}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

        </div>

        {/* Footer */}
        <div className="mt-24">
          <p className="text-zinc-600 text-sm tracking-wide">
            © 2026 Rakshit Pandey — Designed & Developed with React, Three.js,
            GSAP and passion for creating meaningful digital experiences.
          </p>
        </div>

      </section>
    </main>
  );
}