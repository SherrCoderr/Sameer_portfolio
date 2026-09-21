import Reveal from './Reveal.jsx';

/** Consistent section wrapper: semantic <section>, heading, optional intro. */
export default function Section({ id, title, intro, children, className = '' }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`py-24 md:py-32 ${className}`}>
      <div className="container-page">
        <Reveal className="mb-12 max-w-2xl md:mb-16">
          <h2
            id={`${id}-title`}
            className="font-display text-4xl font-semibold tracking-tight text-white md:text-6xl"
          >
            {title}
          </h2>
          {intro && <p className="mt-4 text-base leading-relaxed text-zinc-400 md:text-lg">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
