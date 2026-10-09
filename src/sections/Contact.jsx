import { useState } from 'react';
import { Mail, Github, Linkedin, Phone, Copy, Check, Send } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import Button from '../components/Button.jsx';
import { profile } from '../data/profile.js';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative isolate overflow-hidden py-24 md:py-32 bg-gradient-to-t from-blue-50/60 via-slate-50 to-slate-50">
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -z-10 h-[360px] w-[680px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]"
      />
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-accent shadow-xs">
            <Send size={13} aria-hidden="true" />
            <span>Get In Touch</span>
          </div>
          <h2
            id="contact-title"
            className="font-display text-[clamp(2.5rem,7vw,4.75rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-slate-900"
          >
            Let's build something <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
              impactful together.
            </span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
            I'm currently seeking Software Engineering internships and full-stack developer opportunities. Feel free to reach out directly via email or connect on LinkedIn.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-9 flex flex-wrap items-center gap-3.5">
          {/* Send Email direct button */}
          <Button href={`mailto:${profile.email}`} variant="primary" icon={Mail}>
            Send Email
          </Button>

          {/* Copy Email to Clipboard with instant feedback */}
          <button
            type="button"
            onClick={handleCopyEmail}
            className={`inline-flex items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200 shadow-xs ${
              copied
                ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                : 'border-slate-200/90 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900'
            }`}
            aria-label="Copy email address"
          >
            {copied ? (
              <>
                <Check size={16} className="text-emerald-600" />
                <span className="font-semibold text-emerald-700">Copied {profile.email}!</span>
              </>
            ) : (
              <>
                <Copy size={16} className="text-slate-400" />
                <span>Copy {profile.email}</span>
              </>
            )}
          </button>

          {/* GitHub link */}
          <Button href={profile.links.github} external icon={Github}>
            GitHub
          </Button>

          {/* LinkedIn link */}
          <Button href={profile.links.linkedin} external icon={Linkedin}>
            LinkedIn
          </Button>

          {profile.showPhone && (
            <Button href={`tel:+91${profile.phone}`} icon={Phone}>
              {profile.phone}
            </Button>
          )}
        </Reveal>
      </div>
    </section>
  );
}
