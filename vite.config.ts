import {defineConfig, LibraryOptions} from "vite";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      name: 'react-videojs-hooks',
      entry: './src/index.tsx',
    }
  }
})
