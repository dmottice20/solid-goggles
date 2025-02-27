import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import svgr from 'vite-plugin-svgr'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  // Remove the direct tailwindcss configuration here
  // as we'll use postcss.config.js instead
})

