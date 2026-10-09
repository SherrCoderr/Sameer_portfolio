import { Layers, Binary, Server, Code2 } from 'lucide-react';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import { aboutParagraphs } from '../data/profile.js';

const interests = [
  {
    icon: Layers,
    title: 'Full Stack Engineering',
    text: 'Building end-to-end web applications with React, Spring Boot, Java, PostgreSQL, and Redis.',
  },
  {
    icon: Binary,
    title: 'Data Structures & Algorithms',
    text: 'Consistent practice in C++ and Java with 450+ solved challenges on LeetCode.',
  },
  {
    icon: Server,
    title: 'Backend & System Architecture',
    text: 'Designing REST APIs, Spring Security/JWT, WebSockets/STOMP, and concurrency-safe transactions.',
  },
  {
    icon: Code2,
    title: 'Clean Code & DevOps',
    text: 'Containerization with Docker, automated testing, and database version control with Flyway.',
  },
];

export default function About() {
  return (
    <Section id="about" title="About Me" intro="Background, technical focus, and engineering problem-solving philosophy.">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        <div className="space-y-5 text-base leading-relaxed text-slate-600 md:text-lg">
          {aboutParagraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.06} as="p">
              {p}
            </Reveal>
          ))}
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {interests.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} as="li" delay={i * 0.07}>
              <div className="h-full rounded-2xl border border-slate-200/90 bg-white p-5 transition-all duration-300 hover:border-blue-300 hover:shadow-card-hover group shadow-xs">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-blue-200 bg-blue-50 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">{text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
