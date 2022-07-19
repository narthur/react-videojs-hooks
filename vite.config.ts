/// <reference types="vitest" />
import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    environment: "jsdom"
  },
  build: {
    lib: {
      name: 'react-videojs-hooks',
      entry: './src/index.tsx',
    }
  }
})
