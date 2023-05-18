import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    exclude: ['vue-demi']
  },
  build: {
    outDir: 'lib', // 输出的目录
    lib: {
      entry: path.resolve(__dirname, './src/packages/install.js'), // 入口文件
      name: 'SliderVerify', // 在浏览器umd模式下输出的全局变量
      fileName: (format) => `SliderVerify.${format}.js`, // 由formats决定输出的文件后缀名
      formats: ['es', 'umd'], // 输出ES Module 和 umd
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'vue-demi'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          "vue-demi": 'VueDemi'
        }
      },
    },
  }
})
