import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react({
      // React 17+ 使用新的 JSX 转换
      jsxRuntime: 'automatic'
    })
  ],

  // 构建配置
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: 'react17.js',
        chunkFileNames: '[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return '[name].css'
          }
          return '[name].[ext]'
        }
      }
    },
    // 相当于 optimization.minimize: false
    minify: false,
    // 库模式配置
    lib: {
      entry: resolve(__dirname, 'index.js'),
      name: 'react17',
      fileName: 'react17',
      formats: ['umd']
    }
  },

  // 开发服务器配置
  server: {
    port: 9003,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    // 相当于 historyApiFallback: true
    historyApiFallback: true,
    hot: true
  },

  // 相当于 publicPath
  base: 'http://localhost:9003/',

  // 定义全局变量
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  },

  // 解析扩展名
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },

  // 配置 regenerator-runtime
  optimizeDeps: {
    include: ['regenerator-runtime/runtime']
  }
})