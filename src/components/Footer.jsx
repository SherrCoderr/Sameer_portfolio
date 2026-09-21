import { profile } from '../data/profile.js';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-page flex flex-col items-start justify-between gap-3 text-sm text-zinc-500 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with React, Vite, Tailwind CSS and Framer Motion.</p>
      </div>
    </footer>
  );
}
