import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, FileText, Check } from 'lucide-react';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import Tag from '../components/Tag.jsx';
import { experience } from '../data/experience.js';

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section id="experience" title="Experience" intro="Professional internship and hands-on data science & engineering work.">
      <div ref={ref} className="relative pl-10 sm:pl-14">
        {/* Timeline line */}
        <div aria-hidden="true" className="absolute bottom-0 left-[15px] top-2 w-px bg-slate-200 sm:left-[19px]" />
        <motion.div
          aria-hidden="true"
          style={{ scaleY: lineScale }}
          className="absolute bottom-0 left-[15px] top-2 w-px origin-top bg-accent sm:left-[19px]"
        />

        <ol className="space-y-10">
          {experience.map((job) => (
            <li key={job.role} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-10 top-1 grid h-8 w-8 place-items-center rounded-full border border-blue-300 bg-blue-50 text-accent sm:-left-14 sm:h-10 sm:w-10 shadow-xs"
              >
                <Briefcase size={16} />
              </span>

              <Reveal>
                <article className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs hover:border-blue-300 hover:shadow-card-hover transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                    <div>
                      <h3 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        {job.role}
                      </h3>
                      <p className="mt-1 text-base font-semibold text-slate-700">{job.company}</p>
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wider rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-600">
                      {job.period}
                    </p>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {job.responsibilities.map((r) => (
                      <li key={r} className="flex gap-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                        <Check size={16} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5">
                    <ul className="flex flex-wrap gap-2" aria-label="Skills used">
                      {job.tags.map((t) => (
                        <li key={t}>
                          <Tag>{t}</Tag>
                        </li>
                      ))}
                    </ul>
                    {job.certificate && (
                      <a
                        href={job.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent underline-offset-4 hover:text-accent-hover hover:underline"
                      >
                        <FileText size={15} aria-hidden="true" />
                        View Certificate &rarr;
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
