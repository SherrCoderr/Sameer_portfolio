export default function Tag({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-lg border border-slate-200/90 bg-slate-100/70 px-2.5 py-1 text-xs font-medium text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 ${className}`}
    >
      {children}
    </span>
  );
}
