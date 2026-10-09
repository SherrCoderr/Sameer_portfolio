import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Check, Server, Shield, Database, Cpu, Layers } from 'lucide-react';
import Tag from './Tag.jsx';
import Button from './Button.jsx';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl border border-white/15 bg-[#0e1014] shadow-2xl overflow-hidden z-10 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Browser Bar */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-3 w-3 rounded-full bg-red-500/60" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/60" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/60" />
                </div>
                <span className="text-xs font-mono text-zinc-400 truncate max-w-xs sm:max-w-md">
                  {project.chrome}
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-zinc-400 transition-colors hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-0.5 text-xs font-medium text-accent">
                    {project.tagline || 'Full-Stack Engineering'}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-0.5 text-xs font-medium text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {project.status.label}
                  </span>
                </div>
                <h2 id="modal-title" className="font-display text-2xl sm:text-3xl font-semibold text-white">
                  {project.name}
                </h2>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-300">
                  {project.description}
                </p>
              </div>

              {/* Engineering Highlights */}
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
                  <Layers size={15} />
                  Core Architecture & Features
                </h3>
                <ul className="mt-3 space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      <Check size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Breakdown if available */}
              {project.architecture && (
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                  <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
                    <Server size={15} />
                    System Design Specifications
                  </h3>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2 text-xs sm:text-sm">
                    {Object.entries(project.architecture).map(([key, value]) => (
                      <div key={key} className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                        <span className="font-semibold uppercase tracking-wider text-zinc-400 text-[11px] block mb-1">
                          {key}
                        </span>
                        <span className="text-zinc-300 leading-relaxed">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                  Technologies & Frameworks
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li key={t}>
                      <Tag>{t}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer with Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-white/[0.02] p-5 sm:px-8">
              <div className="text-xs text-zinc-400">
                {project.status.note}
              </div>
              <div className="flex items-center gap-3">
                {project.github && (
                  <Button href={project.github} external variant="secondary" icon={Github} size="sm">
                    View Source
                  </Button>
                )}
                {project.liveDemo && (
                  <Button href={project.liveDemo} external variant="primary" icon={ExternalLink} size="sm">
                    Open Live App
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
