import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function Navbar() {
  return (
    <header
      className="
      fixed
      top-6
      left-1/2
      -translate-x-1/2
      z-50
      w-[90%]
      max-w-5xl
    "
    >
      <nav
        className="
        flex
        items-center
        justify-between

        px-6
        py-4

        rounded-full

        border
        border-white/10

        bg-white/5
        backdrop-blur-xl

        shadow-[0_0_30px_rgba(255,255,255,0.05)]
      "
      >
        <div
          className="
          text-lg
          font-bold
          tracking-wide
        "
        >
          RP
        </div>

        <div className="flex gap-8">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className="relative"
            >
              {({ isActive }) => (
                <div className="relative">
                  <span
                    className={`
                    transition-colors
                    duration-300

                    ${
                      isActive
                        ? "text-white"
                        : "text-zinc-400"
                    }
                  `}
                  >
                    {link.name}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="
                      absolute
                      -bottom-2
                      left-0
                      right-0
                      h-[2px]
                      bg-white
                      rounded-full
                    "
                    />
                  )}
                </div>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}