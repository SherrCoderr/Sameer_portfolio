import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Github, ExternalLink, Circle, Sparkles, Layers, Info } from 'lucide-react';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import SpotlightCard from '../components/SpotlightCard.jsx';
import Button from '../components/Button.jsx';
import Tag from '../components/Tag.jsx';
import ProjectModal from '../components/ProjectModal.jsx';
import { projects } from '../data/projects.js';

const filterCategories = ['All Projects', 'Featured', 'Full-Stack', 'Analytics'];

function StatusBadge({ status }) {
  const isLive = status.tone === 'live';
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${
        isLive
          ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
          : 'border-amber-300/30 bg-amber-300/10 text-amber-200'
      }`}
    >
      <Circle
        size={7}
        aria-hidden="true"
        className={`fill-current ${isLive ? 'text-emerald-400 animate-pulse' : 'text-amber-300'}`}
      />
      {status.label}
    </span>
  );
}

function ProjectCard({ project, isTopHero = false, onOpenModal }) {
  return (
    <SpotlightCard as="article" className="flex h-full flex-col border-white/10 bg-surface/90 hover:border-accent/40 group">
      {/* Browser chrome header bar */}
      <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-white/[0.02] px-5 py-3.5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
          <span className="ml-2 hidden max-w-[200px] truncate rounded-md bg-black/40 px-2.5 py-0.5 text-xs text-zinc-400 sm:inline-block sm:max-w-xs font-mono">
            {project.chrome}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {project.featured && (
            <span className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
              <Sparkles size={12} aria-hidden="true" />
              Featured
            </span>
          )}
          <StatusBadge status={project.status} />
        </div>
      </div>

      <div className={`flex flex-1 flex-col p-6 sm:p-8 ${isTopHero ? 'lg:p-9' : ''}`}>
        <div className={isTopHero ? 'lg:flex lg:items-start lg:justify-between lg:gap-8' : ''}>
          <div className={isTopHero ? 'lg:max-w-2xl' : ''}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className={`font-display font-semibold tracking-tight text-white ${isTopHero ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-2xl sm:text-3xl'}`}>
                {project.name}
              </h3>
            </div>
            {project.tagline && (
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-accent-soft">
                {project.tagline}
              </p>
            )}

            <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
              {project.description}
            </p>
          </div>

          {isTopHero && (
            <div className="hidden lg:flex shrink-0 items-center gap-3 pt-2">
              <Button
                onClick={() => onOpenModal(project)}
                variant="secondary"
                icon={Info}
                size="md"
              >
                Architecture
              </Button>
              {project.github && (
                <Button
                  href={project.github}
                  external
                  variant="secondary"
                  icon={Github}
                  size="md"
                >
                  GitHub
                </Button>
              )}
              {project.liveDemo && (
                <Button
                  href={project.liveDemo}
                  external
                  variant="primary"
                  icon={ExternalLink}
                  size="md"
                >
                  Live Demo
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Feature list */}
        <div className="mt-6 flex-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Key Architecture & Features
          </p>
          <ul className={`mt-3 space-y-2.5 ${isTopHero ? 'grid gap-2.5 sm:grid-cols-2 space-y-0' : ''}`}>
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-xs leading-relaxed text-zinc-300 sm:text-sm">
                <Check size={15} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech badges */}
        <div className="mt-8 border-t border-white/10 pt-5">
          <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Technologies Used
          </p>
          <ul className="flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
            {project.tech.map((techItem) => (
              <li key={techItem}>
                <Tag>{techItem}</Tag>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className={`mt-6 flex flex-wrap items-center gap-3 pt-2 ${isTopHero ? 'lg:hidden' : ''}`}>
          {project.liveDemo && (
            <Button
              href={project.liveDemo}
              external
              variant="primary"
              icon={ExternalLink}
              size="sm"
            >
              Live Demo
            </Button>
          )}
          {project.github && (
            <Button
              href={project.github}
              external
              variant="secondary"
              icon={Github}
              size="sm"
            >
              GitHub
            </Button>
          )}
          <Button
            onClick={() => onOpenModal(project)}
            variant="quiet"
            icon={Info}
            size="sm"
            className="border border-white/10 px-3 py-2 text-xs"
          >
            Details
          </Button>
        </div>
      </div>
    </SpotlightCard>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'All Projects') return true;
    if (activeFilter === 'Featured') return p.featured;
    if (activeFilter === 'Full-Stack') return p.category === 'Full-Stack';
    if (activeFilter === 'Analytics') return p.category === 'Analytics';
    return true;
  });

  const flagshipProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      title="Featured Projects"
      intro="Production full-stack applications and real-world software platforms built with modern frontend frameworks and robust distributed backend architectures."
    >
      {/* Category Filter Tabs */}
      <div className="mb-10 flex flex-wrap items-center gap-2">
        {filterCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveFilter(cat)}
            className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-200 ${
              activeFilter === cat
                ? 'bg-accent text-ink font-semibold shadow-lg shadow-accent/20'
                : 'border border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/20 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Flagship projects grid */}
      <div className="space-y-12">
        {flagshipProjects.length > 0 && (
          <div>
            <div className="mb-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                Core Production Platforms
              </h3>
            </div>
            <ul className="grid gap-8 lg:grid-cols-2">
              {flagshipProjects.map((project, i) => {
                const isTopHero = i === 0 && flagshipProjects.length % 2 === 1;
                return (
                  <Reveal
                    key={project.id || project.name}
                    as="li"
                    delay={i * 0.1}
                    className={isTopHero ? 'lg:col-span-2' : ''}
                  >
                    <ProjectCard
                      project={project}
                      isTopHero={isTopHero}
                      onOpenModal={setSelectedProject}
                    />
                  </Reveal>
                );
              })}
            </ul>
          </div>
        )}

        {/* Other projects */}
        {otherProjects.length > 0 && (
          <div className="border-t border-white/10 pt-10">
            <div className="mb-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-zinc-500" />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Additional Tools & Systems
              </h3>
            </div>
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project, i) => (
                <Reveal key={project.id || project.name} as="li" delay={i * 0.08}>
                  <ProjectCard
                    project={project}
                    onOpenModal={setSelectedProject}
                  />
                </Reveal>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Architecture Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </Section>
  );
}
