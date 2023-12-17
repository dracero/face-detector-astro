import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro';
import vercel from "@astrojs/vercel/serverless";
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), 
    AstroPWA({
    mode: 'production',
    base: '/',
    scope: '/',
    includeAssets: ['favicon.svg', 'robots.txt', 'safari-pinned-tab.svg', 'site.webmanifest', 'pwa-192x192.png', 'pwa-512x512.png'],
    registerType: 'autoUpdate',
    manifest: {
      name: 'Astro PWA',
      short_name: 'Astro PWA',
      theme_color: '#ffffff',
      icons: [{
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      }, {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }, {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }]
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,ts,json, mjs}']
    },
    devOptions: {
      enabled: true,
      navigateFallbackAllowlist: [/^\//]
    },
    experimental: {
      directoryAndTrailingSlashHandler: true
    }
  })],
  output: 'server',
  vite: {
    logLevel: 'info',
    define: {
      __DATE__: `'${new Date().toISOString()}'`
    }
  },
  adapter: vercel()
});