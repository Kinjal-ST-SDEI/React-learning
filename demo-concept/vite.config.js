import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  server: {
    watch: {
      // This forces the 'watch' to work on stubborn Windows systems
      usePolling: true,
    },
  },
})
