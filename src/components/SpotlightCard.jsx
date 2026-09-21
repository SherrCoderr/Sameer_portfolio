import { useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * Card with a soft highlight that follows the pointer (desktop only, purely decorative)
 * and a small lift on hover.
 */
export default function SpotlightCard({ children, className = '', as = 'div', lift = -4 }) {
  const ref = useRef(null);
  const Component = motion[as] ?? motion.div;

  const handleMove = (event) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    el.style.setProperty('--my', `${event.clientY - rect.top}px`);
  };

  return (
    <Component
      ref={ref}
      onPointerMove={handleMove}
      whileHover={{ y: lift }}
      transition={{ type: 'spring', stiffness: 300, damping: 26 }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-surface transition-colors duration-300 hover:border-white/25 ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(360px circle at var(--mx, 50%) var(--my, 0%), rgb(147 164 255 / 0.10), transparent 70%)',
        }}
      />
      <div className="relative h-full">{children}</div>
    </Component>
  );
}
