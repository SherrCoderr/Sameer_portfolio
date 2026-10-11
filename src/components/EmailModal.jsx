import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Copy, Check, ExternalLink, Send, Sparkles } from 'lucide-react';
import { profile } from '../data/profile.js';

export default function EmailModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('Software Engineering Opportunity - Portfolio Inquiry');
  const [message, setMessage] = useState(
    `Hi ${profile.name},\n\nI reviewed your portfolio and would like to connect regarding an engineering opportunity.\n\nBest regards,\n`
  );

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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getEncodedMailto = () => {
    const encSub = encodeURIComponent(subject);
    const encBody = encodeURIComponent(message);
    return `mailto:${profile.email}?subject=${encSub}&body=${encBody}`;
  };

  const getGmailUrl = () => {
    const encSub = encodeURIComponent(subject);
    const encBody = encodeURIComponent(message);
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${encSub}&body=${encBody}`;
  };

  const getOutlookUrl = () => {
    const encSub = encodeURIComponent(subject);
    const encBody = encodeURIComponent(message);
    return `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(profile.email)}&subject=${encSub}&body=${encBody}`;
  };

  const handleOpenMailApp = () => {
    window.location.href = getEncodedMailto();
  };

  if (!isOpen) return null;

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
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="email-modal-title"
            className="relative w-full max-w-xl rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900 z-10 overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-6 py-4 dark:border-slate-800 dark:bg-slate-950/60">
              <div className="flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-lg border border-blue-200 bg-blue-50 text-accent dark:border-blue-900 dark:bg-blue-950/70 dark:text-blue-400">
                  <Mail size={16} />
                </span>
                <div>
                  <h3 id="email-modal-title" className="text-sm font-bold text-slate-900 dark:text-white">
                    Send an Email to {profile.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{profile.email}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:bg-slate-100 hover:text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors shadow-xs"
                aria-label="Close dialog"
              >
                <X size={16} />
              </button>
            </div>

            {/* Quick 1-Click Launchers */}
            <div className="p-6 space-y-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                  Choose How to Send
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {/* Gmail Web */}
                  <a
                    href={getGmailUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-blue-200 bg-blue-50/70 p-3 text-left transition-all hover:border-blue-400 hover:bg-blue-50 hover:shadow-sm dark:border-blue-900/60 dark:bg-blue-950/40 dark:hover:border-blue-700 group"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-red-500 text-white font-bold text-xs shadow-xs">
                        M
                      </span>
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1">
                          Gmail Web
                          <span className="rounded bg-blue-200/60 px-1 py-0.2 text-[9px] font-semibold text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                            Browser
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">Opens in new tab</p>
                      </div>
                    </div>
                    <ExternalLink size={14} className="text-slate-400 group-hover:text-accent transition-colors" />
                  </a>

                  {/* Native Mail App */}
                  <button
                    type="button"
                    onClick={handleOpenMailApp}
                    className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-left transition-all hover:border-slate-300 hover:bg-white hover:shadow-sm dark:border-slate-800 dark:bg-slate-800/50 dark:hover:border-slate-700 group"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-600 text-white shadow-xs">
                        <Mail size={16} />
                      </span>
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">
                          Mail App
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">Outlook, Apple Mail</p>
                      </div>
                    </div>
                    <Send size={14} className="text-slate-400 group-hover:text-accent transition-colors" />
                  </button>

                  {/* Outlook Web */}
                  <a
                    href={getOutlookUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-left transition-all hover:border-slate-300 hover:bg-white hover:shadow-sm dark:border-slate-800 dark:bg-slate-800/50 dark:hover:border-slate-700 group"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-sky-600 text-white font-bold text-xs shadow-xs">
                        O
                      </span>
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">
                          Outlook Web
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">Office 365 / Hotmail</p>
                      </div>
                    </div>
                    <ExternalLink size={14} className="text-slate-400 group-hover:text-accent transition-colors" />
                  </a>

                  {/* Copy Email Address */}
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className={`flex items-center justify-between rounded-xl border p-3 text-left transition-all shadow-xs ${
                      copied
                        ? 'border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300'
                        : 'border-slate-200 bg-slate-50/70 hover:border-slate-300 hover:bg-white dark:border-slate-800 dark:bg-slate-800/50 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`grid h-8 w-8 place-items-center rounded-lg shadow-xs ${
                          copied ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200'
                        }`}
                      >
                        {copied ? <Check size={16} /> : <Copy size={16} />}
                      </span>
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">
                          {copied ? 'Copied to Clipboard!' : 'Copy Address'}
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate max-w-[140px]">
                          {profile.email}
                        </p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Message Customizer */}
              <div className="border-t border-slate-100 pt-4 dark:border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="email-subject-input" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Subject Line
                  </label>
                  <span className="text-[11px] text-slate-400 dark:text-slate-500">Auto-filled</span>
                </div>
                <input
                  id="email-subject-input"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-800 focus:border-accent focus:bg-white focus:outline-none focus:ring-1 focus:ring-accent dark:border-slate-800 dark:bg-slate-850 dark:text-slate-200 dark:focus:border-blue-500 dark:focus:bg-slate-900"
                />

                <div className="flex items-center justify-between mt-3 mb-2">
                  <label htmlFor="email-message-input" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Message Body
                  </label>
                </div>
                <textarea
                  id="email-message-input"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/60 p-3 text-xs sm:text-sm text-slate-800 focus:border-accent focus:bg-white focus:outline-none focus:ring-1 focus:ring-accent dark:border-slate-800 dark:bg-slate-850 dark:text-slate-200 dark:focus:border-blue-500 dark:focus:bg-slate-900 resize-none font-sans"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/80 px-6 py-3.5 dark:border-slate-800 dark:bg-slate-950/60">
              <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Sparkles size={13} className="text-accent" />
                Direct inbox delivery
              </span>
              <a
                href={getGmailUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-white transition-all hover:bg-accent-hover shadow-sm shadow-blue-500/20"
              >
                Send via Gmail &rarr;
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
