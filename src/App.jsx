import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import Footer from './components/Footer.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import Experience from './sections/Experience.jsx';
import Education from './sections/Education.jsx';
import Achievements from './sections/Achievements.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  return (
    // reducedMotion="user" turns off transform/layout animations for people who ask for less motion.
    <MotionConfig reducedMotion="user">
      <a
        href="#about"
        className="sr-only z-[70] rounded-full bg-accent px-4 py-2 text-sm font-medium text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
