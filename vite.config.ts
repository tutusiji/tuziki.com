import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
// import eslintPlugin from 'vite-plugin-eslint'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
    // eslintPlugin({
    //   cache: false,
    //   include: ['src/**/*.vue', 'src/**/*.ts', 'src/**/*.tsx']
    // }),
    Components({
      resolvers: [ElementPlusResolver()], // 自动导入组件
      directoryAsNamespace: true //控制目录结构是否应该反映在组件的命名空间中
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dts: 'src/auto-import.d.ts',
      resolvers: [ElementPlusResolver()]
    }),
    tailwindcss,
    autoprefixer
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
