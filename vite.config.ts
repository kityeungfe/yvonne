import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA()
  ],
  base: "yvonne",
  build: {
    outDir: "build"
  },
  server: {
    port: 3000,
    proxy: {
      '/docs': {
        target: 'https://flowbite.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/docs/, '/docs') // 不可以省略rewrite
      }
    }
  }
})
