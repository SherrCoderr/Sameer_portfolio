import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowDown, Github, Mail, Download, Trophy, GraduationCap, Database, Sparkles, Code2, Terminal } from 'lucide-react';
import Button from '../components/Button.jsx';
import { profile } from '../data/profile.js';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const specialties = [
  'Full-Stack Web Engineering',
  'Spring Boot & Java Backend',
  'PostgreSQL, Redis & Concurrency',
  'DSA & Algorithmic Problem Solving',
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % specialties.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <section id="top" aria-label="Introduction" className="relative isolate overflow-hidden pt-28 md:pt-36">
      {/* Background: faint grid + subtle atmospheric glow */}
      <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="animate-drift absolute -top-40 left-1/2 -z-10 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-accent/[0.08] blur-[130px]"
      />

      <div className="container-page grid items-end gap-12 pb-20 md:pb-28 lg:grid-cols-[1.75fr_1fr] lg:gap-10">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Profile Photo & Availability Badge */}
          <motion.div variants={item} className="mb-6 flex items-center gap-4 sm:gap-5">
            <div className="relative shrink-0 group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-accent via-accent-soft to-accent-deep opacity-40 blur-xs transition duration-300 group-hover:opacity-75" />
              <img
                src={profile.links.avatar}
                alt={profile.name}
                className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover object-[center_20%] border-2 border-white/20 bg-surface shadow-2xl"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1 text-xs font-medium text-emerald-300 self-start">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open to Software Engineer Roles</span>
              </div>
              <p className="text-xs text-zinc-400 font-medium pl-1">
                Computer Science Undergraduate &bull; Chandigarh University (2028)
              </p>
            </div>
          </motion.div>

          {/* Dynamic Headline */}
          <motion.h1
            variants={item}
            className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1.04] tracking-[-0.03em] text-white"
          >
            Building reliable software, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-accent-soft">
              one problem at a time.
            </span>
          </motion.h1>

          {/* Rotating Specialty Treatment */}
          <motion.div variants={item} className="mt-5 flex items-center gap-2.5 text-sm sm:text-base text-zinc-300">
            <Terminal size={17} className="text-accent shrink-0" />
            <span className="text-zinc-400">Specializing in:</span>
            <div className="relative h-7 overflow-hidden inline-block min-w-[240px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={specialties[index]}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -16, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="font-medium text-white block absolute"
                >
                  {specialties[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.p variants={item} className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300 md:text-lg">
            {profile.summary}
          </motion.p>

          {/* Action CTAs */}
          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#projects" variant="primary" icon={ArrowDown}>
              View Projects
            </Button>
            <Button href={profile.links.github} external icon={Github}>
              GitHub
            </Button>
            <Button href="#contact" icon={Mail}>
              Contact Me
            </Button>
            {profile.links.resume && (
              <Button href={profile.links.resume} download icon={Download}>
                Download Resume
              </Button>
            )}
          </motion.div>
        </motion.div>

        {/* Problem-solving highlight + quick facts */}
        <motion.aside
          aria-label="Highlights"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-2xl p-6 sm:p-7 shadow-xl border border-white/10"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <Trophy size={16} className="text-accent" aria-hidden="true" />
              <span>Competitive Programming</span>
            </div>
            <span className="rounded-md border border-accent/30 bg-accent/10 px-2 py-0.5 text-[11px] font-mono text-accent">
              Active Solver
            </span>
          </div>

          <p className="mt-4 font-display text-6xl font-bold tracking-tight text-white sm:text-7xl">
            {profile.leetcodeSolved}+
          </p>
          <p className="mt-1 text-base text-zinc-200 font-medium">LeetCode Problems Solved</p>
          <p className="text-sm text-zinc-400">Practicing regularly in {profile.leetcodeLanguages.join(' and ')}</p>

          <a
            href={profile.links.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            <span>View LeetCode profile</span>
            <span>&rarr;</span>
          </a>

          <ul className="mt-6 space-y-3.5 border-t border-white/10 pt-5 text-sm text-zinc-300">
            <li className="flex gap-3">
              <GraduationCap size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
              <span>B.E. Computer Science, Chandigarh University (expected 2028, CGPA 8.0)</span>
            </li>
            <li className="flex gap-3">
              <Database size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
              <span>Data Science Intern, Algoson – GraveAngels</span>
            </li>
          </ul>
        </motion.aside>
      </div>
    </section>
  );
}
