/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F172A', // Slate 900
        surface: {
          DEFAULT: '#FFFFFF',
          page: '#F8FAFC', // Slate 50
          subtle: '#F1F5F9', // Slate 100
          border: '#E2E8F0', // Slate 200
        },
        accent: {
          DEFAULT: '#2563EB', // Blue 600
          hover: '#1D4ED8', // Blue 700
          soft: '#EFF6FF', // Blue 50
          subtle: '#DBEAFE', // Blue 100
          deep: '#1E40AF', // Blue 800
          violet: '#7C3AED', // Violet 600
          'violet-soft': '#F5F3FF', // Violet 50
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Instrument Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        card: '0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05)',
        'card-hover': '0 12px 30px -10px rgb(37 99 235 / 0.08), 0 4px 12px -2px rgb(0 0 0 / 0.03)',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(24px,-16px,0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
      },
      animation: {
        drift: 'drift 18s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
