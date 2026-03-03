/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'space-bg': '#0B0E14',
        'space-surface': '#111827',
        'neon-cyan': '#00F2FF',
        'neon-purple': '#8B5CF6',
        'neon-cyan-dim': 'rgba(0,242,255,0.15)',
        'neon-purple-dim': 'rgba(139,92,246,0.15)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backdropBlur: {
        xs: '4px',
        md: '12px',
        xl: '24px',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0,242,255,0.4), 0 0 60px rgba(0,242,255,0.1)',
        'neon-purple': '0 0 20px rgba(139,92,246,0.4), 0 0 60px rgba(139,92,246,0.1)',
        'glow-sm': '0 0 8px rgba(0,242,255,0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        glitch: 'glitch 2s steps(1) infinite',
        float: 'float 6s ease-in-out infinite',
        'border-spin': 'border-spin 6s linear infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { clipPath: 'inset(0 0 98% 0)', transform: 'translateX(-2px)' },
          '20%': { clipPath: 'inset(40% 0 50% 0)', transform: 'translateX(2px)' },
          '40%': { clipPath: 'inset(70% 0 10% 0)', transform: 'translateX(-2px)' },
          '60%': { clipPath: 'inset(20% 0 70% 0)', transform: 'translateX(3px)' },
          '80%': { clipPath: 'inset(85% 0 5% 0)', transform: 'translateX(-1px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
