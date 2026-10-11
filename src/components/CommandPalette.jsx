import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ArrowRight,
  ExternalLink,
  Github,
  Mail,
  Download,
  Sun,
  Moon,
  Copy,
  Check,
  Code2,
  Briefcase,
  GraduationCap,
  Sparkles,
  Trophy,
  Layers,
  Send,
  X,
} from 'lucide-react';
import { profile } from '../data/profile.js';
import { projects } from '../data/projects.js';
import { useTheme } from '../context/ThemeContext.jsx';

export default function CommandPalette({ isOpen, onClose, onSelectProject, onOpenEmailModal }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
      onClose();
    }, 1200);
  };

  const allItems = [
    // Navigation
    {
      id: 'nav-about',
      category: 'Navigation',
      label: 'About Me',
      sublabel: 'Background, focus & problem solving philosophy',
      icon: Code2,
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'nav-skills',
      category: 'Navigation',
      label: 'Technical Skills',
      sublabel: 'Languages, frameworks, databases & developer tools',
      icon: Sparkles,
      action: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'nav-projects',
      category: 'Navigation',
      label: 'Featured Projects',
      sublabel: 'Production full-stack platforms and tools',
      icon: Layers,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'nav-experience',
      category: 'Navigation',
      label: 'Experience',
      sublabel: 'Professional internships & data engineering work',
      icon: Briefcase,
      action: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'nav-education',
      category: 'Navigation',
      label: 'Education',
      sublabel: 'Chandigarh University & academic background',
      icon: GraduationCap,
      action: () => {
        document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'nav-achievements',
      category: 'Navigation',
      label: 'Achievements & LeetCode',
      sublabel: '450+ LeetCode milestones, hackathons & certs',
      icon: Trophy,
      action: () => {
        document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'nav-contact',
      category: 'Navigation',
      label: 'Contact Section',
      sublabel: 'Reach out directly or connect on socials',
      icon: Send,
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },

    // Projects Direct
    ...projects.map((p) => ({
      id: `proj-${p.id}`,
      category: 'Projects',
      label: p.name,
      sublabel: `${p.tagline} • ${p.tech.slice(0, 3).join(', ')}`,
      icon: Layers,
      action: () => {
        if (onSelectProject) onSelectProject(p);
        onClose();
      },
    })),

    // Quick Actions
    {
      id: 'action-email-modal',
      category: 'Quick Actions',
      label: 'Send Email (Compose / Choose Client)',
      sublabel: `Open email launcher for ${profile.email}`,
      icon: Mail,
      action: () => {
        onClose();
        if (onOpenEmailModal) onOpenEmailModal();
      },
    },
    {
      id: 'action-copy-email',
      category: 'Quick Actions',
      label: copiedEmail ? 'Copied to Clipboard!' : 'Copy Email Address',
      sublabel: profile.email,
      icon: copiedEmail ? Check : Copy,
      action: handleCopyEmail,
    },
    {
      id: 'action-toggle-theme',
      category: 'Quick Actions',
      label: isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme',
      sublabel: isDark ? 'Activate day appearance' : 'Activate nighttime dark appearance',
      icon: isDark ? Sun : Moon,
      action: () => {
        toggleTheme();
        onClose();
      },
    },
    {
      id: 'action-resume',
      category: 'Quick Actions',
      label: 'Download Resume (PDF)',
      sublabel: 'Sameer_Resume.pdf',
      icon: Download,
      action: () => {
        window.open(profile.links.resume, '_blank');
        onClose();
      },
    },
    {
      id: 'action-leetcode',
      category: 'Quick Actions',
      label: 'Visit LeetCode Profile',
      sublabel: 'leetcode.com/u/SherrCoderr (450+ solved)',
      icon: ExternalLink,
      action: () => {
        window.open(profile.links.leetcode, '_blank', 'noopener,noreferrer');
        onClose();
      },
    },
    {
      id: 'action-github',
      category: 'Quick Actions',
      label: 'Visit GitHub Profile',
      sublabel: 'github.com/SherrCoderr',
      icon: Github,
      action: () => {
        window.open(profile.links.github, '_blank', 'noopener,noreferrer');
        onClose();
      },
    },
  ];

  const filteredItems = allItems.filter(
    (item) =>
      item.label.toLowerCase().includes(query.toLowerCase()) ||
      item.sublabel.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm dark:bg-black/80"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Palette Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          role="dialog"
          aria-modal="true"
          className="relative w-full max-w-xl rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900 z-10 overflow-hidden flex flex-col max-h-[80vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Box */}
          <div className="relative flex items-center border-b border-slate-100 dark:border-slate-800 px-4 py-3.5">
            <Search size={18} className="text-slate-400 dark:text-slate-500 mr-3 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Type a command or search (e.g. projects, leetcode, theme)..."
              className="w-full bg-transparent text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none dark:text-white dark:placeholder:text-slate-500"
            />
            <button
              type="button"
              onClick={onClose}
              className="ml-2 rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200"
              aria-label="Close command palette"
            >
              <X size={16} />
            </button>
          </div>

          {/* Results List */}
          <div className="overflow-y-auto p-2 space-y-1">
            {filteredItems.length === 0 ? (
              <div className="py-12 text-center text-sm text-slate-500 dark:text-slate-400">
                No commands or sections matching "{query}"
              </div>
            ) : (
              filteredItems.map((item, index) => {
                const isSelected = index === selectedIndex;
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={item.action}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full flex items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-xs transition-colors ${
                      isSelected
                        ? 'bg-blue-50 text-accent dark:bg-blue-950/60 dark:text-blue-300'
                        : 'text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg border text-xs ${
                          isSelected
                            ? 'border-blue-200 bg-white text-accent dark:border-blue-900 dark:bg-blue-900/60 dark:text-blue-300'
                            : 'border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400'
                        }`}
                      >
                        <Icon size={14} />
                      </span>
                      <div className="min-w-0">
                        <div className="font-semibold truncate text-slate-900 dark:text-white">
                          {item.label}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                          {item.sublabel}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 ml-2">
                      <span className="rounded border border-slate-200 bg-slate-100/70 px-1.5 py-0.5 text-[10px] font-mono text-slate-500 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400">
                        {item.category}
                      </span>
                      {isSelected && (
                        <ArrowRight size={13} className="text-accent dark:text-blue-400" />
                      )}
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Footer Navigation Hints */}
          <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/70 px-4 py-2.5 text-[11px] text-slate-500 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1">
                <kbd className="rounded border border-slate-300 bg-white px-1.5 py-0.5 font-mono text-[10px] dark:border-slate-700 dark:bg-slate-800">
                  ↑
                </kbd>
                <kbd className="rounded border border-slate-300 bg-white px-1.5 py-0.5 font-mono text-[10px] dark:border-slate-700 dark:bg-slate-800">
                  ↓
                </kbd>
                Navigate
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <kbd className="rounded border border-slate-300 bg-white px-1.5 py-0.5 font-mono text-[10px] dark:border-slate-700 dark:bg-slate-800">
                  ↵
                </kbd>
                Select
              </span>
            </div>
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-slate-300 bg-white px-1.5 py-0.5 font-mono text-[10px] dark:border-slate-700 dark:bg-slate-800">
                ESC
              </kbd>
              Close
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
