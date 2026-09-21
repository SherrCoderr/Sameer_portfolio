import { Award, Flag, ArrowUpRight } from 'lucide-react';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import CountUp from '../components/CountUp.jsx';
import { profile } from '../data/profile.js';
import { certifications, hackathons, extracurricular } from '../data/achievements.js';

export default function Achievements() {
  return (
    <Section
      id="achievements"
      title="Achievements"
      intro="Problem solving practice, certifications, and hackathons."
      className="pt-12 md:pt-16"
    >
      <div className="grid gap-5 lg:grid-cols-5">
        {/* The one big moment on this page: the LeetCode count */}
        <Reveal className="lg:col-span-3">
          <a
            href={profile.links.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-full min-h-[300px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-surface p-7 transition-colors hover:border-accent/50 sm:p-10"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/[0.10] blur-3xl"
            />
            <div className="relative flex items-start justify-between">
              <p className="text-sm text-zinc-400">Problem solving</p>
              <ArrowUpRight
                size={22}
                aria-hidden="true"
                className="text-zinc-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              />
            </div>

            <div className="relative mt-8">
              <p className="font-display text-[clamp(5rem,16vw,9rem)] font-semibold leading-none tracking-[-0.04em] text-white">
                <CountUp to={profile.leetcodeSolved} suffix="+" />
              </p>
              <p className="mt-3 text-lg text-zinc-200">LeetCode problems solved</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {profile.leetcodeLanguages.map((lang) => (
                  <span
                    key={lang}
                    className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-sm text-zinc-200"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <span className="sr-only">Opens LeetCode profile in a new tab</span>
          </a>
        </Reveal>

        <div className="grid gap-5 lg:col-span-2">
          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border border-white/10 bg-surface p-6 sm:p-7">
              <h3 className="flex items-center gap-2.5 font-display text-xl font-semibold text-white">
                <Award size={20} className="text-accent" aria-hidden="true" />
                Certifications
              </h3>
              <ul className="mt-4 space-y-3 text-zinc-300">
                {certifications.map((c) => (
                  <li key={c} className="border-l-2 border-accent/40 pl-3.5">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="h-full rounded-2xl border border-white/10 bg-surface p-6 sm:p-7">
              <h3 className="flex items-center gap-2.5 font-display text-xl font-semibold text-white">
                <Flag size={20} className="text-accent" aria-hidden="true" />
                Hackathons
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {hackathons.map((h) => (
                  <li
                    key={h}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm text-zinc-200"
                  >
                    {h}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-zinc-500">Participant</p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Extracurricular */}
      <Reveal className="mt-5">
        <div className="glass rounded-2xl p-6 sm:p-8">
          <h3 className="font-display text-xl font-semibold text-white">Extracurricular</h3>
          <p className="mt-3 max-w-3xl leading-relaxed text-zinc-400">{extracurricular.text}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {extracurricular.strengths.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-zinc-200"
              >
                <Icon size={18} className="shrink-0 text-accent" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
