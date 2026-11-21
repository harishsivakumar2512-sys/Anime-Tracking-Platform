/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#090810',
        card: '#131124',
        cardBorder: '#231e3d',
        accent: {
          DEFAULT: '#7c3aed',
          hover: '#6d28d9',
          light: '#a78bfa',
          glow: 'rgba(124, 58, 237, 0.4)'
        },
        navy: {
          900: '#07060d',
          800: '#0c0a17',
          700: '#141126',
          600: '#1c1836',
          500: '#28234d'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 25px rgba(124, 58, 237, 0.25)',
        'glow-lg': '0 0 35px rgba(124, 58, 237, 0.4)',
        'stat': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
