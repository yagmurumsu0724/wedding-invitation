import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Relative base path for universal deployment compatibility (GitHub Pages, Vercel, Netlify, Surge)
  server: {
    port: 7777,
    strictPort: true,
    host: true
  }
})
