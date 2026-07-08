import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import ChapterFrame from "../components/ui/ChapterFrame";

const links = [
  { label: "Email", value: "rakshitpandey0321@gmail.com", href: "mailto:rakshitpandey0321@gmail.com", icon: FiMail, external: false },
  { label: "GitHub", value: "github.com/rakshit0907", href: "https://github.com/rakshit0907", icon: FiGithub, external: true },
  { label: "LinkedIn", value: "linkedin.com/in/rakshit-pandey", href: "https://www.linkedin.com/in/rakshit-pandey-96b854309/", icon: FiLinkedin, external: true },
  { label: "X / Twitter", value: "@Rakshit70790763", href: "https://x.com/Rakshit70790763", icon: FiTwitter, external: true },
];

export default function Contact() {
  return (
    <main className="relative min-h-screen bg-black/70 text-white overflow-hidden">

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1 className="text-[18vw] font-black tracking-[-0.08em] text-white/[0.03] leading-none">
          CONNECT
        </h1>
      </div>

      <section id="contact"
      className="relative z-10 max-w-7xl mx-auto px-8 lg:px-10 py-32">
        <ChapterFrame index={1} label="CONTACT">

          <p className="uppercase tracking-[0.4em] text-[#5E81AC] text-xs mb-8">
            Contact
          </p>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.06em] leading-[0.9]">
            READY TO
            <br />
            BUILD
            <br />
            SOMETHING
            <br />
            EXTRAORDINARY?
          </h1>

          <div className="mt-16 max-w-3xl">
            <p className="text-zinc-400 text-xl leading-9">
              Whether you're building a startup, crafting an ambitious digital
              product, or simply want to connect with a fellow engineer, I'm
              always open to meaningful conversations and exciting opportunities.
            </p>
          </div>

          <div className="mt-28 border-t border-zinc-800">
            {links.map(({ label, value, href, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="group flex items-center justify-between py-8 border-b border-zinc-800 transition-colors duration-300 hover:border-[#5E81AC]/40"
              >
                <div className="flex items-center gap-5">
                  <Icon size={24} className="text-[#5E81AC]" />
                  <div>
                    <p className="text-zinc-500 text-sm uppercase tracking-widest">{label}</p>
                    <span className="text-2xl font-semibold">{value}</span>
                  </div>
                </div>
                <FiArrowUpRight size={28} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between py-8 border-b border-zinc-800 transition-colors duration-300 hover:border-[#5E81AC]/40"
            >
              <div>
                <p className="text-zinc-500 text-sm uppercase tracking-widest">Resume</p>
                <span className="text-2xl font-semibold">Download Resume</span>
              </div>
              <FiArrowUpRight size={28} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          <div className="mt-24 flex justify-between items-center font-mono text-[10px] uppercase tracking-[0.3em]" style={{ color: "var(--text-muted)" }}>
            <span>© 2026 RAKSHIT PANDEY</span>
            <span>REACT / THREE.JS / GSAP</span>
          </div>

        </ChapterFrame>
      </section>
    </main>
  );
}