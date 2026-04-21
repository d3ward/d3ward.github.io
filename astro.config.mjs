// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icy";

export default defineConfig({
  site: "https://d3ward.github.io",
  output: "static",
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@common": "/src/components/common",
      },
    },
  },
  integrations: [
    icon({
      include: {
        tabler: ["*"], // Include all Tabler icons
        octicon: ["*"], // GitHub Octicons
        "simple-icons": ["*"], // Brand/social icons
      },
    }),
  ],
});
