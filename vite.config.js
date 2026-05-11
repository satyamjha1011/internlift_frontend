import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  base: process.env.NODE_ENV === 'production' ? process.env.VITE_BASE_URL || '/' : '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    cssCodeSplit: true,
    modulePreload: {
      polyfill: false,
    },
    rollupOptions: {
      output: {
        manualChunks: {
          router: ['react-router-dom'],
          animations: ['framer-motion'],
          icons: ['lucide-react'],
          forms: ['react-hook-form', 'axios'],
        },
      },
    },
  },
})
