import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowDown, Github, Mail, Download, Trophy, GraduationCap, Database, Sparkles, Terminal } from 'lucide-react';
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
  'Spring Boot & Java Systems',
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
    <section id="top" aria-label="Introduction" className="relative isolate overflow-hidden pt-28 md:pt-36 bg-gradient-to-b from-blue-50/50 via-slate-50/30 to-slate-50">
      {/* Background: subtle grid + ambient radial glow */}
      <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="animate-drift absolute -top-40 left-1/2 -z-10 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-400/10 via-violet-400/10 to-transparent blur-[120px]"
      />

      <div className="container-page grid items-end gap-12 pb-20 md:pb-28 lg:grid-cols-[1.75fr_1fr] lg:gap-10">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Profile Photo & Availability Badge */}
          <motion.div variants={item} className="mb-6 flex items-center gap-4 sm:gap-5">
            <div className="relative shrink-0 group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-violet-500 opacity-30 blur-xs transition duration-300 group-hover:opacity-60" />
              <img
                src={profile.links.avatar}
                alt={profile.name}
                className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover object-[center_20%] border-2 border-white shadow-lg ring-4 ring-blue-500/15 bg-white"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-700 self-start shadow-xs">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open to Software Engineer Roles</span>
              </div>
              <p className="text-xs text-slate-500 font-medium pl-1">
                Computer Science Undergraduate &bull; Chandigarh University (2028)
              </p>
            </div>
          </motion.div>

          {/* Dynamic Headline */}
          <motion.h1
            variants={item}
            className="font-display text-[clamp(2.5rem,7vw,5.25rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-slate-900"
          >
            Building reliable software, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
              one problem at a time.
            </span>
          </motion.h1>

          {/* Rotating Specialty Treatment */}
          <motion.div variants={item} className="mt-5 flex items-center gap-2.5 text-sm sm:text-base text-slate-700">
            <Terminal size={17} className="text-accent shrink-0" />
            <span className="text-slate-500 font-medium">Specializing in:</span>
            <div className="relative h-7 overflow-hidden inline-block min-w-[240px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={specialties[index]}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -16, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="font-semibold text-slate-900 block absolute"
                >
                  {specialties[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.p variants={item} className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
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
          className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-card-hover transition-all duration-300"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Trophy size={16} className="text-accent" aria-hidden="true" />
              <span>Competitive Programming</span>
            </div>
            <span className="rounded-md border border-blue-200 bg-blue-50 px-2 py-0.5 text-[11px] font-mono font-semibold text-accent">
              Active Solver
            </span>
          </div>

          <p className="mt-4 font-display text-6xl font-extrabold tracking-tight text-slate-900 sm:text-7xl">
            {profile.leetcodeSolved}+
          </p>
          <p className="mt-1 text-base text-slate-800 font-semibold">LeetCode Problems Solved</p>
          <p className="text-sm text-slate-500">Practicing regularly in {profile.leetcodeLanguages.join(' and ')}</p>

          <a
            href={profile.links.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent underline-offset-4 hover:text-accent-hover hover:underline"
          >
            <span>View LeetCode profile</span>
            <span>&rarr;</span>
          </a>

          <ul className="mt-6 space-y-3.5 border-t border-slate-100 pt-5 text-sm text-slate-700">
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
