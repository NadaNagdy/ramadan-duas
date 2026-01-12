import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Remove base path for Vercel deployment
  // If deploying to GitHub Pages, uncomment and set your repo name:
  // base: '/Ramadanduaa1447/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ai-vendor': ['@google/genai'],
        },
      },
    },
  },
})
