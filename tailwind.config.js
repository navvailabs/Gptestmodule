/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'trust-gray': '#F8FAFC',
        'accent-teal': '#14B8A6',
        'warning-amber': '#F59E0B',
        primary: {
          DEFAULT: '#0F6E6E',
          dark: '#0A2540',
        },
        semantic: {
          success: '#10B981',
          error: '#EF4444',
          info: '#3B82F6',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
      },
      boxShadow: {
        'feature-card': '0 10px 30px rgba(0, 0, 0, 0.1), 0 1px 8px rgba(0, 0, 0, 0.06)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        'medical': '0 4px 20px rgba(15, 110, 110, 0.15)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.7' },
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.transform-3d': {
          'transform-style': 'preserve-3d',
        },
      })
    }
  ],
}
