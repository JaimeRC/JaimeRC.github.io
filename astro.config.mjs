import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jaimerc.es',
  output: 'static',
  integrations: [
      icon(),
      sitemap({
        i18n: {
          defaultLocale: 'es',
          locales: {
            es: 'es',
            en: 'en',
          },
        },
        changefreq: 'yearly',
        lastmod: new Date(),
      })
  ],
  i18n: {
    defaultLocale: "es",
    locales: ["es","en"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  buildOptions: {
    sitemap: true,
  },
});