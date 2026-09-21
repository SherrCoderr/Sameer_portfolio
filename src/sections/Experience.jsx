import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, FileText, Check } from 'lucide-react';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import Tag from '../components/Tag.jsx';
import { experience } from '../data/experience.js';

export default function Experience() {
  const ref = useRef(null);
  // The vertical line draws itself as the timeline scrolls through the viewport.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section id="experience" title="Experience" intro="Hands-on work with real data.">
      <div ref={ref} className="relative pl-10 sm:pl-14">
        <div aria-hidden="true" className="absolute bottom-0 left-[15px] top-2 w-px bg-white/10 sm:left-[19px]" />
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
                className="absolute -left-10 top-1 grid h-8 w-8 place-items-center rounded-full border border-accent/50 bg-ink text-accent sm:-left-14 sm:h-10 sm:w-10"
              >
                <Briefcase size={16} />
              </span>

              <Reveal>
                <article className="rounded-2xl border border-white/10 bg-surface p-6 transition-colors hover:border-white/25 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                    <div>
                      <h3 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                        {job.role}
                      </h3>
                      <p className="mt-1 text-base text-zinc-300">{job.company}</p>
                    </div>
                    <p className="text-sm text-zinc-500">{job.period}</p>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {job.responsibilities.map((r) => (
                      <li key={r} className="flex gap-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                        <Check size={16} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
                        {r}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
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
                        className="inline-flex items-center gap-2 text-sm font-medium text-accent underline-offset-4 hover:underline"
                      >
                        <FileText size={15} aria-hidden="true" />
                        View certificate
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
