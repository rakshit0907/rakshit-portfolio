import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      "
    >
      <nav
        className="
        flex
        justify-between
        items-center
        px-8
        py-6
        "
      >
        <Link to="/">
          Rakshit
        </Link>

        <div className="flex gap-6">

          <Link to="/">
            Home
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/projects">
            Projects
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </div>
      </nav>
    </header>
  );
}