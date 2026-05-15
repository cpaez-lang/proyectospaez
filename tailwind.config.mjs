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
          surface: '#141416',
          border: '#1E1E22',
          text: '#E8E0D4',
          muted: '#6B6872',
          accent: '#0070D2',
          gold: '#EF9F27',
          success: '#1D9E75'
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
        ],
        mono: [
          '"JetBrains Mono Variable"',
          'ui-monospace',
          'SFMono-Regular',
          'monospace'
        ]
      }
    }
  },
  plugins: [typography]
};
