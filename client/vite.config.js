// 플러그인들
import vue from '@vitejs/plugin-vue'

// 유틸리티들
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), // transformAssetUrls 없이 vue()만 사용
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  // SCSS 전역 사용
  css: {
    preprocessorOptions: {
      scss: {
        //additionalData: `@import "@/styles/common";`
      },
    }
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false
      }
    },
  },
})
