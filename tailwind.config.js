/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#10243B',
          deep: '#091829',
          dark: '#0C1B2C',
          surface: '#152C47',
          light: '#1E3B5D',
          subtle: '#264870'
        },
        gold: {
          DEFAULT: '#CBA34A',
          light: '#E2C77D',
          soft: '#F4ECDC',
          dark: '#A68233',
          border: 'rgba(203, 163, 74, 0.25)'
        },
        ivory: {
          DEFAULT: '#F8F7F3',
          warm: '#F3F1EB',
          subtle: '#ECE9E1'
        },
        charcoal: {
          DEFAULT: '#303B49',
          body: '#303B49',
          muted: '#737B85',
          light: '#9AA1A9'
        },
        border: {
          DEFAULT: '#E6E7E9',
          subtle: '#ECEEF1',
          dark: '#1C3149'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(16, 36, 59, 0.05)',
        'card': '0 4px 20px -2px rgba(16, 36, 59, 0.06)',
        'card-hover': '0 12px 32px -4px rgba(16, 36, 59, 0.12)',
        'gold-glow': '0 0 25px rgba(203, 163, 74, 0.15)',
      },
      maxWidth: {
        'editorial': '1440px'
      }
    },
  },
  plugins: [],
}
