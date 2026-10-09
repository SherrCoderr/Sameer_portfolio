import { useState } from 'react';
import { Mail, Github, Linkedin, Phone, Copy, Check, ArrowUpRight, Send } from 'lucide-react';
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
    <section id="contact" aria-labelledby="contact-title" className="relative isolate overflow-hidden py-28 md:py-36">
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -z-10 h-[360px] w-[680px] -translate-x-1/2 rounded-full bg-accent/[0.08] blur-[120px]"
      />
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-medium text-accent">
            <Send size={13} aria-hidden="true" />
            <span>Get In Touch</span>
          </div>
          <h2
            id="contact-title"
            className="font-display text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-white"
          >
            Let's build something impactful together.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300 md:text-lg">
            I'm currently seeking Software Engineering internships and full-stack developer opportunities. The best way to reach me is directly via email or LinkedIn.
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
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-medium text-zinc-100 transition-colors hover:border-white/30 hover:bg-white/[0.09]"
            aria-label="Copy email address"
          >
            {copied ? (
              <>
                <Check size={16} className="text-emerald-400" />
                <span className="text-emerald-300 font-medium">Copied {profile.email}!</span>
              </>
            ) : (
              <>
                <Copy size={16} className="text-zinc-400" />
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
