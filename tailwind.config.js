/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#0071e3',
          hover: '#0077ED',
          light: '#2997ff',
          link: '#0066cc',
          50: '#F2F8FF',
          100: '#E1EFFF',
          200: '#BAE0FF',
          500: '#0071e3',
          600: '#0066cc',
          700: '#0052a3'
        },
        apple: {
          bg: '#ffffff',
          text: '#1d1d1f',
          subtext: '#86868b',
          border: '#e5e7eb',
          surface: '#f5f5f7',
          blue: '#0071e3',
          secondaryBlue: '#2997ff'
        }
      },
      fontFamily: {
        sans: ['"SF Pro Display"', 'sans-serif'],
        display: ['"SF Pro Display"', 'sans-serif'],
        text: ['"SF Pro Display"', 'sans-serif'],
        serif: ['"SF Pro Display"', 'sans-serif'],
        mono: ['"SF Pro Display"', 'monospace']
      },
      borderRadius: {
        'pill': '980px',
        'card': '8px',
        'apple': '12px'
      },
      boxShadow: {
        'apple-sm': '3px 5px 30px 0px rgba(0, 0, 0, 0.22)',
        'apple-subtle': '0 2px 12px 0 rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
