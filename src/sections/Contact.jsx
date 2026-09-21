import { Mail, Github, Linkedin, Phone } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import Button from '../components/Button.jsx';
import { profile } from '../data/profile.js';

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative isolate overflow-hidden py-28 md:py-40">
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -z-10 h-[360px] w-[680px] -translate-x-1/2 rounded-full bg-accent/[0.08] blur-[120px]"
      />
      <div className="container-page">
        <Reveal className="max-w-4xl">
          <h2
            id="contact-title"
            className="font-display text-[clamp(2.75rem,8vw,6rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-white"
          >
            Let's build something meaningful.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            I'm open to Software Engineer opportunities. The quickest way to reach me is email.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-3">
          <Button href={`mailto:${profile.email}`} variant="primary" icon={Mail}>
            {profile.email}
          </Button>
          <Button href={profile.links.github} external icon={Github}>
            GitHub
          </Button>
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
