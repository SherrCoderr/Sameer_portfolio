export default function Tag({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-lg border border-slate-200/90 bg-slate-100/70 px-2.5 py-1 text-xs font-medium text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 dark:border-slate-800 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:border-blue-800 dark:hover:bg-blue-950/60 dark:hover:text-blue-300 ${className}`}
    >
      {children}
    </span>
  );
}
