import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import { education } from '../data/education.js';

export default function Education() {
  return (
    <Section id="education" title="Education" className="pb-12 md:pb-16">
      <ul className="grid gap-5 md:grid-cols-2">
        {education.map(({ title, school, place, period, score, icon: Icon }, i) => (
          <Reveal key={title} as="li" delay={i * 0.1}>
            <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-surface p-6 transition-colors hover:border-white/25 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-accent">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <p className="rounded-full border border-white/10 px-3 py-1 text-sm text-zinc-300">{period}</p>
              </div>

              <h3 className="mt-6 font-display text-2xl font-semibold leading-snug tracking-tight text-white">
                {title}
              </h3>
              <p className="mt-2 text-zinc-300">{school}</p>
              {place && <p className="text-sm text-zinc-500">{place}</p>}

              <p className="mt-auto pt-8 text-zinc-400">
                {score.label}:{' '}
                <span className="font-display text-2xl font-semibold text-white">{score.value}</span>
              </p>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
