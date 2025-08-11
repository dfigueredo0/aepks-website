import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // custom domain root
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
    "process.env": {},         
    global: "window",           
  },
  build: {
    lib: {
      entry: "src/entry.jsx",  
      name: "RecruitmentTrail",
      formats: ["iife", "es"],
      fileName: (format) => `recruitment-trail.${format}.js`,
    },
    outDir: "../assets/recruitment",
    emptyOutDir: true,
    cssCodeSplit: false,
    rollupOptions: {
      output: { assetFileNames: "recruitment-trail.css" },
    },
  },
});