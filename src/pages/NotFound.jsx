import { Link } from "react-router-dom";

// Shown for any address that doesn't match a page (instead of a blank screen).
export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-8">
      <p className="uppercase tracking-[0.4em] text-[#5E81AC] text-xs">Error 404</p>
      <h1 className="mt-6 text-6xl md:text-8xl font-black tracking-[-0.06em]">
        PAGE NOT FOUND
      </h1>
      <p className="mt-8 text-zinc-400 max-w-md leading-8">
        That address doesn't lead anywhere. Let's get you back.
      </p>
      <Link
        to="/"
        className="mt-12 px-10 py-4 rounded-full border border-white text-white font-semibold transition-all duration-500 hover:bg-white hover:text-black"
      >
        Back to Home
      </Link>
    </section>
  );
}
