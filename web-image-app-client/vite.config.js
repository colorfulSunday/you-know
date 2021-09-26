import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        // 当遇到 /api 路径时，将其转换成 target 的值
        target: 'http://118.31.62.229:8080/',
        // target: 'http://127.0.0.1:8080/',
      },
      '/img': {
        // 当遇到 /api 路径时，将其转换成 target 的值
        target: 'http://118.31.62.229:8080/',
        // target: 'http://127.0.0.1:7001/',
      }
    }
  },
})
