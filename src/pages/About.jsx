import AboutSection from "../sections/About";
import PageTransition from "../components/PageTransition";
import AboutBackground from "../components/about/AboutBackground";
export default function About() {
  return (
    <PageTransition>
      <AboutSection />
    </PageTransition>
  );
}