import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import commonjs from '@rollup/plugin-commonjs'

const port = 9005
const name = 'vue3'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          compatConfig: {
            MODE: 2  // 启用 Vue 2 兼容模式
          }
        }
      }
    }),
    vueDevTools(),
    commonjs(),
  ],
  
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  
  build: {
    outDir: 'dist',
    assetsDir: 'static',
    commonjsOptions: {
      transformMixedEsModules: true
    },
    // 微前端库模式
    lib: {
      entry: fileURLToPath(new URL('./src/main.js', import.meta.url)),
      name: name,
      fileName: (format) => `${name}.${format}.js`,
      formats: ['umd']
    },
    rollupOptions: {
      // 外部化 Vue，避免打包进库
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        // 文件命名
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        // UMD 配置
        exports: 'named'
      }
    },
    cssCodeSplit: false
  },
  
  server: {
    port,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  
  base: 'http://localhost:9005',
  
  define: {
    'process.env': {}
  }
})