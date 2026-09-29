import { motion } from 'framer-motion';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import SpotlightCard from '../components/SpotlightCard.jsx';
import { skillCategories, softSkills } from '../data/skills.js';

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills & Technologies"
      intro="Technical proficiencies across modern frontend engineering, Java backend ecosystems, databases, and development tooling."
    >
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
        {skillCategories.map(({ title, icon: Icon, span, items }, i) => (
          <Reveal key={title} as="li" delay={(i % 3) * 0.07} className={`${span} flex flex-col`}>
            <SpotlightCard className="flex h-full flex-col p-6 sm:p-7" lift={-3}>
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
                  {title}
                </h3>
              </div>

              <ul className="mt-5 flex flex-1 flex-wrap content-start gap-2">
                {items.map((skill) => (
                  <motion.li
                    key={skill}
                    whileHover={{ y: -2 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-zinc-200 transition-colors hover:border-accent/50 hover:bg-white/[0.08] hover:text-white sm:text-sm"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2.5 rounded-2xl border border-white/10 bg-surface/60 px-6 py-4 text-sm text-zinc-400">
        <span className="font-medium text-zinc-300">Core Competencies:</span>
        {softSkills.map((s) => (
          <span key={s} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300">
            {s}
          </span>
        ))}
      </Reveal>
    </Section>
  );
}
