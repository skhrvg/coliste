// noinspection JSUnusedGlobalSymbols - suppresses "exported but not used" warning in WebStorm

import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [vue(), eslintPlugin()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
