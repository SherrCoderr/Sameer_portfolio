import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-accent text-ink hover:bg-accent-soft',
  secondary: 'border border-white/15 bg-white/[0.04] text-zinc-100 hover:border-white/30 hover:bg-white/[0.09]',
  quiet: 'text-zinc-300 hover:text-white',
};

const sizes = {
  md: 'px-5 py-3 text-sm',
  sm: 'px-4 py-2 text-sm',
};

/** Link-styled-as-button. Pass `external` for links that leave the site. */
export default function Button({
  href,
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
  return (
    <motion.a
      href={href}
      download={download || undefined}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
      {...externalProps}
      {...rest}
    >
      {Icon && <Icon size={16} aria-hidden="true" />}
      {children}
    </motion.a>
  );
}
