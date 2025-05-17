// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://pdx-osr.com",
  base: "",
  vite: {
    plugins: [tailwindcss()],
  },
});
