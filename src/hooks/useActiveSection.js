import { useLocation } from "react-router-dom";

const routeToSection = {
  "/": "hero",
  "/about": "about",
  "/projects": "projects",
  "/contact": "contact",
};

export default function useActiveSection() {
  const { pathname } = useLocation();
  return routeToSection[pathname] ?? "hero";
}