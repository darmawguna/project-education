/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:      '#080b14',
        surface: '#0f1320',
        card:    '#131926',
        card2:   '#1a2133',
        border1: '#1e2d47',
        border2: '#263650',
        tcyan:   '#38f5d4',
        tpurple: '#a78bfa',
        tyellow: '#ffd95a',
        tgreen:  '#4ade80',
        torange: '#fb923c',
        tpink:   '#ff6b9d',
        tblue:   '#60a5fa',
        tred:    '#f87171',
        tmuted:  '#64748b',
        tmuted2: '#94a3b8',
        ttext:   '#e2e8f5',
      },
      fontFamily: {
        syne:   ['Syne', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        mono:   ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-cyan':   '0 0 30px rgba(56,245,212,.15)',
        'glow-purple': '0 0 30px rgba(167,139,250,.15)',
      },
      spacing: {
        18: '4.5rem',
      },
    },
  },
  plugins: [],
}
