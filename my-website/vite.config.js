import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr() // This allows SVG to be imported as React components
  ],
  resolve: {
    alias: {
      '@': '/src', // Optional: enables absolute imports
    },
  }
});