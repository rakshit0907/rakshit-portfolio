import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
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
      "
    >
      <nav
        className="
        flex
        items-center
        gap-2

        rounded-full

        border
        border-white/10

        bg-white/5
        backdrop-blur-xl

        px-3
        py-3

        shadow-[0_8px_40px_rgba(0,0,0,0.4)]
      "
      >
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className="relative"
          >
            {({ isActive }) => (
              <div className="relative px-5 py-2">
                {isActive && (
                  <motion.div
                    layoutId="navbar-pill"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                    className="
                    absolute
                    inset-0

                    rounded-full

                    bg-white
                    "
                  />
                )}

                <span
                  className={`
                  relative
                  z-10

                  transition-colors

                  ${
                    isActive
                      ? "text-black"
                      : "text-zinc-300"
                  }
                `}
                >
                  {link.name}
                </span>
              </div>
            )}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}