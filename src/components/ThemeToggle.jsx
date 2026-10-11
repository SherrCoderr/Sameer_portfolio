import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.jsx';

export default function ThemeToggle({ className = '', size = 'md' }) {
  const { isDark, toggleTheme } = useTheme();

  const buttonSizeClasses =
    size === 'sm'
      ? 'h-9 w-9 text-xs'
      : 'h-10 w-10 text-sm';

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`relative grid place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-xs transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white ${buttonSizeClasses} ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        key={isDark ? 'dark' : 'light'}
        initial={{ rotate: -45, opacity: 0, scale: 0.6 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 45, opacity: 0, scale: 0.6 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="grid place-items-center"
      >
        {isDark ? (
          <Sun size={size === 'sm' ? 17 : 19} className="text-amber-400" aria-hidden="true" />
        ) : (
          <Moon size={size === 'sm' ? 17 : 19} className="text-slate-700" aria-hidden="true" />
        )}
      </motion.div>
    </motion.button>
  );
}
