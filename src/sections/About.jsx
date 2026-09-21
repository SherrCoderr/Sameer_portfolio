import { Layers, Binary, Boxes, Puzzle } from 'lucide-react';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import { aboutParagraphs } from '../data/profile.js';

const interests = [
  { icon: Layers, title: 'Full Stack Development', text: 'Responsive React interfaces backed by Node.js.' },
  { icon: Binary, title: 'Data Structures & Algorithms', text: 'Regular practice in C++ and Java.' },
  { icon: Boxes, title: 'Software Engineering', text: 'Modular, maintainable, easy-to-debug code.' },
  { icon: Puzzle, title: 'Problem Solving', text: 'Breaking hard problems into clear steps.' },
];

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="space-y-5 text-base leading-relaxed text-zinc-400 md:text-lg">
          {aboutParagraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.06} as="p">
              {p}
            </Reveal>
          ))}
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {interests.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} as="li" delay={i * 0.07}>
              <div className="h-full rounded-2xl border border-white/10 bg-surface p-5 transition-colors hover:border-white/25">
                <Icon size={22} className="text-accent" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-semibold text-white">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-400">{text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
