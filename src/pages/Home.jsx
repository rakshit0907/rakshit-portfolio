// pages/Home.jsx
import Hero from "../sections/Hero";
import AboutPreview from "../sections/AboutPreview";
import FeaturedWork from "../sections/FeaturedWork";
import PageTransition from "../components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <AboutPreview />
      <FeaturedWork />
    </PageTransition>
  );
}