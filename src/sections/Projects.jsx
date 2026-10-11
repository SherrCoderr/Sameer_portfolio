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
      className={`inline-flex shrink-0 whitespace-nowrap items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
        isLive
          ? 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-300'
          : 'border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800/60 dark:bg-amber-950/40 dark:text-amber-300'
      }`}
    >
      <Circle
        size={7}
        aria-hidden="true"
        className={`fill-current ${isLive ? 'text-emerald-500 animate-pulse' : 'text-amber-500'}`}
      />
      {status.label}
    </span>
  );
}

function ProjectCard({ project, isTopHero = false, onOpenModal }) {
  return (
    <SpotlightCard
      as="article"
      className="flex h-full flex-col border-slate-200/90 bg-white hover:border-blue-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500/50 group shadow-xs"
    >
      {/* Browser chrome header bar - responsive, prevents clipping badges */}
      <div className="flex items-center justify-between gap-2.5 border-b border-slate-100 bg-slate-50/90 px-4 sm:px-5 py-3 dark:border-slate-800 dark:bg-slate-900/90">
        {/* Left: 3 window control dots + responsive URL pill */}
        <div className="flex min-w-0 flex-1 items-center gap-2 mr-2">
          <div className="flex shrink-0 gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
          </div>
          <span className="hidden min-w-0 max-w-[120px] xs:max-w-[150px] sm:inline-block sm:max-w-[170px] md:max-w-[220px] truncate rounded-md border border-slate-200/80 bg-white px-2 py-0.5 font-mono text-[11px] text-slate-500 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400">
            {project.chrome}
          </span>
        </div>

        {/* Right: Badges container - guaranteed shrink-0 so it NEVER gets cut off */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 ml-auto">
          {project.featured && (
            <span className="inline-flex shrink-0 whitespace-nowrap items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-accent dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-400">
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
              <h3 className={`font-display font-bold tracking-tight text-slate-900 dark:text-slate-100 ${isTopHero ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-2xl sm:text-3xl'}`}>
                {project.name}
              </h3>
            </div>
            {project.tagline && (
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-accent dark:text-blue-400">
                {project.tagline}
              </p>
            )}

            <p className="mt-3.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
              {project.description}
            </p>

            {/* Quantifiable Engineering Metrics */}
            {project.metrics && (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.metrics.map((m) => (
                  <span
                    key={m.label}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-blue-200/80 bg-blue-50/60 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-blue-900/50 dark:bg-blue-950/40 dark:text-slate-300"
                  >
                    <span className="font-bold text-accent dark:text-blue-400">{m.label}:</span>
                    <span>{m.value}</span>
                  </span>
                ))}
              </div>
            )}

            {/* Live Demo Credentials Indicator */}
            {project.demoCredentials && (
              <button
                type="button"
                onClick={() => onOpenModal(project)}
                className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-amber-700 hover:text-amber-800 dark:text-amber-400 dark:hover:text-amber-300 transition-colors"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                <span>Demo login credentials available (click Details) &rarr;</span>
              </button>
            )}
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
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Key Architecture & Features
          </p>
          <ul className={`mt-3 space-y-2.5 ${isTopHero ? 'grid gap-2.5 sm:grid-cols-2 space-y-0' : ''}`}>
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-700 dark:text-slate-300 sm:text-sm">
                <Check size={16} className="mt-0.5 shrink-0 text-accent dark:text-blue-400" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech badges */}
        <div className="mt-8 border-t border-slate-100 pt-5 dark:border-slate-800">
          <p className="mb-2.5 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
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
            variant="secondary"
            icon={Info}
            size="sm"
            className="text-xs"
          >
            Details
          </Button>
        </div>
      </div>
    </SpotlightCard>
  );
}

export default function Projects({ selectedProject: externalProject, setSelectedProject: externalSetProject }) {
  const [activeFilter, setActiveFilter] = useState('All Projects');
  const [internalProject, setInternalProject] = useState(null);
  const selectedProject = externalProject !== undefined ? externalProject : internalProject;
  const setSelectedProject = externalSetProject || setInternalProject;

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
            className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
              activeFilter === cat
                ? 'bg-accent text-white shadow-sm shadow-blue-500/20'
                : 'border border-slate-200/90 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 shadow-xs dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
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
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
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
          <div className="border-t border-slate-200 pt-10 dark:border-slate-800">
            <div className="mb-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-slate-400" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
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
