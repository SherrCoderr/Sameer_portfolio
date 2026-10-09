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
      title="Achievements & Activities"
      intro="Algorithmic problem-solving milestones, technical certifications, hackathon participations, and collegiate activities."
      className="pt-12 md:pt-16"
    >
      <div className="grid gap-5 lg:grid-cols-5">
        {/* The one big moment on this page: the LeetCode count */}
        <Reveal className="lg:col-span-3">
          <a
            href={profile.links.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-full min-h-[300px] flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-white via-blue-50/30 to-slate-50 p-7 sm:p-10 shadow-xs hover:border-blue-300 hover:shadow-card-hover transition-all duration-300"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
            />
            <div className="relative flex items-start justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-accent">
                Problem Solving
              </span>
              <ArrowUpRight
                size={22}
                aria-hidden="true"
                className="text-slate-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              />
            </div>

            <div className="relative mt-8">
              <p className="font-display text-[clamp(4.5rem,14vw,8rem)] font-extrabold leading-none tracking-[-0.04em] text-slate-900">
                <CountUp to={profile.leetcodeSolved} suffix="+" />
              </p>
              <p className="mt-3 text-lg font-bold text-slate-800">LeetCode Problems Solved</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {profile.leetcodeLanguages.map((lang) => (
                  <span
                    key={lang}
                    className="rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-semibold text-slate-700 shadow-xs"
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
            <div className="h-full rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:border-blue-300 transition-all duration-300">
              <h3 className="flex items-center gap-2.5 font-display text-xl font-bold text-slate-900">
                <Award size={20} className="text-accent" aria-hidden="true" />
                Certifications
              </h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                {certifications.map((c) => (
                  <li key={c} className="border-l-2 border-accent pl-3.5 font-medium text-sm sm:text-base">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="h-full rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:border-blue-300 transition-all duration-300">
              <h3 className="flex items-center gap-2.5 font-display text-xl font-bold text-slate-900">
                <Flag size={20} className="text-accent" aria-hidden="true" />
                Hackathons
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {hackathons.map((h) => (
                  <li
                    key={h}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-semibold text-slate-700"
                  >
                    {h}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs font-medium text-slate-500">Active Hackathon Participant</p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Extracurricular */}
      <Reveal className="mt-5">
        <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs">
          <h3 className="font-display text-xl font-bold text-slate-900">Extracurricular & Leadership</h3>
          <p className="mt-3 max-w-3xl leading-relaxed text-slate-600 text-sm sm:text-base">{extracurricular.text}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {extracurricular.strengths.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/70 px-4 py-3 text-sm font-semibold text-slate-700"
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
