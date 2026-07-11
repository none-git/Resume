/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Neon accent system (single accent — change --neon to recolor whole site)
        neon: '#c2f73e',
        'neon-dim': '#9bc22e',
        'neon-glow': 'rgba(194, 247, 62, 0.5)',

        // Monochrome base (deeper & cooler than before)
        accent: '#ededf0',
        'bg-deep': '#060608',
        'bg-card': '#0b0b11',
        'bg-surface': '#08080d',
        'border-subtle': '#15151f',
        'border-default': '#22222e',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Noto Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(194, 247, 62, 0.25)',
        'glow-sm': '0 0 10px rgba(194, 247, 62, 0.2)',
        'glow-md': '0 0 30px rgba(194, 247, 62, 0.35)',
        'glow-lg': '0 0 50px rgba(194, 247, 62, 0.45)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        glitch: 'glitch 4s steps(1) infinite',
        float: 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        glitch: {
          '0%, 92%, 100%': { transform: 'translate(0)' },
          '93%': { transform: 'translate(-2px, 1px)' },
          '94%': { transform: 'translate(2px, -1px)' },
          '95%': { transform: 'translate(-1px, -1px)' },
          '96%': { transform: 'translate(1px, 1px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
