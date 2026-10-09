import { profile } from '../data/profile.js';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/90 bg-slate-100/50 py-8">
      <div className="container-page flex flex-col items-start justify-between gap-3 text-sm text-slate-500 sm:flex-row sm:items-center">
        <p className="font-medium text-slate-700">© {new Date().getFullYear()} {profile.name} &bull; Software Engineer</p>
        <p>Built with React, Vite, Tailwind CSS and Framer Motion.</p>
      </div>
    </footer>
  );
}
