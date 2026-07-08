import { useEffect, useState } from "react";

export default function useMousePosition() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("pointermove", move);

    return () =>
      window.removeEventListener("pointermove", move);
  }, []);

  return mouse;
}