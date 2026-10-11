import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Download, Search } from 'lucide-react';
import { navItems, profile } from '../data/profile.js';
import { useActiveSection } from '../hooks/useActiveSection.js';
import ThemeToggle from './ThemeToggle.jsx';

const sectionIds = ['about', 'skills', 'projects', 'experience', 'education', 'achievements', 'contact'];

export default function Navbar({ onOpenCommandPalette }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const isActive = (item) => active === item.id || item.also?.includes(active);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-slate-200/90 bg-white/90 backdrop-blur-md shadow-xs dark:border-slate-800/80 dark:bg-slate-950/85'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav aria-label="Primary" className="container-page flex h-16 items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white"
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden="true"
            className="grid h-7 w-7 place-items-center rounded-lg border border-blue-200 bg-blue-50 text-sm font-bold text-accent dark:border-blue-900/60 dark:bg-blue-950/60 dark:text-blue-400"
          >
            S
          </span>
          {profile.name}
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive(item) ? 'true' : undefined}
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  isActive(item)
                    ? 'bg-slate-100 text-accent font-semibold shadow-xs dark:bg-slate-800 dark:text-blue-400'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Command Palette Trigger */}
          <button
            type="button"
            onClick={onOpenCommandPalette}
            className="flex items-center gap-1.5 sm:gap-2 rounded-full border border-slate-200 bg-slate-50/80 px-2.5 sm:px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-slate-300 hover:bg-white hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-slate-700 dark:hover:text-white shadow-2xs"
            aria-label="Open command palette (Ctrl+K)"
            title="Open Command Palette (Ctrl+K / Cmd+K)"
          >
            <Search size={13} className="text-slate-400 dark:text-slate-500" />
            <span className="hidden md:inline">Commands</span>
            <kbd className="rounded border border-slate-300 bg-white px-1.5 py-0.2 font-mono text-[10px] text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
              ⌘K
            </kbd>
          </button>

          {/* Theme appearance toggle button */}
          <ThemeToggle />

          {profile.links.resume && (
            <a
              href={profile.links.resume}
              download
              className="hidden items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-accent-hover shadow-sm shadow-blue-500/20 sm:inline-flex"
            >
              <Download size={15} aria-hidden="true" />
              Resume
            </a>
          )}

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 lg:hidden shadow-xs"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95 lg:hidden shadow-md"
          >
            <ul className="container-page flex flex-col gap-1 pb-6 pt-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      isActive(item)
                        ? 'bg-blue-50 text-accent font-semibold dark:bg-blue-950/40 dark:text-blue-400'
                        : 'text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-900'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              {profile.links.resume && (
                <li className="pt-3">
                  <a
                    href={profile.links.resume}
                    download
                    className="flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white shadow-sm shadow-blue-500/20"
                  >
                    <Download size={16} aria-hidden="true" />
                    Download Resume
                  </a>
                </li>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
