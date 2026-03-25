import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // This forces the 'watch' to work on stubborn Windows systems
      usePolling: true,
    },
  },
})