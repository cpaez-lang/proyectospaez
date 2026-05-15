import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import AstroPWA from '@vite-pwa/astro';

export default defineConfig({
  site: 'https://proyectospaez.com',
  integrations: [
    mdx(),
    tailwind({ applyBaseStyles: false }),
    sitemap(),
    icon({ include: { lucide: ['*'], 'simple-icons': ['*'] } }),
    AstroPWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Proyectos Páez',
        short_name: 'ProyectosPáez',
        description: 'Portafolio de Camilo Páez — Solutions Engineer Salesforce',
        theme_color: '#0C0C0E',
        background_color: '#0C0C0E',
        display: 'standalone',
        icons: [
          { src: '/images/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/images/icon-512.png', sizes: '512x512', type: 'image/png' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,webp,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /\.(?:webp|svg|png)$/,
            handler: 'CacheFirst',
            options: { cacheName: 'images', expiration: { maxEntries: 50 } }
          }
        ]
      }
    })
  ],
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Atkinson',
      cssVariable: '--font-atkinson',
      fallbacks: ['sans-serif'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/atkinson-regular.woff'],
            weight: 400,
            style: 'normal',
            display: 'swap'
          },
          {
            src: ['./src/assets/fonts/atkinson-bold.woff'],
            weight: 700,
            style: 'normal',
            display: 'swap'
          }
        ]
      }
    }
  ],
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
  output: 'static',
  build: { inlineStylesheets: 'auto' },
  vite: {
    build: { cssCodeSplit: true, minify: 'esbuild' },
    ssr: { noExternal: ['@fontsource-variable/*'] }
  }
});
