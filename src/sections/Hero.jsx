import { motion } from 'framer-motion';
import { ArrowDown, Github, Mail, Download, Trophy, GraduationCap, Database, Sparkles } from 'lucide-react';
import Button from '../components/Button.jsx';
import { profile } from '../data/profile.js';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const roleTone = ['text-zinc-400', 'text-accent', 'text-white'];

export default function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="relative isolate overflow-hidden pt-28 md:pt-36">
      {/* Background: faint grid + slow glow */}
      <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="animate-drift absolute -top-40 left-1/2 -z-10 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-accent/[0.08] blur-[130px]"
      />

      <div className="container-page grid items-end gap-12 pb-20 md:pb-28 lg:grid-cols-[1.75fr_1fr] lg:gap-10">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-medium text-accent">
            <Sparkles size={13} aria-hidden="true" />
            <span>Computer Science Student &bull; Full Stack Developer</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-[clamp(4rem,14vw,9.5rem)] font-semibold leading-[0.9] tracking-[-0.04em] text-white"
          >
            {profile.name}
          </motion.h1>

          <motion.div variants={item} className="mt-7 font-display text-2xl font-medium leading-tight tracking-tight sm:text-3xl lg:text-4xl">
            {profile.roles.map((role, i) => (
              <span key={role} className={`block ${roleTone[i]}`}>
                {role}
              </span>
            ))}
          </motion.div>

          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300 md:text-lg">
            {profile.summary}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <Button href="#projects" variant="primary" icon={ArrowDown}>
              View Projects
            </Button>
            <Button href={profile.links.github} external icon={Github}>
              View GitHub
            </Button>
            <Button href="#contact" icon={Mail}>
              Contact Me
            </Button>
            <Button href={profile.links.resume} download icon={Download}>
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* Problem-solving highlight + quick facts */}
        <motion.aside
          aria-label="Highlights"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-2xl p-6 sm:p-7 shadow-xl"
        >
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <Trophy size={16} className="text-accent" aria-hidden="true" />
            <span>Problem Solving</span>
          </div>
          <p className="mt-3 font-display text-6xl font-semibold tracking-tight text-white sm:text-7xl">
            {profile.leetcodeSolved}+
          </p>
          <p className="mt-1 text-base text-zinc-200 font-medium">LeetCode problems solved</p>
          <p className="text-sm text-zinc-400">in {profile.leetcodeLanguages.join(' and ')}</p>

          <a
            href={profile.links.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            View LeetCode profile &rarr;
          </a>

          <ul className="mt-6 space-y-3.5 border-t border-white/10 pt-5 text-sm text-zinc-300">
            <li className="flex gap-3">
              <GraduationCap size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
              <span>B.E. Computer Science, Chandigarh University (expected 2028)</span>
            </li>
            <li className="flex gap-3">
              <Database size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
              <span>Data Science intern, Algoson – GraveAngels</span>
            </li>
          </ul>
        </motion.aside>
      </div>
    </section>
  );
}
