import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import commonjs from '@rollup/plugin-commonjs'
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
    // legacy({
    //   targets: ['defaults', 'not IE 11']
    // })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
})
