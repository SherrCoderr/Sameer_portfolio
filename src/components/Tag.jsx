export default function Tag({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-zinc-300 transition-colors hover:border-accent/40 hover:bg-white/[0.07] hover:text-white ${className}`}
    >
      {children}
    </span>
  );
}
