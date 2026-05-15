/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cp: {
          bg: '#0C0C0E',
          surface: '#15161B',
          border: '#262830',
          text: '#F2F2F7',
          muted: '#9A9CA5',
          accent: '#0070D2',
          gold: '#EF9F27',
          success: '#16C172'
        }
      },
      fontFamily: {
        sans: [
          '"Inter Variable"',
          'Inter',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'sans-serif'
        ]
      }
    }
  },
  plugins: [typography]
};
