import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'


import Unocss from "unocss/vite";
import { presetUno, presetAttributify, presetIcons } from "unocss";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      // 使用Unocss
      presets: [presetUno(), presetAttributify(), presetIcons()],
    }),
    legacy()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
