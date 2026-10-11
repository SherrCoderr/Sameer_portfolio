import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Check, Server, Layers, KeyRound, Copy, Activity } from 'lucide-react';
import Tag from './Tag.jsx';
import Button from './Button.jsx';

export default function ProjectModal({ project, isOpen, onClose }) {
  const [copiedCreds, setCopiedCreds] = useState(false);

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

  const handleCopyCredentials = () => {
    if (!project?.demoCredentials) return;
    const text = `Email: ${project.demoCredentials.email} | Password: ${project.demoCredentials.password}`;
    navigator.clipboard.writeText(text);
    setCopiedCreds(true);
    setTimeout(() => setCopiedCreds(false), 2000);
  };

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
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm dark:bg-black/75"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900 overflow-hidden z-10 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Browser Bar */}
            <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/90 px-6 py-4 dark:border-slate-800 dark:bg-slate-950/60">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex shrink-0 gap-1.5" aria-hidden="true">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 truncate max-w-xs sm:max-w-md">
                  {project.chrome}
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white shadow-xs"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-0.5 text-xs font-semibold text-accent dark:border-blue-900/60 dark:bg-blue-950/60 dark:text-blue-400">
                    {project.tagline || 'Full-Stack Engineering'}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-0.5 text-xs font-semibold text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {project.status.label}
                  </span>
                </div>
                <h2 id="modal-title" className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  {project.name}
                </h2>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>
              </div>

              {/* Quantifiable Metrics Strip */}
              {project.metrics && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl border border-blue-100 bg-blue-50/50 p-3 dark:border-blue-900/40 dark:bg-blue-950/30"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-0.5">
                        {m.label}
                      </span>
                      <span className="font-display text-sm font-bold text-accent dark:text-blue-300">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Live Demo Credentials Box (Recruiter Convenience) */}
              {project.demoCredentials && (
                <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 dark:border-amber-900/60 dark:bg-amber-950/30 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-start gap-2.5 min-w-0">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-amber-500 text-white shadow-xs">
                      <KeyRound size={16} />
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                        Live Demo Test Account
                        <span className="text-[10px] font-normal text-amber-700 dark:text-amber-300">
                          ({project.demoCredentials.note})
                        </span>
                      </h4>
                      <p className="text-xs font-mono text-slate-700 dark:text-slate-300 mt-1">
                        Email: <strong className="font-semibold text-slate-900 dark:text-white">{project.demoCredentials.email}</strong> &bull; Password: <strong className="font-semibold text-slate-900 dark:text-white">{project.demoCredentials.password}</strong>
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyCredentials}
                    className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-all ${
                      copiedCreds
                        ? 'border-emerald-300 bg-emerald-100 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        : 'border-amber-300 bg-white text-slate-700 hover:bg-amber-100/70 dark:border-amber-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800'
                    }`}
                  >
                    {copiedCreds ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                    {copiedCreds ? 'Copied Creds!' : 'Copy Login'}
                  </button>
                </div>
              )}

              {/* Engineering Highlights */}
              <div className="rounded-xl border border-slate-200/80 bg-slate-50/60 dark:border-slate-800 dark:bg-slate-850/60 p-5">
                <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent dark:text-blue-400">
                  <Layers size={15} />
                  Core Architecture & Features
                </h3>
                <ul className="mt-3 space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      <Check size={16} className="mt-0.5 shrink-0 text-accent dark:text-blue-400" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Breakdown if available */}
              {project.architecture && (
                <div className="rounded-xl border border-slate-200/80 bg-slate-50/60 dark:border-slate-800 dark:bg-slate-850/60 p-5">
                  <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent dark:text-blue-400">
                    <Server size={15} />
                    System Design Specifications
                  </h3>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2 text-xs sm:text-sm">
                    {Object.entries(project.architecture).map(([key, value]) => (
                      <div key={key} className="rounded-lg border border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-900 p-3 shadow-xs">
                        <span className="font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-[11px] block mb-1">
                          {key}
                        </span>
                        <span className="text-slate-700 dark:text-slate-200 leading-relaxed font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
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
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 bg-slate-50/80 px-6 py-4 dark:border-slate-800 dark:bg-slate-950/60 sm:px-8">
              <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
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
