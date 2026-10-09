import Reveal from './Reveal.jsx';

/** Consistent section wrapper: semantic <section>, heading, optional intro in light theme. */
export default function Section({ id, title, intro, children, className = '' }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`py-20 md:py-28 ${className}`}>
      <div className="container-page">
        <Reveal className="mb-10 max-w-2xl md:mb-14">
          <h2
            id={`${id}-title`}
            className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl"
          >
            {title}
          </h2>
          {intro && <p className="mt-3 text-base leading-relaxed text-slate-600 md:text-lg">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
