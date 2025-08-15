import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  base: "/", // '/' for custom domain; set '/repo/' if GitHub subpath
  plugins: [react()],
  resolve: { alias: { "@": resolve(__dirname, "src") } },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "pages/about.html"),
        brothers: resolve(__dirname, "pages/brothers.html"),
        events: resolve(__dirname, "pages/events.html"),
        news: resolve(__dirname, "pages/news.html"),
        contacts: resolve(__dirname, "pages/contacts.html"),
      },
    },
  },
});
