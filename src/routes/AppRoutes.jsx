import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import MainLayout from "../layouts/MainLayout";
import Navbar from "../components/common/Navbar";
import Home from "../pages/Home";
import { scrollToTopInstant } from "../lib/lenis";

const loadAbout = () => import("../pages/About");
const loadProjects = () => import("../pages/Projects");
const loadContact = () => import("../pages/Contact");

const About = lazy(loadAbout);
const Projects = lazy(loadProjects);
const Contact = lazy(loadContact);

export default function AppRoutes() {
  const location = useLocation();

  // Warm the other routes while the browser is idle so navigation feels instant.
  useEffect(() => {
    const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 1500));
    const id = idle(() => {
      loadAbout();
      loadProjects();
      loadContact();
    });
    return () => window.cancelIdleCallback?.(id);
  }, []);

  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait" onExitComplete={scrollToTopInstant}>
        <Routes location={location} key={location.pathname}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/about"
              element={
                <Suspense fallback={null}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="/projects"
              element={
                <Suspense fallback={null}>
                  <Projects />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={null}>
                  <Contact />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}
