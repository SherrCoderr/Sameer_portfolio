import { Mail, Github, Linkedin, Phone, ArrowUpRight } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import Button from '../components/Button.jsx';
import { profile } from '../data/profile.js';

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative isolate overflow-hidden py-28 md:py-36">
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -z-10 h-[360px] w-[680px] -translate-x-1/2 rounded-full bg-accent/[0.08] blur-[120px]"
      />
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-medium text-accent">
            Get In Touch
          </div>
          <h2
            id="contact-title"
            className="font-display text-[clamp(2.5rem,7vw,5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white"
          >
            Let's build something impactful together.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300 md:text-lg">
            I'm currently looking for Software Engineer and Full Stack Developer roles. Feel free to reach out directly via email or connect on LinkedIn and GitHub.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-9 flex flex-wrap gap-3.5">
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
