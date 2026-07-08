import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <header className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full px-8">
      <div className="max-w-7xl mx-auto flex justify-between md:justify-center items-center">

        {/* Desktop nav — unchanged */}
        <nav className="hidden md:flex items-center gap-12 py-4">
          {links.map((link) => (
            <NavLink key={link.path} to={link.path} className="relative">
              {({ isActive }) => (
                <div className="relative pb-2">
                  <span
                    className="text-sm uppercase tracking-[0.25em] transition-all duration-300"
                    style={{ color: isActive ? "var(--text)" : "var(--text-soft)" }}
                  >
                    {link.name}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="nav-line"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                      className="absolute left-0 right-0 -bottom-1 h-[2px] rounded-full"
                      style={{ background: "var(--accent)" }}
                    />
                  )}
                </div>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Mobile hamburger toggle */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="md:hidden ml-auto w-11 h-11 rounded-full border flex items-center justify-center"
          style={{ borderColor: "var(--border)", color: "var(--text)" }}
        >
          <FiMenu size={20} />
        </button>
      </div>

      {/* Mobile slide-out panel */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0 z-50 h-full w-[75vw] max-w-sm md:hidden"
              style={{ background: "var(--surface)", borderLeft: "1px solid var(--border)" }}
              initial={{ x: reduceMotion ? 0 : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: reduceMotion ? 0 : "100%" }}
              transition={{ duration: reduceMotion ? 0 : 0.4, ease: "easeInOut" }}
            >
              <div className="flex justify-end p-6">
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="w-11 h-11 rounded-full border flex items-center justify-center"
                  style={{ borderColor: "var(--border)", color: "var(--text)" }}
                >
                  <FiX size={20} />
                </button>
              </div>

              <nav className="flex flex-col gap-10 px-10 pt-6">
                {links.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                  >
                    {({ isActive }) => (
                      <span
                        className="text-2xl uppercase tracking-[0.15em] font-semibold"
                        style={{ color: isActive ? "var(--text)" : "var(--text-soft)" }}
                      >
                        {link.name}
                      </span>
                    )}
                  </NavLink>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}