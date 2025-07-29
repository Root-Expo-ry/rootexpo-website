// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://rootexpo.fi",
  integrations: [
    mdx(),
    sitemap({
      changefreq: "weekly",
      priority: 1.0,
      lastmod: new Date(),
    }),
    tailwind(),
    react(),
    icon(),
  ],
});
