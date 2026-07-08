import { useEffect, useState } from "react";

export default function useActiveSection() {
  const [section, setSection] = useState("hero");

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      const h = window.innerHeight;

      if (y < h * 0.8) setSection("hero");
      else if (y < h * 1.8) setSection("about");
      else if (y < h * 2.8) setSection("projects");
      else setSection("contact");
    };

    update();

    window.addEventListener("scroll", update);

    return () => window.removeEventListener("scroll", update);
  }, []);

  return section;
}