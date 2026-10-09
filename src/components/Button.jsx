import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-accent text-white hover:bg-accent-hover shadow-sm shadow-blue-500/20 active:scale-[0.98]',
  secondary: 'border border-slate-200/90 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 shadow-xs active:scale-[0.98]',
  quiet: 'text-slate-600 hover:text-accent hover:bg-blue-50/80',
};

const sizes = {
  md: 'px-5 py-2.5 text-sm font-medium',
  sm: 'px-3.5 py-1.5 text-xs font-medium',
};

/** Link-styled-as-button or clickable button. Pass `external` for links that leave the site. */
export default function Button({
  href,
  onClick,
  children,
  icon: Icon,
  variant = 'secondary',
  size = 'md',
  external = false,
  download = false,
  className = '',
  ...rest
}) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  const baseClasses = `inline-flex items-center justify-center gap-2 rounded-full transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        download={download || undefined}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
        className={baseClasses}
        {...externalProps}
        {...rest}
      >
        {Icon && <Icon size={size === 'sm' ? 14 : 16} aria-hidden="true" className="shrink-0" />}
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      className={baseClasses}
      {...rest}
    >
      {Icon && <Icon size={size === 'sm' ? 14 : 16} aria-hidden="true" className="shrink-0" />}
      {children}
    </motion.button>
  );
}
