import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import { education } from '../data/education.js';

export default function Education() {
  return (
    <Section id="education" title="Education" className="pb-12 md:pb-16">
      <ul className="grid gap-5 md:grid-cols-2">
        {education.map(({ title, school, place, period, score, icon: Icon }, i) => (
          <Reveal key={title} as="li" delay={i * 0.1}>
            <article className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs hover:border-blue-300 hover:shadow-card-hover transition-all duration-300">
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-blue-200 bg-blue-50 text-accent">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <p className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">{period}</p>
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold leading-snug tracking-tight text-slate-900">
                {title}
              </h3>
              <p className="mt-2 font-semibold text-slate-700">{school}</p>
              {place && <p className="text-sm text-slate-500">{place}</p>}

              <p className="mt-auto pt-8 text-sm font-medium text-slate-500 border-t border-slate-100">
                {score.label}:{' '}
                <span className="font-display text-2xl font-bold text-slate-900">{score.value}</span>
              </p>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
