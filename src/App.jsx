import { useState, useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext.jsx';
import Navbar from './components/Navbar.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import Footer from './components/Footer.jsx';
import CommandPalette from './components/CommandPalette.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import Experience from './sections/Experience.jsx';
import Education from './sections/Education.jsx';
import Achievements from './sections/Achievements.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  // Global shortcut: Ctrl + K or Cmd + K toggles the Developer Command Palette
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <ThemeProvider>
      {/* reducedMotion="user" turns off transform/layout animations for people who ask for less motion. */}
      <MotionConfig reducedMotion="user">
        <a
          href="#about"
          className="sr-only z-[70] rounded-full bg-accent px-4 py-2 text-sm font-medium text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Navbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />
          <Experience />
          <Education />
          <Achievements />
          <Contact
            isEmailModalOpen={isEmailModalOpen}
            setIsEmailModalOpen={setIsEmailModalOpen}
          />
        </main>
        <Footer />

        {/* Global Developer Command Palette */}
        <CommandPalette
          isOpen={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenEmailModal={() => setIsEmailModalOpen(true)}
        />
      </MotionConfig>
    </ThemeProvider>
  );
}
