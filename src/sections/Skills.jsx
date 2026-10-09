import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Layout, Server, Database, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import SpotlightCard from '../components/SpotlightCard.jsx';
import { skillCategories, softSkills } from '../data/skills.js';

const filterTabs = ['All Categories', 'Languages', 'Frontend', 'Backend', 'Database', 'Tools'];

export default function Skills() {
  const [selectedTab, setSelectedTab] = useState('All Categories');

  const visibleCategories = skillCategories.filter((cat) => {
    if (selectedTab === 'All Categories') return true;
    return cat.title.toLowerCase().includes(selectedTab.toLowerCase());
  });

  return (
    <Section
      id="skills"
      title="Technical Skills"
      intro="Core programming languages, full-stack frameworks, database management systems, and development tooling I utilize in building production applications."
    >
      {/* Category Filter Navigation */}
      <div className="mb-8 flex flex-wrap items-center gap-2">
        {filterTabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setSelectedTab(tab)}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
              selectedTab === tab
                ? 'bg-accent text-white shadow-sm shadow-blue-500/20'
                : 'border border-slate-200/90 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 shadow-xs'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.ul
          key={selectedTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-6"
        >
          {visibleCategories.map(({ title, icon: Icon, span, items }) => (
            <li
              key={title}
              className={`${selectedTab === 'All Categories' ? span : 'lg:col-span-3'} flex flex-col`}
            >
              <SpotlightCard className="flex h-full flex-col p-6 sm:p-7 border-slate-200/90 bg-white hover:border-blue-300" lift={-3}>
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-blue-200 bg-blue-50 text-accent">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                      {title}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-mono">
                      {items.length} Technologies
                    </p>
                  </div>
                </div>

                <ul className="mt-5 flex flex-1 flex-wrap content-start gap-2">
                  {items.map((skill) => (
                    <motion.li
                      key={skill}
                      whileHover={{ y: -2 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-slate-50/80 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 sm:text-sm"
                    >
                      <CheckCircle2 size={13} className="text-accent shrink-0" />
                      <span>{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </SpotlightCard>
            </li>
          ))}
        </motion.ul>
      </AnimatePresence>

      {/* Core Competencies & Soft Skills */}
      <Reveal className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2.5 rounded-2xl border border-slate-200/90 bg-white p-5 sm:px-6 text-sm text-slate-600 shadow-xs">
        <div className="flex items-center gap-2 font-semibold text-slate-900 mr-2">
          <Sparkles size={16} className="text-accent shrink-0" />
          <span>Engineering Fundamentals:</span>
        </div>
        {softSkills.map((s) => (
          <span
            key={s}
            className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs text-slate-700 font-medium hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 transition-colors"
          >
            {s}
          </span>
        ))}
      </Reveal>
    </Section>
  );
}
