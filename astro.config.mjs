// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://adineo-cmd.github.io',
  
  output: 'static',
  
  integrations: [sitemap()],
});