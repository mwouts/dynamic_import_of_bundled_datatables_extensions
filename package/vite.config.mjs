import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],
  build: {
    cssCodeSplit: false,
    assetsInlineLimit: 100000000,
  },
});
