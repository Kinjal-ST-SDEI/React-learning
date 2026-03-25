import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 1. Import the new engine

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 2. Add the engine to the pipeline
  ],
  server: {
    watch: {
      // Keep your existing fix for Windows file-watching
      usePolling: true,
    },
  },
})