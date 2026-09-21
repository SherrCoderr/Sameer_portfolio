import { motion } from 'framer-motion';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import SpotlightCard from '../components/SpotlightCard.jsx';
import { skillCategories, softSkills } from '../data/skills.js';

export default function Skills() {
  return (
    <Section id="skills" title="Skills" intro="The languages, fundamentals and tools I work with day to day.">
      <ul className="grid gap-4 lg:grid-cols-6">
        {skillCategories.map(({ title, icon: Icon, span, items }, i) => (
          <Reveal key={title} as="li" delay={(i % 3) * 0.07} className={span}>
            <SpotlightCard className="h-full p-6 sm:p-7" lift={-3}>
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-accent">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
              </div>

              <ul className="mt-6 flex flex-wrap gap-2.5">
                {items.map((skill) => (
                  <motion.li
                    key={skill}
                    whileHover={{ y: -2 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-accent/50 hover:text-white"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-zinc-500">
        <span>Beyond the code:</span>
        {softSkills.map((s) => (
          <span key={s} className="rounded-full border border-white/10 px-3 py-1 text-zinc-400">
            {s}
          </span>
        ))}
      </Reveal>
    </Section>
  );
}
