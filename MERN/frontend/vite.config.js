import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD:frontend/vite.config.ts
  plugins: [react(), tailwindcss()],
    server:{
        proxy:{
            '/api/':{target: 'http://localhost:8080'},
        }
    },
    define: {
        global: 'window',
    }
=======
  plugins: [react(), tailwindcss(),],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
>>>>>>> 7603fb5c9c9d87422d4700b71db4d5c9096f96c7:MERN/frontend/vite.config.js
})
