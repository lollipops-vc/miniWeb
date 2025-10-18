import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic',
      babel: {
        presets: [
        //   ['@babel/preset-react', { 
        //     runtime: 'classic' 
        //   }]
        ],
      }
    })
  ],
  server: {
    port: 9002,
    host: true,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    // 兼容老浏览器
    target: 'es2015'
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false
      }
    }
  },
  // 解决 CommonJS 模块问题
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  },
})