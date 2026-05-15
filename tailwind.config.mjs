/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cp: {
          bg: 'var(--cp-bg)',
          surface: 'var(--cp-surface)',
          border: 'var(--cp-border)',
          text: 'var(--cp-text)',
          muted: 'var(--cp-muted)',
          accent: 'var(--cp-accent)',
          gold: 'var(--cp-gold)',
          success: 'var(--cp-success)'
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
