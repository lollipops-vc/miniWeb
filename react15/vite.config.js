import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic' // 兼容 React 15 的 JSX 处理
    })
  ],
  
  // 构建配置
  build: {
    outDir: 'dist',
    // 相当于 optimization.splitChunks: false
    rollupOptions: {
      output: {
        // 相当于 filename: 'react15.js'
        entryFileNames: 'react15.js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    },
    // 相当于 optimization.minimize: false
    minify: false,
    // 库模式配置
    lib: {
      entry: resolve(__dirname, 'index.js'),
      name: 'react15',
      fileName: 'react15',
      formats: ['umd']
    }
  },
  
  // 开发服务器配置
  server: {
    port: 9002,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    // 相当于 historyApiFallback: true
    historyApiFallback: true,
    hot: true
  },
  
  // 相当于 publicPath
  base: 'http://localhost:9002/',
  
  // 定义全局变量
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }
})