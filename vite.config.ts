import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
