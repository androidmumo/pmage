import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/packages/pmage/index.ts'),
      name: 'Pmage',
      // the proper extensions will be added
      fileName: `pmage`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [vue(), dts({
    copyDtsFiles: false, // 是否将源码里的 .d.ts 文件复制到 outputDir
    insertTypesEntry: true, // 是否生成类型声明入口
  })],
})
