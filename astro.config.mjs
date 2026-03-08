// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://adineo-cmd.github.io', // ← Must be a full URL with https://
  
  integrations: [
    sitemap(),
  ],
});