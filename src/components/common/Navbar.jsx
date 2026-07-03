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
        top-8
        left-1/2
        -translate-x-1/2
        z-50
        w-full
        px-8
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          flex
          justify-center
        "
      >
        <nav
          className="
            flex
            items-center
            gap-12
            py-4
          "
        >
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className="relative"
            >
              {({ isActive }) => (
                <div className="relative pb-2">

                  <span
                    className="
                      text-sm
                      uppercase
                      tracking-[0.25em]
                      transition-all
                      duration-300
                    "
                    style={{
                      color: isActive
                        ? "var(--text)"
                        : "var(--text-soft)",
                    }}
                  >
                    {link.name}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="nav-line"
                      transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 35,
                      }}
                      className="
                        absolute
                        left-0
                        right-0
                        -bottom-1
                        h-[2px]
                        rounded-full
                      "
                      style={{
                        background: "var(--accent)",
                      }}
                    />
                  )}
                </div>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}