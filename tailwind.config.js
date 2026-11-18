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
        // Master Prompt 03 — Premium Cinematic Sports Identity
        midnight: {
          DEFAULT: '#10141C', // Secondary background
          dark: '#080A0F',    // Primary deep background
          light: '#171D28',   // Tertiary surface
          elevated: '#202735', // Elevated surface
        },
        lime: {
          DEFAULT: '#B7F34A',
          hover: '#C8F76B',
          muted: 'rgba(183, 243, 74, 0.12)',
        },
        'warm-white': '#F5F7FA', // Crisp editorial primary text
        slate: {
          DEFAULT: '#2A3443',     // Clean structural border
          border: '#364356',     // Interactive/strong border
          card: '#171D28',       // Card surface
          elevated: '#202735',   // Hovered/elevated card
        },
        coral: {
          DEFAULT: '#FF704D',
          hover: '#FF8A6B',
          muted: 'rgba(255, 112, 77, 0.12)',
        },
        gold: {
          DEFAULT: '#F2B84B',
          hover: '#FFC86B',
        },
        'muted-text': '#A7B0BE', // Secondary text
        'subtle-text': '#737E8E', // Caption/tertiary text

        // Status & Feedback States
        success: {
          DEFAULT: '#39B980',
          muted: 'rgba(57, 185, 128, 0.15)',
        },
        warning: {
          DEFAULT: '#E8A33A',
          muted: 'rgba(232, 163, 58, 0.15)',
        },
        error: {
          DEFAULT: '#E05252',
          muted: 'rgba(224, 82, 82, 0.15)',
        },
        info: {
          DEFAULT: '#38BDF8',
          muted: 'rgba(56, 189, 248, 0.15)',
        },

        // Brand backward-compatible aliases
        cricket: {
          dark: '#080A0F',
          'dark-elevated': '#171D28',
          'dark-card': '#171D28',
          'dark-border': '#2A3443',
          green: {
            DEFAULT: '#B7F34A',
            neon: '#C8F76B',
            dark: '#85C421',
            light: '#D9FA8E',
          },
          gold: {
            DEFAULT: '#F2B84B',
            light: '#FFD54F',
            dark: '#C79100',
          },
          crimson: {
            DEFAULT: '#FF704D',
            light: '#FF8A6B',
            dark: '#D94926',
          },
          silver: '#F5F7FA',
          muted: '#A7B0BE',
        },
      },
      fontFamily: {
        heading: ['Oswald', 'Bebas Neue', 'sans-serif'],
        display: ['Bebas Neue', 'Oswald', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'lime-glow': '0 0 25px -4px rgba(183, 243, 74, 0.32)',
        'coral-glow': '0 0 25px -4px rgba(255, 112, 77, 0.32)',
        'card-depth': '0 12px 32px -8px rgba(0, 0, 0, 0.6)',
        'card-elevated': '0 20px 40px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(183, 243, 74, 0.25)',
      },
      borderRadius: {
        'brand': '10px',
        'brand-lg': '14px',
      },
    },
  },
  plugins: [],
}
