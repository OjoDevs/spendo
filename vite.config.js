import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Automatically open the browser on server start
    port: 3000, // Specify a custom port
  },
  build: {
    outDir: "dist", // Specify output directory
    sourcemap: true, // Enable sourcemaps for debugging
  },
});
