import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@core': resolve('src/core')
      }
    },
    plugins: [
      vue({
        template: {
          compilerOptions: {
            // 所有以 mdui- 开头的标签名都是 mdui 组件
            isCustomElement: (tag) => tag.startsWith('mdui-')
          }
        }
      })
    ]
  }
})
