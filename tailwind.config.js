/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Phase 01 Official Brand Colors
        midnight: {
          DEFAULT: '#101827',
          dark: '#0B111D',
          light: '#162034',
        },
        lime: {
          DEFAULT: '#B7F34A',
          hover: '#C8F76B',
          muted: 'rgba(183, 243, 74, 0.15)',
        },
        'warm-white': '#F5F3EB',
        slate: {
          DEFAULT: '#263449',
          border: '#32445E',
          card: '#182337',
        },
        coral: {
          DEFAULT: '#FF704D',
          hover: '#FF8A6B',
        },
        'muted-text': '#8491A3',

        // Feedback / Status States
        success: {
          DEFAULT: '#22C55E',
          muted: 'rgba(34, 197, 94, 0.15)',
        },
        warning: {
          DEFAULT: '#F59E0B',
          muted: 'rgba(245, 158, 11, 0.15)',
        },
        error: {
          DEFAULT: '#EF4444',
          muted: 'rgba(239, 68, 68, 0.15)',
        },
        info: {
          DEFAULT: '#38BDF8',
          muted: 'rgba(56, 189, 248, 0.15)',
        },

        // Brand backward-compatible aliases
        cricket: {
          dark: '#101827',
          'dark-elevated': '#162034',
          'dark-card': '#182337',
          'dark-border': '#263449',
          green: {
            DEFAULT: '#B7F34A',
            neon: '#C8F76B',
            dark: '#85C421',
            light: '#D9FA8E',
          },
          gold: {
            DEFAULT: '#FFB800',
            light: '#FFD54F',
            dark: '#C79100',
          },
          crimson: {
            DEFAULT: '#FF704D',
            light: '#FF8A6B',
            dark: '#D94926',
          },
          silver: '#F5F3EB',
          muted: '#8491A3',
        },
      },
      fontFamily: {
        heading: ['Oswald', 'Bebas Neue', 'sans-serif'],
        display: ['Bebas Neue', 'Oswald', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'lime-glow': '0 0 25px -4px rgba(183, 243, 74, 0.35)',
        'coral-glow': '0 0 25px -4px rgba(255, 112, 77, 0.35)',
        'card-depth': '0 12px 32px -8px rgba(0, 0, 0, 0.45)',
      },
      borderRadius: {
        'brand': '10px',
      },
    },
  },
  plugins: [],
}
