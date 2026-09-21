import { Check, Github, ExternalLink, Circle } from 'lucide-react';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import SpotlightCard from '../components/SpotlightCard.jsx';
import Button from '../components/Button.jsx';
import Tag from '../components/Tag.jsx';
import { projects } from '../data/projects.js';

function StatusBadge({ status }) {
  const live = status.tone === 'live';
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${
        live
          ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
          : 'border-amber-300/30 bg-amber-300/10 text-amber-200'
      }`}
    >
      <Circle
        size={8}
        aria-hidden="true"
        className={`fill-current ${live ? '' : 'animate-pulse-dot'}`}
      />
      {status.label}
    </span>
  );
}

function ProjectCard({ project }) {
  const hasLinks = project.github || project.liveDemo;
  return (
    <SpotlightCard as="article" className="flex h-full flex-col">
      {/* Browser-style header: shows the real address, or that it isn't public yet. */}
      <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.02] px-5 py-3.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <span className="min-w-0 truncate rounded-md bg-black/30 px-3 py-1 text-xs text-zinc-400">
          {project.chrome}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 className="font-display text-3xl font-semibold tracking-tight text-white">{project.name}</h3>
          <StatusBadge status={project.status} />
        </div>
        <p className="mt-1.5 text-sm text-zinc-500">{project.status.note}</p>

        <p className="mt-5 text-base leading-relaxed text-zinc-300">{project.description}</p>

        <ul className="mt-6 space-y-3">
          {project.features.map((f) => (
            <li key={f} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
              <Check size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>

        <ul className="mt-7 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
          {project.tech.map((t) => (
            <li key={t}>
              <Tag>{t}</Tag>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
          {project.liveDemo && (
            <Button href={project.liveDemo} external variant="primary" icon={ExternalLink} size="sm">
              Live Demo
            </Button>
          )}
          {project.github && (
            <Button href={project.github} external icon={Github} size="sm">
              GitHub
            </Button>
          )}
          {!hasLinks && project.linksNote && <p className="text-sm text-zinc-500">{project.linksNote}</p>}
        </div>
      </div>
    </SpotlightCard>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      intro="A campus platform I'm building now, and a deployed traffic analytics app."
    >
      <ul className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} as="li" delay={i * 0.1}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
