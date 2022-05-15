import { defineConfig } from 'astro/config';
import lit from '@astrojs/lit';
// https://astro.build/config
export default defineConfig({
	site: 'https://odyssey-theme.littlesticks.dev/', // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
	sitemap: true, // Generate sitemap (set to "false" to disable)
	integrations: [lit()], // Add renderers to the config
});
