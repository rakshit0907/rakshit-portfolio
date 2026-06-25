import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import {
  AnimatePresence,
} from "framer-motion";

import MainLayout from "../layouts/MainLayout";
import ScrollToTop from "../components/ScrollToTop";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

export default function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes
        location={location}
        key={location.pathname}
      >
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />
          
              <>
      <ScrollToTop />

      <AnimatePresence mode="wait">
        ...
      </AnimatePresence>
    </>

          <Route
            path="/projects"
            element={<Projects />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}