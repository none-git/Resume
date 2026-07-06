/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: '#d4d4dc',
        'bg-deep': '#08080c',
        'bg-card': '#12121e',
        'bg-surface': '#0a0a10',
        'border-subtle': '#1a1a26',
        'border-default': '#262634',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
